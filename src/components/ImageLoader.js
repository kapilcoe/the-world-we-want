import React, { useRef, useState, useEffect } from "react";
import styled, { keyframes, css } from "styled-components";
import PropTypes from "prop-types";

const noop = () => {};
const ZImage = props => {
  const {
    src = "",
    base64 = "",
    ratio = 0,
    container = null,
    alt = "image",
    fit = "cover",
    doPreload = false,
    height = "100%",
    width = "100%",
    className = "",
    onClick = noop,
    srcSet = "",
    fallBack = "https://b.zmtcdn.com/images/placeholder_200.png?output-quality=70",
    isBackground = false,
    bgGradient = null,
    customZimageComponent = null,
    loadingComponent = null,
    noTransform = false
  } = props;
  const ref = useRef();

  const [imgSrc, setSrc] = useState("");
  // const [imgSrcSet, setImgSrcSet] = useState("");
  const [isImageLoaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const handleOnImageLoad = () => setLoaded(true);
  const handleError = () => {
    //currently not being used
    setError(true);
    //TODO::show an error image
    if (!!imgSrc && imgSrc !== fallBack) setSrc(fallBack);
  };

  // show shimmer again when src changes
  useEffect(() => {
    if (isBackground && !!imgSrc) {
      const img = new Image();
      img.onload = handleOnImageLoad;
      img.onerror = handleError;
      img.src = imgSrc;
    }

    if (isImageLoaded) setLoaded(false);
  }, [imgSrc]);

  useEffect(() => {
    let observer;
    let currentNode;
    if (!doPreload && "IntersectionObserver" in global) {
      const intersected = ([entry]) => {
        const { isIntersecting = false } = entry;
        if (isIntersecting && imgSrc !== src) {
          setSrc(src);
          // setImgSrcSet(srcSet);
        }
      };

      const options = {
        root: container,
        threshold: ratio
      };

      observer = new IntersectionObserver(intersected, options);
      currentNode = ref.current;
      if (currentNode) {
        observer.observe(currentNode);
    }
    } else {
      setSrc(src);
    }

    return () => {
      typeof observer !== "undefined" &&
        observer.unobserve &&
        currentNode &&
        observer.unobserve(currentNode);
    };
  }, [src]);

  const ZimageComponent = isBackground
    ? customZimageComponent || ZImage.BgDiv
    : ZImage.img;

  const LoaderComponent = base64
    ? ZImage.base64
    : loadingComponent || ZImage.Shimmer;

  return (
    <ZImage.Container
      ref={ref}
      height={height}
      width={width}
      className={className}
      onClick={onClick}
    >
      <LoaderComponent isLoaded={!!imgSrc && isImageLoaded} src={base64} />

      <ZimageComponent
        alt={alt}
        src={imgSrc}
        isLoaded={!!imgSrc && isImageLoaded}
        onLoad={handleOnImageLoad}
        loading={!doPreload && "lazy"}
        fit={fit}
        onError={handleError}
        noTransform={noTransform}
        // srcSet={srcSet}
        // sizes={props.sizes}
      />
    </ZImage.Container>
  );
};

ZImage.propTypes = {
  src: PropTypes.string,
  base64: PropTypes.string,
  ratio: PropTypes.number,
  container: PropTypes.node,
  alt: PropTypes.string.isRequired,
  fit: PropTypes.oneOf([
    "cover",
    "contain",
    "fill",
    "inherit",
    "initial",
    "none",
    "scale-down",
    "unset"
  ]),
  doPreload: PropTypes.bool,
  height: PropTypes.string,
  width: PropTypes.string,
  maxHeight: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  /** fallback image url, defaults to https://b.zmtcdn.com/images/placeholder_200.png?output-quality=70 */
  fallBack: PropTypes.string,
  isBackground: PropTypes.bool,
  bgGradient: PropTypes.string,
  customZimageComponent: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func
  ]),
  loadingComponent: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  noTransform: PropTypes.bool
};

ZImage.Container = styled.div`
  position: relative;
  max-width: 100%;
  width: ${props => props.width};
  height: ${props => (props.height ? props.height : "auto")};
  overflow: hidden;
`;

const shimmerAnimation = keyframes`
  0% { background-position: -80vw 0; }
  100% { background-position: 80vw 0; }
`;

ZImage.base64 = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: ${props => (props.isLoaded ? 0 : 1)};
  will-change: transform, opacity;
  border-radius: inherit;
  transition: opacity 0.25s ease-in;
`;

ZImage.Shimmer = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background: #F8F8F8  ;
  background-image: linear-gradient(
    to right,
    #F8F8F8 0%,
    #FFF 10%,
    #F8F8F8 40%,
    #F8F8F8 100%
  );
  background-repeat: no-repeat;
  opacity: ${props => (props.isLoaded ? 0 : 1)};
  transition: opacity 0.25s ease-out;
  will-change: opacity;
  border-radius: inherit;
  animation: ${shimmerAnimation} 1.5s infinite linear forwards;
`;
ZImage.BgDiv = styled.div`
  width: 100%;
  height: 100%;

  transform: ${props =>
    props.isLoaded || props.noTransform ? "none" : "scale(0.9)"};
  opacity: ${props => (props.isLoaded ? 1 : 0)};
  will-change: transform, opacity;
  border-radius: inherit;
  transition: opacity 0.25s ease, transform 0.25s ease;
  background-size: ${props => props.fit || "cover"};
  background-position: center center;
  background-repeat: no-repeat;
  background-image: ${props =>
    props.url &&
    (props.bgGradient
      ? `${props.bgGradient},url(${props.url})`
      : `url(${props.url})`)};
`;

ZImage.img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: ${props => props.fit};
  transform: ${props =>
    props.isLoaded || props.noTransform ? "none" : "scale(0.9)"};
  opacity: ${props => (props.isLoaded ? 1 : 0)};
  will-change: transform, opacity;
  border-radius: inherit;
  transition: opacity 0.25s ease, transform 0.25s ease;
  /*
Avoid empty images to appear as broken
*/
  img:not([src]):not([srcset]) {
    visibility: hidden;
  }

  /*
Fixes the Firefox anomaly while images are loading
*/
  @-moz-document url-prefix() {
    img:-moz-loading {
      visibility: hidden;
    }
  }
`;

export default ZImage;
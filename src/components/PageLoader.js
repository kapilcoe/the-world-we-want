import React, { useEffect, useState, useRef } from 'react';
import { render } from 'react-dom'
import { animated, useTransition, useSpring, useChain, config } from 'react-spring'
import styled, { createGlobalStyle } from 'styled-components'
import shuffle from 'lodash/shuffle';
import SDGWHEEL  from '../images/SDG-WHEEL.png'


const data = [
    {
      name: 'Rare Wind',
      description: '#a8edea → #fed6e3',
      css: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
      height: 30,
      text: 'SDG1'
    },
    {
      name: 'Saint Petersburg',
      description: '#f5f7fa → #c3cfe2',
      css: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
      height: 30,
      text: 'SDG2'
    },
    {
      name: 'Deep Blue',
      description: '#e0c3fc → #8ec5fc',
      css: 'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)',
      height: 30,
      text: 'SDG3'
    },
    {
      name: 'Ripe Malinka',
      description: '#f093fb → #f5576c',
      css: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      height: 40,
      text: 'SDG4'
    },
    {
      name: 'Perfect White',
      description: '#fdfbfb → #ebedee',
      css: 'linear-gradient(135deg, #E3FDF5 0%, #FFE6FA 100%)',
      height: 30,
      text: 'SDG5'
    },
    {
      name: 'Near Moon',
      description: '#5ee7df → #b490ca',
      css: 'linear-gradient(135deg, #5ee7df 0%, #b490ca 100%)',
      height: 30,
      text: 'SDG6'
    },
    {
      name: 'Wild Apple',
      description: '#d299c2 → #fef9d7',
      css: 'linear-gradient(135deg, #d299c2 0%, #fef9d7 100%)',
      height: 30,
      text: 'SDG7'
    },
    {
      name: 'Ladoga Bottom',
      description: '#ebc0fd → #d9ded8',
      css: 'linear-gradient(135deg, #ebc0fd 0%, #d9ded8 100%)',
      height: 30,
      text: 'SDG8'
    },
    {
      name: 'Sunny Morning',
      description: '#f6d365 → #fda085',
      css: 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)',
      height: 30,
      text: 'SDG9'
    },
    {
      name: 'Lemon Gate',
      description: '#96fbc4 → #f9f586',
      css: 'linear-gradient(135deg, #96fbc4 0%, #f9f586 100%)',
      height: 30,
      text: 'SDG10'
    },
    {
      name: 'Salt Mountain',
      description: ' #FFFEFF → #D7FFFE',
      css: 'linear-gradient(135deg, #FFFEFF 0%, #D7FFFE 100%)',
      height: 30,
      text: 'SDG11'
    },
    {
      name: 'New York',
      description: ' #fff1eb → #ace0f9',
      css: 'linear-gradient(135deg, #fff1eb 0%, #ace0f9 100%)',
      height: 30,
      text: 'SDG12'
    },
    {
      name: 'Soft Grass',
      description: ' #c1dfc4 → #deecdd',
      css: 'linear-gradient(135deg, #c1dfc4 0%, #deecdd 100%)',
      height: 30,
      text: 'SDG13'
    },
    {
      name: 'Japan Blush',
      description: ' #ddd6f3 → #faaca8',
      css: 'linear-gradient(135deg, #ddd6f3 0%, #faaca8 100%, #faaca8 100%)',
      height: 30,
      text: 'SDG14'
    },
    {
        name: 'New York 1',
        description: ' #fff1eb → #ace0f9',
        css: 'linear-gradient(135deg, #fff1eb 0%, #ace0f9 100%)',
        height: 30,
        text: 'SDG15'
      },
      {
        name: 'Soft Grass 1',
        description: ' #c1dfc4 → #deecdd',
        css: 'linear-gradient(135deg, #c1dfc4 0%, #deecdd 100%)',
        height: 30,
        text: 'SDG16'
      },
      {
        name: 'Japan Blush 1',
        description: ' #ddd6f3 → #faaca8',
        css: 'linear-gradient(135deg, #ddd6f3 0%, #faaca8 100%, #faaca8 100%)',
        height: 30,
        text: 'SDG17'
      }
];
  
const pageWrapperStyle = {
    position: 'fixed',
    zIndex: 3,
    height: '100vh', 
    width: '100vw',
    backgroundColor: '#FFF',
    display:'flex',
    alignItems: 'center',
    justifyContent: 'center'
}

const loaderStyle = {width: '100vw', display: 'flex', justifyContent: 'center', alignItems:'center'};
const loaderTextStyle = {
  ...loaderStyle,
  color: '#181818',
  fontFamily: 'Tusker-5500',
  marginTop: '20px'
}

export default () => {
    const [showLoader, setShowLoader] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setShowLoader(false);
        }, 1000);
    }, [])

    return <>
        {showLoader && <div style={pageWrapperStyle}><SpinningWheel/></div>}
    </>
}

const SpinningWheel = ({}) => {
  return <div>
    <div style={loaderStyle}><img className="spinning-wheel" height='100px' width='100px' src={SDGWHEEL}/></div>
    <div style={loaderTextStyle}>
    We are going to go live soon, till then check out our home page!
    </div>
    </div>
}


// const AnimatedLoader = () => {
//     //useInterval(() => {set(!open)}, 1500);
//   const [rows, set] = useState(data)
//   useEffect(() => void setInterval(() => set(shuffle), 2000), [])

//   let height = 0
//   const transitions = useTransition(
//     rows.map(data => ({ ...data, y: (height += data.height) - data.height })),
//     d => d.name,
//     {
//       from: { height: 0, opacity: 0 },
//       leave: { height: 0, opacity: 0 },
//       enter: ({ y, height }) => ({ y, height, opacity: 1 }),
//       update: ({ y, height }) => ({ y, height })
//     }
//   )

//     return (
//         <div style={{height: '25%', width: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', transform: 'rotateZ(90deg)'}}>
//         <div class="list" style={{ height }}>
//       {transitions.map(({ item, props: { y, ...rest }, key }, index) => (
//         <animated.div
//           key={key}
//           class="card"
//           style={{ zIndex: data.length - index, transform: y.interpolate(y => `translate3d(0,${y}px,0)`), ...rest }}>
//           <div class="cell">
//             <div class="details" style={{ backgroundImage: item.css }}>{item.text}</div>
//           </div>
//         </animated.div>
//       ))}
//     </div>
//         </div>
//     )
// }


// const Container = styled(animated.div)`
//   position: relative;
//   display: grid;
//   grid-template-columns: repeat(4, minmax(100px, 1fr));
//   grid-gap: 25px;
//   padding: 25px;
//   background: white;
//   border-radius: 5px;
//   cursor: pointer;
//   will-change: width, height;
// `

// const Item = styled(animated.div)`
//   width: 100%;
//   height: 100%;
//   background: white;
//   border-radius: 5px;
//   will-change: transform, opacity;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   color: #FFF
// `

// const ItemDiv = styled.div`
//     width: 100%;
//     height: 100%;
//     display: flex,
//   align-items: center,
//   justify-content: center,
//   color: #FFF
// `
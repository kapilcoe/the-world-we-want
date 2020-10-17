import VanillaTilt from 'vanilla-tilt';

export const bannerZoomIn = () => {
    window.addEventListener('scroll', function(){
        var scroll = window.scrollY;
        document.querySelector('.banner-image-img').style.width = (100 + scroll/10) + "%";
    }
    )
}
export const imagetilt = () => {
    VanillaTilt.init(document.querySelector(".whatwedo-area-l"), {
        max: 4,
        speed: 800
    });
}

export const imagetiltright = () => {
    VanillaTilt.init(document.querySelector(".whatwedo-area-r"), {
        max: 4,
        speed: 800
    });
}

export const scrollscreenshow = () => {
    // Detect request animation frame
    var scroll = window.requestAnimationFrame ||
                // IE Fallback
    function(callback){ window.setTimeout(callback, 1000/60)};
    var elementsToShow = document.querySelectorAll('.show-on-scroll'); 

    function loop() {

    elementsToShow.forEach(function (element) {
        if (isElementInViewport(element)) {
        element.classList.add('is-visible');
        } else {
        element.classList.remove('is-visible');
        }
    });

    scroll(loop);
    }

    // Call the loop for the first time
    loop();

    // Helper function from: http://stackoverflow.com/a/7557433/274826
    function isElementInViewport(el) {
    // special bonus for those using jQuery
    // if (typeof jQuery === "function" && el instanceof jQuery) {
    //     el = el[0];
    // }
    var rect = el.getBoundingClientRect();
    return (
        (rect.top <= 0
        && rect.bottom >= 0)
        ||
        (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.top <= (window.innerHeight || document.documentElement.clientHeight))
        ||
        (rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    );
    }
}
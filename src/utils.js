import VanillaTilt from 'vanilla-tilt';

export const bannerZoomIn = () => {
    window.addEventListener('scroll', function(){
        var scroll = window.scrollY;
        document.querySelector('.banner-image-img').style.width = (100 + scroll/10) + "%";
    }
    )
}
export const imagetilt = () => {
    VanillaTilt.init(document.querySelector(".whatwedo-area"), {
        max: 4,
        speed: 800
    });
}
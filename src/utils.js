export const bannerZoomIn = () => {
    window.addEventListener('scroll', function(){
        var scroll = window.scrollY;
        document.querySelector('.banner-image-img').style.width = (100 + scroll/10) + "%";
    }
    )
}
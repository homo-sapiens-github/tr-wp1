document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '.splide', {
        type: "loop",
        speed: 2000,
        direction: 'ltr',
        width: "100vw",
        height: "100vh",
        autoplay: {
            delay: 6000,
            disableOnInteraction: false,
        },
        interval:6000,
        arrows:true,
        cover:true,
    } ).mount();
} );


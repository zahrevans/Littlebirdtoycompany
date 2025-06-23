document.addEventListener('DOMContentLoaded', function () {
    new Splide('#image-carousel', {
        type: 'loop',
        drag: 'free',
        snap: true,
        perPage: 3,
        pagination: true,
        arrows: true,
        breakpoints: {
            768: {
                perPage: 2,
            },
            576: {
                perPage: 1,
            }
        }
    }).mount();
});
const swiper = new Swiper('.swiper', {

    direction: 'horizontal',
    loop: false,
    spaceBetween: 20,
    breakpoints: {
        768: {
            enabled: false,
            width: 224,
        },
    },
    width: 240,

    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
    },


});

const swiperTech = new Swiper('.swiper-tech', {

    direction: 'horizontal',
    loop: false,
    spaceBetween: 20,
    breakpoints: {
        768: {
            enabled: false,
            width: 224,
        },
    },
    width: 240,

    pagination: {
        el: '.swiper-pagination-tech',
        type: 'bullets',
        clickable: true
    },


});

const swiperServices = new Swiper('.swiper-services', {

    direction: 'horizontal',
    loop: false,
    spaceBetween: 50,
    breakpoints: {
        768: {
            enabled: false,
            width: 224,
        },
    },
    width: 240,

    pagination: {
        el: '.swiper-pagination-services',
        type: 'bullets',
        clickable: true
    },
});

const swiperSlide = document.querySelectorAll('.swiper-slide');

if (window.innerWidth > 767) {
    swiperSlide.forEach(element => {
        element.style.width = 'fit-content';
    });
}

if (this.window.innerWidth < 767) {
    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        spaceBetween: 20,
        slidesPerView: 'auto',
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        init: true
    })
    const swiperTech = new Swiper('.swiper-tech', {
        direction: 'horizontal',
        spaceBetween: 20,
        slidesPerView: 'auto',
        pagination: {
            el: '.swiper-pagination-tech',
            clickable: true
        },
        init: true
    })
    const swiperServices = new Swiper('.swiper-services', {
        direction: 'horizontal',
        spaceBetween: 20,
        slidesPerView: 'auto',
        pagination: {
            el: '.swiper-pagination-services',
            clickable: true
        },
        init: true
    })
}

const swiperSlide = document.querySelectorAll('.swiper-slide');

if (window.innerWidth > 767) {
    swiperSlide.forEach(element => {
        element.style.width = 'fit-content';
    });
}

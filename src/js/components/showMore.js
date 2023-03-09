
const brandWrapper = document.querySelector('.swiper-wrapper-repair');
const techWrapper = document.querySelector('.swiper-wrapper-tech')
const textWrapper = document.querySelector('.main__description-text-wrapper')

const buttonShowAllText = document.querySelector('.main__description-button')
const buttonShowAllBrand = document.querySelector('.repair-button-brand')
const buttonShowAllTech = document.querySelector('.repair-button-tech')

const buttonTextBrand = document.querySelector('.main-repair__button-text')
const buttonTextTech = document.querySelector('.text-tech')
const buttonTextDescription = document.querySelector('.text-description')


buttonShowAllText.addEventListener('click', function () {
    if (textWrapper.classList.contains('text-wrapper-overflow')) {
        textWrapper.classList.remove('text-wrapper-overflow');
        buttonTextDescription.textContent = 'Читать далее'
    } else {
        textWrapper.classList.add('text-wrapper-overflow');
        buttonTextDescription.textContent = 'Скрыть'
    }
})


buttonShowAllBrand.addEventListener('click', function () {
    if (brandWrapper.classList.contains('main-repair__swiper--overflow--hidden')) {
        brandWrapper.classList.remove('main-repair__swiper--overflow--hidden')
        buttonTextBrand.textContent = 'Скрыть'
    } else {
        brandWrapper.classList.add('main-repair__swiper--overflow--hidden')
        buttonTextBrand.textContent = 'Показать всё'
    }
})

buttonShowAllTech.addEventListener('click', function () {
    if (techWrapper.classList.contains('main-repair__swiper--overflow--hidden')) {
        techWrapper.classList.remove('main-repair__swiper--overflow--hidden')
        buttonTextTech.textContent = 'Скрыть'
    } else {
        techWrapper.classList.add('main-repair__swiper--overflow--hidden')
        buttonTextTech.textContent = 'Показать всё'
    }
})
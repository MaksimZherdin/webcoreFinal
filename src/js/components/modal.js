
const btnModalChat = document.querySelectorAll('.modal-chat');
const btnModalCall = document.querySelectorAll('.modal-call');
const btnIconBurger = document.querySelector('.icon-burger');
const btnIconBurgerClose = document.querySelectorAll('.icon-burger-close');

const modalOverlayMenu = document.querySelector('.modal-overlay-menu')
const modalOverlayChat = document.querySelector('.modal-overlay-chat')
const modalOverlayCall = document.querySelector('.modal-overlay-call')

const modalOverlay = document.querySelectorAll('.modal-overlay');
const sidebar = document.querySelector('.sidebar-modal')

btnIconBurger.addEventListener('click', function () {
    modalOverlayMenu.style.display = 'block'
})

btnIconBurgerClose.forEach(el => {
    el.addEventListener('click', function () {
        if (modalOverlayCall.style.display = 'block') {
            modalOverlayCall.style.display = 'none'
        }
        if (modalOverlayChat.style.display = 'block') {
            modalOverlayChat.style.display = 'none'
        }
        if (modalOverlayMenu.style.display = 'block' && window.innerWidth < 1120) {
            modalOverlayMenu.style.display = 'none';
        }
    })
});

btnModalCall.forEach(el => {
    el.addEventListener('click', function () {
        modalOverlayCall.style.display = 'block'
    })
});

btnModalChat.forEach(el => {
    el.addEventListener('click', function () {
        modalOverlayChat.style.display = 'block'
    })
});


modalOverlay.forEach(element => {
    element.addEventListener('click', function (evt) {
        if (evt.target.classList.contains('modal-overlay')) {
            modalOverlayCall.style.display = 'none';
            modalOverlayChat.style.display = 'none';
            if (window.innerWidth < 1119) {
                modalOverlayMenu.style.display = 'none';
            }
        }
    })
});
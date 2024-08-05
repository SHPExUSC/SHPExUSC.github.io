/****************************************\
|***         SHPE USC Website         ***|
|***                                  ***|
|*** Created By: Pushpendra Shekhawat ***|
|***      Copyright @ 07/31/2024      ***|
\****************************************/

const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active');
})

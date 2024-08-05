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

document.addEventListener('DOMContentLoaded', function() {
    const menu = document.querySelector('.navbar__menu');
    const menuLinks = document.querySelector('.navbar__menu');

    menu.addEventListener('click', function() {
        menu.classList.toggle('is-active');
        menuLinks.classList.toggle('active');
    });

    const clickables = document.querySelectorAll('.clickable');
    const contents = document.querySelectorAll('.content');

    clickables.forEach((clickable, index) => {
        clickable.addEventListener('click', () => {
            const contentToShow = document.getElementById(`content${index + 1}`);
            if (contentToShow.style.display === 'block') {
                contentToShow.style.display = 'none'; // Hide if already visible
            } else {
                contents.forEach(content => content.style.display = 'none'); // Hide all content
                contentToShow.style.display = 'block'; // Show the clicked content
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const clickables = document.querySelectorAll('.clickable');
    const contents = document.querySelectorAll('.content');

    clickables.forEach((clickable, index) => {
        clickable.addEventListener('click', () => {
            const contentToShow = document.getElementById(`content${index + 1}`);
            if (contentToShow.style.display === 'block') {
                contentToShow.style.display = 'none'; // Hide if already visible
            } else {
                contents.forEach(content => content.style.display = 'none'); // Hide all content
                contentToShow.style.display = 'block'; // Show the clicked content
            }
        });
    });
});
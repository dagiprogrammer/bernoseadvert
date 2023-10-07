//ham menu
const hamBtn = document.getElementById('ham-btn');
const hamMenu = document.getElementById('main-menu');

hamBtn.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    hamBtn.classList.toggle('active');
})

//navigation menus dropdown
const mobileBtn = document.getElementById('mobile-open')
nav = document.getElementById('nav-bar-links')
mobileBtnExit = document.getElementById('mobile-exit');

mobileBtn.addEventListener('click', () => {
    nav.classList.add('menu-btn');
    mobileBtn.classList.add('display_none');
})
mobileBtnExit.addEventListener('click', () => {
    nav.classList.remove('menu-btn');
    mobileBtn.classList.remove('display_none');
})

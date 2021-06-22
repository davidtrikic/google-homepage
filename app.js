const appsButton = document.getElementById('apps-button');
const appsMenu = document.getElementById('apps-menu');

appsButton.addEventListener('click', () => {
if(window.getComputedStyle(appsMenu).display == 'none') appsMenu.style.display = 'block'
    else appsMenu.style.display = 'none'
})
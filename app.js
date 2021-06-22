const appsButton = document.getElementById('apps-button');
const appsMenu = document.getElementById('apps-menu');
const main = document.querySelector('main');

appsButton.addEventListener('click', () => {
if(window.getComputedStyle(appsMenu).display == 'none') 
    { 
        appsMenu.style.display = 'block';
        appsButton.style.backgroundColor = "#3c404314";
    }
    else { 
        appsMenu.style.display = 'none';
        appsButton.style.backgroundColor = "#fff";
    }
});

main.addEventListener('click', () => {
    if(window.getComputedStyle(appsMenu).display == 'block') 
    {
        appsMenu.style.display = 'none';
        appsButton.style.backgroundColor = "#fff";
    }
});

const appsButton = document.getElementById('apps-button');
const settingsButton = document.getElementById('settings-button');
const appsMenu = document.getElementById('apps-menu');
const settingsMenu = document.getElementById('settings-menu');
const main = document.querySelector('main');
const themeToggler = document.getElementById('theme-toggler');

// Apps button
appsButton.addEventListener('click', () => {
if (window.getComputedStyle(appsMenu).display == 'none') { 
        appsMenu.style.display = 'block';
        appsButton.style.backgroundColor = "var(--clr-apps-button_hover)";
    }
    else { 
        appsMenu.style.display = 'none';
        appsButton.style.backgroundColor = "var(--clr-background)";
    }
});

// Settings button
settingsButton.addEventListener('click', () => {
    if (window.getComputedStyle(settingsMenu).display == 'none')    
        settingsMenu.style.display = 'block';
    else    settingsMenu.style.display = 'none';
});

// Remove menus if clicked outside of menu area
main.addEventListener('click', () => {
    if (window.getComputedStyle(appsMenu).display == 'block') { 
        appsMenu.style.display = 'none';
        appsButton.style.backgroundColor = "var(--clr-background)";
    }
    if (window.getComputedStyle(settingsMenu).display == 'block') 
        settingsMenu.style.display = 'none';
});

// Theme toggler 

themeToggler.addEventListener('click', () => {
    if (!document.documentElement.hasAttribute('data-theme')) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
    else {
        document.documentElement.removeAttribute('data-theme');
        }
});

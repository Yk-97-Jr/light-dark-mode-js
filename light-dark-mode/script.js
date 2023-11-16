const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = setElement('nav');
const toggleIcon = setElement('toggle-icon');
const image1 = setElement('image1');
const image2 = setElement('image2');
const image3 = setElement('image3');
const textBox = setElement('text-box');
const darkTheme = 'dark';
const lightTheme = 'light';

function setElement(theId){
    return document.getElementById(`${theId}`);
}

function imageMode(color) {
    image1.src = `img/undraw_proud_coder_${color}.svg`;
    image2.src = `img/undraw_feeling_proud_${color}.svg`;
    image3.src = `img/undraw_conceptual_idea_${color}.svg`;
}

function toggleLightDarkMode(isDark) {
    nav.style.backgroundColor = isDark === 'dark' ? 'rgb(0 0 0 /50%)' : 'rgb( 255 255 255 / 50%)';
    textBox.style.backgroundColor = isDark === 'dark' ? 'rgb( 255 255 255 / 50%)' : 'rgb(0 0 0 /50%)';
    toggleIcon.children[0].textContent = isDark === 'dark' ? `${darkTheme} Mode` : `${lightTheme} Mode`;
    isDark === 'dark' ? toggleIcon.children[1].classList.replace('fa-sun','fa-moon') : toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
    isDark === 'dark' ? imageMode(darkTheme) : imageMode(lightTheme);
}

//Switch Theme Dynamically
function switchTheme(event) {
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', darkTheme);
        localStorage.setItem('theme',darkTheme);
        toggleLightDarkMode(darkTheme);
    } else {
        document.documentElement.setAttribute('data-theme',lightTheme);
        localStorage.setItem('theme',lightTheme);
        toggleLightDarkMode(lightTheme);
    }
}

//Event Listener
toggleSwitch.addEventListener('change',switchTheme);

const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.documentElement.setAttribute('data-theme',currentTheme);

    if (currentTheme === darkTheme) {
        toggleSwitch.checked = true;
        toggleLightDarkMode(darkTheme);
    }
}  
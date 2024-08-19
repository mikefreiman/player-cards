// Animate on Scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

// Theme Switch
const themeSwitch = document.getElementById('themeSwitch');
const theme = document.querySelector('.theme');

function toggleTheme() {
    if (themeSwitch.checked == true) {
        theme.classList.add('enhanced');
    } else {
        theme.classList.remove('enhanced');
    }
}

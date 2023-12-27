document.addEventListener('DOMContentLoaded', function () {
    const themeSwitch = document.getElementById('theme-toggle');

    themeSwitch.addEventListener('click', function () {
        document.body.classList.toggle('light-theme');
        document.body.classList.toggle('dark-theme');
        updateThemeButtonText();
    });

    function updateThemeButtonText() {
        const themeButtonText = document.body.classList.contains('light-theme') ? 'Modo Claro' : 'Modo Escuro';
        themeSwitch.querySelector('.theme-text').textContent = themeButtonText;
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const sobreMimLink = document.querySelector('a[href="#sobre-mim"]');

    sobreMimLink.addEventListener('click', function (event) {
        event.preventDefault();

        const sobreMimSection = document.getElementById('sobre-mim');
        const offset = sobreMimSection.getBoundingClientRect().top + window.scrollY;

        window.scrollTo({
            top: offset,
            behavior: 'smooth',
            duration: 1000
        });
    });
});


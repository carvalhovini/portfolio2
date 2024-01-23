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

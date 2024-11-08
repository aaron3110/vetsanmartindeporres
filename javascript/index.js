document.addEventListener('DOMContentLoaded', function() {
    const elementsToAnimate = document.querySelectorAll('section, img, h1, h2, h3, p, div, .overlay, .header-text, header');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                if (entry.target.tagName === 'IMG' || entry.target.tagName === 'DIV' || entry.target.tagName === 'SECTION' || entry.target.classList.contains('overlay') || entry.target.classList.contains('header-text') || entry.target.tagName === 'HEADER') {
                    entry.target.classList.add('fade-in');
                } else {
                    entry.target.classList.add('slide-up');
                }
                if (entry.target.tagName === 'HEADER') {
                    entry.target.classList.add('slide-down');
                }
            } else {
                entry.target.classList.remove('animated', 'fade-in', 'slide-up', 'slide-down');
            }
        });
    });

    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const mobileNavToggle = document.querySelector(".mobile-nav-toggle");
    const sideMenu = document.querySelector(".side-menu");

    mobileNavToggle.addEventListener("click", function() {
        if (sideMenu.classList.contains('open')) {
            sideMenu.classList.remove('open');
            sideMenu.classList.add('close');
        } else {
            sideMenu.classList.remove('close');
            sideMenu.classList.add('open');
            sideMenu.style.display = 'flex'; // Asegúrate de que el menú sea visible al abrir
        }
    });

    sideMenu.addEventListener('animationend', function(event) {
        if (event.animationName === 'slideOut') {
            sideMenu.style.display = 'none'; // Oculta el menú después de la animación de cierre
        }
    });

    document.addEventListener("click", function(event) {
        if (!sideMenu.contains(event.target) && !mobileNavToggle.contains(event.target)) {
            if (sideMenu.classList.contains('open')) {
                sideMenu.classList.remove('open');
                sideMenu.classList.add('close');
            }
        }
    });
});
var swiper = new Swiper(".slide-content", {
    slidesPerView: 1,
    spaceBetween: 25,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    speed: 1000,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1, // Mostrar solo una carta en pantallas pequeñas
            slidesPerGroup: 1, // Agrupar de una en una
        },
        520: {
            slidesPerView: 2,
            slidesPerGroup: 2,
        },
        950: {
            slidesPerView: 3,
            slidesPerGroup: 3,
        },
    },
});
document.addEventListener('DOMContentLoaded', (event) => {
    const videos = document.querySelectorAll('.historias-container video');

    // Añadir evento 'ended' a cada video para reproducir el siguiente
    videos.forEach((video, index) => {
        video.addEventListener('ended', () => {
            const nextVideo = videos[(index + 1) % videos.length];
            nextVideo.play();
        });
    });

    // Pausar otros videos cuando uno se reproduce
    videos.forEach(video => {
        video.addEventListener('play', function() {
            videos.forEach(v => {
                if (v !== video) {
                    v.pause();
                }
            });
        });
    });
});

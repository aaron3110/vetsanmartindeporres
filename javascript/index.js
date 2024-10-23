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
const doctors = document.querySelectorAll('.doctor');
let currentIndex = 0;
let autoSlideInterval;

document.getElementById('prevBtn').addEventListener('click', () => {
    doctors[currentIndex].classList.remove('active');
    doctors[currentIndex].classList.add('doctor-leave');
    currentIndex = (currentIndex - 1 + doctors.length) % doctors.length;
    doctors[currentIndex].classList.remove('doctor-leave');
    doctors[currentIndex].classList.add('doctor-enter');
    setTimeout(() => {
        doctors[currentIndex].classList.remove('doctor-enter');
        doctors[currentIndex].classList.add('active');
    }, 500);
    updateView();
});

document.getElementById('nextBtn').addEventListener('click', () => {
    doctors[currentIndex].classList.remove('active');
    doctors[currentIndex].classList.add('doctor-leave');
    currentIndex = (currentIndex + 1) % doctors.length;
    doctors[currentIndex].classList.remove('doctor-leave');
    doctors[currentIndex].classList.add('doctor-enter');
    setTimeout(() => {
        doctors[currentIndex].classList.remove('doctor-enter');
        doctors[currentIndex].classList.add('active');
    }, 500);
    updateView();
});

function updateView() {
    updateProgressBar();
    resetAutoSlide();
}

function updateProgressBar() {
    const progress = document.querySelector('.progress');
    const progressPercentage = (currentIndex / doctors.length) * 100;
    progress.style.width = `${progressPercentage}%`;
}

function autoSlide() {
    doctors[currentIndex].classList.remove('active');
    doctors[currentIndex].classList.add('doctor-leave');
    currentIndex = (currentIndex + 1) % doctors.length;
    doctors[currentIndex].classList.remove('doctor-leave');
    doctors[currentIndex].classList.add('doctor-enter');
    setTimeout(() => {
        doctors[currentIndex].classList.remove('doctor-enter');
        doctors[currentIndex].classList.add('active');
    }, 500);
    updateView();
}

function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(autoSlide, 7000);
}

// Inicializar
doctors[currentIndex].classList.add('active');
updateView();
resetAutoSlide();

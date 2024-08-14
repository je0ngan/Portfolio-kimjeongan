document.addEventListener('mousemove', function(event) {
    const light = document.querySelector('.light');
    light.style.left = `${event.clientX - light.offsetWidth / 2}px`;
    light.style.top = `${event.clientY - light.offsetHeight / 2}px`;
});

// scripts.js

document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector('.skills-container');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    let currentIndex = 0;
    const itemsToShow = 3; // 한 번에 보여줄 항목 수
    const totalItems = document.querySelectorAll('.skill').length;
    const totalSlides = Math.ceil(totalItems / itemsToShow); // 총 슬라이드 수

    function updateSlider() {
        const offset = -currentIndex * (100 / totalSlides); // 슬라이더 이동 거리
        container.style.transform = `translateX(${offset}%)`;
    }

    prevBtn.addEventListener('click', function () {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = totalSlides - 1; // 처음으로 돌아가면 끝으로 이동
        }
        updateSlider();
    });

    nextBtn.addEventListener('click', function () {
        if (currentIndex < totalSlides - 1) {
            currentIndex++;
        } else {
            currentIndex = 0; // 끝으로 가면 처음으로 이동
        }
        updateSlider();
    });

    updateSlider(); // 초기 슬라이더 설정
});

// 메뉴바
// scripts/main.js

document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.gnb a');

    function changeNavLinkState() {
        let index = sections.length;

        while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

        navLinks.forEach((link) => link.classList.remove('gnb-active'));
        navLinks[index].classList.add('gnb-active');
    }

    changeNavLinkState();
    window.addEventListener('scroll', changeNavLinkState);
});

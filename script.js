const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

let current = 0;
let timer;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });

  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });

  current = index;
}

function nextSlide() {
  const next = (current + 1) % slides.length;
  showSlide(next);
}

function prevSlide() {
  const prev = (current - 1 + slides.length) % slides.length;
  showSlide(prev);
}

function startAutoPlay() {
  clearInterval(timer);
  timer = setInterval(nextSlide, 20000);
}

nextBtn.addEventListener('click', () => {
  nextSlide();
  startAutoPlay();
});

prevBtn.addEventListener('click', () => {
  prevSlide();
  startAutoPlay();
});

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    showSlide(index);
    startAutoPlay();
  });
});

showSlide(0);
startAutoPlay();

const startBtn = document.getElementById('startBtn');
const introScreen = document.getElementById('introScreen');
const bgMusic = document.getElementById('bgMusic');

startBtn.addEventListener('click', () => {
  bgMusic.play();
  introScreen.classList.add('hide');
});
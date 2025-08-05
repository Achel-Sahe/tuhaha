  // Carousel dengan auto-slide
  const slides = document.querySelectorAll('.slide');
  const container = document.querySelector('.slides-container');
  const prevBtn = document.querySelector('.carousel-btn.prev');
  const nextBtn = document.querySelector('.carousel-btn.next');
  let current = 0;
  let timer;
  const delay = 5000;

  function updateCarousel() {
    container.style.transform = `translateX(-${current * 100}%)`;
  }

  function resetTimer() {
    clearInterval(timer);
    timer = setInterval(() => {
      current = (current + 1) % slides.length;
      updateCarousel();
    }, delay);
  }

  prevBtn.addEventListener('click', () => {
    current = (current > 0 ? current - 1 : slides.length - 1);
    updateCarousel();
    resetTimer();
  });

  nextBtn.addEventListener('click', () => {
    current = (current < slides.length - 1 ? current + 1 : 0);
    updateCarousel();
    resetTimer();
  });

  // Awal auto-slide
  resetTimer();

      const toggle = document.getElementById('nav-toggle');
const sidebar = document.getElementById('sidebar');
const main = document.getElementById('main');
toggle.addEventListener('click', () => {
  sidebar.classList.toggle('open');
  main.classList.toggle('shifted');
  toggle.classList.toggle('active');
});

// tombol tutup sidebar internal
document.getElementById('close-btn').addEventListener('click', () => {
  sidebar.classList.remove('open');
  main.classList.remove('shifted');
  toggle.classList.remove('active');
});

// Ripple effect New Chat
document.getElementById('new-chat-btn').addEventListener('click', function(e) {
  const circle = document.createElement('span');
  const d = Math.max(this.clientWidth, this.clientHeight), r = d / 2;
  circle.style.width = circle.style.height = `${d}px`;
  circle.style.left = `${e.clientX - this.offsetLeft - r}px`;
  circle.style.top = `${e.clientY - this.offsetTop - r}px`;
  circle.className = 'ripple';
  const prev = this.querySelector('.ripple');
  if (prev) prev.remove();
  this.appendChild(circle);
});
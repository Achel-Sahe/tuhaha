      let currentSlide = 0;
  const slides = document.querySelectorAll(".carousel-slide");

  setInterval(() => {
      slides[currentSlide].classList.remove("active");
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].classList.add("active");
  }, 5000);
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


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

  window.addEventListener('error', e => console.error('[GLOBAL ERROR]', e.message, 'at', e.filename + ':' + e.lineno));
  window.addEventListener('unhandledrejection', e => console.error('[UNHANDLED REJECTION]', e.reason));

  document.addEventListener('DOMContentLoaded', () => {
    safe.log('DOMContentLoaded — initializing UI handlers');

    /* ---------- Sidebar toggle & close ---------- */
    const toggle = safe.el('#nav-toggle');
    const sidebar = safe.el('#sidebar');
    const main = safe.el('#main');
    const closeBtn = safe.el('#close-btn');

    if (toggle && sidebar && main) {
      toggle.addEventListener('click', () => {
        sidebar.classList.toggle('open');
        main.classList.toggle('shifted');
        toggle.classList.toggle('active');
        safe.log('sidebar toggled');
      });
      safe.log('#nav-toggle attached');
    } else safe.warn('sidebar/nav-toggle/main not all found', !!toggle, !!sidebar, !!main);

    if (closeBtn && sidebar && main && toggle) {
      closeBtn.addEventListener('click', () => {
        sidebar.classList.remove('open');
        main.classList.remove('shifted');
        toggle.classList.remove('active');
        safe.log('sidebar closed via close-btn');
      });
      safe.log('#close-btn attached');
    } else safe.warn('#close-btn not attached', !!closeBtn);


    /* ---------- Carousel (safe init) ---------- */
    const container = safe.el('.slides-container');
    const slides = container ? container.querySelectorAll('.slide') : [];
    const prevBtn = safe.el('.carousel-btn.prev');
    const nextBtn = safe.el('.carousel-btn.next');
    let current = 0;
    let timer = null;
    const delay = 5000;

    function updateCarousel() {
      if (!container) return;
      container.style.transform = `translateX(-${current * 100}%)`;
    }

    function resetTimer() {
      if (timer) clearInterval(timer);
      if (!slides || slides.length <= 1) { timer = null; return; } // tidak perlu auto-slide 0/1 slide
      timer = setInterval(() => {
        current = (current + 1) % slides.length;
        updateCarousel();
      }, delay);
      safe.log('carousel timer started (slides:', slides.length + ')');
    }

    if (container && slides.length) {
      safe.log('carousel found, slides:', slides.length);
      if (prevBtn) {
        prevBtn.addEventListener('click', () => {
          current = (current > 0 ? current - 1 : slides.length - 1);
          updateCarousel();
          resetTimer();
        });
        safe.log('prevBtn attached');
      } else safe.warn('prevBtn not found');

      if (nextBtn) {
        nextBtn.addEventListener('click', () => {
          current = (current < slides.length - 1 ? current + 1 : 0);
          updateCarousel();
          resetTimer();
        });
        safe.log('nextBtn attached');
      } else safe.warn('nextBtn not found');

      // start only if more than 1 slide
      resetTimer();
    } else safe.warn('carousel container or slides missing');

    /* ---------- Ripple (new chat) ---------- */
    const newChatBtn = safe.el('#new-chat-btn');
    if (newChatBtn) {
      newChatBtn.addEventListener('click', function(e) {
        const circle = document.createElement('span');
        const d = Math.max(this.clientWidth, this.clientHeight), r = d/2;
        circle.style.width = circle.style.height = `${d}px`;
        const rect = this.getBoundingClientRect();
        circle.style.left = `${e.clientX - rect.left - r}px`;
        circle.style.top = `${e.clientY - rect.top - r}px`;
        circle.className = 'ripple';
        const prev = this.querySelector('.ripple');
        if (prev) prev.remove();
        this.appendChild(circle);
      });
      safe.log('#new-chat-btn ripple attached');
    } else safe.warn('#new-chat-btn not found (ripple disabled)');

    safe.log('initialization complete');
  }); // DOMContentLoaded end

    document.querySelectorAll('.has-dropdown > a').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const parent = this.parentElement;
      parent.classList.toggle('open');
    });
    });

    // Counter menggunakan CountAPI
        // Ganti 'nama-desa-anda' dengan nama desa/website Anda
        const siteName = 'Website-Negeri-Tuhaha';
        const pageName = 'Negeri-Tuhaha';
        
        fetch(`https://api.countapi.xyz/hit/${siteName}/${pageName}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('counter-number').textContent = data.value.toLocaleString('id-ID');
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('counter-number').textContent = '0';
        });

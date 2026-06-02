/* MAR EVENTOS — Main JavaScript */

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });
}

// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    const spans = navToggle.querySelectorAll('span');
    if (navMenu.classList.contains('open')) {
      spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
    } else {
      spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
    }
  });
}

// Mobile dropdown
document.querySelectorAll('.nav-dropdown').forEach(dd => {
  dd.querySelector('.nav-link').addEventListener('click', (e) => {
    if (window.innerWidth <= 900) {
      e.preventDefault();
      dd.classList.toggle('open');
    }
  });
});

// Fade up on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// Slider
function initSlider(sliderEl) {
  const track = sliderEl.querySelector('.slider-track');
  const slides = sliderEl.querySelectorAll('.slide');
  const prevBtn = sliderEl.querySelector('.slider-btn.prev');
  const nextBtn = sliderEl.querySelector('.slider-btn.next');
  if (!track || !slides.length) return;

  let current = 0;
  let slidesPerView = getSlidesPerView();
  let total = Math.ceil(slides.length / slidesPerView);
  let autoInterval;

  function getSlidesPerView() {
    if (window.innerWidth <= 480) return 1;
    if (window.innerWidth <= 768) return 2;
    if (window.innerWidth <= 1024) return 3;
    return 4;
  }

  function goTo(idx) {
    slidesPerView = getSlidesPerView();
    total = Math.ceil(slides.length / slidesPerView);
    current = Math.max(0, Math.min(idx, total - 1));
    const pct = current * (100 / slidesPerView) * slidesPerView / slides.length;
    // Use per-slide width
    track.style.transform = `translateX(-${current * (100 / slidesPerView)}%)`;
  }

  function autoplay() {
    autoInterval = setInterval(() => {
      goTo(current + 1 >= total ? 0 : current + 1);
    }, 3800);
  }

  function resetAuto() {
    clearInterval(autoInterval);
    autoplay();
  }

  if (prevBtn) prevBtn.addEventListener('click', () => { goTo(current - 1 >= 0 ? current - 1 : total - 1); resetAuto(); });
  if (nextBtn) nextBtn.addEventListener('click', () => { goTo(current + 1 >= total ? 0 : current + 1); resetAuto(); });

  window.addEventListener('resize', () => { goTo(current); }, { passive: true });

  autoplay();
}

document.querySelectorAll('.slider-container').forEach(initSlider);

// Lightbox
const lightbox = document.querySelector('.lightbox');
if (lightbox) {
  const lightboxImg = lightbox.querySelector('.lightbox-img');
  const closeBtn = lightbox.querySelector('.lightbox-close');
  const prevBtn = lightbox.querySelector('.lightbox-prev');
  const nextBtn = lightbox.querySelector('.lightbox-next');
  let galleryImages = [];
  let currentIdx = 0;

  function openLightbox(images, idx) {
    galleryImages = images;
    currentIdx = idx;
    lightboxImg.src = images[idx];
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }

  function navigate(dir) {
    currentIdx = (currentIdx + dir + galleryImages.length) % galleryImages.length;
    lightboxImg.style.opacity = '0';
    setTimeout(() => {
      lightboxImg.src = galleryImages[currentIdx];
      lightboxImg.style.opacity = '1';
    }, 200);
  }

  closeBtn?.addEventListener('click', closeLightbox);
  prevBtn?.addEventListener('click', () => navigate(-1));
  nextBtn?.addEventListener('click', () => navigate(1));

  lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });

  document.addEventListener('keydown', e => {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') navigate(-1);
    if (e.key === 'ArrowRight') navigate(1);
  });

  document.querySelectorAll('[data-lightbox]').forEach((item, i, all) => {
    item.addEventListener('click', () => {
      const images = Array.from(all).map(el => el.dataset.lightbox);
      openLightbox(images, i);
    });
  });
}

// Contact form custom radio/checkbox
document.querySelectorAll('.radio-label').forEach(label => {
  label.addEventListener('click', () => {
    const name = label.querySelector('input').name;
    document.querySelectorAll(`.radio-label input[name="${name}"]`).forEach(inp => {
      inp.closest('.radio-label').classList.remove('checked');
    });
    label.classList.add('checked');
    label.querySelector('input').checked = true;
  });
});

document.querySelectorAll('.check-label').forEach(label => {
  label.addEventListener('click', () => {
    label.classList.toggle('checked');
    const input = label.querySelector('input');
    input.checked = !input.checked;
  });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = 90;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

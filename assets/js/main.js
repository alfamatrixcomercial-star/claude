/* MAR EVENTOS — Premium Animation System */

// ===== PAGE LOADER =====
const loader = document.querySelector('.page-loader');
if (loader) {
  const bar = loader.querySelector('.loader-bar');
  if (bar) {
    bar.style.transform = 'scaleX(0)';
    setTimeout(() => { bar.style.transform = 'scaleX(0.7)'; }, 100);
    setTimeout(() => { bar.style.transform = 'scaleX(1)'; }, 500);
  }
  window.addEventListener('load', () => {
    setTimeout(() => {
      loader.classList.add('out');
      setTimeout(() => { loader.style.display = 'none'; }, 700);
    }, 400);
  });
}

// ===== NAVBAR =====
const navbar = document.querySelector('.navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });
}

// ===== MOBILE NAV =====
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    const spans = navToggle.querySelectorAll('span');
    if (navMenu.classList.contains('open')) {
      spans[0].style.transform = 'rotate(45deg) translate(5px,5px)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'rotate(-45deg) translate(5px,-5px)';
    } else {
      spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
    }
  });
}
document.querySelectorAll('.nav-dropdown').forEach(dd => {
  dd.querySelector('.nav-link').addEventListener('click', e => {
    if (window.innerWidth <= 900) { e.preventDefault(); dd.classList.toggle('open'); }
  });
});

// ===== HERO ENTRANCE =====
function initHeroEntrance() {
  const hero = document.querySelector('.hero');
  if (!hero) return;
  const delay = loader ? 900 : 200;

  hero.querySelector('.hero-eyebrow') && setTimeout(() =>
    hero.querySelector('.hero-eyebrow').classList.add('enter'), delay);

  const subtitle = hero.querySelector('.hero-subtitle');
  if (subtitle) setTimeout(() => subtitle.classList.add('enter'), delay + 150);

  const title = hero.querySelector('h1');
  if (title) {
    const parts = title.innerHTML.split(/(<br\s*\/?>)/gi);
    title.innerHTML = parts.map(p =>
      /^<br/i.test(p) ? p :
        p.split(' ').filter(w => w.trim()).map(w =>
          `<span class="w-wrap"><span class="w-inner">${w}</span></span>`
        ).join(' ')
    ).join('');
    title.querySelectorAll('.w-inner').forEach((w, i) => {
      setTimeout(() => w.classList.add('enter'), delay + 280 + i * 70);
    });
  }

  const divider = hero.querySelector('.hero-divider');
  if (divider) setTimeout(() => divider.classList.add('enter'), delay + 620);

  const tagline = hero.querySelector('.hero-tagline');
  if (tagline) setTimeout(() => tagline.classList.add('enter'), delay + 700);

  const actions = hero.querySelector('.hero-actions');
  if (actions) setTimeout(() => actions.classList.add('enter'), delay + 820);

  const scroll = hero.querySelector('.hero-scroll');
  if (scroll) setTimeout(() => scroll.classList.add('enter'), delay + 1000);
}
initHeroEntrance();

// ===== SCROLL ANIMATIONS =====
const scrollObs = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.08, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.fade-up,.fade-left,.fade-right,.scale-in,.blur-reveal,.clip-reveal').forEach(el => {
  scrollObs.observe(el);
});

// ===== STAGGER GROUPS =====
document.querySelectorAll('[data-stagger]').forEach(group => {
  const items = group.querySelectorAll('.stagger-item');
  items.forEach((item, i) => { item.style.transitionDelay = `${i * 0.09}s`; });
  const obs = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) { items.forEach(item => item.classList.add('visible')); obs.disconnect(); }
  }, { threshold: 0.1 });
  obs.observe(group);
});

// ===== COUNTER ANIMATION =====
const statsRow = document.querySelector('.stats-row');
if (statsRow) {
  new IntersectionObserver(([entry]) => {
    if (!entry.isIntersecting) return;
    entry.target.querySelectorAll('.stat-num').forEach(el => {
      const raw = el.textContent.trim();
      const num = parseInt(raw.replace(/\D/g, ''));
      const suffix = raw.replace(/[\d.,]/g, '');
      if (isNaN(num)) return;
      const t0 = performance.now();
      (function tick(now) {
        const p = Math.min((now - t0) / 1600, 1);
        const ease = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.floor(ease * num).toLocaleString('es-AR') + suffix;
        if (p < 1) requestAnimationFrame(tick);
      })(performance.now());
    });
  }, { threshold: 0.5 }).observe(statsRow);
}

// ===== PARALLAX =====
const parallaxItems = Array.from(document.querySelectorAll('[data-parallax]')).map(el => ({
  el, speed: parseFloat(el.dataset.parallax) || 0.25
}));
if (parallaxItems.length) {
  window.addEventListener('scroll', () => {
    const sy = window.scrollY;
    parallaxItems.forEach(({ el, speed }) => {
      const section = el.closest('section') || el.parentElement;
      const r = section?.getBoundingClientRect();
      if (r && r.bottom > 0 && r.top < window.innerHeight) {
        el.style.transform = `translateY(${sy * speed}px) scale(1.1)`;
      }
    });
  }, { passive: true });
}

// ===== 3D TILT =====
document.querySelectorAll('.triptych-panel').forEach(card => {
  card.addEventListener('mousemove', e => {
    const r = card.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    card.style.transform = `perspective(900px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) scale(1.03)`;
    card.style.boxShadow = `${-x * 24}px ${-y * 24}px 48px rgba(0,0,0,0.35)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
    card.style.boxShadow = '';
  });
});

// ===== MAGNETIC BUTTONS =====
document.querySelectorAll('.btn-primary,.nav-cta,.btn-whatsapp').forEach(btn => {
  btn.addEventListener('mousemove', e => {
    const r = btn.getBoundingClientRect();
    const x = (e.clientX - r.left - r.width / 2) * 0.25;
    const y = (e.clientY - r.top - r.height / 2) * 0.25;
    btn.style.transform = `translate(${x}px,${y}px) translateY(-2px)`;
  });
  btn.addEventListener('mouseleave', () => {
    btn.style.transition = 'transform 0.55s cubic-bezier(0.16,1,0.3,1)';
    btn.style.transform = '';
    setTimeout(() => { btn.style.transition = ''; }, 550);
  });
});


// ===== SLIDER =====
function initSlider(sliderEl) {
  const track = sliderEl.querySelector('.slider-track');
  const slides = sliderEl.querySelectorAll('.slide');
  const prevBtn = sliderEl.querySelector('.slider-btn.prev');
  const nextBtn = sliderEl.querySelector('.slider-btn.next');
  if (!track || !slides.length) return;
  let current = 0, autoInterval;

  function getSPV() {
    if (window.innerWidth <= 480) return 1;
    if (window.innerWidth <= 768) return 2;
    if (window.innerWidth <= 1024) return 3;
    return 4;
  }
  function goTo(idx) {
    const spv = getSPV();
    const total = Math.ceil(slides.length / spv);
    current = ((idx % total) + total) % total;
    track.style.transform = `translateX(-${current * (100 / spv)}%)`;
  }
  function autoplay() { autoInterval = setInterval(() => goTo(current + 1), 3800); }
  function resetAuto() { clearInterval(autoInterval); autoplay(); }

  prevBtn?.addEventListener('click', () => { goTo(current - 1); resetAuto(); });
  nextBtn?.addEventListener('click', () => { goTo(current + 1); resetAuto(); });
  window.addEventListener('resize', () => goTo(current), { passive: true });
  autoplay();
}
document.querySelectorAll('.slider-container').forEach(initSlider);

// ===== LIGHTBOX =====
const lightbox = document.querySelector('.lightbox');
if (lightbox) {
  const lbImg = lightbox.querySelector('.lightbox-img');
  let images = [], idx = 0;
  let scale = 1, tx = 0, ty = 0, dragging = false, lx = 0, ly = 0;

  function applyTransform(animated) {
    if (animated) lbImg.style.transition = 'transform 0.2s ease';
    lbImg.style.transform = 'scale(' + scale + ') translate(' + tx + 'px,' + ty + 'px)';
    lbImg.style.cursor = scale > 1 ? (dragging ? 'grabbing' : 'grab') : 'zoom-in';
    if (animated) setTimeout(function() { lbImg.style.transition = ''; }, 220);
  }

  function resetZoom(animated) {
    scale = 1; tx = 0; ty = 0;
    applyTransform(animated);
  }

  function open(imgs, i) {
    images = imgs; idx = i;
    lbImg.src = imgs[i];
    resetZoom(false);
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
    resetZoom(false);
  }

  function nav(d) {
    resetZoom(false);
    idx = (idx + d + images.length) % images.length;
    lbImg.style.opacity = '0';
    setTimeout(function() { lbImg.src = images[idx]; lbImg.style.opacity = '1'; }, 180);
  }

  // Wheel zoom
  lbImg.addEventListener('wheel', function(e) {
    e.preventDefault();
    scale = Math.min(Math.max(scale * (e.deltaY > 0 ? 0.85 : 1.18), 1), 5);
    if (scale === 1) { tx = 0; ty = 0; }
    applyTransform(false);
  }, { passive: false });

  // Double-click to toggle zoom
  lbImg.addEventListener('dblclick', function() {
    if (scale > 1) { resetZoom(true); } else { scale = 2.5; applyTransform(true); }
  });

  // Drag to pan when zoomed
  lbImg.addEventListener('mousedown', function(e) {
    if (scale <= 1) return;
    dragging = true; lx = e.clientX; ly = e.clientY;
    applyTransform(false);
    e.preventDefault();
  });
  document.addEventListener('mousemove', function(e) {
    if (!dragging) return;
    tx += (e.clientX - lx) / scale;
    ty += (e.clientY - ly) / scale;
    lx = e.clientX; ly = e.clientY;
    applyTransform(false);
  });
  document.addEventListener('mouseup', function() {
    dragging = false;
    applyTransform(false);
  });

  // Pinch to zoom (touch)
  var pinchDist0 = 0, scale0 = 1;
  lbImg.addEventListener('touchstart', function(e) {
    if (e.touches.length === 2) {
      pinchDist0 = Math.hypot(e.touches[0].clientX - e.touches[1].clientX, e.touches[0].clientY - e.touches[1].clientY);
      scale0 = scale;
    }
  }, { passive: true });
  lbImg.addEventListener('touchmove', function(e) {
    if (e.touches.length === 2) {
      var d = Math.hypot(e.touches[0].clientX - e.touches[1].clientX, e.touches[0].clientY - e.touches[1].clientY);
      scale = Math.min(Math.max(scale0 * (d / pinchDist0), 1), 5);
      if (scale === 1) { tx = 0; ty = 0; }
      applyTransform(false);
      e.preventDefault();
    }
  }, { passive: false });

  lightbox.querySelector('.lightbox-close')?.addEventListener('click', close);
  lightbox.querySelector('.lightbox-prev')?.addEventListener('click', function() { nav(-1); });
  lightbox.querySelector('.lightbox-next')?.addEventListener('click', function() { nav(1); });
  lightbox.addEventListener('click', function(e) { if (e.target === lightbox) close(); });
  document.addEventListener('keydown', function(e) {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') nav(-1);
    if (e.key === 'ArrowRight') nav(1);
  });
  document.querySelectorAll('[data-lightbox]').forEach(function(item, i, all) {
    item.addEventListener('click', function() { open(Array.from(all).map(function(el) { return el.dataset.lightbox; }), i); });
  });
}

// ===== FORM =====
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
    label.querySelector('input').checked = !label.querySelector('input').checked;
  });
});

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 90, behavior: 'smooth' });
    }
  });
});

// ===== GALLERY FILTER =====
const galleryFilters = document.querySelectorAll('.gallery-filter');
if (galleryFilters.length) {
  galleryFilters.forEach(btn => {
    btn.addEventListener('click', () => {
      galleryFilters.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      document.querySelectorAll('.gallery-grid .gallery-item').forEach(item => {
        const cat = item.dataset.category;
        item.style.display = (filter === 'todos' || cat === filter) ? '' : 'none';
      });
    });
  });
}

// ===== IMAGE FALLBACK =====
document.querySelectorAll('img[src*="mareventos.com.ar"]').forEach(img => {
  img.addEventListener('error', function() {
    this.style.opacity = '0';
    const parent = this.parentElement;
    if (parent && !parent.dataset.bgSet) {
      parent.style.background = 'linear-gradient(135deg, #6B9B9B 0%, #2C4A3E 100%)';
      parent.dataset.bgSet = '1';
    }
  });
});

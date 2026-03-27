// Gradually increase blur as user scrolls.
(function() {
  const updateDynamicBlur = () => {
    const blurElements = document.querySelectorAll('.single_hero_background');
    const scroll = window.pageYOffset || document.documentElement.scrollTop || 0;
    const maxScroll = 400;
    const minBlur = 4;
    const maxBlur = 24;

    const progress = Math.min(scroll / maxScroll, 1);
    const blurAmount = minBlur + (maxBlur - minBlur) * progress;

    blurElements.forEach(el => {
      el.style.backdropFilter = `blur(${blurAmount}px)`;
      el.style.webkitBackdropFilter = `blur(${blurAmount}px)`;
    });
  };

  window.addEventListener('scroll', updateDynamicBlur, { passive: true });
  window.addEventListener('load', updateDynamicBlur);
  updateDynamicBlur();
})();

// Matrix rain effect - keep the previous terminal atmosphere.
(function() {
  const canvas = document.createElement('canvas');
  canvas.id = 'matrix-rain';
  canvas.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: -1;
    opacity: 0.05;
  `;
  document.body.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  let width, height, columns, drops;

  const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
  const charArray = chars.split('');
  const fontSize = 12;

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    columns = Math.floor(width / (fontSize * 2.5));
    drops = Array(columns).fill(1);
  }

  function draw() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.025)';
    ctx.fillRect(0, 0, width, height);

    ctx.fillStyle = '#00ff41';
    ctx.font = `${fontSize}px monospace`;

    for (let i = 0; i < drops.length; i++) {
      if (Math.random() > 0.92) {
        const char = charArray[Math.floor(Math.random() * charArray.length)];
        const x = i * fontSize * 2.5;
        const y = drops[i] * fontSize;
        ctx.fillText(char, x, y);
      }

      if (drops[i] * fontSize > height && Math.random() > 0.985) {
        drops[i] = 0;
      }
      drops[i]++;
    }
  }

  resize();
  window.addEventListener('resize', resize);
  setInterval(draw, 80);
})();

// Reveal proof panels and sections only after JS is active.
(function() {
  document.documentElement.classList.add('js-enhanced');

  if (!('IntersectionObserver' in window)) {
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2, rootMargin: '0px 0px -8% 0px' });

  document.querySelectorAll('[data-reveal]').forEach(el => observer.observe(el));
})();

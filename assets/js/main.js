/* ===========================================================
   Fabian Rodrigues — Mágico Ilusionista · main.js
   =========================================================== */
(function () {
  'use strict';

  const $  = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));

  /* ---- Ano no rodapé ---- */
  const yearEl = $('#year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---- Navbar: sombra ao rolar ---- */
  const navbar = $('#navbar');
  const onScroll = () => navbar.classList.toggle('scrolled', window.scrollY > 40);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---- Menu mobile ---- */
  const toggle = $('#navToggle');
  const links  = $('#navLinks');
  const closeMenu = () => { links.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); };
  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  $$('#navLinks a').forEach(a => a.addEventListener('click', closeMenu));
  document.addEventListener('click', (e) => {
    if (links.classList.contains('open') && !links.contains(e.target) && !toggle.contains(e.target)) closeMenu();
  });

  /* ---- Link ativo conforme a seção visível ---- */
  const sections = $$('section[id]');
  const navAnchors = $$('#navLinks a');
  const spy = () => {
    const pos = window.scrollY + 120;
    let current = '';
    sections.forEach(sec => { if (sec.offsetTop <= pos) current = sec.id; });
    navAnchors.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + current));
  };
  spy();
  window.addEventListener('scroll', spy, { passive: true });

  /* ---- Reveal on scroll ---- */
  const revealEls = $$('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(en => {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('in'));
  }

  /* ---- Abas (Mágicas / Curiosidades) ---- */
  $$('[data-tabs]').forEach(tabset => {
    const btns   = $$('.tab-btn', tabset);
    const panels = $$('.tab-panel', tabset);
    btns.forEach(btn => btn.addEventListener('click', () => {
      const key = btn.dataset.tab;
      btns.forEach(b => b.classList.toggle('active', b === btn));
      panels.forEach(p => p.classList.toggle('active', p.dataset.panel === key));
    }));
  });

  /* ---- Lightbox (galeria, mágicas, ilusões, humor) ---- */
  const lb      = $('#lightbox');
  const lbImg   = $('#lbImg');
  const lbClose = $('#lbClose');
  const lbPrev  = $('#lbPrev');
  const lbNext  = $('#lbNext');
  let group = [];
  let index = 0;

  const renderLb = () => {
    const el  = group[index];
    const img = el.querySelector('img');
    lbImg.src = el.dataset.full;
    lbImg.alt = img ? img.alt : '';
  };
  const openLb = (els, i) => {
    group = els; index = i;
    renderLb();
    lb.classList.add('open');
    lb.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };
  const closeLb = () => {
    lb.classList.remove('open');
    lb.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };
  const move = (dir) => { index = (index + dir + group.length) % group.length; renderLb(); };

  $$('[data-full]').forEach(el => {
    el.addEventListener('click', () => {
      const box = el.closest('[data-gallery]');
      const els = box ? $$('[data-full]', box) : [el];
      openLb(els, Math.max(0, els.indexOf(el)));
    });
  });
  lbClose.addEventListener('click', closeLb);
  lbPrev.addEventListener('click', () => move(-1));
  lbNext.addEventListener('click', () => move(1));
  lb.addEventListener('click', (e) => { if (e.target === lb) closeLb(); });
  document.addEventListener('keydown', (e) => {
    if (!lb.classList.contains('open')) return;
    if (e.key === 'Escape') closeLb();
    if (e.key === 'ArrowLeft') move(-1);
    if (e.key === 'ArrowRight') move(1);
  });

  /* ---- Formulário -> WhatsApp ---- */
  const form = $('#contactForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const nome    = ($('#cf-nome').value || '').trim();
      const evento  = $('#cf-evento').value;
      const msg     = ($('#cf-msg').value || '').trim();
      let texto = `Olá Fabian! Meu nome é ${nome || '(não informado)'}.`;
      texto += `\nTipo de evento: ${evento}.`;
      if (msg) texto += `\n${msg}`;
      texto += `\n\nGostaria de um orçamento para um show de mágica. ✨`;
      const url = 'https://wa.me/5519997923480?text=' + encodeURIComponent(texto);
      window.open(url, '_blank', 'noopener');
    });
  }
})();

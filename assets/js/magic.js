/* ===========================================================
   Fabian Rodrigues — Mágico Ilusionista · magic.js
   Interações mágicas & easter eggs (auto-reversíveis)
   =========================================================== */
(function () {
  'use strict';

  const doc  = document;
  const body = doc.body;
  const $  = (s, c = doc) => c.querySelector(s);
  const $$ = (s, c = doc) => Array.from(c.querySelectorAll(s));
  const rand = (min, max) => Math.random() * (max - min) + min;
  const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
  const reduce = !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);

  /* Camada de efeitos */
  const layer = doc.createElement('div');
  layer.className = 'fx-layer';
  layer.setAttribute('aria-hidden', 'true');
  body.appendChild(layer);

  const add = (tag, cls, life, parent) => {
    const el = doc.createElement(tag);
    el.className = cls;
    (parent || layer).appendChild(el);
    if (life) setTimeout(() => el.remove(), life);
    return el;
  };

  /* ---------- Feitiço: chuva de brilhos + clarão ---------- */
  function sparkleRain(count) {
    const glyphs = ['✨', '⭐', '🌟', '💫', '🃏', '🪄', '🎩', '🕊️', '🌙'];
    for (let i = 0; i < count; i++) {
      const s = add('span', 'fx-sparkle');
      s.textContent = pick(glyphs);
      const dur = rand(2.4, 4.4);
      s.style.left = rand(0, 100) + 'vw';
      s.style.fontSize = rand(14, 32) + 'px';
      s.style.animationDuration = dur + 's';
      s.style.animationDelay = rand(0, 0.9) + 's';
      setTimeout(() => s.remove(), (dur + 1.4) * 1000);
    }
  }

  let spellBusy = false;
  function castSpell(name) {
    if (spellBusy) return;
    spellBusy = true;
    add('div', 'fx-glow', 1800);
    add('div', 'fx-flash', 2400).textContent = '✨ ' + name + '! ✨';
    if (!reduce) sparkleRain(48);
    setTimeout(() => { spellBusy = false; }, reduce ? 900 : 2500);
  }

  /* ---------- Palavra mágica visível (fantasma que se revela ao passar o mouse / tocar) ---------- */
  const magicWord = $('.magic-word');
  if (magicWord) {
    const cast = () => castSpell('Abracadabra');
    magicWord.addEventListener('click', cast);
    magicWord.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); cast(); }
    });
  }

  /* ---------- Cartola mágica (clique no chapéu do logo) ---------- */
  function poof(x, y) {
    const sm = add('span', 'fx-smoke', 1200);
    sm.style.left = x + 'px';
    sm.style.top = y + 'px';
  }
  function pullFromHat(el) {
    const r = el.getBoundingClientRect();
    const cx = r.left + r.width / 2, cy = r.bottom - 2;
    poof(cx, cy);
    const items = ['🐇', '🕊️', '🃏', '🌹', '🪙', '✨', '🎩', '🦋', '💜', '🕯️'];
    const it = add('span', 'fx-item', 1600);
    it.textContent = pick(items);
    it.style.left = cx + 'px';
    it.style.top = cy + 'px';
  }
  function rabbitDash() {
    const r = add('span', 'fx-runner', 3200);
    r.textContent = '🐇';
    r.style.top = rand(58, 78) + 'vh';
  }
  const brandHat = $('.brand-hat');
  if (brandHat) {
    brandHat.setAttribute('title', 'Psiu… puxe algo da cartola 🎩');
    let hatCount = 0;
    brandHat.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      pullFromHat(brandHat);
      if (++hatCount % 5 === 0 && !reduce) rabbitDash();
    });
  }

  /* ---------- Número do desaparecimento (2 cliques na foto) ---------- */
  const heroFrame = $('.hero-photo-frame');
  if (heroFrame) {
    const img = $('img', heroFrame);
    if (img) img.setAttribute('title', 'Dê dois cliques… se tiver coragem 🎩');
    const caption = (txt) => { add('span', 'magic-caption', 800, heroFrame).textContent = txt; };
    heroFrame.addEventListener('dblclick', () => {
      if (heroFrame.classList.contains('is-vanishing')) return;
      const r = heroFrame.getBoundingClientRect();
      poof(r.left + r.width / 2, r.top + r.height / 2);
      heroFrame.classList.add('is-vanishing');
      caption('Agora você me vê…');
      setTimeout(() => caption('…agora não! ✨'), 720);
      setTimeout(() => {
        heroFrame.classList.remove('is-vanishing');
        const r2 = heroFrame.getBoundingClientRect();
        poof(r2.left + r2.width / 2, r2.top + r2.height / 2);
      }, 1500);
    });
  }

  /* ---------- Levitação dos cartões flutuantes ---------- */
  $$('.float-card').forEach((c) => {
    c.addEventListener('click', () => {
      if (c.classList.contains('is-levitating')) return;
      c.classList.add('is-levitating');
      const r = c.getBoundingClientRect();
      for (let i = 0; i < 5; i++) {
        const s = add('span', 'fx-sparkle', 1200);
        s.textContent = '✨';
        s.style.left = (r.left + rand(0, r.width)) + 'px';
        s.style.top  = (r.top + rand(-10, r.height)) + 'px';
        s.style.fontSize = rand(12, 20) + 'px';
        s.style.animation = 'fx-cap .9s ease forwards';
      }
      setTimeout(() => c.classList.remove('is-levitating'), 1400);
    });
  });

  /* ---------- A palavra "magia" do título se remonta ---------- */
  const gradWord = $('.hero-text h1 .grad');
  if (gradWord) {
    gradWord.setAttribute('title', 'Toque na palavra mágica ✨');
    let scrambling = false;
    gradWord.addEventListener('click', () => {
      if (scrambling || reduce) return;
      scrambling = true;
      const original = gradWord.textContent;
      const pool = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ✦✧∗◇'.split('');
      let tick = 0; const total = 16;
      const iv = setInterval(() => {
        tick++;
        const locked = (tick / total) * original.length;
        gradWord.textContent = original.split('').map((ch, i) => {
          if (ch === ' ') return ' ';
          return i < locked ? original[i] : pick(pool);
        }).join('');
        if (tick >= total) { clearInterval(iv); gradWord.textContent = original; scrambling = false; }
      }, 45);
    });
  }

  /* ---------- Estrela cadente ao clicar no "céu" do herói ---------- */
  function shootingStar(x, y) {
    const st = add('div', 'fx-star', 950);
    st.style.left = x + 'px';
    st.style.top = y + 'px';
  }
  const hero = $('.hero');
  if (hero) {
    hero.addEventListener('click', (e) => {
      if (e.target.closest('a, button, input, textarea, select, .btn, .float-card, .hero-photo-frame, h1, .hero-quote, .hero-desc, .eyebrow, .scroll-cue')) return;
      shootingStar(e.clientX, e.clientY);
    });
  }

  /* ---------- Dica de boas-vindas (uma única vez) ---------- */
  function toast(html, life) {
    const t = doc.createElement('div');
    t.className = 'magic-toast';
    t.innerHTML = html + '<span class="mt-close" aria-hidden="true">&times;</span>';
    body.appendChild(t);
    const close = () => { t.classList.add('out'); setTimeout(() => t.remove(), 400); };
    t.addEventListener('click', close);
    setTimeout(close, life || 9000);
  }
  try {
    if (!localStorage.getItem('fabianMagicHint')) {
      setTimeout(() => {
        toast('🎩✨ Psiu… este site é <b>mágico</b>. Passe o mouse na palavra <b>abracadabra</b> (no topo) e clique nela, dê dois cliques numa <b>foto</b> ou clique na <b>cartola</b>…');
      }, 4500);
      localStorage.setItem('fabianMagicHint', '1');
    }
  } catch (_) {}

})();

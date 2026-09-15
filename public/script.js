/* ---------- Spring engine (damped harmonic, ζ≈0.5 like Framer) ---------- */
function spring(from, to, onUpdate, opts = {}) {
  const k = opts.stiffness ?? 185;   // ω² — ~530ms period
  const c = opts.damping ?? 13.6;    // 2ζω with ζ≈0.5
  let x = from, v = opts.velocity ?? 0, last = performance.now(), raf;
  const done = opts.onDone;
  function step(now) {
    let dt = Math.min((now - last) / 1000, 0.064); last = now;
    // sub-step for stability
    const n = 4; const h = dt / n;
    for (let i = 0; i < n; i++) { const a = -k * (x - to) - c * v; v += a * h; x += v * h; }
    onUpdate(x);
    if (Math.abs(x - to) < 0.05 && Math.abs(v) < 0.5) { onUpdate(to); done && done(); return; }
    raf = requestAnimationFrame(step);
  }
  raf = requestAnimationFrame(step);
  return { stop: () => cancelAnimationFrame(raf), get value() { return x; }, get velocity() { return v; } };
}
const wait = (ms) => new Promise(r => setTimeout(r, ms));

/* ---------- Themes (global token swap, like Framer color tokens) ---------- */
const THEMES = {
  red:   { brown: '#D81E20', orange: '#F0B000' },
  green: { brown: '#208030', orange: '#F0B000' },
  ink:   { brown: '#1C1A19', orange: '#D81E20' },
};
let currentTheme = 'red';
function setTheme(name) {
  if (!THEMES[name]) return;
  currentTheme = name;
  const t = THEMES[name];
  document.documentElement.style.setProperty('--brown', t.brown);
  document.documentElement.style.setProperty('--orange', t.orange);
}

/* ---------- Hero carousel ---------- */
const hero = document.querySelector('.hero');
const track = document.querySelector('.track');
const slides = [...document.querySelectorAll('.slide')];
let index = 0, trackSpring = null, trackX = 0;
let spacing = () => innerWidth >= 1200 ? Math.min(1344, innerWidth + 24) : Math.max(track.clientWidth * 0.876, 600);

function popIn(el, delay, r) {
  el.dataset.popState = 'in';
  return wait(delay).then(() => {
    if (el.dataset.popState !== 'in') return;
    el.style.transform = 'scale(0)';
    spring(0, 1, p => {
      const rot = r != null ? ` rotate(${r + 90 * (1 - p)}deg)` : '';
      el.style.transform = `translate(var(--dx,0px),var(--dy,0px)) scale(${p})${rot}`;
    }, { stiffness: 220, damping: 14 });
  });
}
function hideNow(el) { el.dataset.popState = 'out'; el.style.transform = 'scale(0)'; }

function showSlideContent(i, base = 0) {
  const s = slides[i];
  const tags = [...s.querySelectorAll('.tag')];
  const emos = [...s.querySelectorAll('.emo')];
  popIn(emos[0], base + 500); popIn(emos[1], base + 830);
  popIn(tags[0], base + 640, +tags[0].dataset.r);
  popIn(tags[1], base + 740, +tags[1].dataset.r);
  popIn(tags[2], base + 940, +tags[2].dataset.r);
}
function hideSlideContent(i) {
  slides[i].querySelectorAll('.tag,.emo').forEach(hideNow);
}
function layout() {
  const sp = spacing();
  slides.forEach((s, i) => { s.style.left = (i * sp) + 'px'; });
  trackX = -index * sp;
  if (!trackSpring) track.style.transform = `translateX(${trackX}px)`;
}
function goTo(n) {
  const prev = index;
  index = (n + slides.length) % slides.length;
  if (index === prev) return;
  hideSlideContent(prev);
  setTheme(slides[index].dataset.theme);
  const target = -index * spacing();
  const v = trackSpring ? trackSpring.velocity : 0;
  if (trackSpring) trackSpring.stop();
  trackSpring = spring(trackX, target, x => { trackX = x; track.style.transform = `translateX(${x}px)`; },
    { velocity: v, onDone: () => { trackSpring = null; } });
  showSlideContent(index);
}
window.addEventListener('resize', layout);
document.querySelector('.arrow-l').addEventListener('click', () => goTo(index - 1));
document.querySelector('.arrow-r').addEventListener('click', () => goTo(index + 1));
// swipe
let sx = null;
hero.addEventListener('pointerdown', e => { if (e.target.closest('.tag,.emo,.arrow,a,button')) return; sx = e.clientX; });
hero.addEventListener('pointerup', e => { if (sx == null) return; const dx = e.clientX - sx; sx = null; if (Math.abs(dx) > 60) goTo(index + (dx < 0 ? 1 : -1)); });

/* ---------- Draggable tags & emoji badges (Framer drag + elastic snap-back) ---------- */
document.querySelectorAll('.emo, .hero .tag').forEach(el => {
  let dragging = false, ox = 0, oy = 0, bx = 0, by = 0, sx = null, sy = null;
  el.addEventListener('pointerdown', e => {
    if (e.button !== 0 && e.pointerType === 'mouse') return;
    if (sx) { sx.stop(); sx = null; } if (sy) { sy.stop(); sy = null; }
    dragging = true; el.setPointerCapture(e.pointerId); el.classList.add('dragging');
    ox = e.clientX; oy = e.clientY;
    bx = parseFloat(el.style.getPropertyValue('--dx')) || 0; by = parseFloat(el.style.getPropertyValue('--dy')) || 0;
    e.stopPropagation(); e.preventDefault();
  });
  el.addEventListener('pointermove', e => {
    if (!dragging) return;
    el.style.setProperty('--dx', (bx + e.clientX - ox) + 'px');
    el.style.setProperty('--dy', (by + e.clientY - oy) + 'px');
  });
  const end = () => {
    if (!dragging) return;
    dragging = false; el.classList.remove('dragging');
    const x0 = parseFloat(el.style.getPropertyValue('--dx')) || 0, y0 = parseFloat(el.style.getPropertyValue('--dy')) || 0;
    sx = spring(x0, 0, v => el.style.setProperty('--dx', v + 'px'), { stiffness: 200, damping: 12 });
    sy = spring(y0, 0, v => el.style.setProperty('--dy', v + 'px'), { stiffness: 200, damping: 12 });
  };
  el.addEventListener('pointerup', end); el.addEventListener('pointercancel', end); el.addEventListener('lostpointercapture', end);
});

/* ---------- Load-in sequence ---------- */
function splitLetters(el) {
  const text = el.textContent; el.textContent = '';
  text.split(' ').forEach((word, wi, arr) => {
    const w = document.createElement('span'); w.style.whiteSpace = 'nowrap';
    [...word].forEach(ch => { const c = document.createElement('span'); c.textContent = ch; c.style.opacity = '0'; c.style.transform = 'translateY(0.6em)'; w.appendChild(c); });
    el.appendChild(w); if (wi < arr.length - 1) el.appendChild(document.createTextNode(' '));
  });
  return [...el.querySelectorAll('span span')];
}
function splitWords(el) {
  const words = el.textContent.split(' '); el.textContent = '';
  return words.map((word, i) => { const s = document.createElement('span'); s.textContent = word + (i < words.length - 1 ? ' ' : ''); s.style.display = 'inline-block'; s.style.opacity = '0'; s.style.transform = 'translateY(16px)'; s.style.whiteSpace = 'pre'; el.appendChild(s); return s; });
}
function loadSequence() {
  layout();
  // Topbar: slides down from -32px (Framer "Menu Message")
  const topbar = document.querySelector('.topbar');
  spring(-32, 0, y => { topbar.style.transform = `translateY(${y}px)`; }, { stiffness: 170, damping: 16, onDone: () => { topbar.style.transform = ''; topbar.classList.add('in'); } });

  // Nav: drops in from -100px with a real bounce (ζ≈0.5)
  const nav = document.querySelector('.nav');
  nav.style.opacity = '0';
  spring(-100, 0, y => { nav.style.transform = `translateY(${y}px)`; nav.style.opacity = Math.min(1, 1 + y / 80); }, { stiffness: 150, damping: 12, onDone: () => { nav.style.transform = ''; nav.style.opacity = ''; nav.classList.add('in'); } });

  const h1 = document.querySelector('.h1-anim');
  const letters = splitLetters(h1);
  h1.style.opacity = '1';
  letters.forEach((c, i) => setTimeout(() => {
    c.style.transition = 'opacity .45s ease, transform .6s cubic-bezier(.2,.8,.2,1)'; c.style.opacity = '1'; c.style.transform = 'none';
  }, 150 + i * 28));

  const food = slides[0].querySelector('.food');
  food.style.transform = 'scale(0.4)'; food.style.opacity = '0';
  setTimeout(() => spring(0.4, 1, s => { food.style.transform = `scale(${s})`; food.style.opacity = Math.min(1, (s - 0.4) / 0.4); }, { stiffness: 170, damping: 14 }), 200);

  showSlideContent(0, 100);

  // Arrows: scale-pop in (Framer translateY(-50%) scale(0) → 1)
  document.querySelectorAll('.arrow').forEach((a, i) => setTimeout(() => spring(0, 1, p => { a.style.transform = `scale(${p})`; }, { stiffness: 200, damping: 13, onDone: () => { a.style.transform = ''; a.classList.add('in'); } }), 650 + i * 100));

  const wordsEl = document.querySelector('.words-anim');
  const words = splitWords(wordsEl);
  wordsEl.style.opacity = '1';
  words.forEach((w, i) => setTimeout(() => { w.style.transition = 'opacity .5s ease, transform .6s cubic-bezier(.2,.8,.2,1)'; w.style.opacity = '1'; w.style.transform = 'none'; }, 450 + i * 45));

  const btns = document.querySelector('.hero-btns');
  btns.style.opacity = '0'; btns.style.transform = 'translateY(64px)';
  setTimeout(() => spring(64, 0, y => { btns.style.transform = `translateY(${y}px)`; btns.style.opacity = Math.min(1, 1 - y / 64 + 0.1); }, { stiffness: 170, damping: 16, onDone: () => { btns.style.transform = ''; btns.style.opacity = ''; btns.classList.add('in'); } }), 300);
}
if (document.fonts && document.fonts.ready) document.fonts.ready.then(loadSequence); else loadSequence();

/* ---------- Click particles (food emoji from cursor, gravity) ---------- */
const PARTICLE_IMGS = ['steaming_bowl','chopsticks','hot_pepper','leafy_green','peanuts','lemon','carrot','mushroom','broccoli','bell_pepper','cheese_wedge','ear_of_corn','herb','sparkles','seedling','bubble_tea'];
const particleLayer = document.querySelector('.particles');
function spawnParticle(x, y) {
  const el = document.createElement('div'); el.className = 'particle';
  const img = document.createElement('img'); img.src = `/assets/emoji/${PARTICLE_IMGS[Math.floor(Math.random() * PARTICLE_IMGS.length)]}.png`; img.alt = '';
  el.appendChild(img); particleLayer.appendChild(el);
  const scale = 0.8 + Math.random() * 0.3;
  let vx = (Math.random() - 0.5) * 800, vy = -(350 + Math.random() * 250);
  let rot = (Math.random() - 0.5) * 360, vr = (Math.random() - 0.5) * 160;
  let px = x, py = y, last = performance.now(); const g = 1500, life = 2500, t0 = last;
  (function step(now) {
    const dt = Math.min((now - last) / 1000, 0.05); last = now;
    vy += g * dt; px += vx * dt; py += vy * dt; rot += vr * dt;
    const age = now - t0;
    el.style.transform = `translate(${px}px,${py}px) translate(-50%,-50%) scale(${scale}) rotate(${rot}deg)`;
    el.style.opacity = age > life - 400 ? String(Math.max(0, (life - age) / 400)) : '1';
    if (age < life && py < innerHeight + 100) requestAnimationFrame(step); else el.remove();
  })(last);
}
document.addEventListener('pointerdown', e => {
  if (e.button !== 0) return;
  if (e.target instanceof Element && e.target.closest('a,button,.tag,.emo,.arrow,input,textarea,video')) return;
  spawnParticle(e.clientX, e.clientY);
});

setTheme('red');

/* ---------- Marquees: duplicate tracks so they loop seamlessly ---------- */
document.querySelectorAll('.t-row, .g-row').forEach(row => { row.appendChild(row.firstElementChild.cloneNode(true)); });

/* ---------- Lenis smooth scroll ---------- */
let lenis = null;
if (window.Lenis) {
  lenis = new Lenis({ lerp: 0.09, smoothWheel: true, wheelMultiplier: 1 });
  (function raf(t) { lenis.raf(t); requestAnimationFrame(raf); })(performance.now());
  document.querySelectorAll('a[href^="#"]').forEach(a => a.addEventListener('click', e => {
    const id = a.getAttribute('href'); if (id.length < 2) return;
    const t = document.querySelector(id); if (!t) return;
    e.preventDefault(); lenis.scrollTo(t, { offset: 0, duration: 1.4 });
  }));
}

/* ---------- Scroll-appear animation engine (Framer-style) ---------- */
const EASE = 'cubic-bezier(.22,1,.36,1)';
function splitChars(el) {
  const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
  const nodes = []; while (walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach(n => {
    if (!n.textContent.trim()) return;
    const frag = document.createDocumentFragment();
    n.textContent.split(/(\s+)/).forEach(part => {
      if (!part) return;
      if (/^\s+$/.test(part)) { frag.appendChild(document.createTextNode(' ')); return; }
      const w = document.createElement('span'); w.className = 'w';
      [...part].forEach(ch => { const c = document.createElement('span'); c.className = 'ch'; c.textContent = ch; w.appendChild(c); });
      frag.appendChild(w);
    });
    n.parentNode.replaceChild(frag, n);
  });
  return [...el.querySelectorAll('.ch')];
}
document.querySelectorAll('[data-split]').forEach(el => { el._chars = splitChars(el); });
document.querySelectorAll('[data-fly]').forEach(el => {
  const fx = el.style.getPropertyValue('--fx') || '0px', fy = el.style.getPropertyValue('--fy') || '0px';
  el.style.transform = `translate(${fx},${fy}) scale(0)`;
});
function siblingIndex(el, sel) {
  const list = [...el.parentElement.querySelectorAll(':scope > ' + sel)];
  const i = list.indexOf(el); return i < 0 ? 0 : i;
}
function runAppear(el) {
  if (el.hasAttribute('data-split')) {
    el._chars.forEach((c, i) => setTimeout(() => { c.style.transition = `opacity .5s ease, transform .8s ${EASE}`; c.style.opacity = '1'; c.style.transform = 'none'; }, i * 28));
  } else if (el.hasAttribute('data-up') || el.hasAttribute('data-x')) {
    const delay = el.hasAttribute('data-up') ? siblingIndex(el, '[data-up]') * 120 : siblingIndex(el, '[data-x]') * 120;
    setTimeout(() => { el.style.transition = `opacity .7s ease, transform .9s ${EASE}`; el.classList.add('anim-done'); }, delay);
  } else if (el.hasAttribute('data-pop')) {
    const px = parseFloat(el.style.getPropertyValue('--px')) || 0;
    const cs = getComputedStyle(el); const rot = cs.getPropertyValue('--rot').trim() || '0deg'; const ty = parseFloat(cs.getPropertyValue('--ty')) || 0;
    const delay = siblingIndex(el, '[data-pop]') * 110;
    setTimeout(() => spring(0, 1, p => {
      el.style.opacity = Math.min(1, p * 1.5);
      el.style.transform = `rotate(${rot}) translate(${px * (1 - p)}px,${64 * (1 - p) + ty}px) scale(${p})`;
    }, { stiffness: 170, damping: 15, onDone: () => { el.style.transform = `rotate(${rot}) translateY(${ty}px)`; el.style.opacity = '1'; } }), delay);
  } else if (el.hasAttribute('data-fly')) {
    const fx = parseFloat(el.style.getPropertyValue('--fx')) || 0, fy = parseFloat(el.style.getPropertyValue('--fy')) || 0;
    const delay = 400 + siblingIndex(el, '[data-fly]') * 130;
    setTimeout(() => spring(0, 1, p => {
      el.style.opacity = Math.min(1, p * 1.5);
      el.style.transform = `translate(calc(var(--dx,0px) + ${fx * (1 - p)}px),calc(var(--dy,0px) + ${fy * (1 - p)}px)) scale(${p})`;
    }, { stiffness: 200, damping: 14, onDone: () => { el.style.transform = 'translate(var(--dx,0px),var(--dy,0px))'; } }), delay);
  } else if (el.hasAttribute('data-giant')) {
    spring(0, 1, p => {
      el.style.opacity = Math.min(1, p) * 0.06;
      el.style.transform = `translateY(calc(var(--gy) + ${48 * (1 - p)}px)) scale(${p})`;
    }, { stiffness: 120, damping: 14, onDone: () => { el.style.opacity = '0.06'; el.style.transform = 'translateY(var(--gy))'; } });
  } else if (el.hasAttribute('data-menu')) {
    spring(0, 1, p => {
      el.style.opacity = Math.min(1, p * 1.5);
      el.style.transform = `translateY(${64 * (1 - p)}px) scale(${0.8 + 0.2 * p}) rotate(${-5 * (1 - p)}deg)`;
    }, { stiffness: 150, damping: 15 });
    el.querySelectorAll('.item .dots').forEach((d, i) => setTimeout(() => {
      d.style.transition = 'transform .7s cubic-bezier(.22,1,.36,1), opacity .4s ease'; d.style.transform = 'none'; d.style.opacity = '1';
    }, 250 + i * 35));
  }
}
// Visibility check that ignores transforms (elements start at scale(0), so IntersectionObserver would miss them)
const pendingAppear = new Set(document.querySelectorAll('[data-split],[data-up],[data-pop],[data-fly],[data-menu],[data-x],[data-giant]'));
function docTop(el) { let y = 0; while (el) { y += el.offsetTop; el = el.offsetParent; } return y; }
function checkAppear() {
  const sy = window.scrollY, vh = window.innerHeight;
  for (const el of pendingAppear) {
    const top = docTop(el), h = el.offsetHeight || 1;
    if (top < sy + vh * 0.92 && top + h > sy) { pendingAppear.delete(el); runAppear(el); }
  }
}
window.addEventListener('scroll', checkAppear, { passive: true });
window.addEventListener('resize', checkAppear);
if (lenis) lenis.on('scroll', checkAppear);
window.addEventListener('load', checkAppear);
checkAppear();

/* ---------- Mobile menu ---------- */
const mm = document.querySelector('.mobile-menu');
document.querySelector('.burger-btn').addEventListener('click', () => mm.classList.add('open'));
mm.querySelectorAll('a, .close').forEach(el => el.addEventListener('click', () => mm.classList.remove('open')));

/* ---------- Waitlist form ---------- */
(function () {
  const form = document.getElementById('waitlist-form');
  if (!form) return;
  const status = form.querySelector('.wl-status');
  const btn = form.querySelector('.wl-btn');
  const wa = form.querySelector('.wl-alt');
  const sel = form.querySelector('select[name=diet]');
  const syncSel = () => sel.toggleAttribute('data-empty', !sel.value);
  sel.addEventListener('change', syncSel); syncSel();
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());
    if (!data.name || !data.name.trim()) { status.textContent = 'Tell us your name.'; return; }
    if (!/^[+\d][\d\s-]{7,}$/.test(data.phone || '')) { status.textContent = 'Add a WhatsApp number we can reach you on.'; return; }
    status.classList.remove('ok'); status.textContent = 'Saving\u2026'; btn.disabled = true;
    try {
      const r = await fetch('/api/interest', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...data, source: location.href }) });
      const j = await r.json().catch(() => ({}));
      if (r.ok) {
        form.classList.add('is-done'); status.classList.add('ok');
        status.textContent = 'You\u2019re on the list. We\u2019ll WhatsApp you when Katoro opens.';
        spawnParticle(innerWidth / 2, innerHeight / 2);
        return;
      }
      throw new Error(j.error || 'failed');
    } catch (err) {
      const msg = encodeURIComponent(`Hi Katoro, I'm interested in the launch.\nName: ${data.name}\nPhone: ${data.phone}\nArea: ${data.area || '-'}\nDiet: ${data.diet || '-'}`);
      wa.href = 'https://wa.me/919000000000?text=' + msg;
      status.textContent = 'Couldn\u2019t save right now \u2014 tap the WhatsApp link below and we\u2019ll add you by hand.';
    } finally { btn.disabled = false; }
  });
})();

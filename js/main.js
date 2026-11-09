/* Dorian Guzman: contact form + motion.
   Motion runs on GSAP + ScrollTrigger (vendored in js/vendor). Markup opts in declaratively:
   [data-split] headlines rise word by word, [data-rise] blocks rise as they enter, .count numbers
   count up. Without JS, or with reduced motion, every element is simply visible. */
(() => {
  'use strict';

  /* ================================================================== Settings
     The one place to retune behaviour. Colours and sizes live in css/style.css. */
  const CONTACT = {
    whatsapp: 'https://wa.me/4915739511230',
    message: (name, company) => `Hi Dorian, I'm ${name} from ${company}. `,
  };
  const MOTION = {
    query: {
      full: '(prefers-reduced-motion: no-preference) and (min-width: 45.01rem)',
      lite: '(prefers-reduced-motion: no-preference) and (max-width: 45rem)',
    },
    cls: { gate: 'motion' },
    scrub: 0.6,
    intro: { duration: 1.1, stagger: 0.07, ease: 'power4.out', wipe: 1.0 },
    words: { duration: 0.9, stagger: 0.04, ease: 'power3.out', start: 'top 85%' },
    reveal: { y: 40, duration: 0.9, stagger: 0.08, ease: 'power3.out', start: 'top 88%' },
    count: { duration: 1.6, ease: 'power2.out', start: 'top 85%' },
    cycle: { roles: ['Engineer', 'Strategist', 'Operator', 'Closer'], hold: 1.8, swap: 0.45 },
    converge: { from: 140, start: 'top 90%', end: 'top 35%' },
  };

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
  const root = document.documentElement;

  /* ================================================================== Contact form */
  const form = $('#whatsapp-form');
  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const values = new FormData(form);
      const name = String(values.get('name') || '').trim();
      const company = String(values.get('company') || '').trim();
      if (!name || !company) { $(!name ? '#name' : '#company', form).focus(); return; }
      const text = encodeURIComponent(CONTACT.message(name, company));
      window.open(`${CONTACT.whatsapp}?text=${text}`, '_blank', 'noopener,noreferrer');
    });
  }

  /* ================================================================== Shared primitives */

  /* Wrap each word in a mask (span.w > span.w__in) so it can rise into view. <br> stays as is. */
  function splitWords(el) {
    const unit = (node) => {
      const w = document.createElement('span'), inner = document.createElement('span');
      w.className = 'w'; inner.className = 'w__in';
      inner.append(node); w.append(inner);
      return w;
    };
    const parts = [];
    [...el.childNodes].forEach((n) => {
      if (n.nodeType !== Node.TEXT_NODE) { parts.push(n.nodeName === 'BR' ? n : unit(n)); return; }
      n.textContent.split(/(\s+)/).forEach((t) => {
        if (t) parts.push(/^\s+$/.test(t) ? document.createTextNode(t) : unit(document.createTextNode(t)));
      });
    });
    el.replaceChildren(...parts);
    return $$('.w__in', el);
  }

  /* Calm rise for every [data-rise] block, batched so neighbours stagger together */
  function reveal(els) {
    if (!els.length) return;
    const R = MOTION.reveal;
    gsap.set(els, { opacity: 0, y: R.y });   /* opacity, not autoAlpha: hidden content must stay keyboard reachable */
    ScrollTrigger.batch(els, {
      start: R.start, once: true,
      onEnter: (batch) => gsap.to(batch, { opacity: 1, y: 0, duration: R.duration, stagger: R.stagger, ease: R.ease, overwrite: true }),
    });
    /* Focus that lands in a row before it has scrolled in reveals it at once */
    els.forEach((el) => el.addEventListener('focusin', () => gsap.to(el, { opacity: 1, y: 0, duration: R.duration / 3, overwrite: true }), { once: true }));
  }

  /* ================================================================== Scenes */

  /* Hero: the blue half wipes in, then both halves rise word by word */
  function heroIntro(words) {
    const I = MOTION.intro;
    gsap.set(words, { yPercent: 110 });
    root.classList.remove(MOTION.cls.gate);   /* words are masked now; the pre-paint gate can lift */
    gsap.set('.right-half', { clipPath: 'inset(0 0 0 100%)' });
    gsap.set(['.header', '.hero-bottom > *'], { opacity: 0, y: 16 });
    gsap.timeline({ defaults: { ease: I.ease } })
      .to('.header', { opacity: 1, y: 0, duration: 0.6 })
      .to('.right-half', { clipPath: 'inset(0 0 0 0%)', duration: I.wipe }, '<0.1')
      .to(words, { yPercent: 0, duration: I.duration, stagger: I.stagger }, '<0.15')
      .to('.hero-bottom > *', { opacity: 1, y: 0, duration: 0.9, stagger: 0.12 }, '-=0.7');
  }

  /* Hero on scroll: the two halves drift toward each other, Build meets Market */
  function heroConverge() {
    const hero = $('.hero');
    const travel = getComputedStyle(root).getPropertyValue('--split-travel').trim();
    gsap.fromTo(hero, { '--split-inset': '0vw' }, {
      '--split-inset': travel, ease: 'none',
      scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: MOTION.scrub },
    });
  }

  /* Headlines below the fold rise word by word as they enter */
  function wordsRise(el, words) {
    const W = MOTION.words;
    gsap.set(words, { yPercent: 110 });
    gsap.to(words, { yPercent: 0, duration: W.duration, stagger: W.stagger, ease: W.ease, scrollTrigger: { trigger: el, start: W.start, once: true } });
  }

  /* "In one seat: ..." steps through the roles once, then settles on all of them together.
     It never loops: endless motion beside reading text is a distraction (and WCAG 2.2.2). */
  function roleCycle() {
    const word = $('.cycler-word'), all = $('.cycler-all');
    if (!word || !all) return;
    const C = MOTION.cycle;
    const out = { yPercent: -100, opacity: 0, duration: C.swap, ease: 'power2.in' };
    const into = [{ yPercent: 100, opacity: 0 }, { yPercent: 0, opacity: 1, duration: C.swap, ease: 'power2.out' }];
    gsap.set(all, { opacity: 0 });
    word.textContent = C.roles[0];
    const tl = gsap.timeline();
    C.roles.slice(1).forEach((role) => {
      tl.to(word, out, `+=${C.hold}`).call(() => { word.textContent = role; }).fromTo(word, ...into);
    });
    tl.to(word, out, `+=${C.hold}`).fromTo(all, ...into);
    return () => { word.textContent = ''; gsap.set(all, { clearProps: 'all' }); };
  }

  /* Proof numbers count up from zero, once */
  function countUp(els) {
    const K = MOTION.count;
    els.forEach((el) => {
      const to = Number(el.dataset.to);
      const state = { v: 0 };
      el.textContent = '0';
      gsap.to(state, {
        v: to, duration: K.duration, ease: K.ease,
        scrollTrigger: { trigger: el, start: K.start, once: true },
        onUpdate: () => { el.textContent = String(Math.round(state.v)); },
      });
    });
    return () => els.forEach((el) => { el.textContent = el.dataset.to; });
  }

  /* Discipline arrows travel in from both sides and meet as the panels scroll up */
  function arrowsConverge() {
    const V = MOTION.converge;
    const grid = $('.discipline-grid');
    const st = { trigger: grid, start: V.start, end: V.end, scrub: MOTION.scrub };
    gsap.fromTo('.converge span:first-child', { xPercent: -V.from }, { xPercent: 0, ease: 'none', scrollTrigger: st });
    gsap.fromTo('.converge span:last-child', { xPercent: V.from }, { xPercent: 0, ease: 'none', scrollTrigger: { ...st } });
  }

  /* Thin progress bar under the viewport top */
  function progressBar() {
    gsap.to('.progress', { scaleX: 1, ease: 'none', scrollTrigger: { start: 0, end: 'max', scrub: true } });
  }

  /* ================================================================== Start-up */
  if (!(window.gsap && window.ScrollTrigger)) { root.classList.remove(MOTION.cls.gate); return; }
  gsap.registerPlugin(ScrollTrigger);

  /* Split every headline once, up front; scenes only animate the words */
  const splits = $$('[data-split]').map((el) => ({ el, words: splitWords(el), hero: !!el.closest('.hero') }));
  const heroWords = splits.filter((s) => s.hero).flatMap((s) => s.words);

  let introPlayed = false;
  const mm = gsap.matchMedia();
  mm.add({ full: MOTION.query.full, lite: MOTION.query.lite }, (ctx) => {
    const { full } = ctx.conditions;
    const cleanups = [];
    try {
      if (!introPlayed) { heroIntro(heroWords); introPlayed = true; }
      if (full) heroConverge();
      splits.filter((s) => !s.hero).forEach((s) => wordsRise(s.el, s.words));
      cleanups.push(roleCycle(), countUp($$('.count')));
      arrowsConverge();
      progressBar();
      reveal($$('[data-rise]'));
    } catch (err) {
      console.error(err);
      setTimeout(() => mm.revert(), 0);
    }
    return () => cleanups.forEach((fn) => fn && fn());
  });

  /* No motion query matched (reduced motion): show everything as authored */
  if (!introPlayed) root.classList.remove(MOTION.cls.gate);

  /* Measurements change as the photo and fonts settle */
  let soon = 0;
  const refreshSoon = () => { clearTimeout(soon); soon = setTimeout(() => ScrollTrigger.refresh(), 150); };
  $$('img').forEach((img) => { if (!img.complete) img.addEventListener('load', refreshSoon, { once: true }); });
  if (document.fonts) document.fonts.ready.then(refreshSoon);
})();

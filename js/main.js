/* =====================================================================
   سديم لأنظمة الأمن والسلامة - سلوك الموقع
   يقرأ البيانات من js/data.js ويبني الأقسام الديناميكية.
   ===================================================================== */
(function () {
  'use strict';

  const D = window.SITE_DATA || {};
  const CO = D.company || {};
  const C = D.contact || {};
  const M = D.whatsappMessages || {};
  const $ = (s, r) => (r || document).querySelector(s);
  const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));
  const esc = (v) => String(v == null ? '' : v).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- الأيقونات ---------- */
  const svg = (inner, fill) => `<svg viewBox="0 0 24 24" ${fill ? 'fill="currentColor"' : 'fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"'} aria-hidden="true">${inner}</svg>`;
  const ICONS = {
    flame: svg('<path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>'),
    bell: svg('<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>'),
    helmet: svg('<path d="M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2z"/><path d="M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5"/><path d="M4 15v-3a6 6 0 0 1 6-6"/><path d="M14 6a6 6 0 0 1 6 6v3"/>'),
    wrench: svg('<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>'),
    blueprint: svg('<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/><path d="M14 14h4"/><path d="M14 17h4"/>'),
    file: svg('<path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>'),
    certificate: svg('<path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><path d="m9 15 2 2 4-4"/>'),
    camera: svg('<path d="m22 8-6 4 6 4V8Z"/><rect width="14" height="12" x="2" y="6" rx="2" ry="2"/>'),
    shield: svg('<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>'),
    check: svg('<path d="M20 6 9 17l-5-5"/>'),
    phone: svg('<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>'),
    mobile: svg('<rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><path d="M12 18h.01"/>'),
    mail: svg('<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>'),
    pin: svg('<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>'),
    clock: svg('<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>'),
    download: svg('<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/>'),
    eye: svg('<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>'),
    doc: svg('<path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/>'),
    arrow: svg('<path d="M19 12H5"/><path d="m12 19-7-7 7-7"/>'),
    whatsapp: svg('<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>', true),
    prev: svg('<polyline points="9 18 15 12 9 6"/>'),   // في الواجهة العربية "السابق" يشير إلى اليمين
    next: svg('<polyline points="15 18 9 12 15 6"/>'),
    close: svg('<path d="M18 6 6 18"/><path d="m6 6 12 12"/>')
  };
  $$('[data-icon]').forEach((el) => { el.innerHTML = ICONS[el.dataset.icon] || ''; });

  /* ---------- روابط الواتساب والملفات ---------- */
  const getWa = () => String(C.whatsapp || '').replace(/\D/g, '');
  const waLink = (text) => { const n = getWa(); return n ? `https://wa.me/${n}${text ? '?text=' + encodeURIComponent(text) : ''}` : '#contact'; };
  const waAttrs = () => getWa() ? 'target="_blank" rel="noopener"' : '';

  function wireLinks() {
    $$('[data-wa]').forEach((a) => {
      a.href = waLink(M[a.dataset.wa] || M.general || '');
      if (getWa()) { a.target = '_blank'; a.rel = 'noopener'; }
      else { a.title = 'يُفعَّل الزر بعد إضافة رقم الواتساب في js/data.js'; }
    });
    const files = { profile: CO.profileFile, catalog: CO.catalogFile };
    Object.keys(files).forEach((key) => {
      $$(`[data-${key}]`).forEach((a) => {
        if (files[key]) { a.href = files[key]; a.setAttribute('download', ''); a.hidden = false; }
        else { a.hidden = true; }
      });
    });
  }

  function hideSection(id) {
    const s = document.getElementById(id);
    if (s) s.hidden = true;
    $$(`a[href="#${id}"]`).forEach((a) => { const li = a.closest('li'); if (li) li.hidden = true; else a.hidden = true; });
  }

  /* ---------- الشاشة الأولى ---------- */
  function renderHero() {
    const h = D.hero || {};
    const wrap = $('#hero-visual');
    if (wrap) {
      if (h.image) {
        wrap.innerHTML = `
          <figure class="hero__figure">
            <img class="hero__photo" src="${esc(h.image)}" alt="${esc(h.imageAlt || '')}" width="900" height="551" fetchpriority="high">
            ${h.caption ? `<figcaption class="hero__caption"><strong>${esc(h.caption)}</strong>${h.captionSub ? `<span>${esc(h.captionSub)}</span>` : ''}</figcaption>` : ''}
          </figure>`;
      } else {
        wrap.innerHTML = `<div class="hero__panel"><img src="${esc(CO.logo)}" alt="${esc(CO.name)}"></div>`;
      }
    }
    const lead = $('#hero-lead');
    if (lead && CO.description) lead.textContent = CO.description;
    const steps = $('#steps');
    if (steps) steps.innerHTML = (h.steps || []).map((s) => `<li>${esc(s)}</li>`).join('');
    const logos = $('#logos');
    const list = D.clientLogos || [];
    if (logos) {
      if (!list.length) { $('#band').hidden = true; }
      else logos.innerHTML = list.map((l) => `<li><img src="${esc(l.image)}" alt="${esc(l.name)}" loading="lazy" decoding="async" title="${esc(l.name)}"></li>`).join('');
    }
  }

  /* ---------- من نحن ---------- */
  function renderAbout() {
    const a = D.about || {};
    const text = $('#about-text');
    if (text) text.innerHTML = (a.paragraphs || []).map((p) => `<p>${esc(p)}</p>`).join('');
    const checks = $('#about-checks');
    if (checks) checks.innerHTML = (a.checks || []).map((c) => `<li>${ICONS.check}<span>${esc(c)}</span></li>`).join('');
    const vis = $('#about-visual');
    if (vis) {
      vis.innerHTML = a.image ? `
        <figure class="about__figure">
          <img src="${esc(a.image)}" alt="${esc(a.imageAlt || '')}" width="938" height="704" loading="lazy" decoding="async">
          ${a.caption ? `<figcaption class="about__caption">${a.captionLabel ? `<small>${esc(a.captionLabel)}</small>` : ''}<strong>${esc(a.caption)}</strong>${a.captionSub ? `<span>${esc(a.captionSub)}</span>` : ''}</figcaption>` : ''}
        </figure>` : '';
      vis.hidden = !a.image;
    }
  }

  /* ---------- الخدمات ---------- */
  function renderServices() {
    const grid = $('#services-grid');
    const list = (D.services || []).filter((s) => s.enabled !== false);
    if (!grid) return;
    if (!list.length) { hideSection('services'); return; }
    grid.innerHTML = list.map((s, i) => `
      <article class="card reveal" data-delay="${(i % 3) + 1}">
        <div class="card__top"><div class="card__icon">${ICONS[s.icon] || ICONS.shield}</div><span class="card__num">${String(i + 1).padStart(2, '0')}</span></div>
        <h3>${esc(s.title)}</h3>
        <p>${esc(s.desc)}</p>
        ${s.note ? `<span class="card__note">${esc(s.note)}</span>` : ''}
        <a class="btn btn--wa btn--sm" href="${waLink((M.service || '').replace('{service}', s.title))}" ${waAttrs()}>${ICONS.whatsapp}<span>استفسر عن الخدمة</span></a>
      </article>`).join('');
  }

  /* ---------- المنتجات ---------- */
  function renderProducts() {
    const grid = $('#products-grid');
    const p = D.products || {};
    const list = p.items || [];
    if (!grid) return;
    if (!list.length) { hideSection('products'); return; }
    const intro = $('#products-intro'); if (intro && p.intro) intro.textContent = p.intro;
    grid.innerHTML = list.map((it, i) => `
      <article class="product reveal" data-delay="${(i % 3) + 1}">
        <div class="product__media">${it.image ? `<img src="${esc(it.image)}" alt="${esc(it.alt || it.title)}" loading="lazy" decoding="async">` : ''}</div>
        <div class="product__body">
          <h3>${esc(it.title)}</h3>
          <p>${esc(it.desc)}</p>
          <a class="btn btn--ghost btn--sm" href="${waLink((M.product || '').replace('{product}', it.title))}" ${waAttrs()}>${ICONS.whatsapp}<span>استفسر عن المنتجات</span></a>
        </div>
      </article>`).join('');
  }

  /* ---------- أعمالنا ---------- */
  function renderProjects() {
    const grid = $('#projects-grid');
    const list = D.projects || [];
    const sec = D.sectors || {};
    const sectorsWrap = $('#sectors');
    if (grid) {
      if (!list.length) grid.hidden = true;
      else grid.innerHTML = list.map((p, i) => `
        <article class="project reveal" data-delay="${(i % 3) + 1}">
          ${p.image ? `<div class="project__media"><img src="${esc(p.image)}" alt="${esc(p.alt || p.name)}" loading="lazy" decoding="async"></div>` : ''}
          <div class="project__body">
            ${p.type ? `<span class="project__type">${esc(p.type)}</span>` : ''}
            <h3>${esc(p.name)}${p.nameEn ? ` <small>${esc(p.nameEn)}</small>` : ''}</h3>
            ${p.desc ? `<p>${esc(p.desc)}</p>` : ''}
            ${Array.isArray(p.scope) && p.scope.length ? `<ul class="tags">${p.scope.map((s) => `<li>${esc(s)}</li>`).join('')}</ul>` : ''}
          </div>
        </article>`).join('');
    }
    if (sectorsWrap) {
      const groups = sec.groups || [];
      if (!groups.length) sectorsWrap.hidden = true;
      else sectorsWrap.innerHTML = `
        <div class="section-head reveal">${sec.title ? `<h3>${esc(sec.title)}</h3>` : ''}${sec.subtitle ? `<p>${esc(sec.subtitle)}</p>` : ''}</div>
        <div class="sectors">${groups.map((g, i) => `
          <div class="sector reveal" data-delay="${(i % 4) + 1}">
            <h4><span class="sector__num">${String(i + 1).padStart(2, '0')}</span>${esc(g.title)}</h4>
            <ul>${(g.items || []).map((x) => `<li>${esc(x)}</li>`).join('')}</ul>
          </div>`).join('')}
        </div>
        ${sec.extra ? `<p class="sectors__extra reveal">${esc(sec.extra)}</p>` : ''}`;
    }
    if (!list.length && !(sec.groups || []).length) hideSection('projects');
  }

  /* ---------- المعرض وعارض الصور ---------- */
  const galleryItems = [];
  function renderGallery(gridId, list) {
    const grid = $('#' + gridId);
    if (!grid || !list || !list.length) return false;
    grid.innerHTML = list.map((c, i) => {
      const idx = galleryItems.push({ src: c.image || c.thumb, caption: c.name || '' }) - 1;
      return `
      <figure class="gallery__item reveal" data-delay="${(i % 4) + 1}">
        <button type="button" data-lightbox="${idx}" aria-label="فتح صورة ${esc(c.name || '')} بالحجم الكامل">
          <div class="gallery__img"><img src="${esc(c.thumb || c.image)}" alt="${esc(c.alt || c.name || '')}" loading="lazy" decoding="async"></div>
          <figcaption class="gallery__name">${esc(c.name || '')}</figcaption>
        </button>
      </figure>`;
    }).join('');
    return true;
  }

  function renderClients() {
    const hasClients = renderGallery('clients-grid', D.clients);
    const hasPartners = renderGallery('partners-grid', D.partners);
    const partnersBlock = $('#partners');
    if (partnersBlock && !hasPartners) partnersBlock.hidden = true;
    if (!hasClients && !hasPartners) hideSection('clients');
  }

  const lightbox = {
    el: null, img: null, cap: null, counter: null, index: 0, lastFocus: null,
    init() {
      this.el = $('#lightbox'); if (!this.el) return;
      this.img = $('.lightbox__figure img', this.el);
      this.cap = $('.lightbox__caption', this.el);
      this.counter = $('.lightbox__counter', this.el);
      $('.lightbox__close', this.el).addEventListener('click', () => this.close());
      $('.lightbox__prev', this.el).addEventListener('click', () => this.step(-1));
      $('.lightbox__next', this.el).addEventListener('click', () => this.step(1));
      this.el.addEventListener('click', (e) => { if (e.target === this.el || e.target.classList.contains('lightbox__figure')) this.close(); });
      document.addEventListener('keydown', (e) => {
        if (!this.el.classList.contains('is-open')) return;
        if (e.key === 'Escape') this.close();
        else if (e.key === 'ArrowLeft') this.step(1);
        else if (e.key === 'ArrowRight') this.step(-1);
      });
      let startX = null;
      this.el.addEventListener('touchstart', (e) => { startX = e.touches[0].clientX; }, { passive: true });
      this.el.addEventListener('touchend', (e) => {
        if (startX == null) return;
        const dx = e.changedTouches[0].clientX - startX; startX = null;
        if (Math.abs(dx) > 50) this.step(dx < 0 ? 1 : -1);
      });
      document.addEventListener('click', (e) => {
        const btn = e.target.closest('[data-lightbox]');
        if (btn) this.open(Number(btn.dataset.lightbox));
      });
    },
    open(i) {
      if (!galleryItems.length) return;
      this.lastFocus = document.activeElement;
      this.index = i; this.show();
      this.el.classList.add('is-open'); this.el.setAttribute('aria-hidden', 'false');
      document.body.classList.add('lightbox-open');
      $('.lightbox__close', this.el).focus();
    },
    show() {
      const item = galleryItems[this.index];
      this.img.src = item.src; this.img.alt = item.caption;
      this.cap.textContent = item.caption;
      this.counter.textContent = `${this.index + 1} / ${galleryItems.length}`;
      const single = galleryItems.length < 2;
      $('.lightbox__prev', this.el).hidden = single;
      $('.lightbox__next', this.el).hidden = single;
    },
    step(d) { this.index = (this.index + d + galleryItems.length) % galleryItems.length; this.show(); },
    close() {
      this.el.classList.remove('is-open'); this.el.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('lightbox-open');
      this.img.removeAttribute('src');
      if (this.lastFocus && this.lastFocus.focus) this.lastFocus.focus();
    }
  };

  /* ---------- الوثائق ---------- */
  function docStatus(expires) {
    if (!expires) return '';
    const d = new Date(expires); if (isNaN(d)) return '';
    const today = new Date(); today.setHours(0, 0, 0, 0);
    return d >= today
      ? '<span class="doc__status doc__status--ok">سارية</span>'
      : '<span class="doc__status doc__status--expired">منتهية الصلاحية</span>';
  }
  function renderDocuments() {
    const grid = $('#documents-grid');
    const list = D.documents || [];
    if (!grid) return;
    if (!list.length) { hideSection('documents'); return; }
    grid.innerHTML = list.map((d, i) => `
      <article class="doc reveal" data-delay="${(i % 3) + 1}">
        <div class="doc__preview">${d.preview ? `<img src="${esc(d.preview)}" alt="معاينة ${esc(d.title)}" loading="lazy" decoding="async">` : ICONS.doc}</div>
        <div class="doc__body">
          ${d.issuer ? `<span class="doc__issuer">${esc(d.issuer)}</span>` : ''}
          <h3>${esc(d.title)} ${docStatus(d.expires)}</h3>
          ${Array.isArray(d.details) && d.details.length ? `<dl class="doc__details">${d.details.map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join('')}</dl>` : ''}
          ${d.note ? `<p class="doc__meta">${esc(d.note)}</p>` : ''}
          <div class="doc__actions">
            ${d.file ? `<a class="btn btn--ghost btn--sm" href="${esc(d.file)}" target="_blank" rel="noopener">${ICONS.eye}<span>عرض</span></a>
            <a class="btn btn--ghost btn--sm" href="${esc(d.file)}" download>${ICONS.download}<span>تحميل</span></a>` : ''}
          </div>
        </div>
      </article>`).join('');
  }

  /* ---------- التواصل ---------- */
  function contactRows() {
    const rows = [];
    const tel = (v) => `tel:${String(v).replace(/[^\d+]/g, '')}`;
    if (C.phone) rows.push({ icon: 'phone', label: 'الهاتف', html: `<a href="${tel(C.phone)}">${esc(C.phone)}</a>`, ltr: true });
    if (C.mobile) rows.push({ icon: 'mobile', label: 'الجوال', html: `<a href="${tel(C.mobile)}">${esc(C.mobile)}</a>`, ltr: true });
    if (getWa()) rows.push({ icon: 'whatsapp', label: 'واتساب', html: `<a href="${waLink(M.general)}" target="_blank" rel="noopener">+${esc(getWa())}</a>`, ltr: true });
    if (C.email) rows.push({ icon: 'mail', label: 'البريد الإلكتروني', html: `<a href="mailto:${esc(C.email)}">${esc(C.email)}</a>`, ltr: true });
    if (C.address) rows.push({ icon: 'pin', label: 'العنوان', html: C.mapUrl ? `<a href="${esc(C.mapUrl)}" target="_blank" rel="noopener">${esc(C.address)}</a>` : esc(C.address) });
    if (C.workingHours) rows.push({ icon: 'clock', label: 'ساعات العمل', html: esc(C.workingHours) });
    return rows;
  }
  function renderContact() {
    const list = $('#contact-list');
    const rows = contactRows();
    if (list) {
      list.innerHTML = rows.length
        ? rows.map((r) => `<li class="contact__item">${ICONS[r.icon]}<div><div class="contact__label">${r.label}</div><div class="contact__value${r.ltr ? ' ltr' : ''}">${r.html}</div></div></li>`).join('')
        : '<li class="note">بيانات التواصل تُضاف في ملف js/data.js.</li>';
    }
    const map = $('#contact-map');
    if (map) {
      if (C.mapEmbedUrl) map.innerHTML = `<iframe src="${esc(C.mapEmbedUrl)}" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="موقع الشركة على الخريطة" allowfullscreen></iframe>`;
      else map.hidden = true;
    }
    const foot = $('#footer-contact');
    if (foot) foot.innerHTML = rows.map((r) => `<li>${ICONS[r.icon]}<span${r.ltr ? ' class="ltr"' : ''}>${r.html}</span></li>`).join('');
    const waFloat = $('.wa-float');
    if (waFloat) waFloat.hidden = !getWa();
  }

  /* ---------- بيانات محركات البحث (JSON-LD) ---------- */
  function injectJsonLd() {
    const base = (CO.siteUrl || '').replace(/\/?$/, '/');
    const data = {
      '@context': 'https://schema.org', '@type': 'LocalBusiness',
      name: CO.name, legalName: CO.legalName, alternateName: CO.nameEn, url: CO.siteUrl,
      logo: base + CO.logo, image: base + ((D.hero || {}).image || CO.logo),
      description: CO.description, areaServed: CO.country
    };
    const phones = [C.phone, C.mobile].filter(Boolean);
    if (phones.length) data.telephone = phones;
    if (C.email) data.email = C.email;
    if (C.address) data.address = { '@type': 'PostalAddress', streetAddress: C.address, addressLocality: C.city || '', addressCountry: 'SA' };
    const s = document.createElement('script'); s.type = 'application/ld+json'; s.textContent = JSON.stringify(data);
    document.head.appendChild(s);
  }

  /* ---------- التنقل ---------- */
  function initNav() {
    const header = $('.header'); const nav = $('#nav'); const toggle = $('.nav-toggle');
    const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 8);
    onScroll(); window.addEventListener('scroll', onScroll, { passive: true });
    const closeNav = () => { nav.classList.remove('is-open'); toggle.setAttribute('aria-expanded', 'false'); };
    toggle.addEventListener('click', () => {
      const open = !nav.classList.contains('is-open');
      nav.classList.toggle('is-open', open); toggle.setAttribute('aria-expanded', String(open));
    });
    $$('a', nav).forEach((a) => a.addEventListener('click', closeNav));
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeNav(); });
    document.addEventListener('click', (e) => { if (!nav.contains(e.target) && !toggle.contains(e.target)) closeNav(); });

    const links = $$('a[href^="#"]', nav);
    const sections = links.map((a) => document.querySelector(a.getAttribute('href'))).filter(Boolean);
    if ('IntersectionObserver' in window && sections.length) {
      const io = new IntersectionObserver((entries) => {
        entries.forEach((en) => {
          if (!en.isIntersecting) return;
          links.forEach((a) => a.classList.toggle('is-active', a.getAttribute('href') === '#' + en.target.id));
        });
      }, { rootMargin: '-40% 0px -55% 0px' });
      sections.forEach((s) => io.observe(s));
    }
  }

  /* ---------- حركات الدخول ---------- */
  function initReveal() {
    const items = $$('.reveal');
    if (reduceMotion || !('IntersectionObserver' in window)) { items.forEach((el) => el.classList.add('is-visible')); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add('is-visible'); io.unobserve(en.target); } });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    items.forEach((el) => io.observe(el));
  }

  /* ---------- التشغيل ---------- */
  document.addEventListener('DOMContentLoaded', () => {
    renderHero(); renderAbout(); renderServices(); renderProducts(); renderProjects(); renderClients(); renderDocuments(); renderContact();
    wireLinks(); injectJsonLd(); lightbox.init(); initNav(); initReveal();
    const y = $('#year'); if (y) y.textContent = new Date().getFullYear();
  });
})();

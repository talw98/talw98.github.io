// Scroll progress - fills the scan line as the page is read
function initScanProgress(){
  const bar = document.querySelector('.scan-progress');
  if(!bar) return;
  const update = () => {
    const h = document.documentElement;
    const scrolled = h.scrollTop;
    const height = h.scrollHeight - h.clientHeight;
    const pct = height > 0 ? (scrolled / height) * 100 : 0;
    bar.style.width = pct + '%';
  };
  document.addEventListener('scroll', update, { passive: true });
  update();
}

// Mobile nav toggle
function initNavToggle(){
  const btn = document.querySelector('.nav-toggle');
  const nav = document.querySelector('nav.primary');
  if(!btn || !nav) return;
  btn.addEventListener('click', () => nav.classList.toggle('open'));
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
}

document.addEventListener('DOMContentLoaded', () => {
  initScanProgress();
  initNavToggle();
});

// Cursor
const cur  = document.getElementById('cur');
const ring = document.getElementById('ring');
document.addEventListener('mousemove', e => {
  cur.style.left  = e.clientX + 'px';
  cur.style.top   = e.clientY + 'px';
  ring.style.left = e.clientX + 'px';
  ring.style.top  = e.clientY + 'px';
});

// Page routing
let current = 'home';

function go(id) {
  if (id === current) return;
  const out = document.getElementById('page-' + current);
  const inn = document.getElementById('page-' + id);
  if (!inn) return;

  out.classList.add('leaving');
  setTimeout(() => {
    out.classList.remove('active', 'leaving');
    inn.scrollTop = 0;
    inn.querySelectorAll('.fi').forEach(el => {
      el.classList.remove('go');
      void el.offsetWidth;
    });
    inn.classList.add('active');
    setTimeout(() => inn.querySelectorAll('.fi').forEach(el => el.classList.add('go')), 30);
    current = id;
    updateNav();
  }, 260);
}

function updateNav() {
  document.querySelectorAll('[data-p]').forEach(b => {
    b.classList.toggle('active', b.dataset.p === current);
  });
}

// Animate home on load
window.addEventListener('load', () => {
  document.querySelectorAll('#page-home .fi').forEach(el => el.classList.add('go'));
  updateNav();
});

// Hamburger
const hbtn  = document.getElementById('hbtn');
const mmenu = document.getElementById('mmenu');
hbtn.addEventListener('click', () => {
  hbtn.classList.toggle('open');
  mmenu.classList.toggle('open');
});
function cm() {
  hbtn.classList.remove('open');
  mmenu.classList.remove('open');
}

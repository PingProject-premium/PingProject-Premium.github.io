/* Ping Project — сайт: появление секций, живое демо */

/* появление блоков при скролле */
const io = new IntersectionObserver((entries) => {
  for (const e of entries) {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      io.unobserve(e.target);
    }
  }
}, { threshold: 0.15 });
document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

/* живые цифры в демо-макете */
const numEl = document.getElementById('mockNum');
const rowEl = document.getElementById('mockA');
let v = 21;

setInterval(() => {
  v = Math.max(17, Math.min(29, v + Math.round((Math.random() - 0.5) * 4)));
  numEl.textContent = v;
  rowEl.textContent = v;
}, 1600);

/* прогресс в демо заполняется один раз при появлении */
const mock = document.getElementById('mock');
const fill = document.getElementById('mockFill');
let filled = false;

const mockIO = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting && !filled) {
    filled = true;
    setTimeout(() => {
      fill.style.width = '100%';
      setTimeout(() => { fill.style.opacity = '0'; }, 2800);
    }, 600);
    mockIO.disconnect();
  }
}, { threshold: 0.4 });
mockIO.observe(mock);

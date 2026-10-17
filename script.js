const helloBtn = document.querySelector('#helloBtn');
const status = document.querySelector('#status');
const themeBtn = document.querySelector('#themeBtn');
helloBtn.addEventListener('click', () => {
  status.textContent = 'Hello from GitHub Pages! ผมภูริพัฒน์ ยินดีที่ได้รู้จักครับ 👋';
});
themeBtn.addEventListener('click', () => {
  const light = document.body.classList.toggle('light');
  themeBtn.innerHTML = light ? '☾ <span>โหมดมืด</span>' : '☀ <span>โหมดสว่าง</span>';
  themeBtn.setAttribute('aria-pressed', String(light));
});

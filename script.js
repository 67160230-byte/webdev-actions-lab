const helloBtn = document.querySelector('#helloBtn');
const status = document.querySelector('#status');
const themeBtn = document.querySelector('#themeBtn');
helloBtn.addEventListener('click', () => {
  status.textContent = 'Hello from GitHub Pages! สวัสดีครับ ผมภูริพัฒน์ ยินดีที่ได้รู้จักครับ';
});
themeBtn.addEventListener('click', () => {
  const dark = document.body.classList.toggle('dark');
  themeBtn.textContent = dark ? 'โหมดสว่าง' : 'โหมดมืด';
  themeBtn.setAttribute('aria-pressed', String(dark));
});

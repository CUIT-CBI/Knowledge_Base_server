
const bodyEl = document.querySelector('body');
const toggleBtnEl = document.querySelector('.toggle-btn');
const htitleEl = document.querySelector('.htitle');
const bcolorEl = document.querySelectorAll('.bcolor');
const list_linkEl = document.querySelectorAll('.list__link');
const line_numbers = document.querySelectorAll('.line-numbers');
const token_color = document.querySelectorAll('.token');
const code_color = document.querySelectorAll('code');

function setTheme(theme) {
  if (theme === 'text-bg-light') {
    bodyEl.classList.remove('text-bg-dark');
    bodyEl.classList.add('text-bg-light');
    //header标题颜色
    htitleEl.classList.remove('text-light');
    htitleEl.classList.add('text-dark');
    //边框颜色bcolorEl
    for (let i = 0; i < bcolorEl.length; i++) {
      bcolorEl[i].classList.remove('border-code');
      bcolorEl[i].classList.add('border-secondary-subtle');
    };
    //正文标题list_linkEl
    for (let i = 0; i < list_linkEl.length; i++) {
      list_linkEl[i].classList.remove('text-light');
      list_linkEl[i].classList.add('text-dark');
    };
    //代码背景
    for (let i = 0; i < line_numbers.length; i++) {
      line_numbers[i].classList.remove('text-bg-code');
      line_numbers[i].classList.add('text-bg-light');
    };
    for (let i = 0; i < token_color.length; i++) {
      token_color[i].classList.remove('text-bg-code');
      token_color[i].classList.add('text-bg-light');
    };
    for (let i = 0; i < code_color.length; i++) {
      code_color[i].classList.remove('text-bg-code');
      code_color[i].classList.add('text-bg-light');
    };
  } else {
    bodyEl.classList.remove('text-bg-light');
    bodyEl.classList.add('text-bg-dark');
    htitleEl.classList.remove('text-dark');
    htitleEl.classList.add('text-light');
    for (let i = 0; i < bcolorEl.length; i++) {
      bcolorEl[i].classList.remove('border-secondary-subtle');
      bcolorEl[i].classList.add('border-code');
    };
    for (let i = 0; i < list_linkEl.length; i++) {
      list_linkEl[i].classList.remove('text-dark');
      list_linkEl[i].classList.add('text-light');
    };
    for (let i = 0; i < line_numbers.length; i++) {
      line_numbers[i].classList.remove('text-bg-light');
      line_numbers[i].classList.add('text-bg-code');
    }
    for (let i = 0; i < token_color.length; i++) {
      token_color[i].classList.remove('text-bg-light');
      token_color[i].classList.add('text-bg-code');
    };
    for (let i = 0; i < code_color.length; i++) {
      code_color[i].classList.remove('text-bg-light');
      code_color[i].classList.add('text-bg-code');
    };
  }
}

// 检查 localStorage 中是否已保存了主题偏好
const theme = localStorage.getItem('theme');
if (theme) {
  setTheme(theme);
}

// 添加事件监听器
toggleBtnEl.addEventListener('click', () => {
  // 切换主题类名
  if (bodyEl.classList.contains('text-bg-dark')) {
    localStorage.setItem('theme', 'text-bg-light');
    setTheme('text-bg-light');
  } else {
    localStorage.setItem('theme', 'text-bg-dark');
    setTheme('text-bg-dark');
  }
});

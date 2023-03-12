// 获取 HTML 元素
const bodyEl = document.querySelector('body');
const toggleBtnEl = document.querySelector('.toggle-btn');
const htitleEl = document.querySelector('.htitle');
const bcolorEl = document.querySelectorAll('.bcolor');
const list_linkEl = document.querySelectorAll('.list__link');


// 检查 localStorage 中是否已保存了主题偏好
const theme = localStorage.getItem('theme');
if (theme) {
  bodyEl.classList.add(theme);
}

// 添加事件监听器
toggleBtnEl.addEventListener('click', () => {
  // 切换主题类名
  if (bodyEl.classList.contains('text-bg-dark')) {
    //背景
    bodyEl.classList.remove('text-bg-dark');
    bodyEl.classList.add('text-bg-light');
    //header标题颜色
    htitleEl.classList.remove('text-light');
    htitleEl.classList.add('text-dark');
    //边框颜色bcolorEl
    for (let i = 0; i < bcolorEl.length; i++) {
      bcolorEl[i].classList.remove('border-secondary');
      bcolorEl[i].classList.add('border-secondary-subtle');
    }
    
    //正文标题list_linkEl
    for (let i = 0; i < list_linkEl.length; i++) {
      list_linkEl[i].classList.remove('text-light');
      list_linkEl[i].classList.add('text-dark');
    }

    localStorage.setItem('theme', 'text-bg-light');
  } else {
    bodyEl.classList.remove('text-bg-light');
    bodyEl.classList.add('text-bg-dark');
    htitleEl.classList.remove('text-dark');
    htitleEl.classList.add('text-light');
    for (let i = 0; i < bcolorEl.length; i++) {
      bcolorEl[i].classList.remove('border-secondary-subtle');
      bcolorEl[i].classList.add('border-secondary');
    }
    for (let i = 0; i < list_linkEl.length; i++) {
      list_linkEl[i].classList.remove('text-dark');
      list_linkEl[i].classList.add('text-light');
    }
    
    localStorage.setItem('theme', 'text-bg-dark');
  }
});

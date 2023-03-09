const themeSwitcher = $('#theme-switcher');
const body = $('body');
const iconMoon = $('#icon-moon');
const iconSun = $('#icon-sun');
var flag=1;

// $(document).ready(function(){
//   $(themeSwitcher).click(function(){
//   body.toggleClass('text-bg-dark');
//   body.toggleClass('text-bg-light');
//   });
// });
themeSwitcher.on('click', () => {
  body.toggleClass('text-bg-dark');
  body.toggleClass('text-bg-light');
});

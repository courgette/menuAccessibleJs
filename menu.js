document.addEventListener('DOMContentLoaded', function() {

  document.querySelector("html").className = 'js';

  var liMenu = document.querySelectorAll('#menu > li');

  [].forEach.call(liMenu, function(el) {
    el.addEventListener('focusin', function() {
      this.querySelector('ul').style.top = '55px';
    })
    el.addEventListener('focusout', function() {
      this.querySelector('ul').style.top = '-9999px';
    })
  })
});

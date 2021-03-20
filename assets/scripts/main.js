var header = document.querySelector('.header');
var button = document.querySelector('.header button');

document.querySelector('.header button').addEventListener('click', function() {
  if (header.className == 'showMenu') {
    header.className = 'hideMenu';
    button.className = 'open';
  } else {
    header.className = 'showMenu';
    button.className = 'close';
  }
});

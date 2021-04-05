var header = document.querySelector('.header');
var menuButton = document.querySelector('.header button');
var audioPlayer = document.querySelector('.audioPlayer');
var playButton = document.querySelector('.audioPlayer button.play');

document.querySelector('.header button').addEventListener('click', function() {
  if (header.className == 'showMenu') {
    header.className = 'hideMenu';
    menuButton.className = 'open';
  } else {
    header.className = 'showMenu';
    menuButton.className = 'close';
  }
});

document.querySelector('.audioPlayer button.play').addEventListener('click', function() {
  if (audioPlayer.classList.contains('playing')) {
    audioPlayer.classList.remove('playing');
    document.querySelector('.audioPlayer button.play img').src = '/assets/images/play.svg';
  } else {
    audioPlayer.classList.add('playing');
    document.querySelector('.audioPlayer button.play img').src = '/assets/images/pause.svg';
  }
});

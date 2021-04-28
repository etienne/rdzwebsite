var header = document.querySelector('.header');
var menuButton = document.querySelector('.header button');
var audioPlayer = document.querySelector('.audioPlayer');
var playButton = document.querySelector('.audioPlayer button.play');
var detailsButton = document.querySelector('.audioPlayer button.details');
var audioElement = document.querySelector('.audioPlayer audio');

console.log('🚑');

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
    audioElement.pause();
    audioPlayer.classList.remove('playing');
    document.querySelector('.audioPlayer button.play img').src = '/assets/images/play.svg';
  } else {
    audioElement.play();
    audioPlayer.classList.add('playing');
    document.querySelector('.audioPlayer button.play img').src = '/assets/images/pause.svg';
  }
});

document.querySelector('.audioPlayer button.details').addEventListener('click', function() {
  if (audioPlayer.classList.contains('fullscreen')) {
    audioPlayer.classList.remove('fullscreen');
    document.body.style.position = 'static';
  } else {
    audioPlayer.classList.add('fullscreen');
    document.body.style.position = 'fixed';
  }
});

audioElement.addEventListener('canplay', function(event) {
  playButton.disabled = false;
});

var pjax = new Pjax({
  cacheBust: false,
  selectors: [
    "title",
    "meta[name=description]",
    "header.header",
    "section.content",
  ],
});

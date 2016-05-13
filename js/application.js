console.log('js loaded');


//data model

var isPlaying = false;
var avocado   = null;
var guac      = [];


//behavior

function start() {
  isPlaying = true;
}



//helpers

function renderState() {
  if (isPlaying) {
    console.log("gameis on");
  } else {
    console.log("paused");
  }
  if (avocado === 0) {
    console.log('A', '_', '_');
    console.log('_', '_', '_');
    console.log('_', '_', '_');
  } else if (avocado === 1) {
    console.log('_', 'A', '_');
    console.log('_', '_', '_');
    console.log('_', '_', '_');
  } else if (avocado === 2) {
    console.log('_', '-', 'A');
    console.log('_', '_', '_');
    console.log('_', '_', '_');
  } else if (avocado === 3) {
    console.log('_', '_', '_');
    console.log('A', '_', '_');
    console.log('_', '_', '_');
  } else if (avocado === 4) {
    console.log('_', '_', '_');
    console.log('_', 'A', '_');
    console.log('_', '_', '_');
  } else if (avocado === 5) {
    console.log('_', '_', '_');
    console.log('_', '_', 'A');
    console.log('_', '_', '_');
  } else if (avocado === 6) {
    console.log('_', '_', '_');
    console.log('_', '_', '_');
    console.log('A', '_', '_');
  } else if (avocado === 7) {
    console.log('_', '_', '_');
    console.log('_', '_', '_');
    console.log('_', 'A', '_');
  } else if (avocado === 8) {
    console.log('_', '_', '_');
    console.log('_', '_', '_');
    console.log('_', '_', 'A');
  } else {
  console.log('_', '_', '_');
  console.log('_', '_', '_');
  console.log('_', '_', '_');
  }
}

function toggleIsPlaying() {
  if (isPlaying) {
    isPlaying = false;
  } else {
    isPlaying = true;
  }
}

//avocado pops up in rnadom squares

function randomIndex() {
  return Math.floor(Math.random() * 9);
}

function placeAvocado() {
  if (isPlaying) {
    avocado = randomIndex();
    renderState();
  }
}

setInterval(placeAvocado, 500);

//render
function render() {
  if (isPlaying) {
    $('button').text('pause game');
  } else {
    $('button').text('start game');
  }
  for (var i = 0; i < 9; i++) {
    if (i === avocado) {
      $('#' +  i).text('a')
    } else {
      $('#' +  i).text(' ')
    }
  }
}

//interaction

$('button').on('click', function() {
  toggleIsPlaying();
  start();
  render();
});



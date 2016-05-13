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



//render
function render() {
  if (isPlaying) {
    $('button').text('pause game');
  } else {
    $('button').text('start game');
  }
}

//interaction

$('button').on('click', function() {
  start();
  render();
});



/* Selector de los botones - Almacenamos los elementos id de html en un const*/
const $video = document.querySelector('#video');
const $backward = document.querySelector('#backward');
const $play = document.querySelector('#play');
const $pause = document.querySelector('#pause');
const $forward = document.querySelector('#forward');

/* Traemos el selector de la barra de progreso de html */
const $progress = document.querySelector('#progress');

/* Añadimos una escucha al evento click*/
$play.addEventListener('click', handlePlay );
$pause.addEventListener('click', handlePause);
$backward.addEventListener('click', handleBackward);
$forward.addEventListener('click', handleForward);
  
function handlePlay(){
  console.log('Haz hecho clic al boton de play');
  $video.play();
  $play.hidden = true;
  $pause.hidden = false;
  $backward.hidden = false;
  $forward.hidden = false;
  $video.muted = false;
}
  
function handlePause(){
  console.log('Haz hecho clic al boton de pausa');
  $video.pause();
  $pause.hidden = true;
  $play.hidden = false;
  $backward.hidden = true;
  $forward.hidden = true;
}

function handleForward(){ //tiempo actual que avance
  // $video.currentTime = $video.currentTime + 10 
  $video.currentTime += 10;
  console.log('avanzar 10 segundos', $video.currentTime);
}
function handleBackward(){
  $video.currentTime -= 10;
  console.log('Retroceder 10 segundos', $video.currentTime);
}

/* Evento de carga del vídeo */
$video.addEventListener('loadedmetadata', handleLoaded);

/* Evento de progreso de actualizacion de vídeo */
$video.addEventListener('timeupdate', handleTimeUpdate );

/* Evento de input que avance el vídeo mientras arrastre la barra de progreso*/
$progress.addEventListener('input', handleInput);

function handleLoaded() {
  $progress.max = $video.duration;
  console.log('Ha cargado el vídeo', $video.duration);
}
function handleTimeUpdate(){
  /* Asignamos el valor del tiempo actual del video a la barra de progreso */
  $progress.value = $video.currentTime;
  console.log('Tiempo actual', $video.currentTime);
}
function handleInput(){
  /* asignamos al tiempo actual del video, el valor de la barra de progreso*/
  $video.currentTime = $progress.value;
  console.log('Valor ', $progress.value);
}
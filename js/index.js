/* Selector de los botones - Almacenamos los elementos id de html en un const*/
const $video = document.querySelector('#video')
const $play = document.querySelector('#play')
const $pause = document.querySelector('#pause')
const $forward = document.querySelector('#forward')
const $backward = document.querySelector('#backward')
  
/* Añadimos una escucha al evento click*/
$play.addEventListener('click', handlePlay )
$pause.addEventListener('click', handlePause)
$forward.addEventListener('click', handleForward)
$backward.addEventListener('click', handleBackward)
  
function handlePlay(){
  console.log('Haz hecho clic al boton de play')
  $video.play()
  $play.hidden = true;
  $pause.hidden = false;
  $video.muted = false;
}
  
function handlePause(){
  console.log('Haz hecho clic al boton de pausa')
  $video.pause()
  $pause.hidden = true
  $play.hidden = false
}

function handleForward(){ //tiempo actual que avance
  // $video.currentTime = $video.currentTime + 10 
  $video.currentTime += 10
  console.log('avanzar 10 segundos', $video.currentTime)
}
function handleBackward(){
  $video.currentTime -= 10
  console.log('Retroceder 10 segundos', $video.currentTime)
}


/* Traemos el selector de la barra de progreso de html */
const $progress = document.querySelector('#progress')

/* Evento de carga del vídeo */
$video.addEventListener('loadedmetadata', handleLoaded)

/* Evento de progreso de actualizacion de vídeo */
$video.addEventListener('timeupdate', handleTimeUpdate )

function handleLoaded() {
  $progress.max = $video.duration
  console.log('Ha cargado el vídeo', $video.duration)
}

function handleTimeUpdate(){
  /* Asignamos el valor del tiempo actual del video a la barra de progreso */
  $progress.value = $video.currentTime 
  console.log('Tiempo actual', $video.currentTime)
}

/* Evento de input que avance el vídeo mientras arrastre la barra de progreso*/
$progress.addEventListener('input', handleInput)

function handleInput(){
  /* asignamos al tiempo actual del video, el valor de la barra de progreso*/
  $video.currentTime = $progress.value 
  console.log('Valor ', $progress.value)
}
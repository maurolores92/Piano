const keys = document.querySelectorAll('.key');

function empezarSonido(e) {
  const audio = document.querySelector(`audio[data-sonido="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-sonido="${e.keyCode}"]`);
  if(!audio) return;  // detiene la funcion para que no se ejecuten todos juntos
  audio.currentTime = 0; //Retroceder hasta el principio
  audio.play()
  key.classList.add('playing');
  }

function eliminarTransicion(e) {
  if(e.propertyName !== 'transform') return; //saltalo si no es una transformacion
  this.classList.remove('playing');
}

keys.forEach(key => key.addEventListener('transitionend', eliminarTransicion));
window.addEventListener('keydown', empezarSonido);

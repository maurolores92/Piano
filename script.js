  
    function empezarSonido(e) {
      const audio = document.querySelector(`audio[data-sonido="${e.keyCode}"]`);
      const key = document.querySelector(`.key[data-sonido="${e.keyCode}"]`);
      if(!audio) return;  // detiene la funcion para que no se ejecuten todos juntos
      audio.currentTime = 0; //Retroceder hasta el principio
      audio.play()
      key.classList.add('playing');
    }

function removeTransition(e) {
  if(e.propertyName !== 'transform') return; //saltalo si no es una transformacion
  this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', empezarSonido);
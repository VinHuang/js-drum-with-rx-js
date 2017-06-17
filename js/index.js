const audio = document.querySelector( 'audio' );
const key = document.querySelector( 'div.key' );
  
Rx.Observable.fromEvent( document, 'keydown' )
  .filter( e => e.keyCode === 75 )
  .subscribe(
    () => {
      audio.currentTime = 0;
      audio.play();
      key.classList.add('playing');    
    }
  );

Rx.Observable.fromEvent( key, 'transitionend' )
  .filter( e => e.propertyName === 'transform' )
  .subscribe(
    () => {
      key.classList.remove('playing');    
    }
  );
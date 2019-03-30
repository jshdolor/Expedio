import anime from 'animejs/lib/anime.es.js';
window.anime = anime;
let showToolbar = (el, cb) => {
  $(el).css('overflow', 'inherit');
  $(el).show(0, function () {
    anime({
      targets: el,
      width: 400,
      height: 280,
      duration: 1000,
    }).finished.then(function(){
      cb();

    });

    anime({
      targets: el + ' .toolbar-body a',
      translateX: 0,
      duration: 100,
      opacity: 1,
      easing: 'linear',
      delay: anime.stagger(100) // increase delay by 100ms for each elements.
    });
  });

};

let hideToolbar = (el) => {
  $(el).css('overflow', 'hidden');

  anime({
    targets: el + ' .toolbar-body a',
    translateX: -20,
    duration: 200,
    opacity: '0',
    easing: 'linear',
    delay: anime.stagger(100), 
  });

  anime({
    targets: el,
    width: 0,
    height: 0,
    duration: 1000,
    changeComplete: function () {
      $(el).hide();
    }
  });
}


export {
  showToolbar,
  hideToolbar
}


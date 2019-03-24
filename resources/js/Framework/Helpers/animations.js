import anime from 'animejs/lib/anime.es.js';

let movePage = (target, position={}) => {

    position.target = target;

    anime({
        targets: '.css-prop-demo .el',
        left: '240px',
        backgroundColor: '#FFF',
        borderRadius: ['0%', '50%'],
        easing: 'easeInOutQuad'
      });
}


export default {
    movePage
}


import BasePage from '~/Framework/Components/Page/BasePage';

import Parallax from 'parallax-js/dist/parallax.min.js';


class EngagePage extends BasePage {

    constructor(cb) {
        super(cb);
        this.id =  '#expedio_engage'
        this.config = {
            position : 'bottom'
        };

        this.name = 'engage';
        this.el = $(this.id);

        this.testimonial_container = '.testimonials';

    }

    onload() {
        
        this.beforeShow();
        
        if(this.loaded) {
            return;
        }
        
        this.loaded = true;

        this.attachThoughtBalloons();
        this.attachVideo();
        this.scrollAstronaut();
    }

    scrollAstronaut() {

        let width = 0; 
        let maxScrollPos = 0;

        setInterval(() => {
            
            maxScrollPos = Math.abs($('.space-balloons').width() - $(".space-testimony").width());
            width = $(".space-testimony").scrollLeft();

            if(width >= Math.floor(maxScrollPos)) {
                width = 0;
            } else {
                // width += $(".space-testimony").width() / 2;
                width += 5;
            }

            // $(".space-testimony").animate({scrollLeft: width});
            $(".space-testimony").scrollLeft(width);

        }, 100);
    }

    attachThoughtBalloons() {
        this.config.thought_balloons.forEach((balloon) => {
            this.$selector('.thought-balloons').append(this.thought_balloons_template(balloon))
        })
    }

    thought_balloons_template({message, className}) {
        return `<li class="${className}">${message}</li>`
    }

    attachVideo() {
        this.$selector('.live-stream-content').html(this.config.live_stream_video);
    }

    

}

export default EngagePage;
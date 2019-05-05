import Config from '~/Application/Config';
import BasePage from '~/Framework/Components/Page/BasePage';

class EngagePage extends BasePage {

    constructor() {
        super();
        this.id =  '#expedio_engage'
        this.config = {
            position : 'bottom'
        };

        this.name = 'engage';
        this.loaded = false;
        this.el = $(this.id);

        this.testimonial_container = '.testimonials';
        
        Object.assign(this.config, Config.engage_page);

    }

    onload() {

        this.attachThoughtBalloons();
        this.attachVideo();
        
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
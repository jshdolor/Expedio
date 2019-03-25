import 'slick-carousel';
import Config from '~/Application/Config';

class Hooks {

    constructor() {
        this.actions = [
            {
                selector: '[data-hook=move-page]',
                event: 'click',
                fn: 'movePage'
            },
            
        ]

        this.initSlider = [
            {
                selector: '[data-hook=carousel]',
                config: 'partnerSlide'
            }
        ]

    }

    init() {
        this.actions.forEach((action) => {
            $('body').on(action.event, action.selector, this[action.fn]);
        })

        this.initSlider.forEach(elem => {
            this.slider(elem.selector, elem.config);
        });
    }

    movePage(e) {
        let el = $(e.target);

        let direction = el.data('direction');
        let page = el.data('page');
        pageManager[page][direction]();
    }

    slider(el, config) {
        $(el).slick(Config[config]);
    }

}

export default new Hooks();
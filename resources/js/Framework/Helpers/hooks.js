import 'slick-carousel';
import Config from '~/Application/Config';
import Modal from 'jquery-modal/jquery.modal.min.js';
import Validator from '~/Framework/Managers/Validator';


class Hooks {

    constructor() {
        this.actions = [
            {
                selector: '[data-hook=move-page]',
                event: 'click',
                fn: 'movePage'
            },
            {
                selector: '[data-hook=open-modal]',
                event: 'click',
                fn: 'openModal'
            },
            //temporary
            {
                selector: '[data-form]',
                event: 'submit',
                fn: 'onSubmit'
            },
            
        ]

        this.initSlider = [
            {
                selector: '[data-hook=carousel]',
                config: 'partnerSlide'
            }
        ];

        this.validator = null;


    }

    init() {
        this.actions.forEach((action) => {
            $('body').on(action.event, action.selector, this[action.fn]);
        })

        this.initSlider.forEach(elem => {
            this.slider(elem.selector, elem.config);
        });

        this.initValidator();

    }

    movePage(e) {
        let el = $(e.target);
        el = el.data('direction') ? el:$(this);
        let direction = el.data('direction');
        let page = el.data('page');

        if($('.'+page +'-container').hasClass('active')){
            return;
        }

        $('.expedio-page').removeClass('active');

        pageManager[page][direction](()=>{
            $('.'+page +'-container').addClass('active');
        });
    }

    openModal(e) {
        let el = $(this);
        let modal = el.data('target');

        if(!modal) {
            alert('no target');
            return;
        }

        $('[data-modal=' + modal + ']').modal();

    }

    slider(el, config) {
        $(el).slick(Config[config]);
    }

    initValidator() {

        this.validator = new Validator('[data-form]');
        
    }

    onSubmit(e) {
        e.preventDefault();
        
    }

}

export default new Hooks();
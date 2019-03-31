import {
    showToolbar,
    hideToolbar
} from '~/Framework/Helpers/animations';

class Toolbar {

    constructor(parentEl, el) {
        
        this.parentEl = parentEl;
        this.el = el;

        $('body').on('mouseenter', parentEl, this.clickParent.bind(this));

    }

    clickParent() {
        $('body').off('mouseleave',this.el);

        showToolbar('.active '+this.el, () => {

            $('body').on('mouseleave', this.el, this.leaveToolbar.bind(this));
            $('body').addClass('toolbar-active');

        });

    }

    leaveToolbar() {

        hideToolbar(this.el);
        $('body').removeClass('toolbar-active');
    
    }


}

export default Toolbar;
import {isMobile} from  '~/Framework/Helpers';

class Toolbar {

    constructor() {
        this.container = $('.navbar-container');
        this.fadeSpeed  = 400;
        this.menu = $('.navbar-slide');

        this.logo = $('.navbar-brand.navbar-icon');

        this.menuHidden = true;

        this.$mobileLogoShow = $('.mobile-nav-show');
        this.$mobileLogoHide = $('.mobile-nav-hide');
    }

    init() {
        
        if(isMobile()) {

            this.mobile();
        } else {

            this.desktop();

            $('.mobile-nav-hide').hide();
        }
        
    }

    mobile() {

        $('.navbar-logo').find('path[data-hook]').each((key, elem) => {
            $(elem).removeAttr('data-hook');
        });

        this.logo.click(() => {

            this.menuHidden = !this.menuHidden;

            if(!this.menuHidden) {
                this.showMenu();
            } else {
                this.hideMenu();
            }

        });

        this.$mobileLogoHide.click(() => {
            this.hideMenu();
            this.menuHidden = true;
        })
    }

    hideMenu() {
        this.container.removeClass('active');
        this.menu.stop(true, true).fadeOut(200);
        this.$mobileLogoShow.show();
    }

    showMenu() {
        this.container.addClass('active');
        this.menu.stop(true, true).fadeIn(400);
        this.$mobileLogoShow.hide();
    }

    desktop() {
        this.container
        .mouseenter(() => {
            this.menu.stop(true, true).fadeIn(400)
        })
        .mouseleave(() => {
            this.menu.fadeOut(400);
        })
    }

}

export default Toolbar;
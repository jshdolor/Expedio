import HomePage from '~/Framework/Components/Page/Home';
import EngagePage from '~/Framework/Components/Page/Engage';
import ExperiencePage from '~/Framework/Components/Page/Experience';
import ActivatePage from '~/Framework/Components/Page/Activate';
import ContactPage from '~/Framework/Components/Page/Contact';

import Hooks from '~/Framework/Helpers/hooks';
import Router from '~/Framework/Managers/Route';

//
import Toolbar from '~/Framework/Components/Toolbar';

class App {
    
    constructor() {

        //pages 
        this.pages = [];

        this.getInitialDimensions();
        this.initHooks();

        this.initPages();

        $(document).on('scroll', function() {

            let wScroll = $(this).scrollTop(),
                docHeight = $(this).height(),
                //scroll position / document height multiplied by delay
                elBackgrounPos =  "-" + (wScroll / docHeight) * 1500  + "px";

            $('main.active').css({
                'background-position-y': elBackgrounPos
            });

        });
    }

    onResize() {
        $(window).resize(() => {
            this.getInitialDimensions();
        });
    }

    getInitialDimensions() {
        wHeight = $(window).height();
        wWidth = $(window).width();

        $('[data-js="width"]').css('width', wWidth);
        $('[data-js="height"]').css('height', wHeight);

        $('[data-js="width|height"]').css('width', wWidth);
        $('[data-js="width|height"]').css('height', wHeight);
    }

    initHooks() {
        Hooks.init();
    }

    initPages() {
        let me = this;
        this.pages = [
            new HomePage(this.removePreloader),
            new ExperiencePage(),
            new EngagePage(),
            new ActivatePage(),
            new ContactPage()
        ];

        this.pages.forEach(page => page.init());

        //make homepage active & make homepage the current on pageManager
        this.pages[0].showPage();

    }

    removePreloader() {
        $('.loader').fadeOut(500, function() {

            Router.activate();
            $(this).remove();
            window.firstLoad = false;
            
        });

        window.toolbar = new Toolbar();
        window.toolbar.init();
    }


    

}

export default App;
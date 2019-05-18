import Config from '~/Application/Config';
import NavBtn from '~/Framework/Components/NavButton';


import HomePage from '~/Framework/Components/Page/Home';
import EngagePage from '~/Framework/Components/Page/Engage';
import ExperiencePage from '~/Framework/Components/Page/Experience';
import ActivatePage from '~/Framework/Components/Page/Activate';
import ContactPage from '~/Framework/Components/Page/Contact';

import Hooks from '~/Framework/Helpers/hooks';

import Parallax from 'parallax-js/dist/parallax.min.js';


class App {
    
    constructor() {

        //pages 
        this.mainPage = null;
        this.pages = [];

        //navigation
        this.navBtns = [];

        this.getInitialDimensions();

        this.initNavigations();
        this.initHooks();
        // this.initForms();

        //engage parallax 
        var scene = document.getElementById('scene');
        var parallaxInstance = new Parallax(scene, {
            hoverOnly: true,
            relativeInput: true
        });

        this.initPages();

        $(window).scroll(function(){
            var wScroll = $(this).scrollTop();
            var aHeight = $('.active').height();
            var wHeight = $(this).height();

            // $('.active').css({
            //     // 'background-position-y' : (wScroll  / 10) + '%'
            //     'background-position-y' : ((wScroll  * (aHeight + wHeight)) / 100) / 300  + '%'
            // });
            
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

    initNavigations() {
        Config.navButtons.forEach(btn => {
            this.navBtns.push(new NavBtn(btn.selector, btn.config));
        });
    }

    initPages() {

        this.pages = [
            new HomePage(this.removePreloader),
            new ExperiencePage(),
            new EngagePage(),
            new ActivatePage(),
            new ContactPage()
        ];

        this.pages.forEach(page => page.init());

        this.pages[0].showPage();

    }

    removePreloader() {
        $('.loader').fadeOut(500, function() {
            $(this).remove();
        });
    }

    

}

export default App;
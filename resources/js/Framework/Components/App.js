import Config from '~/Application/Config';
import Page from '~/Framework/Components/Page';
import NavBtn from '~/Framework/Components/NavButton';
import Toolbar from '~/Framework/Components/Toolbar';
import ExpedioElement from '~/Framework/Components/ExpedioGraphic';
import Form from '~/Framework/Components/Form';


import EngagePage from '~/Framework/Components/Page/Engage';
import ExperiencePage from '~/Framework/Components/Page/Experience';
import ActivatePage from '~/Framework/Components/Page/Activate';

import Hooks from '~/Framework/Helpers/hooks';

import Parallax from 'parallax-js/dist/parallax.min.js';

class App {
    
    constructor() {

        //pages 
        this.mainPage = null;
        this.pages = [];

        //navigation
        this.navBtns = [];

        this.initPages();
        this.getInitialDimensions();

        this.initNavigations();
        this.initHooks();
        this.initToolbar();
        // this.initForms();

        //last function
        this.removePreloader();


        //engage parallax 
        var scene = document.getElementById('scene');
        var parallaxInstance = new Parallax(scene, {
            hoverOnly: true,
            relativeInput: true
        });

        this.initComponents();

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

        this.mainPage = $('#main-page');
        
        pageManager.add('mainpage',$('#main-page'));
        pageManager.mainpage.show();

        new ExperiencePage().init();
        new EngagePage().init();
        new ActivatePage().init();

        Config.pages.forEach(page => {
            this.pages.push(new Page(page.id, page.config ));
        });

        // pageManager.preload = function(){
        //     pageManager.background = $(".experience-container.expedio-page.active");
        //     pageManager.scaling = 0.4; //background moves 40% with the pages
        // };

    }

    initToolbar() {
        this.toolbar = new Toolbar('.navbar-brand', '.toolbar');
    }

    removePreloader() {

    }

    initComponents() {
        Config.expedio_elements.forEach(el => {
            new ExpedioElement(el).init();
        })

        expedio.currentEvent = null
        expedio.hiddenElements = [];
        expedio.expedio_elements = [];
    }

}

export default App;
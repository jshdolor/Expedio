import Config from '~/Application/Config';
import Page from '~/Framework/Components/Page';
import NavBtn from '~/Framework/Components/NavButton';
import Toolbar from '~/Framework/Components/Toolbar';
import ExpedioElement from '~/Framework/Components/ExpedioElement';
import Form from '~/Framework/Components/Form';

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
        this.initPages();
        this.initNavigations();
        this.initHooks();
        this.initToolbar();
        // this.initForms();

        //last function
        this.removePreloader();

        $('main').scroll(function(){
            var wScroll = $(this).scrollTop();
            
            $(this).css({
                'background-position-y' : -(wScroll / 10) + 'px'
            });
            
        });

        //engage parallax 
        var scene = document.getElementById('scene');
        var parallaxInstance = new Parallax(scene, {
            hoverOnly: true,
            relativeInput: true
        });

        this.initComponents();

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
        new ExpedioElement();
    }

}

export default App;
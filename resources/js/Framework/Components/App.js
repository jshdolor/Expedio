import Config from '~/Application/Config';
import Page from '~/Framework/Components/Page';
import NavBtn from '~/Framework/Components/NavButton';
import Toolbar from '~/Framework/Components/Toolbar';
import Form from '~/Framework/Components/Form';

import Hooks from '~/Framework/Helpers/hooks';

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

}

export default App;
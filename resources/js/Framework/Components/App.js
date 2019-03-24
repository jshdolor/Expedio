import Config from '~/Application/Config';
import Page from '~/Framework/Components/Page';
import NavBtn from '~/Framework/Components/NavButton';

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
        // this.mainPage.css({
        //     'height': wHeight,
        //     'width': wWidth,
        //     'position': 'fixed',
        // });

        // let PosMapping = {
        //     left: { left: wWidth * -1},
        //     top: {top: wHeight * -1},
        //     bottom: {top: wHeight * 2}
        // };

        Config.pages.forEach(page => {
            this.pages.push(new Page(page.id, page.config ));
        });

    }

    removePreloader() {

    }

}

export default App;
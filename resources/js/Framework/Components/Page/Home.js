import BasePage from '~/Framework/Components/Page/BasePage';
import Config from '~/Application/Config';

import BrowserManager from '~/Framework/Managers/Browser';
import SizeGiver from '~/Framework/Managers/SizeGiver';

import {isMobile} from  '~/Framework/Helpers';

import ExpedioElement from '~/Framework/Components/ExpedioGraphic';
import MobileExpedioElement from '~/Framework/Components/ExpedioGraphic/Mobile';

import Router from '~/Framework/Managers/Route';

class HomePage extends BasePage {

    constructor(cb) {
        super(cb);
        this.id =  '#expedio_home'

        this.config = {
            position : 'right'
        };

        this.name = 'mainpage';
        this.el = $(this.id);

        this.activateMessage = '.activate-message';
        this.showToolbar = false;
    }

    onload() {
        
        $('#fbChatBtn').hide();

        if(!window.firstLoad) {
            Router.removeHash();
        }

        if(this.loaded) {
            return;
        }

        this.loaded = true;

        this.initComponents();

    }

    initComponents() {
        expedio.currentEvent = null
        expedio.hiddenElements = [];
        expedio.expedio_elements = [];
        expedio.expedio_elements_loaded = 0;

        expedio.elements = [];

        let bestVideoFormat = BrowserManager.getBestVideoFormat(),
            bestSize = SizeGiver.getBestSizePath();

        let isExpedioElementsLoaded = new Promise((resolve, reject) =>{

            if(isMobile()) {

                Config.expedio_mobile_elements.forEach(el => {
                    expedio.expedio_elements.push(el);
                    el.video = bestVideoFormat;
                    new MobileExpedioElement(el,{
                        size: bestSize
                    }).init();
    
                })
                
                let assetsToLoad = Config.expedio_mobile_elements.length + 
                    Config.expedio_mobile_elements.filter(mobileEx => mobileEx.duration).length;

                let checkInterval = setInterval(() => {
                    if(expedio.expedio_elements_loaded === assetsToLoad) {
                        clearInterval(checkInterval)
                        resolve(true);
                    }
                },500);

            } else {

                Config.expedio_elements.forEach(el => {
                    expedio.expedio_elements.push(el);
                    el.video = bestVideoFormat;
                    new ExpedioElement(el,{
                        size: bestSize
                    }).init();
    
                })
    
                let checkInterval = setInterval(() => {
                    if(expedio.expedio_elements_loaded === Config.expedio_elements.length * 2) {
                        clearInterval(checkInterval)
                        resolve(true);
                    }
                },500);

            }
            


        });

        isExpedioElementsLoaded.then(() => {
            if(this.cb) {
                this.cb();
            }
        });

        $('.bottom-expedio').on('mousedown', () => {

            if(isMobile()) {

                if(window.animationTimer) {
                    clearTimeout(window.animationTimer);
                }
                $('[id^=expedio_element_]').show();
                $('[id^=expedio_gif_]').hide();

            } else {

                $('.expedio-element-container video').each((key, el)=> {
                    el.pause();
                    $(el).hide();
                    el.currentTime = 0;
                });

                $('[id^=expedio_element_]').show();

            }

        })
    }

}

export default HomePage;
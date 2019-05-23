import BasePage from '~/Framework/Components/Page/BasePage';
import ExpedioElement from '~/Framework/Components/ExpedioGraphic';
import Config from '~/Application/Config';

import BrowserManager from '~/Framework/Managers/Browser';
import SizeGiver from '~/Framework/Managers/SizeGiver';

import {isMobile} from  '~/Framework/Helpers';


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

    }

    onload() {
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

        let bestVideoFormat = BrowserManager.getBestVideoFormat(),
            bestSize = SizeGiver.getBestSizePath();

        let isExpedioElementsLoaded = new Promise((resolve, reject) =>{

            if(isMobile()) {

                Config.expedio_mobile_elements.forEach(el => {
                    expedio.expedio_elements.push(el);
                    el.video = bestVideoFormat;
                    new ExpedioElement(el,{
                        size: bestSize
                    }).init();
    
                })
    
                let checkInterval = setInterval(() => {
                    if(expedio.expedio_elements_loaded === Config.expedio_mobile_elements.length * 2) {
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
            $('.expedio-element-container video').each((key, el)=> {
                el.pause();
                $(el).hide();
                el.currentTime = 0;
            })
            
            $('[id^=expedio_element_]').show();
            // $('[id^=expedio_element_]').css('pointer-events','auto');

        })
    }

}

export default HomePage;
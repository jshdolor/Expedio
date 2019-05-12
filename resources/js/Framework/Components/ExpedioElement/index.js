export default class ExpedioElement {

    constructor() {

        this.container = '.expedio-element-container';

        this.elements = $(this.container + ' img');

        this.img_path = asset_path + 'images/landing/';

        this.expedio_elements = [];

        this.hiddenElements = [];

        this.currentEvent = null;

        this.activeElement = null;

        this.init();
    }

    init() {

        // let expedioElem = null;

        if (this.elements.length > 0) {
            //init all expedio elements

            let $currentElem = null;

            this.elements.map(elem => {

                $currentElem = $(this.elements[elem]);

                this.elements[elem].expedio = {
                    path: this.img_path + $currentElem.attr('expedio-id') + '.png',
                    animated: this.img_path + $currentElem.attr('expedio-id') + '.gif',
                    left: $currentElem.css('left'),
                    top: $currentElem.css('top'),
                    index: $currentElem.css('index'),
                    duration: $currentElem.attr('duration'),
                    pos: $currentElem.attr('pos'),
                }

                $currentElem.css(JSON.parse($currentElem.attr('cssData')));

                let expedioElem = {
                    path: this.img_path + $currentElem.attr('expedio-id') + '.png',
                    left: $currentElem.attr('expedio-left'),
                    top: $currentElem.attr('expedio-top'),
                };

                // $currentElem.on('mousemove', this.mousemove.bind(this));
                $currentElem.on('mousedown', this.mousedown.bind(this));

                this.expedio_elements.push(expedioElem);


            });

        }

    }

    mousedown(event) {
        // Get click coordinates
        $(document.elementFromPoint(event.clientX, event.clientY)).off('click');
        $(event.target).off('click');

        if(!this.currentEvent) {
            this.currentEvent = event; 
        }

        if(this.clickedIsNotTransparent(event)) {

            $(event.target).on('click', this.click);
            $(event.target).trigger("click");

            this.hiddenElements.forEach(hiddenElem => {
                // $(hiddenElem).show();
                $(hiddenElem).css('pointer-events','auto');

            })
            this.hiddenElements = [];

            this.currentEvent = null;

        } else {

            if ($(document.elementFromPoint(this.currentEvent.clientX, this.currentEvent.clientY))[0].tagName === 'IMG') {
                
                this.hiddenElements.push($(document.elementFromPoint(this.currentEvent.clientX, this.currentEvent.clientY))[0]);

                // $(document.elementFromPoint(this.currentEvent.clientX, this.currentEvent.clientY)).hide();
                $(document.elementFromPoint(this.currentEvent.clientX, this.currentEvent.clientY)).css('pointer-events','none');
                
                this.triggerMouseEvent(
                    $(document.elementFromPoint(this.currentEvent.clientX, this.currentEvent.clientY))[0],
                    'mousedown'
                );

                if(this.expedio_elements.length === this.hiddenElements.length) {

                    this.hiddenElements.forEach(hiddenElem => {
                        $(hiddenElem).css('pointer-events','auto');
                        // $(hiddenElem).show();
                    })
                    this.hiddenElements = [];
        
                    this.currentEvent = null;

                }

            } 
            
        }
    }

    mousemove(event) {

        if(!this.currentEvent) {
            this.currentEvent = event; 
        }

        if(this.clickedIsNotTransparent(event)) {

            this.activeElement = event.target;

            this.currentEvent = null;

        } 
    }

    clickedIsNotTransparent(event) {

        let canvas = document.createElement("canvas").getContext("2d");

        let x = this.currentEvent.pageX - this.currentEvent.target.offsetLeft,
            y = this.currentEvent.pageY - this.currentEvent.target.offsetTop,
            w = canvas.canvas.width = this.currentEvent.target.width,
            h = canvas.canvas.height = this.currentEvent.target.height,
            alpha;

        // Draw image to canvas
        // and read Alpha channel value
        canvas.drawImage(event.target, 0, 0, w, h);

        alpha = canvas.getImageData(x, y, 1, 1).data[3]; // [0]R [1]G [2]B [3]A
        canvas = undefined;

        return !!alpha;

    }

    triggerMouseEvent (node, eventType, event) {
        let clickEvent = document.createEvent ('MouseEvents');
        clickEvent.initEvent (eventType, true, true);
        node.dispatchEvent (clickEvent);
    }

    click(e) {

        let animatedImg = document.createElement("img");

        let { animated, duration, left, top, index } = this.expedio;
        
        animatedImg.setAttribute('src', animated + '?random=' + new Date().getTime());

        $(animatedImg).css(JSON.parse($(this).attr('cssData')));

        animatedImg.onload = () => {
            $(this).hide();
            // $(this).css('pointer-events','none');

        }

        $(this).after(animatedImg);
        $(this).off('click');

        setTimeout(() => {
            animatedImg.remove();
            // $(this).css('pointer-events','none');
            $(this).show();
        }, duration);

    }

}
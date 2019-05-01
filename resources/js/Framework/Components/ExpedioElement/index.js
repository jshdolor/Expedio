export default class ExpedioElement {

    constructor() {

        this.container = '.expedio-element-container';

        this.elements = $(this.container + ' image');

        this.img_path = asset_path + 'images/landing/';

        // this.expedio_elements = [];

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
                    left: $currentElem.attr('left'),
                    top: $currentElem.attr('top'),
                    duration: $currentElem.attr('duration'),
                }
                
                

                // expedioElem = {
                //     path: this.img_path + $currentElem.attr('expedio-id') + '.png',
                //     left: $currentElem.attr('expedio-left'),
                //     top: $currentElem.attr('expedio-top'),
                // };

                $currentElem.on('click', this.click.bind(this));

                $currentElem.mouseenter(function(){
                    $(this).attr('filter','url(#glow)');
                }).mouseleave(function(){
                    $(this).attr('filter','');
                });

                // this.expedio_elements.push(expedioElem);


            });

        }

    }

    click(e) {

        let img = document.createElementNS('http://www.w3.org/2000/svg', 'image');
        let {animated, duration} = e.target.expedio;

        img.setAttributeNS('http://www.w3.org/1999/xlink', 'href', animated + this.urlRandom());
        img.setAttributeNS(null, 'x', '10');
        img.setAttributeNS(null, 'y', '10');
        img.setAttributeNS(null, 'visibility', 'visible');

        $(e.target).after(img);
        setTimeout(() => {
            img.remove()
        }, duration);

    }

    urlRandom() {
        return `?random=${new Date().getTime()}`;
    }

}
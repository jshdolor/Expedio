class ExpedioGraphic {

    constructor(data, custom) {
        this.name = data.name;
        this.duration = data.duration;
        this.zIndex = data.zIndex;
        this.videoFormat = data.video;

        this.parent = custom.parent || '.expedio-element-container';
        this.sizePath = custom.size || '1920x1080';
        this.imgPath = asset_path + `images/landing/${this.sizePath}/${this.name}`;

        this.el = null;
        this.$el = null;
        this.animated = null;
        this.$animated = null;

        this.custom = data.custom || [];
    }

    init() {

        this.attachImage();
        this.attachAnimatedVersion();

        this.$el.on('mousedown', this.mousedown.bind(this));
    }

    attachImage() {
        let image = document.createElement("img");
        
        image.onload = () => {

            expedio.expedio_elements_loaded ++;

            expedio.elements.push(image);

        }
        

        image.setAttribute('src', this.imgPath + '.png');

        
        this.el = image;
        this.$el = $(image);


        this.$el.css('zIndex',this.zIndex);
        this.$el.attr('id', 'expedio_element_' + this.name);

        $(this.parent).append(this.el);
    }

    attachAnimatedVersion() {

        let animatedImg = document.createElement("video");

        let vidSrc = document.createElement("source");
        vidSrc.src = this.imgPath + this.videoFormat.extn;
        vidSrc.type = this.videoFormat.type;
        vidSrc.setAttribute('muted', '');
        vidSrc.setAttribute('playsinline', '');
        vidSrc.setAttribute('preload', '');

        animatedImg.appendChild(vidSrc);

        animatedImg.addEventListener('loadstart',  function() {
            expedio.expedio_elements_loaded ++;
        });

        this.$el.after(animatedImg);

        this.animated = animatedImg;
        this.$animated = $(animatedImg);

        this.$animated.addClass('expedio-animated');

        this.$animated.hide();
        this.$animated.css('zIndex', this.zIndex);
    }

    click(e) {

        
        $('.expedio-element-container video').each((key, el)=> {
            el.pause();
            $(el).hide();
            el.currentTime = 0;
        })
        
        $('[id^=expedio_element_]').show();

        this.$el.hide();

        this.$animated.show();
        this.$animated[0].currentTime = 0;
        this.$animated[0].play();

        // $('[id^=expedio_element_]').css('pointer-events','none');

        this.$animated.on('ended', () => {
            
            this.$el.show();
            this.$animated.hide();
            // $('[id^=expedio_element_]').css('pointer-events','auto');

        });


        this.custom.forEach(c => {
            setTimeout(() => {
                this.$animated.css('zIndex', c.zIndex);
            }, c.duration);
        })
        
    }

    mousedown(event) {
        // Get click coordinates
        $(document.elementFromPoint(event.clientX, event.clientY)).off('click');
        $(event.target).off('click');

        if(!expedio.currentEvent) {
            expedio.currentEvent = event; 
        }

        if(this.clickedIsNotTransparent(event)) {

            $(event.target).on('click', this.click.bind(this));
            $(event.target).trigger("click");

            expedio.hiddenElements.forEach(hiddenElem => {
                // $(hiddenElem).show();
                $(hiddenElem).css('pointer-events','auto');

            })
            expedio.hiddenElements = [];

            expedio.currentEvent = null;

        } else {

            if(expedio.hiddenElements.length === expedio.expedio_elements.length)
            {
                expedio.hiddenElements.forEach(hiddenElem => {
                    $(hiddenElem).css('pointer-events','auto');
                })
                expedio.hiddenElements = [];
    
                expedio.currentEvent = null;

                return;

            }
            
            if ($(document.elementFromPoint(expedio.currentEvent.clientX, expedio.currentEvent.clientY))[0].tagName === 'IMG') {
                
                expedio.hiddenElements.push($(document.elementFromPoint(expedio.currentEvent.clientX, expedio.currentEvent.clientY))[0]);

                // $(document.elementFromPoint(expedio.currentEvent.clientX, expedio.currentEvent.clientY)).hide();
                $(document.elementFromPoint(expedio.currentEvent.clientX, expedio.currentEvent.clientY)).css('pointer-events','none');
                
                this.triggerMouseEvent(
                    $(document.elementFromPoint(expedio.currentEvent.clientX, expedio.currentEvent.clientY))[0],
                    'mousedown'
                );

                if(expedio.expedio_elements.length === expedio.hiddenElements.length) {

                    expedio.hiddenElements.forEach(hiddenElem => {
                        $(hiddenElem).css('pointer-events','auto');
                    })
                    expedio.hiddenElements = [];
        
                    expedio.currentEvent = null;

                }

            } 
            
        }

    }

    clickedIsNotTransparent(event) {

        let canvas = document.createElement("canvas").getContext("2d");

        let x = expedio.currentEvent.pageX - expedio.currentEvent.target.offsetLeft,
            y = expedio.currentEvent.pageY - expedio.currentEvent.target.offsetTop,
            w = canvas.canvas.width = expedio.currentEvent.target.width,
            h = canvas.canvas.height = expedio.currentEvent.target.height,
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

}

export default ExpedioGraphic;
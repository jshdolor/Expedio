import ElementModel from '../ElementModel';

class ExpedioElement extends ElementModel{
    constructor(data) {
        super(data);
        this.actions = [
            {
                event: 'onclick',
                attach: this.clickEvent
            },
        ];
        this.initializeCanvas();
        this.attachEvents();
        this.id = Math.floor(Math.random()*100/2);

    }

    initializeCanvas() {
        this.createCanvas();

        let image = document.querySelector(this.selector);
        // image.style.display = 'none';

        this.canvas.height = image.height;
        this.canvas.width = image.width;
        this.canvas.style.left = image.style.left;
        this.canvas.style.top = image.style.top;
        this.canvas.getContext("2d").drawImage(image, 0, 0, image.width, image.height);
    }

    createCanvas() {
        let canvasObj = document.createElement("canvas");
        // canvasObj.style.position = 'absolute';
        // document.body.appendChild(canvasObj);
        this.canvas = canvasObj;
    }

    set canvas(canvas) {
        this._canvas = canvas;
    }

    get canvas() {
        return this._canvas;
    }

    clickEvent(event) {
        let self = this.context,
            x = event.pageX - this.offsetLeft,
            y = event.pageY - this.offsetTop,
            alpha;
        // Draw image to canvas
        // and read Alpha channel value
        alpha = self.canvas.getContext("2d").getImageData(x, y, 1, 1).data[3]; // [0]R [1]G [2]B [3]A

        if( alpha > 0 ) {
            //show animation...
            console.log(self.id)
        } else {

            //transparent
            let x = event.pageX, y = event.pageY;
            this.style.pointerEvents = 'none';
            var evt = new MouseEvent("click", {
                shiftKey: true,
                clientX: x - this.offsetLeft,
                clientY: y - this.offsetTop,
            });
            console.log(evt);
            document.dispatchEvent(evt);

            this.style.pointerEvents = 'auto';
        }
    };
}

export default ExpedioElement;
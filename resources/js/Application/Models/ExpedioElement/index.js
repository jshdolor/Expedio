import ElementModel from '../ElementModel';

class ExpedioElement extends ElementModel{
    constructor(data) {
        super(data);
        this.actions = [
            {
                event: 'onclick',
                attach: this.clickEvent
            }
        ];
        this.initializeCanvas();
        this.attachEvents();

    }

    initializeCanvas() {
        let canvasObj = document.createElement("canvas");
        document.body.appendChild(canvasObj);
        this.canvas = canvasObj;
        this.canvas.id = 'canvas-'+this.selector.replace('.','');
    }

    set canvas(canvas) {
        this._canvas = canvas;
    }

    get canvas() {
        return this._canvas;
    }

    clickEvent(event) {
        let self = this.context, canvasContext = self.canvas.getContext("2d");
        // Get click coordinates
        let x = event.pageX - this.offsetLeft,
          y = event.pageY - this.offsetTop,
          w = canvasContext.canvas.width = this.width,
          h = canvasContext.canvas.height = this.height,
          alpha;

        // Draw image to canvas
        // and read Alpha channel value
        canvasContext.drawImage(this, 0, 0, w, h);

        alpha = canvasContext.getImageData(x, y, 1, 1).data[3]; // [0]R [1]G [2]B [3]A
        // If pixel is transparent,
        // retrieve the element underneath and trigger it's click event
        if( alpha > 0 ) {
            console.log(canvasContext);
        }
    };
}

export default ExpedioElement;
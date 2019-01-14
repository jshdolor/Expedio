import ElementModel from '../ElementModel';

class NavButton extends ElementModel{

    constructor(data) {
        super(data);
        this._direction = document.querySelector(this.selector).dataset.direction;
        this.actions = [
            {
                event: 'onclick',
                attach: this.clickEvent
            }
        ];
        this.attachEvents();
    }

    get direction() {
        return this._direction || 'left';
    }

    clickEvent(e) {
        let self = this.context;
        console.log(self.direction);
    }

}

export default NavButton;
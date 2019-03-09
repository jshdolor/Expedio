import ElementModel from '../ElementModel';
import move from 'move-js';

class NavButton extends ElementModel{

    constructor(data) {
        super(data);
        this._direction = document.querySelector(this.selector).dataset.direction;
        
        this.navPage = '.navigation-page';

        this.windowHeight = window.innerHeight;
        this.windowWidth = window.innerWidth;

        this.actions = [
            {
                event: 'onclick',
                attach: this.clickEvent
            }
        ];

        this.directionMap = {
            left:{
                x:this.windowWidth, 
                y:0
            },
            up:{
                x:0, 
                y:-this.windowWidth
            },
            down:{
                x:0, 
                y:this.windowHeight
            },
        };

        this.attachEvents();
    }

    get direction() {
        return this._direction || 'left';
    }

    clickEvent(e) {
        let self = this.context;
        let pos = self.directionMap[self.direction];

        self._movePage(pos);
    }

    _movePage(pos) {
        move(this.navPage)
          .to(pos.x, pos.y)
          .end();
    }

}

export default NavButton;
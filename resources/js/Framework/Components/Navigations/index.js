import Components from '../';
import NavButton from '../../../Application/Models/NavButton/';

class Navigations extends Components{
    
    constructor() {
        super();
        this.model = NavButton;
        this.selectors = [
            '.triangle .down',
            '.triangle .up',
            '.triangle .left'
        ];
    }

}

export default Navigations;
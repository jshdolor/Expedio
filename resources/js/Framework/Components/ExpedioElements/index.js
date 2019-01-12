import Components from '../';
import ExpedioElement from '../../../Application/Models/ExpedioElement/';

class ExpedioElements extends Components{

    constructor() {
        super();
        this.model = ExpedioElement;
        this.selectors = [];
    }
}

export default ExpedioElements;
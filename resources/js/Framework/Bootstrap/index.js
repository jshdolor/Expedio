import Essentials from '../../Application/Essentials/';

import ExpedioElements from '../Components/ExpedioElements/';
import Navigations from '../Components/Navigations/';

import {setWindowVar} from '../Helpers/';
// import {setWindowVar} from '~/Framework/Helpers';

class Bootstrap {
    constructor() {
        this.components = [
            ExpedioElements,
            Navigations
        ];
    }
    init() {
        console.log('booted');
        //install essentials
        Essentials();

        this.initComponents();
    }

    initComponents() {
        let Component = null, componentObj=null;

        for(Component of this.components) {
            componentObj = new Component();
            componentObj.init();

            setWindowVar(Component.name.toSnakeCase(), componentObj.elements);
        }
    }
}

export default Bootstrap;
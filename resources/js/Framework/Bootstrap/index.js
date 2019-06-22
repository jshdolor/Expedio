import App from '~/Framework/Components/App';

class Bootstrap {
    constructor() {

        window.wHeight = 0;
        window.wWidth = 0;

        window.firstLoad = true;
    }

    init() {
        new App();
    }

    
}

export default Bootstrap;
import Boot from './Framework/Bootstrap';
import Config from './Application/Config';

let init = null;

window.App = null;
window[Config.global_variable] = {}
for(init of Config.initializeArray) {
    window[Config.global_variable][init] = [];
}

export default new Boot();

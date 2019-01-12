import Boot from './Framework/Bootstrap';
import Config from './Application/Config';

window.App = null;
window[Config.global_variable] = {}

export default new Boot();

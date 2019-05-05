import Boot from './Framework/Bootstrap';
import Config from './Application/Config';
import $ from "jquery";
import parallax from '~/Framework/Plugins/ParallaxScroll';

let init = null;

window.App = null;
window.$ = $;
window.jQuery = $;
window.pageManager = parallax;

String.prototype.toTitleCase = function() {
    let firstChar = this.length > 0 ? this[0].toUpperCase(): '';
    return firstChar + this.toLowerCase().substr(1);
}

window[Config.global_variable] = {}
for(init of Config.initializeArray) {
    window[Config.global_variable][init] = [];
}

export default new Boot();

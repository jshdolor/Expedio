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
    return this.replace(
        /\w\S*/g,
        function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
}

window[Config.global_variable] = {}
for(init of Config.initializeArray) {
    window[Config.global_variable][init] = [];
}

export default new Boot();

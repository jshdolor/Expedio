import Config from '~/Application/Config';
import Router from '~/Framework/Managers/Route';

export default class BasePage {

    constructor(cb) {
        this.loaded = false;
        this.cb = cb || null;
        this.showToolbar = true;
    }

    init() {

        Object.assign(this.config, Config[this.name])

        pageManager.add(this.name, this.el);
        pageManager[this.name].onload = this.onload.bind(this);

        pageManager[this.name].showToolbar = this.showToolbar;
    }

    showPage() {
        pageManager[this.name].show();
    }

    onload() {
        
    }

    beforeShow() {
        if(this.name === 'mainpage') {
            $('#fbChatBtn').hide();
        } else {
            $('#fbChatBtn').show();
        }
        Router.setHash(this.name);
    }

    loadComponents() {

    }

    $selector(element) {
        return $(`${this.id} ${element}`);
    }
}
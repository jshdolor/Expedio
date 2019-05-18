import Config from '~/Application/Config';

export default class BasePage {

    constructor(cb) {
        this.loaded = false;
        this.cb = cb || null;
    }

    init() {

        Object.assign(this.config, Config[this.name])

        pageManager.add(this.name, this.el);
        pageManager[this.name].onload = this.onload.bind(this);
        
    }

    showPage() {
        pageManager[this.name].show();
    }

    onload() {

    }

    loadComponents() {

    }

    $selector(element) {
        return $(`${this.id} ${element}`);
    }
}
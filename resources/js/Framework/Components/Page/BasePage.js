import Config from '~/Application/Config';

export default class BasePage {

    constructor() {

    }

    init() {

        Object.assign(this.config, Config[this.name])

        pageManager.add(this.name, this.el);
        pageManager[this.name].onload = this.onload.bind(this);
        
    }

    onload() {
        
    }

    $selector(element) {
        return $(`${this.id} ${element}`);
    }
}
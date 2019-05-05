export default class BasePage {

    constructor() {

    }

    init() {

        pageManager.add(this.name, this.el);
        pageManager[this.name].onload = this.onload.bind(this);
        
    }

    $selector(element) {
        return $(`${this.id} ${element}`);
    }
}
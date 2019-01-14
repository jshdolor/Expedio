class Components {
    constructor() {
        this._elements = [];
        this._selectors = [];
        this._model = null;
    }

    get model() {
        return this._model;
    }
    set model(model) {
        this._model = model;
    }
    get elements() {
        return this._elements;
    }
    set elements(element) {
        this._elements.push(element);
    }
    get selectors() {
        return this._selectors;
    }
    set selectors(element) {
        this._selectors = element;
    }

    init() {
        let selector = null, initial= {};
        for(let selector of this.selectors) {
            initial.selector = selector;
            this.elements = new this.model(initial);
        }

    }

}

export default Components;
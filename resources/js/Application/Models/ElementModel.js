class ElementModel {
    constructor(data) {
        this._selector = data.selector;
        this._actions = [];
    }

    get actions() {
        return this._actions;
    }
    set actions(actions) {
        this._actions=actions;
    }

    get selector() {
        return this._selector;
    }

    attachEvents() {
        let self = this;
        for(var action of self.actions) {
            document.querySelector(this.selector)[action['event']] = () => action.attach(self);
        }
    }
}

export default ElementModel;
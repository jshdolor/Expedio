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
        let elemSelected = null;
        for(var action of this.actions) {
            elemSelected = document.querySelector(this.selector);
            if(elemSelected) {
                elemSelected.context = this;
                elemSelected[action['event']] = action.attach;
            } else {
                console.log('Error:', 'No element to be used for event attachments');
            }
        }
    }
}

export default ElementModel;
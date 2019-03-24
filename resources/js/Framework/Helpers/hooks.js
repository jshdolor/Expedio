class Hooks {

    constructor() {
        this.actions = [
            {
                selector: '[data-hook=move-page]',
                event: 'click',
                fn: 'movePage'
            }
        ]

    }

    init() {
        this.actions.forEach((action) => {
            $('body').on(action.event, action.selector, this[action.fn]);
        })
    }

    movePage(e) {
        let el = $(e.target);

        let direction = el.data('direction');
        let page = el.data('page');
        pageManager[page][direction]();
    }

}

export default new Hooks();
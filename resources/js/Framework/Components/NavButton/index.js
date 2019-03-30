class NavButton{
    
    constructor(el, config={}) {

        this.selector = el;
        this.el = $(el);
        this.activeClass = 'active';
        this.target = config.target;
        this.direction = config.direction;

        this.init();
        this.attachActions();
    }

    init() {
        this.el.data(this.dataDirectionVar, this.initDirection);
        this.el.context = this;
    }

    attachActions () {
        this.el.click(this.click.bind(this));
    }

    click()  {
        pageManager[this.target][this.direction](() => {
            this.pageCallback();
        });
    }

    pageCallback() {
        $('.expedio-page').removeClass('active');
        $('.'+this.target +'-container').addClass(this.activeClass);
    }

}

export default NavButton;


class Page{

    constructor(el, config={}, onloadingfn) {
        this.activeClass = 'active';
        this.position = config.position;
        
        this.selector = el;
        this.name = el.replace(/#expedio_/g,'');
        this.el = $(el);

        this.onloadingfn = config.onload;

        this.init();
    }

    init(){
        this.el.css({
            // 'position': 'fixed',
            // 'left': this.left,
            // 'top': this.top,
            'width': '100vw',
            'max-height': '100vh',
            'overflow-y':'auto',
            'overflow-x':'hidden'
        });

        this.el.addClass('expedio-page');

        pageManager.add(this.name, this.el);
        if(typeof this.onloadingfn === "function") {
            pageManager[this.name].onload = this.onloadingfn;
        }
    }

    resize() {

    }

    isActive() {
        return $(this.el).hasClass(this.activeClass);
    }

}

export default Page;
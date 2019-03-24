class Page{

    constructor(el, config={}) {
        this.activeClass = 'active';
        this.position = config.position;
        
        this.selector = el;
        this.name = el.replace(/#expedio_/g,'');
        this.el = $(el);

        this.init();
    }

    init(){
        this.el.css({
            // 'position': 'fixed',
            // 'left': this.left,
            // 'top': this.top,
            'width': '100%',
            'max-height': $(window).height(),
            'overflow':'auto'
        });

        pageManager.add(this.name, this.el);
    }

    resize() {

    }

    isActive() {
        return $(this.el).hasClass(this.activeClass);
    }

}

export default Page;
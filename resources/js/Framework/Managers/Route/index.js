class RouteManager {

    static pageUrlMap(key) {
        
        let map = {
            '': 'mainpage',
            '#activate': 'activate',
            '#experience': 'experience',
            '#engage': 'engage',
            '#contact': 'contact',
        };

        if(map[key]) {
            return map[key];
        }

        return 'mainpage';

    }

    static activate() {
        let currentPage = this.pageUrlMap(this.url().hash);

        setTimeout(() => {
            try{
                if(pageManager[currentPage].showToolbar) {
                    $('[data-js=toolbar]').show();
                }
                pageManager[currentPage].show();
            } catch(e) {
                console.log('router error');
            }
        }, 400);
        
    }

    static url() {
        return window.location;
    }

    static setHash(hash) {
        if(!hash) {
            return true;
        }

        this.url().hash = hash;
    }

    static removeHash() {
        history.pushState("", document.title, window.location.pathname);
    }
}

export default RouteManager;
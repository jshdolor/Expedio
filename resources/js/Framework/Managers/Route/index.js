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

        try{
            if(pageManager[currentPage].showToolbar) {
                $('[data-js=toolbar]').show();
            }
            pageManager[currentPage].show();
        } catch(e) {
            console.log('router error');
        }
    }

    static url() {
        return window.location;
    }

    static setHash(hash) {
        if(!hash) {
            return true;
        }

        window.location.hash = hash;
    }
}

export default RouteManager;
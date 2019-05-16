class BrowserManager {

    static detect() {

        if (navigator.userAgent.search("MSIE") >= 0) {
            
            return "msie";

        } else if (navigator.userAgent.search("Chrome") >= 0) {
            
            return "chrome";

        } else if (navigator.userAgent.search("Firefox") >= 0) {
            
            return "firefox";

        } else if (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0) {
            
            return "safari";

        } else if (navigator.userAgent.search("Opera") >= 0) {
            
            return "opera";

        }
    }

    static getVideoFormat(browser) {
        let videoBrowserMap = {
            msie:{
                type:'video/mp4',
                extn: '.mov'
            },
            chrome:{
                type:'video/webm',
                extn: '.webm'
            },
            firefox:{
                type:'video/webm',
                extn: '.webm'
            },
            safari:{
                type:'video/mp4',
                extn: '.mov'
            },
            opera:{
                type:'video/webm',
                extn: '.webm'
            },
        }

        return videoBrowserMap[browser];
    }

    static getBestVideoFormat() {

        return this.getVideoFormat(this.detect());

    }

}

export default BrowserManager;

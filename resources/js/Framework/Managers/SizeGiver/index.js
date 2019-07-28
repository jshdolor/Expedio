import {isMobile} from  '~/Framework/Helpers';

class SizeGiver {

    static mobileSizes() {
        return [
            {
                width: 360,
                height: 740
            },
            {
                width: 412,
                height: 732
            },
            {
                width: 720,
                height: 1280
            },
            {
                width: 1080,
                height: 1920
            }
        ];
    }

    static webSizes() {
        return [
            {
                width: 1280,
                height: 800
            },
            {
                width: 1366,
                height: 768
            },
            {
                width: 1920,
                height: 1080
            }
        ]
    }

    static commonSizes() {

        return isMobile()? this.mobileSizes(): this.webSizes();

    }

    static screenSize() {
        return {
            width: window.screen.width,
            height: window.screen.height
        }
    }

    static getBestSize() {
        
        for(let i = 0; i < this.commonSizes().length; i++) {
            if(this.commonSizes()[i].width >= this.screenSize().width) {
                return this.commonSizes()[i];
            }
        }

        return this.commonSizes()[this.commonSizes().length - 1];

    }

    static getBestSizePath() {
        return `${this.getBestSize().width}x${this.getBestSize().height}`;
    }

}

export default SizeGiver;
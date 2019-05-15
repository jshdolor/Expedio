class SizeGiver {

    static commonSizes() {
        return [
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

    static screenSize() {
        return {
            width: window.screen.width,
            height: window.screen.height
        }
    }

    static getBestSize() {
        
        let partialBestWidth = [];

        this.commonSizes().forEach( (size) => {

            partialBestWidth.push(size.width - this.screenSize().width);

        }) ;
        
        let index = partialBestWidth.indexOf(Math.min.apply(Math, partialBestWidth) );

        return this.commonSizes()[index];

    }

    static getBestSizePath() {
        return `${this.getBestSize().width}x${this.getBestSize().height}`;
    }

}

export default SizeGiver;
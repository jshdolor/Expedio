const path = require('path');

module.exports = function(source, map) {
    
    let newSource = '';
    let absPath = path.resolve(__dirname, `./../resources/js/`);

    if(source.indexOf('~') > -1) {
        newSource = source.replace(/~/g, absPath);
    }

    this.callback(null, newSource, map);

};
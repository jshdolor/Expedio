let essentials = () => {

    String.prototype.toSnakeCase = function(){
        let i =1,
            str = this.split('');

        for(i; i<str.length; i++) {
            if(str[i].charCodeAt() >= 65 && str[i].charCodeAt() <= 90) {
                str[i] = '_'+str[i];
            }
        }
        return str.join('').toLowerCase();
    }

}
export default essentials;
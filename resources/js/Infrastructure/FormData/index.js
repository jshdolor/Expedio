export default class ToFormData {

    toFormData() {

        let keys = Object.keys(this);
        let formData = new window.FormData();
        let value;
        let trueKey;
        if(keys.length > 0) {

            keys.map((namespace) => {

                trueKey = namespace.startsWith('_') > -1 ? namespace.substr(1) : namespace;
                value = this[namespace];
                formData.append(trueKey, value);

            });

        }

        return formData;

    }

    toJSON() {

        let formData = {};

        for (var key in this) {
            if (this.hasOwnProperty(key)) {
                formData[key.startsWith('_') ? key.substr(1) : key] = this[key];
            }
        }

        return formData;
    }

}
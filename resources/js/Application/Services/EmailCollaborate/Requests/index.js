
export default class EmailCollaborateRequest {

    constructor(data) {

        this._name = data.name;
        this._nickName = data.nickName;
        this._email = data.email;
        this._subject = data.subject;
        this._message = data.message;
    }

    get name() {
        return this._name;
    }
    get nickName() {
        return this._nickName;
    }
    get email() {
        return this._email;
    }
    get subject() {
        return this._subject;
    }
    get message() {
        return this._message;
    }

    get formData() {
        
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
    

}
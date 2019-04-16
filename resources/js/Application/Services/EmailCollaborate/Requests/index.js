
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
    

}
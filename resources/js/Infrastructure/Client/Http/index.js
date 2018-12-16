import axios from 'axios';

export default class Http {

    constructor() {

        this.config = {};

    }

    get(url, params = {}, config = {}) {

        this._construct();
        this._prepareHeader();
        this._prepareXhr(url, 'get', config);
        this.config.params = params;
        return this._send();

    }

    post(url, data = {}, config = {}) {

        this._construct();
        this._prepareHeader();
        this._prepareXhr(url, 'post', config);
        this.config.data = data;
        return this._send();

    }

    delete(url, data = {}, config = {}) {

        this._construct();
        this._prepareHeader();
        this._prepareXhr(url, 'delete', config);
        this.config.data = data;
        return this._send();

    }

    _prepareHeader() {

        if (!isEmpty(token)) {
            
        }
    }

    _prepareXhr(url, method, config) {

        this.config.url = url;
        this.config.method = method;
        this.overrides = config;

    }
    _construct() {
        this.overrides = {};
        this.config = {
            url : '',
            data : {},
            method : 'get',
            headers : {},
            params : {},
        };
    }

    _send() {

        if(!isEmpty(this.overrides)) {
            this.config = mergeDeep(this.config, this.overrides);
        }

        return axios(this.config).then((response) => {
                return response.data;
        });

    }
}
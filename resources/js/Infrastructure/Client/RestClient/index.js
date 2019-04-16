import Http from '~/Infrastructure/Client/Http';

export default class RestClient {

    static API_BASE = '/cms/api/v3';

    static options = {
        // headers: {
        // }
    };

    static get(url, params, options = {}) {

        let http = new Http();

        return http.get(this.API_BASE + url, params, this.options);

    }

}
import Http from '~/Infrastructure/Client/Http';

export default class RestClient {

    static get(url, params, options = {}) {

        let http = new Http();

        return http.get(url, params);

    }

    static post(url, data, options = {}){

        let http = new Http();

        return http.post(url, data);

    }

}
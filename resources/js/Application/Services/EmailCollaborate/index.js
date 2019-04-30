
import RestClient from '~/Infrastructure/Client/RestClient';

export default class EmailCollaborate {

    static endpoint = '/api/email-collaborate';

    static handle(request) {

        return RestClient.post(endpoint, request)
            .then(data => { 
                console.log(data)
            })
            .catch(e => {

            });

    }
}

import RestClient from '~/Infrastructure/Client/RestClient';

export default class EmailCollaborate {

    static handle(request) {

        let endpoint = '../api/email-collaborate';

        return RestClient.post(endpoint, request)
            .then(data => { 
                console.log(data)
            })
            .catch(e => {

            });

    }
}
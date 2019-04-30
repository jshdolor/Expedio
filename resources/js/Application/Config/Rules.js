export default {
    collaborate: {
        name : {
            presence: {
                message: '^ Name is required.'
            }
        },
        nickName : {
            presence: {
                message: '^ Nick Name is required.'
            }
        },
        subject : {
            presence: {
                message: '^ Subject is required.'
            }
        },
        message : {
            presence: {
                message: '^ Message is required'
            }
        },
        email : {
            presence: {
                message: '^ Email is required'
            },
            email: {
                message: '^ Email address is not valid'
            }
        }
    }
}
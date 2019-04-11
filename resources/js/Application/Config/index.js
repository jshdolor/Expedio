export default {
    global_variable: 'expedio',
    initializeArray: [
        'expedioClick'
    ],
    pages: [
        {
            id:'#expedio_experience',
            config: {
                position: 'left',
            }
        },
        {
            id:'#expedio_activate',
            config: {
                position: 'top' 
            }
        },
        {
            id:'#expedio_engage',
            config: {
                position: 'bottom'
            }
        },
        {
            id:'#expedio_contact',
            config: {
                position: 'right'
            }
        }
    ],
    navButtons: [
        {
            selector: '.navbtn-top',
            config:{
                target:'activate',
                direction:'top'   
            }
        },
        {
            selector: '.navbtn-left',
            config:{
                target: 'experience'  ,
                direction:'left'   

            }
        },
        {
            selector: '.navbtn-bottom',
            config:{
                target: 'engage'  ,
                direction:'bottom'   
            }
        },
    ],
    partnerSlide: {
        slidesToShow: 3, // kuya josh change this to 1 when screen size is less than 768.
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    }
}
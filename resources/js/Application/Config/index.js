export default {
    global_variable: 'expedio',
    initializeArray: [
        'expedioClick'
    ],
    pages: [
        {
            id: '#expedio_contact',
            config: {
                position: 'right'
            }
        }
    ],
    navButtons: [
        {
            selector: '.navbtn-top',
            config: {
                target: 'activate',
                direction: 'top'
            }
        },
        {
            selector: '.navbtn-left',
            config: {
                target: 'experience',
                direction: 'left'

            }
        },
        {
            selector: '.navbtn-bottom',
            config: {
                target: 'engage',
                direction: 'bottom'
            }
        },
    ],
    partnerSlide: {
        slidesToShow: 3, // kuya josh change this to 1 when screen size is less than 768.
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    },
    expedio_elements: [
        {
            "name":"basketball",
            "zIndex":"28"
        },
        {
            "name":"car",
            "zIndex":"25"
        },
        {
            "name":"coconut",
            "zIndex":"0"
        },
        {
            "name":"dog",
            "zIndex":"29"
        },
        {
            "name":"fiesta",
            "zIndex":"0"
        },
        {
            "name":"popsicle",
            "zIndex":"0"
        },
        {
            "name":"shoppingbag",
            "zIndex":"25"
        },
        {
            "name":"wattah",
            "zIndex":"26"
        },
        {
            "name":"bldg","zIndex":"30"
        },
        {
            "name":"cloud","zIndex":"21"
        },
        {
            "name":"cup","zIndex":"27"
        },
        {
            "name":"eye","zIndex":"5"
        },
        {
            "name":"flower","zIndex":"26"
        },
        {
            "name":"magician","zIndex":"20"
        },
        {
            "name":"rocket","zIndex":"2",
            custom: [
                {
                    duration:100,
                    zIndex:29
                },
                {
                    duration:8800,
                    zIndex:2
                }
            ]
        },
        {
            "name":"singer","zIndex":"0"
        },
        {
            "name":"woman","zIndex":"22"
        }
    ],
    experience: {
        partners: [
            { "name": "oman", fullName: "Oman Tanchingco", "position": "Chief Integrator" },
            { "name": "jelen", fullName: "Jelen Pronstroller", "position": "CEO/ Managing Partner - Events" },
            { "name": "mike", fullName: "Mike Gumaru", "position": "Managing Partner/ Operations Lead" },
        ],
        departments: [{ "name": "allan", "position": "Office Messenger" },
        { "name": "andrea", "position": "Account Manager" },
        { "name": "anjo", "position": "Account Director" },
        { "name": "arlyn", "position": "Billing and Collections Officer" },
        { "name": "ayie", "position": "HR Manager" },
        { "name": "bryan", "position": "Office Messenger" },
        { "name": "camille", "position": "Copywriter" },
        { "name": "carlos", "position": "Copywriter" },
        { "name": "cylo", "position": "Finance Officer" },
        { "name": "dale", "position": "Business Unit Director - Production" },
        { "name": "dm", "position": "Senior Production Designer" },
        { "name": "ernie", "position": "Office Messenger" },
        { "name": "emmie", "position": "Utility Staff" },
        { "name": "eric", "position": "Finance Officer" },
        { "name": "gela", "position": "Account Manager" },
        { "name": "hart", "position": "Utility Staff" },
        { "name": "hazel", "position": "Account Manager" },
        { "name": "inna", "position": "Senior Account Manager" },
        { "name": "kath", "position": "HR Officer" },
        { "name": "cathy", "position": "Admin Officer" },
        { "name": "lea", "position": "Finance Manager" },
        { "name": "maene", "position": "Production Manager" },
        { "name": "marcie", "position": "Art Director" },
        { "name": "marnie" },
        { "name": "mel", "position": "Art Director" },
        { "name": "phoebe", "position": "Production Manager" },
        { "name": "ramil", "position": "Finance Assistant" },
        { "name": "ray", "position": "Senior Art Director" }
        ]
    },
    activate: {
        major_projects: [
            {
                img: "images/activate/collab/LAZADA.jpg"
            }
        ]
    },
    engage: {
        thought_balloons: [
            {
                message: "“Awesome time at the #NBA3XPH2018 celebrity games (emoji) One of the longest and best running yearly events…”",
                className: "balloon balloon-p1"
            },
            {
                message: "“Had another great time at the #nba3xph2018 games. We were unable to defend our crown but at least we got to meet Tim Hardaway Sr!”",
                className: "balloon balloon-p2"
            },
            {
                message: "Happy Mother’s Day to all Super Moms! #MothersDay2018 #eastwoodcity #MumForMoms #LazadaSuperMoms”",
                className: "balloon balloon-p3"
            },
            {
                message: "“Thank you @lazadaph for these Mums for Moms! #LazadaPh #MumsForMoms”",
                className: "balloon balloon-p4"
            },
        ],
        live_stream_video: '<iframe src="https://www.youtube.com/embed/xcJtL7QggTI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    }

}
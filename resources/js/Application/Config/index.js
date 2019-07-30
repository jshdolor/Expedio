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
                    zIndex:31
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
    expedio_mobile_elements: [
        {
            name: 'bldg',
            zIndex: 17,
            duration: 4000,
        },
        {
            name: 'car',
            zIndex: 12,
            duration: 4000,
        },
        {
            name: 'cloud',
            zIndex: 11,
            duration: 4000,
        },
        {
            name: 'coconut',
            zIndex: 17,
            duration: 4000,
        },
        {
            name: 'cup',
            zIndex: 18,
            duration: 4000,
        },
        {
            name: 'dog',
            zIndex: 14,
            duration: 4000,
        },
        {
            name: 'flower',
            zIndex: 17,
            duration: 4000,
        },
        {
            name: 'rocket',
            zIndex: 20,
            duration: 4000,
        },
        {
            name: 'shoppingbag',
            zIndex: 17,
            duration: 4000,
        },
        {
            name: 'woman',
            zIndex: 21,
            duration: 4000,
        },
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
                message: "“First love. &#127936 Awesome time at the #NBA3XPH2018 celebrity games &#128175 One of the longest and best running yearly events out there. Shout everyone who played! Will definitely be back next...”",
                className: "balloon balloon-p1"
            },
            {
                message: "“Had another great time at the #nba3xph2018 games. We were unable to defend our crown but at least we got to meet Tim Hardaway Sr!”",
                className: "balloon balloon-p2"
            },
            {
                message: "Happy Mother’s Day to all Super Moms! <br> #MothersDay2018 #eastwoodcity #MumForMoms #LazadaSuperMoms”",
                className: "balloon balloon-p3"
            },
            {
                message: "“Thank you @lazadaph for these Mums for Moms! <br> #LazadaPh #MumsForMoms”",
                className: "balloon balloon-p4"
            },
            {
                message: "“Point to point. Free Ride just for moms! <br> LazadaPHSuperMoms #JustForMoms”",
                className: "balloon balloon-p5"
            },
            {
                message: "“All set for tonight’s Grand Finale Party. Rock N’Roll ACC 2018. <br> #ACC2018 #EyesOn2020”",
                className: "balloon balloon-p1"
            },
            {
                message: "“Nissan #Terra” makes Philippines debut in sunset launch.”",
                className: "balloon balloon-p3"
            },
            {
                message: "“The Turbo Zone team took the new Nissan Terra for a drive! During the unveiling, it’s emphasized to be a tough vehicle that delivers smooth ride, regardless of situation.”",
                className: "balloon balloon-p5"
            },
            {
                message: "“New @Nissan Terra officially unveiled in the Philippines… Miniature Terra on a hill not included. &#128517 <br> #TheNewNissanTerra #ExceptionalEveryday”",
                className: "balloon balloon-p1"
            },
            {
                message: "“Last night was CRAZY!!!!! Always an amazing party with @bacardi &#127867 <br> #Pobrasyon #BacardiHouseParty”",
                className: "balloon balloon-p3"
            },
            {
                message: "Second time doing a #pubcrawl in Poblacion… loving everything so far. &#128375 &#9904 &#128128.",
                className: "balloon balloon-p3"
            },
            {
                message: "“Congrats to your first ever house party, Lazada! &#129303 Bestpart? Yun pwede mo gusto ung gusto mo kahit may limit na 20 items lang. &#128514”",
                className: "balloon balloon-p2"
            },
            {
                message: "“Wala din kaming ligtas!!! #wattahwattah2018”",
                className: "balloon balloon-p4"
            },
            {
                message: "“So this happened last night! &#128557 So lucky to have shared the same platform with her. I couldn’t believe this really happened. It was one for the books!!! &#10084 <br> #FutureMobility #Toyota #PIMS2018”",
                className: "balloon balloon-p1"
            },
            {
                message: "“Thank you @toyotamotorphilippines! It was a great event. <br> #Toyota7thPIMS #EverMobilityForAll”",
                className: "balloon balloon-p3"
            },
            {
                message: "“The Year-End Bigatin Sales Force Appreciation Night. &#127881 #TeamToyotaGreatGatsbi”",
                className: "balloon balloon-p5"
            },
            {
                message: "<h6>#FXMedPH</h6>",
                className: "balloon balloon-p1"
            },
            {
                message: "<h6>#Pobrasyon</h6>",
                className: "balloon balloon-p4"
            },
            {
                message: "<h6>#WattahWattah2018</h6>",
                className: "balloon balloon-p3"
            },
        ],
        live_stream_video: '<iframe src="https://www.youtube.com/embed/xcJtL7QggTI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    }

}
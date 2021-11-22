const setninger = [
    //introduction
    {
        id: 1,//identifyer for each textNodes in the array
        text: 'You are entering a room. Its dimly lit warm glowing lights hanging from the sealing in golden stems. The room itself is magnificent, huge and vivid by its royale colors and vantage furnishers.',
        options: [
            {
            
            text: 'Next',
            setState: {yes: true}, //
            nextText: 1.1,
            },
        ]
    },
    {
        id: 1.1,//identifyer for each textNodes in the array
        text: 'The scenery gives a relaxing vibe, as its slowly seduce you forward into its center, where more is in store for you. For a minute you hesitate, Is this truly what you want to do?',
        audio: '/JAVASCRIPT/Valeria/audio/bakgrunntest.mp3',
        options: [
            {
            
            text: 'Yes',
            setState: {yes: true}, //
            nextText: 2,
            },
            {
            text: 'No',
            setState: {},
            nextText: 1000,
            },

        ]
    },
    {
        id: 2,
        text: 'Taken by the spectacles you continue inwards the vivid room. “Hello, Hello there,” came across the room. The voice is warm, but profound and youthful.',
        options: [
            {
            text: 'Next',
            setState: true,
            nextText: 3,
            },
        ]
    },
    {
        id: 3,
        text: 'You look around trying spot the source. At your left a silhouette appears in the shape of feminine nature approaching towards you.',
        options: [
            {
             text: 'Next',
             nextText: 3.1,
            },
        ]
    },
    {
        id: 3.1,
        text: 'Tall and skinny with sharp edges. A glowing dark-red beam out from her curly hair. Two glooming eyes of wonder comming closer and closer, in calm clanks for her heals meeting the ground.',
        audio: '/JAVASCRIPT/Valeria/audio/wlaking-high-heels.mp3',
        options: [
            {
             text: 'Hello?',
             
             nextText: 3.2,
            },
            {
                text: 'Who are you?',
                nextText: 9,
               },
            {
             text: 'Do nothing',
             nextText: 1000,
             },

        ]
    },
    {
        id: 3.2,
        text: '"Helloo indeed, how are a fine one like you in an evening like this?"',
        options: [
            {
             text: 'Good',
             nextText: 4,
            },
            {
                text: 'Okey',
                nextText: 4,
               },
               {
                text: 'What?',
                nextText: 3.3,
               },
        ]
    },
    {
        id: 3.3,
        text: '"How are you?"',
        options: [
            {
             text: 'Good',
             nextText: 4,
            },
            {
                text: 'okey',
                nextText: 4,
               },
        ]
    },
    {
        id: 4,
        text: 'She smerks while walking closer',
        audio: '/JAVASCRIPT/Valeria/audio/le.mp3',
        options: [
            {
             text: 'Next',
             nextText: 5,
            },
        ]
    },
    {
        id: 5,
        text: '"You new here arent you?"',
        options: [
            {
             text: 'Yes',
             nextText: 5.2,
            },
            {
                text: 'No',
                nextText: 5.1,
               },
        ]
    },
    {
        id: 5.1,
        text: '"Humm, really. I never seen a face like yours around, and belive me its one of my Specialties."',
        // audio: '/JAVASCRIPT/Valeria/audio/sound2.mp3',
        options: [
            {
             text: 'What?',
             nextText: 5.4,
            },
            {
                text: 'Next',
                nextText: 5.1,
               },
        ]
    },
    {
        id: 5.2,
        text: '"Hum well then I welcome you to palace Palatul Plăcerii, on of the plesureful place ever to exsist."',
        options: [
            {
             text: 'Next',
             nextText: 5.3,
            },
        ]
    },
    {
        id: 5.3,
        text: '"I am Valeria, plesure to meet you,"',
        options: [
            {
             text: 'Nice to meet you too',
             nextText: 5.3,
            },
            {
                text: 'Enchante',
                nextText: 5.5,
            },
            {
                text: 'The plesure is all mine',
                nextText: 5.5,
               },
               {
                   text: 'Like wise',
                   nextText: 6,
               },
        ]
    },
    {
        id: 5.4,
        text: '"Recognize people like you,"',
        options: [
            {
             text: 'Next',
             nextText: 5.2,
            },
        ]
    },
    {
        id: 5.5,
        text: '"Hum a gjentle sole, like wise"',
        audio: '/JAVASCRIPT/Valeria/audio/le.mp3',
        options: [
            {
             text: 'Next',
             nextText: 5.2,
            },
        ]
    },
    {
        id: 5.6,
        text: 'Humm-hmuh...charming,',

        options: [
            {
                text: 'North',
                nextText: 6.1,
            },
            {
                text: 'South',
                nextText: 6.10,
            }
        ]
    },
    {
        id: 6.10,
        text: '',
        options: [
            {
                text: '',
                nextText: '',
            },
            {
                text: '',
                nextText: '',
            }
        ]
    },
    {
        id: 6,
        text: '"where are you from?"',
        options: [
            {
                text: 'North',
                nextText: 6.1,
            },
            {
                text: 'South',
                nextText: 6.10,
            },
        ]
    },
    {
        id: 6.1,
        text: '"Ah an northling, you do strike me as an wiking,"',
        options: [
            {
                text: 'Yes',
                nextText: 6.2,
            },
            {
                text: 'No',
                nextText: 6.1,
            },
        ]
    },
    {
        id: 6.1,
        text: '"Ah an northling, you do strike me as an wiking,"',
        options: [
            {
                text: 'Yes',
                nextText: 6.2,
            },
            {
                text: 'No',
                nextText: 6.3,
            },
        ]
    },
    {
        id: 6.3,
        text: '"Hum rearly?,"',
        options: [
            {
                text: 'Yes',
                nextText: 6.4,
            },
            {
                text: 'No',
                nextText: 6.5,
            },
        ]
    },
    {
        id: 6.10,
        text: '',
        options: [
            {
                text: '',
                nextText: '',
            },
            {
                text: '',
                nextText: '',
            }
        ]
    },
    {
        id: 6.10,
        text: '',
        options: [
            {
                text: '',
                nextText: '',
            },
            {
                text: '',
                nextText: '',
            }
        ]
    },
    {
        id: 6.10,
        text: '',
        options: [
            {
                text: '',
                nextText: '',
            },
            {
                text: '',
                nextText: '',
            }
        ]
    },
    {
        id: 1000,
        text: 'You turn around and leave the resident',
        options: [
            {
            text: 'Try again?',
            nextText: 1,
            },

        ]
    },
    {
        id: 1300,
        text: 'You turn around and try to leave, but is too late...',
        options: [
            {
            text: 'Next',
            nextText: 1300.1,
            },

        ]
    },
    {
        id: 1300.1,
        text: 'The knife penetrating your spine leaveing you dead on the floor',
        options: [
            {
            text: 'Try Again?',
            nextText: 1,
            },

        ]
    },
   
    //U.N.G.

    //Seven Indian Kingdoms
    
    //endings
    {
        id: 1000,
        text: 'You turn around and leave the resident',
        options: [
            {
            text: 'Try again?',
            nextText: 1,
            },

        ]
    }
]

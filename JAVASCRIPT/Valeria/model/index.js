const setninger = [
    //introduction
    {
        id: 1,//identifyer for each textNodes in the array
        text: 'You are entering a room. Its dimly lit warm glowing lights hanging from the sealing in golden stems. The room itself is magnificent, huge and vivid by its royale colors and vantage furnishers  The scenery gives a relaxing vibe, as its slowly seduce you forward into its center, where more is in store for you. In a minute you hesitate for a second or two. Is this truly what you want to do?',
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
            text: 'look for the voice',
            setState: true,
            nextText: 3,
            },
            {
                text: 'Do nothing',
                nextText: 1000,
            },

        ]
    },
    {
        id: 3,
        text: 'You look around trying spot the source of the voice. At your left a silhouette appears in the shape of feminine nature. Tall and skinny with sharp edges. A glowing dark-red beam out from her curly hair. Two glooming eyes of wonder approaching you in calm clanks for her heals meeting the ground.',
        options: [
            {
             text: 'Hello?',
             nextText: 5,
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
        text: 'You turn around and leave the resident',
        options: [
            {
            text: 'Try again?',
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

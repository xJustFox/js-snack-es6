// SNACK 1
let bikeArray = [
    {
        name: 'Atala',
        weight: 32
    },
    {
        name: 'Alan Bikes',
        weight: 8
    },
    {
        name: 'Fantic',
        weight: 23
    },
    {
        name: 'Chesini',
        weight: 45
    },
    {
        name: 'Guerciotti',
        weight: 50
    },
    {
        name: 'Mopbike',
        weight: 12
    },
]
// Scrollo gli oggetti contenuti nell'array
bikeArray.forEach((elem) => {
    // destructuring
    let {name, weight} = elem;

    // se il peso è minore di 25 verra printato in console
    if (weight <= 25) {
        console.log(elem);
    }
})


// SNACK 2
let footballTeams = [
    {
        name: 'Atlanta',
        goal: 0,
        fouls: 0
    },
    {
        name: 'Juventus',
        goal: 0,
        fouls: 0
    },
    {
        name: 'Milan',
        goal: 0,
        fouls: 0
    },
    {
        name: 'Inter',
        goal: 0,
        fouls: 0
    },
    {
        name: 'Barcellona',
        goal: 0,
        fouls: 0
    },
    {
        name: 'Real Madrid',
        goal: 0,
        fouls: 0
    },
]
console.log(footballTeams);

// Creo un array vuoto
let foulsTeams = []

// Scrollo gli oggetti contenuti nell'array
footballTeams.map((elem) => {
    // destructuring
    let {name, goal, fouls} = elem;

    // Utilizzo un if per filtrare i valori che voglio cambiare
    if (goal == 0 && fouls == 0) {
        // genero randomicamente i valori e gli aggiungo alle proprietà che devono essere cambiate
        elem.goal = Math.floor(Math.random()*10 + 0);
        elem.fouls = Math.floor(Math.random()*10 + 0);
        console.log(elem);

        // elimino la proprietà goal
        delete elem.goal;

        // inserisco i nuovi oggetti nell'array vuoto
        foulsTeams.push(elem)
    }
})
console.log(foulsTeams);


// SNACK 3
let articles = [
    {
        name: 'Poppy',
        type: 'tshirt',
        color: 'red'
    },
    {
        name: 'Jumping',
        type: 'occhiali',
        color: 'blue'
    },{
        name: 'CrissCross',
        type: 'scarpe',
        color: 'black'
    },{
        name: 'Jenny',
        type: 'borsa',
        color: 'pink'
    }
]
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

bikeArray.forEach((elem) => {
    let {name, weight} = elem;
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

let foulsTeams = []
footballTeams.map((elem) => {
    let {name, goal, fouls} = elem;

    if (goal == 0) {
        elem.goal = Math.floor(Math.random()*10 + 0);
        elem.fouls = Math.floor(Math.random()*10 + 0);
        console.log(elem);
        delete elem.goal;
        foulsTeams.push(elem)
    }
})
delete foulsTeams['goal'];
console.log(foulsTeams);
console.log("------------------------SNACK 1-------------------------");

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
let lowerBike = bikeArray[0]
bikeArray.forEach((elem) => {

    // se il peso è minore di 25 verra printato in console
    if (elem.weight < lowerBike.weight) {
        lowerBike = elem;
        console.log(elem);
    }
})

let {name, weight} = lowerBike;

let text = `La bici più leggera è la ${name} e pesa ${weight}`;
console.log(text);

console.log("------------------------SNACK 2-------------------------");

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

console.log("------------------------SNACK 3-------------------------");

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

console.log(articles);

// Funzione che genera una lettera casuale dalla a alla z
const generateRandomLetter = function () {
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const lettersLength = letters.length;

    return letters.charAt(Math.floor(Math.random() * lettersLength));
}

// Creo un array vuoto
let newArticles = [];

// Scrollo gli oggetti contenuti nell'array
articles.map((elem) => {
    // destructuring
    let {name, type, color, position} = elem;

    // Aggiungo alla proprietà position la funzione 'generateRandomLetter()'
    elem.position = generateRandomLetter();

    // Aggiungo i nuovi oggetti alla variabile vuota
    newArticles.push(elem);
})

console.log(newArticles);

let ul = document.querySelector('ul');
newArticles.forEach((elem) => {
    let li = document.createElement('li');
    li.textContent = `Nome: ${elem.name} , Tipo: ${elem.type} , Colore: ${elem.color} , Posizione: ${elem.position}`;
    ul.appendChild(li);
})
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
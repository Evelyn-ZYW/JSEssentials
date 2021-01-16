var animals = [
    { name: 'evelyn', species: 'rabbit' },
    { name: 'frank', species: 'dog' },
    { name: 'kelvin', species: 'dog' },
    { name: 'melody', species: 'fish' },
    { name: 'duoduo', species: 'cat' },
    { name: 'jessica', species: 'fish' }
]

/*
var names = []
for (var i =0; i < animals.length; i++){
    names.push(animals[i].name)
}
*/

/*
var names = animals.map(function(animal){
    return animal.name
})
*/

var names = animals.map((animal)=>{
    return animal.name + " is a " + animal.species
})
console.log(names)
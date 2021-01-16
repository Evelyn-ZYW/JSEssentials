/*
function putThingInObject(thing){
    return {contents: thing}
}

let containedFive = putThingInObject(5)
console.log(containedFive.contents)
console.log(containedFive.contents + 2)
*/
const pets = [
    {
        name: "fido",
        animal: "dog",
        age: 2
    },
    {
        name: "mittens",
        animal: "cat",
        age: 5
    }
]
//------------------------------GENERIC FOR LOOP------------------------------//
/*
for (let i = 0; i < pets.length; i++) {
  const item = pets[i]
  console.log(`${item.name} is ${item.age} years old`)
  console.log(item.name + " is " + item.age + " years old")
}
*/
//------------------------------CREATE FOR EACH FUNCTION FIRST, AND ANOTHER FUNCTION TO EXECUTE IT------------------------------//
/*
function forEach(array) {
    for (i = 0; i < array.length; i++) {
        const item = array[i]
    }
}

function printPet(pet) {
    console.log(`${pet.name} is ${pet.age} years old`)
}
printPet(pets[0])
*/
//------------------------------FOR EACH AND CALLBACK FUNCTION------------------------------//
/*
//forEach now has a new responsibility. It must loop over an array and execute a callback function with the current item in the array. It knows nothing about the custom logic or the contents of the array. It only knows that there is an array, and a function that must be executed for each item in that array.
function forEach(array, callback) {
    for (let i = 0; i < array.length; i++){
        const item = array[i]
        callback(item)
    }
}

function printPet(pet) {
    console.log(`${pet.name} is ${pet.age} years old`)
}

forEach(pets, printPet)

const lyrics = ["buy", "it", "use", "it", "break", "it", "fix", "it", "trash", "it", "change", "it", "mail", "upgrade", "it"]

forEach(lyrics, (lyric)=>console.log(lyric))

*/

//The forEach function is so common, that it's one of the many methods that are already available on the array object. So the above code could be rewritten using the built in method:
const lyrics = ["buy", "it", "use", "it", "break", "it", "fix", "it", "trash", "it", "change", "it", "mail", "upgrade", "it"]
lyrics.forEach((lyric)=>console.log(lyric))
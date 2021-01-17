//------------------------------how async is related to callback function------------------------------//

/*
function sayHello(){
    console.log("sup")
}
console.log("a")
sayHello()

//We're passing the function as a VALUE to setTimeout, we're not manually executing it.
// setTimeout(sayHello, 5000)

console.log("b")
*/



function sayHello(){
    console.log("sup")
}
console.log("a")
setInterval(sayHello, 5000)
console.log("b")

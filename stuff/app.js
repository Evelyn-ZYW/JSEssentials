const readline = require('readline')
const makePensive = require("./makePensive.js")
// import makePensive from "./makePensive.js" es modules

const dataStore = require('./dataStore')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})


rl.on('line', input => {
  const number = Number(input)
  if (number) {
    dataStore.toggleAvailable(number)
  } else {
    dataStore.addMember(input)
  }
  
  dataStore.allMembers().forEach(member => console.log(member))
})



// const input = process.argv[2]
// const newInput = makePensive(input)
// console.log(newInput)

console.log("end of script")
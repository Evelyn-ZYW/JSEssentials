

// module.exports = makePensive
// export default function makePensive(text) {
//   return `😔 ${text} 😔`
// }

// // exports.makePensive = makePensive
// export function makePensive(text) {
//   return `😔 ${text} 😔`
// }


function makePensive(text) {
  return `😔 ${text} 😔`
}

// if mutating exports, just used exports
// exports.makePensive = makePensive
// module.exports.makePensive = makePensive

// if reassigning exports, use module.exports
module.exports = makePensive


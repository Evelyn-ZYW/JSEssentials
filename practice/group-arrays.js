// Write a function that takes an array of strings as argument
// Group those strings by their first letter
// Return an object that contains properties with keys representing first letters
// The values should be arrays of strings containing only the corresponding strings
// For example, the array ['Alf', 'Alice', 'Ben'] should be transformed to
// { a: ['Alf', 'Alice'], b: ['Ben']}

let result = function myFunction(arr) {
  let output = arr.reduce((initials, name) => {
    initials[name[0]] = initials[name[0]] || [];
    initials[name[0]].push(name);
    // console.log("hello", initials);
    return initials;
  }, {});
  return output;
};

console.log(result(["Alf", "Ben", "Alice", "Brian", "Alf", "Frank", "Evelyn"]));

// console.log(result(["Alf", "Alice", "Ben"]));
// Expected
// { a: ['Alf', 'Alice'], b: ['Ben']}

// console.log(result(['Ant', 'Bear', 'Bird']))
// Expected
// { a: ['Ant'], b: ['Bear', 'Bird']}

// console.log(result(['Berlin', 'Paris', 'Prague']))
// Expected
// { b: ['Berlin'], p: ['Paris', 'Prague']}

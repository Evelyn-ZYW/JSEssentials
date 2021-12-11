// Write a function that takes an array of strings as argument
// Group those strings by their first letter
// Return an object that contains properties with keys representing first letters
// The values should be arrays of strings containing only the corresponding strings
// For example, the array ['Alf', 'Alice', 'Ben'] should be transformed to
// { a: ['Alf', 'Alice'], b: ['Ben']}

function myFunction(arr) {
  let output = arr.reduce((initials, name) => {
    initials[name[0]] = initials[name[0]] || [];
    initials[name[0]].push(name);
    console.log("hello", initials);
    return initials;
  }, {});
  return output;
}

console.log(
  myFunction(["Alf", "Ben", "Alice", "Brian", "Alf", "Frank", "Evelyn"])
);
// console.log(myFunction(["Alf", "Alice", "Ben"]));
// myFunction([1, 2, 3]);
// Expected
// { a: ['Alf', 'Alice'], b: ['Ben']}

// myFunction(['Ant', 'Bear', 'Bird'])
// Expected
// { a: ['Ant'], b: ['Bear', 'Bird']}

// myFunction(['Berlin', 'Paris', 'Prague'])
// Expected
// { b: ['Berlin'], p: ['Paris', 'Prague']}

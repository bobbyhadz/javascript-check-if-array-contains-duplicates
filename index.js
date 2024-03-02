// EXAMPLE 1 - Check if an Array contains Duplicates in JavaScript

const arr1 = ['a', 'a'];
const arr2 = ['a', 'b'];

function containsDuplicates(array) {
  if (array.length !== new Set(array).size) {
    return true;
  }

  return false;
}

console.log(containsDuplicates(arr1)); // 👉️ true

console.log(containsDuplicates(arr2)); // 👉️ false

// ------------------------------------------------------------------

// // EXAMPLE 2 - Check if an Array contains Duplicates with some()

// const arr1 = ['a', 'a'];
// const arr2 = ['a', 'b'];

// function containsDuplicates(array) {
//   const result = array.some(element => {
//     if (array.indexOf(element) !== array.lastIndexOf(element)) {
//       return true;
//     }

//     return false;
//   });

//   return result;
// }

// console.log(containsDuplicates(arr1)); // 👉️ true

// console.log(containsDuplicates(arr2)); // 👉️ false

// ------------------------------------------------------------------

// // EXAMPLE 3 - Check if an array contains duplicate objects using `Set()`

// const arr = [
//   {id: 1, name: 'Alice'},
//   {id: 2, name: 'Bob'},
//   {id: 1, name: 'Carl'},
// ];

// const uniqueValues = new Set(
//   arr.map(obj => {
//     return obj.id;
//   }),
// );
// console.log(uniqueValues); // 👉️ Set(2) { 1, 2 }

// const hasDuplicates = uniqueValues.size < arr.length;
// console.log(hasDuplicates); // 👉️ true

// ------------------------------------------------------------------

// // EXAMPLE 4 - Check if an array contains duplicate objects using `Array.map()`

// const arr = [
//   {id: 1, name: 'Alice'},
//   {id: 2, name: 'Bob'},
//   {id: 1, name: 'Carl'},
// ];

// const values = arr.map(o => o.id);
// console.log(values); // 👉️ [1, 2, 1]

// const hasDuplicates = values.some((item, index) => {
//   return values.indexOf(item) !== index;
// });

// console.log(hasDuplicates); // 👉️ true

// if (hasDuplicates) {
//   console.log('The array has duplicate objects');
// } else {
//   console.log('The array does NOT have duplicate objects');
// }

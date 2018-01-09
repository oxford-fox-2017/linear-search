'use strict'

// Release 0
console.log("Linear Search")
let linearSearch = (target, values) => {
  for (const value in values) {
    if (values.hasOwnProperty(value)) {
      const element = values[value];
      if(element == target){
        return value
      }
    }
  }
  return -1
}

let random_numbers = [ 6, 29, 18, 2, 72, 19, 18, 10, 37 ];

console.log(linearSearch(18, random_numbers));
// 2
console.log(linearSearch(9, random_numbers));
// -1

// // Release 1
console.log("Global Linear Search")
let globalLinearSearch = (target, values) => {
  let arr = []
  for (const value in values) {
    if (values.hasOwnProperty(value)) {
      const element = values[value];
      if(element == target){
        arr.push(value)
      }
    }
  }
  return arr
}

let banana_arr = "banana".split("");
// // ["b", "a", "n", "a", "n", "a"]
console.log(globalLinearSearch("a", banana_arr));
// // [ 1, 3, 5 ]

// module.exports = {
//   linearSearch,
//   globalLinearSearch
// }

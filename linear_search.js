

// Release 0
console.log("Linear Search");
let linearSearch = (target, values) => {
  //write your code here
  // console.log(target);
  // console.log(values);
  for(var x=0; x<values.length; x++){
  if(values[x] == target) return x;
  }
  return -1;
};

let random_numbers = [ 6, 29, 18, 2, 72, 19, 18, 10, 37 ];

console.log(linearSearch(18, random_numbers));
// 2
console.log(linearSearch(9, random_numbers));
// -1

// Release 1
console.log("Global Linear Search");
let globalLinearSearch = (target, values) => {
  //write your code here
  // console.log(target);
  // console.log(values);
  var arr =[];

  for(var x=0; x<values.length; x++){
    // console.log(values[x]);
    if(values[x] === target){
    arr[arr.length]=x;
    }
  }
  return arr;
};

let banana_arr = "banana".split("");
// ["b", "a", "n", "a", "n", "a"]
console.log(globalLinearSearch("a", banana_arr));
// [ 1, 3, 5 ]

// // module.exports = {
// //   linearSearch,
// //   globalLinearSearch
// // }

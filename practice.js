// Array.prototype.myEach = function(cb) {
//   for (var i of this) cb.call(this, i)
// }

// var arr = ['biggy smalls', 'bif tannin', 'boo radley', 'hans gruber']
// arr.myEach(function(word) {
//   console.log(word)
// })

// Array.prototype.myMap = function(cb) {
//   var arr = []
//   for (var i = 0; i < this.length; i++) arr[i] = cb.call(this, this[i])
//   return arr
// }

// var arrs = ['dic tanin', 'boo radley', 'hans gruber']
// var numbers2 = [1, 4, 9]

// var goodT = arrs.myMap(function(n) {
//   return n
// })

// var squareRoot = numbers2.myMap(function(num) {
//   return Math.sqrt(num)
// })

// Array.prototype.myFilter = function (cb) {
//   var arr = []
//   for (var i of this) cb.call(this, i) ? arr.push(i) : false
//   return arr
// }
// var numbers = [1, 20, 30, 80, 2, 9, 3];
// var newNum = numbers.myFilter(function(n) {
//     return n >= 10;
// });
// console.log(newNum); // [ 20, 30, 80 ]

// Array.prototype.myReduce = function(reducer, curr) {
//   var _curr = curr
//   for (var i = this.length - 1; i >= 0; i--)
//     _curr = reducer.call(this, this[i], _curr)
//   return _curr
// }

// //tests
// var numbers3 = [20, 20, 2, 3]
// var total = numbers3.myReduce(function(a, b) {
//   return a + b
// }, 10)
// console.log(total) // 55

// var flattened = [[0, 1], [2, 3], [4, 5]].myReduce(function(a, b) {
//   return a.concat(b)
// })
// console.log(flattened) //[ 0, 1, 2, 3, 4, 5 ]


// Array.prototype.myEvery = function (cb) {
//   var res = true
//   for (var i of this) res = cb.call(this, i) && res
//   return res
// }

// //tests
// var passed = [12, 5, 8, 130, 44].myEvery(function(element) {
//   return (element >= 10);
// });
// console.log(passed); // false
// passed = [12, 54, 18, 130, 44].myEvery(function(element) {
//   return (element >= 10);
// });
// console.log(passed); // true

// passed = [12, 54, 18, 130, 44].myEvery(function(element) {
//   return (element >= 13);
// });
// console.log(passed); // false


// Array.prototype.mySome = function(cb) {
//   var res = false
//   for (var i of this) res = cb.call(this, i) || res
//   return res
// }

// //tests
// var passed = [12, 5, 8, 130, 44].mySome(function(element) {
//   return (element >= 200);
// });
// console.log('some: ' + passed); //some: false

// var passed = [12, 5, 8, 130, 44].mySome(function(element) {
//   return (element >= 100);
// });
// console.log('some: ' + passed); //some: true
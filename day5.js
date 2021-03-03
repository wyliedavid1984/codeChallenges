// Good morning!Here 's your coding interview problem for today.

// This problem was asked by Jane Street.

// cons(a, b) constructs a pair, and car(pair) and cdr(pair) returns the first and last element of that pair.For example, car(cons(3, 4)) returns 3, and cdr(cons(3, 4)) returns 4.

// Given this implementation of cons:

//     def cons(a, b):
//     def pair(f):
//     return f(a, b)
// return pair
// Implement car and cdr.

const cons = (a,b)=> [a,b];
const car = (arr)=> arr[0];
const cdr = (arr)=> arr[arr.length-1] //or just arr[1] seeing how we are talking only in pairs.

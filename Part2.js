/* 22. deepFlatten
This snippet flattens an array recursively.
*/
const deepFlatten = arr => [].concat(...arr.map(v => (Array.isArray(v) ? deepFlatten(v) : v)));

deepFlatten([1, [2], [[3], 4], 5]); // [1,2,3,4,5]

/* 23. default
This snippet assigns default values for all properties in an object that are undefined.
*/
const defaults = (obj, ...defs) => Object.assign({}, obj, ...defs.reverse(), obj);

defaults({a: 1}, {b: 2}, {b: 6}, {a: 3}); // { a: 1, b: 2 }

/* 24. defer
This snippet delays the execution of a function until the current call stack is cleared.
*/
const defer = (fn, ...args) => setTimeout(fn, 1, ...args);

defer(console.log, 'a'), console.log('b'); // logs 'b' then 'a'

/* 25. degreesToRads
This code snippet can be used to convert a value from degrees to radians.
*/
const degreesToRads = deg => (deg * Math.PI) / 180.0;

degreesToRads(90.0); // ~1.5708

/* 26. difference
This snippet finds the difference between two arrays.
*/
const difference = (a, b) => {
  const s = new Set(b);
  return a.filter(x => !s.has(x));
};

difference([1, 2, 3], [1, 2, 4]); // [3]

/* 27. differenceBy
This method returns the difference between two arrays, after applying a given function to each element of both lists.
*/
const differenceBy = (a, b, fn) => {
  const s = new Set(b.map(fn));
  return a.filter(x => !s.has(fn(x)));
};

differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor); // [1.2]
differenceBy([{x: 2}, {x: 1}], [{x: 1}], v => v.x); // [ { x: 2 } ]

/* 28. differenceWith
This snippet removes the values for which the comparator function returns false.
*/
const differenceWith = (arr, val, comp) => arr.filter(a => val.findIndex(b => comp(a, b)) === -1);

differenceWith([1, 1.2, 1.5, 3, 0], [1.9, 3, 0], (a, b) => Math.round(a) === Math.round(b));
// [1, 1.2]

/* 29. digitize
This snippet gets a number as input and returns an array of its digits.
*/
const digitize = n => [...`${n}`].map(i => parseInt(i));

digitize(431); // [4, 3, 1]

/* 30. distance
This snippet returns the distance between two points by calculating the Euclidean distance.
*/
const distance = (x0, y0, x1, y1) => Math.hypot(x1 - x0, y1 - y0);

distance(1, 1, 2, 3); // 2.23606797749979

/* 31. Drop Elements
This snippet returns a new array with n elements removed from the left.
*/

const drop = (arr, n = 1) => arr.slice(n);

drop([1, 2, 3]); // [2,3]
drop([1, 2, 3], 2); // [3]
drop([1, 2, 3], 42); // []

/* 32. dropRight
This snippet returns a new array with n elements removed from the right.
*/
const dropRight = (arr, n = 1) => arr.slice(0, -n);

dropRight([1, 2, 3]); // [1,2]
dropRight([1, 2, 3], 2); // [1]
dropRight([1, 2, 3], 42); // []

/* 33. dropRightWhile
This snippet removes elements from the right side of an array until the passed function returns true.
*/
const dropRightWhile = (arr, func) => {
  while (arr.length > 0 && !func(arr[arr.length - 1])) arr = arr.slice(0, -1);
  return arr;
};

dropRightWhile([1, 2, 3, 4], n => n < 3); // [1, 2]

/* 34. dropWhile
This snippet removes elements from an array until the passed function returns true.
*/
const dropWhile = (arr, func) => {
  while (arr.length > 0 && !func(arr[0])) arr = arr.slice(1);
  return arr;
};

dropWhile([1, 2, 3, 4], n => n >= 3); // [3,4]

/* 35. elementContains
This snippet checks whether the parent element contains the child.
*/
const elementContains = (parent, child) => parent !== child && parent.contains(child);

elementContains(document.querySelector('head'), document.querySelector('title')); // true
elementContains(document.querySelector('body'), document.querySelector('body')); // false

/* 36. Filter Duplicate Elements
This snippet removes duplicate values in an array.
*/
const filterNonUnique = arr => arr.filter(i => arr.indexOf(i) === arr.lastIndexOf(i));

filterNonUnique([1, 2, 2, 3, 4, 4, 5]); // [1, 3, 5]

/* 37. findKey
This snippet returns the first key that satisfies a given function.
*/

const findKey = (obj, fn) => Object.keys(obj).find(key => fn(obj[key], key, obj));

findKey(
  {
    barney: {age: 36, active: true},
    fred: {age: 40, active: false},
    pebbles: {age: 1, active: true}
  },
  o => o.active
); // 'barney'

/* 38. findLast
This snippet returns the last element for which a given function returns a truthy value.
*/
const findLast = (arr, fn) => arr.filter(fn).pop();

findLast([1, 2, 3, 4], n => n % 2 === 1); // 3

/* 39. flatten
This snippet flattens an array up to a specified depth using recursion.
*/

const flatten = (arr, depth = 1) =>
  arr.reduce((a, v) => a.concat(depth > 1 && Array.isArray(v) ? flatten(v, depth - 1) : v), []);

flatten([1, [2], 3, 4]); // [1, 2, 3, 4]
flatten([1, [2, [3, [4, 5], 6], 7], 8], 2); // [1, 2, 3, [4, 5], 6, 7, 8]

/* 40. forEachRight
This snippet executes a function for each element of an array starting from the array’s last element.
*/
const forEachRight = (arr, callback) =>
  arr
    .slice(0)
    .reverse()
    .forEach(callback);

forEachRight([1, 2, 3, 4], val => console.log(val)); // '4', '3', '2', '1'

/* 41. forOwn
This snippet iterates on each property of an object and iterates a callback for each one respectively.
*/

const forOwn = (obj, fn) => Object.keys(obj).forEach(key => fn(obj[key], key, obj));
forOwn({foo: 'bar', a: 1}, v => console.log(v)); // 'bar', 1

/* 42. functionName
This snippet prints the name of a function into the console.
*/
const functionName = fn => (console.debug(fn.name), fn);

functionName(Math.max); // max (logged in debug channel of console)

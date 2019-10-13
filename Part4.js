/* 64. isBrowser
This snippet can be used to determine whether the current runtime environment is a browser. This is helpful for avoiding errors when running front-end modules on the server (Node).
*/
const isBrowser = () => ![typeof window, typeof document].includes('undefined');

isBrowser(); // true (browser)
isBrowser(); // false (Node)

/* 65. isBrowserTabFocused
This snippet can be used to determine whether the browser tab is focused.
*/
const isBrowserTabFocused = () => !document.hidden;

isBrowserTabFocused(); // true

/* 66. isLowerCase
This snippet can be used to determine whether a string is lower case.
*/
const isLowerCase = str => str === str.toLowerCase();

isLowerCase('abc'); // true
isLowerCase('a3@$'); // true
isLowerCase('Ab4'); // false

/* 67. isNil
This snippet can be used to check whether a value is null or undefined.
*/

const isNil = val => val === undefined || val === null;

isNil(null); // true
isNil(undefined); // true

/* 68. isNull
This snippet can be used to check whether a value is null.
*/
const isNull = val => val === null;

isNull(null); // true

/* 69. isNumber
This snippet can be used to check whether a provided value is a number.
*/
function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

isNumber('1'); // false
isNumber(1); // true

/* 70. isObject
This snippet can be used to check whether a provided value is an object. It uses the Object constructor to create an object wrapper for the given value.
If it is already an object, then an object type that corresponds to the given value will be returned. Otherwise, a new object will be returned.
*/
const isObject = obj => obj === Object(obj);

isObject([1, 2, 3, 4]); // true
isObject([]); // true
isObject(['Hello!']); // true
isObject({ a: 1 }); // true
isObject({}); // true
isObject(true); // false

/* 71. isObjectLike
This snippet can be used to check if a value is not null and that its typeof is “object”.
*/
const isObjectLike = val => val !== null && typeof val === 'object';

isObjectLike({}); // true
isObjectLike([1, 2, 3]); // true
isObjectLike(x => x); // false
isObjectLike(null); // false

/* 72. isPlainObject
This snippet checks whether a value is an object created by the Object constructor.
*/
const isPlainObject = val => !!val && typeof val === 'object' && val.constructor === Object;

isPlainObject({ a: 1 }); // true
isPlainObject(new Map()); // false

/* 73. isPromiseLike
This snippet checks whether an object looks like a Promise.
*/
const isPromiseLike = obj =>
  obj !== null &&
  (typeof obj === 'object' || typeof obj === 'function') &&
  typeof obj.then === 'function';
  
isPromiseLike({
  then: function() {
    return '';
  }
}); // true
isPromiseLike(null); // false
isPromiseLike({}); // false

/* 74. isSameDate
This snippet can be used to check whether two dates are equal.
*/
const isSameDate = (dateA, dateB) => dateA.toISOString() === dateB.toISOString();

isSameDate(new Date(2010, 10, 20), new Date(2010, 10, 20)); // true

/* 75. isString
This snippet can be used to check whether an argument is a string.
*/
const isString = val => typeof val === 'string';

isString('10'); // true

/* 76. isSymbol
This snippet can be used to check whether an argument is a symbol.
*/
const isSymbol = val => typeof val === 'symbol';

isSymbol(Symbol('x')); // true

/* 77. isUndefined
This snippet can be used to check whether a value is undefined.
*/
const isUndefined = val => val === undefined;

isUndefined(undefined); // true

/* 78. isUpperCase
This snippet can be used to check whether a string is upper case.
*/
const isUpperCase = str => str === str.toUpperCase();

isUpperCase('ABC'); // true
isLowerCase('A3@$'); // true
isLowerCase('aB4'); // false

/* 79. isValidJSON
This snippet can be used to check whether a string is a valid JSON.
*/
const isValidJSON = str => {
  try {
    JSON.parse(str);
    return true;
  } catch (e) {
    return false;
  }
};

isValidJSON('{"name":"Adam","age":20}'); // true
isValidJSON('{"name":"Adam",age:"20"}'); // false
isValidJSON(null); // true

/* 80. last
This snippet returns the last element of an array.
*/
const last = arr => arr[arr.length - 1];

last([1, 2, 3]); // 3

/* 81. matches
This snippet compares two objects to determine if the first one contains the same property values as the second one.
*/
const matches = (obj, source) =>
  Object.keys(source).every(key => obj.hasOwnProperty(key) && obj[key] === source[key]);
  
matches({ age: 25, hair: 'long', beard: true }, { hair: 'long', beard: true }); // true
matches({ hair: 'long', beard: true }, { age: 25, hair: 'long', beard: true }); // false

/* 82. maxDate
This snippet can be used to get the latest date.
*/
const maxDate = (...dates) => new Date(Math.max.apply(null, ...dates));

const array = [
  new Date(2017, 4, 13),
  new Date(2018, 2, 12),
  new Date(2016, 0, 10),
  new Date(2016, 0, 9)
];
maxDate(array); // 2018-03-11T22:00:00.000Z

/* 83. maxN
This snippet returns the n largest elements from a list. If n is greater than or equal to the list’s length, then it will return the original list (sorted in descending order).
*/
const maxN = (arr, n = 1) => [...arr].sort((a, b) => b - a).slice(0, n);

maxN([1, 2, 3]); // [3]
maxN([1, 2, 3], 2); // [3,2]

/* 84. minDate
This snippet can be used to get the earliest date.
*/
const minDate = (...dates) => new Date(Math.min.apply(null, ...dates));

const array = [
  new Date(2017, 4, 13),
  new Date(2018, 2, 12),
  new Date(2016, 0, 10),
  new Date(2016, 0, 9)
];
minDate(array); // 2016-01-08T22:00:00.000Z
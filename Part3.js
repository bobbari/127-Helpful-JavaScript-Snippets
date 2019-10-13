/* 43. Get Time From Date
This snippet can be used to get the time from a Date object as a string.
*/
const getColonTimeFromDate = date => date.toTimeString().slice(0, 8);

getColonTimeFromDate(new Date()); // "08:38:00"

/* 44. Get Days Between Dates
This snippet can be used to find the difference in days between two dates.
*/
const getDaysDiffBetweenDates = (dateInitial, dateFinal) =>
  (dateFinal - dateInitial) / (1000 * 3600 * 24);

getDaysDiffBetweenDates(new Date('2019-01-13'), new Date('2019-01-15')); // 2

/* 45. getStyle
This snippet can be used to get the value of a CSS rule for a particular element.
*/
const getStyle = (el, ruleName) => getComputedStyle(el)[ruleName];

getStyle(document.querySelector('p'), 'font-size'); // '16px'

/* 46. getType
This snippet can be used to get the type of a value.
*/
const getType = v =>
  v === undefined ? 'undefined' : v === null ? 'null' : v.constructor.name.toLowerCase();
  
getType(new Set([1, 2, 3])); // 'set'

/* 47. hasClass
This snippet checks whether an element has a particular class.
*/
const hasClass = (el, className) => el.classList.contains(className);

hasClass(document.querySelector('p.special'), 'special'); // true

/* 48. head
This snippet returns the head of a list.
*/
const head = arr => arr[0];

head([1, 2, 3]); // 1

/* 49. hide
This snippet can be used to hide all elements specified.
*/
const hide = (...el) => [...el].forEach(e => (e.style.display = 'none'));

hide(document.querySelectorAll('img')); // Hides all <img> elements on the page

/* 50. httpsRedirect
This snippet can be used to redirect from HTTP to HTTPS in a particular domain.
*/
const httpsRedirect = () => {
  if (location.protocol !== 'https:') location.replace('https://' + location.href.split('//')[1]);
};

httpsRedirect(); // If you are on http://mydomain.com, you are redirected to https://mydomain.com

/* 51. indexOfAll
This snippet can be used to get all indexes of a value in an array, which returns an empty array, in case this value is not included in it.
*/
const indexOfAll = (arr, val) => arr.reduce((acc, el, i) => (el === val ? [...acc, i] : acc), []);

indexOfAll([1, 2, 3, 1, 2, 3], 1); // [0,3]
indexOfAll([1, 2, 3], 4); // []

/* 52. initial
This snippet returns all elements of an array except the last one.
*/
const initial = arr => arr.slice(0, -1);

initial([1, 2, 3]); // [1,2]const initial = arr => arr.slice(0, -1);
initial([1, 2, 3]); // [1,2]

/* 53. insertAfter
This snippet can be used to insert an HTML string after the end of a particular element.
*/
const insertAfter = (el, htmlString) => el.insertAdjacentHTML('afterend', htmlString);

insertAfter(document.getElementById('myId'), '<p>after</p>'); // <div id="myId">...</div> <p>after</p>

/* 54. insertBefore
This snippet can be used to insert an HTML string before a particular element.
*/
const insertBefore = (el, htmlString) => el.insertAdjacentHTML('beforebegin', htmlString);

insertBefore(document.getElementById('myId'), '<p>before</p>'); // <p>before</p> <div id="myId">...</div>

/* 55. intersection
This snippet can be used to get an array with elements that are included in two other arrays.
*/
const intersection = (a, b) => {
  const s = new Set(b);
  return a.filter(x => s.has(x));
};

intersection([1, 2, 3], [4, 3, 2]); // [2, 3]

/* 56. intersectionBy
This snippet can be used to return a list of elements that exist in both arrays, after a particular function has been executed to each element of both arrays.
*/
const intersectionBy = (a, b, fn) => {
  const s = new Set(b.map(fn));
  return a.filter(x => s.has(fn(x)));
};

intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor); // [2.1]

/* 57. intersectionWith
This snippet can be used to return a list of elements that exist in both arrays by using a comparator function.
*/
const intersectionWith = (a, b, comp) => a.filter(x => b.findIndex(y => comp(x, y)) !== -1);

intersectionWith([1, 1.2, 1.5, 3, 0], [1.9, 3, 0, 3.9], (a, b) => Math.round(a) === Math.round(b)); // [1.5, 3, 0]

/* 58. is
This snippet can be used to check if a value is of a particular type.
*/
const is = (type, val) => ![, null].includes(val) && val.constructor === type;

is(Array, [1]); // true
is(ArrayBuffer, new ArrayBuffer()); // true
is(Map, new Map()); // true
is(RegExp, /./g); // true
is(Set, new Set()); // true
is(WeakMap, new WeakMap()); // true
is(WeakSet, new WeakSet()); // true
is(String, ''); // true
is(String, new String('')); // true
is(Number, 1); // true
is(Number, new Number(1)); // true
is(Boolean, true); // true
is(Boolean, new Boolean(true)); // true

/* 59. isAfterDate
This snippet can be used to check whether a date is after another date.
*/
const isAfterDate = (dateA, dateB) => dateA > dateB;

isAfterDate(new Date(2010, 10, 21), new Date(2010, 10, 20)); // true

/* 60. isAnagram
This snippet can be used to check whether a particular string is an anagram with another string.
*/
const isAnagram = (str1, str2) => {
  const normalize = str =>
    str
      .toLowerCase()
      .replace(/[^a-z0-9]/gi, '')
      .split('')
      .sort()
      .join('');
  return normalize(str1) === normalize(str2);
};

isAnagram('iceman', 'cinema'); // true

/* 61. isArrayLike
This snippet can be used to check if a provided argument is iterable like an array.
*/
const isArrayLike = obj => obj != null && typeof obj[Symbol.iterator] === 'function';

isArrayLike(document.querySelectorAll('.className')); // true
isArrayLike('abc'); // true
isArrayLike(null); // false

/* 62. isBeforeDate
This snippet can be used to check whether a date is before another date.
*/
const isBeforeDate = (dateA, dateB) => dateA < dateB;

isBeforeDate(new Date(2010, 10, 20), new Date(2010, 10, 21)); // true

/* 63. isBoolean
This snippet can be used to check whether an argument is a boolean.
*/
const isBoolean = val => typeof val === 'boolean';

isBoolean(null); // false
isBoolean(false); // true
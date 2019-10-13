/* 85. minN
This snippet returns the n smallest elements from a list. If n is greater than or equal to the list’s length, then it will return the original list (sorted in ascending order).
*/
const minN = (arr, n = 1) => [...arr].sort((a, b) => a - b).slice(0, n);

minN([1, 2, 3]); // [1]
minN([1, 2, 3], 2); // [1,2]

/* 86. negate
This snippet can be used to apply the not operator (!) to a predicate function with its arguments.
*/
const negate = func => (...args) => !func(...args);

[1, 2, 3, 4, 5, 6].filter(negate(n => n % 2 === 0)); // [ 1, 3, 5 ]

/* 87. nodeListToArray
This snippet can be used to convert a nodeList to an array.
*/
const nodeListToArray = nodeList => [...nodeList];

nodeListToArray(document.childNodes); // [ <!DOCTYPE html>, html ]

/* 88. pad
This snippet can be used to pad a string on both sides with a specified character if it is shorter than the specified length.
*/
const pad = (str, length, char = ' ') =>
  str.padStart((str.length + length) / 2, char).padEnd(length, char);
  
pad('cat', 8); // '  cat   '
pad(String(42), 6, '0'); // '004200'
pad('foobar', 3); // 'foobar'

/* 89. radsToDegrees
This snippet can be used to convert an angle from radians to degrees.
*/
const radsToDegrees = rad => (rad * 180.0) / Math.PI;

radsToDegrees(Math.PI / 2); // 90

/* 90. Random Hexadecimal Color Code
This snippet can be used to generate a random hexadecimal color code.
*/
const randomHexColorCode = () => {
  let n = (Math.random() * 0xfffff * 1000000).toString(16);
  return '#' + n.slice(0, 6);
};

randomHexColorCode(); // "#e34155"

/* 91. randomIntArrayInRange
This snippet can be used to generate an array with n random integers in a specified range.
*/
const randomIntArrayInRange = (min, max, n = 1) =>
  Array.from({ length: n }, () => Math.floor(Math.random() * (max - min + 1)) + min);
  
randomIntArrayInRange(12, 35, 10); // [ 34, 14, 27, 17, 30, 27, 20, 26, 21, 14 ]

/* 92. randomIntegerInRange
This snippet can be used to generate a random integer in a specified range.
*/
const randomIntegerInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

randomIntegerInRange(0, 5); // 3

/* 93. randomNumberInRange
This snippet can be used to return a random number in a specified range.
*/
const randomNumberInRange = (min, max) => Math.random() * (max - min) + min;

randomNumberInRange(2, 10); // 6.0211363285087005

/* 94. readFileLines
This snippet can be used to read a file by getting an array of lines from a file.
*/
const fs = require('fs');
const readFileLines = filename =>
  fs
    .readFileSync(filename)
    .toString('UTF8')
    .split('\n');

let arr = readFileLines('test.txt');
console.log(arr); // ['line1', 'line2', 'line3']

/* 95. Redirect to a URL
This snippet can be used to do a redirect to a specified URL.
*/
const redirect = (url, asLink = true) => (asLink ? (window.location.href = url) : window.location.replace(url));

redirect('https://google.com');

/* 96. reverse
This snippet can be used to reverse a string.
*/
const reverseString = str => [...str].reverse().join('');

reverseString('foobar'); // 'raboof'

/* 97. round
This snippet can be used to round a number to a specified number of digits.
*/
const round = (n, decimals = 0) => Number(`${Math.round(`${n}e${decimals}`)}e-${decimals}`);

round(1.005, 2); // 1.01

/* 98. runPromisesInSeries
This snippet can be used to run an array of promises in series.
*/
const runPromisesInSeries = ps => ps.reduce((p, next) => p.then(next), Promise.resolve());
const delay = d => new Promise(r => setTimeout(r, d));

runPromisesInSeries([() => delay(1000), () => delay(2000)]); 
// Executes each promise sequentially, taking a total of 3 seconds to complete

/* 99. sample
This snippet can be used to get a random number from an array.
*/
const sample = arr => arr[Math.floor(Math.random() * arr.length)];

sample([3, 7, 9, 11]); // 9

/* 100. sampleSize
This snippet can be used to get n random elements from unique positions from an array up to the size of the array. Elements in the array are shuffled using the Fisher-Yates algorithm.
*/
const sampleSize = ([...arr], n = 1) => {
  let m = arr.length;
  while (m) {
    const i = Math.floor(Math.random() * m--);
    [arr[m], arr[i]] = [arr[i], arr[m]];
  }
  return arr.slice(0, n);
};

sampleSize([1, 2, 3], 2); // [3,1]
sampleSize([1, 2, 3], 4); // [2,3,1]

/* 101. scrollToTop
This snippet can be used to do a smooth scroll to the top of the current page.
*/
const scrollToTop = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, c - c / 8);
    }
};

scrollToTop();

/* 102. serializeCookie
This snippet can be used to serialize a cookie name-value pair into a Set-Cookie header string.
*/
const serializeCookie = (name, val) => `${encodeURIComponent(name)}=${encodeURIComponent(val)}`;

serializeCookie('foo', 'bar'); // 'foo=bar'

/* 103. setStyle
This snippet can be used to set the value of a CSS rule for a particular element.
*/
const setStyle = (el, ruleName, val) => (el.style[ruleName] = val);

setStyle(document.querySelector('p'), 'font-size', '20px');
// The first <p> element on the page will have a font-size of 20px

/* 104. shallowClone
This snippet can be used to create a shallow clone of an object.
*/
const shallowClone = obj => Object.assign({}, obj);

const a = { x: true, y: 1 };
const b = shallowClone(a); // a !== b

/* 105. show
This snippet can be used to show all the elements specified.
*/
const show = (...el) => [...el].forEach(e => (e.style.display = ''));

show(...document.querySelectorAll('img')); // Shows all <img> elements on the page

/* 106. shuffle
This snippet can be used to order the elements of an array randomly using the Fisher-Yates algorithm.
*/
const shuffle = ([...arr]) => {
  let m = arr.length;
  while (m) {
    const i = Math.floor(Math.random() * m--);
    [arr[m], arr[i]] = [arr[i], arr[m]];
  }
  return arr;
};

const foo = [1, 2, 3];
shuffle(foo); // [2, 3, 1], foo = [1, 2, 3]

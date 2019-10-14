/* 107. similarity
This snippet can be used to return an array of elements that appear in two arrays.
*/
const similarity = (arr, values) => arr.filter(v => values.includes(v));

similarity([1, 2, 3], [1, 2, 4]); // [1, 2]

/* 108. sleep
This snippet can be used to delay the execution of an asynchronous function by putting it into sleep.
*/
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

async function sleepyWork() {
    console.log("I'm going to sleep for 1 second.");
    await sleep(1000);
    console.log('I woke up after 1 second.');
}

/* 109. smoothScroll
This snippet can be used to smoothly scroll the element on which it is called into the visible area of the browser window.
*/
const smoothScroll = element =>
  document.querySelector(element).scrollIntoView({
    behavior: 'smooth'
  });
  
smoothScroll('#fooBar'); // scrolls smoothly to the element with the id fooBar
smoothScroll('.fooBar'); // scrolls smoothly to the first element with a class of fooBar

/* 110. sortCharactersInString
This snippet can be used to alphabetically sort the characters in a string.
*/
const sortCharactersInString = str => [...str].sort((a, b) => a.localeCompare(b)).join('');

sortCharactersInString('cabbage'); // 'aabbceg'

/* 111. splitLines
This snippet can be used to split a multi-line string into an array of lines.
*/
const splitLines = str => str.split(/\r?\n/);

splitLines('This\nis a\nmultiline\nstring.\n'); // ['This', 'is a', 'multiline', 'string.' , '']

/* 112. stripHTMLTags
This snippet can be used to remove HTML/XML tags from a string.
*/
stripHTMLTags('<p><em>lorem</em> <strong>ipsum</strong></p>'); // 'lorem ipsum'

/* 113. sum
This snippet can be used to find the sum of two or more numbers or arrays.
*/
const sum = (...arr) => [...arr].reduce((acc, val) => acc + val, 0);

sum(1, 2, 3, 4); // 10
sum(...[1, 2, 3, 4]); // 10

/* 114. tail
This snippet can be used to get an array with all the elements of an array except for the first one. If the array has only one element, then that an array with that element will be returned instead.
*/
const tail = arr => (arr.length > 1 ? arr.slice(1) : arr);

tail([1, 2, 3]); // [2,3]
tail([1]); // [1]

/* 115. take
This snippet can be used to get an array with n elements removed from the beginning.
*/
const take = (arr, n = 1) => arr.slice(0, n);

take([1, 2, 3], 5); // [1, 2, 3]
take([1, 2, 3], 0); // []

/* 116. takeRight
This snippet can be used to get an array with n elements removed from the end.
*/
const takeRight = (arr, n = 1) => arr.slice(arr.length - n, arr.length);

takeRight([1, 2, 3], 2); // [ 2, 3 ]
takeRight([1, 2, 3]); // [3]

/* 117. timeTaken
This snippet can be used to find out the time it takes to execute a function.
*/
const timeTaken = callback => {
  console.time('timeTaken');
  const r = callback();
  console.timeEnd('timeTaken');
  return r;
};

timeTaken(() => Math.pow(2, 10)); // 1024, (logged): timeTaken: 0.02099609375ms

/* 118. times
This snippet can be used to iterate over a callback n times.
*/
const times = (n, fn, context = undefined) => {
  let i = 0;
  while (fn.call(context, i) !== false && ++i < n) {}
};

var output = '';
times(5, i => (output += i));
console.log(output); // 01234

/* 119. toCurrency
This snippet can be used to format a number like a currency.
*/
const toCurrency = (n, curr, LanguageFormat = undefined) =>
  Intl.NumberFormat(LanguageFormat, { style: 'currency', currency: curr }).format(n);
  
toCurrency(123456.789, 'EUR'); // €123,456.79  | currency: Euro | currencyLangFormat: Local
toCurrency(123456.789, 'USD', 'en-us'); // $123,456.79  | currency: US Dollar | currencyLangFormat: English (United States)
toCurrency(123456.789, 'USD', 'fa'); // ۱۲۳٬۴۵۶٫۷۹ ؜$ | currency: US Dollar | currencyLangFormat: Farsi
toCurrency(322342436423.2435, 'JPY'); // ¥322,342,436,423 | currency: Japanese Yen | currencyLangFormat: Local
toCurrency(322342436423.2435, 'JPY', 'fi'); // 322 342 436 423 ¥ | currency: Japanese Yen | currencyLangFormat: Finnish

/* 120. toDecimalMark
This snippet uses the toLocaleString() function to convert float-point arithmetic to the decimal mark form by using a number to make a comma-separated string.
*/
const toDecimalMark = num => num.toLocaleString('en-US');

toDecimalMark(12305030388.9087); // "12,305,030,388.909"

/* 121. toggleClass
This snippet can be used to toggle a class for an element.
*/
const toggleClass = (el, className) => el.classList.toggle(className);

toggleClass(document.querySelector('p.special'), 'special'); // The paragraph will not have the 'special' class anymore

/* 122. tomorrow
This snippet can be used to get a string representation of tomorrow’s date.
*/
const tomorrow = () => {
  let t = new Date();
  t.setDate(t.getDate() + 1);
  return t.toISOString().split('T')[0];
};

tomorrow(); // 2019-09-08 (if current date is 2018-09-08)

/* 123. unfold
This snippet can be used to build an array using an iterator function and an initial seed value.
*/
const unfold = (fn, seed) => {
  let result = [],
    val = [null, seed];
  while ((val = fn(val[1]))) result.push(val[0]);
  return result;
};

var f = n => (n > 50 ? false : [-n, n + 10]);
unfold(f, 10); // [-10, -20, -30, -40, -50]

/* 124. union
This snippet can be used to find the union of two arrays, resulting in an array that has elements that come from both arrays but that do not repeat.
*/
const union = (a, b) => Array.from(new Set([...a, ...b]));

union([1, 2, 3], [4, 3, 2]); // [1,2,3,4]

/* 125. uniqueElements
This snippet uses ES6 Set and the …rest operator to get every element only once.
*/
const uniqueElements = arr => [...new Set(arr)];

uniqueElements([1, 2, 2, 3, 4, 4, 5]); // [1, 2, 3, 4, 5]

/* 126. validateNumber
This snippet can be used to check whether a value is a number.
*/
const validateNumber = n => !isNaN(parseFloat(n)) && isFinite(n) && Number(n) == n;

validateNumber('10'); // true

/* 127. words
This snippet converts a string into an array of words.
*/
const words = (str, pattern = /[^a-zA-Z-]+/) => str.split(pattern).filter(Boolean);

words('I love javaScript!!'); // ["I", "love", "javaScript"]
words('python, javaScript & coffee'); // ["python", "javaScript", "coffee"]
/* 1. all
This snippet returns true if the predicate function returns true for all elements in a collection and false otherwise. You can omit the second argument fn if you want to use Boolean as a default value.
*/
const all = (arr, fn = Boolean) => arr.every(fn);

all([4, 2, 3], x => x > 1); // true
all([1, 2, 3]); // true

/* 2. allEqual
This snippet checks whether all elements of the array are equal.
*/
const allEqual = arr => arr.every(val => val === arr[0]);

allEqual([1, 2, 3, 4, 5, 6]); // false;
allEqual([1, 1, 1, 1]); // true

/* 3. approximatelyEqual
This snippet checks whether two numbers are approximately equal to each other, with a small difference.
*/
const approximatelyEqual = (v1, v2, epsilon = 0.001) => Math.abs(v1 - v2) < epsilon;

approximatelyEqual(Math.PI / 2.0, 1.5708); // true

/* 4. arrayToCSV
This snippet converts the elements to strings with comma-separated values.
*/
const arrayToCSV = (arr, delimiter = ',') => arr.map(v => v.map(x => `"${x}"`).join(delimiter)).join('\n');

arrayToCSV([['a', 'b'], ['c', 'd']]); // '"a","b"\n"c","d"'
arrayToCSV([['a', 'b'], ['c', 'd']], ';'); // '"a";"b"\n"c";"d"'

/* 5. arrayToHtmlList
This snippet converts the elements of an array into <li> tags and appends them to the list of the given ID.
*/
const arrayToHtmlList = (arr, listID) =>
    (el => (
        (el = document.querySelector('#' + listID)), (el.innerHTML += arr.map(item => `<li>${item}</li>`).join(''))
    ))();

arrayToHtmlList(['item 1', 'item 2'], 'myListID');

/* 6. attempt
This snippet executes a function, returning either the result or the caught error object.
*/
const attempt = (fn, ...args) => {
    try {
        return fn(...args);
    } catch (e) {
        return e instanceof Error ? e : new Error(e);
    }
};

let elements = attempt(function(selector) {
    return document.querySelectorAll(selector);
}, '>_>');

if (elements instanceof Error) {
    elements = [];
} // elements = []

/* 7. average
This snippet returns the average of two or more numerical values.
*/
const average = (...nums) => nums.reduce((acc, val) => acc + val, 0) / nums.length;
average(...[1, 2, 3]); // 2
average(1, 2, 3); // 2

/* 8. averageBy
This snippet returns the average of an array after initially doing the mapping of each element to a value using a given function.
*/
const averageBy = (arr, fn) =>
    arr.map(typeof fn === 'function' ? fn : val => val[fn]).reduce((acc, val) => acc + val, 0) / arr.length;

averageBy([{n: 4}, {n: 2}, {n: 8}, {n: 6}], o => o.n); // 5
averageBy([{n: 4}, {n: 2}, {n: 8}, {n: 6}], 'n'); // 5

/* 9. bifurcate
This snippet splits values into two groups and then puts a truthy element of filter in the first group, and in the second group otherwise.

You can use Array.prototype.reduce() and Array.prototype.push() to add elements to groups based on filter.
*/
const bifurcate = (arr, filter) => arr.reduce((acc, val, i) => (acc[filter[i] ? 0 : 1].push(val), acc), [[], []]);
bifurcate(['beep', 'boop', 'foo', 'bar'], [true, true, false, true]);
// [ ['beep', 'boop', 'bar'], ['foo'] ]

/* 10. bifurcateBy
This snippet splits values into two groups, based on a predicate function. If the predicate function returns a truthy value, the element will be placed in the first group. Otherwise, it will be placed in the second group.

You can use Array.prototype.reduce() and Array.prototype.push() to add elements to groups, based on the value returned by fn for each element.
*/
const bifurcateBy = (arr, fn) => arr.reduce((acc, val, i) => (acc[fn(val, i) ? 0 : 1].push(val), acc), [[], []]);

bifurcateBy(['beep', 'boop', 'foo', 'bar'], x => x[0] === 'b');
// [ ['beep', 'boop', 'bar'], ['foo'] ]

/* 11. bottomVisible
This snippet checks whether the bottom of a page is visible.
*/
const bottomVisible = () =>
    document.documentElement.clientHeight + window.scrollY >=
    (document.documentElement.scrollHeight || document.documentElement.clientHeight);

bottomVisible(); // true

/* 12. byteSize
This snippet returns the length of a string in bytes.
*/
const byteSize = str => new Blob([str]).size;

byteSize('😀'); // 4
byteSize('Hello World'); // 11

/* 13. capitalize
This snippet capitalizes the first letter of a string.
*/
const capitalize = ([first, ...rest]) => first.toUpperCase() + rest.join('');

capitalize('fooBar'); // 'FooBar'
capitalize('fooBar', true); // 'Foobar'

/* 14. capitalizeEveryWord
This snippet capitalizes the first letter of every word in a given string.
*/
const capitalizeEveryWord = str => str.replace(/\b[a-z]/g, char => char.toUpperCase());

capitalizeEveryWord('hello world!'); // 'Hello World!'

/* 15. castArray
This snippet converts a non-array value into array.
*/
const castArray = val => (Array.isArray(val) ? val : [val]);

castArray('foo'); // ['foo']
castArray([1]); // [1]

/* 16. compact
This snippet removes false values from an array.
*/
const compact = arr => arr.filter(Boolean);

compact([0, 1, false, 2, '', 3, 'a', 'e' * 23, NaN, 's', 34]);
// [ 1, 2, 3, 'a', 's', 34 ]

/* 17. countOccurrences
This snippet counts the occurrences of a value in an array.
*/
const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
countOccurrences([1, 1, 2, 1, 2, 3], 1); // 3

/* 18. Create Directory
This snippet uses existsSync() to check whether a directory exists and then mkdirSync() to create it if it doesn’t.
*/
const fs = require('fs');
const createDirIfNotExists = dir => (!fs.existsSync(dir) ? fs.mkdirSync(dir) : undefined);
createDirIfNotExists('test');
// creates the directory 'test', if it doesn't exist

/* 19. currentURL
This snippet returns the current URL.
*/
const currentURL = () => window.location.href;

currentURL(); // 'https://medium.com/@fatosmorina'

/* 20. dayOfYear
This snippet gets the day of the year from a Date object.
*/
const dayOfYear = date => Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);

dayOfYear(new Date()); // 272

/* 21. decapitalize
This snippet turns the first letter of a string into lowercase.
*/
const decapitalize = ([first, ...rest]) => first.toLowerCase() + rest.join('');

decapitalize('FooBar'); // 'fooBar'
decapitalize('FooBar'); // 'fooBar'

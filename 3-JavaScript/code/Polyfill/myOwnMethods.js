/*
====================================================
JavaScript Prototype Practice (Custom Polyfills)
Author: Ashish
Purpose: Understanding how built-in JS methods work
====================================================
*/

/*
====================================================
ARRAY METHODS
====================================================
*/

/*
----------------------------------------------------
1. Custom map() implementation
----------------------------------------------------
Description:
Creates a new array by applying a callback
to each element of the original array.
----------------------------------------------------
*/

Array.prototype.mapOne = function (callback) {
  if (typeof callback !== 'function') {
    throw new TypeError('Callback must be a function');
  }

  const result = [];

  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }

  return result;
};

// Example
const numbers = [2, 4, 6, 8];
const incremented = numbers.mapOne((num) => num + 1);

console.log('mapOne result:', incremented);

/*
----------------------------------------------------
2. Custom forEach() implementation
----------------------------------------------------
Description:
Executes a callback for each array element.
Does NOT return a new array.
----------------------------------------------------
*/

Array.prototype.forEachOne = function (callback) {
  if (typeof callback !== 'function') {
    throw new TypeError('Callback must be a function');
  }

  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

// Example
const arr = [3, 6, 9, 12];

console.log('\nforEachOne output:');

arr.forEachOne((ele) => {
  console.log(ele);
});

/*
----------------------------------------------------
3. Custom reduce() implementation
----------------------------------------------------
Description:
Reduces the array to a single value by
accumulating results from a callback.
----------------------------------------------------
*/

Array.prototype.reduceOne = function (callback, initialValue) {
  if (typeof callback !== 'function') {
    throw new TypeError('Callback must be a function');
  }

  let accumulator = initialValue;
  let startIndex = 0;

  if (accumulator === undefined) {
    accumulator = this[0];
    startIndex = 1;
  }

  for (let i = startIndex; i < this.length; i++) {
    accumulator = callback(accumulator, this[i], i, this);
  }

  return accumulator;
};

// Example
const nums = [2, 4, 6, 8];

const sum = nums.reduceOne((acc, curr) => acc + curr, 0);

console.log('\nreduceOne result:', sum);

/*
====================================================
STRING METHODS
====================================================
*/

/*
----------------------------------------------------
1. Custom toUpperCase()
----------------------------------------------------
Description:
Converts lowercase characters to uppercase
using ASCII character codes.
----------------------------------------------------
*/

String.prototype.toUpperCaseOne = function () {
  let result = '';

  for (let i = 0; i < this.length; i++) {
    const charCode = this.charCodeAt(i);

    if (charCode >= 97 && charCode <= 122) {
      result += String.fromCharCode(charCode - 32);
    } else {
      result += this[i];
    }
  }

  return result;
};

// Example
console.log('\ntoUpperCaseOne:', 'hello'.toUpperCaseOne());

/*
----------------------------------------------------
2. Custom reverse()
----------------------------------------------------
Description:
Reverses the characters of a string.
----------------------------------------------------
*/

String.prototype.reverseOne = function () {
  let result = '';

  for (let i = this.length - 1; i >= 0; i--) {
    result += this[i];
  }

  return result;
};

// Example
console.log('reverseOne:', 'Ashish'.reverseOne());

/*
----------------------------------------------------
3. Custom includes()
----------------------------------------------------
Description:
Checks whether a substring exists inside
the current string.
----------------------------------------------------
*/

String.prototype.includesOne = function (search) {
  if (search === '') return true;

  for (let i = 0; i <= this.length - search.length; i++) {
    let match = true;

    for (let j = 0; j < search.length; j++) {
      if (this[i + j] !== search[j]) {
        match = false;
        break;
      }
    }

    if (match) return true;
  }

  return false;
};

// Example
console.log('includesOne:', 'javascript'.includesOne('script'));

/*
====================================================
IMPORTANT CONCEPT
====================================================

Inside prototype methods:

this → the object calling the method

Examples:

[1,2,3].mapOne(...)
this = [1,2,3]

"hello".toUpperCaseOne()
this = "hello"

====================================================
*/

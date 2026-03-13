// I create my own method called mapTwo that will work like the map
// method but it will return the square of each element in the array.

// My Own Array Methods

// 1. map()
Array.prototype.mapOne = function (callback) {
  const result = [];

  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }
  return result;
};
console.log([2, 4, 6, 8].mapOne((num) => num + 1));

// 2. forEach()
Array.prototype.forEachOne = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};
const arr = [3, 6, 9, 12];
console.log(arr.forEach((ele) => console.log(ele)));

// 3. reduce()
Array.prototype.reduceOne = function (callback, initialValue) {
  let accumulator = initialValue;

  for (let i = 0; i < this.length; i++) {
    accumulator = callback(accumulator, this[i], i, this);
  }

  return accumulator;
};
const nums = [2, 4, 6, 8];
const sum = nums.reduceOne((acc, curr) => acc + curr, 0);
console.log(sum);

// String Methods

// 1. toUpperCase()
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
console.log('hello'.toUpperCaseOne());

// 2. reverse()
String.prototype.reverseOne = function () {
  let result = '';

  for (let i = this.length - 1; i >= 0; i--) {
    result += this[i];
  }

  return result;
};
console.log('Ashish'.reverseOne());

// 3. includes()
String.prototype.includesOne = function (search) {
  return this.indexOf(search) !== -1;
};
console.log('javascript'.includesOne('script'));

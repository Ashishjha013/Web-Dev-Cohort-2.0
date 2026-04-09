# JavaScript Prototypes & Custom Methods (Polyfills)

## 1. The Big Idea

In JavaScript, every object has a hidden property called:

```
[[Prototype]]
```

This prototype acts like a **backup object**.

If JavaScript cannot find a property or method on the object itself, it **looks inside its prototype**.

### Simple Rule

```
Object → Prototype → Prototype → ... → null
```

This search process is called the **Prototype Chain**.

---

# 2. Example: Where does `map()` come from?

When you write:

```javascript
const arr = [1,2,3];
arr.map(x => x * 2);
```

You might think `map()` exists inside `arr`.

But internally JavaScript does this:

```
arr
 ↓
Array.prototype
 ↓
Object.prototype
 ↓
null
```

JavaScript checks:

```
Does arr have map()? → No
Does Array.prototype have map()? → Yes
```

So it runs that method.

---

# 3. What is `Array.prototype`?

`Array.prototype` is an object that stores **all array methods**.

Examples:

```
map()
forEach()
filter()
reduce()
push()
pop()
```

Because these methods live in `Array.prototype`, **every array can use them**.

---

# 4. Creating Your Own Methods

We can attach our own methods to prototypes.

Example syntax:

```javascript
Array.prototype.methodName = function() {
   // code
}
```

Now **every array can use this method**.

Example:

```javascript
[1,2,3].methodName()
```

---

# 5. Custom `map()` Implementation

### What `map()` does

1. Loops through the array
2. Runs a callback function
3. Stores returned values
4. Returns a **new array**

### Implementation

```javascript
Array.prototype.mapOne = function(callback) {
  const result = [];

  for(let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }

  return result;
};
```

### Example

```javascript
console.log([2,4,6,8].mapOne(num => num + 1));
```

Output

```
[3,5,7,9]
```

---

# 6. Custom `forEach()`

### What `forEach()` does

Runs a callback on each element but **returns nothing**.

### Implementation

```javascript
Array.prototype.forEachOne = function(callback) {

  for(let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }

};
```

### Example

```javascript
const arr = [3,6,9,12];

arr.forEachOne(ele => console.log(ele));
```

Output

```
3
6
9
12
```

---

# 7. Custom `reduce()`

### What `reduce()` does

It combines array values into **one final value**.

Example

```
[2,4,6,8] → sum → 20
```

### Implementation

```javascript
Array.prototype.reduceOne = function(callback, initialValue) {

  let accumulator = initialValue;

  for(let i = 0; i < this.length; i++) {
    accumulator = callback(accumulator, this[i], i, this);
  }

  return accumulator;
};
```

### Example

```javascript
const nums = [2,4,6,8];

const sum = nums.reduceOne((acc, curr) => acc + curr, 0);

console.log(sum);
```

Output

```
20
```

---

# 8. String Prototype Methods

Just like arrays, strings also have prototypes.

```
String.prototype
```

This contains methods like:

```
toUpperCase()
includes()
slice()
trim()
```

We can add our own methods here too.

---

# 9. Custom `toUpperCase()`

```javascript
String.prototype.toUpperCaseOne = function() {

  let result = '';

  for(let i = 0; i < this.length; i++) {

    const charCode = this.charCodeAt(i);

    if(charCode >= 97 && charCode <= 122) {
      result += String.fromCharCode(charCode - 32);
    }
    else {
      result += this[i];
    }

  }

  return result;
};
```

Example

```javascript
console.log("hello".toUpperCaseOne());
```

Output

```
HELLO
```

---

# 10. Custom String Reverse

```javascript
String.prototype.reverseOne = function() {

  let result = '';

  for(let i = this.length - 1; i >= 0; i--) {
    result += this[i];
  }

  return result;
};
```

Example

```javascript
console.log("Ashish".reverseOne());
```

Output

```
hsihsA
```

---

# 11. Custom `includes()`

```javascript
String.prototype.includesOne = function(search) {

  return this.indexOf(search) !== -1;

};
```

Example

```javascript
console.log("javascript".includesOne("script"));
```

Output

```
true
```

---

# 12. Important Concept: `this`

Inside prototype methods:

```
this → the current object
```

Example

```
[2,4,6].mapOne(...)
```

Inside the method:

```
this = [2,4,6]
```

Example

```
"hello".toUpperCaseOne()
```

Inside the method:

```
this = "hello"
```

---

# 13. Prototype Chain Summary

```
Array instance
     ↓
Array.prototype
     ↓
Object.prototype
     ↓
null
```

JavaScript always searches **up this chain** when accessing properties.

---

# 14. Why Prototypes Exist

Without prototypes, every object would need to store its own copy of methods.

Example problem:

```
1000 arrays
1000 copies of map()
```

Using prototypes:

```
1 copy of map()
shared by all arrays
```

This makes JavaScript **memory efficient**.

---

# 15. Key Takeaways

✔ Every JavaScript object has a **prototype**

✔ If a property is not found, JavaScript searches the **prototype chain**

✔ `Array.prototype` stores all array methods

✔ `String.prototype` stores all string methods

✔ We can create custom methods using:

```
ObjectType.prototype.methodName = function() {}
```

✔ Inside prototype methods:

```
this = the object calling the method
```

---

# Final Mental Model

```
Object
   ↓
Prototype
   ↓
Prototype
   ↓
null
```

JavaScript keeps searching **until it finds the method or reaches null**.

---

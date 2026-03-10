# 📘 JavaScript – Variables (var, let, const)

---

## 🧠 Big Picture

### ✅ What is a Variable?

A **variable** is a container that stores data.

Think of it like:

📦 **A labeled box in memory**

```js
let crewCount = 12;
```

Here:

- `crewCount` → label
- `12` → stored value

---

## 🧩 Variable Types in JavaScript

JavaScript provides **three ways** to declare variables:

| Keyword | Can Reassign? | Scope | Modern? |
|--------|--------------|-------|---------|
| `var`  | ✅ Yes | Function scope | ❌ Old |
| `let`  | ✅ Yes | Block scope | ✅ Yes |
| `const`| ❌ No | Block scope | ✅ Yes |

---

## 🔹 `var`

```js
var shipName = "The Amber";
```

### Characteristics:

✅ Can reassign  
❌ Not block scoped  
⚠️ Avoid in modern JS  

---

## 🔹 `let`

```js
let crewCount = 12;
crewCount = 14; ✅
```

### Characteristics:

✅ Can reassign  
✅ Block scoped  
✅ Preferred for changing values  

---

## 🔹 `const`

```js
const captainName = "Jack Sparrow";
captainName = "Dipesh"; ❌ ERROR
```

### Characteristics:

❌ Cannot reassign  
✅ Block scoped  
✅ Preferred for fixed values  

---

## 🎯 Scope Concept (VERY IMPORTANT)

---

### 🔥 Block Scope (`let`, `const`)

```js
if (true) {
  let secret = "Hidden";
}
console.log(secret); ❌ ERROR
```

👉 Exists only inside `{}`

---

### ⚠️ `var` is NOT Block Scoped

```js
if (true) {
  var leakyTreasure = "Gold coins";
}

console.log(leakyTreasure); ✅ Works
```

👉 `var` leaks outside block 😬

---

## ⚠️ Common Mistake (Loop Bug)

Your code:

```js
for (var i = 0; i < 10; i++) {}

for (let j = 0; i < 10; i++) {} ❌ BUG
```

❌ Using wrong variable (`i` instead of `j`)

✅ Correct:

```js
for (let j = 0; j < 10; j++) {}
```

---

## 🧠 Naming Conventions

```js
let shipSpeed = 22;      ✅ camelCase
let _privateLog = "..."; ✅ underscore allowed
let MONGODB_URI = "";    ✅ UPPER_CASE for constants
```

### Good Practices:

✔ Use meaningful names  
✔ camelCase for variables  
✔ UPPER_CASE for env/config  

---

## 🔥 `const` with Objects & Arrays

---

### ✅ Allowed (Modify properties)

```js
const treasureChest = {
  gold: 100,
};

treasureChest.gold = 150; ✅ Works
```

👉 Object is mutable

---

### ❌ Not Allowed (Reassign whole object)

```js
treasureChest = { gold: 50 }; ❌ ERROR
```

---

### ✅ Arrays behave same way

```js
const crewRoster = ["Alok", "Abhinav"];

crewRoster.push("Vraj"); ✅
crewRoster[0] = "Shubham"; ✅
```

---

### ❌ Reassignment NOT allowed

```js
crewRoster = ["Someone"]; ❌ ERROR
```

---

## ✅ Summary

- `var` → Old, avoid  
- `let` → Reassignable, block scoped  
- `const` → Fixed reference  
- Objects/arrays with const → mutable inside  

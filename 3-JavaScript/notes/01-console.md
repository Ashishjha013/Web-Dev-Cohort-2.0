# 📘 JavaScript – Console & Debugging Basics

---

## 🧠 Big Picture

### ✅ What is `console`?

The **console** is a developer tool inside the browser used to:

✔ Print values  
✔ Debug code  
✔ Show warnings & errors  
✔ Inspect data  
✔ Measure performance  

Think of it as:

🗣 **“Talking to the browser”**

---

## 🧩 Core Concepts

---

### 🔹 `console.log()`

**Purpose:** Print normal information.

```js
console.log('Hello world');
```

✅ Used for:
- Checking variable values  
- Debugging logic  
- Tracking execution flow  

---

### 🔹 Logging Variables

```js
const clue1 = 'Muddy footprint near the window';

console.log('Clue found:', clue1);
```

👉 Combines text + variable value.

---

### 🔹 `console.warn()`

**Purpose:** Shows a yellow warning message ⚠️

```js
console.warn('Warning: Something looks suspicious');
```

✅ Used when:
- Not a crash  
- But something may be wrong  

---

### 🔹 `console.error()`

**Purpose:** Shows a red error message ❌

```js
console.error('Error: Something broke');
```

✅ Used when:
- Something failed  
- Serious issue  

---

### 🔹 `console.table()`

**Purpose:** Displays arrays/objects in table format.

```js
console.table(evidenceLog);
```

💎 Perfect for:
- Arrays of objects  
- Debugging structured data  

---

### 🔹 `console.group()` / `console.groupEnd()`

**Purpose:** Organize logs into collapsible groups.

```js
console.group('Group starts');

console.log('Log 1');
console.log('Log 2');

console.groupEnd();
```

✅ Makes console output cleaner.

---

### 🔹 `console.time()` / `console.timeEnd()`

**Purpose:** Measure execution time ⏱

```js
console.time('Timer');

// heavy code here

console.timeEnd('Timer');
```

✅ Used for:
- Performance testing  
- Loops / expensive operations  

---

## 🎯 Syntax / Rules

✔ All console methods start with `console.`  
✔ Case-sensitive → `log` ≠ `Log`  
✔ Use clear labels for `time()` and `group()`  

---

## 💡 Examples

---

### ✅ Example 1 – Normal Log

```js
const name = 'Ashish';
console.log('User:', name);
```

---

### ⚠️ Example 2 – Warning

```js
console.warn('Low memory warning');
```

---

### ❌ Example 3 – Error

```js
console.error('Failed to load resource');
```

---

### 📊 Example 4 – Table View

```js
const users = [
  { name: 'Ashish', role: 'Developer' },
  { name: 'Dipesh', role: 'Tester' }
];

console.table(users);
```

---

### 📦 Example 5 – Grouped Logs

```js
console.group('Authentication Logs');

console.log('Login started');
console.log('Checking credentials');

console.groupEnd();
```

---

### ⏱ Example 6 – Time Measurement

```js
console.time('Loop Timer');

for (let i = 0; i < 1_000_000; i++) {}

console.timeEnd('Loop Timer');
```


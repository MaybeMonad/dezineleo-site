---
title: JavaScript Checklist
date: 2020-03-04
updateDate: 2020-03-12
spoiler: How much do you know about JavaScript?
type: 'topic'
thumbnail: ./js.svg
status: In Progress
---
```toc
from-heading: 2
to-heading: 2
```

## void operator

> The [`void` operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/void) evaluates the given `expression` and then returns `undefined`.

### Usage

1. `<a href="javascript:void(0)">`
2. Using `void 0` to shorten `undefined`
3. Using `void` to explicate non-value-returning(void) arrow functions and avoid memory leaking.
   ```js
   const log = x => void console.log(x);

   // In React useEffect
   useEffect(() => void setInterval(() => {}, 5000));
   ```
4. `void` can be used to force the function keyword to be treated as an expression instead of a declaration.
   ```js
    void function iife() {
      console.log("Executed!");
    }();
    // Output: "Executed"
   ```
5. More readable ??
   ```js
    const resolveFunc = val =>
      new Promise((resolve, reject) =>
        void setTimeout(() => {
          resolve(() => console.log(val))
        }, 5000))

    resolveFunc('Start')
      .then(() => resolveFunc('Continue'))
      .then(() => void resolveFunc('Oops!')) // run async, ignoring result
      .then(() => resolveFunc('Done'));
   ```
   
### Further Reading

1. [A case for using void in modern JavaScript](https://gist.github.com/slikts/dee3702357765dda3d484d8888d3029e)
2. [void operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/void)

## undefined

> [`undefined`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined) is a property of the global object. That is, it is a variable in global scope. The initial value of `undefined` is the primitive value `undefined`.

In JavaScript, `undefined` is one of the **primitive values** while it is **not** a reserved keyword. 

### Usage

1. It is not recommended to reassign values to `undefined`. 

```js
(() => {
  const undefined = true
  return console.log(undefined, typeof undefined)
})()

// output -> true, "boolean"
```

A not-assigned variable is of type `undefined`. A function without a `return` statement, or a function with an empty return statement returns `undefined`.

### Further Reading

1. [undefined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)

## Set

> The [Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set) object lets you store unique values of any type, whether primitive values or object references.

All `NaN` values in Set are equated (Even though **NaN !== NaN**).

### Usage

```js{6, 8}
let newSet = new Set()
const obj = {a: 1, b: 2}

newSet.add(1) // Set(1) {1}
newSet.add(5) // Set(2) {1, 5}
newSet.add(5) // Set(2) {1, 5}
newSet.add({a: 1, b: 2}) // Set(3) {1, 5, {…}}
newSet.add({a: 1, b: 2}) // Set(4) {1, 5, {…}, {…}}
newSet.add(obj) // Set(5) {1, 5, {…}, {…}, {…}}

newSet.has(1) // true
newSet.has(3) // false
newSet.has(obj) // true
newSet.has({a: 1, b: 2}) // false

newSet.size // 5

newSet.delete(5) // true -> Set(4) {1, {…}, {…}, {…}}
newSet.clear() // undefined -> Set(0) {}
```

### Further Reading

1. [Introduction to Sets in JavaScript](https://alligator.io/js/sets-introduction/)

## filter()

> The [`filter()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) method **creates a new array** with all elements that pass the test implemented by the provided function.

### Usage

1. Searching in array
  ```js{3, 4}
    const fruits = ['apple', 'banana', 'grapes', 'mango', 'orange']

    const filterItems = (arr, query) =>
      arr.filter(el => el.toLowerCase().indexOf(query.toLowerCase()) !== -1)

    console.log(filterItems(fruits, 'ap'))  // ['apple', 'grapes']
    console.log(filterItems(fruits, 'an'))  // ['banana', 'mango', 'orange']
  ```

2. Appending and deleting in array
  ```js
    // Appending
    let words = ['spray', 'exuberant', 'destruction', 'elite']
    const appendedWords = words.filter( (word, index, arr) => {
      arr.push('new')
      return word.length < 6
    })

    console.log(words) // ["spray", "exuberant", "destruction", "elite", "new", "new", "new", "new"]
    console.log(appendedWords) // ["spray", "elite"]

    // Deleting
    words = ['spray', 'exuberant', 'destruction', 'elite']
    const deleteWords = words.filter( (word, index, arr) => {
      arr.pop()
      return word.length < 6
    })

    console.log(words) // ["spray", "exuberant"]
    console.log(deleteWords) // ["spray"]
  ```

### Further Reading

1. [Array.prototype.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

## indexOf()

### Array.prototype.indexOf()

> The [`indexOf()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf) method returns the first index at which a given element can be found in the array, or -1 if it is not present.

#### Usage

1. Finding all the occurrences of an element

```js
  const indices = [];
  const array = ['a', 'b', 'a', 'c', 'a', 'd'];
  const element = 'a';
  let idx = array.indexOf(element);
  while (idx != -1) {
    indices.push(idx);
    idx = array.indexOf(element, idx + 1);
  }
  console.log(indices);
  // [0, 2, 4]
```

<div class="link-box">

Related JS challenge: [Find all occurrences of NaN in an array](/javascript-challenge/#find-all-occurrences-of-nan-in-an-array)

</div>

### String.prototype.indexOf()

> The [`indexOf()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf) method returns the index within the calling String object of the first occurrence of the specified value, starting the search at `fromIndex`. Returns `-1` if the value is not found.

#### Usage

```js
'hello world'.indexOf('') // returns 0
'hello world'.indexOf('', 0) // returns 0
'hello world'.indexOf('', 3) // returns 3
'hello world'.indexOf('', 13) // returns 11
'hello world'.indexOf('', 22) // returns 11

// The indexOf() method is case sensitive.
'Hello World'.indexOf('hello') // returns -1
```

## findIndex()

> The [`findIndex()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex) method returns the **index** of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating that no element passed the test.

### Usage

```bash
> [1, 2, 2, 3, 4].findIndex(n => n === 2)
> 1
```

## isNaN()

> The [`isNaN()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN) function determines whether a value is NaN or not. Note, coercion inside the isNaN function has interesting rules; you may alternatively want to use Number.isNaN(), as defined in ECMAScript 2015.

### Number.isNaN

> The [`Number.isNaN()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN) method determines whether the passed value is `NaN` and its type is `Number`. It is a more robust version of the original, global `isNaN()`.


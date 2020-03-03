---
title: JavaScript Basics
date: '2018-07-08'
spoiler: Yes, we talk about the basics.
type: 'topic'
thumbnail: ./js.svg
---

I’ve learned React for a while and found out that if you wanna have a quick start for React, you need have a minimal knowledge about ES6 firstly.

I picked some of the most basic items from ES6 to help you skyrocket right now.

Topics I gonna cover in this article.

- [What is ES6?](#what-is-es6)
- [Let and Const](#let-and-const)
- [Arrow Function](#arrow-function)
- [Default Parameters](#default-parameters)
- [Template Literals](#template-literals)
- [Destructuring Assignment](#destructuring-assignment)
- [Object Literals](#object-literals)
- [Rest Parameters and Spread Operator](#rest-parameters-and-spread-operator)
- [Promises](#promises)
- [Generators](#generators)
- [Classes](#classes)
- [Resources](#resources)

## What is ES6?
Before we jump in, I’d like to introduce you the [ECMAScript](https://en.wikipedia.org/wiki/ECMAScript).

I assume you already know JavaScript. Actually, JavaScript is an implementation of the ECMAScript standard.

>ECMAScript is a trademarked scripting-language specification standardized by Ecma International. So ES6(ES2015) is the sixth released version of ECMAScript.

As mentioned before, this article is not intended to be a complete run-through of all ES6 features. It is only the practical information to understand React. So… here we go.

## Let and Const

In ES5, **var** is used to declare a variable. However, **var** is scoped to a function, **const** and **let** are both scoped to the block. In JavaScript, a variable can be declared after it has been used. In other words, a variable can be used before it has been declared and that behavior is so-called [Hoisting](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting).

But this won't work in ES6, you will get **Uncaught ReferenceError**. You have to explicitly declare something before using it.

```javascript
// ES5

console.log(site); // Returns undefined 
var site;
site = "Dezineleo";
```

```javascript
// ES6

// Uncaught TypeError: Assignment to constant variable.
function coolSite() {
  const site = "Dezineleo";
  site = "Google";
}

// Uncaught SyntaxError: Identifier 'site' has already been declared.
function coolSite() {
  let site;
  let site = "FaceBook";
}
```

More info: [let](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let), [const](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)

## Arrow Function

Arrow function is a concise syntax for writing function expressions, without writing *function* and *return* keywords. They are syntactically similar to the related feature in C#, Java 8 and CoffeeScript.

Also, you can use arrow function with built-in functions like map, filter, and reduce.

```javascript
// ES5
var coolSite = function() {
  return 'Dezineleo';
}

// ES6
const coolSite = () => 'Dezineleo';
```

Oh, please keep in mind that **arrow functions** are automatically bound to their upper scope.

```javascript
/**
  Return NaN every second
  addView has its own this keyword context. 
*/
function SiteViews() {
  this.view = 0;

  setInterval(function addView() {
    this.view++;
    console.log(this.view);
  }, 1000);
}
const dezineleoSiteViews = new SiteViews();

/**
  Return 1,2,3... every second
*/
function SiteViews() {
  this.view = 0;

  setInterval(() => {
    this.view++;
    console.log(this.view);
  }, 1000);
}
const dezineleoSiteViews = new SiteViews();

```

More info: [Arrow Function](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

## Default Parameters

Like Ruby, Python, now you can also use default parameters in ES6.

```javascript
function coolSite(site = 'Dezineleo') {
  console.log(site); // Output 'Dezineleo'
}
```

More info: [Default Parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters)

## Template Literals

You can use multi-line strings and string interpolation features with **Template Literals**. You might heard of "Template Strings" before. That because they were called "Template Strings" in prior editions of the ES6 specification.

```javascript
// ES5
var year = '2018';
var site = 'Dezineleo';
var coolSite = 'One of the coolest sites in ' + year + ' is' + site + '.';

// ES6
const year = '2018';
const site = 'Dezineleo';
const coolSite = `One of the coolest sites in ${year} is ${site}.`;
```

More info: [Template Literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)

## Destructuring Assignment

**Desctructuring** let you extract data from *Object* and *Array* and assign the data to variable concisely.

```javascript
// Object matching

const site = {
  url: 'dezineleo.com',
  name: 'Dezineleo',
  des: 'A design & dev blog.',
}

// ES5
var name = site.name;
var des = site.des;
console.log(name + ' is ' + des);

// ES6
const { name, des } = site;
console.log(`${name} is ${des}`);

// Both output "Dezineleo is A design & dev blog"
```

It will return **Undefined** when not found.

```javascript
// Array matching

const [a, , b] = [1,2,3]; // a === 1, b === 3

// Fail-soft destructuring
const [a] = [];
a === undefined;

// Fail-soft destructuring with defaults
var [a = 1] = [];
a === 1;
```

**Destructuring** can also be applied to variables in function parameters.

```javascript
const coolSite = ({ name: 'Dezineleo' }) => console.log(name);
coolSite({name: 'Google'}); // Google
coolSite(); // Dezineleo
```

Use **alias** to make it more meaningful.

```javascript
const coolSite = ({ data: siteInfo }) => console.log(siteInfo);
```

More info: [Destructuring Assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

## Object Literals

Compared to **Destructuring**, you can use **Object Literals** to construct a new Object.

```javascript
const name = 'Dezineleo';
const des = 'A design & dev blog';

// ES5
var site1 = { name: name, des: des };

// ES6
const site1 = { name, des };

// Both are equal to { name: 'Dezineleo', des: 'A design & dev blog' }
```

Also, now you can remove *function* keyword.

```javascript
const coolSite = {
  name: 'Dezineleo',
  des: 'A design & dev blog',
  pageViews() {}, // Equals to pageViews: function() {}
}
```

More info: [MDN Grammar and types: Object literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#Object_literals)

## Rest Parameters and Spread Operator

The **Rest Parameters** are used to get the argument of an array and return a new array.

```javascript
const site = [2018, 'Dezineleo', 'is', 'a design & dev blog'];
const [year, ...rest] = site;

console.log(rest.join(' ')); // Output: "Dezineleo is a design & dev blog"
```

The **Spread Operator** has the same syntax as the rest parameters, but the spread operator takes the array itself and not just the arguments in function calls.

```javascript
const site = ['Dezineleo', 'is', 'a design & dev blog'];
const coolSite = (...params) => params;

coolSite(site); // Output: [['Dezineleo', 'is', 'a design & dev blog']]
```

If you want to use the elements of an array as arguments to a function, you may use [Apply](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply). With **Spread Operator**, you can replace it.

```javascript
// Apply
const coolSite = (name, des, author) => `Name: ${name}, Description: ${des}`;
const params = ['Dezineleo', 'A design & dev blog', 'Leo'];

coolSite.apply(null, params);

// Spread Operator
coolSite(...params);

// Both output: "Name: Dezineleo, Description: A design & dev blog"
```

More info: [Rest Parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters), [Spread Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator)

## Promises

**Promises** are a software abstraction that makes working with asynchronous operations much more pleasant.

Yeah, you might encounter **Promises** all the time. So, please promise me that you won't miss this part and then, I can tell you how to reject to be foolish.

```javascript
const site = ['Dezineleo', 'A design & dev blog', 'Leo'];
const list = [
  {name: 'Google', des: 'Search engine'},
  {name: 'Facebook', des: 'Social Network'},
];

const addSite = (name, des, author) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      list.push({ name, des });
      resolve();
    }, 2000);
  });
}

const showSite = () => {
  setTimeout(() => {
    let newList = list.map(({name}) => name);
    console.log(...newList);
  }, 2000);
}

addSite(...site).then(() => showSite());
// Output: "Google Facebook Dezineleo"
```

More info: [Promises | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise), [Promises | Google](https://developers.google.com/web/fundamentals/primers/promises)

## Generators

**Generators** are the functions that you can control [iterators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators). Which means a **function** can maintain its own state. And you should use the [function*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*) declaration.

When a generator function begins, it will initially returns an iterator object. And generator starts by calling **.next()**. And then if there is a *yield*, it'll pause and exit current function to wait **.next()** pass data back and resume current function.

```javascript
function* generateSite() {
  yield 'Dezineleo';
  yield 'is';
  yield 'a design & dev blog';
}

const coolSite = generateSite();

coolSite().next().value; // Output: 'Dezineleo'
coolSite().next().value; // Output: 'is'
coolSite().next().value; // Output: 'a design & dev blog'
```

More info: [Generator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator)

## Classes

**Classes** are the core of Object Oriented Programming(OOP). In ES6, classes are a simple sugar over the prototype-based OO pattern. Having a single convenient declarative form gives your code a nice structure and keeps it oriented. Classes support **prototype-based inheritance**, **super calls**, **instance** and **static** methods and **constructors**.

```javascript
class Site {
  constructor(name, des, url) {
    this.name = name;
    this.des = des;
    this.url = url;
  }
  siteIntro() {
    console.log(`${this.name} is ${this.des}`);
  }
}

const dezineleo = new Site('Dezineleo', 'a design & dev blog');
dezineleo.siteIntro(); // Output: 'Dezineleo is a design & dev blog'
```

More info: [Classes](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Classes)

## Resources
1. [JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
2. [What is a Promise?](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261)
3. [Understanding Generators](https://medium.com/@hidace/javascript-es6-generators-part-i-understanding-generators-93dea22bf1b)
4. [Generators in JavaScript](https://codeburst.io/generators-in-javascript-1a7f9f884439)
5. [Map, Filter, Reduce](https://medium.com/jsguru/javascript-functional-programming-map-filter-and-reduce-846ff9ba492d)
6. [How reduce method works](https://medium.freecodecamp.org/reduce-f47a7da511a9)
7. [Getters and Setters](https://www.hongkiat.com/blog/getters-setters-javascript/)
8. [Decorators | SitePoint](https://www.sitepoint.com/javascript-decorators-what-they-are/)
9. [Decorators | Medium](https://medium.com/jsguru/javascript-decorators-dac7d4b6bba3)


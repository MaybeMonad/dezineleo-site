---
path: "/posts/2018/07/es6-knowledge-map-for-react-beginner"
date: 2018-07-08
title: "ES6 knowledge map for React Beginner"
author: "Leo"
thumbnail: "./thumbnail.jpg"
published: true
categories: ['Coding', 'Frontend']
tags: ['ES6', 'React', 'ECMAScript']
excerpt: "In this post I’ll give you a full list to basic items of ES6 to start your React-learning-journey."
---

I’ve learned React for a while and found out that if you wanna have a quick start for React, you need have a minimal knowledge about ES6 firstly.

I picked some of the most basic items from ES6 to help you skyrocket right now.

Topics I’m gonna cover in this article.

- [What is ES6?](#what-is-es6)
- [Let and Const](#let-and-const)
- [Arrow function](#arrow-function)
- [Default Parameters](#default-parameters)
- [Template Literals](#template-literals)
- [Resources](#resources)

## What is ES6?
Before we jump into the sea, I’d like to introduce you the [ECMAScript](https://en.wikipedia.org/wiki/ECMAScript).

All right, I assume you already know JavaScript. JavaScript is an implementation of the ECMAScript standard and ECMAScript is a trademarked scripting-language specification standardized by Ecma International. So ES6(ES2015) is the sixth released version of ECMAScript.

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

## Arrow function

Arrow function is a concise syntax for writing function expressions, without writing *function* and *return* keywords. They are syntactically similar to the related feature in C#, Java 8 and CoffeeScript.

Also, you can use Arrow function with built-in functions like map, filter, and reduce.

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
// Return Dezineleo
function coolSite(site = 'Dezineleo') {
  console.log(site);
}
```

More info: [Default Parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters)

## Template Literals

You can use multi-line strings and string interpolation features with **Template Literals**. You might heard of 'Template String' before. That because they were called "template strings" in prior editions of the ES6 specification.

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

## Resources
1. [JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
2. 




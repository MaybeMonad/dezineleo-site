---
path: "/posts/2018/08/keyword-new-in-javascript"
date: 2018-08-10
title: "Keyword 'new' in JavaScript"
author: "Leo"
thumbnail: "./thumbnail.jpg"
published: true
type: "post"
categories: ['Dev', 'Beginner Series']
tags: ['JavaScript', 'New', 'Object']
excerpt: "In this post I'll show you what does the new keyword do."
---

In the [previous article](https://dezineleo.com/posts/2018/08/prototype-in-javascript), we've used keyword `new` to create new functions when we talked about the **prototype** in JavaScript. Today I gonna show you what's inside of keyword `new`.

Here is a quick preview of the topics.

- [What is the keyword "new" in JavaScript?](#what-is-the-keyword-%22new%22-in-javascript)
- [What does the "new" do?](#what-does-the-%22new%22-do)
- [Normal function call vs. new keyword](#normal-function-call-vs-new-keyword)
- [Beware of references](#beware-of-references)
- [Conclusion](#conclusion)
- [Resources](#resources)

## What is the keyword "new" in JavaScript?

As we all know, Object-Oriented Programming (OOP) is a programming paradigm based on the concept of "objects" which means data and functions (attributes and methods) are bundled within an object.

Not like Java or PHP, the keyword `new` in JavaScript is just a [syntactic sugar](http://en.wikipedia.org/wiki/Syntactic_sugar).

## What does the "new" do?

The `new` operator is used to create an instance of an object which has a constructor function. And it will do four things when we use the `new` in JavaScript.

1. It creates a new object.
2. It sets this new object's `[[prototype]]` property to be the **constructor function**'s prototype object.
3. It binds `this` to this object and executes the constructor function.
4. It returns `this` or this object if there is no return statement in the function body.

## Normal function call vs. new keyword

For instance, let's create some functions to demostrate the whole process.

```javascript
function siteFn(name, url) {
  const siteObj = {};

  siteObj.name = name;
  siteObj.url = url;

  return siteObj;
}

const dezineleo = siteFn('Dezineleo', 'dezineleo.com');
// ouput -> {name: "Dezineleo", url: "dezineleo.com"}
```

As you can see above, we create an object, add some properties to it and return it at the end. Then, let's create a new function by using `new` to do the same thing.

```javascript
function SiteConstructor(name, url) {
  this.name = name;
  this.url = url;
}

const dezineleo = new SiteConstructor('Dezineleo', 'dezineleo.com');
// output -> SiteConstructor {name: "Dezineleo", url: "dezineleo.com"}
```

Now, we use less code to make the same result by using the prototype chain.

Let's break it down by following the steps mentioned before.

```javascript
function SiteConstructor(name, url) {
  // 1. It creates a new object.
  // this = {}; 

  // 2. It sets this new object's [[prototype]] property 
  // to be the constructor function's prototype object.
  // this.__proto__ = PersonConstructor.prototype;

  // 3. It makes the `this` variable point to the newly created object and executes the constructor function.
  
  this.name = name;
  this.url = url;

  // 4. Returns this if there is no return statement in the function body.
  // return this;
}
```

What if we call a **non-constructor** with `new` ?

```javascript
let dezineleo = new siteFn('Dezineleo', 'dezineleo.com');
// ouput -> {name: "Dezineleo", url: "dezineleo.com"}
```

Same results as before. The main difference is it returns the `siteObj` instead of `this`.

## Beware of references

Since the newly created object's `__protp__` is inherited from constructor function' prototype, you should be cautious about the properties.

```javascript
function SiteConstructor(name, url) {
  this.name = name;
  this.url = url;
  this.views = [];
  this.addViews = views => {
    this.views.push(views);
  }
}

const dezineleo = new SiteConstructor('Dezineleo', 'dezineleo.com');
dezineleo.__proto__.getUserName = () => console.log('haha');
console.log(dezineleo.getUserName());
// output -> haha
const google = new SiteConstructor('Google', 'google.com');
console.log(google.getUserName());
// output -> haha
```

## Conclusion

The `new` operator is relatively easy to use, but you need to understand what is going on inside.

To recap, please remeber the [four things](#what-does-the-%22new%22-do) happens when we call `new` operator.

## Resources
1. [Prototype in JavaScript](https://dezineleo.com/posts/2018/08/prototype-in-javascript)
2. [New Operator | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new)
3. [Javascript’s “new” Keyword Explained as Simply as Possible](https://codeburst.io/javascripts-new-keyword-explained-as-simply-as-possible-fec0d87b2741)




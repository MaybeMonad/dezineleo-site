---
title: Keyword "this" in JavaScript
date: '2018-08-26'
spoiler: We talk about what does the *this* keyword do.
type: 'topic'
---

Previously, we’ve talked about **prototype** and **new** in JavaScript, you may noticed we’ve encountered a lot of  `this`. So, today I’ll show you what  `this` is.

Here is a quick preview of the topics.

- [What is “this” ?](#what-is-this)
- [Global context vs. function context](#global-context-vs-function-context)
- [Immediately invoked function expression (IIFE)](#immediately-invoked-function-expression-iife)
- [Strict mode](#strict-mode)
- [Keyword ’new’](#keyword-new)
- [Bind vs. Apply vs. Call](#bind-vs-apply-vs-call)
- [Arrow function](#arrow-function)
- [setTimeout & setInterval](#settimeout--setinterval)
- [Classes](#classes)
- [Conclusion](#conclusion)
- [Resources](#resources)

## What is “this” ?
According to [W3School](https://www.w3schools.com/js/js_this.asp),  `this`  is the “owner” of a function when it  is in function context. Actually, in most cases, the value of `this` is determined by how a function is invoked.

```javascript
const site = {
	name: "Dezineleo",
  url: "https://dezineleo.com",
  getInfo: function () {
		console.log(`The URL of ${this.name} is ${this.url}.`);
		console.log(`The URL of ${site.name} is ${site.url}.`);
		// both ouput -> The URL of Dezineleo is https://dezineleo.com.
	},
	getPosts: () => {
		console.log(`No posts in ${this.name}.`);
		// output -> No posts in .
		console.log(`No posts in ${site.name}.`);
		// output -> No posts in Dezineleo.
	}
}
```

You may notice the different outputs when we invoke `getPosts()` and that is caused by the **arrow function** which we will talk later in this article.

## Global context vs. function context
In the global execution context (outside of any function), `this` refers to the **global object** whether in *strict mode* or not. Correspond to **global object** in NodeJS environment, `this` refers to 
**Window object** in browsers.

```javascript
function normalFn () {
	console.log(this);
}
const arrowFn = () => {
	console.log(this);
}

normalFn(); // output -> Window {…}
arrowFn(); // output -> Window {…}
```


## Immediately invoked function expression (IIFE)
```javascript
(function(){
	console.log(this === window);
})();
// output -> true
```

## Strict mode
> If **strict mode** is enabled for any function then the value of “this” will be *undefined*.

```javascript
function normalFn () {
	'use strict';
	console.log(this);
}
const arrowFn = () => {
	'use strict';
	console.log(this);
}

normalFn(); // output -> undefined
arrowFn(); // output -> Window {…}
```

## Keyword ’new’
In previous article [Keyword ‘new’ in JavaScript | The Dezineleo](https://dezineleo.com/posts/2018/08/keword-new-in-javascript),  we’ve used keyword `new` to create new instance.

```javascript
function SiteConstructor(name, url) {
	this.name = name;
	this.url = url;
	this.showSiteInfo = () => {
		console.log(`The URL of ${this.name} is ${this.url}.`);
		console.log(`The URL of ${name} is ${url}.`);
		console.log(this);
	}
	this.showSiteInfoFn = function () {
		console.log(`The URL of ${this.name} is ${this.url}.`);
		console.log(`The URL of ${name} is ${url}.`);
		console.log(this);
	}
}

const dezineleo = new SiteConstructor('Dezineleo', 'dezineleo.com');

dezineleo.showSiteInfo();
// output -> The URL of Dezineleo is dezineleo.com.
// output -> The URL of Dezineleo is dezineleo.com.
// ouput -> SiteConstructor {...}
deizneleo.showSiteInfoFn();
// output -> The URL of Dezineleo is dezineleo.com.
// output -> The URL of Dezineleo is dezineleo.com.
// ouput -> SiteConstructor {...}
```

As you can see, `this` refers to new instance `SiteConstructor`.

## Bind vs. Apply vs. Call
As we all know,  a **function** is also an object in JavaScript and every function has [call()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call), [apply()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply) and [bind()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) methods. These methods can be used to set custom value of “this” to the execution context of function.

```javascript
function SiteConstructor(name, url) {
	this.name = name;
	this.url = url;
	this.showSiteInfo = () => {
		console.log(`The URL of ${this.name} is ${this.url}.`);
		console.log(`The URL of ${name} is ${url}.`);
		console.log(this);
	}
	this.showSiteInfoFn = function () {
		console.log(`The URL of ${this.name} is ${this.url}.`);
		console.log(`The URL of ${name} is ${url}.`);
		console.log(this);
	}
}

const dezineleo = new SiteConstructor('Dezineleo', 'https://dezineleo.com');
const google = new SiteConstructor('Google', 'https://google.com');

dezineleo.showSiteInfo.call(google);
// output -> The URL of Dezineleo is https://dezineleo.com.
// output -> The URL of Dezineleo is https://dezineleo.com.
// output -> SiteConstructor { name: "Dezineleo", ... }
dezineleo.showSiteInfoFn.call(google);
// output -> The URL of Google is https://google.com.
// output -> The URL of Dezineleo is https://dezineleo.com.
// output -> SiteConstructor { name: "Google", ... }

dezineleo.showSiteInfo.apply(google); // same output as call
dezineleo.showSiteInfoFn.apply(google); // same output as call

dezineleo.showSiteInfo.bind(google)(); // same output as above
dezineleo.showSiteInfoFn.bind(google)(); // same output as above
```

We can find the reference of  `this`  has been changed. However, the arrow function still returns `dezineleo` instance.

## Arrow function
All right, we’ve countered a number of **arrow function** which might confusing. Actually, it’s not that difficult to understand the process. Let me explain it to you.

When we use  `this`  in an arrow function, the `this` refers to its enclosing execution context which means it keeps on referring to the same object it is referring, outside the function. And the arrow function captures the `this` value permanently to prevent `apply()` or `call()` from changing it later on.

```javascript
function fn() {
  return () => {
    return () => {
      console.log(this);
    };
  };
}
console.log(fn()()());
// output -> 
```

In this case, the first outer function is `fn()` and the `this` refers to `Window` object by default.

## setTimeout & setInterval
```javascript
const countViews = {
	views: 0,
  addViews() {
		setInterval(function() {
			console.log(this);
			console.log(++this.views);
		}, 1000);
	},
}

countViews.addViews();
// output -> Window {...}
// output -> NaN
// ...
```

Through the outputs in the above example, the `this` refers to `Window` object, not as expected. So how can we solve that? The simplest way is to use **arrow function**.

```javascript
const countViews = {
	views: 0,
  addViews() {
		setInterval(() => {
			console.log(this);
			console.log(++this.views);
		}, 1000);
	},
}

countViews.addViews();
// output -> {views: 0, addViews: ƒ}
// output -> 1
// ...
```

Also, you can change the reference of `this`.

```javascript
const countViews = {
	views: 0,
	addViews() {
		const self = this;
		setInterval(function() {
			console.log(self);
			console.log(++self.views);			
		}, 1000);
	},
}

countViews.addViews();
// output -> {views: 0, addViews: ƒ}
// output -> 1
// ...
```

## Classes
Last but not least, let’s see what `this` behaves in **Classes**.

```javascript
class Site {
	constructor(name, url) {
		this.name = name;
		this.url = url;
	}
	showSiteInfo() {
		console.log(this);
		console.log(`The URL of ${this.name} is ${this.url}.`);
	}
}

const dezineleo = new Site('Dezineleo', 'dezineleo.com');
dezineleo.showSiteInfo();

const showFn = dezineleo.showSiteInfo;
showFn();
// output -> Site {...}
// output -> The URL of Dezineleo is dezineleo.com.
// output -> undefined
// output -> Uncaught TypeError: Cannot read property 'name' of undefined...
```

In this case, when we invoke `showFn()`, the `this` refers to *undefined*. That’s because the implicit **Strict Mode** in **Classes**. We can use `bind()` to solve it.

```javascript
const showFn = dezineleo.showSiteInfo.bind(dezineleo);
showFn();
// output -> Site {...}
// output -> The URL of Dezineleo is dezineleo.com.
```

## Conclusion
Today, we’ve talked about the references of  `this`  in eight different situations. Just keep in mind, `this` is all about *reference*. Hope you enjoy this post and understand the `this`.

## Resources
1. [Understand JavaScript’s “this” With Clarity, and Master It | JavaScript Is Sexy](http://javascriptissexy.com/understand-javascripts-this-with-clarity-and-master-it/)
2. [What is “this” in JavaScript? – Bits and Pieces](https://blog.bitsrc.io/what-is-this-in-javascript-3b03480514a7)
3. [this - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)
4. [Understanding the “this” Keyword in JavaScript – Quick Code – Medium](https://medium.com/quick-code/understanding-the-this-keyword-in-javascript-cb76d4c7c5e8)
5. [Understanding the “this” keyword in JavaScript](https://toddmotto.com/understanding-the-this-keyword-in-javascript/)

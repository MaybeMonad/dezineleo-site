---
title: JavaScript Closures
date: '2018-09-06'
spoiler: Yes, we talk about the closures.
---

The **closure** is another fundamental JavaScript concept that you should know inside-out. This post will be dedicated to the nuts and bolts of how and why closures work. Let’s get started!

- [What is a closure ?](#what-is-a-closure)
- [What is the Execution Context?](#what-is-the-execution-context)
- [Closures are exposed nested functions](#closures-are-exposed-nested-functions)
- [Closures in Loops](#closures-in-loops)
- [Conclusion](#conclusion)
- [Resources](#resources)

## What is a closure ?
> A closure is the combination of a **function** and the **lexical environment** within which that function was declared. 

Actually, before we talk about the closures, I’d like to show you some basics  about **Execution Context** to help you have a better understanding on that later.

## What is the Execution Context?
When code is running in JavaScript, the environment in which it is executed is very important. **Execution Context** is an abstract concept / environment used by the ECMAScript specification to track the runtime evaluation of code. Since JavaScript is “single threaded”, there can only be one execution context  running. 

Typically, browsers maintain a **Execution Context** by using a “stack.” A stack is a Last In First Out (LIFO) data structure, meaning the last thing that you pushed onto the stack is the first thing that gets popped off it.

let’s take a look at the example below.

```javascript
// Global Context Starts
const globalVal = 'This is Global Context.';

function site () {
	// Execution Context #1 Starts
	const name = 'Dezineleo';
	const url = 'https://dezineleo.com';
	function getInfo () {
		// Execution Context #2 Starts
		console.log(`The URL of ${name} is ${url}.`);
		console.log(globalVal);
		// Execution Context #2 Ends
	};
	function getPosts () {
		// Execution Context #3 Starts
		console.log(`No posts in ${name}.`);
		console.log(globalVal);
		// Execution Context #3 Ends
	};
	getInfo();
	getPosts();
	// Execution Context #1 Ends
}

site();

// output -> The URL of Dezineleo is https://dezineleo.com.
// output -> This is Global Context.
// output -> No posts in Dezineleo.
// output -> This is Global Context.
```

As you can see, the global context can be accessed by any other context in your program. Since each function call will create a new context, a function can access a variable declared outside its current function context, but an outside context cannot access the variable / functions declared inside. More info about [Lexical Scope](https://github.com/getify/You-Dont-Know-JS/blob/master/scope%20%26%20closures/ch2.md)

The JavaScript interpreter in a browser is implemented as a single thread. Which means only 1 thing can ever happen at one time in the browser, with other actions or events being queued in what is called the `Execution Stack`. The `Global Context` is always at the bottom of the stack. 

There are 5 key points to the `execution stack` :

+ Single threaded.
+ Synchronous execution.
+ 1 Global context.
+ Infinite function contexts.
+ Each function call creates a new execution context, even a call to itself.

There are 2 stages to an  `execution context` :

1. **Creation Stage** [when the function is called, but before it executes any code inside]:
	+ Create the **Scope Chain**.
	+ Create variable, functions and arguments.
	+ Determine the value of `this`.
2. Activation / Code Execution Stage:
	+ Assign values, references to functions and interpret / execute code.

```javascript
function site(name, url) {
	const sayHello = 'Hello';
	const siteInfo = function getInfo() {};
	function getPosts() {};
}

site('Dezineleo', 'https://dezineleo.com');

// A pseudo-overview of the Creation Stage
siteExecutionContext = {
	scopeChain: { ... },
	variableObject: {
		arguments: {
			0: 'Dezineleo',
			1: 'https://dezineleo.com',
			length: 2
		},
		name: 'Dezineleo',
		url: 'https://dezineleo.com',
		getPosts: pointer to function getPosts(),
		sayHello: undefined,
		siteInfo: undefined
	},
	this: { ... }
}

// A pseudo-overview of the Execution Stage
siteExecutionContext = {
	scopeChain: { ... },
	variableObject: {
		arguments: {
			0: 'Dezineleo',
			1: 'https://dezineleo.com',
			length: 2
		},
		name: 'Dezineleo',
		url: 'https://dezineleo.com',
		getPosts: pointer to function getPosts(),
		sayHello: 'Dezineleo',
		siteInfo: pointer to function getInfo()
	},
	this: { ... }
}
```

We can also use this term to explain how the `hosting`  works. Here’s a simple example to show you the `hoisting` in JavaScript. Remember that you can only use `var` to declare variables or it’ll throw an error.

```javascript
(function() {
	console.log(typeof site);
	console.log(typeof fn);

	var site = 'Dezineleo';
	var fn = function() {
		return 'Function';
	};

	console.log(typeof fn);

	function site() {
		return 'Dezineleo';
	}
}());​

// output -> function
// output -> undefined
// output -> function
```

As you can see above, in `creation stage` , the variables have been declared. But before that, `site` has been created on the `activation object` and because of that, the second declaration to `site` is ignored by JavaScript interpreter. Although the `fn` is assigned to a function, it’s initialized with `undefined` in `creation stage` .

```javascript
ExecutionContext = {
	scopeChain: { ... },
	variableObject: {
		arguments: {},
		site: pointer to function site(),
		fn: undefined
	},
	this: { ... }
}
```

## Closures are exposed nested functions
Closures are exposed nested functions which can access the scope of their parent even if we call them from the outside.

Let’s take a look at the example below.

```javascript
function siteConstructor (name, url) {
	let views = 0;

	return {
		getViews () {
			console.log(views);
		},
		addViews () {
			console.log(++views);
		},
		delViews () {
			console.log(--views);
		},
	}
}

const dezineleo = siteConstructor('Dezineleo', 'dezineleo.com');
const google = siteConstructor('Google', 'google.com');

dezineleo.getViews();
dezineleo.addViews();
dezineleo.addViews();
dezineleo.delViews();
dezineleo.getViews();
// output -> 0, 1, 2, 1, 1

google.getViews();
google.addViews();
google.delViews();
// output -> 0, 1, 0
```

Since the functions like `getViews()`  retrieve variable `views`, the calling context which is `siteConstructor` will not be destroyed. But the `dezineleo` and `google` are two different closures, they respectively retrieve variable `views`.

## Closures in Loops
```javascript
function counter() {
	for(var i = 0; i < 5; i++) {
		setTimeout(function() {
			console.log(i);
		});
	}
}
counter();
// output -> 5, 5, 5, 5, 5
```

The output is not expected as `0,1,2,3,4`. Here are the solutions.

```javascript
// 1. Just use let instead of var
for(let i = 0; i < 5; i++) {
	setTimeout(function() {
		console.log(i);
	});
}
// output -> 0, 1, 2, 3, 4

// 2. Use IIFE
for(let i = 0; i < 5; i++) {
	setTimeout((function(j) {
		console.log(j);
	})(i));
}
// output -> 0, 1, 2, 3, 4

// 3. Use Closure
const counts = function (i) {
	setTimeout(function() {
		console.log(i);
	});
}

for(let i = 0; i < 5; i++) {
	counts(i);
}
// output -> 0, 1, 2, 3, 4
```

## Conclusion
As a self-taught web developer, I was stunned when I was asked by an interviewer to explain what a closure is. No matter how many apps or websites you’ve already built, you should never say you have conquered JavaScript. And that failed interview has taught me to go through all the pros and cons in depth.

## Resources
1. [What is the Execution Context & Stack in JavaScript? by David Shariff](http://davidshariff.com/blog/what-is-the-execution-context-in-javascript/)
2. [I never understood JavaScript closures – DailyJS – Medium](https://medium.com/dailyjs/i-never-understood-javascript-closures-9663703368e8)
3. [Closures - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
4. [Still, I wanna talk about the Closures in JavaScript](https://zhuanlan.zhihu.com/p/31864924)
5. [javascript - let keyword in the for loop - Stack Overflow](https://stackoverflow.com/questions/16473350/let-keyword-in-the-for-loop)
6. [Understanding JavaScript: Closures – Hacker Noon](https://hackernoon.com/understanding-javascript-closures-4188edf5ea1b)
7. [Closure (computer programming) - Wikipedia](https://en.wikipedia.org/wiki/Closure_%28computer_programming%29)
8. [Let’s Learn JavaScript Closures – freeCodeCamp.org](https://medium.freecodecamp.org/lets-learn-javascript-closures-66feb44f6a44)
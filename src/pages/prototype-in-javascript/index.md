---
title: Prototype in JavaScript
date: '2018-08-05'
spoiler: Prototype is a fundamental concept that every JavaScript developer must understand.
type: 'topic'
thumbnail: ./js.svg
---

**JavaScript Prototype** is …

Yeah, I know it is not that easy to understand, but as a JavaScript coder, you cannot ignore it. So let’s get this sh*t done together.

Here is a quick preview of the topics.

- [What is JavaScript Prototype?](#what-is-javascript-prototype)
- [[[Prototype]] & __proto__](#prototype--proto)
- [Prototype](#prototype)
- [Prototype Attribute vs Prototype Property](#prototype-attribute-vs-prototype-property)
- [Constructor Function](#constructor-function)
- [Prototype Inheritance & Prototype Chain](#prototype-inheritance--prototype-chain)
- [Prototype vs Class](#prototype-vs-class)
- [Function.__proto__ === Function.prototype](#functionproto--functionprototype)
- [Conclusion](#conclusion)
- [Resources](#resources)

## What is JavaScript Prototype?

Before talking about JavaScript Prototype, you ought to understand **JavaScript Object** firstly.

Here is quick through over JavaScript Object.

1. Object is one of the [seven data types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures).
2. Not like the other six primitives, object is mutable.
3. Object is stored as a series of name-value pairs and each item in the list is called a property (functions are called methods).

For more info, you can check this great article: [JavaScript Objects in Detail](http://javascriptissexy.com/javascript-objects-in-detail/)

As we all know now, object is the most often used and most fundamental data type in JavaScript. And a prototype is also an object as property of any function. So we can say JavaScript is a prototype-base language which means object properties and methods can shared through generalized objects that have the ability to be cloned and extended. This is known as **prototypical inheritance** and differs from **class inheritance**. Later I'll talk about the difference between prototype and class.

## [[Prototype]] & __proto__

Every object in JavaScript has an internal property called `[[Prototype]]`. We can demonstrate this by creating a new empty object. There're two ways to construct an object in JavaScript:

+ **Object literal** - by using curly brackets: `{}`
+ **Object constructor** - by using the `new` keyword

```javascript
// I'm used to use the Object literal
let apple = {};
let orange = new Object();
```

Please keep in mind that the `[[Prototype]]` is an internal property which means it cannot be accessed directly in code. We can use the `Object.getPrototypeOf()` method or the `.__proto__` property. However, the `.__proto__` is a legacy feature, it cannot be used in production code. Though you may find it in browsers like Chrome and FireFox, it is not present in all modern browsers.

```javascript
// output: {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, …}
Object.getPrototypeOf(apple);
site1.__proto__;
```

## Prototype

What if we create a function?

```javascript
function Human(name, age) {
  this.name = name;
  this.age = age;
  this.sayHello = function() {
    return `Hi, I'm ${name}`;
  }
}
```

As you can see, this function is a little bit different with regular function as the first letter is capitalized. It'll perform as a regular function does until it is called on by an instance with the `new` keyword. In JavaScript, we capitalize the first letter of a **constructor function** by convention.

To recap, when function `Human` is created, JavaScript engine adds a *prototype* property to `Human`. This *prototype* property is an object which has a *constructor* property by default and the *constructor* property points back to the function `Human`. 

We can access the prototype property by using `Human.prototype`.

```javascript
Human === Human.prototype.constructor // true
```

## Prototype Attribute vs Prototype Property

According to [JavaScript Is Sexy](http://javascriptissexy.com/javascript-prototype-in-plain-detailed-language/), there're two different interrelated concepts with **prototype** in JavaScript. They are prototype attribute and prototype property. But don't confuse them with the attributes in HTML. For more info, checkout [JS: attribute vs. property](http://lucybain.com/blog/2014/attribute-vs-property/).

## Constructor Function

Constructor functions are used to construct new objects. For example, let's add a new *human*.

```javascript
const leo = new Human('Leo', 26);
console.log(leo); // Human {name: "Leo", age: 26, sayHello: ƒ}
```

As we can see, a new object has been created with the new properties set as expected.

```javascript
Object.getPrototypeOf(leo); // constructor: ƒ Human(name, age)
leo.sayHello(); // "Hi, I'm Leo"
```

What if we add a new method to `Human` ?

```javascript
Human.prototype.sayGoodbye = function () {
  return `${this.name} just said goodbye to you.`;
}

leo.sayGoodbye(); // "Leo just said goodbye to you."
```

As you can see, `sayGoodbye()` is in the prototype of `Human`, and `leo` is an instance of `Human`, the method is also available to `leo`. And that is what I gonna talk about, the **Prototype Inheritance**.

## Prototype Inheritance & Prototype Chain

Since people are different, we should not put all the characters into `Human` constructor. We can use the `call()` method to copy over properties from one constructor into another constructor. Let's create a `Developer` constructor.

```javascript
function Developer(name, age, device) {
  // Chain constructor with call
  Human.call(this, name, age);
  this.device = device;
}

Developer.prototype.developing = function() {
  return `Currently, ${this.name} is using ${this.device} to do the coding.`;
}

const jack = new Developer('Jack', 24, 'MacBook Pro');
// "Currently, Jack is using MacBook Pro to do the coding."
```

That works pretty well, but what if want to use methods further down the prototype chain?

```javascript
jack.sayGoodbye();
// Uncaught TypeError: jack.sayGoodbye is not a function
```

Prototype properties and methods are not automatically linked when you use `call()` to chain constructors. Here we can use `Object.create()` to link the prototypes.

```javascript
Developer.prototype = Object.create(Human.prototype);

const mike = new Develoer('Mike', 25, 'Surface Laptop');
mike.sayGoodbye(); // "Mike just said goodbye to you."
```

## Prototype vs Class

>JavaScript classes, introduced in ECMAScript 2015, are primarily syntactical sugar over JavaScript’s existing prototype-based inheritance. The class syntax does not introduce a new object-oriented inheritance model to JavaScript.

In **class inheritance**, instances inherit from a blueprint (the class), and create sub-class relationships. In other words, you can’t use the class like you would use an instance. You can’t invoke instance methods on a class definition itself. You must first create an instance and then invoke methods on that instance.

In **prototypal inheritance**, instances inherit from other instances. Using delegate prototypes (setting the prototype of one instance to refer to an examplar object), it’s literally **Objects Linking to Other Objects**, or **OLOO**, as Kyle Simpson calls it. Using concatenative inheritance, you just copy properties from an exemplar object to a new instance.

## Function.__proto__ === Function.prototype

This might confuse you, let me explain why it is valid. Firstly, JavaScript engine create `Object.prototype` and then create the `Function.prototype`. Both of them are connected with `__proto__`. And because of this mechanism, functions created by `Function.prototype` will have no prototype property.

```javascript
let func = Object.create(Function.prototype);
console.log(func.prototype); // undefined
```

All the other constructor functions can find the final `Function.prototype` through the prototype chain. and `function Function()` is just a normal function indeed.

## Conclusion

```javascript
Function.__proto__ === Function.prototype
Function.__proto__.__proto__ === Object.prototype
Function.prototype.__proto__ === Object.prototype
```

## Resources
1. [JavaScript Prototype in Plain Language](http://javascriptissexy.com/javascript-prototype-in-plain-detailed-language/)
2. [Object.prototype | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype)
3. [You Don’t Know JS: this & Object Prototypes](https://github.com/getify/You-Dont-Know-JS/tree/master/this%20%26%20object%20prototypes)
4. [Understanding Prototypes and Inheritance in JavaScript](https://www.digitalocean.com/community/tutorials/understanding-prototypes-and-inheritance-in-javascript)
5. [JS: attribute vs. property](http://lucybain.com/blog/2014/attribute-vs-property/)
6. [Understanding Objects in JavaScript](https://www.digitalocean.com/community/tutorials/understanding-objects-in-javascript)
7. [Javascript: Prototype vs Class](https://medium.com/@parsyval/javascript-prototype-vs-class-a7015d5473b)
8. [The difficulties of JavaScript prototype](https://github.com/KieSun/Blog/issues/2)
9. [ES6 Basics](/es6-basics/)

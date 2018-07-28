---
path: "/posts/2018/07/regular-expression-in-javascript"
date: 2018-07-15
title: "Regular expression in JavaScript"
author: "Leo"
thumbnail: "./thumbnail.jpg"
published: true
type: "post"
categories: ['Coding', 'Frontend']
tags: ['Regular Expression', 'JavaScript', 'RegExp']
excerpt: "In this post I’ll tell you how to use regular expression in JavaScript."
---

```javascript
// Match Email address

/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/
```

Have you ever seen this kind of expression before? When I first saw that, WTF is this cryptic syntax. I was scared and refused to touch it. However, When I finally decided to make the plunge and learn what **RegExp** was all about, I was surprised at how simple the basic concepts were to learn.

Here is a quick preview of the topics.
- [What are Regular Expressions?](#what-are-regular-expressions)
- [Write your first RegExp](#write-your-first-regexp)
- [Challenges](#challenges)
  - [Challenge 01 - Characters only](#challenge-01---characters-only)
  - [Challenge 02 - Numbers only](#challenge-02---numbers-only)
  - [Challenge 03 - Six alphanumeric characters only](#challenge-03---six-alphanumeric-characters-only)
  - [Challenge 04 - Match phone number](#challenge-04---match-phone-number)
  - [Challenge 05 - Match Email address & date format](#challenge-05---match-email-address--date-format)
  - [Challenge 06 - Test root URL & get URL parameters](#challenge-06---test-root-url--get-url-parameters)
- [Conclusion](#conclusion)
- [Resources](#resources)

## What are Regular Expressions?
**Regular expressions** are patterns used to match character combinations **in strings**. Properly understanding regular expressions will make you a better coder.

> In JavaScript, regular expressions are also objects.

## Write your first RegExp

In addition to Chrome console, you can also test the regex code in [Regex101](https://regex101.com/).

```javascript
// Set up the target string
// Now if we want to match 'dezineleo', you can use two different expression
const targetStr = 'Leo is nobody and his blog dezineleo.com is not cool.';
const reg1 = new RegExp('dezineleo', 'g'); // flags 'g' is not a must
const reg2 = /dezineleo/;

targetStr.match(reg1); // output is an array
reg2.test(targetStr); // output is true
```

As you can see, we've used *match* method to output an array. We can also use *test* to return a boolean.

## Challenges

Now let's do some challenges.

### Challenge 01 - Characters only

```javascript
// username should be characters only

const username1 = 'dezineleo';
const username2 = 'dezineleo123';
const reg1 = new RegExp(/^[a-zA-Z]+$/, 'g');
const reg2 = /^[a-zA-Z]+$/g;

reg1.test(username1); // output is true
reg2.test(username2); // output is false
```

Don't worry, I'll explain the code piece by piece. As you can see above, there're some special characters like `^[a-zA-Z]+$` :

```javascript
'^…$' -	Starts and ends
'+'	- One or more repetitions
'[a-zA-z]' - Match all characters
```

You can check the whole list of **special characters** in [Using Special Characters | MDN](http://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#Using_special_characters).

Note: if you run the code twice, you'll find different output. That's because when you're using */g*, the regex object will save state between calls (since you should be using it to match over multiple calls). It matches once, but subsequent calls start from after the original match.

### Challenge 02 - Numbers only

```javascript
// password should be numbers only
// \d - any digit
// [0-9] - numbers 0 to 9

const pwd1 = '12345678';
const pwd2 = 'dezineleo123';
const reg1 = new RegExp(/^\d+$/, 'g');
const reg2 = /^[0-9]+$/g;

reg1.test(pwd1); // output is true
reg2.test(pwd2); // output is false
```

As you can see above, I added a *+* sign after *\d*. That indicates the digit number may be repeated more than once.

### Challenge 03 - Six alphanumeric characters only

Use braces to indicate that a pattern should occur a precise number of times.

```javascript
// password should be alphanumeric character
// {n,m} - n to m repetition
// \w - any alphanumeric character

const pwd1 = 'leo123';
const pwd2 = 'dezineleo123';
const reg1 = new RegExp(/^\w{6}$/, 'g');
const reg2 = /^\w{6}$/g;

reg1.test(pwd1); // output is true
reg2.test(pwd2); // output is false
```

Step a little bit further.

```javascript
// password length
// min 6
// max 9

const pwd1 = 'leo123';
const pwd2 = 'dezineleo123';
const reg1 = new RegExp(/^\w{6,9}$/, 'g');
const reg2 = /^\w{6,9}$/g;

reg1.test(pwd1); // output is true
reg2.test(pwd2); // output is false
```

### Challenge 04 - Match phone number

```javascript
// phone number match rules
// length is 11
// starts by number 1
// second number should be 3, 5, 7 or 8
// (…) - capture group
// (a|b|c) - matches a, b or c

const phoneNum1 = '110';
const phoneNum2 = '138666677779';
const phoneNum3 = '15656781234';
const reg = new RegExp(/^1(3|5|7|8){1}\d{9}$/g);

phoneNum1.match(reg); // output is null
phoneNum2.match(reg); // output is null
phoneNum3.match(reg); // output is ["15656781234"]
```

Now the challenge is upgraded, please use RegExp to output the last 8 numbers in a phone number and replace them with ********.

```javascript
const phoneNum = '18855556666';
// remove flag "g" to get the last 8 numbers
const reg = new RegExp(/^1(3|5|7|8){1}\d{1}(\d{8})$/);
// output is "88889999"
const lastEightNum = phoneNum.match(reg)[2];

phoneNum.replace(lastEightNum, '********');
```

### Challenge 05 - Match Email address & date format

```javascript
// Email match rules
// characters, numbers, -
// @ & .
// suffix like com, cn
// ? - optional character

const reg = new RegExp(/\w+-?\w+@\w+.(com|cn)/g);
```

The question mark makes the *-* sign optional, meaning it may occur zero time or one time.

```javascript
// date match rules
// xxxx-xx-xx  eg. 2018-07-15
// year - 1XXX or 20XX
// month - [01-12]
// day - [01-31]

const reg = new RegExp(/(1[0-9]{3}|20[0-1]{1}[0-9]{1}){1}-(0?[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])/g);
```

### Challenge 06 - Test root URL & get URL parameters

```javascript
// URL match rules
// https:// or http://
// xx.com or yy.xx.com

const site1 = 'https://dezineleo.com';
const site2 = 'https://dezineleo.com/posts/2018/07/es6-knowledge-map-for-react-beginner'
let reg = new RegExp(/https?:\/\/\w+.\w+\/?$/g);

reg.test(site1); // output is true
reg.test(site2); // output is false

// If you want to match site2
reg = new RegExp(/https?:\/\/\w+.\w+\/?(\w+-?\w+\/?)+$/);
reg.test(site2); // output is true
```

Note: as a general rule, if your regular expression will remain constant, i.e. your expression will change, it is best to use a regex literal. If your regular expression will change, or rely on other variables, it is better to use the constructor method.

```javascript
// get URL parameters
// match rules
// ?xxx=xxx
const site = 'https://dezineleo.com/post?category=javascript&tag=regexp';
const reg = new RegExp(/(?!(?:(\?|\&)))(\w+)=(\w+)/g);

site.match(reg); // output is ["category=javascript", "tag=regexp"]

// split the string
site.match(reg).map(item => {
  item.split('=');
  return item;
});
```

## Conclusion

Regular expression is not that big thing, just keep in mind, **no rules, no RegExp**. Also, you need to memorize the common groups and symbols.

|Character|Description|
|:----:|----|
|abc…|Letters|
|123…|Digits|
|\d|Any Digit|
|\D|Any Non-digit character|
|.|Any Character|
|\\.|Period|
|[abc]|Only a, b, or c|
|[\^abc]|Not a, b, nor c|
|[a-z]|Characters a to z|
|[0-9]|Numbers 0 to 9|
|\w|Any Alphanumeric character|
|\W|Any Non-alphanumeric character|
|{m}|m Repetitions|
|{m,n}|m to n Repetitions|
|*|Zero or more repetitions|
|+|One or more repetitions|
|?|Optional character|
|\s|Any Whitespace|
|\S|Any Non-whitespace character|
|^…$|Starts and ends|
|(…)|Capture Group|
|(a(bc))|Capture Sub-group|
|(.*)|Capture all|
|(a\|b\|c)|Matches a, b or c|

## Resources
1. [Regular Expressions (RegEx) Tutorial - YouTube](https://www.youtube.com/playlist?list=PL4cUxeGkcC9g6m_6Sld9Q4jzqdqHd2HiD)
2. [Regular Expressions - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
3. [Regular Expression 101](https://regex101.com/)
4. [Regular Expressions](https://javascript.info/regular-expressions)
5. [RegexOne](https://regexone.com/)
6. [RegExp | Eloquent JavaScript](https://eloquentjavascript.net/09_regexp.html)
7. [RegExr](https://regexr.com)
8. [Regular Expression the last guide](https://medium.com/tech-tajawal/regular-expressions-the-last-guide-6800283ac034)




---
title: JavaScript Tutorial
date: 2020-05-14
updateDate: 2020-05-14
spoiler: 《JavaScript 教程》笔记
type: note
cover: ./re.jpg
thumbnail: ./study.svg
status: 'In Progress'
tags: ['Frontend', 'Web Dev']
---

```toc
from-heading: 2
to-heading: 3
```

> 本笔记参考[JavaScript 教程](https://wangdoc.com/javascript/index.html)

## 一、入门篇

### 1.1 导论

<span class="hl-1">定义</span> <span class="hl-2">轻量级</span> <span class="hl-3">脚本语言</span> <span class="hl-4">嵌入式语言</span>

<span class="hl-1">应用领域</span> <span class="hl-2">浏览器</span> <span class="hl-3">Node</span> <span class="hl-4">数据库</span> <span class="hl-3">移动端</span> <span class="hl-2">跨平台桌面应用</span>

<span class="hl-1">语法</span> <span class="hl-2">过程式</span> <span class="hl-3">函数式</span>

<span class="hl-1">特性</span> <span class="hl-2">Event-Driven</span> <span class="hl-3">Non-Blocking</span> <span class="hl-4">Concurrent</span> <span class="hl-2">Async</span>

<span class="hl-1">标准</span> <span class="hl-2">TC39</span> <span class="hl-3">ECMA-262</span>

> “所有可以用 JavaScript 编写的程序，最终都会出现 JavaScript 的版本。”
>
> Any application that can be written in JavaScript will eventually be written in JavaScript. -- Jeff Atwood，[“Atwood 定律”](http://www.codinghorror.com/blog/2007/07/the-principle-of-least-power.html)

<div class="link-box">

扩展阅读: [《JavaScript: The Good Parts》](http://javascript.crockford.com/)

</div>

### 1.2 历史

<span class="hl-1">1990</span> <span class="hl-2">CERN</span> <span class="hl-3">Tim Berners-Lee</span> <span class="hl-4">万维网</span>

<span class="hl-1">1992</span> <span class="hl-2">NCSA</span> <span class="hl-3">Mosaic</span>

<span class="hl-1">1994</span> <span class="hl-2">NCSA</span> <span class="hl-3">Marc Andreessen</span> <span class="hl-4">Jim Clark</span> <span class="hl-2">Netscape Navigator</span>

<span class="hl-1">1995</span> <span class="hl-2">Netscape</span> <span class="hl-3">Brendan Eich</span> <span class="hl-4">10 天</span> <span class="hl-2">Mocha</span> <span class="hl-3">LiveScript</span>

> **初版语法借鉴来源**
> 
> 基本语法：*C、Java*
> 
> 数据结构：*Java -> 原始值 + 对象*
> 
> 函数用法：*Scheme、Awk，第一等公民函数 + 闭包*
> 
> 原始继承模型：*Self*
> 
> 正则：*Perl*
> 
> 字符串、数组处理：*Python*

<span class="hl-1">1996</span> <span class="hl-2">Netscape</span> <span class="hl-3">JScript</span> <span class="hl-4">ECMA</span>

<span class="hl-1">1997</span> <span class="hl-2">TC39</span> <span class="hl-3">ECMA-262</span> <span class="hl-4">ECMAScript</span> <span class="hl-2">ISO-16262</span>

<span class="hl-1">版本</span> <span class="hl-2">97.ES1</span> <span class="hl-3">98.ES2</span> <span class="hl-4">99.ES3</span> <span class="hl-2">07.ES4</span> <span class="hl-3">08.ES3.1</span> <span class="hl-4">11.ES5.1</span> <span class="hl-2">15.ES6</span>

### 1.3 基本语法

```js
// 变量提升（Hoisting）
console.log(a);
var a = 1;

// output -> undefined
```

<span class="hl-1">标识符命名</span> <span class="hl-2">任意字母/$/_ + 任意字母/$/_/0-9</span>

<span class="hl-1">非法标识符命名</span> <span class="hl-2">数字开头</span> <span class="hl-3">包含星号、加好、减号</span>

> **不能作标识符的保留字：**arguments、break、case、catch、class、const、continue、debugger、default、delete、do、else、enum、eval、export、extends、false、finally、for、function、if、implements、import、in、instanceof、interface、let、new、null、package、private、protected、public、return、static、super、switch、this、throw、true、try、typeof、var、void、while、with、yield。

```js
// switch 语句中的表达式采用严格相等（===）比较，不会进行类型转换。

var x = 1;

switch (x) {
  case true:
    console.log('x 发生类型转换');
    break;
  default:
    console.log('x 没有发生类型转换');
}
// x 没有发生类型转换
```

<span class="hl-1">循环语句</span> <span class="hl-2">while</span> <span class="hl-3">for</span> <span class="hl-4">do...while</span> <span class="hl-2">break</span> <span class="hl-3">continue</span>

```js
// top 作为标签，相当于定位符
top:
  for (var i = 0; i < 3; i++){
    for (var j = 0; j < 3; j++){
      if (i === 1 && j === 1) break top;
      console.log('i=' + i + ', j=' + j);
    }
  }

// 标签也可以用于跳出代码块
foo: {
  console.log(1);
  break foo;
  console.log('本行不会输出');
}
console.log(2);

// continue 表示满足条件时，跳过当前循环，直接进入下一轮外层循环
top:
  for (var i = 0; i < 3; i++){
    for (var j = 0; j < 3; j++){
      if (i === 1 && j === 1) continue top;
      console.log('i=' + i + ', j=' + j);
    }
  }
```

## 二、数据类型

### 1.1 概述

<span class="hl-1">Primitive Type</span> <span class="hl-2">number</span> <span class="hl-3">string</span> <span class="hl-4">boolean</span>

<span class="hl-1">Complex Type</span> <span class="hl-2">object</span>

<span class="hl-1">Special Type</span> <span class="hl-2">undefined</span> <span class="hl-3">null</span>

<span class="hl-1">对象</span> <span class="hl-2">object</span> <span class="hl-3">array</span> <span class="hl-4">function</span>

<span class="hl-1">类型判断</span> <span class="hl-2">typeof</span> <span class="hl-3">instanceof</span> <span class="hl-4">Object.prototype.toString</span>

### 1.2 null, undefined 和布尔值

### 1.3 数值

<span class="hl-1">IEEE 754</span> <span class="hl-2">64 位浮点数</span> <span class="hl-3">符号位 - 正负</span> <span class="hl-4">2-12 指数 - 大小</span> <span class="hl-2">13-64 小数 - 精度</span>

```bash
> 1 === 1.0
> true
```

```js
// 浮点数不是精确的值，涉及小数的比较和运算需注意。

0.1 + 0.2 === 0.3
// false

0.3 / 0.1
// 2.9999999999999996

(0.3 - 0.2) === (0.2 - 0.1)
// false
```

<span class="hl-1">数值表示</span> <span class="hl-2">科学计数法</span> <span class="hl-3">小数点前数字 > 21 位</span> <span class="hl-4">小数点后的 0 > 5 个</span>

```js
1234567890123456789012
// 1.2345678901234568e+21

123456789012345678901
// 123456789012345680000

0.0000003 // 3e-7

0.000003 // 0.000003
```

<span class="hl-1">进制</span> <span class="hl-2">八进制 0o/0O</span> <span class="hl-3">十六进制  0x/0X</span> <span class="hl-4">十进制</span> <span class="hl-2">二进制 0b/0B</span>

```js
-0 === +0 // true
0 === -0 // true
0 === +0 // true

+0 // 0
-0 // 0
(-0).toString() // '0'
(+0).toString() // '0'

(1 / +0) === (1 / -0) // false

0 / 0 // NaN
```

### 1.4 字符串



---
title: Relearn Web Dev
date: 2020-04-12
updateDate: 2020-04-17
spoiler: 《重学前端》笔记
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

> 本笔记参考[重学前端](https://time.geekbang.org/column/intro/100023201)

## 一、JavaScript

### 1.1 类型

<span class="hl-1">基本类型</span> <span class="hl-2">undefined</span> <span class="hl-3">null</span> <span class="hl-4">boolean</span> <span class="hl-3">string</span> <span class="hl-2">number</span> <span class="hl-3">object</span> <span class="hl-4">symbol</span>

<span class="hl-1">设计失误</span> - `undefined` 是变量而非关键字，可用 `void 0` 取 `undefined` 值。

<span class="hl-1">String</span> <span class="hl-2">UTF16 编码长度</span> <span class="hl-3">2<sup>53</sup> - 1</span>

> **Note：** 1 Unicode 代表 1 字符。UTF16/UTF8 是 Unicode 的编码方式。「U+ 十六进制码点值」表示 Unicode 码点，*0-65536（U+0000 - U+FFFF）的码点被称为**基本字符区域**（BMP）。*

<span class="hl-1">Number</span> <span class="hl-2">1.844E19</span> <span class="hl-3">2<sup>64</sup> - 2<sup>53</sup> + 3</span> <span class="hl-4">IEEE 754-2008</span>  <span class="hl-3">双精度浮点数</span>

<span class="hl-1">例外</span> <span class="hl-2">NaN 占用 9.01E15</span> <span class="hl-3">Infinity</span> <span class="hl-4">-Infinity</span>

<span class="hl-1">注意</span> - 除以 -0 会得到无穷大。

<span class="hl-1">Number</span> <span class="hl-2">有效整数范围</span> <span class="hl-3">-0x1fffffffffffff - 0x1fffffffffffff</span>

<span class="hl-1">Number</span> - 1. 无法精确表示范围外的整数；2. 不能用 ==/=== 比较非整数。

<span class="hl-1">精度问题</span> <span class="hl-2">0.1 + 0.2 = 0.30000000000000004</span>

```bash
> 0.1 + 0.2 == 0.3
> false
> # 通过判断等式差值的绝对值是否小于最小精度来比较
> Math.abs(0.1 + 0.2 - 0.3) <= Number.EPSILON
> true
```

<span class="hl-1">Symbol</span> <span class="hl-2">独一无二</span> - `var mySymbol = Symbol("my symbol");`

<div class="link-box">

扩展阅读: [Symbol.iterator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator)、[thank u, [Symbol.iterator].next](https://medium.com/front-end-weekly/thank-u-symbol-iterator-next-aef9f09ff78)

</div>

在 JavaScript 中，对象是“属性的集合”，包括数据属性和访问器属性，二者都是 key-value 结构，key 可以是字符串或 `symbol` 类型。

与 C++ 和 Java 中的类不同的是 JavaScript 中的“类”仅仅是运行时对象的一个私有属性，而且无法自定义类型。

<span class="hl-1">基本类型</span> <span class="hl-2">对应对象中的属性</span> <span class="hl-3">Number</span> <span class="hl-4">String</span> <span class="hl-2">Boolean</span> <span class="hl-3">Symbol</span>

也就是说 2 与 `new Number(2)` 是完全不同的值，一个是 `number` 类型，一个是对象类型。

Number、String 和 Boolean 这三个构造器搭配 `new` 时产生对象，直接调用时表示强制类型转换。

说到类型转换，在字符串转数字的类型转换中，支持十进制、二进制、八进制、十六进制和正负号科学计数法，如：

+ 20
+ 0b111
+ 0o13
+ 0xFF
+ 1e3
+ -1e-2

在使用 `parseInt` 时建议传入第二个参数，而 `parseFloat` 直接使用十进制来解析，不用担心进制混乱。多数情况下，建议使用 `Number`。

相反，数字转字符串就没那么多规矩，直接使用十进制表示。

---

**装箱操作** - 把基本类型转换为对应的对象，属于类型转换中**相当重要**的种类。

全局 `Symbol` 函数无法使用 `new` 来调用，这时候就可以利用函数的 `call` 方法来强制装箱。

```js
var symbolObject =
  (function(){
    return this;
  }).call(Symbol("a"));

console.log(typeof symbolObject); //object
console.log(symbolObject instanceof Symbol); //true
console.log(symbolObject.constructor == Symbol); //true
```

装箱机制会频繁产生临时对象，在一些对性能要求较高的场景下，尽量避免对基本类型做装箱转换。

使用内置的 `Object` 函数，可以显式调用装箱。

```js
var symbolObject = Object(Symbol("a"));

console.log(typeof symbolObject); //object
console.log(symbolObject instanceof Symbol); //true
console.log(symbolObject.constructor == Symbol); //true
```

每一类装箱对象都有私有的 `Class` 属性，这些属性可用 `Object.prototype.toString` 获取。

```js
var symbolObject = Object(Symbol("a"));

console.log(Object.prototype.toString.call(symbolObject)); //[object Symbol]
```

在 JavaScript 中，没有任何方法可以更改私有的 `Class` 属性，因此，相比 `instanceof`，`Object.prototype.toString` 能更准确地识别对象的基本类型。

需要注意的是 `call` 方法本身会产生装箱操作，所以需要配合 `typeof` 来区分是基本类型还是对象类型。

除了装箱操作，还有拆箱操作，在 JavaScript 标准中，定义了 `ToPrimitive` 函数，它能实现对象类型转换为基本类型，即**拆箱操作**。

对象到 `String` 和 `Number` 的转换都遵循“先拆箱再转换”的规则，即通过拆箱转换，将对象变成基本类型，再从基本类型转换为对应的 `String` 或 `Number`。

拆箱转换会尝试调用 `valueOf` 和 `toString` 来获得拆箱后的基本类型，如果 `valueOf` 和 `toString` 都不存在，或者没有返回基本类型，就会产生 TypeError：

```js
var o = {
  valueOf : () => {console.log("valueOf"); return {}},
  toString : () => {console.log("toString"); return {}}
}

o * 2
// valueOf
// toString
// TypeError
```

我们可以看到 `valueOf` 比 `toString` 先被调用，但在 String 的装箱操作中就会先调用 `toString`。

ES6 之后还支持对象通过显示指定 @@toPrimitive Symbol 来覆盖原来的行为。

```js
var o = {
  valueOf : () => {console.log("valueOf"); return {}},
  toString : () => {console.log("toString"); return {}}
}

o[Symbol.toPrimitive] = () => {
  console.log("toPrimitive");
  return "hello";
}

console.log(o + "")
// toPrimitive
// hello
```

---

除了上述七种语言类型，还有一些规范类型：

+ List 和 Record：用于描述函数传参过程。
+ Set：主要用于解释字符集
+ Completion Record：用于描述异常、跳出等语句的执行过程。
+ Reference：用于描述对象属性访问、delete 等。
+ Property Descriptor：用于描述对象的属性。
+ Lexical Environment 和 Environment Record：用于描述变量和作用域。
+ Data Block：用于描述二进制数据。

| 示例 | typeof | 运行时类型行为 |
|:---|:---|:---|
| null | **object** | Null |
| {} | object | Object |
| (function(){}) | function | **Object** |
| 2 | number | Number |
| "hello" | string | String |
| true | boolean | Boolean |
| void 0 | undefined | Undefined |
| Symbol('a') | symbol | Symbol |

### 1.2 对象

**JavaScript Object** - 语言和宿主的基础设施由对象来提供，JavaScript 程序即是一系列互相通讯的对象集合。
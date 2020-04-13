---
title: Relearn Web Dev
date: 2020-04-12
updateDate: 2020-04-12
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

目前 JavaScript 类型一共有 7 个， 分别是：

1. undefined
2. null
3. boolean
4. string
5. number
6. object
7. symbol

`undefined` 在 JavaScript 中是变量而非关键字，属于公认的**设计失误**之一。为避免 undefined 值被篡改，建议使用 `void 0` 取 `undefined` 值。与 `undefined` 不同，`null` 是关键字，可以放心使用 `null` 取 `null` 值。

`string` 类型的最大长度是 2<sup>53</sup> - 1，这里的长度指的是字符串的 UTF16 编码长度，而非字符数。

> Note：现行的字符集国际标准，字符是以 Unicode 的方式表示的，每一个 Unicode 的码点表示一个字符，理论上，Unicode 的范围是无限的。UTF 是 Unicode 的编码方式，规定了码点在计算机中的表示方法，常见的有 UTF16 和 UTF8。 Unicode 的码点通常用 U+??? 来表示，其中 ??? 是十六进制的码点值。 0-65536（U+0000 - U+FFFF）的码点被称为基本字符区域（BMP）。

`number` 类型有 18437736874454810627（2<sup>64</sup> - 2<sup>53</sup> + 3）个值，基本符合 [IEEE 754-2008](https://en.wikipedia.org/wiki/IEEE_754) 规定的双精度浮点数规则，其中有几个例外：

+ **NaN** - 占用了 9007199254740990，这原本是符合 IEEE 规则的数字。
+ **Infinity** - 无穷大
+ **-Infinity** - 负无穷大

JavaScript 中的 +0 和 -0，在加法运算中无区别，但在除法运算中需要注意除以 -0 会得到无穷大的结果。

根据双精度浮点数的定义，Number 类型中有效的整数范围是 -0x1fffffffffffff 至 0x1fffffffffffff，所以 Number 无法精确表示此范围外的整数。

### 1.2 对象

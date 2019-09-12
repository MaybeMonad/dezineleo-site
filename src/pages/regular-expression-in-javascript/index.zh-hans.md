---
title: 正则表达式在 JavaScript 中的应用
date: '2018-07-15'
spoiler: 正则题库，内容更新中...
type: 'topic'
---

如若初学者，可参照着[本文](/regular-expression-in-javascript)找些许感觉，若无感可自行谷歌拓展学习，另推荐正则学习网站 - [Regular Expression 101](https://regex101.com/)。

以下列几道正则面试题。

```js
var someText="web2.0 .net2.0";
var pattern=/(\w+)(\d)\.(\d)/g;
var outCome_exec=pattern.exec(someText);
var outCome_matc=someText.match(pattern);

What is outCome_exec[1] and outCome_matc[1]? 

Choice A: true 
Choice B: false 
Choice C: null 
Choice D: Web 
Choice E: Web2.0 
Choice F: undefined
Choice G: net2.0
```

这里考察正则方法 `exec` 和字符串方法 `match` 之间的区别，两者都是返回数组或 `null`，但在返回结果有些让人迷惑，因为他们有时一样，有时又不一样。

```js
/(\w+)(\d)\.(\d)/g.exec('web2.0 .net2.0')
// -> ["web2.0", "web", "2", "0", index: 0, input: "web2.0 .net2.0", groups: undefined]

/(\w+)(\d)\.(\d)/.exec('web2.0 .net2.0')
// -> ["web2.0", "web", "2", "0", index: 0, input: "web2.0 .net2.0", groups: undefined]
```

可以看到是否全局匹配，`exec` 方法返回值是一样的。

```js
'web2.0 .net2.0'.match(/(\w+)(\d)\.(\d)/g)
// -> ["web2.0", "net2.0"]

'web2.0 .net2.0'.match(/(\w+)(\d)\.(\d)/)
// -> ["web2.0", "web", "2", "0", index: 0, input: "web2.0 .net2.0", groups: undefined]
```

而在 `match` 方法下得出的结果中非全局匹配下和 `exec` 所得结果一致。

```js
/\w+\d\.\d/g.exec('web2.0 .net2.0')
// -> ["web2.0", index: 0, input: "web2.0 .net2.0", groups: undefined]

'web2.0 .net2.0'.match(/\w+\d\.\d/g)
// -> ["web2.0", "net2.0"]
```

当我们把正则中的括号去除，会发现这次 `exec` 只返回了 web2.0，而 `match` 返回结果不变。

我们来总结一下，在有多个匹配值的情况下，`exec` 方法始终只返回第一个匹配值，相当于 `match` 方法在非全局匹配下得出的结果；若正则表达式中用括号分了组，`exec` 会依次返回第一个匹配值的分组值，与 `match` 方法在非全局匹配下得出的结果一致。

未完待续...

## Resources
1. [彻底领悟 javascript 中的 exec 与 match 方法](https://www.cnblogs.com/xiehuiqi220/archive/2008/12/01/1327487.html)
2. [正则表达式 30 分钟入门教程](http://www.runoob.com/w3cnote/regular-expression-30-minutes-tutorial.html)
3. [Regular Expression 101](https://regex101.com/)
4. [前端正则表达式学习和实践](https://juejin.im/post/5c6d18e56fb9a04a0a5fc4bf)


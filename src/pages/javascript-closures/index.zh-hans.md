---
title: JS 闭包
date: '2019-03-24'
spoiler: 看，是闭包...
---

本文的[英文版](/javascript-closures)做了一些基本概念的解释，接下来我们就看几道闭包的面试题。

先来看一道简单的。

```js
var name = 'global';
var obj = {
  name: 'obj',
  dose: function(){
    this.name = 'dose';
    return function(){
      return this.name;
    }
  }
}

console.log(obj.dose().call(this));
```

如果你不知道答案，先回家好好看书吧，如果你知道答案，我们再来看看变种。

```js
let name = 'global';
const obj = {
  name: 'obj',
  dose: () => {
    this.name = 'dose';
    return () => this.name;
  }
}
console.log(obj.dose().call(this));
```

如果你不知道答案，先回家好好看书吧，如果你知道答案，我们再来看看变种。

```js
let name = 'global';
const obj = {
  name: 'obj',
  dose: () => {
    name = 'dose';
    return () => name;
  }
}
console.log(obj.dose().call(this));
```

如果你不知道答案，先回家好好看书吧，如果你知道答案，我们再来看看变种。

```js
let name = 'global';
const obj = {
  name: 'obj',
  dose: () => {
    this.name = 'dose';
    return (() => this.name).bind(this);
  }
}
console.log(obj.dose().call(this));
```

如果你不知道答案，先回家好好看书吧，如果你知道答案，我们再来看看变种。

```js
let name = 'global';
const obj = {
  name: 'obj',
  dose: (() => {
    name = 'dose';
    return (() => this.name);
  }).bind(this)
}
console.log(obj.dose().call(this));
```

未完待续...
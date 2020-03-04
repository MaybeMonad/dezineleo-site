---
title: JS 闭包
date: '2019-03-24'
spoiler: 看，是闭包...
type: 'topic'
thumbnail: ./js.svg
---

在[英文版](/javascript-closures)中有对闭包基本概念的讲述，以下参考几道闭包的面试题。

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
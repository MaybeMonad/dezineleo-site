---
title: JavaScript Challenge
date: 2020-03-11
updateDate: 2020-03-12
spoiler: Some practical JavaScript tricks.
type: 'topic'
thumbnail: ./js.svg
status: In Progress
---
```toc
from-heading: 2
to-heading: 2
```

## Deduplication an Array

```js
const arr = [0, 1, -1, 'string', 'false', true, true, false, undefined, null, NaN, NaN, {}, {}];
```

### 1. Set

```bash
> Array.from(new Set(arr))
> [0, 1, -1, "true", "false", true, false, undefined, null, NaN, {…}, {…}]

# or

> [...new Set(arr)]
> [0, 1, -1, "true", "false", true, false, undefined, null, NaN, {…}, {…}]
```

Terminology: [Set](/javascript-checklist/#set)

### 2. filter()

```bash
> arr.filter((value, index) => arr.indexOf(value) === index)
> [0, 1, -1, "true", "false", true, false, undefined, null, {…}, {…}]
```

See the difference? Since `arr.indexOf(NaN) === -1`, both of the `NaN` value are omitted.

Terminology: [filter()](/javascript-checklist/#filter), [indexOf()](/javascript-checklist/#arrayprototypeindexof)

## Find all occurrences of NaN in an array

```js
const arr = [1, 2, NaN, undefined, NaN, false, {}, null]
```

```bash
> arr.map((a, i) => Number.isNaN(a) ? i : undefined).filter(a => a)
> [2, 3]
```

So why use `Number.isNaN` instead of just `isNaN`?

Terminology: [findIndex()](/javascript-checklist/#findindex), [isNaN()](/javascript-checklist/#isnan)
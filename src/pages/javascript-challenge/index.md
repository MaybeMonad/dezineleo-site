---
title: JavaScript Challenge
date: 2020-03-11
updateDate: 2020-03-11
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
const arr = [0, 1, -1, 'true', 'false', true, true, false, undefined, null, NaN, NaN, {}, {}];
```

### 1. Set

```js
Array.from(new Set(arr))

// output -> [0, 1, -1, "true", "false", true, false, undefined, null, NaN, {…}, {…}]
```

Terminology: [Set](/javascript-checklist/#set)
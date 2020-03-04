---
title: JavaScript Checklist
date: '2020-03-04'
spoiler: How much do you know about JavaScript?
type: 'topic'
thumbnail: ./js.svg
---

## void operator

> The [`void` operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/void) evaluates the given `expression` and then returns `undefined`.

### Use cases

1. `<a href="javascript:void(0)">`
2. Using `void 0` to shorten `undefined`
3. Using `void` to explicate non-value-returning(void) arrow functions.
   ```js
   const log = x => void console.log(x);

   // In React useEffect
   useEffect(() => void setInterval(() => {}, 5000));
   ```
4. void can be used to force the function keyword to be treated as an expression instead of a declaration.
   ```js
    void function iife() {
      console.log("Executed!");
    }();
    // Output: "Executed"
   ```

### Links

1. [A case for using void in modern JavaScript](https://gist.github.com/slikts/dee3702357765dda3d484d8888d3029e)
2. [void operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/void)
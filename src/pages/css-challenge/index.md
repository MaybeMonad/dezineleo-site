---
title: CSS Challenge
date: 2020-03-11
updateDate: 2020-03-11
spoiler: Some practical CSS tricks.
type: topic
thumbnail: ./css.svg
status: In Progress
---

```toc
```

## Draw a triangle

```css{4-5}
div {
  width: 120px;
  height: 120px;
  --lg: linear-gradient(135deg, #000 50%, transparent 0);
  background: var(--lg) 0 0 / 100% 100%;
  background-color: #f5f5f5;
}
```

<style>
  .triangle {
    width: 120px;
    height: 120px;
    --lg: linear-gradient(135deg, #000 50%, transparent 0);
    background: var(--lg) 0 0 / 100% 100%;
    background-color: #f5f5f5;
  }
</style>

<div class="triangle"></div>

Terminology: [linear-gradient()](/css-checklist/)

---
title: The CSS Box Model
date: 2020-02-25
spoiler: Every elemnt in web design is a rectangular box.
type: topic
thumbnail: ./css_box_model.png
---

## Block Boxes vs Inline Boxes
<div class="d-grid col-s-1 col-m-2 gap-s-16 gap-m-32">
<div>
  <div class="box-title">Block Box</div>
  <div class="text-box list-box">

  + The width is decided by the **parent container** while the height is according to the **content inside**.
  + It will break onto **a new line**.
  + `<h1>` and `<p>` are block-level elements.

  </div>
</div>
<div>
  <div class="box-title">Inline Box</div>
  <div class="text-box list-box">

  + Both of the width and the height are depending on the **content inside**.
  + The block box will **not** break onto **a new line**.
  + The `<a>`, `<span>`, `<em>` and `<strong>` will display inline by default.

  </div>
</div>
</div>

## Properties of block box

From the outside to inside = <span class="hl-1">Margin</span> > <span class="hl-2">Border</span> > <span class="hl-3">Padding</span> > <span class="hl-4">Content</span>

### Margin

+ **Margin Collapsing** - When two elements with positive margins touch each other, it will combine to the larger margin of the two. *You can put another invisible element in between the two elments to prevent the margin collapsing.*
+ **Marigns on inline elements** - Inline boxes will completely ignore the top and bottom margins of an element.

## Content Boxes vs Border Boxes

By default, the `box-sizing` is set to `content-box`, which is a little counterintuitive as you have to add up the **border** and **padding** to get the real size of the box. Fortunately, you can use the [alternative CSS box model](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model#The_alternative_CSS_box_model) to get the visible width by assigning `border-box` to `box-sizing`.

Below is a best practice to use the `box-sizing` which is referenced from [the CSS Tricks article on box-sizing](https://css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice/).

```css
html {
  box-sizing: border-box;
}
*, *::before, *::after {
  box-sizing: inherit;
}
```


## Links

- [The box model | MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model)
- [CSS box model](https://internetingishard.com/html-and-css/css-box-model/)
- [The CSS Box Model | CSS Tricks](https://css-tricks.com/the-css-box-model/)

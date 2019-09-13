---
title: Markdown tutorial for novice starters
date: '2018-07-22'
spoiler: We talk about how to use Markdown to skyrocket your content producing.
type: 'topic'
---

Dude, it's 2018! Please markdown your f**kin coding life.

Look, I'm using markdown to write my blog right now. It's an incredible powerful and lightweight way to write rich content. Websites like [GitHub](https://github.com) and [Reddit](https://reddit.com) are using Markdown to style their comments.

It seems a little daunting at the beginning, but you might be suprised how fast and efficient it is to content creation.

Here is a quick preview of the topics.
- [What is Markdown?](#what-is-markdown)
- [Markdown syntax](#markdown-syntax)
  - [Headers](#headers)
  - [List](#list)
  - [Emphasis](#emphasis)
  - [Images](#images)
  - [Links](#links)
  - [Blockquotes](#blockquotes)
  - [Inline code](#inline-code)
  - [Syntax highlighting](#syntax-highlighting)
  - [Task Lists](#task-lists)
  - [Tables](#tables)
  - [Strikethrough](#strikethrough)
  - [Emojis](#emojis)
  - [Others](#others)
- [Markdown App Recommendations](#markdown-app-recommendations)
- [Conclusion](#conclusion)
- [Resources](#resources)

## What is Markdown?

**Markdown** is a plain text formatting syntax for writers. Not like plain text, it allows you to quickly write structured content for the web like formatting words as bold or italic. You can also add images and create lists.

## Markdown syntax

Here’s an overview of Markdown syntax.

### Headers

```markdown
  # Header 1
  ## Header 2
  ### Header 3
  #### Header 4
  ##### Header 5
  ###### Header 6
```

### List

Unordered

```markdown
* Item 1
* Item 2
  * Item 2a
  * Item 2b
```

Ordered

```markdown
1. Item 1
2. Item 2
3. Item 3
  1. Item 3.1
  2. Item 3.2
```

### Emphasis

```markdown
*Italic*
_Italic_

**Bold**
__Bold__
```

However, at dezineleo.com, I modified the italic style to be somthing like *Italic*, because I always need to point out the code stuff.

### Images

```markdown
![Dezineleo Logo](/dezineleo.logo.jpg)
```

### Links

```markdown
https://dezineleo.com
[Dezineleo](https://dezineleo.com)
```

### Blockquotes

```markdown
> Dezineleo is a Design &
> Dev blog.
```

### Inline code

```markdown
Dezineleo is a Design & `Dev` blog.
```

### Syntax highlighting

Currently, I'm using [prismjs](https://prismjs.com/) to highlight my codes.

```javascript
// ```javscript
// ...
// ```
function hello() {
  console.log('world')
}
```

### Task Lists

```markdown
- [x] Task 1 completed
- [ ] Task 2
```

### Tables

```markdown
Hello | World
----- | -----
Content 1 | Content 2
Content 3 | Content 4
```

Table Preview.

Hello | World
----- | -----
Content 1 | Content 2
Content 3 | Content 4

### Strikethrough

```markdown
~~Strikethrough~~
```

### Emojis

Yeah, this is my favourite feature. 😆

```markdown
😆
```

More emojis: [Complete list of github markdown emoji markup](https://gist.github.com/rxaviers/7360908)

### Others

You can also use back slash to escape markdown characters. You can even write plain HTML in your markdown document.

## Markdown App Recommendations

Currently, I'm mainly using **Bear App** to make cross-platform markdown documents. You can also use [VS code](https://code.visualstudio.com/) editor to write markdown files. You may install [Markdown - All in one](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one#review-details) plugin firstly.

## Conclusion

First of all, start to write your first markdown document. After just a couple of posts, I can assure you that your fingers will fly across your keyboard when you create your content.

## Resources
1. [Mastering Markdown](https://guides.github.com/features/mastering-markdown/)
2. [Markdown Tutorial](https://www.markdowntutorial.com/)
3. [The Ultimate Guide to Markdown](https://blog.ghost.org/markdown/)
4. [Bear App](http://www.bear-writer.com/)
5. [Markdown - All in one](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one#review-details)
6. [Markdown Project](https://daringfireball.net/projects/markdown/)

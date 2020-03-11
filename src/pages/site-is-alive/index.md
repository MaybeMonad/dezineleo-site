---
title: Dezineleo.com
date: '2018-07-01'
spoiler: Leo's personal site project.
type: 'project'
thumbnail: ./launch.svg
logo: ./launch.svg
updateDate: '2020-03-09'
---

```toc
```

Finally, yeah, finally...After years of testing all kinds of "site builder" out there, I think I've already found what I needed at the very beginning.

+ I hate SQL.
+ I love MarkDown.
+ I don't need "Admin Dashboard" things.
+ I want "static" but more than "static".

I don't quite remember how I found [Gatsby](https://www.gatsbyjs.org/), but I strongly recommend to have a try. It's currently my favourite website builder.

## What is Gatsby?
[Gatsby](https://www.gatsbyjs.org/) is a blazing fast static site generator for [React](https://reactjs.com). Actually, it is more than that. I’ve tried and struggled with WordPress throughout the years. However, Gatsby might be the ideal solution I’ve been searching for.

## Why Gatsby?
Well, Gatsby may not be your choice, you can also go to [StaticGen](https://www.staticgen.com/) and checkout more solutions.

Here is why I choose Gatsby over others.

1. Gatsby uses React
2. Integrated with GraphQL
3. No database
4. MarkDown Supported
5. Gatsby’s fast, really fast ?? (It could be faster)
6. Easy to deploy
7. Easy to maintain
8. Easy to migrate

## How to start your own Gatsby site?

<div class="link-box">

Official Step-by-Step Tutorial: [https://www.gatsbyjs.org/tutorial/](https://www.gatsbyjs.org/tutorial/)

</div>

Here is a quick guide to set up your local dev environment (For MAC).

Open your terminal and type in.

```bash
# Install gatsby-cli
npm install --global gatsby-cli

# Create your first gatsby site
gatsby new yoursite

# Switch to your site folder
cd gatsby-site

# Boom, your local site will be alive by default at localhost:8000
gatsby develop

# Production build
gatsby build

# Test before deploy your code
gatsby serve
```

<div class="link-box">

Add new page: [https://www.gatsbyjs.org/docs/adding-markdown-pages/](https://www.gatsbyjs.org/docs/adding-markdown-pages/)

</div>
<div class="link-box">

Deploy to Netlify: [https://www.gatsbyjs.org/docs/deploy-gatsby/#netlify](https://www.gatsbyjs.org/docs/deploy-gatsby/#netlify)

</div>

## Custom-built Elements

### Content Box

<div class="d-grid col-s-1 col-m-3 gap-s-16 gap-m-32">
  <div>
    <div class="box-title">Content Box</div>
    <div class="text-box list-box">

+ Content 1
+ Content 2
+ Content 3

    </div>
  </div>
</div>

```md
<div class="d-grid col-s-1 col-m-3 gap-s-16 gap-m-32">
  <div>
    <div class="box-title">Content Box</div>
    <div class="text-box list-box">

+ Content 1
+ Content 2
+ Content 3

    </div>
  </div>
</div>

```

### Text Highlighting

<span class="hl-1">Highlight 1</span>
<span class="hl-2">Highlight 2</span>
<span class="hl-3">Highlight 3</span>
<span class="hl-4">Highlight 4</span>

```md

<span class="hl-1">Highlight 1</span>
<span class="hl-2">Highlight 2</span>
<span class="hl-3">Highlight 3</span>
<span class="hl-4">Highlight 4</span>

```

### Link Box

<div class="link-box">

You can find me on Twitter: [@Dezineleo](https://twitter.com/dezineleo)

</div>

```md

<div class="link-box">

You can find me on Twitter: [@Dezineleo](https://twitter.com/dezineleo)

</div>

```

## In Conclusion
With modern Javascript, React’s component model, and Progressive Web App features built in, Gatsby is a compelling alternative to traditional CMS site building.

Gatsby may not be the ideal solution for your project right now. But I thoroughly recommend giving Gatsby a go and see where Gatsby can take us next.

## Ready to get your hands dirty?
1. [Docs | GatsbyJS](https://www.gatsbyjs.org/docs/)
2. [React | A JavaScript library for building user interfaces](https://reactjs.org/)
3. [Gatsby.js Tutorial | GatsbyJS](https://www.gatsbyjs.org/tutorial/)
4. [I don't wanna mess up with servers as things always changed after | JavaScript, APIs,  I + hate SQL.and Markup](https://jamstack.org/)
5. [Gatsby Tutorials | YouTube](https://www.youtube.com/playlist?list=PLT_i4XJaEf8vSP_ludWfdKvrtQT9W7-sO)
6. [KNW Photography - Digital portfolio site based on Gatsby](https://github.com/ryanwiemer/knw)
7. [Migration to GatsbyJS and JAM stack from WordPress](https://www.gatsbyjs.org/blog/2018-03-29-migration-from-wordpress-to-gatsby/)

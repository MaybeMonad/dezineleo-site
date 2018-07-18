---
path: "/posts/2018/07/site-is-alive"
date: 2018-07-01
title: "Start your blazing fast static site based on GatsbyJS"
author: "Leo"
thumbnail: "./thumbnail.jpg"
published: true
categories: ['Tutorial', 'Gatsby']
tags: ['Dezineleo', 'Gatsby']
excerpt: "In this post I’ll give you a quick introduction and an overview of my own thoughts on Gatsby."
---

Yo! What's up everybody?! Today is the big day for [Dezineleo.com](https://dezineleo.com). It's alive! Also, I wanna introduce you the coolest site generator I've ever used, Gatsby!

Topics I gonna cover:

- [What is Gatsby?](#what-is-gatsby)
- [Why Gatsby?](#why-gatsby)
- [How to start your own Gatsby site?](#how-to-start-your-own-gatsby-site)
- [Add a markdown page](#add-a-markdown-page)
- [Deploy your site](#deploy-your-site)
- [In Conclusion](#in-conclusion)
- [Ready to get your hands dirty?](#ready-to-get-your-hands-dirty)

## What is Gatsby?
[Gatsby](https://www.gatsbyjs.org/) is a blazing fast static site generator for [React](https://reactjs.com). Actually, it is more than that. I’ve tried and struggled with WordPress throughout the years. However, Gatsby might be the ideal solution I’ve been searching for.

## Why Gatsby?
Well, Gatsby is not your only choice to build static site. Go to [StaticGen | Top Open Source Static Site Generators](https://www.staticgen.com/) and checkout more solutions.

But why Gatsby? why not Jekyll, Hugo or VuePress?

1. Gatsby uses React
2. Integrated with GraphQL
3. No database
4. MarkDown Supported
5. Gatsby’s fast, really fast
6. Easy to deploy
7. Easy to maintain
8. Easy to migrate

With the fantastic, step-by-step [tutorial](https://www.gatsbyjs.org/tutorial/) in the Gatsby site, you can start your first Gatsby site without mastering the basics. But, I suggest you to learn React to take full advantage of Gatsby’s power.

Creating websites in Gatsby is a fundamentally different paradigm than in a CMS-specific framework — faster development cycles, easy compatibility with React component libraries, a CMS-agnostic development environment, the ability to easily deploy static build artifacts.

## How to start your own Gatsby site?
Here is a quick guide to set up your local dev environment.

Open your terminal(I’m a MAC OSX user) and type in.

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

## Add a markdown page

Make sure you've already installed *gatsby-source-filesystem* plugin correctly. If not, please follow the steps.

```bash
# install gatsby-source-filesystem plugin
npm i --save gatsby-source-filesystem
```

Open *gatsby-config.js* and add the plugin.

```javascript
plugins: [
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      path: `${__dirname}/path/to/markdown/files`,
      name: "markdown-pages",
    },
  },
];
```

Then we should transform the markdown files.

```bash
# install gatsby-transformer-remark plugin
npm i --save gatsby-transformer-remark
```

```javascript
// update gatsby-config.js
plugins: [
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      path: `${__dirname}/path/to/markdown/files`,
      name: "markdown-pages",
    },
  },
  `gatsby-transformer-remark`,
];
```

Then we should create a *template* for the markdown data. Firstly, Create a folder named *templates* in the */src* directory. Secondly, create a *blogTemplate.js* inside that folder.



More info: [Adding Markdown Pages](https://www.gatsbyjs.org/docs/adding-markdown-pages/)

## Deploy your site
You can use your favorite hosting to host your site. Right now I’m using [Vultr](https://www.vultr.com/?ref=7443872) to host dezineleo.com. So far so good. Later I’ll write an article about how to choose your hosting.

## In Conclusion
Gatsby may not be the ideal solution for your project right now. But I thoroughly recommend giving Gatsby a go and see where Gatsby can take us next.

## Ready to get your hands dirty?
1. [Docs | GatsbyJS](https://www.gatsbyjs.org/docs/)
2. [React | A JavaScript library for building user interfaces](https://reactjs.org/)
3. [Gatsby.js Tutorial | GatsbyJS](https://www.gatsbyjs.org/tutorial/)
4. [JAMstack | JavaScript, APIs, and Markup](https://jamstack.org/)
5. [Gatsby Tutorials | YouTube](https://www.youtube.com/watch?v=b2H7fWhQcdE&list=PLLnpHn493BHHfoINKLELxDch3uJlSapxg)
6. [KNW Photography - Digital portfolio site based on Gatsby](https://github.com/ryanwiemer/knw)
7. [Migration to GatsbyJS and JAM stack from WordPress](https://www.gatsbyjs.org/blog/2018-03-29-migration-from-wordpress-to-gatsby/)

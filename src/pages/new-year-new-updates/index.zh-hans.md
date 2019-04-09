---
title: 新年新气象
date: '2019-02-13'
spoiler: 都 2019 年了，是不是该整点像样的了？！
---

去年用 [GatsbyJS](https://www.gatsbyjs.org/) 搭了这个博客，[开博头篇文章](/site-is-alive)也做了简单介绍，今天趁着升级 2.0 版本再次安利一波。

## 开始升级

参照官方的[升级指南](https://www.gatsbyjs.org/docs/migrating-from-v1-to-v2/)，我简要列举下更新内容。

+ 升级 Gatsby 及关联的包；升级 React；单独升级插件的依赖包。
+ 删除或重构 layout 组件，因为“顶层组件”的更新会导致 React 重新渲染所有子组件，继而导致丢失状态或破坏 CSS 过渡。官方建议使用 `<StaticQuery />` 组件获取静态数据，比如 SEO 相关的内容，具体参考 [RFC](https://github.com/gatsbyjs/rfcs/blob/master/text/0002-remove-special-layout-components.md#detailed-design)。
+ 传入 layout 的 children 函数 prop 改为普通 prop。
+ `history`、`location`、`match` 属性值只能从页面获取。
+ `gatsby-link` 中的 `navigateTo` 更名为 `navigate`。
+ 官方建议不要混用 CommonJS 和 ES6 的 Module，可能导致未知错误。
+ 替换 React Router 为 **@reach/router**，根据描述来看，@reach/router 更轻量，关键是
+ 浏览器 API `replaceRouterComponent`、`replaceHistory` 已丢弃。
+ 你要是用了 `Typography.js`，你需要将 `scale`、`rhythm`导出。
+ className 只能用 camelCase。
+ `gatsby-image` 的 `outerWrapperClassName` 被丢弃。
+ `<Link />` 组件改为从 `gatsby` 直接引入，如 ` import { Link } from "gatsby"`，同时你可以直接将 `gatsby-link` 的包从 package.json 中删除。
+ `graphql` 也需要从 `gatsby` 引入，不再自动支持。
+ 在使用 GraphQL 查询时不再需要写名称。

废话列了那么多，so，都改完得花不少时间吧？嗯，确实，我足足思想斗争了两分钟才放弃这样的升级方案。😆

## 真实升级方案

像我这样的懒癌患者，当然是直接 fork [@dan_abramov](https://mobile.twitter.com/dan_abramov) 大佬的[博客](https://overreacted.io)，然后魔改一番，哈哈哈哈哈…

## 2018 - 2019

关于“互联网寒冬”，我一直认为做好自己该做的事，脚踏实地先提高自己的技术水平才是王道，起码互联网行业还饿不死人吧？

我是在 2017 年末正式入坑前端，以前算是英语老师，但在大学期间一直在捣鼓网站建设，也算接触过「远古前端」，当然，那会儿还没听说过前端的概念。现在正儿八经弄前端，才发现自己的优势也仅是建立在对业务场景的认识和积累，对编程还真是相当于零基础，好在靠着一直以来的兴趣自学着，虽磕盼了些，也算入了门。🤣

接下来会朝深入理解 JS、React 以及 NodeJS 进阶。

未完待续……

## Resources

1. [Migrating from v1 to v2 | GatsbyJS](https://www.gatsbyjs.org/docs/migrating-from-v1-to-v2/)
2. [GitHub - gaearon/overreacted.io](https://github.com/gaearon/overreacted.io)
3. [Start your blazing fast static site based on GatsbyJS](/site-is-alive)
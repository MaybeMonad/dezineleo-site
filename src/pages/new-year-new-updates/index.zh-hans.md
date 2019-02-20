---
title: 新年新气象
date: '2019-02-13'
spoiler: 都 2019 年了，是不是该整点像样的了？！
---

去年用 [GatsbyJS](https://www.gatsbyjs.org/) 搭了这个博客，[开博头篇文章](/site-is-alive/)也做了简单介绍，今天趁着升级版本再次安利一波。

GatsbyJS 一直自称 blazing fast，那为什么它能这么快？我们先从侧面了解下。

+ 一些著名厂商用了 GatsbyJS 搭建网站，其中包括 [React 官网](https://reactjs.org/)。
+ 根据 [StaticGen](https://www.staticgen.com/) 统计，GatsbyJS 在过去 279 天内增加 9978 颗 Star，新增数第一，远超老牌 Jekyll、Hexo 等。

再看下这次 v2 有哪些亮点。

+ 构建时间减少高达 75%。
+ 客户端的 JS 运行时瘦身 31%。
+ 支持 Webpack 4，Babel 7，React 16.5（我自己升级到了 16.8.1
 ，毕竟安排上了 Hooks 😳）。

## 开始升级
具体的步骤在 [Migrating from v1 to v2](https://www.gatsbyjs.org/docs/migrating-from-v1-to-v2/) 中有详细说明，我在这里简单概括下涉及更改的内容。

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

再次申明，我只列了其中一部分更改内容，具体更改内容的请自行前往 [Migrating from v1 to v2](https://www.gatsbyjs.org/docs/migrating-from-v1-to-v2/) 查看。

那么，这么多都改完一定花了不少时间吧？嗯，确实，我足足思想斗争了两分钟才放弃这样的升级方案。😆

## 真实升级方案
像我这样的懒癌患者，当然是直接 fork [@dan_abramov](https://mobile.twitter.com/dan_abramov) 大佬的博客，哈哈哈哈哈…

最后安利一下 Dan 的 [Overreacted.io](https://overreacted.io)。

## 最后的最后


未完待续……
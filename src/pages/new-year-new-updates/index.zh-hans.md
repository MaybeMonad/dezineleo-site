---
title: 新年新气象
date: '2019-02-13'
spoiler: 都 2019 年了，是不是该整点像样的了？！
---

去年用 [GatsbyJS](https://www.gatsbyjs.org/) 搭了这个博客，[开博头篇文章](https://dezineleo.com/posts/2018/07/site-is-alive)也做了简单介绍，今天趁着升级版本再次安利一波。

GatsbyJS 一直自称 blazing fast，虽然我也不知道具体快在哪里，但可以从侧面体会下。

+ 一些著名厂商的页面基于 GatsbyJS 搭建，包括 [React 官网](https://reactjs.org/)。
+ 根据 [StaticGen](https://www.staticgen.com/) 统计，GatsbyJS 在过去 279 天内增加 9978 颗 Star，新增数第一，远超老牌 Jekyll、Hexo 等。

当然，官方也列举了这次的更新亮点。

+ 构建时间减少高达 75%。
+ 客户端的 JS 运行时瘦身 31%。
+ 支持 Webpack 4，Babel 7，React 16.5（我自己升级到了 16.8.1，毕竟安排上了 Hooks 😳）。

总之，就是快，对吧！？

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
像我这样的懒癌患者，当然是直接 fork [@dan_abramov](https://mobile.twitter.com/dan_abramov) 大佬的博客，然后魔改一番，哈哈哈哈哈…

另外，Dan 的 Overreacted.io 还是值得一读。

## 深入 GatsbyJS 内核
趁着这次的升级，我也仔细了解了下 Gatsby 的实现原理，原文见 [Behind the Scenes](https://www.gatsbyjs.org/docs/behind-the-scenes/)。看是看完了，但可能超纲了，我……我还是等下次更新后再来看吧。😅

## 2018 - 2019
更新算是告一段落，接下来聊聊总结和规划。面对今年的互联网寒冬，你们过冬都是用什么姿势？

2017 年末正式入坑前端，以前是英语老师，跨度可能有点大，其实我在大学期间就一直在捣鼓网站建设，反而接触过「远古前端」，当然，那会儿还没有前端的概念。可能一直是围绕「实现业务」而在搞开发，在团队协作中就会有些不适应，所以这一年来也是努力夯实自己的基础，结果发现，前端这个坑不仅大，还多。🤣

当初写这个博客也是想要总结一些自己的学习成果，给自己定下的目标是每周更新一篇文章，同步更新中英双语，但两个版本不是纯翻译关系，内容不一定完全一致。

未完待续……

## Resources
1. [Migrating from v1 to v2 | GatsbyJS](https://www.gatsbyjs.org/docs/migrating-from-v1-to-v2/)
2. [GitHub - gaearon/overreacted.io](https://github.com/gaearon/overreacted.io)
3. [Start your blazing fast static site based on GatsbyJS](/site-is-alive)
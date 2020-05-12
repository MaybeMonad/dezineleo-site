---
title: HYG V3 Updates
date: 2020-05-12
updateDate: 2020-05-12
spoiler: A non-profit social platform for blind dating.
type: topic
github: https://github.com/DezineLeo/DeStatic
version: v2.0
cover: ./hyg.jpg
thumbnail: ./hyg.svg
logo: ./logo.png
tags: ['HYG']
status: 'In Progress'
---

Around two years ago, I took over this project and was responsible for the UI/UX and frontend development since then. I've designed a version called **v2.0** before, but it's just semi-finished. So at the end of 2019, I decided to make a whole new design as well as rewrite the code in React instead of Vue.

## Abstract

原项目基于 Vue 2 编写，经过几次迭代后，为了提高开发效率，用了一个月的业余时间从 UI 设计到代码全都重新做了一遍。新项目采用 React 编写，为了节省时间，用了 Umi + Ant Mobile + Dva 套餐，但有考虑过在后续有时间的前提下，针对个别耗费性能的组件进行优化或直接造轮子。

## Updates

1. **全新 UI** - 每个页面都做了重设计。
2. **新技术栈** - 用 Umi + Dva + Antd + Ant Mobile 重新编写。
3. **Dark Mode** - 基于 [Styled Components](https://styled-components.com/) 实现。我用 SC 有段时间了，直观感受是文件结构看着更清晰、样式写着也更舒服。当然，在页面样式复杂的情况下单文件代码很容易破千行，我暂时通过抽象部分结构为组件来缓解长距离的上下滑动。拿该项目来说，首页的页面状态和交互逻辑都不少，光抽象「用户卡片」就省了近 500 行。

## Design

本想做一个与之前版本设计的区别，后来想想，差点掉入自欺欺人的「项目总结」，我又不懂色彩原理，怎么说明为什么要用这种颜色？抑或为什么采用这种布局？我做图的源动力就是觉得好看，心想 TM 这就是我要的样式，只是对用户体验有一点追求，加上恰好又懂点代码。

设计和交互部分不赘述，可以看录屏。

<video controls>
  <source src="./hyg.webm" type="video/webm">
  <!-- <p>Your browser doesn't support HTML5 video. Here is
     a <a href="myVideo.mp4">link to the video</a> instead.</p> -->
</video>

项目中用到的 Icon 图标基本来自 [Remix Icon](https://remixicon.com/)，感谢如此优秀的开源项目。

## Code

这个项目不复杂，一共 11 个页面，包括「登录注册找回密码」、首页、心动、搜索、我的、个人资料、个人认证、证件上传，其中页面逻辑较多的是「首页」和「我的」。

### Page - Home

首页用了 Tab 来聚合用户常用功能，筛选功能融合进 Tab 按钮，该灵感来自知乎 APP，其实整个头部都有抄袭知乎的嫌疑，希望别「律师函警告」~ Tab 用的是 [`react-swipeable-views`](https://github.com/oliviertassinari/react-swipeable-views)，真机上切换 Tab 有些许卡顿，可能我的 6SP 该退休了，但考虑到下个版本将要上线「圈子」板块，如果切换卡顿更严重，要么定制一个带虚拟化的 Tab 组件，要么换方案。

用户卡片列表用的是 [Ant Mobile](https://mobile.ant.design/) 带的 [ListView](https://mobile.ant.design/components/list-view-cn/)，应该是用了类似**虚拟列表**的思路实现？没具体研究，实际体验貌似顺滑不少，但也存在一个问题，在主题切换上会出现部分用户卡片未能更新视图，初步怀疑与虚拟化有关，准备在下个版本改善。

列表还需要实现的一个功能就是记忆滚动位置，以方便下次看完用户资料返回时能回到当前浏览的位置，好在 `ListView` 提供了 `onScroll` 的 API，但是当 `ref` 作为对象时不会在改变时更新视图，根据官方文档可以使用 `useCallback`，但我在 `useEffect` 中用了 `requestAnimationFrame` 来重定位，我不知道在性能上有什么差别，但从页面切换的直观感受上，用了 `useCallback` 会在跳转子组件时出现很明显的白屏闪现，而用 `requestAnimationFrame` 相对过渡更顺滑。

### Page - Me

「我的」页面回顾来看也就两处图片上传可以说说，头像替换我用的是 [Ant Design](https://ant.design/) 的 [`Upload`](https://ant.design/components/upload-cn/) 组件，非常符合我需要的操作逻辑，无需多余按钮，准备自己写个上传 Demo，小小的上传蕴含了不少处理逻辑。

另一处就是用户相册的图片上传，用的是 [ImagePicker](https://mobile.ant.design/components/image-picker-cn/)，但比起头像上传，相册图片需要有一个设置封面图的功能，但是 API 中并没有关于单张图片的样式或节点的操作。我的实现方案是将封面图提取至用户相册列表首位，然后用 CSS 伪类创建一个小标签。

## Conclusion

这个项目前后花了近一个月，算是一次完整的从设计到代码实现的项目，没有甲方，没有 Deadline，完全自由发挥，有点类似在做自己的项目，还是蛮愉快的体验。

期待下一个版本。
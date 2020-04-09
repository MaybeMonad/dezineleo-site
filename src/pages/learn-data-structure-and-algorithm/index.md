---
title: 数据结构与算法之痛
date: 2020-04-07
updateDate: 2020-04-08
spoiler: I have no idea about them in the past couple years.
type: topic
thumbnail: ./code.svg
logo: ./code.svg
status: In Progress
tags: ['Data Structure', 'Algorithm']
---

```toc
from-heading: 2
to-heading: 3
```

关于数据结构与算法，作为一个有 5 年多经验的 Web developer，我至今对此毫无概念。是的，但这并不影响我的工作，只是在日常学习新内容的过程中，逐渐感受到“这方面”的重要性。于是，我便开始学习并掌握它们。

这次的学习我准备了几份学习资料，它们分别是：

1. [《300分钟搞定数据结构与算法》](https://kaiwu.lagou.com/course/courseInfo.htm?courseId=3#/content) - 拉勾教育活动 1 元购得
2. [数据结构与算法之美](https://time.geekbang.org/column/intro/100017301) - 极客时间 ￥69
3. [CoderPro](https://www.techseries.dev/coderpro) from TechSeries - $57 购得，本来只是支持 YouTuber，现在正好拿来学习。
4. [JavaScript Algorithms and Data Structures](https://github.com/trekhleb/javascript-algorithms)
5. [LeetCode Solutions](https://github.com/azl397985856/leetcode)
6. [labuladong的算法小抄](https://labuladong.gitbook.io/algo/)

<!-- ![](./tech_interview.png) -->

## 复杂度分析

**大 O 复杂度表示法** - 用于表示代码执行时间随数据规模增长的**趋势**，也称**渐进时间复杂度**（Asymptotic Time Complexity），简称**时间复杂度**。

```cpp
int cal(int n) {
  int sum_1 = 0;
  int p = 1;
  for (; p < 100; ++p) {
    sum_1 = sum_1 + p;
  }

  int sum_2 = 0;
  int q = 1;
  for (; q < n; ++q) {
    sum_2 = sum_2 + q;
  }

  int sum_3 = 0;
  int i = 1;
  int j = 1;
  for (; i <= n; ++i) {
    j = 1; 
    for (; j <= n; ++j) {
      sum_3 = sum_3 +  i * j;
    }
  }

  int sum_4 = 0;
  int i = 1;
  for (; i < n; ++i) {
    sum_4 = sum_4 + f(i)
  }

  return sum_1 + sum_2 + sum_3 + sum_4;
}
 
int f(int n) {
  int sum = 0;
  int i = 1;
  for (; i < n; ++i) {
    sum = sum + i;
  } 
  return sum;
}
```

**总的时间复杂度等于量级最大的那段代码的时间复杂度**，即 `sum_2` 和 `sum_3` 的时间复杂度分别是 O(n) 和 O(n<sup>2</sup>)；`sum_1` 为常量执行时间，时间复杂度为 O(100)；`sum_4` 属于嵌套代码，而嵌套代码的复杂度等于嵌套内外代码复杂度的乘积，故该时间复杂度为 O(n<sup>2</sup>)。


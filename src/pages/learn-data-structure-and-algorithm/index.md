---
title: Data Structure and Algorithm
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

搞了多年网页开发，至今还未遇上“算法”问题，我想这应该不是个别现象，毕竟大部分小厂一没“核心科技”，二没“亿万级吞吐”。虽说不影响我现在的工作，只是每日摸鱼之时总能看到大佬的苦心劝说，也逐渐感受到“这方面”的重要性，遂下决心啃上一啃。

## 复杂度分析

**大 O 复杂度表示法** - 用于表示代码执行时间随数据规模增长的**趋势**，称**渐进时间复杂度**（Asymptotic Time Complexity），简称**时间复杂度**。

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

## 参考资料

1. [《300分钟搞定数据结构与算法》](https://kaiwu.lagou.com/course/courseInfo.htm?courseId=3#/content)
2. [数据结构与算法之美](https://time.geekbang.org/column/intro/100017301)
3. [CoderPro](https://www.techseries.dev/coderpro) from TechSeries
4. [JavaScript Algorithms and Data Structures](https://github.com/trekhleb/javascript-algorithms)
5. [LeetCode Solutions](https://github.com/azl397985856/leetcode)
6. [labuladong的算法小抄](https://labuladong.gitbook.io/algo/)
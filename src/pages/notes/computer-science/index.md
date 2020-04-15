---
title: Computer Science
date: 2020-04-13
updateDate: 2020-04-14
spoiler: CS 笔记
type: note
cover: ./computer.jpg
thumbnail: ./study.svg
status: 'In Progress'
tags: ['Computer Science']
---

```toc
from-heading: 2
to-heading: 3
```

> 本笔记参考 [Computer Science | YouTube](https://www.youtube.com/playlist?list=PL8dPuuaLjXtNlUrzyH5r6jN9ulIgZBpdo)

## 一、计算机早期历史

计算机先驱 Charles Babbage 说过：
> At each increase of knowledge, as well as on the contrivance of every new tool, **human labour becomes abridged**. 

最早使用“计算机”一词的文献来自 1613 年的一本书（作者 Richard Braithwait），当时的 “Computer” 指的是负责计算的人，直到 1800 年后才逐渐开始代表机器。这其中“步进计算器”最有名，是由德国博学家 Gottfried Leibniz 在 1694 年建造。该计算器类似汽车中的里程表，不断累加里程数。它也是第一台能做“加减乘除”运算的机器。

20 世纪前，大部分人会使用 **Pre-computed Tables**，也就是之前提到的负责计算的人编撰的。

Charles Babbage 提出了一种新型的机械装置叫“差分机”（Difference Engine），并在 1823 年开始建造，一直造了 20 年，最终无果。直到 1991 年，历史学家根据 Charles Babbage 的草稿做了一个差分机，而且可以正常工作！在 Charles Babbage 建造差分机的过程中还构想了一个更复杂的机器 -- 分析机（Analytical Engine），不同于之前的计算机，分析机是“通用计算机”，其特性包含：

+ 可做多种运算
+ 可根据输入的数据按顺序执行操作
+ 拥有内存和原始的打印机

但由于思想太超前，与差分机一样，都没有建成。英国数学家 Ada Lovelace 给分析机写了一个假想的程序：

> A new, a vast and a powerful language is developed for the future use of analysis

因此，Ada 被认为是世上第一位程序员，而 Charles Babbage 被认为是“计算机之父”。

IBM -- The International Business Machines Corporation.

## 二、电子计算机

最大的机电计算机是“Harvard Mark I”，是 IBM 在 1944 年为二战同盟国建造的。其最早是为“曼哈顿计划（*The Manhattan Project*）”跑模拟。这台机器的大脑是**继电器**（Relays），也就是用电控制的机械开关。继电器中有根“控制线路”，用于控制电路的开关，而“控制线路”连着一个线圈，当电流通过，线圈产生电磁场，从而吸引金属臂，从而闭合电路。但继电器的机械开关在开合过程中存在一定的物理延迟，比如 1940 年代一个好的继电器 1s 只能开合 50 次，不足以解决复杂的大问题。Harvard Mark I 在 1s 内能做 3 次加/减法运算，而一次乘法要花 6s，一次除法更是要花 15s，更别提复杂的操作，如三角函数的计算。除了速度慢，还存在磨损的问题。随着继电器数量的增加，出现故障的概率就会随之提高。Harvard Mark I 约有 3500 个继电器，不但随时要面临替换继电器的问题，还遭受着各种昆虫的“袭击”。1947 年 9 月，Harvard Mark II 在故障继电器中拔出了一只死虫。

Grace Hopper 曾说：

> From then on, when anything went wrong with a computer, we said it had bugs in it.

这就是我们常提到的计算机术语 “Bug” 的来源。

1904 年，英国物理学家 John Ambrose Fleming 开发了一种新的电子元件，叫“**热电子管（Thermionic Valve）**”。他将两个电极装在一个气密的玻璃灯泡里，这也是历史上的第一个真空管。其中一个电极可以加热，从而发射电子，称为“**热电子发射（Thermionic Emission）**”，另一个电极会吸收电子，进而形成电流，但只有带正电才行。在负电荷或中性电荷下，电子不会被吸收，而是越过真空区域，因此不会产生电流。**电流只能单向流动的电子元件叫“二极管（Diode）”。**

1906 年，美国发明家 Lee de Forest 在 Fleming 设计的两个电极之间，加入了第三个“控制”电极。通过向“控制”电极施加正电荷，电流就能产生，反之，施加负电荷则阻止电子流动，即实现了开关动作。相比继电器的机械开关，真空管内没有要动的组件，也就意味着更少的磨损，更重要的是，它在 1s 内可以开关数千次。这些“三极真空管（Triode Vaccum Tubes）”成为了无线电、长途电话以及其他电子产品的基础，持续将近半个世纪。

第一次大规模使用真空管的计算机是“巨人 1 号（Colossus MK 1）”，是由工程师 Tommy Flowers 在 1943 年 12 月完成，在英国的“布莱切利园（Bletchly Park）”用于破解纳粹通信。而在此 2 年前，被称为“计算机科学之父”的 Alan Turing 也在布莱切利园做了台名为 “Bombe” 的机电装置。这台机器的设计目的是破解纳粹“英格玛（Enigma Codes）”通讯加密设备。但 “Bombe” 在严格意义上不算计算机。

巨人 1 号有 1600 个真空管，被称为是**第一个可编程的电子计算机**。编程的方法是将几百根电线插入插板，有点像老式电话交换机。

ENIAC - The Electronic Numerical Integrator and Calculator，即电子数值积分计算机，于 1946 年由 John Mauchly 和 J. Presper Eckert 在宾夕法尼亚大学完成建造。这才是世上第一个真正通用的可编程计算机。ENIAC 每秒可执行 5000 次十位数加减法。但因为真空管很多，故障率也很高，差不多运行半天就会出现一次故障。

到了 1950 年，真空管计算机达到了极限。美国空军的 AN/FSQ-7 计算机于 1955 年完成，是 “SAGE” 防空计算机系统的一部分。1947 年，贝尔实验室科学院 John Bardeen， Walter Brattain， William Shockley 发明了**晶体管**，也标志着一个全新的计算机时代诞生了！晶体管的关键材料是“半导体（Semiconductor）”，加上晶体管的固体形态、小体积的特点，降低故障率的同时也降低了计算机的制造成本，如 1957 年发布的 IBM 608，拥有 3000 个晶体管，每秒可执行 4500 次加法、80 次左右的乘除法。如今计算机里的晶体管已经小于 50 纳米，而一张纸的厚度约为 10 万纳米。

## 三、布尔逻辑和逻辑门

计算机为何使用二进制？与三进制、五进制等多状态相比，二进制可以降低信号区分的难度，另一个原因是有一个数学分支，专门处理“真”和“假”，它已经解决了所有法则和运算，叫做“布尔代数（Boolean Algebra）”。
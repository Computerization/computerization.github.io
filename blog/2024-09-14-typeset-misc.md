---
authors: rne
tags: [typeset]
---

# 关于排版

应社长要求，我来简单写一写排版要求规范相關內容。主要围绕学生会关于社团招新所发推文中的排版问题展开。

## 中英混排之断行

![](/img/blog/2024-09-14/qqquad.png)

第一眼看上去这张图的问题似乎在于知识的问号后面出现了极长的一段空白，造成了灰度的不平均。然而稍微仔细看看就会发现实际上是由于「Asclepius」无法被直接放入上一行。

然而，其实挤一挤就能放下了；如果挤不下也可以对单词应用断行算法，使它在中间断开。

![](/img/blog/2024-09-14/qqquad-rf.png)

```latex
\documentclass{standalone}
\makeatletter
  \def\ltj@stdmcfont{STSong}
  \def\ltj@stdyokojfm{eva/smpl,nstd}
\makeatother
\usepackage{luatexja}
\begin{document}
\vbox{\hsize=25\zw\parindent=0pt%
想要在危急时刻施予援手？想了解医学知识？
快来Asclepius急救医学社，我们旨在帮助更多的人提高急救意识，
科普有用的医学技巧，更有海龟汤，规则怪谈和定向越野赛，协助各位学以致用！
大量CAS时间和专业知识等你来领。我们诚邀你的加入！
}
\end{document}
```

另外一个隐藏的问题是，他在第一行第一个问号处使用了西文问号而非全角问号，这就导致若需占满行长只能对第二个全角问号插空。至于为什么这个排版引擎不调整kanjiskip我就不知道了。

## 挑战：窄行排版

![](/img/blog/2024-09-14/shlw.png)

这是另一个问题：超短行长導致的下饭效果。

实际上，对于如此小的行长，浏览器中的排版引擎基本上不可能在无人工干预下做的比较好，而即使是TeX也需要人工调整断行；特别是URL和西文长单词（因为Knuth-Plass算法是为了输出符合标准且人眼易读的断行结果設計的）。

![](/img/blog/2024-09-14/shlw-rf.png)

```tex
\catcode`@=11
  \def\ltj@stdmcfont{STSong}
  \def\ltj@stdyokojfm{eva/smpl,nstd}
\catcode`@=12
\input luatexja.sty
\pagewidth=13\zw
\pageheight=\numexpr 16*16\relax pt
\hoffset=-2.54cm
\voffset=-2.54cm
\vbox{\hsize=13\zw\parindent=0pt\baselineskip=16pt%
我们是世外信息化社，我们是一个长期在幕后工作的，以面向社团的知识性服务为主的，
一个小而精的CS社团。我们是世外唯一计算机工程相关的社团。
我们眼中的程序，不仅仅只是作为形式载体的代码，而是其背后的程序逻辑和思想；
是Algorithms造就了Compu\-ter Scientists，而不是代码，这是我们坚定的信念，
也是我们自称CS社团而不是编程社团的原因。也正是因此，我们有着程序设计交流的社团文化。\par
\bgroup\setbox0\hbox{官网\enspace}%
  \hbox to\hsize{\baselineskip=10pt\box0\vtop{\tt{https://computeriza{\break}tion.io}}}%
\egroup\vskip3.6pt
GitHub\enspace\tt{@Computerization}
}
\bye
```

注意因为LaTeX2e格式改动了很多东西，为了能干净地微调，我使用了plain-TeX。若有需要请使用LuaTeX编译之。

可见效果还是比较勉强。建议不要使用如此短的边距。

## 最后：争议

众所周知，如果中英混排的时候，在汉字（kanji）和西文之间插入适当大小的铅空效果才好。这在TeX中大部分的CJK支持宏集会自动帮你做这件事，然而直到目前，除支援Text Module Level 4的Google Chrome和Safari之外的浏览器还是不能自动插入xkanjiskip。

于是就有一些人认为在写作时，应手动插入一个空格。但这是一种错误的妥协。这些东西理应是由负责最终渲染的浏览器处理的。手动加空格不但是对浏览器中本就不成熟的排版引擎的纵容，更是对空格的滥用。

不过和这一篇学生会推文中体现出的种种问题比起来，加不加空格似乎也不算什么了。

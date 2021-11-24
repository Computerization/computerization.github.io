---
authors: alex-gu
tags: [algorithm]
---

# OI 部活动-网络流问题介绍

在今天 C 社 OI 部的活动中，我们先进行了破冰活动——自我介绍并交流有趣的算法知识。通过这独特的形式我们得以增进对彼此的了解，并为之后的合作打下基础。

之后，我们挑选了最感兴趣的网络流这一类算法问题进行详细的讲解。我们从网络流图的基本概念开始，例如**源，汇点**，**剩余容量**，**最大流**，**最小割** 等等。其中最为趣味的是**最小割**，其定义为删去若干条边使得某两点 $(u,v)$ 不互通，这若干条边边权和的最小值。

接下来通过不断优化算法，例如灵活运用 `Edmond-Karp` 动能算法（复杂度 $O(nm^2)$ ）， `Dinic` 算法（复杂度 $O(n^2m)$ ）和 `ISAP` 算法（复杂度 $O(n^2m)$ ，不需 BFS 多次）。此外还讲解了一个优美的定理：**最大流最小割定理**。这一定理在一些图论问题中有着有趣的应用：

<!-- truncate -->

## 例题

<question>

### \[清华集训 2012] 最小生成树

给定一个边带正权的连通无向图 $G=(V, E)$，其中 $N=|V|, M=|E|$，$N$ 个点从 $1$ 到 $N$ 依次编号，给定三个正整数 $u, v$ 和 $L(u\ne v)$，假设现在加入一条边权为 $L$ 的边 $(u, v)$，那么需要删掉最少多少条边，才能够使得这条边既可能出现在最小生成树上，也可能出现在最大生成树上？

数据范围： $N \le 2 \times 10^4, M \le 2 \times 10^5$

</question>

如果一条边 $(u, v, L)$ 一定出现在最小生成树上，那么需要满足：即使把边权 $< L$ 得所有边连上， $u, v$ 也不连通，那么就必须选择 $(u, v, L)$

把给定边的 $u, v$ 分别作为源汇点，原图中所有 $w < L$ 的边 $(u, v, w)$ 连入网络流，注意是**无向图**，所以反边初始容量为 $1$

最大生成树同理，重置一遍流再求一遍，然后和上一次的答案相加输出即可

```cpp
// #define ONLINE_JUDGE
#include <bits/stdc++.h>
using namespace std;
const int Inf = 0x3f3f3f3f;
typedef pair<int, int> pii;
typedef long long ll;
typedef std::string str;
typedef double db;
#define pbk push_back
#define mk_pr make_pair
#define elif else if
#define IL inline
#define IT(i, lim) for (int i = 1; i <= lim; ++i)
#define MST(x, k) memset(x, k, sizeof(x))
#define QMST(a, k, sz) memset(a, k, sizeof(int) * (sz + 2))
#ifndef ONLINE_JUDGE
#define DBG(x) std::cerr << #x << " = " << x << " ";
#define ETR std::cerr << endl;
#define DBG_S(k)                                                      \
    std::cerr << #k << " = " << std::bitset<8>(k) << " (" << k << ")" \
              << std::endl;
#else
#define DBG(x)
#define DBG_S(k)
#define ETR
#endif

template <class T>
void Mx(T &x, T y)
{
    x = x > y ? x : y;
}

template <class T>
void Mn(T &x, T y) { x = x < y ? x : y; }

inline void Read(const std::string &name = "a")
{
#ifndef ONLINE_JUDGE
    freopen((name + ".in").c_str(), "r", stdin);
    // freopen((name + ".out").c_str(), "w", stdout);
    freopen((name + ".log").c_str(), "w", stderr);
#endif
    ios::sync_with_stdio(0);
    cin.tie(0);
    cout.tie(0);
}

void Solve();

signed main()
{
    Read();
    Solve();
    return 0;
}

const int M = 2e5 + 5;
// const int p = ;
struct Ed
{
    int v, n, w;
    Ed(int v_ = 0, int n_ = 0, int w_ = 0) : v(v_), n(n_), w(w_){};
};

Ed e[M << 1];
int hd[M << 1], t_e = 1;
inline void Add(int u = 0, int v = 0, int w = 0)
{
    e[++t_e] = Ed(v, hd[u], w);
    hd[u] = t_e;
}

IL void Link(int u, int v, int w = 1)
{
    Add(u, v, w);
    Add(v, u, w);
}

int h[M];

IL bool Bfs(int s, int t)
{
    memset(h, 0, sizeof(h));
    queue<int> q;
    q.push(s);
    h[s] = 1;
    while (!q.empty())
    {
        int u = q.front();
        q.pop();
        for (int i = hd[u]; i; i = e[i].n)
        {
            int v = e[i].v;
            if (e[i].w && !h[v])
            {
                h[v] = h[u] + 1;
                q.push(v);
            }
        }
    }
    return h[t];
}

int Dfs(int u, int t, int i_f = Inf)
{
    if (u == t)
        return i_f;
    int tof = 0;
    for (int i = hd[u]; i && i_f; i = e[i].n)
    {
        int v = e[i].v;
        if (e[i].w && h[v] == h[u] + 1)
        {
            int cof = Dfs(v, t, min(e[i].w, i_f));
            if (!cof)
            {
                h[v] = -1;
                continue;
            }
            e[i].w -= cof;
            e[i ^ 1].w += cof;
            i_f -= cof;
            tof += cof;
        }
    }
    return tof;
}

IL int Dinic(int s, int t)
{
    int mx_f = 0;
    while (Bfs(s, t))
        mx_f += Dfs(s, t);
    return mx_f;
}

int u_[M], v_[M], w_[M];
void Clear()
{
    t_e = 1;
    MST(hd, 0);
}

void Solve()
{
    int n, m;
    cin >> n >> m;
    IT(i, m)
    cin >> u_[i] >> v_[i] >> w_[i];
    int s, t, L;
    cin >> s >> t >> L;
    IT(i, m)
    if (w_[i] < L)
        Link(u_[i], v_[i]);
    int ans = Dinic(s, t);
    Clear();
    IT(i, m)
    if (w_[i] > L)
        Link(u_[i], v_[i]);
    cout << ans + Dinic(s, t);
}
```

<question>

### \[SHOI2010] 最小生成树

给定一张无向图，要求边 $L_{a, b}$ 必须在 MST 中，每次操作可以选定一条边 $(u, v)$ 再将图中所有除这条边外的边的权值减少 $1$ ，求最少操作几次

数据范围： $n \le 500, m \le 800$

</question>

类似清华集训题目的做法，每次都选择一条边权小于等于 $L_{a, b}$ 的边 $(u, v, w)$ 操作，则操作 $L_{a, b} - w + 1$ 次后这条边就不比 $L_{a, b}$ 优了。另一种理解：每次选择其他边 $-1$ 相当于自己 $+1$

<question>

### \[ZJOI2009] 狼和羊的故事

给定 $n \times m$ 矩阵，每个方格可能是狼羊或空格子，求狼羊不相邻最少需要修建的篱笆数

数据范围： $n, m \le 100$

</question>

源点向狼连容量为 $\infin$ 的边，羊向汇点连容量为 $\infin$ 的边，所有点向上下左右连容量为 $1$ 的边，求解最小割即是答案

<question>

### \[SCOI2007] 蜥蜴

$r \times c$ 的矩阵每个位置有高度值 $h_{i, j}$ 。某些位置有蜥蜴。蜥蜴每跳动一次出发位置高度 $-1$ 。给定每次蜥蜴最大跳动欧几里得距离 $d$ 求有多少蜥蜴不能逃出矩阵

数据范围： $r, c \le 20, d \le 4, h\le 3$

</question>

只需拆点石柱，不必把蜥蜴单独拆点，源点向有蜥蜴的点 $u$ 连容量为 $1$ 的边（**不是** $\infin$ ），能够跳出去的点 $u'$ 向汇点连容量为 $\infin$ 的边， $u$ 和 $u'$ 之间连容量为 $h_{i, j}$ 的边

用平方避免实数运算

```cpp
#define IN(x) (x)
#define OUT(x) (x + r * c)

int C21(int x, int y) { return (x - 1) * c + y; }

#define POW2(x) (x * x)

int Dis(int x_1, int y_1, int x_2, int y_2) {
    return POW2((x_1 - x_2)) + POW2((y_1 - y_2));
}

void Solve() {
    Add();
    cin >> r >> c >> d;
    int s = 0, t = r * c * 2 + 1;
    IT(i, r) {
        str S;
        cin >> S;
        S = ' ' + S;
        IT(j, c) {
            int w = S[j] - '0';
            int u = C21(i, j);
            if (!w) continue;
            Link(IN(u), OUT(u), w);
            IT(k, r) {
                IT(l, c) {
                    if (Dis(i, j, k, l) <= d * d) {
                        int v = C21(k, l);
                        Link(OUT(u), IN(v), Inf);
                    }
                }
            }
            if (i - d < 1 || j - d < 1 || i + d > r || j + d > c) {
                Link(OUT(u), t, Inf);
            }
        }
    }
    int t_lizard = 0;
    IT(i, r) {
        IT(j, c) {
            char ch;
            cin >> ch;
            if (ch == 'L') {
                ++t_lizard;
                int u = C21(i, j);
                Link(s, IN(u), 1);
            }
        }
    }
    while (Bfs(s, t)) {
        mx_f += Dfs(s, t, Inf);
    }
    cout << t_lizard - mx_f;
}
```

最后我们还通过实战，讲述了如何使用网络流建模并解决一些经典问题，例如**二分图匹配问题，最小路径覆盖问题和最大权闭合子图问题**。其中尤为有趣的是**最大权闭合子图**问题

## 定义

如果一个点被选择了则后继必须被选择，那么称该图是**闭合**的

一个有向图，选择一个点就必须选择其后继点，且选择每个点有一个花费或者奖励。求总奖励最大值

## 解法

1. 源点向所有正权点连结一条容量为权值的边
2. 保留原图中所有的边，容量为正无穷
3. 所有负权点向汇点连结一条容量为权值绝对值的边

由于原图中的边全部是正无穷，**最小割只会割掉源点和正权点之间或负权点和汇点之间的边**

则原图的最大权闭合子图的点权和即为所有正权点权值之和减去建出的网络流图的最小割

<question>

### \[网络流 24 题] 太空飞行计划问题

[P2762](https://www.luogu.com.cn/problem/P2762)

</question>

- 模版题，要求输出选择点的方案
- 最后一次 BFS 后 `dep` 不为 $0$ 即是被选择/没有割掉的点，输出这些点即可

<question>

### \[ARC085C] MUL

[ARC085C](https://www.luogu.com.cn/problem/AT3672)

$n$ 个球编号 $1$ 到 $n$ ，每个球有价值 $w_i$ ，可以进行任意次操作，将所有编号为 $x$ 的倍数的球拿走，求最后剩下的球的最大总价值

数据范围： $n \le 100, |w_i| \le 10^9$

</question>

每个球向编号为其倍数的球连边，这样边数是 $O(n \log n)$ 级别的

将所有 $w_i < 0$ 的球的花费绝对值加和，然后反转关系连边，这样求出来的是能减少的花费的最大值，最后减一下得到答案

```cpp
void Solve()
{
    int n;
    cin >> n;
    int tot_cost = 0, tot_w = 0;
    int s = 0, t = n + 1;
    IT(i, n)
    {
        int w;
        cin >> w;
        tot_w += w;
        if (w < 0)
        {
            tot_cost += -w;
            Link(s, i, -w);
        }
        else
        {
            Link(i, t, w);
        }
        for (int j = 2; j * i <= n; ++j)
            Link(i, j * i, Inf);
    }
    int mx_reduce_cost = tot_cost - Dinic(s, t);
    cout << tot_w + mx_reduce_cost;
}
```

<question>

### Petya and Graph

[CF1082G](https://www.luogu.com.cn/problem/CF1082G)

定义图权 = 图中边权总和 − 图中点权总和（空图的图权 = 0），求 $n$ 个点 $m$ 条边的无向图最大权子图。

数据范围： $n, m \le 10^3$

</question>

一条边的奖励能被获得当且仅当两边的点都被选上

点连汇，边连源

```cpp
#define GOOD(i) (i)
#define BUYER(i) (i + n)
void Solve()
{
    int n, m;
    cin >> n >> m;
    int s = 0, t = n + m + 1;
    IT(i, n)
    {
        int p;
        cin >> p;
        Link(GOOD(i), t, p);
    }
    int ans = 0;
    IT(i, m)
    {
        int a, b, c;
        cin >> a >> b >> c;
        Link(s, BUYER(i), c);
        Link(BUYER(i), GOOD(a), Inf);
        Link(BUYER(i), GOOD(b), Inf);
        ans += c;
    }
    cout << ans - Dinic(s, t);
}
```

<question>

### \[TJOI2010] 电影迷

扩展最大权闭合子图问题，对于每一个限制可以花费一定代价 $w_i$ 删去

</question>

每个原图上的边容量不再是 $\infty$ 而是 $w_i$ ，其余不变求解即可

```cpp
void Solve()
{
    int n, m;
    cin >> n >> m;
    int s = 0, t = n + 1;
    int ans = 0;
    IT(i, n)
    {
        int w;
        cin >> w;
        if (w > 0)
        {
            ans += w;
            Link(s, i, w);
        }
        else
            Link(i, t, -w);
    }
    IT(i, m)
    {
        int u, v, w;
        cin >> u >> v >> w;
        Link(u, v, w);
    }
    cout << ans - Dinic(s, t);

```

我们每个人都给出了非常独特的想法与见解，给予了一道普通的算法题不一样的意义。OI 部的第一次活动很充实也很快乐。

"use strict";(self.webpackChunkcomputerization_website=self.webpackChunkcomputerization_website||[]).push([[2502],{4958:function(s,e,n){n.r(e),n.d(e,{assets:function(){return m},contentTitle:function(){return i},frontMatter:function(){return l},metadata:function(){return r},toc:function(){return c}});var a=n(308),t=n(4997);const l={authors:"alex-gu",tags:["algorithm"]},i="OI \u90e8\u6d3b\u52a8-\u7f51\u7edc\u6d41\u95ee\u9898\u4ecb\u7ecd",r={permalink:"/en/blog/2021/11/24/network-flow",source:"@site/blog/2021-11-24-network-flow.md",title:"OI \u90e8\u6d3b\u52a8-\u7f51\u7edc\u6d41\u95ee\u9898\u4ecb\u7ecd",description:"\u5728\u4eca\u5929 C \u793e OI \u90e8\u7684\u6d3b\u52a8\u4e2d\uff0c\u6211\u4eec\u5148\u8fdb\u884c\u4e86\u7834\u51b0\u6d3b\u52a8\u2014\u2014\u81ea\u6211\u4ecb\u7ecd\u5e76\u4ea4\u6d41\u6709\u8da3\u7684\u7b97\u6cd5\u77e5\u8bc6\u3002\u901a\u8fc7\u8fd9\u72ec\u7279\u7684\u5f62\u5f0f\u6211\u4eec\u5f97\u4ee5\u589e\u8fdb\u5bf9\u5f7c\u6b64\u7684\u4e86\u89e3\uff0c\u5e76\u4e3a\u4e4b\u540e\u7684\u5408\u4f5c\u6253\u4e0b\u57fa\u7840\u3002",date:"2021-11-24T00:00:00.000Z",formattedDate:"November 24, 2021",tags:[{label:"algorithm",permalink:"/en/blog/tags/algorithm"}],readingTime:12.97,hasTruncateMarker:!0,authors:[{name:"\u987e\u6dc7\u5143 Alex",title:"Member of '23 Algorithm team",url:"https://github.com/phoeniiix1203",imageURL:"https://github.com/phoeniiix1203.png",key:"alex-gu"}],frontMatter:{authors:"alex-gu",tags:["algorithm"]},unlisted:!1,nextItem:{title:"Livestock Lineup",permalink:"/en/blog/2020/12/02/algorithm5"}},m={authorsImageUrls:[void 0]},c=[];function h(s){const e=Object.assign({p:"p",strong:"strong",span:"span",math:"math",semantics:"semantics",mrow:"mrow",mo:"mo",mi:"mi",annotation:"annotation",code:"code",msup:"msup",mn:"mn"},(0,t.ah)(),s.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.p,{children:"\u5728\u4eca\u5929 C \u793e OI \u90e8\u7684\u6d3b\u52a8\u4e2d\uff0c\u6211\u4eec\u5148\u8fdb\u884c\u4e86\u7834\u51b0\u6d3b\u52a8\u2014\u2014\u81ea\u6211\u4ecb\u7ecd\u5e76\u4ea4\u6d41\u6709\u8da3\u7684\u7b97\u6cd5\u77e5\u8bc6\u3002\u901a\u8fc7\u8fd9\u72ec\u7279\u7684\u5f62\u5f0f\u6211\u4eec\u5f97\u4ee5\u589e\u8fdb\u5bf9\u5f7c\u6b64\u7684\u4e86\u89e3\uff0c\u5e76\u4e3a\u4e4b\u540e\u7684\u5408\u4f5c\u6253\u4e0b\u57fa\u7840\u3002"}),"\n",(0,a.jsxs)(e.p,{children:["\u4e4b\u540e\uff0c\u6211\u4eec\u6311\u9009\u4e86\u6700\u611f\u5174\u8da3\u7684\u7f51\u7edc\u6d41\u8fd9\u4e00\u7c7b\u7b97\u6cd5\u95ee\u9898\u8fdb\u884c\u8be6\u7ec6\u7684\u8bb2\u89e3\u3002\u6211\u4eec\u4ece\u7f51\u7edc\u6d41\u56fe\u7684\u57fa\u672c\u6982\u5ff5\u5f00\u59cb\uff0c\u4f8b\u5982",(0,a.jsx)(e.strong,{children:"\u6e90\uff0c\u6c47\u70b9"}),"\uff0c",(0,a.jsx)(e.strong,{children:"\u5269\u4f59\u5bb9\u91cf"}),"\uff0c",(0,a.jsx)(e.strong,{children:"\u6700\u5927\u6d41"}),"\uff0c",(0,a.jsx)(e.strong,{children:"\u6700\u5c0f\u5272"})," \u7b49\u7b49\u3002\u5176\u4e2d\u6700\u4e3a\u8da3\u5473\u7684\u662f",(0,a.jsx)(e.strong,{children:"\u6700\u5c0f\u5272"}),"\uff0c\u5176\u5b9a\u4e49\u4e3a\u5220\u53bb\u82e5\u5e72\u6761\u8fb9\u4f7f\u5f97\u67d0\u4e24\u70b9 ",(0,a.jsx)(e.span,{className:"math math-inline",children:(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsxs)(e.mrow,{children:[(0,a.jsx)(e.mo,{stretchy:"false",children:"("}),(0,a.jsx)(e.mi,{children:"u"}),(0,a.jsx)(e.mo,{separator:"true",children:","}),(0,a.jsx)(e.mi,{children:"v"}),(0,a.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"(u,v)"})]})})}),(0,a.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(e.span,{className:"mopen",children:"("}),(0,a.jsx)(e.span,{className:"mord mathnormal",children:"u"}),(0,a.jsx)(e.span,{className:"mpunct",children:","}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,a.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"v"}),(0,a.jsx)(e.span,{className:"mclose",children:")"})]})})]})})," \u4e0d\u4e92\u901a\uff0c\u8fd9\u82e5\u5e72\u6761\u8fb9\u8fb9\u6743\u548c\u7684\u6700\u5c0f\u503c\u3002"]}),"\n",(0,a.jsxs)(e.p,{children:["\u63a5\u4e0b\u6765\u901a\u8fc7\u4e0d\u65ad\u4f18\u5316\u7b97\u6cd5\uff0c\u4f8b\u5982\u7075\u6d3b\u8fd0\u7528 ",(0,a.jsx)(e.code,{children:"Edmond-Karp"})," \u52a8\u80fd\u7b97\u6cd5\uff08\u590d\u6742\u5ea6 ",(0,a.jsx)(e.span,{className:"math math-inline",children:(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsxs)(e.mrow,{children:[(0,a.jsx)(e.mi,{children:"O"}),(0,a.jsx)(e.mo,{stretchy:"false",children:"("}),(0,a.jsx)(e.mi,{children:"n"}),(0,a.jsxs)(e.msup,{children:[(0,a.jsx)(e.mi,{children:"m"}),(0,a.jsx)(e.mn,{children:"2"})]}),(0,a.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"O(nm^2)"})]})})}),(0,a.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"1.0641em",verticalAlign:"-0.25em"}}),(0,a.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,a.jsx)(e.span,{className:"mopen",children:"("}),(0,a.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,a.jsxs)(e.span,{className:"mord",children:[(0,a.jsx)(e.span,{className:"mord mathnormal",children:"m"}),(0,a.jsx)(e.span,{className:"msupsub",children:(0,a.jsx)(e.span,{className:"vlist-t",children:(0,a.jsx)(e.span,{className:"vlist-r",children:(0,a.jsx)(e.span,{className:"vlist",style:{height:"0.8141em"},children:(0,a.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,a.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,a.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,a.jsx)(e.span,{className:"mord mtight",children:"2"})})]})})})})})]}),(0,a.jsx)(e.span,{className:"mclose",children:")"})]})})]})})," \uff09\uff0c ",(0,a.jsx)(e.code,{children:"Dinic"})," \u7b97\u6cd5\uff08\u590d\u6742\u5ea6 ",(0,a.jsx)(e.span,{className:"math math-inline",children:(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsxs)(e.mrow,{children:[(0,a.jsx)(e.mi,{children:"O"}),(0,a.jsx)(e.mo,{stretchy:"false",children:"("}),(0,a.jsxs)(e.msup,{children:[(0,a.jsx)(e.mi,{children:"n"}),(0,a.jsx)(e.mn,{children:"2"})]}),(0,a.jsx)(e.mi,{children:"m"}),(0,a.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"O(n^2m)"})]})})}),(0,a.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"1.0641em",verticalAlign:"-0.25em"}}),(0,a.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,a.jsx)(e.span,{className:"mopen",children:"("}),(0,a.jsxs)(e.span,{className:"mord",children:[(0,a.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,a.jsx)(e.span,{className:"msupsub",children:(0,a.jsx)(e.span,{className:"vlist-t",children:(0,a.jsx)(e.span,{className:"vlist-r",children:(0,a.jsx)(e.span,{className:"vlist",style:{height:"0.8141em"},children:(0,a.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,a.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,a.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,a.jsx)(e.span,{className:"mord mtight",children:"2"})})]})})})})})]}),(0,a.jsx)(e.span,{className:"mord mathnormal",children:"m"}),(0,a.jsx)(e.span,{className:"mclose",children:")"})]})})]})})," \uff09\u548c ",(0,a.jsx)(e.code,{children:"ISAP"})," \u7b97\u6cd5\uff08\u590d\u6742\u5ea6 ",(0,a.jsx)(e.span,{className:"math math-inline",children:(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsxs)(e.mrow,{children:[(0,a.jsx)(e.mi,{children:"O"}),(0,a.jsx)(e.mo,{stretchy:"false",children:"("}),(0,a.jsxs)(e.msup,{children:[(0,a.jsx)(e.mi,{children:"n"}),(0,a.jsx)(e.mn,{children:"2"})]}),(0,a.jsx)(e.mi,{children:"m"}),(0,a.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"O(n^2m)"})]})})}),(0,a.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"1.0641em",verticalAlign:"-0.25em"}}),(0,a.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,a.jsx)(e.span,{className:"mopen",children:"("}),(0,a.jsxs)(e.span,{className:"mord",children:[(0,a.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,a.jsx)(e.span,{className:"msupsub",children:(0,a.jsx)(e.span,{className:"vlist-t",children:(0,a.jsx)(e.span,{className:"vlist-r",children:(0,a.jsx)(e.span,{className:"vlist",style:{height:"0.8141em"},children:(0,a.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,a.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,a.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,a.jsx)(e.span,{className:"mord mtight",children:"2"})})]})})})})})]}),(0,a.jsx)(e.span,{className:"mord mathnormal",children:"m"}),(0,a.jsx)(e.span,{className:"mclose",children:")"})]})})]})})," \uff0c\u4e0d\u9700 BFS \u591a\u6b21\uff09\u3002\u6b64\u5916\u8fd8\u8bb2\u89e3\u4e86\u4e00\u4e2a\u4f18\u7f8e\u7684\u5b9a\u7406\uff1a",(0,a.jsx)(e.strong,{children:"\u6700\u5927\u6d41\u6700\u5c0f\u5272\u5b9a\u7406"}),"\u3002\u8fd9\u4e00\u5b9a\u7406\u5728\u4e00\u4e9b\u56fe\u8bba\u95ee\u9898\u4e2d\u6709\u7740\u6709\u8da3\u7684\u5e94\u7528\uff1a"]})]})}e.default=function(s={}){const{wrapper:e}=Object.assign({},(0,t.ah)(),s.components);return e?(0,a.jsx)(e,Object.assign({},s,{children:(0,a.jsx)(h,s)})):h(s)}},4997:function(s,e,n){n.d(e,{Zo:function(){return r},ah:function(){return l}});var a=n(6677);const t=a.createContext({});function l(s){const e=a.useContext(t);return a.useMemo((()=>"function"==typeof s?s(e):{...e,...s}),[e,s])}const i={};function r({components:s,children:e,disableParentContext:n}){let r;return r=n?"function"==typeof s?s({}):s||i:l(s),a.createElement(t.Provider,{value:r},e)}}}]);
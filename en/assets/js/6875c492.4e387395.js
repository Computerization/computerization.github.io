"use strict";(self.webpackChunkcomputerization_website=self.webpackChunkcomputerization_website||[]).push([[8610],{3061:function(e,t,n){n.d(t,{Z:function(){return r}});n(9953);var a=n(9338),s=n(6478),i=n(1874);function r(e){var t=e.metadata,n=t.previousPage,r=t.nextPage;return(0,i.jsxs)("nav",{className:"pagination-nav","aria-label":(0,a.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[n&&(0,i.jsx)(s.Z,{permalink:n,title:(0,i.jsx)(a.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer Entries"})}),r&&(0,i.jsx)(s.Z,{permalink:r,title:(0,i.jsx)(a.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older Entries"}),isNext:!0})]})}},9557:function(e,t,n){n.d(t,{Z:function(){return r}});n(9953);var a=n(7464),s=n(6732),i=n(1874);function r(e){var t=e.items,n=e.component,r=void 0===n?s.Z:n;return(0,i.jsx)(i.Fragment,{children:t.map((function(e){var t=e.content;return(0,i.jsx)(a.n,{content:t,children:(0,i.jsx)(r,{children:(0,i.jsx)(t,{})})},t.metadata.permalink)}))})}},6983:function(e,t,n){n.r(t),n.d(t,{default:function(){return b}});n(9953);var a=n(4923),s=n(9338),i=n(4496),r=n(1535),l=n(5234),o=n(7672),c=n(87),u=n(3061),d=n(6006),g=n(9557),h=n(7823),p=n(6699),m=n(1874);function x(e){var t,n=(t=(0,i.c)().selectMessage,function(e){return t(e,(0,s.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:e}))});return(0,s.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:n(e.count),tagName:e.label})}function j(e){var t=x(e.tag);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(r.d,{title:t}),(0,m.jsx)(d.Z,{tag:"blog_tags_posts"})]})}function f(e){var t=e.tag,n=e.items,a=e.sidebar,i=e.listMetadata,r=x(t);return(0,m.jsxs)(c.Z,{sidebar:a,children:[t.unlisted&&(0,m.jsx)(h.Z,{}),(0,m.jsxs)("header",{className:"margin-bottom--xl",children:[(0,m.jsx)(p.Z,{as:"h1",children:r}),(0,m.jsx)(o.Z,{href:t.allTagsPath,children:(0,m.jsx)(s.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page",children:"View All Tags"})})]}),(0,m.jsx)(g.Z,{items:n}),(0,m.jsx)(u.Z,{metadata:i})]})}function b(e){return(0,m.jsxs)(r.FG,{className:(0,a.Z)(l.k.wrapper.blogPages,l.k.page.blogTagPostListPage),children:[(0,m.jsx)(j,Object.assign({},e)),(0,m.jsx)(f,Object.assign({},e))]})}},7823:function(e,t,n){n.d(t,{Z:function(){return h}});n(9953);var a=n(4923),s=n(9338),i=n(2021),r=n(1874);function l(){return(0,r.jsx)(s.Z,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function o(){return(0,r.jsx)(s.Z,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function c(){return(0,r.jsx)(i.Z,{children:(0,r.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var u=n(5234),d=n(7396);function g(e){var t=e.className;return(0,r.jsx)(d.Z,{type:"caution",title:(0,r.jsx)(l,{}),className:(0,a.Z)(t,u.k.common.unlistedBanner),children:(0,r.jsx)(o,{})})}function h(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c,{}),(0,r.jsx)(g,Object.assign({},e))]})}},2383:function(e,t,n){n.d(t,{Z:function(){return r}});n(9953);var a=n(1713),s=n(1874);function i(e){var t=e.children;return(0,s.jsx)("p",{children:(0,s.jsx)("div",{className:"alert alert--info",children:t})})}var r=Object.assign({},a.Z,{question:function(e){return(0,s.jsx)(i,Object.assign({},e))}})}}]);
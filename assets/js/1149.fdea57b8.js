"use strict";(self.webpackChunkcomputerization_website=self.webpackChunkcomputerization_website||[]).push([[1149],{87:function(e,t,r){r.d(t,{Z:function(){return P}});var a=r(762),n=r(6677),i=r(4923),s=r(4091),l=r(6844),o=r(7672),c=r(9338),m=r(7646),u=r(6845);function d(e){var t=(0,m.TH)().pathname;return(0,n.useMemo)((function(){return e.filter((function(e){return function(e,t){return!(e.unlisted&&!(0,u.Mg)(e.permalink,t))}(e,t)}))}),[e,t])}var h={sidebar:"sidebar_mt_U",sidebarItemTitle:"sidebarItemTitle_vyaH",sidebarItemList:"sidebarItemList_oCym",sidebarItem:"sidebarItem_LLUv",sidebarItemLink:"sidebarItemLink_GmEI",sidebarItemLinkActive:"sidebarItemLinkActive_iiIL"},g=r(308);function v(e){var t=e.sidebar,r=d(t.items);return(0,g.jsx)("aside",{className:"col col--3",children:(0,g.jsxs)("nav",{className:(0,i.Z)(h.sidebar,"thin-scrollbar"),"aria-label":(0,c.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"}),children:[(0,g.jsx)("div",{className:(0,i.Z)(h.sidebarItemTitle,"margin-bottom--md"),children:t.title}),(0,g.jsx)("ul",{className:(0,i.Z)(h.sidebarItemList,"clean-list"),children:r.map((function(e){return(0,g.jsx)("li",{className:h.sidebarItem,children:(0,g.jsx)(o.Z,{isNavLink:!0,to:e.permalink,className:h.sidebarItemLink,activeClassName:h.sidebarItemLinkActive,children:e.title})},e.permalink)}))})]})})}var f=r(8793);function p(e){var t=d(e.sidebar.items);return(0,g.jsx)("ul",{className:"menu__list",children:t.map((function(e){return(0,g.jsx)("li",{className:"menu__list-item",children:(0,g.jsx)(o.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active",children:e.title})},e.permalink)}))})}function x(e){return(0,g.jsx)(f.Zo,{component:p,props:e})}function b(e){var t=e.sidebar,r=(0,l.i)();return null!=t&&t.items.length?"mobile"===r?(0,g.jsx)(x,{sidebar:t}):(0,g.jsx)(v,{sidebar:t}):null}var j=["sidebar","toc","children"];function P(e){var t=e.sidebar,r=e.toc,n=e.children,l=(0,a.Z)(e,j),o=t&&t.items.length>0;return(0,g.jsx)(s.Z,Object.assign({},l,{children:(0,g.jsx)("div",{className:"container margin-vert--lg",children:(0,g.jsxs)("div",{className:"row",children:[(0,g.jsx)(b,{sidebar:t}),(0,g.jsx)("main",{className:(0,i.Z)("col",{"col--7":o,"col--9 col--offset-1":!o}),itemScope:!0,itemType:"https://schema.org/Blog",children:n}),r&&(0,g.jsx)("div",{className:"col col--2",children:r})]})})}))}},6732:function(e,t,r){r.d(t,{Z:function(){return A}});r(6677);var a=r(4923),n=r(7464),i=r(5045),s=r(308);function l(e){var t,r,a=e.children,l=e.className,o=(0,n.C)(),c=o.frontMatter,m=o.assets,u=o.metadata.description,d=(0,i.C)().withBaseUrl,h=null!=(t=m.image)?t:c.image,g=null!=(r=c.keywords)?r:[];return(0,s.jsxs)("article",{className:l,itemProp:"blogPost",itemScope:!0,itemType:"https://schema.org/BlogPosting",children:[u&&(0,s.jsx)("meta",{itemProp:"description",content:u}),h&&(0,s.jsx)("link",{itemProp:"image",href:d(h,{absolute:!0})}),g.length>0&&(0,s.jsx)("meta",{itemProp:"keywords",content:g.join(",")}),a]})}var o=r(7672),c={title:"title_xxlG"};function m(e){var t=e.className,r=(0,n.C)(),i=r.metadata,l=r.isBlogPostPage,m=i.permalink,u=i.title,d=l?"h1":"h2";return(0,s.jsx)(d,{className:(0,a.Z)(c.title,t),itemProp:"headline",children:l?u:(0,s.jsx)(o.Z,{itemProp:"url",to:m,children:u})})}var u=r(9338),d=r(4496),h={container:"container_nlEL"};function g(e){var t,r=e.readingTime,a=(t=(0,d.c)().selectMessage,function(e){var r=Math.ceil(e);return t(r,(0,u.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:r}))});return(0,s.jsx)(s.Fragment,{children:a(r)})}function v(e){var t=e.date,r=e.formattedDate;return(0,s.jsx)("time",{dateTime:t,itemProp:"datePublished",children:r})}function f(){return(0,s.jsx)(s.Fragment,{children:" \xb7 "})}function p(e){var t=e.className,r=(0,n.C)().metadata,i=r.date,l=r.formattedDate,o=r.readingTime;return(0,s.jsxs)("div",{className:(0,a.Z)(h.container,"margin-vert--md",t),children:[(0,s.jsx)(v,{date:i,formattedDate:l}),void 0!==o&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(f,{}),(0,s.jsx)(g,{readingTime:o})]})]})}function x(e){return e.href?(0,s.jsx)(o.Z,Object.assign({},e)):(0,s.jsx)(s.Fragment,{children:e.children})}function b(e){var t=e.author,r=e.className,n=t.name,i=t.title,l=t.url,o=t.imageURL,c=t.email,m=l||c&&"mailto:"+c||void 0;return(0,s.jsxs)("div",{className:(0,a.Z)("avatar margin-bottom--sm",r),children:[o&&(0,s.jsx)(x,{href:m,className:"avatar__photo-link",children:(0,s.jsx)("img",{className:"avatar__photo",src:o,alt:n,itemProp:"image"})}),n&&(0,s.jsxs)("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person",children:[(0,s.jsx)("div",{className:"avatar__name",children:(0,s.jsx)(x,{href:m,itemProp:"url",children:(0,s.jsx)("span",{itemProp:"name",children:n})})}),i&&(0,s.jsx)("small",{className:"avatar__subtitle",itemProp:"description",children:i})]})]})}var j={authorCol:"authorCol_uvGe",imageOnlyAuthorRow:"imageOnlyAuthorRow_tmaF",imageOnlyAuthorCol:"imageOnlyAuthorCol_mfD5"};function P(e){var t=e.className,r=(0,n.C)(),i=r.metadata.authors,l=r.assets;if(0===i.length)return null;var o=i.every((function(e){return!e.name}));return(0,s.jsx)("div",{className:(0,a.Z)("margin-top--md margin-bottom--sm",o?j.imageOnlyAuthorRow:"row",t),children:i.map((function(e,t){var r;return(0,s.jsx)("div",{className:(0,a.Z)(!o&&"col col--6",o?j.imageOnlyAuthorCol:j.authorCol),children:(0,s.jsx)(b,{author:Object.assign({},e,{imageURL:null!=(r=l.authorsImageUrls[t])?r:e.imageURL})})},t)}))})}function N(){return(0,s.jsxs)("header",{children:[(0,s.jsx)(m,{}),(0,s.jsx)(p,{}),(0,s.jsx)(P,{})]})}var _=r(2813),k=r(790);function Z(e){var t=e.children,r=e.className,i=(0,n.C)().isBlogPostPage;return(0,s.jsx)("div",{id:i?_.blogPostContainerID:void 0,className:(0,a.Z)("markdown",r),itemProp:"articleBody",children:(0,s.jsx)(k.Z,{children:t})})}var I=r(9156),w=r(6294),C=r(762),T=["blogPostTitle"];function L(){return(0,s.jsx)("b",{children:(0,s.jsx)(u.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read More"})})}function y(e){var t=e.blogPostTitle,r=(0,C.Z)(e,T);return(0,s.jsx)(o.Z,Object.assign({"aria-label":(0,u.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t})},r,{children:(0,s.jsx)(L,{})}))}var F={blogPostFooterDetailsFull:"blogPostFooterDetailsFull_w83N"};function M(){var e=(0,n.C)(),t=e.metadata,r=e.isBlogPostPage,i=t.tags,l=t.title,o=t.editUrl,c=t.hasTruncateMarker,m=!r&&c,u=i.length>0;return u||m||o?(0,s.jsxs)("footer",{className:(0,a.Z)("row docusaurus-mt-lg",r&&F.blogPostFooterDetailsFull),children:[u&&(0,s.jsx)("div",{className:(0,a.Z)("col",{"col--9":m}),children:(0,s.jsx)(w.Z,{tags:i})}),r&&o&&(0,s.jsx)("div",{className:"col margin-top--sm",children:(0,s.jsx)(I.Z,{editUrl:o})}),m&&(0,s.jsx)("div",{className:(0,a.Z)("col text--right",{"col--3":u}),children:(0,s.jsx)(y,{blogPostTitle:l,to:t.permalink})})]}):null}function A(e){var t=e.children,r=e.className,i=(0,n.C)().isBlogPostPage?void 0:"margin-bottom--xl";return(0,s.jsxs)(l,{className:(0,a.Z)(i,r),children:[(0,s.jsx)(N,{}),(0,s.jsx)(Z,{children:t}),(0,s.jsx)(M,{})]})}},7464:function(e,t,r){r.d(t,{C:function(){return o},n:function(){return l}});var a=r(6677),n=r(5864),i=r(308),s=a.createContext(null);function l(e){var t=e.children,r=e.content,n=e.isBlogPostPage,l=function(e){var t=e.content,r=e.isBlogPostPage;return(0,a.useMemo)((function(){return{metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:r}}),[t,r])}({content:r,isBlogPostPage:void 0!==n&&n});return(0,i.jsx)(s.Provider,{value:l,children:t})}function o(){var e=(0,a.useContext)(s);if(null===e)throw new n.i6("BlogPostProvider");return e}},4496:function(e,t,r){r.d(t,{c:function(){return c}});var a=r(6677),n=r(9176),i=["zero","one","two","few","many","other"];function s(e){return i.filter((function(t){return e.includes(t)}))}var l={locale:"en",pluralForms:s(["one","other"]),select:function(e){return 1===e?"one":"other"}};function o(){var e=(0,n.Z)().i18n.currentLocale;return(0,a.useMemo)((function(){try{return t=e,r=new Intl.PluralRules(t),{locale:t,pluralForms:s(r.resolvedOptions().pluralCategories),select:function(e){return r.select(e)}}}catch(a){return console.error('Failed to use Intl.PluralRules for locale "'+e+'".\nDocusaurus will fallback to the default (English) implementation.\nError: '+a.message+"\n"),l}var t,r}),[e])}function c(){var e=o();return{selectMessage:function(t,r){return function(e,t,r){var a=e.split("|");if(1===a.length)return a[0];a.length>r.pluralForms.length&&console.error("For locale="+r.locale+", a maximum of "+r.pluralForms.length+" plural forms are expected ("+r.pluralForms.join(",")+"), but the message contains "+a.length+": "+e);var n=r.select(t),i=r.pluralForms.indexOf(n);return a[Math.min(i,a.length-1)]}(r,t,e)}}}}}]);
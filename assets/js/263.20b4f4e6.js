"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[263],{2213:function(e,t,a){a.d(t,{Z:function(){return Z}});var r=a(3366),l=a(7294),n=a(6010),i=a(8585),o=a(3699),s=a(7325),m="sidebar_TMXw",c="sidebarItemTitle_V4zb",u="sidebarItemList_uHd5",d="sidebarItem_spIe",g="sidebarItemLink_eqrF",p="sidebarItemLinkActive_XZSJ";function h(e){var t=e.sidebar;return l.createElement("aside",{className:"col col--3"},l.createElement("nav",{className:(0,n.Z)(m,"thin-scrollbar"),"aria-label":(0,s.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,n.Z)(c,"margin-bottom--md")},t.title),l.createElement("ul",{className:(0,n.Z)(u,"clean-list")},t.items.map((function(e){return l.createElement("li",{key:e.permalink,className:d},l.createElement(o.Z,{isNavLink:!0,to:e.permalink,className:g,activeClassName:p},e.title))})))))}var v=a(3086);function E(e){var t=e.sidebar;return l.createElement("ul",{className:"menu__list"},t.items.map((function(e){return l.createElement("li",{key:e.permalink,className:"menu__list-item"},l.createElement(o.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title))})))}function b(e){return l.createElement(v.Zo,{component:E,props:e})}var f=a(3488);function _(e){var t=e.sidebar,a=(0,f.i)();return null!=t&&t.items.length?"mobile"===a?l.createElement(b,{sidebar:t}):l.createElement(h,{sidebar:t}):null}var N=["sidebar","toc","children"];function Z(e){var t=e.sidebar,a=e.toc,o=e.children,s=(0,r.Z)(e,N),m=t&&t.items.length>0;return l.createElement(i.Z,s,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},l.createElement(_,{sidebar:t}),l.createElement("main",{className:(0,n.Z)("col",{"col--7":m,"col--9 col--offset-1":!m}),itemScope:!0,itemType:"http://schema.org/Blog"},o),a&&l.createElement("div",{className:"col col--2"},a))))}},8510:function(e,t,a){a.d(t,{Z:function(){return i}});var r=a(7294),l=a(7325),n=a(8115);function i(e){var t=e.metadata,a=t.previousPage,i=t.nextPage;return r.createElement("nav",{className:"pagination-nav","aria-label":(0,l.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},a&&r.createElement(n.Z,{permalink:a,title:r.createElement(l.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),i&&r.createElement(n.Z,{permalink:i,title:r.createElement(l.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}},9346:function(e,t,a){a.d(t,{Z:function(){return x}});var r=a(7294),l=a(6010),n=a(7325),i=a(3699),o=a(9524),s=a(3777),m=a(3905),c=a(2120),u=a(7462),d=a(3366),g="iconEdit_dcUD",p=["className"];function h(e){var t=e.className,a=(0,d.Z)(e,p);return r.createElement("svg",(0,u.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,l.Z)(g,t),"aria-hidden":"true"},a),r.createElement("g",null,r.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}var v=a(3702);function E(e){var t=e.editUrl;return r.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:v.k.common.editThisPage},r.createElement(h,null),r.createElement(n.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}var b="blogPostTitle_rzP5",f="blogPostData_Zg1s",_="blogPostDetailsFull_h6_j",N=a(6363),Z="tags_XVD_",k="tag_JSN8";function P(e){var t=e.tags;return r.createElement(r.Fragment,null,r.createElement("b",null,r.createElement(n.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),r.createElement("ul",{className:(0,l.Z)(Z,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return r.createElement("li",{key:a,className:k},r.createElement(N.Z,{label:t,permalink:a}))}))))}function w(e){return e.href?r.createElement(i.Z,e):r.createElement(r.Fragment,null,e.children)}function T(e){var t=e.author,a=t.name,l=t.title,n=t.url,i=t.imageURL,o=t.email,s=n||o&&"mailto:"+o||void 0;return r.createElement("div",{className:"avatar margin-bottom--sm"},i&&r.createElement(w,{href:s,className:"avatar__photo-link"},r.createElement("img",{className:"avatar__photo",src:i,alt:a})),a&&r.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},r.createElement("div",{className:"avatar__name"},r.createElement(w,{href:s,itemProp:"url"},r.createElement("span",{itemProp:"name"},a))),l&&r.createElement("small",{className:"avatar__subtitle",itemProp:"description"},l)))}var I="authorCol_FlmR",y="imageOnlyAuthorRow_trpF",F="imageOnlyAuthorCol_S2np";function L(e){var t=e.authors,a=e.assets;if(0===t.length)return null;var n=t.every((function(e){return!e.name}));return r.createElement("div",{className:(0,l.Z)("margin-top--md margin-bottom--sm",n?y:"row")},t.map((function(e,t){var i;return r.createElement("div",{className:(0,l.Z)(!n&&"col col--6",n?F:I),key:t},r.createElement(T,{author:Object.assign({},e,{imageURL:null!=(i=a.authorsImageUrls[t])?i:e.imageURL})}))})))}function x(e){var t,a,u=(a=(0,s.c)().selectMessage,function(e){var t=Math.ceil(e);return a(t,(0,n.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),d=(0,o.C)().withBaseUrl,g=e.children,p=e.frontMatter,h=e.assets,v=e.metadata,N=e.truncated,Z=e.isBlogPostPage,k=void 0!==Z&&Z,w=v.date,T=v.formattedDate,I=v.permalink,y=v.tags,F=v.readingTime,x=v.title,R=v.editUrl,A=v.authors,C=null!=(t=h.image)?t:p.image,M=!k&&N,U=y.length>0,D=k?"h1":"h2";return r.createElement("article",{className:k?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},r.createElement("header",null,r.createElement(D,{className:b,itemProp:"headline"},k?x:r.createElement(i.Z,{itemProp:"url",to:I},x)),r.createElement("div",{className:(0,l.Z)(f,"margin-vert--md")},r.createElement("time",{dateTime:w,itemProp:"datePublished"},T),void 0!==F&&r.createElement(r.Fragment,null," \xb7 ",u(F))),r.createElement(L,{authors:A,assets:h})),C&&r.createElement("meta",{itemProp:"image",content:d(C,{absolute:!0})}),r.createElement("div",{id:k?m.blogPostContainerID:void 0,className:"markdown",itemProp:"articleBody"},r.createElement(c.Z,null,g)),(U||N)&&r.createElement("footer",{className:(0,l.Z)("row docusaurus-mt-lg",k&&_)},U&&r.createElement("div",{className:(0,l.Z)("col",{"col--9":M})},r.createElement(P,{tags:y})),k&&R&&r.createElement("div",{className:"col margin-top--sm"},r.createElement(E,{editUrl:R})),M&&r.createElement("div",{className:(0,l.Z)("col text--right",{"col--3":U})},r.createElement(i.Z,{to:v.permalink,"aria-label":(0,n.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:x})},r.createElement("b",null,r.createElement(n.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},8115:function(e,t,a){a.d(t,{Z:function(){return i}});var r=a(7294),l=a(6010),n=a(3699);function i(e){var t=e.permalink,a=e.title,i=e.subLabel,o=e.isNext;return r.createElement(n.Z,{className:(0,l.Z)("pagination-nav__link",o?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},i&&r.createElement("div",{className:"pagination-nav__sublabel"},i),r.createElement("div",{className:"pagination-nav__label"},a))}},6363:function(e,t,a){a.d(t,{Z:function(){return m}});var r=a(7294),l=a(6010),n=a(3699),i="tag_hD8n",o="tagRegular_D6E_",s="tagWithCount_i0QQ";function m(e){var t=e.permalink,a=e.label,m=e.count;return r.createElement(n.Z,{href:t,className:(0,l.Z)(i,m?s:o)},a,m&&r.createElement("span",null,m))}},3777:function(e,t,a){a.d(t,{c:function(){return m}});var r=a(7294),l=a(9962),n=["zero","one","two","few","many","other"];function i(e){return n.filter((function(t){return e.includes(t)}))}var o={locale:"en",pluralForms:i(["one","other"]),select:function(e){return 1===e?"one":"other"}};function s(){var e=(0,l.Z)().i18n.currentLocale;return(0,r.useMemo)((function(){try{return t=e,a=new Intl.PluralRules(t),{locale:t,pluralForms:i(a.resolvedOptions().pluralCategories),select:function(e){return a.select(e)}}}catch(r){return console.error('Failed to use Intl.PluralRules for locale "'+e+'".\nDocusaurus will fallback to the default (English) implementation.\nError: '+r.message+"\n"),o}var t,a}),[e])}function m(){var e=s();return{selectMessage:function(t,a){return function(e,t,a){var r=e.split("|");if(1===r.length)return r[0];r.length>a.pluralForms.length&&console.error("For locale="+a.locale+", a maximum of "+a.pluralForms.length+" plural forms are expected ("+a.pluralForms+"), but the message contains "+r.length+": "+e);var l=a.select(t),n=a.pluralForms.indexOf(l);return r[Math.min(n,r.length-1)]}(a,t,e)}}}}}]);
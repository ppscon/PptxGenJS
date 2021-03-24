(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{104:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),d=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=d(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=d(n),m=r,b=s["".concat(i,".").concat(m)]||s[m]||p[m]||a;return n?o.a.createElement(b,l(l({ref:t},u),{},{components:n})):o.a.createElement(b,l({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},161:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/readme_banner-e26bf94749ec2591bf104fafe42390bf.png"},67:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return d}));var r=n(3),o=n(8),a=(n(0),n(104)),i={id:"demos",title:"Demos"},l={unversionedId:"demos",id:"demos",isDocsHomePage:!1,title:"Demos",description:"There are several online demos available plus thousands of examples under PptxGenjs/demos.",source:"@site/docs/demos.mdx",slug:"/demos",permalink:"/PptxGenJS/docs/demos",version:"current",lastUpdatedBy:"Brent Ely",lastUpdatedAt:1616466680,formattedLastUpdatedAt:"3/22/2021",sidebar:"docs",previous:{title:"Quick Start Guide",permalink:"/PptxGenJS/docs/quick-start"},next:{title:"Creating a Presentation",permalink:"/PptxGenJS/docs/usage-pres-create"}},c=[{value:"Live Demo",id:"live-demo",children:[]},{value:"JSFiddle Demo",id:"jsfiddle-demo",children:[]},{value:"Full Demo",id:"full-demo",children:[]},{value:"But Wait, There&#39;s More",id:"but-wait-theres-more",children:[]}],u={toc:c};function d(e){var t=e.components,i=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,i,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"There are several online demos available plus thousands of examples under PptxGenjs/demos."),Object(a.b)("h2",{id:"live-demo"},"Live Demo"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function liveDemo(props) {\n    function demo() {\n        let pptx = new PptxGenJS();\n        let slide = pptx.addSlide();\n\n        slide.addText(\n            \"BONJOUR - CIAO - GUTEN TAG - HELLO - HOLA - NAMASTE - \u4f60\u597d\",\n            {\n                x:0, y:1, w:'100%', h:2,\n                align:'center',\n                color:'0088CC',\n                fill:'F1F1F1',\n                fontSize:24\n            }\n        );\n\n        pptx.writeFile('PptxGenJS-Demo');\n    }\n\n    return (\n        <div>\n            <button type=\"button\" onClick={()=>demo()}>Generate PowerPoint</button>\n        </div>\n    );\n}\n")),Object(a.b)("h2",{id:"jsfiddle-demo"},"JSFiddle Demo"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://jsfiddle.net/gitbrent/L1uctxm0/"},"jsFiddle demo"))),Object(a.b)("h2",{id:"full-demo"},"Full Demo"),Object(a.b)("p",null,"Want to see more? Check out the online demo of every feature (generates about 75 pages of various feature demos)"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://gitbrent.github.io/PptxGenJS/demo/"},"Library Demo"))),Object(a.b)("h2",{id:"but-wait-theres-more"},"But Wait, There's More"),Object(a.b)("p",null,"Add the ability to generate presentations to your project today!"),Object(a.b)("p",null,"Check out the ",Object(a.b)("a",{parentName:"p",href:"https://github.com/gitbrent/PptxGenJS/tree/master/demos"},"demos")," folder in the GitHub project.\nThere are over 3,000 lines of demo code that produce almost 80 slides worth of API features that you can modify."),Object(a.b)("p",null,Object(a.b)("img",{alt:"PptxGenJS PowerPoint Demo Slides",src:n(161).default})))}d.isMDXComponent=!0}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{104:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var a=n(3),o=n(7),r=(n(0),n(186)),i={},p={unversionedId:"api/start/rpc.custom",id:"api/start/rpc.custom",isDocsHomePage:!1,title:"rpc.custom",description:"title: Custom RPC",source:"@site/docs/api/start/rpc.custom.md",slug:"/api/start/rpc.custom",permalink:"/api/start/rpc.custom",editUrl:"https://github.com/crustio/docs/edit/master/docs/api/start/rpc.custom.md",version:"current",sidebar:"reference",previous:{title:"Extending types",permalink:"/api/start/types.extend"},next:{title:"Type creation",permalink:"/api/start/types.create"}},c=[{value:"title: Custom RPC",id:"title-custom-rpc",children:[]},{value:"Custom definitions",id:"custom-definitions",children:[]},{value:"RPC options in detail",id:"rpc-options-in-detail",children:[]},{value:"Type creation",id:"type-creation",children:[]}],l={toc:c};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"title-custom-rpc"},"title: Custom RPC"),Object(r.b)("p",null,"In the previous section we looked at how to override the types the node uses and how to define extra custom types. You can also define custom RPC methods and we will cover that here."),Object(r.b)("h2",{id:"custom-definitions"},"Custom definitions"),Object(r.b)("p",null,"RPCs are exposed as a method on a specific module. This means that once available: you can call any rpc via ",Object(r.b)("inlineCode",{parentName:"p"},"api.rpc.<module>.<method>(...params[])"),". For example, you can define a ",Object(r.b)("inlineCode",{parentName:"p"},"firstModule_testMethod")," on the Rust node and if correctly defined it will be callable via ",Object(r.b)("inlineCode",{parentName:"p"},"api.rpc.firstModule.testMethod(..."),"). To supply custom RPC methods, you provide an ",Object(r.b)("inlineCode",{parentName:"p"},"rpc")," object on the options to the API."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"...\nconst api = await ApiPromise.create({\n  rpc: {\n    firstModule: {\n      testMethod: {\n        description: 'Just a test method',\n        params: [\n          {\n            name: 'index',\n            type: 'u64'\n          },\n          {\n            name: 'at',\n            type: 'Hash',\n            isOptional: true\n          }\n        ],\n        type: 'Balance'\n      },\n      anotherMethod: { ... },\n      ...\n    },\n    anotherModule: { ... },\n    ...\n  },\n  ...\n});\n")),Object(r.b)("p",null,"In the above example we have defined a new method, which is now available on the API as ",Object(r.b)("inlineCode",{parentName:"p"},"api.rpc.firstModule.testMethod(index: u64, at?: Hash) => Promise<Balance>"),". For the optional parameters, we added ",Object(r.b)("inlineCode",{parentName:"p"},"isOptional: true")," alongside the ",Object(r.b)("inlineCode",{parentName:"p"},"name")," & ",Object(r.b)("inlineCode",{parentName:"p"},"type")," in the parameter definition."),Object(r.b)("p",null,"Even if you define the method it will only appear on the API if it appears in the list returned by ",Object(r.b)("inlineCode",{parentName:"p"},"api.rpc.rpc.methods()"),", which is the list of known RPCs the node exposes. So when making changes to the node you should double-check that it does announce the RPC method and that it conforms to the format ",Object(r.b)("inlineCode",{parentName:"p"},"<module>_<method>"),".  For example ",Object(r.b)("inlineCode",{parentName:"p"},"foo_bar")," is a valid name whereas ",Object(r.b)("inlineCode",{parentName:"p"},"bar")," is not. I.E. Methods which do not contain both a ",Object(r.b)("inlineCode",{parentName:"p"},"module")," and ",Object(r.b)("inlineCode",{parentName:"p"},"method")," component won't be detected and cannot be decorated. If in doubt, follow the conventions in Substrate master."),Object(r.b)("h2",{id:"rpc-options-in-detail"},"RPC options in detail"),Object(r.b)("p",null,"While the above example should be self-explanatory, let's quickly walk through the structure. Under the ",Object(r.b)("inlineCode",{parentName:"p"},"rpc: { ... }")," key in the options, keys are the name of the module exposing the RPC. So given 2 modules ",Object(r.b)("inlineCode",{parentName:"p"},"firstModule")," & ",Object(r.b)("inlineCode",{parentName:"p"},"testModule"),", and the top-level structure would be as follows:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"...\nconst api = await ApiPromise.create({\n  rpc: {\n    firstModule: { ... },\n    testModule: { ... }\n  }\n});\n")),Object(r.b)("p",null,"Inside each module definition, the key is the name of the RPC method. In the example, we defined a ",Object(r.b)("inlineCode",{parentName:"p"},"testMethod")," on ",Object(r.b)("inlineCode",{parentName:"p"},"firstModule"),". A method definition should provide a ",Object(r.b)("inlineCode",{parentName:"p"},"description")," of the method, an array of type definitions for the parameters named ",Object(r.b)("inlineCode",{parentName:"p"},"params"),", and define the ",Object(r.b)("inlineCode",{parentName:"p"},"type")," of the result of the RPC call."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"params")," is an array of type definitions. In the example, contains fields for ",Object(r.b)("inlineCode",{parentName:"p"},"name"),", ",Object(r.b)("inlineCode",{parentName:"p"},"type")," and an optional flag ",Object(r.b)("inlineCode",{parentName:"p"},"isOptional")," that indicates that the field is not required when making the call. (And example of this use would be in cases such as ",Object(r.b)("inlineCode",{parentName:"p"},"state.getStorage(key, blockHash?)")," where the last param is optional)"),Object(r.b)("h2",{id:"type-creation"},"Type creation"),Object(r.b)("p",null,"While the API always converts all the inputs into the underlying type required by the operation, be it for RPC, query or transaction, in some cases you may want to ",Object(r.b)("a",{parentName:"p",href:"/api/start/types.create"},"create an instance of a type")," yourself."))}s.isMDXComponent=!0},186:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),s=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},d=function(e){var t=s(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,b=d["".concat(i,".").concat(m)]||d[m]||u[m]||r;return n?o.a.createElement(b,p(p({ref:t},l),{},{components:n})):o.a.createElement(b,p({ref:t},l))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var l=2;l<r;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);
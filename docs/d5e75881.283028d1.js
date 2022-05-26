(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{164:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return p}));var a=t(3),i=t(7),r=(t(0),t(186)),o={title:"Transaction subscriptions"},s={unversionedId:"api/start/api.tx.subs",id:"api/start/api.tx.subs",isDocsHomePage:!1,title:"Transaction subscriptions",description:"Previously we sent simple transactions using the api.tx endpoints, in this section we will extend that to monitor the actual transactions for inclusion and also extend the monitoring for transaction events.",source:"@site/docs/api/start/api.tx.subs.md",slug:"/api/start/api.tx.subs",permalink:"/api/start/api.tx.subs",editUrl:"https://github.com/crustio/docs/edit/master/docs/api/start/api.tx.subs.md",version:"current",sidebar:"reference",previous:{title:"Keyring",permalink:"/api/start/keyring"},next:{title:"Complex transactions",permalink:"/api/start/api.tx.wrap"}},c=[{value:"Transaction inclusion",id:"transaction-inclusion",children:[]},{value:"Transaction events",id:"transaction-events",children:[]},{value:"Payment information",id:"payment-information",children:[]},{value:"Complex transactions",id:"complex-transactions",children:[]}],l={toc:c};function p(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Previously we sent simple transactions using the ",Object(r.b)("inlineCode",{parentName:"p"},"api.tx")," endpoints, in this section we will extend that to monitor the actual transactions for inclusion and also extend the monitoring for transaction events."),Object(r.b)("h2",{id:"transaction-inclusion"},"Transaction inclusion"),Object(r.b)("p",null,"To send a transaction and then waiting until it has been included in a block, we will use a subscription interface instead of just waiting for the transaction pool addition to yield the extrinsic hash. For the simplest form, we can do the following -"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"...\n\n// Create alice (carry-over from the keyring section)\nconst alice = keyring.addFromUri('//Alice');\n\n// Make a transfer from Alice to BOB, waiting for inclusion\nconst unsub = await api.tx.balances\n  .transfer(BOB, 12345)\n  .signAndSend(alice, (result) => {\n    console.log(`Current status is ${result.status}`);\n\n    if (result.status.isInBlock) {\n      console.log(`Transaction included at blockHash ${result.status.asInBlock}`);\n    } else if (result.status.isFinalized) {\n      console.log(`Transaction finalized at blockHash ${result.status.asFinalized}`);\n      unsub();\n    }\n  });\n")),Object(r.b)("p",null,"As per all previous subscriptions, the transaction subscription returns in ",Object(r.b)("inlineCode",{parentName:"p"},"unsub()")," and the actual method has a subscription callback. The ",Object(r.b)("inlineCode",{parentName:"p"},"result")," object has 2 parts, ",Object(r.b)("inlineCode",{parentName:"p"},"events")," (to to covered in the next section) and the ",Object(r.b)("inlineCode",{parentName:"p"},"status")," enum."),Object(r.b)("p",null,"When the ",Object(r.b)("inlineCode",{parentName:"p"},"status")," enum is in ",Object(r.b)("inlineCode",{parentName:"p"},"Finalized")," state (checked via ",Object(r.b)("inlineCode",{parentName:"p"},"isFinalized"),"), the underlying value contains the block hash of the block where the transaction has been finalized. ",Object(r.b)("inlineCode",{parentName:"p"},"Finalized")," will follow ",Object(r.b)("inlineCode",{parentName:"p"},"InBlock"),", which is the block where the transaction has been included. ",Object(r.b)("inlineCode",{parentName:"p"},"InBlock")," does not mean the block is finalized, but rather applies to the transaction state, where ",Object(r.b)("inlineCode",{parentName:"p"},"Finalized")," means that the transaction cannot be forked off the chain."),Object(r.b)("h2",{id:"transaction-events"},"Transaction events"),Object(r.b)("p",null,"Any transaction will emit events, as a bare minimum this will always be either a ",Object(r.b)("inlineCode",{parentName:"p"},"system.ExtrinsicSuccess")," or ",Object(r.b)("inlineCode",{parentName:"p"},"system.ExtrinsicFailed")," event for the specific transaction. These provide the overall execution result for the transaction, i.e. execution has succeeded or failed."),Object(r.b)("p",null,"Depending on the transaction sent, some other events may however be emitted, for instance for a ",Object(r.b)("inlineCode",{parentName:"p"},"balances.transfer")," this could include one or more of ",Object(r.b)("inlineCode",{parentName:"p"},"Transfer"),", ",Object(r.b)("inlineCode",{parentName:"p"},"NewAccount")," or ",Object(r.b)("inlineCode",{parentName:"p"},"ReapedAccount"),", as defined in the ",Object(r.b)("a",{parentName:"p",href:"/crust/events#balances"},"substrate balances event defaults"),"."),Object(r.b)("p",null,"To display or act on these events, we can do the following -"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"...\n// Make a transfer from Alice to BOB, waiting for inclusion\nconst unsub = await api.tx.balances\n  .transfer(BOB, 12345)\n  .signAndSend(alice, ({ events = [], status }) => {\n    console.log(`Current status is ${status.type}`);\n\n    if (status.isFinalized) {\n      console.log(`Transaction included at blockHash ${status.asFinalized}`);\n\n      // Loop through Vec<EventRecord> to display all events\n      events.forEach(({ phase, event: { data, method, section } }) => {\n        console.log(`\\t' ${phase}: ${section}.${method}:: ${data}`);\n      });\n\n      unsub();\n    }\n  });\n")),Object(r.b)("p",null,"Be aware that when a transaction status is ",Object(r.b)("inlineCode",{parentName:"p"},"isFinalized"),", it means it is included, but it may still have failed - for instance if you try to send a larger amount that you have free, the transaction is included in a block, however from a end-user perspective the transaction failed since the transfer did not occur. In these cases a ",Object(r.b)("inlineCode",{parentName:"p"},"system.ExtrinsicFailed")," event will be available in the events array."),Object(r.b)("h2",{id:"payment-information"},"Payment information"),Object(r.b)("p",null,"The Polkadot/Substrate RPC endpoints exposes weight/payment information that takes an encoded extrinsic and calculates the on-chain weight fees for it. A wrapper for this is available on the tx itself, taking exactly the same parameters as you would pass to a normal ",Object(r.b)("inlineCode",{parentName:"p"},".signAndSend")," operation, specifically ",Object(r.b)("inlineCode",{parentName:"p"},".paymentInfo(sender, <any options>)"),". To expand on our previous example -"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"// construct a transaction\nconst transfer = api.tx.balances.transfer(BOB, 12345);\n\n// retrieve the payment info\nconst { partialFee, weight } = await transfer.paymentInfo(alice);\n\nconsole.log(`transaction will have a weight of ${weight}, with ${partialFee.toHuman()} weight fees`);\n\n// send the tx\ntransfer.signAndSend(alice, ({ events = [], status }) => { ... });\n")),Object(r.b)("h2",{id:"complex-transactions"},"Complex transactions"),Object(r.b)("p",null,"In many cases transactions can carry quite complex information, be it for passing objects or proposing changes. In the next section we will take a dive ",Object(r.b)("a",{parentName:"p",href:"/api/start/api.tx.wrap"},"into complex transactions, including those wrapped for sudo"),"."))}p.isMDXComponent=!0},186:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var a=t(0),i=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=i.a.createContext({}),p=function(e){var n=i.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=p(e.components);return i.a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},b=i.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(t),b=a,m=u["".concat(o,".").concat(b)]||u[b]||d[b]||r;return t?i.a.createElement(m,s(s({ref:n},l),{},{components:t})):i.a.createElement(m,s({ref:n},l))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=b;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<r;l++)o[l]=t[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);
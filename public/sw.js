if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,r)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let t={};const c=e=>a(e,i),o={module:{uri:i},exports:t,require:c};s[i]=Promise.all(n.map((e=>o[e]||c(e)))).then((e=>(r(...e),t)))}}define(["./workbox-1846d813"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/169.253485d6a124306d.js",revision:"fA1nHM08DHapT8kU5E_f3"},{url:"/_next/static/chunks/306-28c115e5689e6c61.js",revision:"fA1nHM08DHapT8kU5E_f3"},{url:"/_next/static/chunks/346-52737dd681e0e83a.js",revision:"fA1nHM08DHapT8kU5E_f3"},{url:"/_next/static/chunks/4072747d-3caccc061c6b81d3.js",revision:"fA1nHM08DHapT8kU5E_f3"},{url:"/_next/static/chunks/434-94c3f1ea6fad13f8.js",revision:"fA1nHM08DHapT8kU5E_f3"},{url:"/_next/static/chunks/469-832f9976d7fcc361.js",revision:"fA1nHM08DHapT8kU5E_f3"},{url:"/_next/static/chunks/606.8106bc31aa2b48a0.js",revision:"fA1nHM08DHapT8kU5E_f3"},{url:"/_next/static/chunks/636-7f6d8c137eb6d0fe.js",revision:"fA1nHM08DHapT8kU5E_f3"},{url:"/_next/static/chunks/690-06e9b4d2598bec7a.js",revision:"fA1nHM08DHapT8kU5E_f3"},{url:"/_next/static/chunks/726-571742bee5d46d51.js",revision:"fA1nHM08DHapT8kU5E_f3"},{url:"/_next/static/chunks/811.85f421ab4af06aa0.js",revision:"fA1nHM08DHapT8kU5E_f3"},{url:"/_next/static/chunks/894.78d1c6bfd3ad2c07.js",revision:"fA1nHM08DHapT8kU5E_f3"},{url:"/_next/static/chunks/cafc52b5.efd8437c88fe3f80.js",revision:"fA1nHM08DHapT8kU5E_f3"},{url:"/_next/static/chunks/framework-bb5c596eafb42b22.js",revision:"fA1nHM08DHapT8kU5E_f3"},{url:"/_next/static/chunks/main-f729f6fcb788a758.js",revision:"fA1nHM08DHapT8kU5E_f3"},{url:"/_next/static/chunks/pages/_error-5ea477d15194794a.js",revision:"fA1nHM08DHapT8kU5E_f3"},{url:"/_next/static/chunks/pages/currycounter-3d91cc420f51795b.js",revision:"fA1nHM08DHapT8kU5E_f3"},{url:"/_next/static/chunks/pages/curryshop-9137fb2dc9dffe49.js",revision:"fA1nHM08DHapT8kU5E_f3"},{url:"/_next/static/chunks/pages/faq-efd511b76bd003e1.js",revision:"fA1nHM08DHapT8kU5E_f3"},{url:"/_next/static/chunks/pages/ftxholders-ccc3a0b2ef69390d.js",revision:"fA1nHM08DHapT8kU5E_f3"},{url:"/_next/static/chunks/pages/index-f2eb81a94789ffca.js",revision:"fA1nHM08DHapT8kU5E_f3"},{url:"/_next/static/chunks/pages/lab-d306da86470fdd21.js",revision:"fA1nHM08DHapT8kU5E_f3"},{url:"/_next/static/chunks/pages/legal/nft-ownership-agreement-12228ea4edfa562c.js",revision:"fA1nHM08DHapT8kU5E_f3"},{url:"/_next/static/chunks/pages/legal/terms-and-conditions-bfb6e6928e7e66f1.js",revision:"fA1nHM08DHapT8kU5E_f3"},{url:"/_next/static/chunks/pages/mixology-1dcc1088d559ba78.js",revision:"fA1nHM08DHapT8kU5E_f3"},{url:"/_next/static/chunks/pages/roadmap-fb7c09ac6bdc9eb4.js",revision:"fA1nHM08DHapT8kU5E_f3"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"fA1nHM08DHapT8kU5E_f3"},{url:"/_next/static/chunks/webpack-e881c0b438bd7e0c.js",revision:"fA1nHM08DHapT8kU5E_f3"},{url:"/_next/static/css/5f0e049197fceb98.css",revision:"fA1nHM08DHapT8kU5E_f3"},{url:"/_next/static/fA1nHM08DHapT8kU5E_f3/_buildManifest.js",revision:"fA1nHM08DHapT8kU5E_f3"},{url:"/_next/static/fA1nHM08DHapT8kU5E_f3/_middlewareManifest.js",revision:"fA1nHM08DHapT8kU5E_f3"},{url:"/_next/static/fA1nHM08DHapT8kU5E_f3/_ssgManifest.js",revision:"fA1nHM08DHapT8kU5E_f3"},{url:"/assets/curry-logo.png",revision:"3afc4a7c99c367f532cf03b1d0b797e7"},{url:"/assets/currycounter/background-mobile.mp4",revision:"ba85f868d03ae4a9335d88355081c7ec"},{url:"/assets/currycounter/background.mp4",revision:"be9fc61c54475525beecd6028abad617"},{url:"/assets/currycounter/curry-brand.png",revision:"46de8665bbf6f5119c0ea913f3ad9c2a"},{url:"/assets/curryshop/gcf-claim-banner.png",revision:"44721051d235ff9e3853b2f2bda970d1"},{url:"/assets/curryshop/gcf-claim.png",revision:"362ed9abb7772ddc8f4ff60408dd2b85"},{url:"/assets/curryshop/how-it-works.MOV",revision:"a59cdf95fdacb6332e599c7e8988882f"},{url:"/assets/curryshop/nf3-basketball-box.png",revision:"46de8665bbf6f5119c0ea913f3ad9c2a"},{url:"/assets/curryshop/nf3-general-mint-banner.png",revision:"0fdfcd352a2e7dcd4c80cb308bab6595"},{url:"/assets/curryshop/nf3-mintlist-general-mint.svg",revision:"bd781e8b0e616f201f783ba2bfb8bd61"},{url:"/assets/curryshop/nf3-mintlist-mint-banner.png",revision:"0fdfcd352a2e7dcd4c80cb308bab6595"},{url:"/assets/curryshop/serum-box.png",revision:"15575fc5c423eed37c4fff68d98cf7a6"},{url:"/assets/curryshop/serum-general-mint-banner.png",revision:"98034d3ef89a0e8f4ab6d3712e591e6f"},{url:"/assets/curryshop/serum-mintlist-general-mint.png",revision:"15575fc5c423eed37c4fff68d98cf7a6"},{url:"/assets/curryshop/serum-mintlist-mint-banner.png",revision:"98034d3ef89a0e8f4ab6d3712e591e6f"},{url:"/assets/curryshop/serumtypes/1.png",revision:"70eb12db48133cee974a85b5b40bf9b1"},{url:"/assets/curryshop/serumtypes/10.png",revision:"a8402103f376a236ccf82b938c947f84"},{url:"/assets/curryshop/serumtypes/11.png",revision:"93706d30bdd780b57b5e71bb69e875b2"},{url:"/assets/curryshop/serumtypes/2.png",revision:"e06502009eb14d7130c9c8dba9aa4ffb"},{url:"/assets/curryshop/serumtypes/3.png",revision:"baf3a38eb0fc3ae389d561b2f5e597ba"},{url:"/assets/curryshop/serumtypes/4.png",revision:"31e95b1b92f76aa6513154aa074c3e90"},{url:"/assets/curryshop/serumtypes/5.png",revision:"8fb2465c9c4a50899d541e52d8dc6882"},{url:"/assets/curryshop/serumtypes/6.png",revision:"b40ad6c04e941dad1e683151c1e4142c"},{url:"/assets/curryshop/serumtypes/7.png",revision:"17031c6752a731dc285e97ae4004d7fc"},{url:"/assets/curryshop/serumtypes/8.png",revision:"4d7dcca672facda526f8f351805fea13"},{url:"/assets/curryshop/serumtypes/9.png",revision:"5989d4477a7ed43cf4a4418eba057fb7"},{url:"/assets/curryshop/serumtypes/broken-history.png",revision:"9840f1a5f3ae0c775fa47e18d1579bd5"},{url:"/assets/curryshop/serumtypes/chibi-dinos.png",revision:"55f7d28ffe463d5a0348e506463f9cc5"},{url:"/assets/curryshop/serumtypes/curry-brand.png",revision:"9548611c3486d8906bb62effa6682aff"},{url:"/assets/curryshop/serumtypes/cyberkongz.png",revision:"fd1dd74554534d0eaadd92becd6a2487"},{url:"/assets/curryshop/serumtypes/default.png",revision:"15575fc5c423eed37c4fff68d98cf7a6"},{url:"/assets/curryshop/serumtypes/flow.png",revision:"6e9f6e5014f38ffa6814fc93b8cea185"},{url:"/assets/curryshop/serumtypes/hape.png",revision:"686529f2d55f0e879eb668b114ea8391"},{url:"/assets/curryshop/serumtypes/smilesss.png",revision:"d537c7dc78d56dee54cfb1d512ab945d"},{url:"/assets/curryshop/serumtypes/the-lab.png",revision:"0ed8a933246cd95e9649128db8dd9dc6"},{url:"/assets/curryshop/serumtypes/unanimous.png",revision:"19ff142586fa38142559f73892e4edc3"},{url:"/assets/curryshop/serumtypes/under-armour.png",revision:"ab8509c2e2bf1d933826cf18fd49fb81"},{url:"/assets/curryshop/serumtypes/warp.png",revision:"7632a31bb799118a0d37f4bab1726e8e"},{url:"/assets/discord.svg",revision:"3fb029f04c20c6711248bd7e43adec52"},{url:"/assets/home/artist.png",revision:"c90d8911a152a8e4f350b8b5855b4760"},{url:"/assets/home/basketball.png",revision:"cb76554b41064ffc94e72849e1e3375a"},{url:"/assets/home/bg1-mobile.png",revision:"176e43f034c0aa3f388df557c1f93d92"},{url:"/assets/home/bg1.png",revision:"bd5b04ace4ba006acc8b22512a2abdd6"},{url:"/assets/home/bg2-mobile.png",revision:"14e9b7114ad743eefbd5739f06e7e1cf"},{url:"/assets/home/bg2.png",revision:"497907bb4939722c8f21d1b082babef2"},{url:"/assets/home/bg3-mobile.png",revision:"b4737453fc9d3522ac15914d48835daf"},{url:"/assets/home/bg3.png",revision:"6c2c8ed526f1bca3c8e654469990e033"},{url:"/assets/home/howitworks/nf3-basketball.png",revision:"46de8665bbf6f5119c0ea913f3ad9c2a"},{url:"/assets/home/howitworks/serum.png",revision:"15575fc5c423eed37c4fff68d98cf7a6"},{url:"/assets/home/img1.png",revision:"44ed50df3a70abe9081da66b669c9458"},{url:"/assets/home/img2.png",revision:"afa40269f09c973a1a39e0a839b31eab"},{url:"/assets/home/img3.png",revision:"cb76554b41064ffc94e72849e1e3375a"},{url:"/assets/home/img4.png",revision:"a9be30437e4e0baab56ffb4737d55994"},{url:"/assets/home/logo/chibi.png",revision:"741906b9a1aad07fa06ce13ffbe473a5"},{url:"/assets/home/logo/cyberkong.gif",revision:"167612db7702f8cac8557e475140ad01"},{url:"/assets/home/logo/ftx.png",revision:"eb4aee11c6b89b489d906266b7f2a3f2"},{url:"/assets/home/logo/hape.png",revision:"0a9d2cec108b43d45bf8152917b0ad3b"},{url:"/assets/home/logo/smilesss.png",revision:"a530d00795a1bab23c0578258ccc8209"},{url:"/assets/home/serum.png",revision:"2f5f64669d48c564edec1f113c509ef1"},{url:"/assets/home/video1.mp4",revision:"eb9b78d9e201805b0b5193af07c8b655"},{url:"/assets/home/video2.mp4",revision:"6e77277075edd9495bc4c2b7caea2863"},{url:"/assets/metamask.png",revision:"e09379ba1b231ca55c8edf2eeafe9c25"},{url:"/assets/mixology/background-mobile.mp4",revision:"fa60027c3b8dbe0c509a8d3efcaa526c"},{url:"/assets/mixology/background.mp4",revision:"44627a35b4b3145e54802e804d83e940"},{url:"/assets/mixology/background1.png",revision:"afef3af281cb8dd6cc921b70de2d7146"},{url:"/assets/mixology/basketball.png",revision:"a2107929fd04defb0012a95835eb7512"},{url:"/assets/mixology/howitworks/step1.mp4",revision:"6e77277075edd9495bc4c2b7caea2863"},{url:"/assets/mixology/howitworks/step2.gif",revision:"8bc47654152580f2444e8142ec489be5"},{url:"/assets/mixology/howitworks/step3.png",revision:"7d1f977ec9f7d3e3e5fb2215fa151bbd"},{url:"/assets/mixology/howitworks/step4.gif",revision:"490c4e44e7af8c2b6cb3db3600acea92"},{url:"/assets/mixology/mobile/step-complete.svg",revision:"de29ade6ea40d7adb77289daae50c0ff"},{url:"/assets/mixology/mobile/step-non-complete.svg",revision:"7db7ffce997cec256ac2e745366a0203"},{url:"/assets/mixology/mutant.png",revision:"2f3661e1c8d9e8cf6504bc8bbf93f14d"},{url:"/assets/mixology/serum.png",revision:"4426d8a54e5a1d25f64d76de3dc81a52"},{url:"/assets/nft-items/basketball.png",revision:"36d92babe7ac9b2398e5e7b863103e0d"},{url:"/assets/nft-items/decentraland.png",revision:"183c76d47f90156ba8939c9ab30ed054"},{url:"/assets/nft-items/galagames.png",revision:"b96fe90312112a8248d3d7d7ca798ec0"},{url:"/assets/nft-items/mutant.png",revision:"9972262ed41dc28958aab0ddbd638b39"},{url:"/assets/nft-items/rkl.png",revision:"dc2c61c70d625de7300e8b88231239e6"},{url:"/assets/nft-items/sandbox.png",revision:"f2563f6604516c05ef0bc7ae24ee8864"},{url:"/assets/nft-items/serum.png",revision:"a9a7d3042a5ad5cca5492a5362a998fd"},{url:"/assets/roadmap/all-about-community.png",revision:"6607b3455e0c20661e1cb0ecdab6fe0a"},{url:"/assets/roadmap/background-mobile.png",revision:"b814ff0fc5f43ba3347b1c2c25681aad"},{url:"/assets/roadmap/background.png",revision:"1dcf358d36bd8889fea73063a6bbf78f"},{url:"/assets/roadmap/deserve-mintlist.png",revision:"b661b56b0eaa530dbc9af062d0475bbc"},{url:"/assets/roadmap/gcf.png",revision:"369d9998b6dd6ed2cb51dbfcd35ac3a3"},{url:"/assets/roadmap/interoperable-avatars.png",revision:"b672064f0fda43bdbe9c042a615f5eb7"},{url:"/assets/roadmap/metaverse-partner-goods.png",revision:"ec25fea2a76a0a68bc3df3b13fbf31ef"},{url:"/assets/roadmap/mutate-game.png",revision:"98034d3ef89a0e8f4ab6d3712e591e6f"},{url:"/assets/roadmap/nft-meets-nf3.png",revision:"0fdfcd352a2e7dcd4c80cb308bab6595"},{url:"/assets/roadmap/physical-2974-shoes.png",revision:"be511c02f4576c221c519daaf66ab9c5"},{url:"/assets/roadmap/plug-and-play-digital-wearables.png",revision:"6f4705a8b4bbf99b224658fd58aff12d"},{url:"/assets/teams/boston-celtics.png",revision:"49a3e7caf11e17233485d0a4884da505"},{url:"/assets/teams/chicago-bulls.png",revision:"e1f3bbe13ba7576296794ae905f60b39"},{url:"/assets/thelab/change-name.svg",revision:"9b2e236624154de243d4d0c542c90a3d"},{url:"/assets/thelab/download.svg",revision:"fabc89c5c96092707d889a878a90a0f0"},{url:"/assets/thelab/opensea.svg",revision:"402a4c8e565d4f4f398c517d63a6b7a6"},{url:"/assets/thelab/rkl-shoe.png",revision:"ee3eab3c2febffd57b7cd228ac664cfe"},{url:"/assets/wallet/coinbase.png",revision:"4c4f88a301d51391a34606a7fbe63819"},{url:"/assets/wallet/metamask.png",revision:"3124751b586e4ae50a7553a74dc18d23"},{url:"/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/favicon.png",revision:"3afc4a7c99c367f532cf03b1d0b797e7"},{url:"/fonts/NeuePlak/Monotype  - Neue Plak Text Black.ttf",revision:"b99e118d2824fc4d17fd08307c546e2e"},{url:"/fonts/NeuePlak/Monotype  - Neue Plak Text Bold.ttf",revision:"40c9ccca4abe4c1280b39ddfb7875e34"},{url:"/fonts/NeuePlak/Monotype  - Neue Plak Text Light.ttf",revision:"93ff929a4074a368a37df467433d977f"},{url:"/fonts/NeuePlak/Monotype  - Neue Plak Text Regular.ttf",revision:"2d6df723d833b36b55596ea132b78fa2"},{url:"/fonts/NeuePlak/Monotype  - Neue Plak Text SemiBold.ttf",revision:"059d4147be100ce7744a9bbf3052fff5"},{url:"/fonts/NeuePlak/Monotype  - Neue Plak Text Thin.ttf",revision:"f0f381ce73b8a6ac4891cfcd626a9963"},{url:"/fonts/NeuePlakCondensed/Monotype  - Neue Plak Condensed Black.ttf",revision:"453ae30a8ebb4150f4ca5e9fb337ce6b"},{url:"/fonts/NeuePlakCondensed/Monotype  - Neue Plak Condensed Bold.ttf",revision:"0088e3a130c6865cde4edd70785f84f0"},{url:"/fonts/NeuePlakCondensed/Monotype  - Neue Plak Condensed ExtraBlack.ttf",revision:"244eaf93d743d908a08f356068c2ab6a"},{url:"/fonts/NeuePlakCondensed/Monotype  - Neue Plak Condensed Light.ttf",revision:"f5210f87a50a3b3c7854567075dd1626"},{url:"/fonts/NeuePlakCondensed/Monotype  - Neue Plak Condensed Regular.ttf",revision:"0a9b3e9e0d44e3086bcd9c29717df476"},{url:"/fonts/NeuePlakCondensed/Monotype  - Neue Plak Condensed SemiBold.ttf",revision:"dc7d998d0bbda29c076fd1fd7e2046d3"},{url:"/fonts/NeuePlakCondensed/Monotype  - Neue Plak Condensed Thin.ttf",revision:"4d6027b362d46f346693ff0a3034bab6"},{url:"/fonts/NeuePlakCondensed/Monotype  - Neue Plak Condensed UltraLight.ttf",revision:"d47f6128c834dec4525e9e50a065a0c5"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
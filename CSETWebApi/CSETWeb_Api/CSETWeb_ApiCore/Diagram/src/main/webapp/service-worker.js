if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return i[e]||(r=new Promise((async r=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=r}else importScripts(e),r()}))),r.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},r=(r,i)=>{Promise.all(r.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(r)};self.define=(r,a,c)=>{i[r]||(i[r]=Promise.resolve().then((()=>{let i={};const s={uri:location.origin+r.slice(1)};return Promise.all(a.map((r=>{switch(r){case"exports":return i;case"module":return s;default:return e(r)}}))).then((e=>{const r=c(...e);return i.default||(i.default=r),i}))})))}}define("./service-worker.js",["./workbox-99ba3a23"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"js/app.min.js",revision:"f538e280f537cfa1bb4c2b70f1841b09"},{url:"js/extensions.min.js",revision:"f754d376839e77ccfaffac8e8deae563"},{url:"js/orgchart.min.js",revision:"619d8c4dab47b81868916df31f55478b"},{url:"js/stencils.min.js",revision:"f076383fdea5b8e5e1c28d37f895c81f"},{url:"js/shapes-14-6-5.min.js",revision:"54ba2801dfdb66904417f08292df7a1f"},{url:"js/math-print.js",revision:"cf64f6a493a8cb5079f2b70813e478d7"},{url:"index.html",revision:"3c7cce1e3f501d95fbcda58d570b8144"},{url:"open.html",revision:"d71816b3b00e769fc6019fcdd6921662"},{url:"styles/fonts/ArchitectsDaughter-Regular.ttf",revision:"31c2153c0530e32553b31a49b3d70736"},{url:"styles/grapheditor.css",revision:"eb89605064de919d221bcaf6cbae711a"},{url:"styles/atlas.css",revision:"d627cfef208f13a9cff1670f143c6348"},{url:"styles/dark.css",revision:"b40a0d090b4cb52adaaf7128283a788c"},{url:"js/dropbox/Dropbox-sdk.min.js",revision:"4b9842892aa37b156db0a8364b7a83b0"},{url:"js/onedrive/OneDrive.js",revision:"505e8280346666f7ee801bc59521fa67"},{url:"js/viewer-static.min.js",revision:"61aa8333e0baf030cc5e06f16f69fcf6"},{url:"connect/jira/editor-1-3-3.html",revision:"a2b0e7267a08a838f3cc404eba831ec0"},{url:"connect/jira/viewerPanel-1-3-12.html",revision:"c96db1790184cb35781f791e8d1dafd9"},{url:"connect/jira/fullScreenViewer-1-3-3.html",revision:"ba7ece2dfb2833b72f97280d7092f25e"},{url:"connect/jira/viewerPanel.js",revision:"53e59b93d7e3dd107e2410aa1db57e5f"},{url:"connect/jira/spinner.gif",revision:"7d857ab9d86123e93d74d48e958fe743"},{url:"connect/jira/editor.js",revision:"f52c89f8606ea566fa33599cb2d1f182"},{url:"connect/jira/fullscreen-viewer-init.js",revision:"e00ad51fc16b87c362d6eaf930ab1fa5"},{url:"connect/jira/fullscreen-viewer.js",revision:"315dd64c85e841fd8c42b012edec43bb"},{url:"plugins/connectJira.js",revision:"4cefa13414e0d406550f3c073923080c"},{url:"plugins/cConf-comments.js",revision:"ee6764429bf47a8545aa1cedacee718e"},{url:"plugins/cConf-1-4-8.js",revision:"0df7e603c8e3032a9e483332b0522000"},{url:"connect/confluence/connectUtils-1-4-8.js",revision:"9b59d7f8c8c6d07b18f8c35fb39144cd"},{url:"connect/new_common/cac.js",revision:"b1eb16ac1824f26824c748e8b8028e30"},{url:"connect/gdrive_common/gac.js",revision:"f492afcba45c5b665b2902ad12d7cd44"},{url:"connect/onedrive_common/ac.js",revision:"92253afeb110d233eefa8d5d6072fa59"},{url:"connect/confluence/viewer-init.js",revision:"8aa8d02147def4535563bc65632a3e6d"},{url:"connect/confluence/viewer.js",revision:"05a2fe3ff9e10c56a3bf45049b4469a2"},{url:"connect/confluence/viewer-1-4-42.html",revision:"c14807286438f2236b44c9fb78eb4bb3"},{url:"connect/confluence/macroEditor-1-4-8.html",revision:"8cd74a2fb60bf2e3e86026d66107cf11"},{url:"connect/confluence/includeDiagram-1-4-8.js",revision:"4323d1a1afbd13163d5525e0b621b209"},{url:"connect/confluence/includeDiagram.html",revision:"1f2e4d088a8a1525ba047239643f3f4f"},{url:"connect/confluence/macro-editor.js",revision:"792d44b551d4a77a581388280dc3f1b1"},{url:"math/es5/startup.js",revision:"dc7130cdc866593293dbb5dde11ceb40"},{url:"math/es5/core.js",revision:"f71bc0bfb7d2ac8261747f97a5d47dd4"},{url:"math/es5/ui/safe.js",revision:"8c1fcfee7c879588ad409edcdd9cce53"},{url:"math/es5/output/svg.js",revision:"4f55967d16197ebb01b86356d8ab179a"},{url:"math/es5/input/tex.js",revision:"5c4f470da2ccb1acf85041fcecd6fff6"},{url:"math/es5/input/asciimath.js",revision:"c2d4076dd8e26d509bfe3a378e71cfa7"},{url:"math/es5/output/svg/fonts/tex.js",revision:"6eab785a3788ea805bd2b552d1f0aab8"},{url:"resources/dia.txt",revision:"2055cf3ec2819186043a5c5952059041"},{url:"resources/dia_am.txt",revision:"cbea44350b3b168fd222752febc08c1d"},{url:"resources/dia_ar.txt",revision:"0a97d959229be1b622031e723087e03a"},{url:"resources/dia_bg.txt",revision:"3e336a470ac5d895c96e047904a5aa62"},{url:"resources/dia_bn.txt",revision:"97c2db8c5af6d85c283e57e98aa5362d"},{url:"resources/dia_bs.txt",revision:"de567ccd66c33b63347a9a6d28689874"},{url:"resources/dia_ca.txt",revision:"554d8f0e11e28ae0e574a595678e29ed"},{url:"resources/dia_cs.txt",revision:"2c0f89e499886e72b3ffafbb8622b6aa"},{url:"resources/dia_da.txt",revision:"c1310c4ee723d7462c1bbe82042d8f84"},{url:"resources/dia_de.txt",revision:"ff7f5edf78db46c04560e8cc79bfed40"},{url:"resources/dia_el.txt",revision:"13e72834cff76fb318fa89e5474e5452"},{url:"resources/dia_eo.txt",revision:"4ebc32ce48cfaf3f08997ac4228eddb2"},{url:"resources/dia_es.txt",revision:"45704bffb9885c463977462d211a8b29"},{url:"resources/dia_et.txt",revision:"5b215fe4e07dcaa3837ab73373c2f9ad"},{url:"resources/dia_eu.txt",revision:"c35c182ccfa80236b13434b1452e0ce9"},{url:"resources/dia_fa.txt",revision:"207d9057cc58b19528db4e1c1581c923"},{url:"resources/dia_fi.txt",revision:"49bddbbd13d2ed0f9ddd12de5fcd1241"},{url:"resources/dia_fil.txt",revision:"0ffd1ee2e10b7a6ec9e101ab19beedd8"},{url:"resources/dia_fr.txt",revision:"d7fc993bfd891cc8a67cd3a07f1b2425"},{url:"resources/dia_gl.txt",revision:"798d2a68aacdeaa289045b756f727245"},{url:"resources/dia_gu.txt",revision:"98f58daca88600992fe50c1159abc2d7"},{url:"resources/dia_he.txt",revision:"19acc86761ccbc34df1e86bd3f3616e6"},{url:"resources/dia_hi.txt",revision:"38661d0d9531d0d9a3514f1aad124c52"},{url:"resources/dia_hr.txt",revision:"52c52343a60a708e0bd7d97c705ecf13"},{url:"resources/dia_hu.txt",revision:"2f18ade2f4ba32403d6e0e0e06c2649b"},{url:"resources/dia_id.txt",revision:"cfc325f8c0b73b31b02da4e8278d90a1"},{url:"resources/dia_it.txt",revision:"02e664db54551a09249daa8abdfa5921"},{url:"resources/dia_ja.txt",revision:"2d7791bc7c76d7eb6705944c56a6beb6"},{url:"resources/dia_kn.txt",revision:"527ee74f173e8c4651869328fc0170c6"},{url:"resources/dia_ko.txt",revision:"f2125296fd74a978fd54076d997c1360"},{url:"resources/dia_lt.txt",revision:"c1ab5dd1c880be03163b7d56df62aa1b"},{url:"resources/dia_lv.txt",revision:"f7ef58bf450d99737dac3e172e3e00e3"},{url:"resources/dia_ml.txt",revision:"8ab0f4d88c98c09e5711cd208307adbb"},{url:"resources/dia_mr.txt",revision:"d4f6cdfacff9db94fd97d044beb4bdb6"},{url:"resources/dia_ms.txt",revision:"948c452de38ac5fe4718eba2b0c78905"},{url:"resources/dia_my.txt",revision:"2055cf3ec2819186043a5c5952059041"},{url:"resources/dia_nl.txt",revision:"d612771f648065bac296ff02a7e7eb97"},{url:"resources/dia_no.txt",revision:"1a624cddc8e39d011f2c18405a1c6d64"},{url:"resources/dia_pl.txt",revision:"3107afaefa7842760989ef6f8cac5f6d"},{url:"resources/dia_pt-br.txt",revision:"ebd008b959a268efb676420573eaf28a"},{url:"resources/dia_pt.txt",revision:"70700effc4dbb368b8256f7883756189"},{url:"resources/dia_ro.txt",revision:"25f97bb85d0f7235897e33651cd70811"},{url:"resources/dia_ru.txt",revision:"b1ec7b931844476a8ffdacfeef47edf1"},{url:"resources/dia_si.txt",revision:"2055cf3ec2819186043a5c5952059041"},{url:"resources/dia_sk.txt",revision:"b4ac8c458504038d07f4b161ed4b8997"},{url:"resources/dia_sl.txt",revision:"6b07f44c87230b69ecb90f7e6bc2dc3b"},{url:"resources/dia_sr.txt",revision:"afe4a1861ae4f5b2e987701d25af4c61"},{url:"resources/dia_sv.txt",revision:"8965882b6539ca213cfc7791aa1ea5ad"},{url:"resources/dia_sw.txt",revision:"c7e2baeb255cf19fe4cbc36941de3a44"},{url:"resources/dia_ta.txt",revision:"fc0e99193c06810c337376bb9fb4faef"},{url:"resources/dia_te.txt",revision:"28ec164aa7465d38baf98a07157f0134"},{url:"resources/dia_th.txt",revision:"517bd381b371ee678e2cc06175551acc"},{url:"resources/dia_tr.txt",revision:"8b9491c0555f02f33668b387d5049218"},{url:"resources/dia_uk.txt",revision:"6969f1803ae976379f7ec9ea646dfd04"},{url:"resources/dia_vi.txt",revision:"f89ff300b53c6eeac3ed55d0920fdc53"},{url:"resources/dia_zh-tw.txt",revision:"d79af46bffed40fabc626d76fcefa13f"},{url:"resources/dia_zh.txt",revision:"579b6544b952e05827a2e3ef97c80ff1"},{url:"favicon.ico",revision:"fab2d88b37c72d83607527573de45281"},{url:"images/manifest.json",revision:"c6236bde53ed79aaaec60a1aca8ee2ef"},{url:"images/logo.png",revision:"89630b64b911ebe0daa3dfe442087cfa"},{url:"images/drawlogo.svg",revision:"4bf4d14ebcf072d8bd4c5a1c89e88fc6"},{url:"images/drawlogo48.png",revision:"8b13428373aca67b895364d025f42417"},{url:"images/drawlogo-gray.svg",revision:"0aabacbc0873816e1e09e4736ae44c7d"},{url:"images/drawlogo-text-bottom.svg",revision:"f6c438823ab31f290940bd4feb8dd9c2"},{url:"images/default-user.jpg",revision:"2c399696a87c8921f12d2f9e1990cc6e"},{url:"images/logo-flat-small.png",revision:"4b178e59ff499d6dd1894fc498b59877"},{url:"images/apple-touch-icon.png",revision:"73da7989a23ce9a4be565ec65658a239"},{url:"images/favicon-16x16.png",revision:"1a79d5461a5d2bf21f6652e0ac20d6e5"},{url:"images/favicon-32x32.png",revision:"e3b92da2febe70bad5372f6f3474b034"},{url:"images/android-chrome-196x196.png",revision:"f8c045b2d7b1c719fda64edab04c415c"},{url:"images/android-chrome-512x512.png",revision:"959b5fac2453963ff6d60fb85e4b73fd"},{url:"images/delete.png",revision:"5f2350f2fd20f1a229637aed32ed8f29"},{url:"images/droptarget.png",revision:"bbf7f563fb6784de1ce96f329519b043"},{url:"images/help.png",revision:"9266c6c3915bd33c243d80037d37bf61"},{url:"images/download.png",revision:"35418dd7bd48d87502c71b578cc6c37f"},{url:"images/logo-flat.png",revision:"038070ab43aee6e54a791211859fc67b"},{url:"images/google-drive-logo.svg",revision:"5d9f2f5bbc7dcc252730a0072bb23059"},{url:"images/onedrive-logo.svg",revision:"3645b344ec0634c1290dd58d7dc87b97"},{url:"images/dropbox-logo.svg",revision:"e6be408c77cf9c82d41ac64fa854280a"},{url:"images/github-logo.svg",revision:"a1a999b69a275eac0cb918360ac05ae1"},{url:"images/gitlab-logo.svg",revision:"0faea8c818899e58533e153c44b10517"},{url:"images/trello-logo.svg",revision:"006fd0d7d70d7e95dc691674cb12e044"},{url:"images/osa_drive-harddisk.png",revision:"b954e1ae772087c5b4c6ae797e1f9649"},{url:"images/osa_database.png",revision:"c350d9d9b95f37b6cfe798b40ede5fb0"},{url:"images/google-drive-logo-white.svg",revision:"f329d8b1be7778515a85b93fc35d9f26"},{url:"images/dropbox-logo-white.svg",revision:"4ea8299ac3bc31a16f199ee3aec223bf"},{url:"images/onedrive-logo-white.svg",revision:"b3602fa0fc947009cff3f33a581cff4d"},{url:"images/github-logo-white.svg",revision:"537b1127b3ca0f95b45782d1304fb77a"},{url:"images/gitlab-logo-white.svg",revision:"5fede9ac2f394c716b8c23e3fddc3910"},{url:"images/trello-logo-white-orange.svg",revision:"e2a0a52ba3766682f138138d10a75eb5"},{url:"images/logo-confluence.png",revision:"ed1e55d44ae5eba8f999aba2c93e8331"},{url:"images/logo-jira.png",revision:"f8d460555a0d1f87cfd901e940666629"},{url:"images/clear.gif",revision:"db13c778e4382e0b55258d0f811d5d70"},{url:"images/spin.gif",revision:"487cbb40b9ced439aa1ad914e816d773"},{url:"images/checkmark.gif",revision:"ba764ce62f2bf952df5bbc2bb4d381c5"},{url:"images/hs.png",revision:"fefa1a03d92ebad25c88dca94a0b63db"},{url:"images/aui-wait.gif",revision:"5a474bcbd8d2f2826f03d10ea44bf60e"},{url:"mxgraph/css/common.css",revision:"618b42f0bde0c7685e04811c25dc2b3e"},{url:"mxgraph/images/expanded.gif",revision:"2b67c2c035af1e9a5cc814f0d22074cf"},{url:"mxgraph/images/collapsed.gif",revision:"73cc826da002a3d740ca4ce6ec5c1f4a"},{url:"mxgraph/images/maximize.gif",revision:"5cd13d6925493ab51e876694cc1c2ec2"},{url:"mxgraph/images/minimize.gif",revision:"8957741b9b0f86af9438775f2aadbb54"},{url:"mxgraph/images/close.gif",revision:"8b84669812ac7382984fca35de8da48b"},{url:"mxgraph/images/resize.gif",revision:"a6477612b3567a34033f9cac6184eed3"},{url:"mxgraph/images/separator.gif",revision:"7819742ff106c97da7a801c2372bbbe5"},{url:"mxgraph/images/window.gif",revision:"fd9a21dd4181f98052a202a0a01f18ab"},{url:"mxgraph/images/window-title.gif",revision:"3fb1d6c43246cdf991a11dfe826dfe99"},{url:"mxgraph/images/button.gif",revision:"00759bdc3ad218fa739f584369541809"},{url:"mxgraph/images/point.gif",revision:"83a43717b284902442620f61bc4e9fa6"}],{ignoreURLParametersMatching:[/.*/]})}));
//# sourceMappingURL=service-worker.js.map

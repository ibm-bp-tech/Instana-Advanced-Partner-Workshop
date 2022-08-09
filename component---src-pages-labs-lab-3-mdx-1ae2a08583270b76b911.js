"use strict";(self.webpackChunkexample=self.webpackChunkexample||[]).push([[5460],{1709:function(e,a,t){t.r(a),t.d(a,{Title:function(){return s},_frontmatter:function(){return o},default:function(){return d}});var n=t(3366),r=(t(7294),t(4983)),l=t(4295),i=["components"],s=function(){return(0,r.kt)("span",null,"Lab 3 - Agent Configuration ",(0,r.kt)("br",null))},o={},c={Title:s,_frontmatter:o},p=l.Z;function d(e){var a=e.components,t=(0,n.Z)(e,i);return(0,r.kt)(p,Object.assign({},c,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In this lab we will configure:"),(0,r.kt)("p",null,"Custom Tabs – enable searching and filtering of tags in the UI"),(0,r.kt)("p",null,"Custom Zone – where hosts are grouped into zones on the infrastructure map"),(0,r.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,r.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"45.833333333333336%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAABYlAAAWJQFJUiTwAAACBUlEQVQoz22S/2sScRjH78+JoBj0QxvT/HKeyZw6d+d9V887T6fZcFKehWtFOO2LFMSCtQV9gVoGs28uqUEUq+Ev/UMHn3fcGaGxH148D8/n87x58zwPFVIM+0IqY8eMst1+vGsHpJzt4zN2OG3azltI1sco+kRuTEH/rTuRCkga7j15BqvzAN9Gv9Ha2kHuahPnEyLCaRNB1SHvElDGhBTjRBg1D4pRDPL154i86A/Iqw9D8vbgkDzvD0jjzkPi4zNkmRPIUlImiaRMBF4iHC8TWtRIcBJhHL2sQqhIuojKxiae9vbROzjE649D7PbeYfD9GPe3tlE2V2Gti2h3JHhYHRKXwpJWhHi5DrFyBWyxitkoh7kohxk6CopRDcwlZajVBprdR/hyNMLO3j5evv+MH0e/0Ll1Fyt1ARstFVyuAFUQEM+YYEs1cKU1xPRLOOOP4NQ8jdNeBhQt6+6s/KIGWtJdt3ufhth+04e12cX1Wh2LMQE8q6CUkaGkeCSMMtS1a5BXLaRKNfhTaczHBXgSAqjJoTrCzjIKjZsor7dAiwUsZCtglBwYRUdQcshhQVtx3S0Xq4ioJmYXOZwLx12mBP+5FTT4+Kybu/X//tCihrCSByMbuKia8LIqZsIJnA3FpgXHDc76xyfgNJ90Hn4hCx+fgZ/PwsOqyFs3UGrehtXu4g/P54RCKrZ9FQAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,r.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Lab 3",title:"Lab 3",src:"/Instana-1-Day-Partner-Workshop/static/05ffcffbdd7a5c36e160c3b9496d3936/3cbba/lab3.1.png",srcSet:["/Instana-1-Day-Partner-Workshop/static/05ffcffbdd7a5c36e160c3b9496d3936/7fc1e/lab3.1.png 288w","/Instana-1-Day-Partner-Workshop/static/05ffcffbdd7a5c36e160c3b9496d3936/a5df1/lab3.1.png 576w","/Instana-1-Day-Partner-Workshop/static/05ffcffbdd7a5c36e160c3b9496d3936/3cbba/lab3.1.png 1152w","/Instana-1-Day-Partner-Workshop/static/05ffcffbdd7a5c36e160c3b9496d3936/0b124/lab3.1.png 1728w","/Instana-1-Day-Partner-Workshop/static/05ffcffbdd7a5c36e160c3b9496d3936/7dc1b/lab3.1.png 1860w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,r.kt)("h2",null,"Step 1:"),(0,r.kt)("p",null,"SSH into your host and navigate to the directory:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/opt/instana/agent/etc/instana \n")),(0,r.kt)("h2",null,"Step 2:"),(0,r.kt)("p",null,"Create a configuration-custom.yaml file. "),(0,r.kt)("p",null,"Copy the appropriate blocks from the configuration.yaml file to your new file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo cp configuration.yaml configuration-custom.yaml \n")),(0,r.kt)("h2",null,"Step 3:"),(0,r.kt)("p",null,"Using the sudo vi commands, look for the following sections within the configuration-custom.yaml file and make the following changes: "),(0,r.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,r.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"43.05555555555555%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAABYlAAAWJQFJUiTwAAABHklEQVQoz41S2YqEQAzs//8yZRQdbwUZr5fBA7zHM0sFWmRh2A0UfVBdqSQtXq8X/SfquqZpmv7kiaZpqOs6GoaB+r6ncRx5L8/LsjAR9+DduXcesK4rCdd1ybIs8jyPns8nKYpCpmnyXlVVQkJEVVV8b9s2BUHA+8fjwe8cxyFd11lUGIbBj8MwpDRNLxdA27Z0HAcLwommacyN45j5MIIVpqIoovM8SaAvstTP5/O1N/u+X2Vjla3Bm3meGSyIbHCW5zklScIAEQECgCjLkp0VRcHIsozXbduupCwIAVzCAYASpchdEM5837/cAXAlneItT/lbiVLovkdyDApDwDAwIPQV/ZNOhXTxG3eH8owhvd9v/pMAfgCmL8VQ8g+AEq4XSMwLxAAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,r.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Lab 3",title:"Lab 3",src:"/Instana-1-Day-Partner-Workshop/static/4d32ec04389e2aa4f54ee723ca302797/3cbba/3.2.png",srcSet:["/Instana-1-Day-Partner-Workshop/static/4d32ec04389e2aa4f54ee723ca302797/7fc1e/3.2.png 288w","/Instana-1-Day-Partner-Workshop/static/4d32ec04389e2aa4f54ee723ca302797/a5df1/3.2.png 576w","/Instana-1-Day-Partner-Workshop/static/4d32ec04389e2aa4f54ee723ca302797/3cbba/3.2.png 1152w","/Instana-1-Day-Partner-Workshop/static/4d32ec04389e2aa4f54ee723ca302797/0b124/3.2.png 1728w","/Instana-1-Day-Partner-Workshop/static/4d32ec04389e2aa4f54ee723ca302797/4ea69/3.2.png 2304w","/Instana-1-Day-Partner-Workshop/static/4d32ec04389e2aa4f54ee723ca302797/604eb/3.2.png 2466w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,r.kt)("p",null,"Note: "),(0,r.kt)("p",null,"Be wary of spacing. Yaml requires 2 space indentation. "),(0,r.kt)("p",null,"Also, check that the changes are uncommented in the yaml file."),(0,r.kt)("p",null,"Once these values have been modified, please save your work. "),(0,r.kt)("h2",null,"Step 4:"),(0,r.kt)("p",null,"Validate that your work was successful by viewing your host in the Instana UI.\nClick on your host on the Infrastructure map and it will bring up details: "),(0,r.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,r.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"88.88888888888889%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAASCAYAAABb0P4QAAAACXBIWXMAABYlAAAWJQFJUiTwAAAD1ElEQVQ4y32U60/bVhjG84etLCZOadGaAhKJ4ySQ2A4rDUViVPu2T9OkVZO2Dqi0SdPKpUwFVCgjg8LWrdKqtuuYkNYATrIkzp3cr5QCtp/pOE5Bm7YjPTpX/87zvj7nGD6Z+OrEv+pXlubn5cWFZXlp/Ym8vPmLPLf8vWwRRmSK8chmpyDTDl42sZxWt3W+324bVh8/UQ4C23h1fxKVlVtAaQekHB4dg7lxE+/aBmF28qAdbXGaTKxb65vY83M8DJ+vbcifSlF8tBdRf//za7W241GPavtqtthUrb4x1WgbVM1OQTWxnEo7eK2m7EOqxXtTpey8PtaqiQwP1rfk0+MTNBpNtdZ8g3LjGM2jY4h/RdA3NAoj4367e9vNtQ/t+Oy2DVd5Nyim7Vp3uOB/JFfrTaQOcmo2X0CxUkHj9WvsBkPoEXyg7B5todnBocMm4ONbffh18yKeP76Mmeku9Hq9oOxkXgfeX9uQi5Uq0rm8mskVCBi15iH2QmH0CCMakCw2OzlcsAqYunMFgee9+HnLgbl7NNgRAUZG0PPKwfDd6rqczuWRPsirhXIVRASoOfSOnDl08hrw9uQVBJ71YmuDxd0ZGv3XPKAYQZvXgT/IicwBpFRGzRVLKJQrqDaaCIj/BLYcfjllwe6LPvy0yWJmlgbjO3OohXxvxS9n80XkS2W1WKm1gHUCDP7LYQcJecqCPQ1ox+wsDduwG5RdBxKHBBhPZzWHJIdElXoDr/bPgAR22cWBYryYnGrl8MdHLKZnabhGvaBZARedHEzE4fxDv5zK5hBLpNR4KoNYMo1SpdYCCiOgWQ+6B8gHPN7pF/DFhAWBZ91YX+vB7JwRztH30WkXcNnFo8tJQn7ol6VMDrF0VpUyB4gkM8iVawhLCfQPj4Fi3LjkagE7WR5XeQ8mpiyYuNMFftwGs0vABYYDxfLodhGHSytyIhxGLBhUpVAIyUgExWQSkWgMVt+4fvVawEsuXvujnSREF8mpF+8N8Lju82JgSNAOvuHB3W/lw2QcRSmmluMxlOMS6qkEpO2XsPo+gNE2qN8STjuP7dDaGxBXLq+Afk4HLk3PyNnqESKFupoo5xEtZZGqFRDdfgHr8BiMNrfmUDu4+m1oA0mbpKGD4WC068dmbXHx9CQZU+qxiHIYjygNKay8SUaV1P6uYvWNK0bboGJ28grtOJOJ5RXTub65Pe7gFcP609+05+pUPsX5UqrW0H99THscWg75/xRJx9vH4ZuFlb2QlBB3ArtiIBgSA8GwKEai4tOXf4i9QzdEinGLtIMXTSynibT/r/83aCqoiflZj38AAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,r.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Lab 3",title:"Lab 3",src:"/Instana-1-Day-Partner-Workshop/static/2eccaba346dcf6858be879b078549eb7/3cbba/lab3.3.png",srcSet:["/Instana-1-Day-Partner-Workshop/static/2eccaba346dcf6858be879b078549eb7/7fc1e/lab3.3.png 288w","/Instana-1-Day-Partner-Workshop/static/2eccaba346dcf6858be879b078549eb7/a5df1/lab3.3.png 576w","/Instana-1-Day-Partner-Workshop/static/2eccaba346dcf6858be879b078549eb7/3cbba/lab3.3.png 1152w","/Instana-1-Day-Partner-Workshop/static/2eccaba346dcf6858be879b078549eb7/0b124/lab3.3.png 1728w","/Instana-1-Day-Partner-Workshop/static/2eccaba346dcf6858be879b078549eb7/ab251/lab3.3.png 1936w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "))}d.isMDXComponent=!0},4295:function(e,a,t){t.d(a,{Z:function(){return w}});var n=t(7294),r=t(8650),l=t.n(r),i=t(5444),s=t(5426),o=t(4311),c=t(5900),p=t.n(c),d=function(e){var a,t=e.title,r=e.theme,l=e.tabs,i=void 0===l?[]:l;return n.createElement("div",{className:p()("PageHeader-module--page-header--NqfPe",(a={},a["PageHeader-module--with-tabs--vbQ-W"]=i.length,a["PageHeader-module--dark-mode--WCeH8"]="dark"===r,a))},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},t)))))},m=function(e){var a=e.relativePagePath,t=e.repository,r=(0,i.useStaticQuery)("1364590287").site.siteMetadata.repository,l=t||r,s=l.baseUrl,o=l.subDirectory,c=s+"/edit/"+l.branch+o+"/src/pages"+a;return s?n.createElement("div",{className:"bx--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"bx--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:c},"Edit this page on GitHub"))):null},g=t(4275),b=t(1721),u=function(e){function a(){return e.apply(this,arguments)||this}return(0,b.Z)(a,e),a.prototype.render=function(){var e=this.props,a=e.title,t=e.tabs,r=e.slug,s=r.split("/").filter(Boolean).slice(-1)[0],o=t.map((function(e){var a,t=l()(e,{lower:!0,strict:!0}),o=t===s,c=new RegExp(s+"/?(#.*)?$"),d=r.replace(c,t);return n.createElement("li",{key:e,className:p()((a={},a["PageTabs-module--selected-item--aBB0K"]=o,a),"PageTabs-module--list-item--024o6")},n.createElement(i.Link,{className:"PageTabs-module--link--Kz-7R",to:""+d},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12 bx--col-no-gutter"},n.createElement("nav",{"aria-label":a},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},o))))))},a}(n.Component),A=u,h=t(2881),f=t(6958),k=t(36),y=function(e){var a=e.date,t=new Date(a);return a?n.createElement(k.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(k.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",t.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null},w=function(e){var a=e.pageContext,t=e.children,r=e.location,c=e.Title,p=a.frontmatter,b=void 0===p?{}:p,u=a.relativePagePath,k=a.titleType,w=b.tabs,v=b.title,P=b.theme,B=b.description,E=b.keywords,x=b.date,N=(0,f.Z)().interiorTheme,I=(0,i.useStaticQuery)("2456312558").site.pathPrefix,D=I?r.pathname.replace(I,""):r.pathname,W=w?D.split("/").filter(Boolean).slice(-1)[0]||l()(w[0],{lower:!0}):"",C=P||N;return n.createElement(o.Z,{tabs:w,homepage:!1,theme:C,pageTitle:v,pageDescription:B,pageKeywords:E,titleType:k},n.createElement(d,{title:c?n.createElement(c,null):v,label:"label",tabs:w,theme:C}),w&&n.createElement(A,{title:v,slug:D,tabs:w,currentTab:W}),n.createElement(h.Z,{padded:!0},t,n.createElement(m,{relativePagePath:u}),n.createElement(y,{date:x})),n.createElement(g.Z,{pageContext:a,location:r,slug:D,tabs:w,currentTab:W}),n.createElement(s.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-labs-lab-3-mdx-1ae2a08583270b76b911.js.map
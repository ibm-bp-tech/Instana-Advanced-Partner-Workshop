"use strict";(self.webpackChunkexample=self.webpackChunkexample||[]).push([[8620],{6052:function(e,a,t){t.r(a),t.d(a,{Title:function(){return l},_frontmatter:function(){return o},default:function(){return m}});var n=t(5987),s=(t(7294),t(4983)),r=t(4295);const i=["components"],l=()=>(0,s.kt)("span",null,"Lab 3 - Agent Configuration ",(0,s.kt)("br",null)),o={},c={Title:l,_frontmatter:o},d=r.Z;function m(e){let{components:a}=e,t=(0,n.Z)(e,i);return(0,s.kt)(d,Object.assign({},c,t,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("h2",null,"Lab Overview"),(0,s.kt)("p",null,"In this lab you will be configuring custom tags and a custom zone. Custom tags enable the searching and filtering of tags in the infrastructure map. Custom zones are where hosts are grouped into zones on the infrastructure map. You will learn how to set up custom tags and custom zones by modifying your yaml file with vi commands. Custom tags and zones also help with navigating the infrastructure map and organizing data by specific names or features. "),(0,s.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,s.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"45.833333333333336%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAABYlAAAWJQFJUiTwAAACBUlEQVQoz22S/2sScRjH78+JoBj0QxvT/HKeyZw6d+d9V887T6fZcFKehWtFOO2LFMSCtQV9gVoGs28uqUEUq+Ev/UMHn3fcGaGxH148D8/n87x58zwPFVIM+0IqY8eMst1+vGsHpJzt4zN2OG3azltI1sco+kRuTEH/rTuRCkga7j15BqvzAN9Gv9Ha2kHuahPnEyLCaRNB1SHvElDGhBTjRBg1D4pRDPL154i86A/Iqw9D8vbgkDzvD0jjzkPi4zNkmRPIUlImiaRMBF4iHC8TWtRIcBJhHL2sQqhIuojKxiae9vbROzjE649D7PbeYfD9GPe3tlE2V2Gti2h3JHhYHRKXwpJWhHi5DrFyBWyxitkoh7kohxk6CopRDcwlZajVBprdR/hyNMLO3j5evv+MH0e/0Ll1Fyt1ARstFVyuAFUQEM+YYEs1cKU1xPRLOOOP4NQ8jdNeBhQt6+6s/KIGWtJdt3ufhth+04e12cX1Wh2LMQE8q6CUkaGkeCSMMtS1a5BXLaRKNfhTaczHBXgSAqjJoTrCzjIKjZsor7dAiwUsZCtglBwYRUdQcshhQVtx3S0Xq4ioJmYXOZwLx12mBP+5FTT4+Kybu/X//tCihrCSByMbuKia8LIqZsIJnA3FpgXHDc76xyfgNJ90Hn4hCx+fgZ/PwsOqyFs3UGrehtXu4g/P54RCKrZ9FQAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,s.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Lab 3",title:"Lab 3",src:"/Instana-Advanced-Partner-Workshop/static/05ffcffbdd7a5c36e160c3b9496d3936/3cbba/lab3.1.png",srcSet:["/Instana-Advanced-Partner-Workshop/static/05ffcffbdd7a5c36e160c3b9496d3936/7fc1e/lab3.1.png 288w","/Instana-Advanced-Partner-Workshop/static/05ffcffbdd7a5c36e160c3b9496d3936/a5df1/lab3.1.png 576w","/Instana-Advanced-Partner-Workshop/static/05ffcffbdd7a5c36e160c3b9496d3936/3cbba/lab3.1.png 1152w","/Instana-Advanced-Partner-Workshop/static/05ffcffbdd7a5c36e160c3b9496d3936/0b124/lab3.1.png 1728w","/Instana-Advanced-Partner-Workshop/static/05ffcffbdd7a5c36e160c3b9496d3936/7dc1b/lab3.1.png 1860w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,s.kt)("h2",null,"Step 1:"),(0,s.kt)("p",null,"SSH into your host and navigate to the directory:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"cd /opt/instana/agent/etc/instana \n")),(0,s.kt)("h2",null,"Step 2:"),(0,s.kt)("p",null,"Create a configuration-custom.yaml file. "),(0,s.kt)("p",null,"Copy the appropriate blocks from the configuration.yaml file to your new file."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"sudo cp configuration.yaml configuration-custom.yaml \n")),(0,s.kt)("h2",null,"Step 3:"),(0,s.kt)("p",null,"Using the sudo vi commands, look for the following sections within the configuration-custom.yaml file and make the following changes: "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"sudo vi configuration-custom.yaml \n")),(0,s.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,s.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"40.625%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAABYlAAAWJQFJUiTwAAABEklEQVQoz3VR24qDUAw8//9tLVrR6kO19X7Bu2LVilkmS6RbtoGQHDJJJnNU0zRUliV92r7vR5R8GAZ6vV5fsTA1jiO1bUvzPNPz+aRpmmhZlj/DpAE14AQLlwWCU4/HgwzDoDiOCXkYhlRV1b8DkyQh0zQ5BkHAPSDzzlL1fc/F+/1+FD+HCRhsPM8j13V5KHqQg6n0KJyXZRkVRUHrutK2bV81Qg2sfN+nKIo4h/4ykBlik23bvM2yLGYLXbuuYzD0Esvz/MA6jsMsoSs+q65r1l6B3eVyYR2v1yudTid2vBHBXITHAk3TWEc46njruk7n8/l3IDSELnBsTNOUPwcngdG78GB+u934ZMHK6XBo+AO9vl9y6+pS3QAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,s.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Lab 3",title:"Lab 3",src:"/Instana-Advanced-Partner-Workshop/static/6685900f88ef65ad32d437d8409b6790/3cbba/3.2.png",srcSet:["/Instana-Advanced-Partner-Workshop/static/6685900f88ef65ad32d437d8409b6790/7fc1e/3.2.png 288w","/Instana-Advanced-Partner-Workshop/static/6685900f88ef65ad32d437d8409b6790/a5df1/3.2.png 576w","/Instana-Advanced-Partner-Workshop/static/6685900f88ef65ad32d437d8409b6790/3cbba/3.2.png 1152w","/Instana-Advanced-Partner-Workshop/static/6685900f88ef65ad32d437d8409b6790/0b124/3.2.png 1728w","/Instana-Advanced-Partner-Workshop/static/6685900f88ef65ad32d437d8409b6790/e1f06/3.2.png 2200w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,s.kt)("p",null,"Note: "),(0,s.kt)("p",null,"Be wary of spacing. Yaml requires 2 space indentation. "),(0,s.kt)("p",null,"Also, check that the changes are uncommented in the yaml file."),(0,s.kt)("p",null,"Once these values have been modified, please save your work. "),(0,s.kt)("h2",null,"Step 4:"),(0,s.kt)("p",null,"Validate that your work was successful by viewing your host in the Instana UI.\nClick on your host on the Infrastructure map and it will bring up details: "),(0,s.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,s.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"88.88888888888889%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAASCAYAAABb0P4QAAAACXBIWXMAABYlAAAWJQFJUiTwAAAD1ElEQVQ4y32U60/bVhjG84etLCZOadGaAhKJ4ySQ2A4rDUViVPu2T9OkVZO2Dqi0SdPKpUwFVCgjg8LWrdKqtuuYkNYATrIkzp3cr5QCtp/pOE5Bm7YjPTpX/87zvj7nGD6Z+OrEv+pXlubn5cWFZXlp/Ym8vPmLPLf8vWwRRmSK8chmpyDTDl42sZxWt3W+324bVh8/UQ4C23h1fxKVlVtAaQekHB4dg7lxE+/aBmF28qAdbXGaTKxb65vY83M8DJ+vbcifSlF8tBdRf//za7W241GPavtqtthUrb4x1WgbVM1OQTWxnEo7eK2m7EOqxXtTpey8PtaqiQwP1rfk0+MTNBpNtdZ8g3LjGM2jY4h/RdA3NAoj4367e9vNtQ/t+Oy2DVd5Nyim7Vp3uOB/JFfrTaQOcmo2X0CxUkHj9WvsBkPoEXyg7B5todnBocMm4ONbffh18yKeP76Mmeku9Hq9oOxkXgfeX9uQi5Uq0rm8mskVCBi15iH2QmH0CCMakCw2OzlcsAqYunMFgee9+HnLgbl7NNgRAUZG0PPKwfDd6rqczuWRPsirhXIVRASoOfSOnDl08hrw9uQVBJ71YmuDxd0ZGv3XPKAYQZvXgT/IicwBpFRGzRVLKJQrqDaaCIj/BLYcfjllwe6LPvy0yWJmlgbjO3OohXxvxS9n80XkS2W1WKm1gHUCDP7LYQcJecqCPQ1ox+wsDduwG5RdBxKHBBhPZzWHJIdElXoDr/bPgAR22cWBYryYnGrl8MdHLKZnabhGvaBZARedHEzE4fxDv5zK5hBLpNR4KoNYMo1SpdYCCiOgWQ+6B8gHPN7pF/DFhAWBZ91YX+vB7JwRztH30WkXcNnFo8tJQn7ol6VMDrF0VpUyB4gkM8iVawhLCfQPj4Fi3LjkagE7WR5XeQ8mpiyYuNMFftwGs0vABYYDxfLodhGHSytyIhxGLBhUpVAIyUgExWQSkWgMVt+4fvVawEsuXvujnSREF8mpF+8N8Lju82JgSNAOvuHB3W/lw2QcRSmmluMxlOMS6qkEpO2XsPo+gNE2qN8STjuP7dDaGxBXLq+Afk4HLk3PyNnqESKFupoo5xEtZZGqFRDdfgHr8BiMNrfmUDu4+m1oA0mbpKGD4WC068dmbXHx9CQZU+qxiHIYjygNKay8SUaV1P6uYvWNK0bboGJ28grtOJOJ5RXTub65Pe7gFcP609+05+pUPsX5UqrW0H99THscWg75/xRJx9vH4ZuFlb2QlBB3ArtiIBgSA8GwKEai4tOXf4i9QzdEinGLtIMXTSynibT/r/83aCqoiflZj38AAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,s.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Lab 3",title:"Lab 3",src:"/Instana-Advanced-Partner-Workshop/static/2eccaba346dcf6858be879b078549eb7/3cbba/lab3.3.png",srcSet:["/Instana-Advanced-Partner-Workshop/static/2eccaba346dcf6858be879b078549eb7/7fc1e/lab3.3.png 288w","/Instana-Advanced-Partner-Workshop/static/2eccaba346dcf6858be879b078549eb7/a5df1/lab3.3.png 576w","/Instana-Advanced-Partner-Workshop/static/2eccaba346dcf6858be879b078549eb7/3cbba/lab3.3.png 1152w","/Instana-Advanced-Partner-Workshop/static/2eccaba346dcf6858be879b078549eb7/0b124/lab3.3.png 1728w","/Instana-Advanced-Partner-Workshop/static/2eccaba346dcf6858be879b078549eb7/ab251/lab3.3.png 1936w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,s.kt)("h2",null,"Summary"),(0,s.kt)("p",null,"In this lab we have learnt how to configure instana agent for custom tags and a custom zone. Custom tags and zones help in navigating the infrastructure map and organizing data by specific names or features. Likewise many other configuration can be done, please refer instana documentation for details. "))}m.isMDXComponent=!0},4295:function(e,a,t){t.d(a,{Z:function(){return v}});var n=t(7294),s=t(8650),r=t.n(s),i=t(5444),l=t(9403),o=t(3321),c=t(5900),d=t.n(c);var m=e=>{let{title:a,theme:t,tabs:s=[]}=e;return n.createElement("div",{className:d()("PageHeader-module--page-header--NqfPe",{"PageHeader-module--with-tabs--vbQ-W":s.length,"PageHeader-module--dark-mode--WCeH8":"dark"===t})},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},a)))))};var g=e=>{let{relativePagePath:a,repository:t}=e;const{site:{siteMetadata:{repository:s}}}=(0,i.useStaticQuery)("1364590287"),{baseUrl:r,subDirectory:l,branch:o}=t||s,c=r+"/edit/"+o+l+"/src/pages"+a;return r?n.createElement("div",{className:"bx--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"bx--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:c},"Edit this page on GitHub"))):null},p=t(4275),u=t(1721);let b=function(e){function a(){return e.apply(this,arguments)||this}return(0,u.Z)(a,e),a.prototype.render=function(){const{title:e,tabs:a,slug:t}=this.props,s=t.split("/").filter(Boolean).slice(-1)[0],l=a.map((e=>{const a=r()(e,{lower:!0,strict:!0}),l=a===s,o=new RegExp(s+"/?(#.*)?$"),c=t.replace(o,a);return n.createElement("li",{key:e,className:d()({"PageTabs-module--selected-item--aBB0K":l},"PageTabs-module--list-item--024o6")},n.createElement(i.Link,{className:"PageTabs-module--link--Kz-7R",to:""+c},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12 bx--col-no-gutter"},n.createElement("nav",{"aria-label":e},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},l))))))},a}(n.Component);var h=b,A=t(2881),f=t(6958),k=t(36);var y=e=>{let{date:a}=e;const t=new Date(a);return a?n.createElement(k.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(k.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",t.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var v=e=>{let{pageContext:a,children:t,location:s,Title:c}=e;const{frontmatter:d={},relativePagePath:u,titleType:b}=a,{tabs:k,title:v,theme:w,description:P,keywords:B,date:E}=d,{interiorTheme:N}=(0,f.Z)(),{site:{pathPrefix:x}}=(0,i.useStaticQuery)("2456312558"),W=x?s.pathname.replace(x,""):s.pathname,R=k?W.split("/").filter(Boolean).slice(-1)[0]||r()(k[0],{lower:!0}):"",Q=w||N;return n.createElement(o.Z,{tabs:k,homepage:!1,theme:Q,pageTitle:v,pageDescription:P,pageKeywords:B,titleType:b},n.createElement(m,{title:c?n.createElement(c,null):v,label:"label",tabs:k,theme:Q}),k&&n.createElement(h,{title:v,slug:W,tabs:k,currentTab:R}),n.createElement(A.Z,{padded:!0},t,n.createElement(g,{relativePagePath:u}),n.createElement(y,{date:E})),n.createElement(p.Z,{pageContext:a,location:s,slug:W,tabs:k,currentTab:R}),n.createElement(l.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-labs-server-agent-install-lab-3-mdx-e775247b7ac988fc4eb4.js.map
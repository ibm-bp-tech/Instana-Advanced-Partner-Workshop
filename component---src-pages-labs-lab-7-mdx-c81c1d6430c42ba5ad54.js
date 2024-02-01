"use strict";(self.webpackChunkexample=self.webpackChunkexample||[]).push([[5926],{2399:function(e,t,a){a.r(t),a.d(t,{Title:function(){return i},_frontmatter:function(){return o},default:function(){return u}});var n=a(5987),r=(a(7294),a(4983)),l=a(4295);const s=["components"],i=()=>(0,r.kt)("span",null,"Lab 7 - Service Mapping ",(0,r.kt)("br",null)),o={},c={Title:i,_frontmatter:o},p=l.Z;function u(e){let{components:t}=e,a=(0,n.Z)(e,s);return(0,r.kt)(p,Object.assign({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",null,"Lab Overview"),(0,r.kt)("p",null,"Services are a part of application monitoring and provide a logical view of your system. Services are derived from infrastructure entities such as hosts, containers, and processes. Incoming calls are correlated to infrastructure entities and enriched with infrastructure data; for example, the Kubernetes pod label or SpringBoot application name. After this infrastructure-linking processing step, a service mapping step maps the enriched calls to generate a service name per call based on a set of pre-defined rules. To fine-tune the service mapping, you can create your own custom rules."),(0,r.kt)("p",null,"In this lab you will learn to modify the ratings service of Robot Shop by changing its name from rs-ratings to rs-ratings-your last name using pre-defined rule that makes use of environment variable. By the end of the lab, you should be able to find your service in your Application Perspective with its new name."),(0,r.kt)("h2",null,"Step 1:"),(0,r.kt)("p",null,"SSH into your host. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ssh ubuntu@<IP address>\n")),(0,r.kt)("h2",null,"Step 2:"),(0,r.kt)("p",null,"Navigate to the robot-shop/ratings directory "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cd /home/ubuntu/robot-shop/ratings \n")),(0,r.kt)("h2",null,"Step 3:"),(0,r.kt)("p",null,"Copy the file Docker file to Dockerfile.orig "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo cp Dockerfile Dockerfile.orig \n")),(0,r.kt)("h2",null,"Step 4:"),(0,r.kt)("p",null,"Edit the file Dockerfile "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo vi Dockerfile \n")),(0,r.kt)("p",null,"And add the following line: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ENV INSTANA_SERVICE_NAME=rs-ratings-<your last name> \n")),(0,r.kt)("h2",null,"Step 5:"),(0,r.kt)("p",null,"Navigate back up to the robot-shop directory. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cd /home/ubuntu/robot-shop/ \n")),(0,r.kt)("h2",null,"Step 6:"),(0,r.kt)("p",null,"Execute: docker-compose build ratings "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo docker-compose build ratings\n")),(0,r.kt)("h2",null,"Step 7:"),(0,r.kt)("p",null,"Execute: docker-compose up -d ratings "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo docker-compose up -d ratings \n")),(0,r.kt)("h2",null,"Step 8:"),(0,r.kt)("p",null,"In the UI, find your service in your Application Perspective and verify the new name. "),(0,r.kt)("p",null,"Click Application, then Services, and lastly verify the name. "),(0,r.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,r.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"87.15277777777777%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAARCAYAAADdRIy+AAAACXBIWXMAABYlAAAWJQFJUiTwAAADGUlEQVQ4y3WUS28cRRSFGyT2SBEiAQRGUUAghPgX/CDASTYsohA7JuYhkZ/AnhUSyAtATBaBJBKaENlOBsfJ2GZ6evpVXY9bVfegujU2BikjXU1Vd/XXp8651cULK+/ET298HREQp0+PYl23EcCzi5cVYnTkI/nwnyqKs+exur6JHXuA0eF9jMZj/PDz7/j+l9/w4+gutn69g63RHWz9dBvf3R3ji8kEa9vbuFXOgcgw5OFOVXHuwnu88dU3PCDwk37G+2XJu7t7vP3HfX44fsCTx1OePDnkyd6Ux9MjvrVY8Ghe8f4wMCKzD4F9iCdVfPj+B/j25k2kHw0Wxnnw7ADu0QPQn/cQtIJxBIDhjAHIA86BjIGxFtY5dL3CoDVijCjOvPE2rmxsikF1p+C8h7cWuq5QzyqQI5D3WNQN1KDhQ5A1zhF8WhsC9lqHstcg51A8v/IuLm18KQo7ZTAYBwoRngETkqAI6wh12wsw+SRQ8iAfpGaDR6OdvKAoXn4TF9duCLBqByjjEEKA9wGdDgJMCsv5Am3byfUQIhyRjBP8YUM4ajVCAj732lu4dH1TgEo78SGy+A1LqTsYMTK0NiDyYIbME1TWRkZjI1pts4cJeHkJnDcKvbbyoHUenfYSUtpy0/VYNB2qupXtGuvkerr/uHWYd4PMi+KlFaxe+1yAg7ZQlsQXPqUwjZOSY+VpnhXm+dwE9IbASWFx7jwurmcPy7pH3Rs4yt70JiWax/8vCWcZyk5NmNYqe1iceR2fXNsQYNNraEsnC7UNAk+hnE5V6pkpv/gKPrp6/QTolttNpV0OKKWeUiYicGpxsSDmf2bs9x6VsgDHDPz4swysGpX7ML2dPHrdojMNjCX8XVZo2i6fWZ9DOz6/TzvCQuUuyAqXwFpZWB/l1ITURtRD2UYeKqtalIYoHxrxMQWTKimcdQYxhKXCq+vpIKOdTuHKGcJijljNMDRzaNLiYdspUZDgAvT/Akvt0Rl3DHwVq1fWgPkBqp1tLHZ30E0egf7ahZoegiLkVPRqEGjqR/K5N3NQXkDaOPl8/QM3FOHRAk6RRgAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,r.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Lab 7",title:"Lab 7",src:"/Instana-1Plus-Day-Partner-Workshop/static/0492eddf24aa919c6f7fc52437ecd0bc/3cbba/lab7.1.png",srcSet:["/Instana-1Plus-Day-Partner-Workshop/static/0492eddf24aa919c6f7fc52437ecd0bc/7fc1e/lab7.1.png 288w","/Instana-1Plus-Day-Partner-Workshop/static/0492eddf24aa919c6f7fc52437ecd0bc/a5df1/lab7.1.png 576w","/Instana-1Plus-Day-Partner-Workshop/static/0492eddf24aa919c6f7fc52437ecd0bc/3cbba/lab7.1.png 1152w","/Instana-1Plus-Day-Partner-Workshop/static/0492eddf24aa919c6f7fc52437ecd0bc/0b124/lab7.1.png 1728w","/Instana-1Plus-Day-Partner-Workshop/static/0492eddf24aa919c6f7fc52437ecd0bc/91583/lab7.1.png 1886w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,r.kt)("p",null,"In this lab we learnt how we can change the discovered service names using pre-defined rule however custom service rules can also be created, please refer Instana documentation for more details."))}u.isMDXComponent=!0},4295:function(e,t,a){a.d(t,{Z:function(){return A}});var n=a(7294),r=a(8650),l=a.n(r),s=a(5444),i=a(9403),o=a(3321),c=a(5900),p=a.n(c);var u=e=>{let{title:t,theme:a,tabs:r=[]}=e;return n.createElement("div",{className:p()("PageHeader-module--page-header--NqfPe",{"PageHeader-module--with-tabs--vbQ-W":r.length,"PageHeader-module--dark-mode--WCeH8":"dark"===a})},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},t)))))};var d=e=>{let{relativePagePath:t,repository:a}=e;const{site:{siteMetadata:{repository:r}}}=(0,s.useStaticQuery)("1364590287"),{baseUrl:l,subDirectory:i,branch:o}=a||r,c=l+"/edit/"+o+i+"/src/pages"+t;return l?n.createElement("div",{className:"bx--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"bx--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:c},"Edit this page on GitHub"))):null},m=a(4275),g=a(1721);let h=function(e){function t(){return e.apply(this,arguments)||this}return(0,g.Z)(t,e),t.prototype.render=function(){const{title:e,tabs:t,slug:a}=this.props,r=a.split("/").filter(Boolean).slice(-1)[0],i=t.map((e=>{const t=l()(e,{lower:!0,strict:!0}),i=t===r,o=new RegExp(r+"/?(#.*)?$"),c=a.replace(o,t);return n.createElement("li",{key:e,className:p()({"PageTabs-module--selected-item--aBB0K":i},"PageTabs-module--list-item--024o6")},n.createElement(s.Link,{className:"PageTabs-module--link--Kz-7R",to:""+c},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12 bx--col-no-gutter"},n.createElement("nav",{"aria-label":e},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},i))))))},t}(n.Component);var k=h,b=a(2881),f=a(6958),y=a(36);var v=e=>{let{date:t}=e;const a=new Date(t);return t?n.createElement(y.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(y.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var A=e=>{let{pageContext:t,children:a,location:r,Title:c}=e;const{frontmatter:p={},relativePagePath:g,titleType:h}=t,{tabs:y,title:A,theme:E,description:w,keywords:N,date:P}=p,{interiorTheme:D}=(0,f.Z)(),{site:{pathPrefix:x}}=(0,s.useStaticQuery)("2456312558"),T=x?r.pathname.replace(x,""):r.pathname,S=y?T.split("/").filter(Boolean).slice(-1)[0]||l()(y[0],{lower:!0}):"",I=E||D;return n.createElement(o.Z,{tabs:y,homepage:!1,theme:I,pageTitle:A,pageDescription:w,pageKeywords:N,titleType:h},n.createElement(u,{title:c?n.createElement(c,null):A,label:"label",tabs:y,theme:I}),y&&n.createElement(k,{title:A,slug:T,tabs:y,currentTab:S}),n.createElement(b.Z,{padded:!0},a,n.createElement(d,{relativePagePath:g}),n.createElement(v,{date:P})),n.createElement(m.Z,{pageContext:t,location:r,slug:T,tabs:y,currentTab:S}),n.createElement(i.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-labs-lab-7-mdx-c81c1d6430c42ba5ad54.js.map
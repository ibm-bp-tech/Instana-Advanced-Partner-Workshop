"use strict";(self.webpackChunkexample=self.webpackChunkexample||[]).push([[5949],{6021:function(e,a,t){t.r(a),t.d(a,{Title:function(){return r},_frontmatter:function(){return o},default:function(){return d}});var n=t(5987),l=(t(7294),t(4983)),s=t(4295);const i=["components"],r=()=>(0,l.kt)("span",null,"Lab 8 - Endpoint Mapping ",(0,l.kt)("br",null)),o={},p={Title:r,_frontmatter:o},c=s.Z;function d(e){let{components:a}=e,t=(0,n.Z)(e,i);return(0,l.kt)(c,Object.assign({},p,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h2",null,"Lab Overview"),(0,l.kt)("p",null,"Endpoints define the API of a service and provide a fine-grained view into what operations are exposed by the services. Every call to a service happens on a single endpoint. Every endpoint has a single, automatically discovered type: BATCH, SHELL, DATABASE, HTTP, MESSAGING, RPC.\nEndpoints are automatically mapped based on the endpoint type. For example, Instana automatically groups HTTP endpoints based on the path template if accessible."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"/hospital/1948/patient/291148\n/hospital/728/patient/924892\n/hospital/47/patient/25978\n/hospital/108429/patient/1847\n")),(0,l.kt)("p",null,"In the above example, the preceding endpoints, which are being served by the same application code and hence have a shared performance profile, will be grouped and reported together like so:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"/hospital/{hid}/patient/{pid}\n")),(0,l.kt)("p",null,"This is done automatically and no user steps are required for known frameworks."),(0,l.kt)("p",null,"In this lab you will configure a new endpoint extraction using an HTTP GET request. HTTP is just one type of endpoint. At the end of this lab, you will be able to see the new endpoint name you have created on the dashboard."),(0,l.kt)("h2",null,"Step 1:"),(0,l.kt)("p",null,"Using the Instana UI, bring up the dashboard for your new rs-ratings-(your last name)service."),(0,l.kt)("p",null,"Then, Navigate to the Endpoints tab."),(0,l.kt)("p",null,"For each service, Instana allows to have one configuration which controls how the services endpoints are getting extracted.\nTo access the configuration, Click on the Configure Endpoints link."),(0,l.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,l.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"50.34722222222222%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAABYlAAAWJQFJUiTwAAACCklEQVQoz22SW2tTURCFjygUQRB8VfrgpfTBgtAf4C/0pVIqCJqaIgFBHwSheKt4qdS0TeulRqxJjWlsSJuck73PPvt2Pjk7KfjQgcVmM2sWM2smOjd1gzvlCkX04xTX+YP+ukm8vcGgVqW/tY5Ye4cRilxpvJA4pdHGnojozOQ0t+6V2Mu6bB7sUqvWWH2xwpvlV7xffsmH56/5+PQZa7VvVH63WGw0qfYOwXmykwTPT88y92CJAxK+H7X4vLHF+spbqqufqNWbbI2xUf/Fk/Y+j9pttgcx+BxjHdZ7rM9HcJ7owuxN7lYeh5GtSPG7O8hWExp1tEhwRYHRWGPAWlAZeI+xNgi4LMMphVMpTmuiicvXmV98GASP4hg96KO7fzHxIBRpY8awZHaEIJaD63WJ93YZtveQ+y3S+heis1dnWChXsNbQ6XRwedCmePI8D/g/ir/3Hh+22CNp/GDY/IloNch2akTRxWvM3y8HcmFyII/h3PHrRl1ZFwSLjmORBv/IUkS/j+z3yXVGNHFlhoVSOfjSHQhEcRpjMaEKrzxJMmSQDEmGIuS08xxISyJVmOhQQ0/q0VJOXZpirlTGBQ9lEDw+AaksmbYImRIPJUORhs0Wk8jMoLIRV2pLWtRpQ3R6cprbpaUwcixUIB97lZnCr5w0VUiZkioVci7PEWZkQxGpzVHaknvPP+AG3D3VR0tdAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,l.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Lab 8",title:"Lab 8",src:"/Instana-1Plus-Day-Partner-Workshop/static/4bd9eb731480204e148d509e2593d394/3cbba/lab8.1.png",srcSet:["/Instana-1Plus-Day-Partner-Workshop/static/4bd9eb731480204e148d509e2593d394/7fc1e/lab8.1.png 288w","/Instana-1Plus-Day-Partner-Workshop/static/4bd9eb731480204e148d509e2593d394/a5df1/lab8.1.png 576w","/Instana-1Plus-Day-Partner-Workshop/static/4bd9eb731480204e148d509e2593d394/3cbba/lab8.1.png 1152w","/Instana-1Plus-Day-Partner-Workshop/static/4bd9eb731480204e148d509e2593d394/0b124/lab8.1.png 1728w","/Instana-1Plus-Day-Partner-Workshop/static/4bd9eb731480204e148d509e2593d394/8df1a/lab8.1.png 1760w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,l.kt)("h2",null,"Step 2:"),(0,l.kt)("p",null,"Click on the Add Custom HTTP Rule link.\nNote that custom endpoint configurations are available for HTTP-based services only."),(0,l.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"858px"}},"\n      ",(0,l.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"82.6388888888889%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAARCAYAAADdRIy+AAAACXBIWXMAABYlAAAWJQFJUiTwAAACvklEQVQ4y31UaVPbMBDN//8l/UpbYGjDUSgUOgwUyn3FSezEiR3b8q1rX0eSA5Qy1cyb1a7kp7deaXt5WSHJGGV5AVaUMHaJhOX/xKqmRcMF6pa/BhnbcBH0jk9O0d/eoU9r6/h+8AP7h0f40t/E161tbH/btbG9/QPs7O5he3cPKcvBpUJHsAR1hwQ9s9ByQWXd2E2tkFZFUdWoWm7nBmbdYOnX3VpnXxSa08J5TCfnlzi7uMblzT3unjzcPgzw4I0wGPl49Ea4e/TwMDB+YGP3g6GN2bUnj8yva4UMekZRnGbkjQOMgimMNWm1QqDp/pFLp7V+y1286fwOZHybstnAiorCOEGcMkQpQxglCMIIk1kMP4wQhHOECcMkYQjiFJNFhiDOMLU2xXi+oIJLl7JTyOhx6MPzp5ZskTFLvshyLNIMESuReAPkGytgm2vIN1eR9T+D9Vetn22sUH1yiEaoZVEkte4EC3OItRYcLQB19QvB/TXGBIQtx5xLi0nTIiRQe7CFhrGgZz7Mm5pq7iostYZUGorI2sbcOwDi+gzxzjqmt5cIf59ienGK6PIMxc0Vwqtzavof0VRV0BNcYVTEVKkW0IRwNkcUL+BPpkizDGaQQVMD3j0wfACGxj6CP13g5/EH0NMViYmPmktHOF4SEpCxHHleWNK8KBwh0QtxBzM4AF8mUABxgqsy5xKzKqOSN9BK4+0wH0ulIKSEEMJCdlZLt18KSe6KCafQLxdWIWnCJJzBD6YIJiFG4wCzeQSttVW5hO4UV7LG/uwIQkniQjqFhnBYRC5lAGVVoShLlGUFxnJUdf2c8tshtcS0DqFJvxCaq5HUJdWCQylt6mIVmGor7SptNr8HIRVIwczfNgdJeVnbixwlGbKidI/+7xb1Lir35F6aQzchVlaWbL5IzVN87nmvWtT/8KzwD2NkD4rjcnz3AAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,l.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Lab 8",title:"Lab 8",src:"/Instana-1Plus-Day-Partner-Workshop/static/046314d2adfbb8bb66eb502b233b7ea2/5db76/lab8.2.png",srcSet:["/Instana-1Plus-Day-Partner-Workshop/static/046314d2adfbb8bb66eb502b233b7ea2/7fc1e/lab8.2.png 288w","/Instana-1Plus-Day-Partner-Workshop/static/046314d2adfbb8bb66eb502b233b7ea2/a5df1/lab8.2.png 576w","/Instana-1Plus-Day-Partner-Workshop/static/046314d2adfbb8bb66eb502b233b7ea2/5db76/lab8.2.png 858w"],sizes:"(max-width: 858px) 100vw, 858px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,l.kt)("h2",null,"Step 3:"),(0,l.kt)("p",null,"Enter the following in the Custom HTTP Rule field:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"/api/fetch/{sku}\n")),(0,l.kt)("p",null,"Feel free to use the Rule tester (copy an actual call from the data to the tester to verify the rule is working correctly)."),(0,l.kt)("p",null,"Then, select save."),(0,l.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"972px"}},"\n      ",(0,l.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"67.0138888888889%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAABYlAAAWJQFJUiTwAAAB7klEQVQ4y52S227TQBCG/Yy8F0/CDRICxBWlpWASNzRAEqJA0tixY8f2nnzcg/dHjlVEK4IiRvp2ZnZWo393x7nzA00I1ZRxneVEh1Gs4+Sgc0J1TtngH5HmD/OMUEkow2YbfHJyJvBjs8Vssew3cLf1sfYDzJYrwHY40zqpFDgXNw5ffbfi/Tu7d12buh8tmdxY4V5bFu4ta63llbK80g9gj3JaKtMqi5xQzxG3I6xfv8H0aoz55Qcsx1OkF2+RfFsgLC2ivEZEGoQn6Gt+VpuYSRBKPYfFMdLpBNvxCL43xu7GQzDxEIQxNvsMm+gAP8mRF/VJMlGZRulBIRUlslYjZAXiosKOimMcJBmiNEN46H3+Bxl2SXqM+1qYpNjFByOqemjIuQAXAlGcgDIOpRSklJBKQ2o9+L/QKo1KKhStBG9aY7r7NywK1HWDQ5qhKEtYa8+isxZCKaRti6RpTP/V5L5h00oE0R5+GIFQDqUNWqlOqvuNVNBKQ4jS9DGlzHOEKNB0CnFNwWUFWKDrBgX/pOvQT2mPBY4Kc8Y9h3ExTGZ/4FyMGZoxgm42gVl+NVh8Rub7/ZVL/I/Zftmu4Y6e44n71NxeP4Oczz1nnxxQNw2KskJ5LkWJQmo0P1fYXb7E1eiViS9eYP9l6v0CztbckaqyJBcAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,l.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Lab 8",title:"Lab 8",src:"/Instana-1Plus-Day-Partner-Workshop/static/844238a8550f32b94e7f9e6d838f4a6a/1cc0f/lab8.3.png",srcSet:["/Instana-1Plus-Day-Partner-Workshop/static/844238a8550f32b94e7f9e6d838f4a6a/7fc1e/lab8.3.png 288w","/Instana-1Plus-Day-Partner-Workshop/static/844238a8550f32b94e7f9e6d838f4a6a/a5df1/lab8.3.png 576w","/Instana-1Plus-Day-Partner-Workshop/static/844238a8550f32b94e7f9e6d838f4a6a/1cc0f/lab8.3.png 972w"],sizes:"(max-width: 972px) 100vw, 972px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,l.kt)("h2",null,"Step 4:"),(0,l.kt)("p",null,"Select Add."),(0,l.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"692px"}},"\n      ",(0,l.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"118.05555555555556%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAYCAYAAAD6S912AAAACXBIWXMAABYlAAAWJQFJUiTwAAADU0lEQVQ4y41UTZPjNBDNz+POjZ8BP2I58w8obtwpDhxgD1ssqVlmMhOyO7XJOHFs+SNxEtuyPixLj2o5DslsZgpVPXdLltvvdUs9upvc4937v9z45gazxzn+vrvHeDzG+MMtPtzeYvIwxe3kAffTKf4c3+Dj4yNkayCU/gJStxgFqxDLcO1mnx6xZinCKMbn+RyLYIl1HCOKGVbryK8/LVdgaQptLFRroI3xdgAFHRnryHFcSDQE2f+trDhqLlA1AnUjUNYch4qj5ALF7uD97W6P3b702Jd1z5AeT8HSTe7+wWQ6w+zTZ0QsQxQmSNINWJYjTjLPntbTvECS5sg2W8RJCpakiFmOvNhDtceAFW9cxRuyKHmDhvLRtv6PhEHSMJfnvp+3p7yOaGOUpC6IYoQsQbCOsYwYFqs1FqvQz1eUx5jhKYywDCOEcYIV7Y8ZFssQQRgh3RRQg2Qupc8hgfLFhfI+MR78AUlZoag5djU/2W1VY8+bnuGRthvK3sOcpA5rQrWewf3+gOBQIiorrA4l4qpGcNgjripwCkiBYr5znbUwpoOmQEr3Vmu0poPp/kPXdbCdhbXWWzj44ayFHAIu6tQZY6C1BktjrNkaLMuQ5RsY+ujKcMdI6yrG2/SdX/E5pIArvnH0d21a7ESJQlbYyQrdwOQFOAvUiiPmCax1/TmkgIzvXGuMl0cvCDQoDZpuxCvoOgd0AH0vziVTAN1qJGmGLNuAscTfiJfGIJmJFL+x371/khzUuX9LMqggBCGkL4pz7kV4Ep1GqWs/v5BM9L1k1xduAMkmOc+ltv72tHBdv/FC8sCQqrwtCqRZjs228FUm2RT0OTvr+upnIsf7/OaS4fyYQ5IspYQQwqOuayilgKO8a4ObBvPqyfungFlTuv4AW3TWeUbG9j6t9SfgS1A/pKMFeybZXzHdOt/zjt2GS+VfNlL5ziNeQXPcN8xHdEel0q44lL5jpNvCN4GL9vQqtL9yA0bHyE4NFTTm2Az0yV7F2Z6ms6g76+15t7nAsEb2KoY9Ujqb5w55gW6zdaO+/8kLVs/9q6D80jn9+IDZj2/w068/uMV3X2O0KfaqOFRS6lYKpaVQ7f+ClEpyQGI6Ub/8/L375u0b/PHtV+5f0C00uzMHENwAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,l.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Lab 8",title:"Lab 8",src:"/Instana-1Plus-Day-Partner-Workshop/static/2c7c7f8abd3c7e3486985a8f2a4f9718/b53e5/lab8.4.png",srcSet:["/Instana-1Plus-Day-Partner-Workshop/static/2c7c7f8abd3c7e3486985a8f2a4f9718/7fc1e/lab8.4.png 288w","/Instana-1Plus-Day-Partner-Workshop/static/2c7c7f8abd3c7e3486985a8f2a4f9718/a5df1/lab8.4.png 576w","/Instana-1Plus-Day-Partner-Workshop/static/2c7c7f8abd3c7e3486985a8f2a4f9718/b53e5/lab8.4.png 692w"],sizes:"(max-width: 692px) 100vw, 692px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,l.kt)("p",null,"And then verify that you see the new endpoint on the dashboard."),(0,l.kt)("p",null,"In this lab we have learnt how we can customize the endpoint mapping configuration for HTTP-based services."))}d.isMDXComponent=!0},4295:function(e,a,t){t.d(a,{Z:function(){return v}});var n=t(7294),l=t(8650),s=t.n(l),i=t(5444),r=t(9403),o=t(3321),p=t(5900),c=t.n(p);var d=e=>{let{title:a,theme:t,tabs:l=[]}=e;return n.createElement("div",{className:c()("PageHeader-module--page-header--NqfPe",{"PageHeader-module--with-tabs--vbQ-W":l.length,"PageHeader-module--dark-mode--WCeH8":"dark"===t})},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},a)))))};var m=e=>{let{relativePagePath:a,repository:t}=e;const{site:{siteMetadata:{repository:l}}}=(0,i.useStaticQuery)("1364590287"),{baseUrl:s,subDirectory:r,branch:o}=t||l,p=s+"/edit/"+o+r+"/src/pages"+a;return s?n.createElement("div",{className:"bx--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"bx--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:p},"Edit this page on GitHub"))):null},g=t(4275),b=t(1721);let u=function(e){function a(){return e.apply(this,arguments)||this}return(0,b.Z)(a,e),a.prototype.render=function(){const{title:e,tabs:a,slug:t}=this.props,l=t.split("/").filter(Boolean).slice(-1)[0],r=a.map((e=>{const a=s()(e,{lower:!0,strict:!0}),r=a===l,o=new RegExp(l+"/?(#.*)?$"),p=t.replace(o,a);return n.createElement("li",{key:e,className:c()({"PageTabs-module--selected-item--aBB0K":r},"PageTabs-module--list-item--024o6")},n.createElement(i.Link,{className:"PageTabs-module--link--Kz-7R",to:""+p},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12 bx--col-no-gutter"},n.createElement("nav",{"aria-label":e},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},r))))))},a}(n.Component);var h=u,A=t(2881),k=t(6958),f=t(36);var y=e=>{let{date:a}=e;const t=new Date(a);return a?n.createElement(f.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(f.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",t.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var v=e=>{let{pageContext:a,children:t,location:l,Title:p}=e;const{frontmatter:c={},relativePagePath:b,titleType:u}=a,{tabs:f,title:v,theme:w,description:x,keywords:P,date:E}=c,{interiorTheme:I}=(0,k.Z)(),{site:{pathPrefix:N}}=(0,i.useStaticQuery)("2456312558"),Q=N?l.pathname.replace(N,""):l.pathname,C=f?Q.split("/").filter(Boolean).slice(-1)[0]||s()(f[0],{lower:!0}):"",T=w||I;return n.createElement(o.Z,{tabs:f,homepage:!1,theme:T,pageTitle:v,pageDescription:x,pageKeywords:P,titleType:u},n.createElement(d,{title:p?n.createElement(p,null):v,label:"label",tabs:f,theme:T}),f&&n.createElement(h,{title:v,slug:Q,tabs:f,currentTab:C}),n.createElement(A.Z,{padded:!0},t,n.createElement(m,{relativePagePath:b}),n.createElement(y,{date:E})),n.createElement(g.Z,{pageContext:a,location:l,slug:Q,tabs:f,currentTab:C}),n.createElement(r.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-labs-lab-8-mdx-8dac1d4a57f11254d7d5.js.map
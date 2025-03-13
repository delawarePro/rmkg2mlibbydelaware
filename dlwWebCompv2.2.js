let c=document.createElement("template");c.setAttribute("id","cardgrid");c.innerHTML=`
<slot></slot>
`;class e extends HTMLElement{static get observedAttributes(){return["data-columns"]}get t(){return this.getAttribute("data-columns")}constructor(){super();let e=this.attachShadow({mode:"open"});this.o();e.append(c.content.cloneNode(true))}o(){let e=ccGridCardContent;let c="";let t=document.createElement("div");let r=document.createElement("div");r.classList.add("grid");r.setAttribute("data-columns",this.t);e.forEach(e=>{c=this.l(e);r.appendChild(c)});t.appendChild(r);this.innerHTML=t.innerHTML}l(e){let c="",t="",r="";let a="",o="";let n="",l="";let i="default";let d="";let s="",u="";c=e.imgurl;t=e.imgtext;r=e.imgalt;let m=document.createElement("img");m.setAttribute("src",c);m.setAttribute("alt",r);m.setAttribute("title",t);m.setAttribute("is-draggable","false");a=e.buttontext;o=e.buttonurl;let h=document.createElement("h3");let g=document.createElement("a");g.classList.add("btn");g.setAttribute("href",o);let b=document.createTextNode(a);g.appendChild(b);h.appendChild(g);n=e.title;let v=document.createElement("h4");let k=document.createTextNode(n);v.appendChild(k);l=e.content;let f=document.createElement("p");let p=document.createTextNode(l);f.appendChild(p);d=document.createElement("div");d.classList.add("card");let w=e.cardappear;switch(w){case"default":s="hidden-on-scroll";break;case"left":s="hidden-on-scroll-left";break;case"right":s="hidden-on-scroll-right";break;case"top":s="hidden-on-scroll-top";break;case"bottom":s="hidden-on-scroll-bottom";break;default:s="";break}let y=e.cardappeardelay;switch(y){case"200ms":u="show-on-scroll-delay-200ms";break;case"400ms":u="show-on-scroll-delay-400ms";break;case"600ms":u="show-on-scroll-delay-600ms";break;case"800ms":u="show-on-scroll-delay-800ms";break;case"1s":u="show-on-scroll-delay-1s";break;default:u="";break}if(s!="")d.classList.add(s);if(u!="")d.classList.add(u);i=e.elementorder;switch(i){case"btn-img-title-text":d.appendChild(h);d.appendChild(m);d.appendChild(v);d.appendChild(f);break;case"title-text-img-btn":d.appendChild(v);d.appendChild(f);d.appendChild(m);d.appendChild(h);break;case"title-img-text-btn":d.appendChild(v);d.appendChild(m);d.appendChild(f);d.appendChild(h);break;default:d.appendChild(v);d.appendChild(m);d.appendChild(f);d.appendChild(h);break}return d}}customElements.define("cc-cardgrid",e);let t=document.createElement("template");t.innerHTML=`
<slot></slot>
`;class r extends HTMLElement{static get observedAttributes(){return["card-title","card-content","card-color","img-alt","card-size","img-url","card-url","card-url-alt","card-url-text"]}get i(){return this.getAttribute("card-title")}get u(){return this.getAttribute("card-content")}get m(){return this.getAttribute("card-color")}get h(){return this.getAttribute("card-url")}get g(){return this.getAttribute("card-url-alt")}get v(){return this.getAttribute("card-url-text")}get k(){return this.getAttribute("card-size")}get p(){return this.getAttribute("img-url")}get L(){return this.getAttribute("img-alt")}constructor(){super();let e=this.attachShadow({mode:"open"});this.F();e.append(t.content.cloneNode(true))}F(){let e="";switch(this.k){case"medium":e="cc-card-medium";break;case"large":e="cc-card-large";break;case"x-large":e="cc-card-x-large";break;default:e="cc-card-medium";break}let c=document.createElement("div");let t=document.createElement("div");t.classList.add("cc-standard-card");if(e!="")t.classList.add(e);let r=document.createElement("img");r.classList.add("cc-standard-card-img");r.setAttribute("src",this.p);r.setAttribute("alt",this.L);r.setAttribute("title",this.L);t.appendChild(r);let a=document.createElement("h3");a.innerHTML=this.i;a.classList.add("cc-h3");t.appendChild(a);let o=document.createElement("p");o.innerHTML=this.u;t.appendChild(o);let n=document.createElement("a");n.setAttribute("href",this.h);n.setAttribute("alt",this.g);let l=document.createTextNode(this.v);n.appendChild(l);n.innerHTML+='<ion-icon name="chevron-forward-circle-outline" aria-hidden="true" class="cc-card-image-link-icon"></ion-icon>';t.appendChild(n);switch(this.m){case"default":t.classList.add("cc-standard-card-clr-white");t.classList.add("cc-standard-card-txt-dark");a.classList.add("cc-standard-card-txt-dark");n.classList.add("cc-btn");n.setAttribute("style","color: var(--clr-white) !important;");break;case"primary":t.classList.add("cc-standard-card-clr-primary");t.classList.add("cc-standard-card-txt-white");a.classList.add("cc-standard-card-txt-white");n.classList.add("cc-btn-alt-dark");n.setAttribute("style","color: var(--clr-white) !important;");break;case"secondary":t.classList.add("cc-standard-card-clr-secondary");t.classList.add("cc-standard-card-txt-white");a.classList.add("cc-standard-card-txt-white");n.classList.add("cc-btn-alt");n.setAttribute("style","color: var(--clr-white) !important;");break}c.appendChild(t);this.innerHTML=c.innerHTML}}customElements.define("cc-standardcard",r);let a=document.createElement("template");a.innerHTML=`
<slot></slot>
`;class o extends HTMLElement{static get observedAttributes(){return["card-title","card-content","card-color","card-icon","card-size","card-switch-img"]}get i(){return this.getAttribute("card-title")}get u(){return this.getAttribute("card-content")}get m(){return this.getAttribute("card-color")}get C(){return this.getAttribute("card-icon")}get k(){return this.getAttribute("card-size")}get M(){return this.getAttribute("card-switch-img")}constructor(){super();let e=this.attachShadow({mode:"open"});this.T();e.append(a.content.cloneNode(true))}T(){let e="water-outline";switch(this.C){case"paperplane":e='<ion-icon name="paper-plane-outline" aria-hidden="true" class="cc-card-icon"></ion-icon>';break;case"rocket":e='<ion-icon name="rocket-outline" aria-hidden="true" class="cc-card-icon"></ion-icon>';break;case"leaf":e='<ion-icon name="leaf-outline" aria-hidden="true" class="cc-card-icon"></ion-icon>';break;case"planet":e='<ion-icon name="planet-outline" aria-hidden="true" class="cc-card-icon"></ion-icon>';break;case"earth":e='<ion-icon name="earth-outline" aria-hidden="true" class="cc-card-icon"></ion-icon>';break;case"heartbeat":e='<ion-icon name="fitness-outline" aria-hidden="true" class="cc-card-icon"></ion-icon>';break;case"flash":e='<ion-icon name="flash-outline" aria-hidden="true" class="cc-card-icon"></ion-icon>';break;case"ribbon":e='<ion-icon name="ribbon-outline" aria-hidden="true" class="cc-card-icon"></ion-icon>';break;case"diamond":e='<ion-icon name="diamond-outline" aria-hidden="true" class="cc-card-icon"></ion-icon>';break;case"heart":e='<ion-icon name="heart-circle-outline" aria-hidden="true" class="cc-card-icon"></ion-icon>';break;default:e='<ion-icon name="water-outline" aria-hidden="true" class="cc-card-icon"></ion-icon>';break}let c='<div class="cc-card-icon-corner">'+e+"</div>";let t="";switch(this.k){case"medium":t="cc-card-medium";break;case"large":t="cc-card-large";break;case"x-large":t="cc-card-x-large";break;default:t="";break}let r=document.createElement("div");let a=document.createElement("div");a.classList.add("cc-card");if(t!="")a.classList.add(t);if(this.m=="switch"){a.style="background: url('"+this.M+"'); background-size: cover;"}let o=document.createElement("h3");o.innerHTML=this.i;o.classList.add("cc-h3");a.appendChild(o);let n=document.createElement("p");n.innerHTML=this.u;a.appendChild(n);let l=document.createElement("div");l.classList.add("cc-card-corner");l.innerHTML=c;a.appendChild(l);switch(this.m){case"primary":a.classList.add("cc-card-clr-primary");a.classList.add("cc-card-border-clr-primary");l.classList.add("cc-card-corner-clr-primary");break;case"white-primary":a.classList.add("cc-card-clr-white");a.classList.add("cc-card-border-clr-primary");l.classList.add("cc-card-corner-clr-primary");break;case"secondary":a.classList.add("cc-card-clr-secondary");a.classList.add("cc-card-border-clr-secondary");l.classList.add("cc-card-corner-clr-secondary");break;case"white-secondary":a.classList.add("cc-card-clr-white-secondary");a.classList.add("cc-card-border-clr-secondary");l.classList.add("cc-card-corner-clr-secondary");break;case"yellow":a.classList.add("cc-card-clr-accent-yellow");a.classList.add("cc-card-border-clr-yellow");l.classList.add("cc-card-corner-clr-accent-yellow");break;case"orange":a.classList.add("cc-card-clr-accent-orange");a.classList.add("cc-card-border-clr-orange");l.classList.add("cc-card-corner-clr-accent-orange");break;case"green":a.classList.add("cc-card-clr-accent-green");a.classList.add("cc-card-border-clr-green");l.classList.add("cc-card-corner-clr-accent-green");break;case"red":a.classList.add("cc-card-clr-accent-red");a.classList.add("cc-card-border-clr-red");l.classList.add("cc-card-corner-clr-accent-red");break;case"blue":a.classList.add("cc-card-clr-accent-blue");a.classList.add("cc-card-border-clr-blue");l.classList.add("cc-card-corner-clr-accent-blue");break;case"switch":a.classList.add("cc-card-clr-switch");a.classList.add("cc-card-border-clr-switch");l.classList.add("cc-card-corner-clr-primary");break;default:a.classList.add("cc-card-clr-primary");a.classList.add("cc-card-border-clr-primary");l.classList.add("cc-card-corner-clr-primary");break}r.appendChild(a);this.innerHTML=r.innerHTML}}customElements.define("cc-card",o);let n=document.createElement("template");n.innerHTML=`
<slot></slot>
`;class l extends HTMLElement{static get observedAttributes(){return["card-title","card-content","card-image","card-link","card-link-title","card-link-target"]}get i(){return this.getAttribute("card-title")}get u(){return this.getAttribute("card-content")}get O(){return this.getAttribute("card-image")}get H(){return this.getAttribute("card-link")}get I(){return this.getAttribute("card-link-title")}get A(){return this.getAttribute("card-link-target")}constructor(){super();let e=this.attachShadow({mode:"open"});this.q();e.append(n.content.cloneNode(true))}q(){let e=document.createElement("div");let c=document.createElement("div");c.classList.add("cc-card-image");let t=document.createElement("div");t.classList.add("cc-card-image-thumb");t.style.setProperty("--image-thumb-card",'url("'+this.O+'")');c.appendChild(t);let r=document.createElement("div");r.classList.add("cc-card-image-info");let a=document.createElement("h3");a.innerHTML=this.i;a.classList.add("cc-h3");r.appendChild(a);let o=document.createElement("p");o.classList.add("cc-card-image-text");o.innerHTML=this.u;r.appendChild(o);if(this.I){let e=document.createElement("a");e.classList.add("cc-card-image-link");let c=document.createTextNode(this.I);e.appendChild(c);let t=document.createElement("ion-icon");t.classList.add("cc-card-image-link-icon");t.setAttribute("name","arrow-forward-circle-outline");e.appendChild(t);e.href=this.H;e.title=this.I;e.target=this.A;r.appendChild(e)}c.appendChild(r);e.appendChild(c);this.innerHTML=e.innerHTML}}customElements.define("cc-cardimage",l);let i=document.createElement("template");i.setAttribute("id","cc-carousel");i.innerHTML=`
<slot></slot>
`;class d extends HTMLElement{static get observedAttributes(){return["carousel-textcolor","carousel-cardcolor"]}constructor(){super();let e=this.attachShadow({mode:"open"});this.B();e.append(i.content.cloneNode(true))}B(){let r=document.createElement("div");let o=ccCarouselContent;let n="",l="";if(o){let e=document.createElement("div");e.classList.add("cc-carousel-wrapper");let c=document.createElement("ion-icon");c.classList.add("cc-carousel-nav");c.setAttribute("id","left");c.setAttribute("name","arrow-back-circle-outline");e.appendChild(c);let a=document.createElement("ul");a.classList.add("cc-carousel");o.forEach(e=>{n=e.url;l=e.title;let c=document.createElement("li");c.classList.add("cc-carousel-card");c.classList.add("cc-background-color-white");let t=document.createElement("img");t.classList.add("cc-carousel-card-img");t.setAttribute("src",n);t.setAttribute("alt",l);t.setAttribute("title",l);t.setAttribute("is-draggable","false");let r=document.createElement("span");r.classList.add("cc-text-color-black");r.innerHTML=e.content;c.appendChild(t);c.appendChild(r);a.appendChild(c)});e.appendChild(a);let t=document.createElement("ion-icon");t.classList.add("cc-carousel-nav");t.setAttribute("id","right");t.setAttribute("name","arrow-forward-circle-outline");e.appendChild(t);r.appendChild(e)}this.innerHTML=r.innerHTML}}customElements.define("cc-carousel",d);var s=document.querySelector(".cc-carousel-wrapper");if(s){var u=document.querySelector(".cc-carousel");var m=u.querySelector(".cc-carousel-card").offsetWidth;var h=document.querySelectorAll(".cc-carousel-nav");var g=[...u.children];var b=false,v=true,k,f,p;var w=Math.round(u.offsetWidth/m);g.slice(-w).reverse().forEach(e=>{});g.slice(0,w).forEach(e=>{});u.scrollLeft=0;h.forEach(c=>{c.addEventListener("click",e=>{u.scrollLeft+=c.id==="left"?-m:m})});var S=e=>{b=true;u.classList.add("cc-carousel-dragging");k=e.pageX;f=u.scrollLeft};var U=e=>{if(!b)return;u.scrollLeft=f-(e.pageX-k)};var G=e=>{b=false;u.classList.remove("cc-carousel-dragging")};var V=e=>{if(u.scrollLeft===0){u.classList.add("cc-no-transition");u.scrollLeft=u.scrollWidth-2*u.offsetWidth;u.classList.remove("cc-no-transition")}else if(Math.ceil(u.scrollLeft)>=u.scrollWidth-u.offsetWidth){u.classList.add("cc-no-transition");u.scrollLeft=u.offsetWidth;u.classList.remove("cc-no-transition")}clearTimeout(p);if(!s.matches(":hover"))y()};var y=e=>{if(window.innerWidth<800||!v)return;p=setTimeout(e=>u.scrollLeft+=m,3500)}}let x=document.querySelectorAll(".cc-video-slider-nav-btn");let L=document.querySelectorAll(".cc-video-bg");let z=document.querySelectorAll(".cc-content");if(x&&L&&z){let t=function(e){x.forEach(e=>{e.classList.remove("active-video-slide")});L.forEach(e=>{e.classList.remove("active-video-slide")});z.forEach(e=>{e.classList.remove("active-video-slide")});x[e].classList.add("active-video-slide");L[e].classList.add("active-video-slide");z[e].classList.add("active-video-slide")};x.forEach((e,c)=>{e.addEventListener("click",()=>{t(c)})})}let F=document.querySelector("#cc-hamburger-menu");let C=document.querySelectorAll(".footer__layout nav .cc-icon");document.addEventListener("DOMContentLoaded",function(){if(F){F.addEventListener("change",M)}});function M(){[].forEach.call(C,function(e){e.classList.toggle("visibility-hidden")})}let T=document.querySelector(".square");if(T){T.classList.remove("square-transition")}let E=new IntersectionObserver(e=>{e.forEach(e=>{if(e.isIntersecting){e.target.classList.add("square-animation");return}e.target.classList.remove("square-animation")})});let O=document.querySelectorAll(".square");O.forEach(e=>E.observe(e));let H=new IntersectionObserver(e=>{e.forEach(e=>{if(e.isIntersecting)e.target.classList.add("show-on-scroll")})});let I=document.querySelectorAll(".hidden-on-scroll");I.forEach(e=>H.observe(e));let A=new IntersectionObserver(e=>{e.forEach(e=>{if(e.isIntersecting)e.target.classList.add("show-on-scroll-left")})});let q=document.querySelectorAll(".hidden-on-scroll-left");q.forEach(e=>A.observe(e));let _=new IntersectionObserver(e=>{e.forEach(e=>{if(e.isIntersecting)e.target.classList.add("show-on-scroll-right")})});let D=document.querySelectorAll(".hidden-on-scroll-right");D.forEach(e=>_.observe(e));let j=new IntersectionObserver(e=>{e.forEach(e=>{if(e.isIntersecting)e.target.classList.add("show-on-scroll-top")})});let J=document.querySelectorAll(".hidden-on-scroll-top");J.forEach(e=>j.observe(e));let K=new IntersectionObserver(e=>{e.forEach(e=>{if(e.isIntersecting)e.target.classList.add("show-on-scroll-bottom")})});let N=document.querySelectorAll(".hidden-on-scroll-bottom");N.forEach(e=>K.observe(e));let B=document.createElement("template");B.innerHTML=`
<slot></slot>
`;class P extends HTMLElement{constructor(){super();let e=this.attachShadow({mode:"open"});this.S();e.append(B.content.cloneNode(true))}S(){let e=document.createElement("div");let c=document.createElement("footer");e.appendChild(c);let t=document.createElement("div");t.classList.add("footer--menu");c.appendChild(t);let r=document.createElement("div");t.appendChild(r);let a=document.createElement("div");a.setAttribute("id","block-aquafinaddress");r.appendChild(a);let o=document.createElement("div");o.classList.add("footer--address");a.appendChild(o);let n=document.createElement("div");n.classList.add("footer--logo");o.appendChild(n);let l=document.createElement("a");l.setAttribute("href",ccFooterLogoLink);l.setAttribute("target",ccFooterLogoTarget);n.appendChild(l);let S='<svg xmlns="http://www.w3.org/2000/svg" width="462" height="335" class="svg footer--logo-svg replaced-svg" viewBox="0 0 335 462"><g fill="none" fill-rule="evenodd"><path d="M64.9 302.6L58.6 284H24.2l-6.3 18.6H.3l31.8-90.8h19.8l32.4 90.8H64.9zm-19.4-56.3c-1.7-5-3.1-9.4-4.2-14.5h-.1c-1.1 4.7-2.6 10-4.3 15.2l-8.2 23.1H54l-8.5-23.8zm88.9 88.7v-30.3c0-3.6.1-8.6.9-12.9l-.3-.1c-3.5 7.7-10.9 12.4-19.8 12.4-16 0-24.8-10.8-24.8-31.4 0-22.6 12.9-38.2 36.5-38.2 9.4 0 17.2.8 24.5 2V335h-17zm0-86c-2.8-.5-5.7-.9-9-.9-9.8 0-16.8 6.2-16.8 22.7 0 12.5 3.6 19 11.3 19 9 0 14.5-10.5 14.5-22.2V249zm76.7 53.6c0-3.1.1-8.3.8-11.8l-.1-.1c-4 7.9-11.7 13.5-22.7 13.5-15.1 0-19.9-9.7-19.9-21.4v-47h17.1v42.8c0 7 1.9 11.2 8.3 11.2 8.7 0 15.5-10 15.5-21.7v-32.3h17.2v66.9h-16.2v-.1zm233.4 0v-42.8c0-7-1.9-11.2-8.2-11.2-8.7 0-15.6 10-15.6 21.7v32.3h-17.2v-66.9h16.3c0 3.1-.3 8.3-.9 11.8l.1.1c4-7.9 11.8-13.5 22.7-13.5 15.1 0 19.9 9.7 19.9 21.4v47h-17.1v.1zm-162.1-.4c0-3.9.1-7.7.7-11.2l-.1-.1c-3.2 7.5-11.3 12.7-21.2 12.7-12 0-18.9-6.8-18.9-17.4 0-15.9 15.7-24.3 38.2-24.3v-3.6c0-6.9-4.4-10.7-12.6-10.7-5 0-10.9.7-18.5 2.7l-1.8-13.4c9.6-1.7 15-2.3 22.6-2.3 21.3 0 27.3 8.7 27.3 23.1v27.6c0 5.3.1 11.6.4 17.1h-16.1v-.2zm-1.3-29.3c-18 0-22 5.2-22 10.5 0 4.3 2.9 7.1 7.9 7.1 8.4 0 14.1-8 14.1-16v-1.6zm75.2-55.8c-1.6-.1-3.7-.2-6.3-.2-7.5 0-10.9 4.3-10.9 13.2v5.6h15.6V249h-15.6v53.5H322V249h-11.7v-13.3H322v-5.4c0-18.1 8.3-27 26.6-27 3.6 0 6.9.1 10.5.5l-2.8 13.3zm20 10c-5.9 0-10.6-4.7-10.6-10.5 0-5.6 4.7-10.4 10.6-10.4 5.9 0 10.7 4.6 10.7 10.4 0 5.8-4.8 10.5-10.7 10.5zm-8.6 8.6h17.2v66.8h-17.2v-66.8z" fill="#FFF"></path><path d="M154.8 186.6c2.3-4.9 5.7-9.9 11-15.3 26-26 45.4-6.6 71.5-32.6s6.5-45.5 32.5-71.5 45.5-6.5 71.5-32.5c5.3-5.2 8.7-10.2 11-15.1L332.8.2c-2.3 4.8-5.7 9.8-11 15.1-26 26-45.5 6.5-71.5 32.5s-6.4 45.6-32.4 71.7c-26 26-46.6 7.3-71.7 32.4-5.3 5.3-8.7 10.4-10.9 15.4l19.5 19.3z" fill="#009FE3"></path><path d="M186 217.8c2.3-4.9 5.7-9.9 11-15.3 26-26 45.4-6.6 71.4-32.6 26-26 6.5-45.5 32.5-71.5s45.5-6.5 71.5-32.5c5.3-5.2 8.7-10.2 11-15.1L364 31.4c-2.3 4.9-5.7 9.8-11 15.1-26 26-45.5 6.5-71.5 32.5s-6.4 45.6-32.4 71.7c-26 26-46.6 7.3-71.7 32.4-5.3 5.3-8.7 10.5-10.9 15.4l19.5 19.3z" fill="#3ABFF0"></path><path d="M312.2 109.7c-5.2 5.2-8.6 10.1-10.8 14.9l19.5 19.5c2.3-4.8 5.7-9.7 10.9-14.9 26-26 45.5-6.5 71.5-32.5 5.3-5.3 8.7-10.2 11-15.1l-19.5-19.5c-2.3 4.8-5.7 9.8-11 15.1-26.1 26-45.6 6.5-71.6 32.5" fill="#B4E1FA"></path></g></svg>';n.innerHTML=S;let i=document.createElement("span");i.setAttribute("itemscope","");i.setAttribute("itemprop","organization");i.setAttribute("itemtype","http://schema.org/Organization");let d=document.createElement("p");d.innerHTML=ccFooterOrgAddress;i.appendChild(d);let s=document.createElement("p");s.innerHTML=ccFooterOrgContact;i.appendChild(s);let u=document.createElement("p");u.innerHTML=ccFooterOrgEmergency;i.appendChild(u);o.appendChild(i);let m=document.createElement("p");let h=document.createElement("a");h.setAttribute("href",ccFooterOrgLinkUrl);h.setAttribute("title",ccFooterOrgLinkTitle);h.setAttribute("target",ccFooterOrgLinkTarget);let U=document.createTextNode(ccFooterOrgLinkText);h.appendChild(U);m.appendChild(h);o.appendChild(m);let g=document.createElement("div");g.classList.add("footer--social");let G="";let b="";let v="";let V="";let _="";let k="";let f="";ccFooterSocial.forEach(e=>{G=e.social;switch(G){case"facebook":b="social--link-facebook";v="logo-facebook";break;case"youtube":b="social--link-youtube";v="logo-youtube";break;case"instagram":b="social--link-instagram";v="logo-instagram";break;case"linkedin":b="social--link-linkedin";v="logo-linkedin";break}V=e.link;_=e.linkTarget;k=document.createElement("a");k.setAttribute("href",V);k.setAttribute("target",_);k.classList.add("social--link");k.classList.add(b);f=document.createElement("ion-icon");f.setAttribute("name",v);f.setAttribute("role","img");f.classList.add("md");f.classList.add("hydrated");f.classList.add("cc-footer-icon");k.appendChild(f);g.appendChild(k)});o.appendChild(g);let p=document.createElement("div");p.setAttribute("id","block-footermenu");p.classList.add("footer_menu--items");r.appendChild(p);let w=document.createElement("div");w.setAttribute("block","block-footermenu");p.appendChild(w);let y=document.createElement("ul");y.classList.add("menu");w.appendChild(y);let D="";let j="";let J="";let K="";let N="";let x="";let L="";let P="";let z="";let F="";let Q="";let C="";let M="";let R="";ccFooterMenu.forEach(e=>{D=e.parent;x=document.createElement("li");x.classList.add("menu-item");x.classList.add("menu-item--expanded");L=document.createElement("a");L.setAttribute("href","#");P=document.createTextNode(D);L.appendChild(P);x.appendChild(L);z=document.createElement("div");z.classList.add("menu_expander");x.appendChild(z);F=document.createElement("ul");F.classList.add("menu");Q=e.menuItems;Q.forEach(e=>{j=e.menuLink;J=e.menuTitle;K=e.menuText;N=e.menuTarget;C=document.createElement("li");C.classList.add("menu-item");M=document.createElement("a");M.setAttribute("href",j);M.setAttribute("title",J);M.setAttribute("target",N);R=document.createTextNode(K);M.appendChild(R);C.appendChild(M);F.appendChild(C)});x.appendChild(F);y.appendChild(x)});let T=document.createElement("div");T.classList.add("footer--legal");let W=document.createElement("div");T.appendChild(W);let E=document.createElement("div");E.setAttribute("id","block-aquafinlegal");W.appendChild(E);let O=document.createElement("div");O.classList.add("footer--legal-copyright");O.innerText=ccFooterLegalCopy;E.appendChild(O);let H=document.createElement("div");H.classList.add("footer--legal-links");let I=document.createElement("ul");let X="";let Y="";let Z="";let $="";let A="";let q="";let ee="";ccFooterLegalLinks.forEach(e=>{X=e.legalLinkUrl;Y=e.legalLinkTitle;Z=e.legalLinkText;$=e.legalLinkTarget;A=document.createElement("li");q=document.createElement("a");q.setAttribute("href",X);q.setAttribute("title",Y);q.setAttribute("target",$);ee=document.createTextNode(Z);q.appendChild(ee);A.appendChild(q);I.appendChild(A)});let ce=document.createElement("li");let B=document.createElement("a");B.setAttribute("href","#cookieManagerModal");B.setAttribute("role","button");B.setAttribute("title","Beheer - cookies toestaan");B.setAttribute("data-target","#cookieManagerModal");B.setAttribute("data-toggle","modal");let te=document.createTextNode("Beheer - cookies toestaan");B.appendChild(te);ce.appendChild(B);I.appendChild(ce);H.appendChild(I);E.appendChild(H);c.appendChild(T);this.innerHTML=e.innerHTML}}customElements.define("cc-footer",P);

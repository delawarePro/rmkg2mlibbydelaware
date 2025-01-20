,let e=document.createElement("template");e.setAttribute("id","cardgrid");e.innerHTML=`
<slot></slot>
`;class c extends HTMLElement{static get observedAttributes(){return["data-columns"]}get t(){return this.getAttribute("data-columns")}constructor(){super();const c=this.attachShadow({mode:"open"});this.o();c.append(e.content.cloneNode(true))}o(){let c=ccGridCardContent;let e="";let r=document.createElement("div");let t=document.createElement("div");t.classList.add("grid");t.setAttribute("data-columns",this.t);c.forEach(c=>{e=this.i(c);t.appendChild(e)});console.log(t.innerHTML);r.appendChild(t);this.innerHTML=r.innerHTML}i(c){let e="",r="",t="";let a="",o="";let n="",i="";let l="default";let d="";let s="",u="";e=c.imgurl;r=c.imgtext;t=c.imgalt;let m=document.createElement("img");m.setAttribute("src",e);m.setAttribute("alt",t);m.setAttribute("title",r);m.setAttribute("is-draggable","false");a=c.buttontext;o=c.buttonurl;let h=document.createElement("h3");let b=document.createElement("a");b.classList.add("btn");b.setAttribute("href",o);let g=document.createTextNode(a);b.appendChild(g);h.appendChild(b);n=c.title;let k=document.createElement("h4");let v=document.createTextNode(n);k.appendChild(v);i=c.content;let f=document.createElement("p");let w=document.createTextNode(i);f.appendChild(w);d=document.createElement("div");d.classList.add("card");let p=c.cardappear;switch(p){case"default":s="hidden-on-scroll";break;case"left":s="hidden-on-scroll-left";break;case"right":s="hidden-on-scroll-right";break;case"top":s="hidden-on-scroll-top";break;case"bottom":s="hidden-on-scroll-bottom";break;default:s="";break}let y=c.cardappeardelay;switch(y){case"200ms":u="show-on-scroll-delay-200ms";break;case"400ms":u="show-on-scroll-delay-400ms";break;case"600ms":u="show-on-scroll-delay-600ms";break;case"800ms":u="show-on-scroll-delay-800ms";break;case"1s":u="show-on-scroll-delay-1s";break;default:u="";break}if(s!="")d.classList.add(s);if(u!="")d.classList.add(u);l=c.elementorder;switch(l){case"btn-img-title-text":d.appendChild(h);d.appendChild(m);d.appendChild(k);d.appendChild(f);break;case"title-text-img-btn":d.appendChild(k);d.appendChild(f);d.appendChild(m);d.appendChild(h);break;case"title-img-text-btn":d.appendChild(k);d.appendChild(m);d.appendChild(f);d.appendChild(h);break;default:d.appendChild(k);d.appendChild(m);d.appendChild(f);d.appendChild(h);break}return d}}customElements.define("cc-cardgrid",c);let r=document.createElement("template");r.innerHTML=`
<slot></slot>
`;class t extends HTMLElement{static get observedAttributes(){return["card-title","card-content","card-color","card-icon","card-size","card-switch-img"]}get l(){return this.getAttribute("card-title")}get u(){return this.getAttribute("card-content")}get m(){return this.getAttribute("card-color")}get h(){return this.getAttribute("card-icon")}get g(){return this.getAttribute("card-size")}get k(){return this.getAttribute("card-switch-img")}constructor(){super();const c=this.attachShadow({mode:"open"});this.v();c.append(r.content.cloneNode(true))}v(){let c="water-outline";switch(this.h){case"paperplane":c='<ion-icon name="paper-plane-outline" aria-hidden="true" class="cc-card-icon"></ion-icon>';break;case"rocket":c='<ion-icon name="rocket-outline" aria-hidden="true" class="cc-card-icon"></ion-icon>';break;case"leaf":c='<ion-icon name="leaf-outline" aria-hidden="true" class="cc-card-icon"></ion-icon>';break;case"planet":c='<ion-icon name="planet-outline" aria-hidden="true" class="cc-card-icon"></ion-icon>';break;case"earth":c='<ion-icon name="earth-outline" aria-hidden="true" class="cc-card-icon"></ion-icon>';break;case"heartbeat":c='<ion-icon name="fitness-outline" aria-hidden="true" class="cc-card-icon"></ion-icon>';break;case"flash":c='<ion-icon name="flash-outline" aria-hidden="true" class="cc-card-icon"></ion-icon>';break;case"ribbon":c='<ion-icon name="ribbon-outline" aria-hidden="true" class="cc-card-icon"></ion-icon>';break;case"diamond":c='<ion-icon name="diamond-outline" aria-hidden="true" class="cc-card-icon"></ion-icon>';break;case"heart":c='<ion-icon name="heart-circle-outline" aria-hidden="true" class="cc-card-icon"></ion-icon>';break;default:c='<ion-icon name="water-outline" aria-hidden="true" class="cc-card-icon"></ion-icon>';break}let e='<div class="cc-card-icon-corner">'+c+"</div>";let r="";switch(this.g){case"medium":r="cc-card-medium";break;case"large":r="cc-card-large";break;case"x-large":r="cc-card-x-large";break;default:r="";break}let t=document.createElement("div");let a=document.createElement("div");a.classList.add("cc-card");if(r!="")a.classList.add(r);if(this.m=="switch"){a.style="background: url('"+this.k+"'); background-size: cover;"}let o=document.createElement("h3");o.innerHTML=this.l;o.classList.add("cc-h3");a.appendChild(o);let n=document.createElement("p");n.innerHTML=this.u;a.appendChild(n);let i=document.createElement("div");i.classList.add("cc-card-corner");i.innerHTML=e;a.appendChild(i);switch(this.m){case"primary":a.classList.add("cc-card-clr-primary");a.classList.add("cc-card-border-clr-primary");i.classList.add("cc-card-corner-clr-primary");break;case"white-primary":a.classList.add("cc-card-clr-white");a.classList.add("cc-card-border-clr-primary");i.classList.add("cc-card-corner-clr-primary");break;case"secondary":a.classList.add("cc-card-clr-secondary");a.classList.add("cc-card-border-clr-secondary");i.classList.add("cc-card-corner-clr-secondary");break;case"white-secondary":a.classList.add("cc-card-clr-white-secondary");a.classList.add("cc-card-border-clr-secondary");i.classList.add("cc-card-corner-clr-secondary");break;case"yellow":a.classList.add("cc-card-clr-accent-yellow");a.classList.add("cc-card-border-clr-yellow");i.classList.add("cc-card-corner-clr-accent-yellow");break;case"orange":a.classList.add("cc-card-clr-accent-orange");a.classList.add("cc-card-border-clr-orange");i.classList.add("cc-card-corner-clr-accent-orange");break;case"green":a.classList.add("cc-card-clr-accent-green");a.classList.add("cc-card-border-clr-green");i.classList.add("cc-card-corner-clr-accent-green");break;case"red":a.classList.add("cc-card-clr-accent-red");a.classList.add("cc-card-border-clr-red");i.classList.add("cc-card-corner-clr-accent-red");break;case"blue":a.classList.add("cc-card-clr-accent-blue");a.classList.add("cc-card-border-clr-blue");i.classList.add("cc-card-corner-clr-accent-blue");break;case"switch":a.classList.add("cc-card-clr-switch");a.classList.add("cc-card-border-clr-switch");i.classList.add("cc-card-corner-clr-primary");break;default:a.classList.add("cc-card-clr-primary");a.classList.add("cc-card-border-clr-primary");i.classList.add("cc-card-corner-clr-primary");break}t.appendChild(a);this.innerHTML=t.innerHTML}}customElements.define("cc-card",t);let a=document.createElement("template");a.innerHTML=`
<slot></slot>
`;class o extends HTMLElement{static get observedAttributes(){return["card-title","card-content","card-image","card-link","card-link-title","card-link-target"]}get l(){return this.getAttribute("card-title")}get u(){return this.getAttribute("card-content")}get p(){return this.getAttribute("card-image")}get C(){return this.getAttribute("card-link")}get I(){return this.getAttribute("card-link-title")}get T(){return this.getAttribute("card-link-target")}constructor(){super();const c=this.attachShadow({mode:"open"});this.L();c.append(a.content.cloneNode(true))}L(){let c=document.createElement("div");let e=document.createElement("div");e.classList.add("cc-card-image");let r=document.createElement("div");r.classList.add("cc-card-image-thumb");r.style.setProperty("--image-thumb-card",'url("'+this.p+'")');e.appendChild(r);let t=document.createElement("div");t.classList.add("cc-card-image-info");let a=document.createElement("h3");a.innerHTML=this.l;a.classList.add("cc-h3");t.appendChild(a);let o=document.createElement("p");o.classList.add("cc-card-image-text");o.innerHTML=this.u;t.appendChild(o);if(this.I){let c=document.createElement("a");c.classList.add("cc-card-image-link");let e=document.createTextNode(this.I);c.appendChild(e);let r=document.createElement("ion-icon");r.classList.add("cc-card-image-link-icon");r.setAttribute("name","arrow-forward-circle-outline");c.appendChild(r);c.href=this.C;c.title=this.I;c.target=this.T;t.appendChild(c)}e.appendChild(t);c.appendChild(e);this.innerHTML=c.innerHTML}}customElements.define("cc-cardimage",o);let n=document.createElement("template");n.setAttribute("id","cc-carousel");n.innerHTML=`
<slot></slot>
`;class i extends HTMLElement{static get observedAttributes(){return["carousel-textcolor","carousel-cardcolor"]}get M(){return this.getAttribute("carousel-textcolor")}get O(){return this.getAttribute("carousel-cardcolor")}constructor(){super();const c=this.attachShadow({mode:"open"});this.q();c.append(n.content.cloneNode(true))}q(){let o="cc-text-color-white";switch(this.M){case"primary":o="cc-text-color-primary";case"secondary":o="cc-text-color-secondary";case"basic":o="cc-text-color-basic"}let n="cc-bg-color-white";switch(this.O){case"primary":n="cc-bg-color-primary-light";case"secondary":n="cc-bg-color-secondary-light";case"basic":n="cc-bg-color-basic-light";case"nocolor":n=""}let t=document.createElement("div");let i=ccCarouselContent;let l="",d="";if(i){let c=document.createElement("div");c.classList.add("cc-carousel-wrapper");let e=document.createElement("ion-icon");e.classList.add("cc-carousel-nav");e.setAttribute("id","left");e.setAttribute("name","arrow-back-circle-outline");c.appendChild(e);let a=document.createElement("ul");a.classList.add("cc-carousel");i.forEach(c=>{l=c.url;d=c.title;let e=document.createElement("li");e.classList.add("cc-carousel-card");if(n)e.classList.add(n);let r=document.createElement("img");r.classList.add("cc-carousel-card-img");r.setAttribute("src",l);r.setAttribute("alt",d);r.setAttribute("title",d);r.setAttribute("is-draggable","false");let t=document.createElement("span");t.classList.add(o);t.innerText=c.content;e.appendChild(r);e.appendChild(t);a.appendChild(e)});c.appendChild(a);let r=document.createElement("ion-icon");r.classList.add("cc-carousel-nav");r.setAttribute("id","right");r.setAttribute("name","arrow-forward-circle-outline");c.appendChild(r);t.appendChild(c)}this.innerHTML=t.innerHTML}}customElements.define("cc-carousel",i);var l=document.querySelector(".cc-carousel-wrapper");if(l){var d=document.querySelector(".cc-carousel");var s=d.querySelector(".cc-carousel-card").offsetWidth;var u=document.querySelectorAll(".cc-carousel-nav");var m=[...d.children];var h=false,b=true,g,k,v;var f=Math.round(d.offsetWidth/s);m.slice(-f).reverse().forEach(c=>{});m.slice(0,f).forEach(c=>{});d.scrollLeft=0;u.forEach(e=>{e.addEventListener("click",c=>{d.scrollLeft+=e.id==="left"?-s:s})});var S=c=>{h=true;d.classList.add("cc-carousel-dragging");g=c.pageX;k=d.scrollLeft};var _=c=>{if(!h)return;d.scrollLeft=k-(c.pageX-g)};var j=c=>{h=false;d.classList.remove("cc-carousel-dragging")};var B=c=>{if(d.scrollLeft===0){d.classList.add("cc-no-transition");d.scrollLeft=d.scrollWidth-2*d.offsetWidth;d.classList.remove("cc-no-transition")}else if(Math.ceil(d.scrollLeft)>=d.scrollWidth-d.offsetWidth){d.classList.add("cc-no-transition");d.scrollLeft=d.offsetWidth;d.classList.remove("cc-no-transition")}clearTimeout(v);if(!l.matches(":hover"))w()};var w=c=>{if(window.innerWidth<800||!b)return;v=setTimeout(c=>d.scrollLeft+=s,3500)}}let p=document.querySelectorAll(".cc-video-slider-nav-btn");let y=document.querySelectorAll(".cc-video-bg");let x=document.querySelectorAll(".cc-content");if(p&&y&&x){let r=function(c){p.forEach(c=>{c.classList.remove("active-video-slide")});y.forEach(c=>{c.classList.remove("active-video-slide")});x.forEach(c=>{c.classList.remove("active-video-slide")});p[c].classList.add("active-video-slide");y[c].classList.add("active-video-slide");x[c].classList.add("active-video-slide")};p.forEach((c,e)=>{c.addEventListener("click",()=>{r(e)})})}let C=document.querySelector("#cc-hamburger-menu");let I=document.querySelectorAll(".footer__layout nav .cc-icon");document.addEventListener("DOMContentLoaded",function(){if(C){C.addEventListener("change",T)}});function T(){[].forEach.call(I,function(c){c.classList.toggle("visibility-hidden")})}let E=document.querySelector(".square");if(E){E.classList.remove("square-transition")}const L=new IntersectionObserver(c=>{c.forEach(c=>{if(c.isIntersecting){c.target.classList.add("square-animation");return}c.target.classList.remove("square-animation")})});const M=document.querySelectorAll(".square");M.forEach(c=>L.observe(c));const O=new IntersectionObserver(c=>{c.forEach(c=>{if(c.isIntersecting)c.target.classList.add("show-on-scroll")})});let q=document.querySelectorAll(".hidden-on-scroll");q.forEach(c=>O.observe(c));const z=new IntersectionObserver(c=>{c.forEach(c=>{if(c.isIntersecting)c.target.classList.add("show-on-scroll-left")})});let A=document.querySelectorAll(".hidden-on-scroll-left");A.forEach(c=>z.observe(c));const G=new IntersectionObserver(c=>{c.forEach(c=>{if(c.isIntersecting)c.target.classList.add("show-on-scroll-right")})});let H=document.querySelectorAll(".hidden-on-scroll-right");H.forEach(c=>G.observe(c));const D=new IntersectionObserver(c=>{c.forEach(c=>{if(c.isIntersecting)c.target.classList.add("show-on-scroll-top")})});let F=document.querySelectorAll(".hidden-on-scroll-top");F.forEach(c=>D.observe(c));const J=new IntersectionObserver(c=>{c.forEach(c=>{if(c.isIntersecting)c.target.classList.add("show-on-scroll-bottom")})});let K=document.querySelectorAll(".hidden-on-scroll-bottom");K.forEach(c=>J.observe(c));

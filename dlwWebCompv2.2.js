let c=document.createElement("template");c.setAttribute("id","cardgrid");c.innerHTML=`
<slot></slot>
`;class e extends HTMLElement{static get observedAttributes(){return["data-columns"]}get t(){return this.getAttribute("data-columns")}constructor(){super();const e=this.attachShadow({mode:"open"});this.i();e.append(c.content.cloneNode(true))}i(){let e=ccGridCardContent;let c="";let r=document.createElement("div");let t=document.createElement("div");t.classList.add("grid");t.setAttribute("data-columns",this.t);e.forEach(e=>{c=this.l(e);t.appendChild(c)});console.log(t.innerHTML);r.appendChild(t);this.innerHTML=r.innerHTML}l(e){let c="",r="",t="";let a="",n="";let i="",l="";let o="default";let s="";let d="",u="";c=e.imgurl;r=e.imgtext;t=e.imgalt;let m=document.createElement("img");m.setAttribute("src",c);m.setAttribute("alt",t);m.setAttribute("title",r);m.setAttribute("is-draggable","false");a=e.buttontext;n=e.buttonurl;let h=document.createElement("h3");let b=document.createElement("a");b.classList.add("btn");b.setAttribute("href",n);let g=document.createTextNode(a);b.appendChild(g);h.appendChild(b);i=e.title;let k=document.createElement("h4");let w=document.createTextNode(i);k.appendChild(w);l=e.content;let f=document.createElement("p");let p=document.createTextNode(l);f.appendChild(p);s=document.createElement("div");s.classList.add("card");let v=e.cardappear;switch(v){case"default":d="hidden-on-scroll";break;case"left":d="hidden-on-scroll-left";break;case"right":d="hidden-on-scroll-right";break;case"top":d="hidden-on-scroll-top";break;case"bottom":d="hidden-on-scroll-bottom";break;default:d="";break}let _=e.cardappeardelay;switch(_){case"200ms":u="show-on-scroll-delay-200ms";break;case"400ms":u="show-on-scroll-delay-400ms";break;case"600ms":u="show-on-scroll-delay-600ms";break;case"800ms":u="show-on-scroll-delay-800ms";break;case"1s":u="show-on-scroll-delay-1s";break;default:u="";break}if(d!="")s.classList.add(d);if(u!="")s.classList.add(u);o=e.elementorder;switch(o){case"btn-img-title-text":s.appendChild(h);s.appendChild(m);s.appendChild(k);s.appendChild(f);break;case"title-text-img-btn":s.appendChild(k);s.appendChild(f);s.appendChild(m);s.appendChild(h);break;case"title-img-text-btn":s.appendChild(k);s.appendChild(m);s.appendChild(f);s.appendChild(h);break;default:s.appendChild(k);s.appendChild(m);s.appendChild(f);s.appendChild(h);break}return s}}customElements.define("cc-cardgrid",e);let r=document.createElement("template");r.innerHTML=`
<slot></slot>
`;class t extends HTMLElement{static get observedAttributes(){return["card-title","card-content","card-color","img-alt","card-size","img-url","card-url","card-url-alt","card-url-text"]}get o(){return this.getAttribute("card-title")}get u(){return this.getAttribute("card-content")}get m(){return this.getAttribute("card-color")}get h(){return this.getAttribute("card-url")}get g(){return this.getAttribute("card-url-alt")}get k(){return this.getAttribute("card-url-text")}get p(){return this.getAttribute("card-size")}get v(){return this.getAttribute("img-url")}get _(){return this.getAttribute("img-alt")}constructor(){super();const e=this.attachShadow({mode:"open"});this.C();e.append(r.content.cloneNode(true))}C(){let e="";switch(this.p){case"medium":e="cc-card-medium";break;case"large":e="cc-card-large";break;case"x-large":e="cc-card-x-large";break;default:e="cc-card-medium";break}let c=document.createElement("div");let r=document.createElement("div");r.classList.add("cc-standard-card");if(e!="")r.classList.add(e);let t=document.createElement("img");t.classList.add("cc-standard-card-img");t.setAttribute("src",this.v);t.setAttribute("alt",this._);t.setAttribute("title",this._);r.appendChild(t);let a=document.createElement("h3");a.innerHTML=this.o;a.classList.add("cc-h3");r.appendChild(a);let n=document.createElement("p");n.innerHTML=this.u;r.appendChild(n);let i=document.createElement("a");i.setAttribute("href",this.h);i.setAttribute("alt",this.g);let l=document.createTextNode(this.k);i.appendChild(l);i.innerHTML+='<ion-icon name="chevron-forward-circle-outline" aria-hidden="true" class="cc-card-image-link-icon"></ion-icon>';r.appendChild(i);switch(this.m){case"default":r.classList.add("cc-standard-card-clr-white");r.classList.add("cc-standard-card-txt-dark");a.classList.add("cc-standard-card-txt-dark");i.classList.add("cc-btn");i.setAttribute("style","color: var(--clr-white) !important;");break;case"primary":r.classList.add("cc-standard-card-clr-primary");r.classList.add("cc-standard-card-txt-white");a.classList.add("cc-standard-card-txt-white");i.classList.add("cc-btn-alt-dark");i.setAttribute("style","color: var(--clr-white) !important;");break;case"secondary":r.classList.add("cc-standard-card-clr-secondary");r.classList.add("cc-standard-card-txt-white");a.classList.add("cc-standard-card-txt-white");i.classList.add("cc-btn-alt");i.setAttribute("style","color: var(--clr-white) !important;");break}c.appendChild(r);this.innerHTML=c.innerHTML}}customElements.define("cc-standardcard",t);let a=document.createElement("template");a.innerHTML=`
<slot></slot>
`;class n extends HTMLElement{static get observedAttributes(){return["card-title","card-content","card-color","card-icon","card-size","card-switch-img"]}get o(){return this.getAttribute("card-title")}get u(){return this.getAttribute("card-content")}get m(){return this.getAttribute("card-color")}get I(){return this.getAttribute("card-icon")}get p(){return this.getAttribute("card-size")}get T(){return this.getAttribute("card-switch-img")}constructor(){super();const e=this.attachShadow({mode:"open"});this.A();e.append(a.content.cloneNode(true))}A(){let e="water-outline";switch(this.I){case"paperplane":e='<ion-icon name="paper-plane-outline" aria-hidden="true" class="cc-card-icon"></ion-icon>';break;case"rocket":e='<ion-icon name="rocket-outline" aria-hidden="true" class="cc-card-icon"></ion-icon>';break;case"leaf":e='<ion-icon name="leaf-outline" aria-hidden="true" class="cc-card-icon"></ion-icon>';break;case"planet":e='<ion-icon name="planet-outline" aria-hidden="true" class="cc-card-icon"></ion-icon>';break;case"earth":e='<ion-icon name="earth-outline" aria-hidden="true" class="cc-card-icon"></ion-icon>';break;case"heartbeat":e='<ion-icon name="fitness-outline" aria-hidden="true" class="cc-card-icon"></ion-icon>';break;case"flash":e='<ion-icon name="flash-outline" aria-hidden="true" class="cc-card-icon"></ion-icon>';break;case"ribbon":e='<ion-icon name="ribbon-outline" aria-hidden="true" class="cc-card-icon"></ion-icon>';break;case"diamond":e='<ion-icon name="diamond-outline" aria-hidden="true" class="cc-card-icon"></ion-icon>';break;case"heart":e='<ion-icon name="heart-circle-outline" aria-hidden="true" class="cc-card-icon"></ion-icon>';break;default:e='<ion-icon name="water-outline" aria-hidden="true" class="cc-card-icon"></ion-icon>';break}let c='<div class="cc-card-icon-corner">'+e+"</div>";let r="";switch(this.p){case"medium":r="cc-card-medium";break;case"large":r="cc-card-large";break;case"x-large":r="cc-card-x-large";break;default:r="";break}let t=document.createElement("div");let a=document.createElement("div");a.classList.add("cc-card");if(r!="")a.classList.add(r);if(this.m=="switch"){a.style="background: url('"+this.T+"'); background-size: cover;"}let n=document.createElement("h3");n.innerHTML=this.o;n.classList.add("cc-h3");a.appendChild(n);let i=document.createElement("p");i.innerHTML=this.u;a.appendChild(i);let l=document.createElement("div");l.classList.add("cc-card-corner");l.innerHTML=c;a.appendChild(l);switch(this.m){case"primary":a.classList.add("cc-card-clr-primary");a.classList.add("cc-card-border-clr-primary");l.classList.add("cc-card-corner-clr-primary");break;case"white-primary":a.classList.add("cc-card-clr-white");a.classList.add("cc-card-border-clr-primary");l.classList.add("cc-card-corner-clr-primary");break;case"secondary":a.classList.add("cc-card-clr-secondary");a.classList.add("cc-card-border-clr-secondary");l.classList.add("cc-card-corner-clr-secondary");break;case"white-secondary":a.classList.add("cc-card-clr-white-secondary");a.classList.add("cc-card-border-clr-secondary");l.classList.add("cc-card-corner-clr-secondary");break;case"yellow":a.classList.add("cc-card-clr-accent-yellow");a.classList.add("cc-card-border-clr-yellow");l.classList.add("cc-card-corner-clr-accent-yellow");break;case"orange":a.classList.add("cc-card-clr-accent-orange");a.classList.add("cc-card-border-clr-orange");l.classList.add("cc-card-corner-clr-accent-orange");break;case"green":a.classList.add("cc-card-clr-accent-green");a.classList.add("cc-card-border-clr-green");l.classList.add("cc-card-corner-clr-accent-green");break;case"red":a.classList.add("cc-card-clr-accent-red");a.classList.add("cc-card-border-clr-red");l.classList.add("cc-card-corner-clr-accent-red");break;case"blue":a.classList.add("cc-card-clr-accent-blue");a.classList.add("cc-card-border-clr-blue");l.classList.add("cc-card-corner-clr-accent-blue");break;case"switch":a.classList.add("cc-card-clr-switch");a.classList.add("cc-card-border-clr-switch");l.classList.add("cc-card-corner-clr-primary");break;default:a.classList.add("cc-card-clr-primary");a.classList.add("cc-card-border-clr-primary");l.classList.add("cc-card-corner-clr-primary");break}t.appendChild(a);this.innerHTML=t.innerHTML}}customElements.define("cc-card",n);let i=document.createElement("template");i.innerHTML=`
<slot></slot>
`;class l extends HTMLElement{static get observedAttributes(){return["card-title","card-content","card-image","card-link","card-link-title","card-link-target"]}get o(){return this.getAttribute("card-title")}get u(){return this.getAttribute("card-content")}get L(){return this.getAttribute("card-image")}get M(){return this.getAttribute("card-link")}get O(){return this.getAttribute("card-link-title")}get D(){return this.getAttribute("card-link-target")}constructor(){super();const e=this.attachShadow({mode:"open"});this.U();e.append(i.content.cloneNode(true))}U(){let e=document.createElement("div");let c=document.createElement("div");c.classList.add("cc-card-image");let r=document.createElement("div");r.classList.add("cc-card-image-thumb");r.style.setProperty("--image-thumb-card",'url("'+this.L+'")');c.appendChild(r);let t=document.createElement("div");t.classList.add("cc-card-image-info");let a=document.createElement("h3");a.innerHTML=this.o;a.classList.add("cc-h3");t.appendChild(a);let n=document.createElement("p");n.classList.add("cc-card-image-text");n.innerHTML=this.u;t.appendChild(n);if(this.O){let e=document.createElement("a");e.classList.add("cc-card-image-link");let c=document.createTextNode(this.O);e.appendChild(c);let r=document.createElement("ion-icon");r.classList.add("cc-card-image-link-icon");r.setAttribute("name","arrow-forward-circle-outline");e.appendChild(r);e.href=this.M;e.title=this.O;e.target=this.D;t.appendChild(e)}c.appendChild(t);e.appendChild(c);this.innerHTML=e.innerHTML}}customElements.define("cc-cardimage",l);let o=document.createElement("template");o.setAttribute("id","cc-carousel");o.innerHTML=`
<slot></slot>
`;class s extends HTMLElement{static get observedAttributes(){return["carousel-textcolor","carousel-cardcolor"]}constructor(){super();const e=this.attachShadow({mode:"open"});this.q();e.append(o.content.cloneNode(true))}q(){let t=document.createElement("div");let n=ccCarouselContent;let i="",l="";if(n){let e=document.createElement("div");e.classList.add("cc-carousel-wrapper");let c=document.createElement("ion-icon");c.classList.add("cc-carousel-nav");c.setAttribute("id","left");c.setAttribute("name","arrow-back-circle-outline");e.appendChild(c);let a=document.createElement("ul");a.classList.add("cc-carousel");n.forEach(e=>{i=e.url;l=e.title;let c=document.createElement("li");c.classList.add("cc-carousel-card");c.classList.add("cc-background-color-white");let r=document.createElement("img");r.classList.add("cc-carousel-card-img");r.setAttribute("src",i);r.setAttribute("alt",l);r.setAttribute("title",l);r.setAttribute("is-draggable","false");let t=document.createElement("span");t.classList.add("cc-text-color-black");t.innerText=e.content;c.appendChild(r);c.appendChild(t);a.appendChild(c)});e.appendChild(a);let r=document.createElement("ion-icon");r.classList.add("cc-carousel-nav");r.setAttribute("id","right");r.setAttribute("name","arrow-forward-circle-outline");e.appendChild(r);t.appendChild(e)}this.innerHTML=t.innerHTML}}customElements.define("cc-carousel",s);var d=document.querySelector(".cc-carousel-wrapper");if(d){var u=document.querySelector(".cc-carousel");var m=u.querySelector(".cc-carousel-card").offsetWidth;var h=document.querySelectorAll(".cc-carousel-nav");var b=[...u.children];var g=false,k=true,w,f,p;var v=Math.round(u.offsetWidth/m);b.slice(-v).reverse().forEach(e=>{});b.slice(0,v).forEach(e=>{});u.scrollLeft=0;h.forEach(c=>{c.addEventListener("click",e=>{u.scrollLeft+=c.id==="left"?-m:m})});var H=e=>{g=true;u.classList.add("cc-carousel-dragging");w=e.pageX;f=u.scrollLeft};var G=e=>{if(!g)return;u.scrollLeft=f-(e.pageX-w)};var S=e=>{g=false;u.classList.remove("cc-carousel-dragging")};var j=e=>{if(u.scrollLeft===0){u.classList.add("cc-no-transition");u.scrollLeft=u.scrollWidth-2*u.offsetWidth;u.classList.remove("cc-no-transition")}else if(Math.ceil(u.scrollLeft)>=u.scrollWidth-u.offsetWidth){u.classList.add("cc-no-transition");u.scrollLeft=u.offsetWidth;u.classList.remove("cc-no-transition")}clearTimeout(p);if(!d.matches(":hover"))_()};var _=e=>{if(window.innerWidth<800||!k)return;p=setTimeout(e=>u.scrollLeft+=m,3500)}}let y=document.querySelectorAll(".cc-video-slider-nav-btn");let x=document.querySelectorAll(".cc-video-bg");let C=document.querySelectorAll(".cc-content");if(y&&x&&C){let r=function(e){y.forEach(e=>{e.classList.remove("active-video-slide")});x.forEach(e=>{e.classList.remove("active-video-slide")});C.forEach(e=>{e.classList.remove("active-video-slide")});y[e].classList.add("active-video-slide");x[e].classList.add("active-video-slide");C[e].classList.add("active-video-slide")};y.forEach((e,c)=>{e.addEventListener("click",()=>{r(c)})})}let z=document.querySelector("#cc-hamburger-menu");let I=document.querySelectorAll(".footer__layout nav .cc-icon");document.addEventListener("DOMContentLoaded",function(){if(z){z.addEventListener("change",T)}});function T(){[].forEach.call(I,function(e){e.classList.toggle("visibility-hidden")})}let A=document.querySelector(".square");if(A){A.classList.remove("square-transition")}const E=new IntersectionObserver(e=>{e.forEach(e=>{if(e.isIntersecting){e.target.classList.add("square-animation");return}e.target.classList.remove("square-animation")})});const L=document.querySelectorAll(".square");L.forEach(e=>E.observe(e));const M=new IntersectionObserver(e=>{e.forEach(e=>{if(e.isIntersecting)e.target.classList.add("show-on-scroll")})});let O=document.querySelectorAll(".hidden-on-scroll");O.forEach(e=>M.observe(e));const D=new IntersectionObserver(e=>{e.forEach(e=>{if(e.isIntersecting)e.target.classList.add("show-on-scroll-left")})});let U=document.querySelectorAll(".hidden-on-scroll-left");U.forEach(e=>D.observe(e));const q=new IntersectionObserver(e=>{e.forEach(e=>{if(e.isIntersecting)e.target.classList.add("show-on-scroll-right")})});let R=document.querySelectorAll(".hidden-on-scroll-right");R.forEach(e=>q.observe(e));const B=new IntersectionObserver(e=>{e.forEach(e=>{if(e.isIntersecting)e.target.classList.add("show-on-scroll-top")})});let F=document.querySelectorAll(".hidden-on-scroll-top");F.forEach(e=>B.observe(e));const J=new IntersectionObserver(e=>{e.forEach(e=>{if(e.isIntersecting)e.target.classList.add("show-on-scroll-bottom")})});let K=document.querySelectorAll(".hidden-on-scroll-bottom");K.forEach(e=>J.observe(e));document.addEventListener("DOMContentLoaded",function(){var a="nl-nl";if(document.getElementsByTagName("html")[0].getAttribute("lang")){a=document.getElementsByTagName("html")[0].getAttribute("lang")}var e=window.location.href.toLowerCase();var n=[{H:[{G:"deel op facebook"}],S:[{G:"deel op twitter"}],j:[{G:"deel op linkedin"}],R:[{G:"deel via email"}],B:[{G:"print deze pagina"}],F:[{G:"Deel deze pagina"}],J:[{G:""}],K:[{G:""}],N:[{G:""}],P:[{G:""}]}];function c(r){var t="";n.forEach(function(e,c){e===n[c];switch(r){case"lbl_share_fb":t=e.H[0][a.toLocaleLowerCase()];break;case"lbl_share_tw":t=e.S[0][a.toLocaleLowerCase()];break;case"lbl_share_li":t=e.j[0][a.toLocaleLowerCase()];break;case"lbl_share_em":t=e.R[0][a.toLocaleLowerCase()];break;case"lbl_share_this_page":t=e.F[0][a.toLocaleLowerCase()];break;case"lbl_print":t=e.R[0][a.toLocaleLowerCase()];break;case"lbl_em_subject":t=e.J[0][a.toLocaleLowerCase()];break;case"lbl_em_body_intro":t=e.K[0][a.toLocaleLowerCase()];break;case"lbl_em_body_msg":t=e.N[0][a.toLocaleLowerCase()];break;case"lbl_em_body_outro":t=e.P[0][a.toLocaleLowerCase()];break;default:t="key not found";break}});return t}var r=document.getElementById("cc-social-share");if(document.body.contains(r)){var t=encodeURIComponent(e);var i="";if(document.querySelector("[data-careersite-propertyid=title]")){i=encodeURIComponent(document.querySelector("[data-careersite-propertyid=title]").innerText)}var l="";if(document.title){l=document.title;l=document.querySelector("title").innerText}if(l==""){if(document.querySelector("h1")){l=document.querySelector("h1").innerText}}if(i==""){i=l}var o="<a onclick=\"window.open('http://www.linkedin.com/shareArticle?mini=true&amp;url="+t+'\', \'_blank\', \'location=yes,height=570,width=520,scrollbars=yes,status=yes,menubar=no,toolbar=no,resizable=yes\');" class="social-icon btn-linkedin" title="linkedin"  aria-label="'+c("lbl_share_li")+'" ><i class="fa fa-linkedin cc-social-icon" aria-hidden="true"></i></a>';var s='<a href="mailto:?subject='+i+"&body="+t+"%0D%0A%0D%0A"+c("lbl_em_body_outro")+'" class="cc-social-icon btn-email" title="email"  aria-label="'+c("lbl_share_em")+'"><i class="fa fa-envelope cc-social-icon" aria-hidden="true"></i></a>';var d="<a onclick=\"window.open('https://www.facebook.com/sharer/sharer.php?u="+t+"&t="+i+'\', \'_blank\', \'location=yes,height=570,width=520,scrollbars=yes,status=yes,menubar=no,toolbar=no,resizable=yes\');" class="social-icon btn-facebook" title="facebook"  aria-label="'+c("lbl_share_fa")+'" ><i class="fa fa-facebook cc-social-icon" aria-hidden="true"></i></a>';var u="<a onclick=\"window.open('http://twitter.com/share?url="+t+"&text="+i+'\', \'_blank\', \'location=yes,height=570,width=520,scrollbars=yes,status=yes,menubar=no,toolbar=no,resizable=yes\');" class="social-icon btn-twitter" title="twitter"  aria-label="'+c("lbl_share_tw")+'" ><i class="fa fa-twitter cc-social-icon" aria-hidden="true"></i></a>';var m="<a onclick=\"window.open('https://www.printfriendly.com/print?url="+t+'\', \'_blank\', \'location=yes,height=570,width=520,scrollbars=yes,status=yes,menubar=no,toolbar=no,resizable=yes\');" class="social-icon btn-print" title="print"  aria-label="'+c("lbl_print")+'" ><i class="fa fa-print cc-social-icon" aria-hidden="true"></i></a>';r.innerHTML='<div class="cc-share-page">'+c("lbl_share_this_page")+'<span class="cc-block-social-icon">'+d+u+o+s+m+"</span></div>"}});

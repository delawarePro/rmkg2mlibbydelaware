let searchBtn = document.querySelector(".cc-search-btn");
console.log(searchBtn);
let closeBtn = document.querySelector(".cc-close-btn");
let searchBox = document.querySelector(".cc-search-box");
let searchBoxInput = document.querySelector(".cc-search-box-input");
let searchBoxSubmitBtn = document.querySelector(".cc-submit-job-search-btn");
let headerNavigation = document.querySelector(".cc-header-navigation");
let mobileMenuToggle = document.querySelector(".cc-mobile-menu-toggle");
let mobileMenuClose = document.querySelector(".cc-mobile-menu-close");
let header = document.querySelector(".cc-header");

searchBtn.onclick = function() {
    searchBox.classList.add("active");
    closeBtn.classList.add("active");
    searchBoxSubmitBtn.classList.add("active");
    searchBtn.classList.add("hide");
    mobileMenuToggle.classList.add("hide");
    mobileMenuClose.classList.add("hide");
    header.classList.remove("open");
}

closeBtn.onclick = function() {
    searchBox.classList.remove("active");
    closeBtn.classList.remove("active");
    searchBoxSubmitBtn.classList.remove("active");
    searchBtn.classList.remove("active");
    searchBtn.classList.remove("hide");
    mobileMenuToggle.classList.remove("hide");
    searchBoxInput.value = "";
}

mobileMenuToggle.onclick = function() {
    header.classList.toggle("open");
    searchBox.classList.remove("active");
    closeBtn.classList.remove("active");
    searchBtn.classList.remove("active");
    mobileMenuClose.classList.remove("hide");
    mobileMenuToggle.classList.add("hide");
}

mobileMenuClose.onclick = function() {
    header.classList.toggle("open");
    searchBox.classList.remove("active");
    closeBtn.classList.remove("active");
    searchBtn.classList.remove("active");
    mobileMenuToggle.classList.remove("hide");
    mobileMenuClose.classList.add("hide");
}

/*initiate Primary Nav*/
const mainNav = document.createElement("main-nav");
// mainNav.setAttribute("class","");
const headerLogo = '<div><img src="https://rmkcdn.successfactors.com/67fb2e9b/b2932bd4-424b-49f8-bc9c-c.png" alt="Jobs @ Brussels Airport Company" class="logo"></div>'
const mobileNav = '<button class="mobile-nav-toggle" aria-controls="primary-navigation"><span class="sr-only" aria-expanded="false">Menu</span><svg stroke="var(--button-color)" class="hamburger" viewBox="0 0 100 100" width="35" data-state="closed" aria-expanded="false"><line class="line top" x1="90" x2="10" y1="40" y2="40" stroke-width="10" stroke-linecap="round" stroke-dasharray="80" stroke-dashoffset="0"></line><line class="line bottom" x1="10" x2="90" y1="60" y2="60" stroke-width="10" stroke-linecap="round" stroke-dasharray="80" stroke-dashoffset="0"></line></svg></button>';
mainNav.innerHTML = '<header class="flex primary-header">' + headerLogo + mobileNav + '<nav><ul data-navlist></ul></nav></header>';
document.body.insertBefore(mainNav, document.body.firstChild);

/*web component for Primary Nav*/
const navList = ccPrimaryNavDutch;
switch (languageToken) {
  case "fr":
    navList = ccPrimaryNavFrench;
    break;
}
const templateMainNav = document.createElement('template')
templateMainNav.innerHTML = `
<style>
    .nav-item {
        color: red;
    }
</style>
<slot></slot>
`
class MainNav extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' })
        render()
        shadow.append(templateMainNav.content.cloneNode(true))
    }
}
customElements.define('main-nav', MainNav)

function render() {
    const navContainer = document.querySelector('[data-navlist]');
    navContainer.setAttribute("id", "primary-navigation");
    navContainer.setAttribute("class","primary-navigation flex underline-indicators");
    navContainer.setAttribute("data-visible","false");
    navList.forEach(navItem => {
        const navElement = document.createElement('li')
        navElement.classList.add('nav-item')
        var navElementLink = document.createElement('a')
        navElementLink.setAttribute("class","ff-sans-normals text-dark fs-500 fw-700");
        var navElementLinkText = document.createTextNode(navItem.title)
        navElementLink.appendChild(navElementLinkText)
        navElementLink.href = navItem.url
        navElementLink.title = navItem.title
        navElementLink.target = navItem.target
        navElement.appendChild(navElementLink)
        navContainer.appendChild(navElement)
    })
}

/* web component for Hero Banner Image */
const heroElement = document.querySelector("hero-banner");
if (heroElement) {
  const hbHeight = heroElement.dataset.imgHeight;
  const hbUrl = heroElement.dataset.imgUrl;
  const hbPosition = heroElement.dataset.imgPosition;
  heroElement.style.setProperty("--bg-hero-banner-image-height", hbHeight + "px");
  heroElement.style.setProperty("--bg-hero-banner-image-url", "url("+hbUrl+")");
  heroElement.style.setProperty("--bg-hero-banner-image-position", hbPosition);
}

const templateHeroBanner = document.createElement('template');
templateHeroBanner.innerHTML = `
<style>
    .hero-banner-image {
        height: var(--bg-hero-banner-image-height);
        background-image: var(--bg-hero-banner-image-url);
        background-position: var(--bg-hero-banner-image-position);
    }    
</style>
<div class="hero-banner-image"></div>
`

class HeroBanner extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' })                
        shadow.append(templateHeroBanner.content.cloneNode(true));
    }
}
customElements.define('hero-banner', HeroBanner);


// Hamburger menu
const nav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");
const navHeight = nav.offsetHeight;
document.documentElement.style.setProperty(
  "--scroll-padding",
  navHeight + "px"
);

// animate the hamburger menu
navToggle.addEventListener("click", () => {
  const visibility = nav.getAttribute("data-visible");
  const currentState = navToggle.getAttribute("data-state");
  
  if (!currentState || currentState === "closed") {
    navToggle.setAttribute("data-state", "opened");
    navToggle.setAttribute("aria-expanded", "true");
  } else {
    navToggle.setAttribute("data-state", "closed");
    navToggle.setAttribute("aria-expanded", "false");
  }

  if (visibility === "false") {
    nav.setAttribute("data-visible", true);
  } else {
    nav.setAttribute("data-visible", false);
  }
});

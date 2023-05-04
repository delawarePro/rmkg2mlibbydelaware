/*initiate Primary Nav*/
const mainNav = document.createElement("main-nav");
// mainNav.setAttribute("class","");
const headerLogo = '<div><img src="https://rmkcdn.successfactors.com/67fb2e9b/b2932bd4-424b-49f8-bc9c-c.png" alt="Jobs @ Brussels Airport Company" class="logo"></div>'
const mobileNav = '<button class="mobile-nav-toggle aria-controls="primary-navigation"><span class="sr-only" aria-expanded="false">Menu</span><svg stroke="var(--button-color)" class="hamburger" viewBox="0 0 100 100" width="35" data-state="closed" aria-expanded="false"><line class="line top" x1="90" x2="10" y1="40" y2="40" stroke-width="10" stroke-linecap="round" stroke-dasharray="80" stroke-dashoffset="0"></line><line class="line bottom" x1="10" x2="90" y1="60" y2="60" stroke-width="10" stroke-linecap="round" stroke-dasharray="80" stroke-dashoffset="0"></line></svg></button>';
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

/* web component for header */
let ccHeader = document.createElement("header-nav");

let headerLogo = '<a href="/" class="cc-logo"><span><img class="cc-logo-img" src="https://rmkcdn.successfactors.com/67fb2e9b/d1df3933-c965-478f-8bb2-3.svg"/></span></a>';
let headerSearch = '<div class="cc-header-search"><span class="cc-icon"><a href="#" onclick="submitSearch()"><ion-icon name="search-outline" class="cc-submit-job-search-btn"></ion-icon></a><ion-icon name="search-outline" class="cc-search-btn"></ion-icon><ion-icon name="close-outline" class="cc-close-btn"></ion-icon></span></div>';
let mobileHeaderMenuToggle = '<ion-icon name="menu-outline" class="cc-mobile-menu-toggle"></ion-icon>';
let mobileHeaderMenuClose = '<ion-icon name="close-outline" class="cc-mobile-menu-close hide"></ion-icon>';
let headerSearchBox = '<div class="cc-search-box"><form name="keywordsearch" class="cc-search-form" method="get" role="search" action="/search/"><input name="createNewAlert" type="hidden" value="false"><input type="text" class="cc-search-box-input" placeholder="Zoek jobs" name="q" maxlength="50" aria-label="Zoek op trefwoord"></form></div>';
ccHeader.innerHTML = '<header class="cc-header">' + headerLogo + '<div class="cc-header-group">' + '<ul class="cc-header-navigation" data-navlist></ul>' + headerSearch + mobileHeaderMenuToggle + mobileHeaderMenuClose + '</div>' + headerSearchBox + '</header>';
document.body.insertBefore(ccHeader, document.body.firstChild);

/*web component for header*/
let navList = ccPrimaryNavDutch;
switch (languageToken) {
  case "fr":
    navList = ccPrimaryNavFrench;
    break;
}
let templateCcHeader = document.createElement('template');
templateCcHeader.innerHTML = `
<slot></slot>
`
class HeaderNav extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' })
        render()
        shadow.append(templateCcHeader.content.cloneNode(true))
    }
}
customElements.define('header-nav', HeaderNav)

function render() {
    const navContainer = document.querySelector('[data-navlist]');
    navList.forEach(navItem => {
        const navElement = document.createElement('li')
        let navElementLink = document.createElement('a')
        let navElementLinkText = document.createTextNode(navItem.title)
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




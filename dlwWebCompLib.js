/* web component for header */
let ccSearchNavigation = [
    {icon: '<a href="#" onclick="submitSearch()"><ion-icon name="search-outline" class="cc-submit-job-search-btn hide"></ion-icon>'},
    {icon: '<ion-icon name="search-outline" class="cc-search-btn"></ion-icon>'},
    {icon: '<ion-icon name="close-outline" class="cc-close-btn hide"></ion-icon>'},
    {icon: '<ion-icon name="menu-outline" class="cc-mobile-menu-toggle"></ion-icon>'},
    {icon: '<ion-icon name="close-outline" class="cc-mobile-menu-close hide"></ion-icon>'},
]

let navList = ccPrimaryNavDutch;
let navLocale = "locale=nl_NL";

switch (languageToken) {
  case "fr":
    navList = ccPrimaryNavFrench;
    navLocale = "locale=fr_FR";
    break;
}

/*initiate header*/
let ccHeader = document.createElement("header-nav");

let headerLogo = '<a href="/" class="cc-logo"><img src="https://rmkcdn.successfactors.com/67fb2e9b/d1df3933-c965-478f-8bb2-3.svg" title="Brussels Airport Company" class="cc-logo-img"/></a>';
//let headerSearch = '<div class="cc-header-search"><span class="cc-icon"><a href="#" onclick="submitSearch()"><ion-icon name="search-outline" class="cc-submit-job-search-btn hide"></ion-icon></a><ion-icon name="search-outline" class="cc-search-btn"></ion-icon><ion-icon name="close-outline" class="cc-close-btn hide"></ion-icon></span></div>';
//let mobileHeaderMenuToggle = '<ion-icon name="menu-outline" class="cc-mobile-menu-toggle"></ion-icon>';
//let mobileHeaderMenuClose = '<ion-icon name="close-outline" class="cc-mobile-menu-close hide"></ion-icon>';
let headerSearchBox = '<div class="cc-search-box"><form name="keywordsearch" class="cc-search-form" method="get" role="search" action="/search/"><input name="createNewAlert" type="hidden" value="false"><input type="text" class="cc-search-box-input" placeholder="Zoek jobs" name="q" maxlength="50" aria-label="Zoek op trefwoord"></form></div>';
//ccHeader.innerHTML = '<header class="cc-header">' + headerLogo + '<div class="cc-header-group">' + '<ul class="cc-header-navigation" data-navlist></ul>' + headerSearch + mobileHeaderMenuToggle + mobileHeaderMenuClose + '</div>' + headerSearchBox + '</header>';
ccHeader.innerHTML = '<header class="cc-header">' + headerLogo + '<div class="cc-header-group">' + '<ul class="cc-header-navigation" data-navlist></ul><ul class="cc-header-search" data-navsearchiconlist></ul></div>' + headerSearchBox + '</header>';
document.body.insertBefore(ccHeader, document.body.firstChild);

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
    let navContainer = document.querySelector('[data-navlist]');
    navList.forEach(navItem => {
        let navElement = document.createElement('li');
        let navElementLink = document.createElement('a');
        let navElementLinkText = document.createTextNode(navItem.title);
        navElementLink.appendChild(navElementLinkText);
        navElementLink.href = navItem.url;
        navElementLink.title = navItem.title;
        navElementLink.target = navItem.target;
        navElement.appendChild(navElementLink);
        navContainer.appendChild(navElement);
    });

    let navSearchContainer = document.querySelector('[data-navsearchiconlist]');
    ccSearchNavigation.forEach(ccSearchNavigationItem => {
        let navElementIcon = document.createElement('li');
        navElementIcon.innerHTML = ccSearchNavigationItem.icon;
        navSearchContainer.appendChild(navElementIcon);
    });
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

/*custom web component to create card*/
let templateCard = document.createElement('template');
templateCard.innerHTML = `
<slot></slot>
`

class Card extends HTMLElement {
    static get observedAttributes() {
        return['card-title','card-content','card-color'];
    }

    get cardTitle() {
        return this.getAttribute("card-title");
    }

    get cardContent() {
        return this.getAttribute("card-content");
    }

    get cardColor() {
        return this.getAttribute("card-color");
    }

    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        this.renderCard();
        shadow.append(templateCard.content.cloneNode(true))
    }

    renderCard() {
        let cardIcon = '<div class="cc-card-icon-corner"><ion-icon name="heart-circle-outline"></ion-icon></div>';

        let elementCardWrapper = document.createElement('div');

        let elementCard = document.createElement('div');
        elementCard.classList.add('cc-card');
        
        let elementCardTitle = document.createElement('h3');
        elementCardTitle.innerHTML = this.cardTitle;
        elementCard.appendChild(elementCardTitle);
        
        let elementCardContent = document.createElement('p');
        elementCardContent.innerHTML = this.cardContent;
        elementCard.appendChild(elementCardContent);
        
        let elementCardCorner = document.createElement('div');
        elementCardCorner.classList.add('cc-card-corner');
        
        elementCardCorner.innerHTML = cardIcon;
        elementCard.appendChild(elementCardCorner);
        
        switch (this.cardColor) {
            case "nightsky":
                elementCard.classList.add('cc-card-clr-nightsky');
                elementCardCorner.classList.add('cc-card-corner-clr-nightsky');
                break;
            case "dark":
                elementCard.classList.add('cc-card-clr-dark');
                elementCardCorner.classList.add('cc-card-corner-clr-dark');
                break;
            case "white":
                elementCard.classList.add('cc-card-clr-white');
                elementCardCorner.classList.add('cc-card-corner-clr-white');
                break;
            default:
                elementCard.classList.add('cc-card-clr-passion');
                elementCardCorner.classList.add('cc-card-corner-clr-passion');
            break;
        }

        elementCardWrapper.appendChild(elementCard);
        
        this.innerHTML = elementCardWrapper.innerHTML;
    }
}

customElements.define('cc-card', Card);



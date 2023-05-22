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

/*web component for footer*/
let elBody = document.querySelector('body');
let ccContainerCheck = document.querySelector('.cc-container');
if (!ccContainerCheck) {
    let ccCreateContainer = document.createElement('div');
    ccCreateContainer.classList.add('cc-container');
    ccCreateContainer.classList.add('cc-container-footer');
    elBody.appendChild(ccCreateContainer);
}
let ccContainer = document.querySelector('.cc-container');
let ccFooter = document.createElement('footer-nav');
ccContainer.append(ccFooter);

let navListFooterMenu = ccFooterNavDutch;
let navListFooterCopy = ccFooterCopyDutch;
let navListFooterSocial = ccFooterSocialMedia;
switch (languageToken) {
  case "fr":
    navListFooterMenu = ccFooterNavFrench;
    navListFooterCopy = ccFooterCopyFrench;
    break;
}
let templateCcFooter = document.createElement('template');
templateCcFooter.innerHTML = `
<slot></slot>
`
class FooterNav extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' })
        this.renderFooter()
        shadow.append(templateCcFooter.content.cloneNode(true))
    }

    renderFooter() {
        let elFooterWrapper = document.createElement('div');
        
        let elBottomSection = document.createElement('div');
        elBottomSection.classList.add('cc-bottom-section');
        
        let elFooter = document.createElement('footer');
        let elFooterContainer = document.createElement('div');
        elFooterContainer.classList.add('cc-footer-container');
        elFooter.appendChild(elFooterContainer);

        let elFooterCopy = document.createElement('div');
        elFooterCopy.classList.add('cc-footer-copy');
        elFooterContainer.appendChild(elFooterCopy);
        let elFooterCopySpan = document.createElement('span');
        elFooterCopySpan.innerHTML = '© ';
        navListFooterCopy.forEach(navListItem => {
            let elFooterCopySpanLink = document.createElement('a');
            let navElementLinkText = document.createTextNode(navListItem.title);
            elFooterCopySpanLink.appendChild(navElementLinkText);
            elFooterCopySpanLink.href = navListItem.url;
            elFooterCopySpanLink.title = navListItem.title;
            elFooterCopySpanLink.target = navListItem.target;
            elFooterCopySpan.appendChild(elFooterCopySpanLink);
        });
        elFooterCopy.appendChild(elFooterCopySpan);
         
        let elFooterMenu = document.createElement('div');
        elFooterMenu.classList.add('cc-footer-menu');
        navListFooterMenu.forEach(navListItem => {
            let elFooterMenuLink = document.createElement('a');
            let navElementLinkText = document.createTextNode(navListItem.title);
            elFooterMenuLink.appendChild(navElementLinkText);
            elFooterMenuLink.href = navListItem.url;
            elFooterMenuLink.title = navListItem.title;
            elFooterMenuLink.target = navListItem.target;
            if (navListItem.url == '#cookieManagerModal') {
                elFooterMenuLink.setAttribute('role','button');
                elFooterMenuLink.setAttribute('data-target','#cookieManagerModal');
                elFooterMenuLink.setAttribute('data-toggle','modal');
            }
            elFooterMenuLink.innerHTML += '\n';
            elFooterMenu.appendChild(elFooterMenuLink);
        });
        elFooterContainer.appendChild(elFooterMenu);

        let elFooterSocial = document.createElement('div');
        elFooterSocial.classList.add('cc-social-media-icon-group');
        elFooterContainer.appendChild(elFooterSocial);
        navListFooterSocial.forEach(navListItem => {
            let elFooterSocialLink = document.createElement('a');
            elFooterSocialLink.classList.add('cc-social-media-icon');
            elFooterSocialLink.href = navListItem.url;
            elFooterSocialLink.title = navListItem.title;
            elFooterSocialLink.target = navListItem.target;
            let elFooterSocialIcon = document.createElement('ion-icon');
            elFooterSocialIcon.setAttribute('name','logo-'+navListItem.channel);
            elFooterSocialLink.appendChild(elFooterSocialIcon);
            elFooterSocial.appendChild(elFooterSocialLink);
        });
        elFooterContainer.appendChild(elFooterSocial);
        
        elFooterWrapper.appendChild(elBottomSection);
        elFooterWrapper.appendChild(elFooter);
        this.innerHTML = elFooterWrapper.innerHTML;
        
    }
}
customElements.define('footer-nav', FooterNav);

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
        return['card-title','card-content','card-color','card-icon'];
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

    get cardIcon() {
        return this.getAttribute("card-icon");
    }

    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        this.renderCard();
        shadow.append(templateCard.content.cloneNode(true))
    }

    renderCard() {
        let cardIconName = "heart-circle-outline";
        switch (this.cardIcon) {
            case "paperplane":
                cardIconName = "paper-plane-outline";
                break;
            case "rocket":
                cardIconName = "rocket-outline";
                break;
            case "leaf":
                cardIconName = "leaf-outline";
                break;
            case "planet":
                cardIconName = "planet-outline";
                break;
            case "earth":
                cardIconName = "earth-outline";
                break;
            case "heartbeat":
                cardIconName = "fitness-outline";
                break;
            default:
                cardIconName = "heart-circle-outline";
                break;
        }
        let cardIconElement = '<div class="cc-card-icon-corner"><ion-icon name="'+cardIconName+'" aria-hidden="true"></ion-icon></div>';

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
        
        elementCardCorner.innerHTML = cardIconElement;
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

/* custom web component to create accordion */
let templateAccordion = document.createElement('template');
templateAccordion.innerHTML = `<slot></slot>`;

class Accordion extends HTMLElement {
    static get observedAttributes() {
        return['acc-id'];
    }

    get accordionConstructId() {
        return this.getAttribute('acc-id');
    }

    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        //console.log(this.accordionConstructId);
        this.renderAccordion(this.accordionConstructId);
        shadow.append(templateAccordion.content.cloneNode(true))
    }

    renderAccordion(accordionConstructId) {
        let accordionIdAttr = 1;

        let elementWrapper = document.createElement('div');        
        let listAccordionWrapper = document.querySelectorAll('cc-accordion-wrapper [acc-id="'+accordionConstructId+'"]');
        let elementAccordionWrapper = document.createElement('div');
        elementAccordionWrapper.classList.add('cc-accordion-wrapper');     
            
        let elementAccordion = document.createElement('div');
        elementAccordion.classList.add('cc-accordion');

        [].forEach.call(listAccordionWrapper, function (listAccordionWrapperItem) {
            let accordionWrapperId = listAccordionWrapperItem.getAttribute('acc-id');
            let panelWrapperId = listAccordionWrapperItem.getAttribute('acc-id');

            if (accordionWrapperId == panelWrapperId) {
                //first one is expanded, others are hidden when rendering
                let accordionExpandedAttr = true;
                if (accordionIdAttr > 1) accordionExpandedAttr = false;

                let accordionTitleAttr = listAccordionWrapperItem.getAttribute('acc-title');
                let accordionIconAttr = listAccordionWrapperItem.getAttribute('acc-icon');
                let accordionContentTitleAttr = listAccordionWrapperItem.getAttribute('acc-content-title');
                let accordionContentTextAttr = listAccordionWrapperItem.getAttribute('acc-content-text');
                let accordionContentLinkAttr = listAccordionWrapperItem.getAttribute('acc-content-link');
                let accordionContentLinkTitleAttr = listAccordionWrapperItem.getAttribute('acc-content-link-title'); 
                let accordionContentLinkTargetAttr = listAccordionWrapperItem.getAttribute('acc-content-link-target');
                
                let elementAccordionPanel = document.createElement('div');
                elementAccordionPanel.classList.add('cc-accordion-panel');

                //Header
                let accordionPanelHeading = document.createElement('h2');
                accordionPanelHeading.setAttribute('id', 'panel'+accordionIdAttr+'-title');
                elementAccordionPanel.appendChild(accordionPanelHeading);

                let accordionTrigger = document.createElement('button');
                accordionTrigger.classList.add('cc-accordion-trigger');
                accordionTrigger.setAttribute('aria-controls', 'panel'+accordionIdAttr+'-content');

                accordionTrigger.setAttribute('aria-expanded', accordionExpandedAttr);
                accordionPanelHeading.appendChild(accordionTrigger);

                let accordionTitle = document.createElement('span');
                accordionTitle.classList.add('cc-accordion-title');
                accordionTitle.innerHTML = accordionTitleAttr;
                accordionTrigger.appendChild(accordionTitle);

                let accordionIconWrapper = document.createElement('div');
                accordionIconWrapper.classList.add('cc-accordion-icon');
                let accordionIcon = document.createElement('img');
                accordionIcon.setAttribute('src',accordionIconAttr);
                accordionIcon.setAttribute('aria-hidden','true');
                accordionIconWrapper.appendChild(accordionIcon);
                accordionTrigger.appendChild(accordionIconWrapper);

                //Content
                let accordionContentWrapper = document.createElement('div');
                accordionContentWrapper.classList.add('cc-accordion-content');
                accordionContentWrapper.setAttribute('id','panel'+accordionIdAttr+'-content');
                accordionContentWrapper.setAttribute('aria-label','panel'+accordionIdAttr+'-title');
                accordionContentWrapper.setAttribute('aria-hidden','false');
                accordionContentWrapper.setAttribute('role','region');
                elementAccordionPanel.appendChild(accordionContentWrapper);

                let accordionContent = document.createElement('div');
                let accordionContentTitle = document.createElement('h3');
                accordionContentTitle.innerHTML = accordionContentTitleAttr;
                accordionContent.appendChild(accordionContentTitle);
                
                let accordionContentText = document.createElement('p');
                accordionContentText.innerHTML = accordionContentTextAttr;
                accordionContent.appendChild(accordionContentText);

                if (accordionContentLinkTitleAttr) {
                    let accordionContentLink = document.createElement('a');
                    accordionContentLink.classList.add('cc-cta-btn');
                    accordionContentLink.href = accordionContentLinkAttr;
                    accordionContentLink.title = accordionContentLinkTitleAttr;
                    accordionContentLink.target = accordionContentLinkTargetAttr;
                    accordionContentLink.innerHTML = accordionContentLinkTitleAttr;
                    accordionContent.appendChild(accordionContentLink);
                }
                

                accordionContentWrapper.appendChild(accordionContent);
                elementAccordion.appendChild(elementAccordionPanel);            
            }           
            accordionIdAttr++;
        }); 
        elementAccordionWrapper.appendChild(elementAccordion);
        elementWrapper.appendChild(elementAccordionWrapper);        
        this.innerHTML = elementWrapper.innerHTML;
    }
}

customElements.define('cc-accordion', Accordion);

/* move panels */
const accordionList = document.querySelectorAll(".cc-accordion");

[].forEach.call(accordionList, function (accordion) {
    accordion.addEventListener("click", (e) => {
        const activePanel = e.target.closest(".cc-accordion-panel");
        if (!activePanel) return;
        toggleAccordion(activePanel);
    });
});

function toggleAccordion(panelToActivate) {
  const buttons = panelToActivate.parentElement.querySelectorAll("button");
  const contents =
    panelToActivate.parentElement.querySelectorAll(".cc-accordion-content");

  buttons.forEach((button) => {
    button.setAttribute("aria-expanded", false);
  });

  contents.forEach((content) => {
    content.setAttribute("aria-hidden", true);
  });

  panelToActivate.querySelector("button").setAttribute("aria-expanded", true);

  panelToActivate
    .querySelector(".cc-accordion-content")
    .setAttribute("aria-hidden", false);
}


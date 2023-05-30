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
let ccFooter = document.createElement('footer-nav');
elBody.append(ccFooter);

let navListFooterMenu = ccFooterNavDutch;
let navListFooterCopy = ccFooterCopyDutch;
let navListFooterSocial = ccFooterSocialMedia;
let FooterAddress = ccFooterAddressDutch;
switch (languageToken) {
  case "fr":
    navListFooterMenu = ccFooterNavFrench;
    navListFooterCopy = ccFooterCopyFrench;
    FooterAddress = ccFooterAddressFrench;
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

        let elFooter = document.createElement('footer');
        let elFooterContainer = document.createElement('div');
        elFooterContainer.classList.add('cc-footer-container');
        elFooter.appendChild(elFooterContainer);

        /** container with menu & social media */
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

        /** copy */
        let elFooterCopy = document.createElement('div');
        elFooterCopy.classList.add('cc-footer-copy');
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
        elFooter.appendChild(elFooterCopy);
        
        /** address */
        let elFooterAddress = document.createElement('div');
        elFooterAddress.classList.add('cc-footer-address');
        elFooterAddress.innerHTML = FooterAddress;
        elFooter.appendChild(elFooterAddress);

        elFooterWrapper.appendChild(elFooter);
        this.innerHTML = elFooterWrapper.innerHTML;
        
    }
}
customElements.define('footer-nav', FooterNav);

/*hero banner home*/
let templateHeroBannerHome = document.createElement('template');
templateHeroBannerHome.setAttribute('id','hero-banner-home');
templateHeroBannerHome.innerHTML = `
<slot></slot>
`;

class HeroBannerHome extends HTMLElement {
    static get observedAttributes() {
        return['hero-img-desktop','hero-img-mobile','hero-content-bg','hero-content-big-title', 'hero-content-sub-title', 'hero-content-text','hero-content-link','hero-content-link-title','hero-content-link-target','hero-image-appear','hero-content-appear'];
    }

    get heroImageDesktop() {
        return this.getAttribute("hero-img-desktop");
    }

    get heroImageMobile() {
        return this.getAttribute("hero-img-mobile");
    }

    get heroContentBg() {
        return this.getAttribute("hero-content-bg");
    }

    get heroContentBigTitle() {
        return this.getAttribute("hero-content-big-title");
    }

    get heroContentSubTitle() {
        return this.getAttribute("hero-content-sub-title");
    }

    get heroContentText() {
        return this.getAttribute("hero-content-text");
    }

    get heroContentLink() {
        return this.getAttribute("hero-content-link");
    }

    get heroContentLinkTitle() {
        return this.getAttribute("hero-content-link-title");
    }

    get heroContentLinkTarget() {
        return this.getAttribute("hero-content-link-target");
    }

    get heroImageAppearOnScroll() {
        return this.getAttribute("hero-image-appear");
    }

    get heroContentAppearOnScroll() {
        return this.getAttribute("hero-content-appear");
    }

    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        this.renderHeroBannerHome();
        shadow.append(templateHeroBannerHome.content.cloneNode(true))
    }
    
    renderHeroBannerHome() {
        let elementHeroHomeWrapper = document.createElement('div');

        let elementHeroHome = document.createElement('div');
        elementHeroHome.classList.add('cc-hero-home');    
        elementHeroHome.classList.add('auto-grid');

        let elementHeroHomeImageBox = document.createElement('div');
        elementHeroHomeImageBox.classList.add('cc-hero-home-image-box');
        let imageAppear = '';
        switch (this.heroImageAppearOnScroll) {
            case "default":
                imageAppear = 'cc-hidden-on-scroll';
                break;
            case "left":
                imageAppear = 'cc-hidden-on-scroll-left';
                break;
            case "right":
                imageAppear = 'cc-hidden-on-scroll-right';
                break;
            case "top":
                imageAppear = 'cc-hidden-on-scroll-top';
                break;
            case "bottom":
                imageAppear = 'cc-hidden-on-scroll-bottom';
                break;
            default:
                imageAppear = '';
                break;
        }
        if (imageAppear != '') elementHeroHomeImageBox.classList.add(imageAppear);

        let elementHeroImageBoxDesktop = document.createElement('img');
        elementHeroImageBoxDesktop.classList.add('cc-hero-home-image');
        elementHeroImageBoxDesktop.setAttribute('src',this.heroImageDesktop);
        elementHeroHomeImageBox.appendChild(elementHeroImageBoxDesktop);
        let elementHeroImageBoxMobile = document.createElement('img');
        elementHeroImageBoxMobile.classList.add('cc-hero-home-image-mobile');
        elementHeroImageBoxMobile.classList.add('cc-hidden');
        elementHeroImageBoxMobile.setAttribute('src',this.heroImageMobile);
        elementHeroHomeImageBox.appendChild(elementHeroImageBoxMobile);
        elementHeroHome.appendChild(elementHeroHomeImageBox);   
        
        let elementHeroHomeContentBox = document.createElement('div');
        elementHeroHomeContentBox.classList.add('cc-hero-home-content-box');
        if (this.heroContentBg == 'true') {
            let elementBackground = document.createElement('div');
            elementBackground.classList.add('cc-background-curved-2');
            elementHeroHomeContentBox.appendChild(elementBackground);
        }
        let elementHeroHomeTitleWrapper = document.createElement('div');
        elementHeroHomeTitleWrapper.classList.add('cc-hero-home-content-box-title-wrap');
        let contentAppear = '';
        switch (this.heroContentAppearOnScroll) {
            case "default":
                contentAppear = 'cc-hidden-on-scroll';
                break;
            case "left":
                contentAppear = 'cc-hidden-on-scroll-left';
                break;
            case "right":
                contentAppear = 'cc-hidden-on-scroll-right';
                break;
            case "top":
                contentAppear = 'cc-hidden-on-scroll-top';
                break;
            case "bottom":
                contentAppear = 'cc-hidden-on-scroll-bottom';
                break;
            default:
                contentAppear = '';
                break;
        }
        if (contentAppear != '') {
            elementHeroHomeTitleWrapper.classList.add(contentAppear);
            elementHeroHomeTitleWrapper.classList.add('cc-show-on-scroll-delay-400ms');
        }
        let elementHeroHomeBigTitle = document.createElement('span');
        elementHeroHomeBigTitle.classList.add('cc-hero-home-content-big-title');
        elementHeroHomeBigTitle.innerHTML = this.heroContentBigTitle;
        elementHeroHomeTitleWrapper.appendChild(elementHeroHomeBigTitle);
        let elementHeroHomeSubTitle = document.createElement('span');
        elementHeroHomeSubTitle.classList.add('cc-hero-home-content-sub-title');
        elementHeroHomeSubTitle.innerHTML = '<div>' + this.heroContentSubTitle + '</div>';
        elementHeroHomeTitleWrapper.appendChild(elementHeroHomeSubTitle);
        let elementHeroHomeText = document.createElement('p');
        elementHeroHomeText.classList.add('cc-hero-home-content-text');
        elementHeroHomeText.innerHTML = this.heroContentText;
        elementHeroHomeTitleWrapper.appendChild(elementHeroHomeText);

        let elementHeroHomeLink = document.createElement('a');
        elementHeroHomeLink.classList.add('cc-cta-btn');
        let elementHeroHomeLinkText = document.createTextNode(this.heroContentLinkTitle);
        elementHeroHomeLink.appendChild(elementHeroHomeLinkText);
        elementHeroHomeLink.href = this.heroContentLink;
        elementHeroHomeLink.title = this.heroContentLinkTitle;
        elementHeroHomeLink.target = this.heroContentLinkTarget;
        elementHeroHomeTitleWrapper.appendChild(elementHeroHomeLink);

        elementHeroHomeContentBox.appendChild(elementHeroHomeTitleWrapper);
        elementHeroHome.appendChild(elementHeroHomeContentBox); 

        elementHeroHomeWrapper.appendChild(elementHeroHome);
        this.innerHTML = elementHeroHomeWrapper.innerHTML;
    }
}

customElements.define('cc-herobannerhome', HeroBannerHome);

/** search form web comp */
let templateSearchForm = document.createElement('template');
templateSearchForm.setAttribute('id', 'cc-search-form');
templateSearchForm.innerHTML = `
<slot></slot>
`;

let xmlLang = "nl-NL";
let searchLabel = ccSearchLabelDutch;
let searchLabelBtn = ccSearchLabelBtnDutch;
let searchLabelErase = ccSearchLabelResetDutch;
switch (languageToken) {
    case "fr":
        xmlLang = "fr-FR";
        searchLabel = ccSearchLabelFrench;
        searchLabelBtn = ccSearchLabelBtnFrench;
        searchLabelErase = ccSearchLabelResetFrench;
        break;
}

class SearchForm extends HTMLElement {
    static get observedAttributes() {
        return['title','title-color'];
    }

    get searchFormHeaderTitle() {
        return this.getAttribute("title");
    }

    get searchFormHeaderTitleColor() {
        return this.getAttribute("title-color");
    }

    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        this.renderSearchForm();
        shadow.append(templateSearchForm.content.cloneNode(true))
    }

    renderSearchForm() {
        let elSearchFormWrapper = document.createElement('div');

        let elSearchFormContainer = document.createElement('div');
        elSearchFormContainer.classList.add('cc-bg-color-nightsky');
        elSearchFormContainer.classList.add('cc-section-new');

        let elSearchFormContainerTitle = document.createElement('h2');
        elSearchFormContainerTitle.classList.add('cc-h1');
        let titleColor = 'cc-text-color-white';
        switch (this.searchFormHeaderTitleColor) {
            case 'passion':
                titleColor = 'cc-text-color-passion';
                break;
            case 'nightsky':
                titleColor = 'cc-text-color-nightsky';
                break;
            default:
                titleColor = 'cc-text-color-white';
                break;
        }
        elSearchFormContainerTitle.classList.add(titleColor);
        elSearchFormContainerTitle.innerHTML = this.searchFormHeaderTitle;
        elSearchFormContainer.appendChild(elSearchFormContainerTitle);

        let elSearchBox = document.createElement('div');
        elSearchBox.classList.add('cc-search-box-page');

        let elSearchForm = document.createElement('form');
        elSearchForm.classList.add('cc-search-form-page');
        elSearchForm.setAttribute('name','keywordsearch');
        elSearchForm.setAttribute('method','get');
        elSearchForm.setAttribute('action','/search/');
        elSearchForm.setAttribute('xml:lang', xmlLang);
        elSearchForm.setAttribute('lang', xmlLang);
        elSearchForm.setAttribute('role', 'search');
        elSearchBox.appendChild(elSearchForm);
        

        let elSearchInput = document.createElement('input');
        elSearchInput.classList.add('cc-search-box-page-input');
        elSearchInput.setAttribute('type', 'text');
        elSearchInput.setAttribute('name', 'q');
        elSearchInput.setAttribute('maxlength', 50);
        elSearchInput.setAttribute('aria-label', searchLabel);
        elSearchInput.setAttribute('placeholder', searchLabel);
        elSearchForm.appendChild(elSearchInput);

        let elActionContainer = document.createElement('div');
        elActionContainer.classList.add('cc-search-box-action-container');

        let elSearchSubmit = document.createElement('a');
        elSearchSubmit.classList.add('cc-cta-button-search');
        let elSearchSubmitLinkText = document.createTextNode(searchLabelBtn);
        elSearchSubmit.appendChild(elSearchSubmitLinkText);
        elSearchSubmit.title = searchLabelBtn;
        elSearchSubmit.target = '_self';
        elSearchSubmit.setAttribute('onclick','submitCcSearch();');
        elActionContainer.appendChild(elSearchSubmit);

        let elSearchErase = document.createElement('a');
        elSearchErase.classList.add('cc-cta-button-search');
        let elSearchEraseLinkText = document.createTextNode(searchLabelErase);
        elSearchErase.appendChild(elSearchEraseLinkText);
        elSearchErase.title = searchLabelErase;
        elSearchErase.target = '_self';
        elSearchErase.setAttribute('onclick','clearCcSearch();');
        elActionContainer.appendChild(elSearchErase);

        elSearchForm.appendChild(elActionContainer);

        elSearchFormContainer.appendChild(elSearchBox);
        elSearchFormWrapper.appendChild(elSearchFormContainer);
        this.innerHTML = elSearchFormWrapper.innerHTML;
    }
}

customElements.define('cc-search', SearchForm);


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

/*custom web component to create card with image*/
let templateCardImage = document.createElement('template');
templateCardImage.innerHTML = `
<slot></slot>
`
class CardImage extends HTMLElement {
    static get observedAttributes() {
        return['card-title','card-content','card-image','card-link', 'card-link-title', 'card-link-target', 'card-appear', 'card-appear-delay'];
    }

    get cardTitle() {
        return this.getAttribute("card-title");
    }

    get cardContent() {
        return this.getAttribute("card-content");
    }

    get cardImage() {
        return this.getAttribute("card-image");
    }

    get cardLink() {
        return this.getAttribute("card-link");
    }

    get cardLinkTitle() {
        return this.getAttribute("card-link-title");
    }

    get cardLinkTarget() {
        return this.getAttribute("card-link-target");
    }

    get cardAppearOnScroll() {
        return this.getAttribute("card-appear");
    }

    get cardAppearOnScrollDelay() {
        return this.getAttribute("card-appear-delay");
    }

    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        this.renderCardImage();
        shadow.append(templateCardImage.content.cloneNode(true))
    }

    renderCardImage() {
        let elementCardImageWrapper = document.createElement('div');

        let elementCardImage = document.createElement('div');
        elementCardImage.classList.add('cc-card-image');

        let cardAppear = '';
        switch (this.cardAppearOnScroll) {
            case "default":
                cardAppear = 'cc-hidden-on-scroll';
                break;
            case "left":
                cardAppear = 'cc-hidden-on-scroll-left';
                break;
            case "right":
                cardAppear = 'cc-hidden-on-scroll-right';
                break;
            case "top":
                cardAppear = 'cc-hidden-on-scroll-top';
                break;
            case "bottom":
                cardAppear = 'cc-hidden-on-scroll-bottom';
                break;
            default:
                cardAppear = '';
                break;
        }
        if (cardAppear != '') elementCardImage.classList.add(cardAppear);

        let cardAppearDelay = '';
        switch (this.cardAppearOnScrollDelay) {
            case "200ms":
                cardAppearDelay = 'cc-show-on-scroll-delay-200ms';
                break;
            case "400ms":
                cardAppearDelay = 'cc-show-on-scroll-delay-400ms';
                break;
            case "600ms":
                cardAppearDelay = 'cc-show-on-scroll-delay-600ms';
                break;
            case "800ms":
                cardAppearDelay = 'cc-show-on-scroll-delay-800ms';
                break;
            case "1s":
                cardAppearDelay = 'cc-show-on-scroll-delay-1s';
                break;
            default:
                cardAppearDelay = '';
                break;
        }
        if (cardAppearDelay != '') elementCardImage.classList.add(cardAppearDelay);

        let elementCardImageThumb = document.createElement('div');
        elementCardImageThumb.classList.add('cc-card-image-thumb');
        elementCardImageThumb.style.setProperty('--image-thumb-card', 'url("'+this.cardImage+'")');
        elementCardImage.appendChild(elementCardImageThumb);

        let elementCardImageInfo = document.createElement('div');
        elementCardImageInfo.classList.add('cc-card-image-info');
        let elementCardImageTitle = document.createElement('h2');
        elementCardImageTitle.innerHTML = this.cardTitle;
        elementCardImageInfo.appendChild(elementCardImageTitle);
        let elementCardImageContent = document.createElement('p');
        elementCardImageContent.classList.add('cc-card-image-text');
        elementCardImageContent.innerHTML = this.cardContent;
        elementCardImageInfo.appendChild(elementCardImageContent);

        if (this.cardLinkTitle) {
            let elementCardImageLink = document.createElement('a');
            elementCardImageLink.classList.add('cc-card-image-link');
            let elementCardImageLinkText = document.createTextNode(this.cardLinkTitle);
            elementCardImageLink.appendChild(elementCardImageLinkText);
            elementCardImageLink.href = this.cardLink;
            elementCardImageLink.title = this.cardLinkTitle;
            elementCardImageLink.target = this.cardLinkTarget;
            elementCardImageInfo.appendChild(elementCardImageLink);
        }
        
        elementCardImage.appendChild(elementCardImageInfo);
        elementCardImageWrapper.appendChild(elementCardImage);
        
        this.innerHTML = elementCardImageWrapper.innerHTML;
    }
}

customElements.define('cc-cardimage', CardImage);

/*video + text component*/
let templateVideoText = document.createElement('template');
templateVideoText.setAttribute('id','cc-video-text');
templateVideoText.innerHTML = `
<slot></slot>
`;

class VideoText extends HTMLElement {
    static get observedAttributes() {
        return['video-link','video-title','video-text','video-appear','video-appear-delay','video-add-background'];
    }

    get videoLink() {
        return this.getAttribute("video-link");
    }

    get videoTitle() {
        return this.getAttribute("video-title");
    }

    get videoText() {
        return this.getAttribute("video-text");
    }

    get videoAppear() {
        return this.getAttribute("video-appear");
    }

    get videoAppearDelay() {
        return this.getAttribute("video-appear-delay");
    }

    get videoAddBackground() {
        return this.getAttribute("video-add-background");
    }

    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        this.renderVideoText();
        shadow.append(templateVideoText.content.cloneNode(true))
    }
    
    renderVideoText() {
        let elVideoTextWrapper = document.createElement('div');

        let elVideoText = document.createElement('div');
        elVideoText.classList.add('cc-video-wrapper');

        if (this.videoAddBackground == 'true') {
            let elVideoBackground = document.createElement('div');
            elVideoBackground.classList.add('cc-background-curved-video-left');
            elVideoText.appendChild(elVideoBackground);
        }

        let videoAppearMode = '';
        switch (this.videoAppear) {
            case "default":
                videoAppearMode = 'cc-hidden-on-scroll';
                break;
            case "left":
                videoAppearMode = 'cc-hidden-on-scroll-left';
                break;
            case "right":
                videoAppearMode = 'cc-hidden-on-scroll-right';
                break;
            case "top":
                videoAppearMode = 'cc-hidden-on-scroll-top';
                break;
            case "bottom":
                videoAppearMode = 'cc-hidden-on-scroll-bottom';
                break;
            default:
                videoAppearMode = '';
                break;
        }
        
        let videoAppearDelayTime = '';
        switch (this.videoAppearDelay) {
            case "200ms":
                videoAppearDelayTime = 'cc-show-on-scroll-delay-200ms';
                break;
            case "400ms":
                videoAppearDelayTime = 'cc-show-on-scroll-delay-400ms';
                break;
            case "600ms":
                videoAppearDelayTime = 'cc-show-on-scroll-delay-600ms';
                break;
            case "800ms":
                videoAppearDelayTime = 'cc-show-on-scroll-delay-800ms';
                break;
            case "1s":
                videoAppearDelayTime = 'cc-show-on-scroll-delay-1s';
                break;
            default:
                videoAppearDelayTime = '';
                break;
        }

        let elVideoTextContainer = document.createElement('div');
        elVideoTextContainer.classList.add('cc-grid-video-text-container');


        if (videoAppearMode != '') elVideoTextContainer.classList.add(videoAppearMode);
        
        if (videoAppearDelayTime != '') elVideoTextContainer.classList.add(videoAppearDelayTime);

        let elGridVideoText = document.createElement('div');
        elGridVideoText.classList.add('cc-grid-video-text');
        elVideoTextContainer.appendChild(elGridVideoText);

        let elGridVideoShow = document.createElement('div');
        elGridVideoShow.classList.add('cc-grid-video-show');
        elGridVideoShow.innerHTML = '<iframe src="'+this.videoLink+'" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
        elGridVideoText.appendChild(elGridVideoShow);

        let elGridVideoTextShow = document.createElement('div');
        elGridVideoTextShow.classList.add('cc-grid-video-text-show');
        let elGridVideoTitle = document.createElement('h2');
        elGridVideoTitle.innerHTML = this.videoTitle;
        elGridVideoTextShow.appendChild(elGridVideoTitle);
        elGridVideoTextShow.innerHTML += this.videoText;
        elGridVideoText.appendChild(elGridVideoTextShow);

        elVideoText.appendChild(elVideoTextContainer);

        elVideoTextWrapper.appendChild(elVideoText);
        this.innerHTML = elVideoTextWrapper.innerHTML;
    }
}

customElements.define('cc-videotext', VideoText);


/*content page banner component*/
let templateContentBanner = document.createElement('template');
templateContentBanner.setAttribute('id','cc-content-banner');
templateContentBanner.innerHTML = `
<slot></slot>
`;

class ContentBanner extends HTMLElement {
    static get observedAttributes() {
        return['banner-url','banner-appear','banner-appear-delay'];
    }

    get bannerUrl() {
        return this.getAttribute("banner-url");
    }
    get bannerAppear() {
        return this.getAttribute("banner-appear");
    }

    get bannerAppearDelay() {
        return this.getAttribute("banner-appear-delay");
    }

    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        this.renderBannerContentPage();
        shadow.append(templateContentBanner.content.cloneNode(true))
    }

    renderBannerContentPage() {
        let elBannerWrapper = document.createElement('div');

        let elBannerContainer = document.createElement('div');
        elBannerContainer.classList.add('cc-content-page-banner-container');

        let bannerAppearMode = '';
        switch (this.bannerAppear) {
            case "default":
                bannerAppearMode = 'cc-hidden-on-scroll';
                break;
            case "left":
                bannerAppearMode = 'cc-hidden-on-scroll-left';
                break;
            case "right":
                bannerAppearMode = 'cc-hidden-on-scroll-right';
                break;
            case "top":
                bannerAppearMode = 'cc-hidden-on-scroll-top';
                break;
            case "bottom":
                bannerAppearMode = 'cc-hidden-on-scroll-bottom';
                break;
            default:
                bannerAppearMode = '';
                break;
        }
        
        let bannerAppearDelayTime = '';
        switch (this.bannerAppearDelay) {
            case "200ms":
                bannerAppearDelayTime = 'cc-show-on-scroll-delay-200ms';
                break;
            case "400ms":
                bannerAppearDelayTime = 'cc-show-on-scroll-delay-400ms';
                break;
            case "600ms":
                bannerAppearDelayTime = 'cc-show-on-scroll-delay-600ms';
                break;
            case "800ms":
                bannerAppearDelayTime = 'cc-show-on-scroll-delay-800ms';
                break;
            case "1s":
                bannerAppearDelayTime = 'cc-show-on-scroll-delay-1s';
                break;
            default:
                bannerAppearDelayTime = '';
                break;
        }
        
        let elBannerContainerImage = document.createElement('div');
        elBannerContainerImage.classList.add('cc-content-page-banner-image');
        if (bannerAppearMode != '') elBannerContainerImage.classList.add(bannerAppearMode);        
        if (bannerAppearDelayTime != '') elBannerContainerImage.classList.add(bannerAppearDelayTime);
        elBannerContainerImage.style.setProperty("--content-banner",'url("'+this.bannerUrl+'")');
        elBannerContainer.appendChild(elBannerContainerImage);

        elBannerWrapper.appendChild(elBannerContainer);
        this.innerHTML = elBannerWrapper.innerHTML;
    }
}

customElements.define('cc-contentbanner', ContentBanner);

/*show on scroll*/
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('cc-show-on-scroll');
    });
});
let hiddenElements = document.querySelectorAll('.cc-hidden-on-scroll');
hiddenElements.forEach((el) => observer.observe(el));

const observerLeft = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('cc-show-on-scroll-left');
    });
});
let hiddenElementsLeft = document.querySelectorAll('.cc-hidden-on-scroll-left');
hiddenElementsLeft.forEach((el) => observerLeft.observe(el));

const observerRight = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('cc-show-on-scroll-right');
    });
});
let hiddenElementsRight = document.querySelectorAll('.cc-hidden-on-scroll-right');
hiddenElementsRight.forEach((el) => observerRight.observe(el));

const observerTop = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('cc-show-on-scroll-top');
    });
});
let hiddenElementsTop = document.querySelectorAll('.cc-hidden-on-scroll-top');
hiddenElementsTop.forEach((el) => observerTop.observe(el));

const observerBottom = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('cc-show-on-scroll-bottom');
    });
});
let hiddenElementsBottom = document.querySelectorAll('.cc-hidden-on-scroll-bottom');
hiddenElementsBottom.forEach((el) => observerBottom.observe(el));

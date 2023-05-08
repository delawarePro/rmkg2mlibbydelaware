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




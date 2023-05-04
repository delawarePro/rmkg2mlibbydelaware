/* web component for Hero Banner Image */
const heroElement = document.querySelector("hero-banner");
const hbHeight = heroElement.dataset.imgHeight;
const hbUrl = heroElement.dataset.imgUrl;
const hbPosition = heroElement.dataset.imgPosition;
heroElement.style.setProperty("--bg-hero-banner-image-height", hbHeight + "px");
heroElement.style.setProperty("--bg-hero-banner-image-url", "url("+hbUrl+")");
heroElement.style.setProperty("--bg-hero-banner-image-position", hbPosition);

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

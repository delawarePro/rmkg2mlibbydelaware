let searchBtn = document.querySelector(".cc-search-btn");
let closeBtn = document.querySelector(".cc-close-btn");
let searchBox = document.querySelector(".cc-search-box");
let searchBoxInput = document.querySelector(".cc-search-box-input");
let searchBoxSubmitBtn = document.querySelector(".cc-submit-job-search-btn");
let headerNavigation = document.querySelector(".cc-header-navigation");
let mobileMenuToggle = document.querySelector(".cc-mobile-menu-toggle");
let mobileMenuClose = document.querySelector(".cc-mobile-menu-close");
let header = document.querySelector(".cc-header");
let headerSearch = document.querySelector(".cc-header-search");
let profileBtn = document.querySelector(".cc-profile-btn");

searchBtn.onclick = function() {
    searchBox.classList.add("active");
    closeBtn.classList.add("active");
    closeBtn.classList.remove("hide");
    searchBoxSubmitBtn.classList.add("active");
    searchBoxSubmitBtn.classList.remove("hide");
    searchBtn.classList.add("hide");
    profileBtn.classList.add("hide");
    mobileMenuToggle.classList.add("hide");
    mobileMenuClose.classList.add("hide");
    header.classList.remove("open");
    headerSearch.classList.add("active");
}

closeBtn.onclick = function() {
    searchBox.classList.remove("active");
    closeBtn.classList.remove("active");
    searchBoxSubmitBtn.classList.remove("active");
    searchBoxSubmitBtn.classList.add("hide");
    searchBtn.classList.remove("active");
    searchBtn.classList.remove("hide");
    profileBtn.classList.remove("hide");
    mobileMenuToggle.classList.remove("hide");
    searchBoxInput.value = "";
    headerSearch.classList.remove("active");
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

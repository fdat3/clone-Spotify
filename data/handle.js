// Favorite Songs
favoriteIcon = document.getElementById("favorite-icon")

favoriteIcon.onclick = function () { changeStatus() };

function changeStatus() {

    favoriteIcon.classList.toggle("change-status");
}

// Change Layout
tabs = document.getElementById("search__page")
mainIcon = document.getElementById("home__layout")
mainTabs = document.getElementById("main__page")
tabsIcon = document.getElementById("search__layout")
libsIcon = document.getElementById("lib__layout")
libTabs = document.getElementById('lib__page')
favIcon = document.getElementById('fav-icon')
favTabs = document.getElementById('banner-fav')
mainLayout = document.getElementById('main__layout')
navTheme = document.getElementById('navbar')

// Click Icon

tabsIcon.onclick = function () {
    changeLayout()
};


libsIcon.onclick = function () {
    libLayout()
}

favIcon.onclick = function () {
    favLayout()
}

// Change Tab 

tabs.onclick = function () {
    changeLayout()
}

mainTabs.onclick = function () {
    changeLayout()
}


libTabs.onclick = function () {
    libLayout()
}

favTabs.onclick = function () {
    favLayout()
}

// Change color theme

mainLayout.onclick = function () {
    favLayout();
}

navTheme.onclick = function () {
    favLayout();
}
// Handle

function changeLayout() {
    tabs.classList.remove("hidden")
    libsIcon.classList.remove('active')
    mainIcon.classList.remove('active')
    tabsIcon.classList.add("active")
    mainTabs.classList.add("hidden")
    mainLayout.classList.remove('fav-theme')
    preventDefault()
}

// lib layout 

function libLayout() {
    mainTabs.classList.add("hidden")
    libsIcon.classList.add('active')
    tabs.classList.add("hidden")
    mainIcon.classList.remove('active')
    libTabs.classList.remove('hidden')
    tabsIcon.classList.remove("active")
    mainLayout.classList.remove('fav-theme')
    preventDefault()
}

// favorite layout 

function favLayout() {
    favTabs.classList.remove('hidden')
    favIcon.classList.add('active')
    mainIcon.classList.remove('active')
    mainTabs.classList.add("hidden")
    libTabs.classList.add('hidden')
    tabs.classList.add("hidden")
    mainLayout.classList.add('fav-theme')
    navTheme.classList.add('fav-theme')
    preventDefault()
}
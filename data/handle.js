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



navTheme.onclick = function () {
    favLayout();
}
// Handle


function changeLayout() {
    libsIcon.classList.remove('active')
    favIcon.classList.remove('active')
    mainIcon.classList.remove('active')
    tabsIcon.classList.add("active")
    tabs.classList.remove("hidden")
    mainTabs.classList.add("hidden")
    mainLayout.classList.remove('fav-theme')
    preventDefault()
}

// lib layout 

function libLayout() {
    libsIcon.classList.add('active')
    favIcon.classList.remove('active')
    mainIcon.classList.remove('active')
    tabsIcon.classList.remove("active")
    mainTabs.classList.add("hidden")
    tabs.classList.add("hidden")
    libTabs.classList.remove('hidden')
    mainLayout.classList.remove('fav-theme')
    preventDefault()
}

// favorite layout 

function favLayout() {
    tabs.classList.add("hidden")
    favIcon.classList.add('active')
    mainIcon.classList.remove('active')
    libsIcon.classList.remove('active')
    tabsIcon.classList.remove('active')
    favTabs.classList.remove('hidden')
    mainTabs.classList.add("hidden")
    libTabs.classList.add('hidden')
    mainLayout.classList.add('fav-theme')
    navTheme.classList.add('fav-theme')
    preventDefault()
}
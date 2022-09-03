// Favorite Songs
favoriteIcon = document.getElementById("favorite-icon")

favoriteIcon.onclick = function () { changeStatus() };

function changeStatus() {
    favoriteIcon.classList.toggle("change-status");
}

// tab recommend songs

closeIcon = document.getElementById('close-icon');
searchRcm = document.getElementById('playlist-search')
songRcm = document.getElementById('playlist-rcm')

function changeTabRcm() {
    searchRcm.classList.add('hidden')
    songRcm.classList.remove('hidden')
}

closeIcon.onclick = function () {
    changeTabRcm();
}





// Search Input 

search = document.getElementById('search-input')

// Change Layout
tabs = document.getElementById("search__page")
mainIcon = document.getElementById("home__layout")
mainTabs = document.getElementById("main__page")
tabsIcon = document.getElementById("search__layout")
libsIcon = document.getElementById("lib__layout")
favIcon = document.getElementById('fav-icon')
bannerIcon = document.getElementById('banner__icon')
libTabs = document.getElementById('lib__page')
favTabs = document.getElementById('banner-fav')
mainLayout = document.getElementById('main__layout')
musicLayout = document.getElementById('banner__music')
navTheme = document.getElementById('navbar')
playBtnScroll = document.getElementById('btn-scroll')
searchBtn = document.getElementById('search')


// Create Playlist 

addPlaylist = document.getElementById('addIcon')
addPlaylistBanner = document.getElementById('create-playlist')

console.log(addPlaylist)

function addBanner() {
    addPlaylist.classList.add('active')
    addPlaylistBanner.classList.remove('hidden')
    musicLayout.classList.add('hidden')
    favIcon.classList.remove('active')
    mainIcon.classList.remove('active')
    libsIcon.classList.remove('active')
    tabsIcon.classList.remove('active')
    bannerIcon.classList.add('active')
    tabs.classList.add("hidden")
    mainTabs.classList.add("hidden")
    libTabs.classList.add('hidden')
    favTabs.classList.add('hidden')
    navTheme.classList.remove('banner-theme')
    navTheme.classList.add('fix-width')
    search.classList.add('hidden')
    e.preventDefault();
}

addPlaylist.onclick = function (e) {
    addBanner(e);
}

// Click Icon

tabsIcon.onclick = function (e) {
    changeLayout(e)
};


libsIcon.onclick = function (e) {
    libLayout(e)
}

favIcon.onclick = function (e) {
    favLayout(e)
}

bannerIcon.onclick = function (e) {
    bannerLayout(e);
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
    musicLayout.classList.add('hidden')
    search.classList.remove('hidden')
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
    musicLayout.classList.add('hidden')
    search.classList.add('hidden')
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
    navTheme.classList.add('fix-width')
    navTheme.classList.remove('banner-theme')
    musicLayout.classList.add('hidden')
    search.classList.add('hidden')
    bannerIcon.classList.remove('active')
    addPlaylist.classList.remove('active')
    addPlaylistBanner.classList.add('hidden')
    preventDefault()
}

function bannerLayout(e) {
    musicLayout.classList.remove('hidden')
    favIcon.classList.remove('active')
    mainIcon.classList.remove('active')
    libsIcon.classList.remove('active')
    tabsIcon.classList.remove('active')
    bannerIcon.classList.add('active')
    tabs.classList.add("hidden")
    mainTabs.classList.add("hidden")
    libTabs.classList.add('hidden')
    favTabs.classList.add('hidden')
    navTheme.classList.add('banner-theme')
    navTheme.classList.add('fix-width')
    navTheme.classList.remove('fav-theme')
    search.classList.add('hidden')
    addPlaylist.classList.remove('active')
    addPlaylistBanner.classList.add('hidden')
    e.preventDefault();

    document.onscroll = function () {
        const scrollTop = window.scrollY || document.documentElement.scrollTop
        playBtnScroll.classList.remove('hidden')

        if (window.scrollY = 0) {
            playBtnScroll.classList.add('hidden')
        }
    }
}

// Click Search 

searchBtn.onclick = function (e) {
    tabs.classList.remove("hidden")
    navTheme.classList.remove('fav-theme')
    favTabs.classList.add('hidden')
    tabsIcon.classList.add('active')
    favIcon.classList.remove('active')
    e.preventDefault();
}


const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const player = $('.player')
const cd = $('.cd')
const heading = $('header h2')
const cdThumb = $('.cd-thumb')
const audio = $('#audio')
const playBtn = $('.btn-toggle-play')
const progress = $('#progress')
const nextBtn = $('.btn-next')
const prevBtn = $('.btn-prev')
const randomBtn = $('.btn-random')
const repeatBtn = $('.btn-repeat')
const playlist = $('.playlist')

const app = {
    currentIndex: 0, // lay bai hat dau tien
    isPlaying : false,
    isRandom : false,
    isRepeat: false,
    songs: [ // mang chua cac bai hat
        {
            name: 'Vẫn nhớ',
            singer: 'Soobin Hoàng Sơn',
            path: './assets/music/VanNhoCover1-SoobinHoangSon-6269391.mp3',
            image: './assets/img/soobin.jpg'
        },
        {
            name: 'Lặng Thầm',
            singer: 'Noo Phước Thịnh',
            path: './assets/music/LangTham-NooPhuocThinh_35d63.mp3',
            image: './assets/img/Noo.jpg'
        },
        {
            name: 'Một chút quên anh thôi',
            singer: 'Bảo Thy',
            path: './assets/music/MotChutQuenAnhThoi-BaoThy_3pf4t.mp3',
            image: './assets/img/BaoThy.jpg'
        },
        {
            name: 'There no one at all',
            singer: 'Sơn Tùng M-TP',
            path: './assets/music/There_s No One At All - Son Tung M-TP.mp3',
            image: './assets/img/mtp.jpg.webp'
        },
        {
            name: 'Nothing In Your Eyes 2',
            singer: 'YanBi, Mr.T, Bảo Thy',
            path: 'https://data2.chiasenhac.com/stream2/1716/4/1715568-e9f2181e/128/Nothing%20In%20Your%20Eyes%202%20-%20Bao%20Thy_%20Mr_T_.mp3',
            image: 'https://i.scdn.co/image/ab67616d0000b27358c3d3ff0f1c191e17bd1af8'
        },
        {
            name: 'Too Good At Goodbye',
            singer: 'Sam Smith',
            path: 'https://data00.chiasenhac.com/downloads/1824/4/1823464-f34c5173/128/Too%20Good%20At%20Goodbyes%20-%20Sam%20Smith.mp3',
            image: 'https://data.chiasenhac.com/data/cover/77/76333.jpg'
        }
    ],

    render: function(){ // hien thi cac bai hat
        
        const htmls = this.songs.map(song => {
            return `
                <div class="song">
                    <div class="thumb"
                    style="background-image: url('${song.image}') ;">
                    </div>
                    <div class="body">
                        <h3 class="title">${song.name}</h3>
                        <p class="author">${song.singer}</p>
                    </div>
                    <div class="option">
                        <i class="fas fa-ellipsis-h"></i>
                    </div>
                </div> 
            `
        })

        playlist.innerHTML = htmls.join('');

    },

    definePropertise: function () {
        Object.defineProperty(this, 'currentSong', {
            get: function () {
                return this.songs[this.currentIndex]
            }
        })
    },

    handleEvents: function () { //xu li
        const _this = this //this global

        const cdWidth = cd.offsetWidth

        const cdThumbAnimamte = cdThumb.animate([
            {
                transform: 'rotate(360deg)'
            }
        ], {
            duration: 7000, //toc do quay 10s
            iterations: Infinity //So lan quay
        })
        cdThumbAnimamte.pause()


        document.onscroll = function () {
            const scrollTop = window.scrollY || document.documentElement.scrollTop
            const NewcdWidth = cdWidth - scrollTop

            cd.style.width = NewcdWidth > 0 ? NewcdWidth + 'px' : 0
            cd.style.opacity = NewcdWidth / cdWidth
        }

        //Xu li khi phat / tam dung bai hat

        playBtn.onclick = function () {
            if (_this.isPlaying) {
                audio.pause()
            } else 
            {    
                audio.play()
            }
        }

        //When playing
        audio.onplay = function () {
            _this.isPlaying = true
            player.classList.add('playing')
            cdThumbAnimamte.play()
        }
        //When pausing
        audio.onpause = function () {
            _this.isPlaying = false
            player.classList.remove('playing')
            cdThumbAnimamte.pause()
        }
        //Song Tempo
        audio.ontempo = function (e) {
            let progressTemp = Math.floor(audio.currentTime / audio.duration * 100)
            if(progressTemp) {
                progress.value = progressTemp
            } else {
                progress.value = 0
            }
        }
        //Song change 
        progress.onchange = function (e) {
            let currentTime = audio.duration * e.target.value / 100

            audio.currentTime = currentTime ? currentTime : 0
        }
        //Next Song
        nextBtn.onclick = function () {
            if(_this.isRandom) {
                _this.playRandomSong()
            } else {
                _this.nextSong()
            }
            _this.nextSong()
            audio.play()
        }
        //PrevSong
        prevBtn.onclick = function () {
            if(_this.isRandom) {
                _this.playRandomSong()
            } else {
                _this.prevSong()
            }
            _this.prevSong()
            audio.play()
        }
        //Random Song
        randomBtn.onclick = function (e) {
            _this.isRandom = !_this.isRandom
            randomBtn.classList.toggle('active', _this.isRandom)
        }
        //Repeat Song
        repeatBtn.onclick = function (e) {
            _this.isRepeat = !_this.isRepeat
            repeatBtn.classList.toggle('active', _this.isRepeat)
        }
        //Auto next song when ended 
        audio.onend = function () {
            if(_this.isRepeat) {
                audio.play()
            } else {
                nextBtn.click()
            }
        }

        //Click Song
        playlist.onclick = function(e) {
            if (
                e.target.closest('.song:not(.active') ||
                !e.target.closest('.option')
            ) {
                
            }
        }
    },
    
    loadCurrentSong: function () {
        heading.textContent = this.currentSong.name
        cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`
        audio.src = this.currentSong.path
    },
    nextSong: function () {
        this.currentIndex++
        if(this.currentIndex >= this.songs.length) {
            this.currentIndex = 0
        }
        this.loadCurrentSong()
    },
    prevSong: function () {
        this.currentIndex--
        if(this.currentIndex < 0) {
            this.currentIndex = this.songs.length - 1
        }
        this.loadCurrentSong()
    },
    playRandomSong: function() {
        let newIndex
        do {
            newIndex = Math.floor(Math.random() * this.songs.length)
        } while (newIndex === this.currentIndex)
    },
    start: function() {
        this.definePropertise() //dinh nghia cac thuoc tinh object
        this.handleEvents() //xu li
        this.loadCurrentSong() // phat bai hat dau tien
        this.render() //hien thi 
    }
}

app.start()
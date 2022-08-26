const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const player = $('.player')
const cd = $('.cd')
const heading = $('header h2')
const description = $('header h4')
const cdThumb = $('.cd-thumb')
const audio = $('#audio')
const playBtn = $('.btn-toggle-play')
const progress = $('#progress')
const nextBtn = $('.btn-next')
const prevBtn = $('.btn-prev')
const randomBtn = $('.btn-random')
const repeatBtn = $('.btn-repeat')
const playlist = $('.playlist')
const control = $('.control')
const song = $('.song')
const track = $('.track')
const topic = $('.row')
const artist = $('.artist')
const podcast = $('.podcast')
const recommend = $('.recommend')
const allSearch = $('.all-content')
const yourPlaylist = $('.fav-list-xs')

const app = {
    currentIndex: 0, // lay bai hat dau tien
    isPlaying: false,
    isRandom: false,
    isRepeat: false,
    songs: [ // mang chua cac bai hat
        {
            name: 'Vẫn nhớ',
            singer: 'Soobin Hoàng Sơn',
            path: './assets/music/VanNhoCover1-SoobinHoangSon-6269391.mp3',
            image: './assets/img/Singers/soobin.jpg'
        },
        {
            name: 'Lặng Thầm',
            singer: 'Noo Phước Thịnh',
            path: './assets/music/LangTham-NooPhuocThinh_35d63.mp3',
            image: './assets/img/Singers/Noo.jpg'
        },
        {
            name: 'Một chút quên anh thôi',
            singer: 'Bảo Thy',
            path: './assets/music/MotChutQuenAnhThoi-BaoThy_3pf4t.mp3',
            image: './assets/img/Singers/BaoThy.jpg'
        },
        {
            name: 'There no one\'s\ at all',
            singer: 'Sơn Tùng M-TP',
            path: './assets/music/There_s No One At All - Son Tung M-TP.mp3',
            image: './assets/img/Singers/mtp.jpg.webp'
        },
        {
            name: 'Vaicaunoicokhiennguoithaydoi',
            singer: 'Grey D ft Tlinh',
            path: './assets/music/vaicaunoicokhiennguoithaydoi - GREY D tlinh (NhacPro.net).flac',
            image: './assets/img/Singers/greyD.jpg'
        },
    ],

    tracks: [
        {
            title: 'Playlist của bạn',
            image: './assets/img/Playlists/ab67706c0000da84f272473209545794b727298f (1).jpg'
        },
        {
            title: 'Rap Việt',
            image: './assets/img/Playlists/ab67706c0000da84aa4c29be8d105a3931a19436.jpg',
        },
        {
            title: 'Những bài hát hay nhất thập kỷ',
            image: './assets/img/Playlists/ab67706f0000000292e24018908664f6a18e09ce.jpg'
        },
        {
            title: 'The Weeknd',
            image: './assets/img/Playlists/ab6761610000e5ebb5f9e28219c169fd4b9e8379.jpg'
        },
        {
            title: 'Thoải mái gác chân lên',
            image: './assets/img/Playlists/ab67706f00000002296a902bf19a1cf9087f67b5.jpg'
        },
        {
            title: 'Danh sách quay ngược thời gian của bạn',
            image: './assets/img/Playlists/time-capsule-blue_DEFAULT-vi.jpg'
        }
    ],

    topics: [
        {
            title: 'Cà phê quán quen',
            image: './assets/img/Playlists/ab67706f0000000215d57f6619c73d186d2b7bf3.jpg',
            description: 'Một mình trong quán vắng, khúc nhạc quen và cảm giác lạ.'
        },
        {
            title: 'Tiếng Hát Át Tiếng Ka',
            image: './assets/img/Playlists/ab67706f0000000288c7ffef42792225574daccb.jpg',
            description: 'Hãy để tiếng hát của bạn át tiếng karaoke nhà hàng xóm'
        },
        {
            title: 'EQUAL Vietnam',
            image: './assets/img/Playlists/ab67706f0000000230949dd0cc6b7b1c262f0260.jpg',
            description: 'Cùng tôn vinh tài năng và âm nhạc của những nữ nghệ sĩ Việt. Ảnh bìa: Bảo Anh'
        },
        {
            title: 'Indie Việt',
            image: './assets/img/Playlists/ab67706f00000002f3501a406b2342199ea401dd.jpg',
            description: 'Những ca khúc hay nhất từ dòng nhạc mới mẻ và đa dạng'
        },
        {
            title: 'Đóa Hồng Nhạc Việt',
            image: './assets/img/Playlists/ab67706f00000002908dfe9a1f1c9044a78dc9fc.jpg',
            description: 'Một nửa mềm mại của làng nhạc Việt. Ảnh bìa: Hoàng Thùy Linh'
        },
        {
            title: 'Anh Hào Nhạc Việt',
            image: './assets/img/Playlists/ab67706f000000023aa81d8c2a6a7e5cd53580bf.jpg',
            description: 'Những nghệ sĩ nam góp phần rạng rỡ cho V-Pop. Ảnh bìa: MONO'
        }
    ],

    artists: [
        {
            title: 'Ultra Gaming',
            image: './assets/img/Albums/ab67706f0000000232fa3f26c169600e0b88749e.jpg',
            description: 'Dance, Bass, EDM, Trap: the perfect gaming mix.',
        },
        {
            title: 'Power Hour',
            image: './assets/img/Albums/ab67706f00000002a0771224543218ad74dc1c7b.jpg',
            description: 'Tap it back or go for a spin with these uptempo tracks!',
        },
        {
            title: 'KSHMR Radio',
            image: './assets/img/Albums/vi',
            description: 'Của Spotify',
        },
        {
            title: 'Beast Mode',
            image: './assets/img/Albums/ab67706f000000029249b35f23fb596b6f006a15.jpg',
            description: 'Get your beast mode on!',
        },
        {
            title: 'Motivation Mix',
            image: './assets/img/Albums/ab67706f000000025f2635e031078672e7b384a5.jpg',
            description: 'Uplifting and energetic music that helps you stay motivated.',
        },
        {
            title: 'Happy Beats',
            image: './assets/img/Albums/ab67706f0000000225d50fa7cc51b307364050f5.jpg',
            description: 'Feel-good dance music!',
        }
    ],

    podcasts: [
        {
            title: '78. Không Bỏ Cuộc',
            image: './assets/img/Podcasts/ab67656300005f1f5b61945f5f6bf820d3d43fbe.jpg',
            time: '22 Thg 8 - 15 phút',
        },
        {
            title: '#21 Làm Gì Khi Thấy Mình Giậm Chân Tại Chỗ',
            image: './assets/img/Podcasts/ab67656300005f1f1d1a9aa284183a74d078139c.jpg',
            time: 'Thg 12, 2021 - 26 phút',
        },
        {
            title: '#9 - Nói ít. Hiểu nhiều.',
            image: './assets/img/Podcasts/ab67656300005f1faa4d330a74ae3c0b171f2f9c.jpg',
            time: '30 Thg 7 - 18 phút',
        },
        {
            title: 'Những ngộ nhận về nghỉ học và làm giàu',
            image: './assets/img/Podcasts/ab67656300005f1fc960ee681446bd4f1832cd22.jpg',
            time: '20 Thg 1 - 14 phút',
        },
        {
            title: 'Khoá học Xây dựng nội lực để thành công - Phần 12 - Phát triển tư duy mở ',
            image: './assets/img/Podcasts/ab67656300005f1fbc95b30bd3c261efc284f34e.jpg',
            time: '23 Thg 8 - 18 phút',
        },
        {
            title: 'Học cách làm người theo đúng 8 bước của Khổng Tử | Khách mời: TS Trần Hữu Đức | OB EP1',
            image: './assets/img/Podcasts/ab67656300005f1f2244b5edeaf9986e9bf16ba1.jpg',
            time: '22 Thg 2 - 64 phút',
        }
    ],
    kinds: [
        {
            title: 'Pop',
            image: './assets/img/Tracks/0a74d96e091a495bb09c0d83210910c3.jpg',
            color: 'rgb(141, 103, 171)',
        },
        {
            title: 'Hip-Hop',
            image: './assets/img/Tracks/ab67706f000000029bb6af539d072de34548d15c.jpg',
            color: 'rgb(186, 93, 7)',
        },
        {
            title: 'K-Pop',
            image: './assets/img/Tracks/ab67706f00000002978b9f4a4f40b430fd0d837e.jpg',
            color: 'rgb(20, 138, 8)',
        },
        // {
        //     title: 'Dance / Điện tử',
        //     image: 'https://i.scdn.co/image/ab67706f000000020377baccf69ede3cf1a26eff',
        //     color: 'rgb(220, 20, 140)',
        // },
    ],
    allKinds: [
        {
            title: 'Podcast',
            image: './assets/img/Tracks/567158eb895ad26718a814345af0fc43ee785ec5.jpg',
            color: 'rgb(39, 133, 106);',
        },
        {
            title: 'Dành cho bạn',
            image: './assets/img/Tracks/ea364e99656e46a096ea1df50f581efe.png',
            color: 'rgb(30, 50, 100);',
        },
        {
            title: 'Bảng xếp hạng',
            image: './assets/img/Tracks/region_global_default.jpg',
            color: 'rgb(141, 103, 171)',
        },
        {
            title: 'Mới Phát Hành',
            image: './assets/img/Tracks/ab67706f000000027ea4d505212b9de1f72c5112.jpg',
            color: 'rgb(232, 17, 91)',
        },
        {
            title: 'Khám phá',
            image: './assets/img/Tracks/d0fb2ab104dc4846bdc56d72b0b0d785.jpeg',
            color: 'rgb(141, 103, 171)',
        },
        {
            title: 'Sự kiện trực tiếp',
            image: './assets/img/Tracks/8cfa9cb1e43a404db76eed6ad594057c.jpg',
            color: 'rgb(30, 50, 100)',
        },
        {
            title: 'Nhạc Việt',
            image: './assets/img/Tracks/6e1202d14b1f400592532c10d10871ef.jpeg',
            color: 'rgb(180, 155, 200)',
        },
        {
            title: 'Tâm trạng',
            image: './assets/img/Tracks/ab67706f00000002aa93fe4e8c2d24fc62556cba.jpg',
            color: 'rgb(141, 103, 171)',
        },
        {
            title: 'Không gian lãng mạn',
            image: './assets/img/Tracks/ab67706f0000000213601d4833623a4d6b328e38.jpg',
            color: 'rgb(140, 25, 50)',
        },
        {
            title: 'Pride',
            image: './assets/img/Tracks/c9a01586687a45a78c56d9be5aed3c79.jpeg',
            color: 'rgb(80, 155, 245)',
        },
        {
            title: 'Fresh Finds',
            image: './assets/img/Tracks/16e40e64d2a74fa8a0a020d456e6541d.jpeg',
            color: 'rgb(240, 55, 165)',
        },
        {
            title: 'EQUAL',
            image: './assets/img/Tracks/ab67706f0000000284a1ec26f589f0d569805a07.jpg',
            color: 'rgb(20, 138, 8)',
        },
        {
            title: 'Sức khỏe',
            image: './assets/img/Tracks/ab67656300005f1ff234909e69a68d92ca0af6ca.jpg',
            color: 'rgb(165, 103, 82)',
        },
        {
            title: 'Rock',
            image: './assets/img/Tracks/ab67706f00000002fe6d8d1019d5b302213e3730.jpg',
            color: 'rgb(230, 30, 50)',
        },
        {
            title: 'League of Legends',
            image: './assets/img/Tracks/ab67706f000000025f0ff9251e3cfe641160dc31.jpg',
            color: 'rgb(20, 138, 8)',
        },
        {
            title: 'Ở nhà',
            image: './assets/img/Tracks/ab67706f00000002ec9d60059aa215a7ba364695.jpg',
            color: 'rgb(71, 125, 149)',
        },
        {
            title: 'Trên xe',
            image: './assets/img/Tracks/ab67706f00000002ffa215be1a4c64e3cbf59d1e.jpg',
            color: 'rgb(71, 125, 149)',
        },
        {
            title: 'Ambient',
            image: './assets/img/Tracks/a45c0978c7784da8b83cadbca8b815d1.jpg',
            color: 'rgb(71, 125, 149)',
        },
        {
            title: 'Trẻ em & Gia đình',
            image: './assets/img/Tracks/15a38c44c4484cc3a078aaab5bd4e828.png',
            color: 'rgb(141, 103, 171)',
        },
        {
            title: 'RADAR',
            image: './assets/img/Tracks/c6677aa51acf4121b66b9d1f231bd427.png',
            color: 'rgb(156, 240, 225)',
        },
        {
            title: 'Dance / Điện tử',
            image: './assets/img/Tracks/ab67706f000000020377baccf69ede3cf1a26eff.jpg',
            color: 'rgb(220, 20, 140)',
        },
        {
            title: 'Indie',
            image: './assets/img/Tracks/ab67706f000000025f7327d3fdc71af27917adba.jpg',
            color: 'rgb(96, 129, 8)',
        },
        {
            title: 'Thịnh hành',
            image: './assets/img/Tracks/trending-274x274_7b238f7217985e79d3664f2734347b98_0_0_274_274.jpg',
            color: 'rgb(215, 242, 125)',
        },
        {
            title: 'API Heritage Month',
            image: './assets/img/Tracks/9378062ced4e466980de864ee3cc3bf3.jpg',
            color: 'rgb(141, 103, 171)',
        },
        {
            title: 'Tiệc tùng',
            image: './assets/img/Tracks/ab67706f00000002caa115cbdb8cd3d39d67cdc0.jpg',
            color: 'rgb(175, 40, 150)',
        },
        {
            title: 'Thư giãn',
            image: './assets/img/Tracks/ab67706f00000002c414e7daf34690c9f983f76e.jpg',
            color: 'rgb(71, 125, 149)',
        },
        {
            title: 'Ngủ ngon',
            image: './assets/img/Tracks/ab67706f00000002b70e0223f544b1faa2e95ed0.jpg',
            color: 'rgb(30, 50, 100)',
        },
        {
            title: 'Tập luyện',
            image: './assets/img/Tracks/ab67706f000000029249b35f23fb596b6f006a15.jpg',
            color: 'rgb(119, 119, 119)',
        },
        {
            title: 'Tập trung',
            image: './assets/img/Tracks/ab67706f00000002e4eadd417a05b2546e866934.jpg',
            color: 'rgb(80, 55, 80)',
        },
        {
            title: 'Thập niên',
            image: './assets/img/Tracks/4c8b58ab42b54296ad5379514d36edac.jpg',
            color: 'rgb(186, 93, 7)',
        },
        {
            title: 'Mùa hè',
            image: './assets/img/Tracks/a2a24668f16c4e9680233a0d7d244a4b.jpeg',
            color: 'rgb(255, 200, 100)',
        },
        {
            title: 'Reggae',
            image: './assets/img/Tracks/reggae-274x274_2f11a0500528532b3bc580e3428e9610_0_0_274_274.jpg',
            color: 'rgb(115, 88, 255)',
        },
        {
            title: 'Thập niên',
            image: './assets/img/Tracks/4c8b58ab42b54296ad5379514d36edac.jpg',
            color: 'rgb(186, 93, 7)',
        },
        {
            title: 'Thành phố',
            image: './assets/img/Tracks/e483d3973e2f4ad1b4ae96e5aa19faa8.jpeg',
            color: 'rgb(175, 40, 150)',
        },
        {
            title: 'RnB',
            image: './assets/img/Tracks/ab67706f000000023c5a4aaf5df054a9beeb3d82.jpg',
            color: 'rgb(220, 20, 140)',
        },
        {
            title: 'Chơi game',
            image: './assets/img/Tracks/ab67706f0000000221a2087747d946f16704b8af.jpg',
            color: 'rgb(232, 17, 91)',
        },
        {
            title: 'Nhạc không lời',
            image: './assets/img/Tracks/ab67706f000000028ed1a5002b96c2ea882541b2.jpg',
            color: 'rgb(71, 125, 149)',
        },
        {
            title: 'Disney',
            image: './assets/img/Tracks/27922fb7882e4d078c59b29cef4111b9.jpg',
            color: 'rgb(235, 30, 50)',
        },
        {
            title: 'Jazz',
            image: './assets/img/Tracks/ab67706f00000002d72ef75e14ca6f60ea2364c2.jpg',
            color: 'rgb(30, 50, 100)',
        },
        {
            title: 'TV & Điện ảnh',
            image: './assets/img/Tracks/ab67706f000000026abff8de68c75470ea8f0665.jpg',
            color: 'rgb(232, 17, 91)',
        },
        {
            title: 'Cổ điển',
            image: './assets/img/Tracks/ab67706f000000023e0130fcd5d106f1402b4707.jpg',
            color: 'rgb(141, 103, 171)',
        },
        {
            title: 'Chuyên gia định hướng',
            image: './assets/img/Tracks/b4182906bf244b4994805084c057e9ee.jpeg',
            color: 'rgb(13, 115, 236)',
        },
        {
            title: 'Nghệ sĩ',
            image: './assets/img/Tracks/a1a6ce8da93a408f9373740a90a5dbab.jpeg',
            color: 'rgb(80, 155, 245)',
        },
        {
            title: 'Nấu nướng & Ăn uống',
            image: './assets/img/Tracks/ab67706f000000025a051b0271d3e98edfdc4c09.jpg',
            color: 'rgb(186, 93, 7)',
        },
        {
            title: 'Du lịch',
            image: './assets/img/Tracks/44cf5615d3244f289fcedefa96b85db9.png',
            color: 'rgb(45, 70, 185)',
        },
        {
            title: 'Soul',
            image: './assets/img/Tracks/ab67706f000000026e1034ebd7b7c86546c6acca.jpg',
            color: 'rgb(220, 20, 140)',
        },
        {
            title: 'J-Tracks',
            image: './assets/img/Tracks/jtracks_274x274.jpg',
            color: 'rgb(30, 50, 100)',
        },
        {
            title: 'Spotify Singles',
            image: './assets/img/Tracks/986a6f23-b61b-43c5-85dd-c66cc66e0f40.jpg',
            color: 'rgb(180, 155, 200)',
        },
        {
            title: 'Alternative',
            image: './assets/img/Tracks/ee9451b3ed474c82b1da8f9b5eafc88f.jpeg',
            color: 'rgb(160, 195, 210)',
        },
        {
            title: 'Blues',
            image: './assets/img/Tracks/ab67706f0000000285c3e89f02770deb7691451c.jpg',
            color: 'rgb(180, 155, 200)',
        },
        {
            title: 'Punk',
            image: './assets/img/Tracks/ab67706f0000000275251d7d488b0fd69e4c50bd.jpg',
            color: 'rgb(30, 50, 100)',
        },
        {
            title: 'Metal',
            image: './assets/img/Tracks/ab67706f0000000285704160b49125ac95099ec8.jpg',
            color: 'rgb(119, 119, 119)',
        },
        {
            title: 'Dân gian & Acoustic',
            image: './assets/img/Tracks/ab67706f0000000237df164786f688dd0ccd8744.jpg',
            color: 'rgb(30, 50, 100)',
        },
        {
            title: 'Anime',
            image: './assets/img/Tracks/54841f7d6a774ef096477c99c23f0cf1.jpeg',
            color: 'rgb(245, 155, 35)',
        },
        {
            title: 'Nhạc sĩ sáng tác',
            image: './assets/img/Tracks/ab676d63000076a0c9657833d9c169782b961c9c.jpg',
            color: 'rgb(140, 25, 50)',
        },
        {
            title: 'Âm nhạc + Trò chuyện',
            image: './assets/img/Tracks/487ecec9ae594690a55c0150b1958eff.jpg',
            color: 'rgb(30, 50, 100)',
        },
    ],

    listTracks: [
        {
            title: 'Ballad',
            image: './assets/img/Playlists/rapviet-mix.jpg',
            description: 'Chilling time!'
        },
        {
            title: 'Danh sách nhạc kết hợp của Sơn Tùng M-TP Mix',
            image: './assets/img/Playlists/mtp-mix.jpg',
            description: 'Đức Phúc, Noo Phước Thịnh, JustaTee và nhiều hơn nữa'
        }
    ],


    render: function () { // hien thi cac bai hat
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

        const tracklist = this.tracks.map(track => {
            return `
            <div class="track__wrap center">
                <div class="track__img">
                     <img class="track__avatar" src="${track.image}" alt="">
                </div>

                <div class="track__text">
                    <p class="track__title">${track.title}</p>
                </div>
            </div>
            `
        })
        track.innerHTML = tracklist.join('');

        const yourStyelList = this.topics.map(topic => {
            return `
            <div class="your__playlist-wrap col-lg-2">
                <div class="card your__playlist-card">
                <img class="your__playlist-img"
                    src="${topic.image}" class="card-img-top"
                    alt="">
                <div class="play-btn play-btn-main play-btn-lg">
                    <span class="material-symbols-outlined play-icon">
                      play_arrow
                    </span>
                </div>
                <div class="card-body">
                    <h5 class="card-title">${topic.title}</h5>
                    <p class="card-text">${topic.description}</p>
                </div>
                </div>
            </div>
            `
        })
        topic.innerHTML = yourStyelList.join('')

        const artistList = this.artists.map(artist => {
            return `
            <div class="your__playlist-wrap col-lg-2">
            <div class="card your__playlist-card">
              <img class="your__playlist-img" src="${artist.image}" class="card-img-top" alt="">
              <div class="play-btn play-btn-main play-btn-lg">
                <span class="material-symbols-outlined play-icon">
                  play_arrow
                </span>
              </div>
              <div class="card-body">
                <h5 class="card-title">${artist.title}</h5>
                <p class="card-text">${artist.description}</p>
              </div>
            </div>
          </div>
            `
        })
        artist.innerHTML = artistList.join('');

        const podcastList = this.podcasts.map(podcast => {
            return `
            <div class="your__playlist-wrap col-lg-2">
            <div class="card your__playlist-card">
              <img class="your__playlist-img" src="${podcast.image}" class="card-img-top" alt="">
              <div class="play-btn play-btn-main play-btn-lg">
                <span class="material-symbols-outlined play-icon">
                  play_arrow
                </span>
              </div>
              <div class="card-body">
                <h5 class="card-title">${podcast.title}</h5>
                <p class="card-text">${podcast.time}</p>
              </div>
            </div>
          </div>
            `
        })
        podcast.innerHTML = podcastList.join('')
        const searchList = this.kinds.map(kind => {
            return `
            <div class="rcm__topic col-lg-4" style="background-color: ${kind.color};">
              <div class="rcm__title">
                <h1>${kind.title}</h1>
              </div>

              <div class="rcm__image">
                <img src="${kind.image}" class="rcm__img col-lg-5" alt="">
              </div>
            </div>
            `
        })
        recommend.innerHTML = searchList.join('')

        const allSearchList = this.allKinds.map(allKinds => {
            return `
            <div class="rcm__topic-sm col-lg-2" style="background-color: ${allKinds.color};">
            <div class="rcm__title-sm">
              <h1>${allKinds.title}</h1>
            </div>
            <div class="rcm__image-sm">
              <img src="${allKinds.image}" class="rcm__img-sm col-lg-6" alt="">
            </div>
          </div>
            `
        })
        allSearch.innerHTML = allSearchList.join('')

        const playlistItem = this.listTracks.map(listTrack => {
            return `
            <div class="your__playlist-wrap col-lg-3">
            <div class="card your__playlist-card">
              <img class="your__playlist-img" src="${listTrack.image}" class="card-img-top" alt="">
              <div class="play-btn play-btn-lg play-btn-main">
                <span class="material-symbols-outlined play-icon">
                  play_arrow
                </span>
              </div>
              <div class="card-body">
                <h5 class="card-title">${listTrack.title}</h5>
                <p class="card-text">${listTrack.description}</p>
              </div>
            </div>
          </div>
            `
        })
        yourPlaylist.innerHTML = playlistItem.join('')
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




        // document.onscroll = function () {
        //     const scrollTop = window.scrollY || document.documentElement.scrollTop
        //     const NewcdWidth = cdWidth - scrollTop

        //     cd.style.width = NewcdWidth > 0 ? NewcdWidth + 'px' : 0
        //     cd.style.opacity = NewcdWidth / cdWidth
        // }

        //Xu li khi phat / tam dung bai hat

        playBtn.onclick = function () {
            if (_this.isPlaying) {
                audio.pause()
            } else {
                audio.play()
            }
        }

        //When playing
        audio.onplay = function () {
            _this.isPlaying = true
            control.classList.add('playing')
            song.classList.add('active')
        }
        //When pausing
        audio.onpause = function () {
            _this.isPlaying = false
            control.classList.remove('playing')
        }
        //Song Tempo
        audio.ontempo = function (e) {
            let progressTemp = Math.floor(audio.currentTime / audio.duration * 100)
            if (progressTemp) {
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
            if (_this.isRandom) {
                _this.playRandomSong()
            } else {
                _this.nextSong()
            }
            _this.nextSong()
            audio.play()
        }
        //PrevSong
        prevBtn.onclick = function () {
            if (_this.isRandom) {
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
            if (_this.isRepeat) {
                audio.play()
            } else {
                nextBtn.click()
            }
        }

        //Click Song
        playlist.onclick = function (e) {
            if (
                e.target.closest('.song:not(.active') ||
                !e.target.closest('.option')
            ) {

            }
        }

        // Change Layout
    },

    loadCurrentSong: function () {
        heading.textContent = this.currentSong.name
        description.textContent = this.currentSong.singer
        cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`
        audio.src = this.currentSong.path
    },
    nextSong: function () {
        this.currentIndex++
        if (this.currentIndex >= this.songs.length) {
            this.currentIndex = 0
        }
        this.loadCurrentSong()
    },
    prevSong: function () {
        this.currentIndex--
        if (this.currentIndex < 0) {
            this.currentIndex = this.songs.length - 1
        }
        this.loadCurrentSong()
    },
    playRandomSong: function () {
        let newIndex
        do {
            newIndex = Math.floor(Math.random() * this.songs.length)
        } while (newIndex === this.currentIndex)
    },
    start: function () {
        this.definePropertise() //dinh nghia cac thuoc tinh object
        this.handleEvents() //xu li
        this.loadCurrentSong() // phat bai hat dau tien
        this.render() //hien thi 
    }
}


app.start()
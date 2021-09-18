const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const audio = $("#audio");
const cdThumb = $(".cd-thumb");
const heading = $(".titleSong h2");
const cd = $(".cd");
const backgroundLight = $(".lightBackground");
const playBtn = $(".btn-toggle-play");
const player = $(".player");
const progressBar = $("#progress");
const randomBtn = $(".btn-random");
const repeatBtn = $(".btn-repeat");
const playlistNode = $(".playlist");
const chillBtn = $(".chill-mode");
const notificationNode = $(".chill-mode");
const progressVolume = $('#progress-v');
const volumeBtn = $('.VolumeControl');
const volumeWrapper = $('.volume-wrapper');

//Local storages
const PLAYER_STORAGE_KEY = "F8-player";
// localStorage.setItem('key','value');

// const timeDelay = function () {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, 500);
//   });
// };

const app = (function () {
  return {
    currentIndex: 0,
    isRandom: false,
    isRepeat: false,
    isNoti: false,
    isChillMode: false,
    config: JSON.parse(localStorage.getItem(PLAYER_STORAGE_KEY)) || {},
    songs: [

      {
        name: "Closer",
        singer: "Halsey",
        path: "./assets/Musics/Music 1/The Chainsmokers - Closer ft. Halsey.mp3",
        image: "./assets/Musics/Music 1/IMG2.png",
      },
      {
        name: "Phoebe Ryan",
        singer: "Mine (Illenium Remix)",
        path: "./assets/Musics/Music 2/Phoebe Ryan - Mine (Illenium Remix).mp3",
        image: "./assets/Musics/Music 2/IMG.png",
      },
      {
        name: "Illenium - Fractures",
        singer: "Feat. Nevve",
        path: "./assets/Musics/Music 3/Illenium - Fractures (Feat. Nevve).mp3",
        image: "./assets/Musics/Music 3/IMG.png",
      },
      {
        name: "Don't Let Me Down",
        singer: "Daya",
        path: "./assets/Musics/Music 4/The Chainsmokers - Don't Let Me Down ft. Daya.mp3",
        image: "./assets/Musics/Music 4/IMG.png",
      },
      {
        name: "Inside Out",
        singer: "Charlee",
        path: "./assets/Musics/Music 5/The Chainsmokers - Inside Out ft. Charlee.mp3",
        image: "./assets/Musics/Music 5/IMG.png",
      },
      {
        name: "New York City",
        singer: "Raftaar x kr$na",
        path: "./assets/Musics/Music 6/The Chainsmokers - New York City.mp3",
        image: "./assets/Musics/Music 6/IMG.png",
      },
      {
        name: "Don't Let Me Down",
        singer: "Illenium Remix",
        path: "./assets/Musics/Music 7/The Chainsmokers - Don't Let Me Down (Illenium Remix).mp3",
        image: "./assets/Musics/Music 7/IMG.png",
      },
      {
        name: "Until You Were Gone",
        singer: "Skrux & Saturn Remix",
        path: "./assets/Musics/Music 8/The Chainsmokers & Tritonal - Until You Were Gone (Skrux & Saturn Remix).mp3",
        image: "./assets/Musics/Music 8/IMG.png",
      },
      {
        name: "All We Know ",
        singer: " Phoebe Ryan",
        path: "./assets/Musics/Music 9/The Chainsmokers - All We Know (Ft. Phoebe Ryan).mp3",
        image: "./assets/Musics/Music 9/IMG.png",
      },
      {
        name: "Closer Remix",
        singer: "Anki Remix",
        path: "./assets/Musics/Muisc 10/The Chainsmokers - Closer ft. Halsey (Anki Remix).mp3",
        image: "./assets/Musics/Muisc 10/IMG.png",
      },
      {
        name: "Lofi Acoustic Chill - 1 hour",
        singer: "Musikrimix",
        path: "./assets/Musics/Lofi Acoustic Chill - 1 hour.mp3",
        image: "https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/137175247/original/4b1b99a52886c658825c5cc89153e5fc8fe5b8a1.jpg",
        hot: true,
      },

    ],
    chillSong: [
      {
        name: "Tình Đơn Phương",
        singer: "Nguyên ft. KOO x Freak D",
        path: "./assets/Musics/ChillMusic/TinhDonPhuong.mp3",
        image:
          "https://halotravel.vn/wp-content/uploads/2020/10/cap-hay-ve-tinh-yeu-don-phuong.jpg",
        new: true,
      },
      {
        name: "Người Lạ Thoáng Qua",
        singer: "Đinh Tùng Huy x Vux",
        path: "./assets/Musics/ChillMusic/NguoiLaThoangQua.mp3",
        image:
          "https://i.ytimg.com/vi/s-eNhNIwwIs/maxresdefault.jpg",
        new: true,
      },
      {
        name: "Thương Thầm",
        singer: "NB3 Hoài Bảo x Freak D",
        path: "./assets/Musics/ChillMusic/ThuongTham.mp3",
        image:
          "https://i.scdn.co/image/ab67616d0000b27379bbf430f1811a35f687874f",
      },
      {
        name: "Thê Lương",
        singer: "Phúc Chinh",
        path: "./assets/Musics/ChillMusic/TheLuong.mp3",
        image:
          "https://chuyenvui.com/wp-content/uploads/2021/06/loi-bai-hat-the-luong-2.jpg",

      },
      {
        name: "Sài Gòn Nay Mưa",
        singer: "JSOL ft. Hoàng Duyên",
        path: "./assets/Musics/ChillMusic/SaiGonNayMua.mp3",
        image:
          "https://i.ytimg.com/vi/WbVbcOYJFJk/mqdefault.jpg",
      },
      {
        name: "Rồi Tới Luôn",
        singer: "Nal",
        path: "./assets/Musics/ChillMusic/RoiToiLuon.mp3",
        image:
          "https://info-imgs.vgcloud.vn/2020/06/26/13/an-tuong-bo-anh-chill-duoi-anh-hoang-hon-phong-cach-hongkong-5.jpg",
        hot: true,
      },
      {
        name: "Họa Mây",
        singer: "X2X",
        path: "./assets/Musics/ChillMusic/HoaMay.mp3",
        image: "https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/0/b/0/4/0b047a80b0cbc0690afa34177f81b3f6.jpg",
        hot: true,
      },
      {
        name: "Từ Chối Nhẹ Nhàng Thôi",
        singer: "Phúc Du x Bích Phương",
        path: "./assets/Musics/ChillMusic/TuChoiNheNhangThoi.mp3",
        image: "https://billboardvn.vn/wp-content/uploads/2020/06/Voting-2MV.jpg",
        hot: true,
      },
      {
        name: "Thật Là Đáng Buồn",
        singer: "Doãn Hiếu x Phạm Nguyên Ngọc",
        path: "./assets/Musics/ChillMusic/ThatLaDangBuon.mp3",
        image: "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/1/9/9/6/1996507ca69734dd0bc8564e8a657800.jpg",
      },
      {
        name: "yêu Là Cưới",
        singer: "Phát Hồ X2X",
        path: "./assets/Musics/ChillMusic/YeuLaCuoi.mp3",
        image: "https://i.ytimg.com/vi/J9ChQu2zYEY/maxresdefault.jpg",
        new: true,
      },
      {
        name: "3107-3",
        singer: "W/n x Nâu x Duongg",
        path: "./assets/Musics/ChillMusic/3107-3.mp3",
        image:
          "https://data.chiasenhac.com/data/cover/145/144390.jpg",
        new: true,
      },
      {
        name: "Hơn Cả Mây Trời",
        singer: "Việt x Hawys",
        path: "./assets/Musics/ChillMusic/HonCaMayTroi.mp3",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqtnv3B0d4WU1tYf3zXCNePTrwcNFKm-wVYw&usqp=CAU",
      },

      {
        name: "Ghé Qua",
        singer: "Dick x Tofu x PC",
        path: "./assets/Musics/ChillMusic/GheQua.mp3",
        image:
          "https://i.ytimg.com/vi/wNH2zUpr_k4/maxresdefault.jpg",
      },
      {
        name: "Lỗi Tại Anh",
        singer: "Alex Lam x Freak D",
        path: "./assets/Musics/ChillMusic/LoiTaiAnh.mp3",
        image:
          "https://lyricvn.com/wp-content/uploads/2021/07/8451c24e944f5054e5b8090f254080e0.jpg",
      },
      {
        name: "Đoạn Tuyệt Nàng Đi",
        singer: "Phát Huy T4 x Dino",
        path: "./assets/Musics/ChillMusic/DoatTuyetNangDi.mp3",
        image: "https://i.ytimg.com/vi/Vo7N4uSaJV8/maxresdefault.jpg",
      },
      {
        name: "Cưới Thôi",
        singer: "Masiu x Masew",
        path: "./assets/Musics/ChillMusic/CuoiThoi.mp3",
        image: "https://i1.sndcdn.com/artworks-WI5MsTNygIpswgJa-lABTlA-t500x500.jpg",
        new: true,
      },
      {
        name: "Cưới Thôi Vocal Nữ",
        singer: "Masiu x Masew X B Ray x TAP ",
        path: "./assets/Musics/ChillMusic/CuoiThoiVocalNu.mp3",
        image: "https://data.chiasenhac.com/data/cover/147/146172.jpg",
        new: true,
      },
      {
        name: "Thích Em Hơi Nhiều",
        singer: " Wren Evans x Freak D",
        path: "./assets/Musics/ChillMusic/ThichEmHoiNhieu.mp3",
        image: "https://i.ytimg.com/vi/faSVTByG0LQ/maxresdefault.jpg?v=60de85cc",
        new: true,
      },

      {
        name: "Muốn Nói Với Em",
        singer: "TTeam x BlackBi (Truong Nguyen Lofi mix)",
        path: "./assets/Musics/ChillMusic/MuonNoiVoiEm.mp3",
        image: "https://i.ytimg.com/vi/eg29qwPW4V8/maxresdefault.jpg",
      },
      {
        name: "Anh Thề Đấy",
        singer: "Thanh Hưng x Dino",
        path: "./assets/Musics/ChillMusic/AnhTheDay.mp3",
        image: "https://avatar-ex-swe.nixcdn.com/song/2021/05/28/a/5/3/8/1622187655260_640.jpg",
      },
      {
        name: "Dù Cho Mai Về Sau",
        singer: "Bùi Trường Linh x FREAK D",
        path: "./assets/Musics/ChillMusic/DuChoMaiVeSau.mp3",
        image: "https://i.scdn.co/image/ab67616d0000b273d08e312c1749467b13f34608",
        hot: true,
      },

      {
        name: "Chẳng Thể Tìm Được Em",
        singer: "PhucXp ft. Freak D",
        path: "./assets/Musics/ChillMusic/ChangTheTimDuocEm.mp3",
        image:
          "https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/6/a/b/8/6ab8deee3953592dc9a4cfcb81bfb1b8.jpg",
      },
      {
        name: "Nàng Thơ",
        singer: "Hoàng Dũng x Freak D",
        path: "./assets/Musics/ChillMusic/NangTho.mp3",
        image:
          "https://i.ytimg.com/vi/Zzn9-ATB9aU/maxresdefault.jpg",
      },
      {
        name: "Chỉ Là Muốn Nói",
        singer: "Khải",
        path: "./assets/Musics/ChillMusic/ChiLaMuonNoi.mp3",
        image: "https://i.ytimg.com/vi/LFpKuYb04h0/maxresdefault.jpg",
      },
      {
        name: "Em Bỏ Thuốc Chưa",
        singer: "Bích Phương x Freak D",
        path: "./assets/Musics/ChillMusic/EmBoThuocChua.mp3",
        image:
          "https://bloganchoi.com/wp-content/uploads/2020/05/bich-phuong.jpg",
      },
      {
        name: "Giờ Em Đâu",
        singer: "DATKAA x Prod. QT BEATZ ",
        path: "./assets/Musics/ChillMusic/GioEmODau.mp3",
        image:
          "https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/1/2/5/c/125cdc5d9d35bf1e1b664feb124055c0.jpg",
      },
      {
        name: "Hạ Còn Vương Nắng",
        singer: "DATKAA x KIDO x Prod. QT BEATZ",
        path: "./assets/Musics/ChillMusic/HaConVuonNang.mp3",
        image:
          "https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/6/8/4/e/684e70dd4cabcd49a65f076096c1f820.jpg",
      },
      {
        name: "Hẹn Em Kiếp Sau",
        singer: "Lã. x Duy Phúc x TiB",
        path: "./assets/Musics/ChillMusic/HenEmKiepSau.mp3",
        image:
          "https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/c/a/5/c/ca5c05e1e0e068e8d505216ed0794a6e.jpg",
      },
      {
        name: "Hong Kong 1",
        singer: "Nguyễn Trọng Tài x San Ji x Double X",
        path: "./assets/Musics/ChillMusic/HongKongI.mp3",
        image:
          "https://avatar-ex-swe.nixcdn.com/playlist/2018/10/10/5/b/a/2/1539155622062_500.jpg",
      },
      {
        name: "Tháng Năm",
        singer: " Soobin x Freak D",
        path: "./assets/Musics/ChillMusic/ThangNam.mp3",
        image: "https://i.ytimg.com/vi/sG9JhIRuTkA/maxresdefault.jpg",
      },
      {
        name: "Chuyện Rằng",
        singer: "Thịnh Suy x Freak D",
        path: "./assets/Musics/ChillMusic/Chuyen Rang.mp3",
        image: "https://i.scdn.co/image/ab67616d0000b2734be34a1e036c97d22b5392d5",
      },
      {
        name: "Nợ Ai Đó Lời Xin Lỗi",
        singer: "Bozitt x Freak D",
        path: "./assets/Musics/ChillMusic/No Ai Do Loi Xin Loi.mp3",
        image:
          "https://i1.sndcdn.com/artworks-cgg23tTwEz2VnTMX-rxOrJA-t500x500.jpg",
      },
      {
        name: "Dại Khờ",
        singer: "NB3 Hoài Bảo x Freak D",
        path: "./assets/Musics/ChillMusic/Dại Khờ (Lofi Ver.) - NB3 Hoài Bảo x Freak D.mp3",
        image: "https://i.ytimg.com/vi/bUNwFuMfEFs/maxresdefault.jpg"
      },
      {
        name: "1402",
        singer: "NHÂN x HIẾU (prod. by wavytrbl)",
        path: "./assets/Musics/ChillMusic/1402.mp3",
        image: "./assets/IMG/1402-final.png",
        new: true,
      },
      {
        name: "Thức Giấc",
        singer: "Da LAB x Ryan",
        path: "./assets/Musics/ChillMusic/ThucGiac.mp3",
        image: "https://i.ytimg.com/vi/R3trO4a49go/maxresdefault.jpg",
      },
      {
        name: "Tình Đầu",
        singer: "Tăng Duy Tân",
        path: "./assets/Musics/ChillMusic/TInhDau.mp3",
        image:
          "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/0/a/d/1/0ad18644161b1bbe41bc1ca0471600ba.jpg",
        hot: true,
      },
      {
        name: "Tình Đẹp Đến Mấy Cũng Tàn",
        singer: "Như Việt Ft Đình Dũng x Vux",
        path: "./assets/Musics/ChillMusic/TinhDauDepDenMayCungTan.mp3",
        image:
          "https://thuthuat.taimienphi.vn/cf/Images/tt/2019/12/16/loi-bai-hat-tinh-dep-den-may-cung-tan.jpg",
      },
      {
        name: "Mãi Mãi Không Phải Anh",
        singer: "Thanh Bìnhk",
        path: "./assets/Musics/ChillMusic/MaiMaiKhongPhaiAnh.mp3",
        image: "https://i.ytimg.com/vi/q5Kw-Yw0_E8/maxresdefault.jpg",
      },
      {
        name: "Hôm Nay Em Cưới Rồi",
        singer: "Khải Đăng x Freak D",
        path: "./assets/Musics/ChillMusic/HomNayEmCuoiRoi.mp3",
        image: "https://i.ytimg.com/vi/NuWAl7-Vkwk/maxresdefault.jpg",
      },

    ],
    tempSong: [],
    setConfigure: function (key, value) {
      app.config[key] = value;
      window.localStorage.setItem(PLAYER_STORAGE_KEY, JSON.stringify(app.config));
    },
    defineProperties: function () {
      Object.defineProperty(this, "currentSong", {
        get: function () {
          return this.songs[this.currentIndex];
        },
      });
    },
    renderSongs: function () {
      const html = this.songs.reduce(function (accumulator, song, index) {
        return (
          accumulator +
          `
            <div data-index="${index}" class="song ${app.currentIndex === index ? "active" : ""
          } " >
        <span></span>
          <div
            class="thumb"
            style="
              background-image: url('${song.image}');
            "
          >
          <i class="playing-icon"></i>
          <i class="fas fa-play play-hover-icon"></i>
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
        );
      }, "");
      $(".playlist").innerHTML = html;
      this.renderlabel();
    },
    renderlabel() {
      const titleSongs = $$('.song .title');
      for (let i in this.songs) {
        if (this.songs[i].new === true) {
          titleSongs[i].classList.add('new');
        }
        if (this.songs[i].hot === true) {
          titleSongs[i].classList.add('hot');
        }
      }

    },
    songActive: function () {
      const currentSongActive = $(".song.active");
      if (currentSongActive) {
        currentSongActive.classList.remove("active");
      }
      const listElementSong = document.querySelectorAll(".song");
      listElementSong.forEach(function (song, index) {
        if (index === app.currentIndex) song.classList.add("active");
      });

      // playingIcon.style.display = 'none';
    },
    handleEvents: function () {
      // handle when play new song
      const playSong = function () {
        cdAnimate.pause();
        progressBar.value = 0;
        audio.play();
        cdAnimate.play();
      };
      //RepeatSong
      repeatBtn.onclick = function () {
        this.classList.toggle("active");
        if (this.classList.contains("active")) {
          app.isRepeat = true;
        } else {
          app.isRepeat = false;
        }
        app.setConfigure("isRepeat", app.isRepeat);
      };
      //RandomSong
      randomBtn.onclick = function () {
        this.classList.toggle("active");
        if (this.classList.contains("active")) {
          app.isRandom = true;
        } else {
          app.isRandom = false;
        }
        app.setConfigure("isRandom", app.isRandom);
      };
      //NextSong
      const btnNext = $(".btn-next");
      btnNext.onclick = function () {
        if (randomBtn.classList.contains("active")) {
          app.randomSong();
        } else {
          app.nextSong();
        }
        if (!player.classList.contains("playing")) {
          player.classList.add("playing");
        }
        playSong();
        app.songActive();
      };
      //BackSong:
      const btnBack = $(".btn-prev");
      btnBack.onclick = function () {
        if (randomBtn.classList.contains("active")) {
          app.randomSong();
        } else {
          app.backSong();
        }
        if (!player.classList.contains("playing")) {
          player.classList.add("playing");
        }
        playSong();
        app.songActive();
      };
      //rotate CD handle events
      const cdAnimate = cdThumb.animate([{ transform: "rotate(360deg)" }], {
        duration: 16000,
        iterations: Infinity,
      });
      cdAnimate.pause();

      //Scroll list songs handle events
      const cdWidth = cd.offsetWidth;
      const brWidth = backgroundLight.offsetWidth;
      document.onscroll = function () {
        const scrollRange = window.scrollY || document.documentElement.scrollTop;
        const cdNewWidth = cdWidth - scrollRange <= 0 ? 0 : cdWidth - scrollRange;
        const brNewWidth = brWidth - scrollRange <= 0 ? 0 : brWidth - scrollRange;
        const opacityCd = cdNewWidth / cdWidth;
        const opacityBr = brNewWidth / brWidth;
        cd.style.width = cdNewWidth + "px";
        backgroundLight.style.width = brNewWidth + "px";
        backgroundLight.style.height = brNewWidth + "px";
        cd.style.opacity = opacityCd;
        backgroundLight.style.opacity = opacityBr;
      };

      //Click play button handle events
      playBtn.onclick = function (e) {
        const playingIcon = $('.active .playing-icon');
        player.classList.toggle("playing");
        if (player.classList.contains("playing")) {
          audio.play();
          cdAnimate.play();
          playingIcon.style.display = "block";
        } else {
          audio.pause();
          cdAnimate.pause();
          playingIcon.style.display = "none";
        }
      };

      //on song is played and change progress bar
      const timeUpdate = function () {
        progressBar.style.background = `hsla(0, 0%, 100%, 0.3)`;
        if (audio.duration) {
          const progressPercent = Math.ceil(
            (audio.currentTime / audio.duration) * 1000
          );
          progressBar.value = progressPercent;
          let percentValue = progressPercent / 10;
          if (!app.isChillMode) {
            progressBar.style.background = `linear-gradient(
              to right,
              var(--primary-color) 0%,
              var(--primary-color) ${percentValue}%,
              hsla(0, 0%, 100%, 0.3) ${percentValue}%,
              hsla(0, 0%, 100%, 0.3) 100%
            )`;
          } else {
            progressBar.style.background = `linear-gradient(
              to right,
              rgb(120, 13, 139) 0%,
              rgb(120, 13, 139) ${percentValue}%,
              hsla(0, 0%, 100%, 0.3) ${percentValue}%,
              hsla(0, 0%, 100%, 0.3) 100%
            )`;
          }
        }
      };
      audio.addEventListener("timeupdate", timeUpdate);

      //on seek progress bar
      progressBar.oninput = function (e) {
        const seekTime = Math.floor((progressBar.value / 1000) * audio.duration);
        audio.currentTime = seekTime;
      };

      // handle song when ended
      audio.onended = function () {
        if (repeatBtn.classList.contains("active")) {
          playSong();
        } else {
          btnNext.click();
        }
      };
      // handle when click song section
      playlistNode.onclick = function (e) {
        const ElementClosest = e.target.closest(".song:not(.active)");
        if (
          ElementClosest ||
          e.target == $(".option") ||
          e.target == $(".option > i")
        ) {
          const onIndex = ElementClosest.getAttribute("data-index");
          app.currentIndex = Number(onIndex);
          app.loadCurrentSong();
          app.songActive();
          cdAnimate.pause();
          progressBar.value = 0;
          player.classList.remove("playing");
          audio.play();
          player.classList.add("playing");
          cdAnimate.play();
        }
      };
      //Handel shortcut Space,button up-down to pause,play,next,back song
      document.onkeydown = function (e) {
        e.preventDefault();
        switch (e.which) {
          case 32:
            playBtn.click();
            break;
          case 40:
            btnNext.click();
            break;
          case 38:
            btnBack.click();
        }
      };

      window.onbeforeunload = function (e) {
        app.setConfigure("currentIndex", app.currentIndex);
        app.setConfigure("currentTime", audio.currentTime);
        app.setConfigure("currentProgressBar", progressBar.value);
      };

      // mode handel
      app.tempSong = app.songs;
      //NM: normal mode | CM: chill mode
      let NMAudioCrrTime = 0;
      let NMProBarCrrTime = 0;
      let NMCurrIndex = 0;
      let CMAudioCrrTime = 0;
      let CMProBarCrrTime = 0;
      let CMCurrIndex = 0;


      // save data when switch mode
      chillBtn.onmousedown = function () {
        if (chillBtn.classList.contains("on-mode")) {
          CMCurrIndex = app.currentIndex;
          CMAudioCrrTime = audio.currentTime;
          CMProBarCrrTime = progressBar.value;
        } else {
          NMCurrIndex = app.currentIndex;
          NMAudioCrrTime = audio.currentTime;
          NMProBarCrrTime = progressBar.value;
        }
      };

      onOffModeHandle = function () {
        if (chillBtn.classList.contains("on-mode")) {
          player.classList.add("chillMode");
          app.songs = app.chillSong;
          app.renderSongs();
          app.currentIndex = CMCurrIndex;
          app.loadCurrentSong();
          audio.currentTime = CMAudioCrrTime;
          progressBar.value = CMProBarCrrTime;
          app.songActive();
          if (player.classList.contains("playing")) {
            audio.pause();
            player.classList.remove('playing');
            cdAnimate.pause();

          }
          app.isChillMode = true;
        } else {
          player.classList.remove("chillMode");
          app.songs = app.tempSong;
          app.renderSongs();
          app.currentIndex = NMCurrIndex;
          app.loadCurrentSong();
          audio.currentTime = NMAudioCrrTime;
          progressBar.value = NMProBarCrrTime;

          app.songActive();
          if (player.classList.contains("playing")) {
            audio.pause();
            player.classList.remove('playing');
            cdAnimate.pause();
          }
          app.isChillMode = false;
        }
      };

      if (chillBtn.classList.contains("on-mode")) {
        player.classList.add("chillMode");
        app.songs = app.chillSong;
        app.renderSongs();
        app.loadCurrentSong();
        app.songActive();
        const playingIcon = $('.active .playing-icon');
        playingIcon.style.display = 'none';
        if (player.classList.contains("playing")) {
          audio.play();
        }
        app.isChillMode = true;
      } else {
        player.classList.remove("chillMode");
        app.songs = app.tempSong;
        app.renderSongs();
        app.loadCurrentSong();
        app.songActive();
        const playingIcon = $('.active .playing-icon');
        playingIcon.style.display = 'none';
        if (player.classList.contains("playing")) {
          audio.play();
        }
        app.isChillMode = false;
      }

      const handelChillMode = function () {
        app.isNoti = true;
        //set configure mode
        app.setConfigure("isNoti", true);
        notificationNode.classList.remove("noti");
        //main handle
        chillBtn.classList.toggle("on-mode");
        onOffModeHandle();
        //set configure chill mode
        app.setConfigure("isChillMode", app.isChillMode);
      };
      chillBtn.addEventListener("click", handelChillMode);


      // volume control
      audio.volume = 0.7;
      progressVolume.value = audio.volume * 100;

      let currentAudio = audio.volume;

      progressVolume.oninput = function () {
        audio.volume = progressVolume.value / 100;
        currentAudio = audio.volume;
        if (audio.volume === 0) {
          volumeBtn.classList.add('VolumeControl--sound-off');
        } else {
          if (volumeBtn.classList.contains('VolumeControl--sound-off')) {
            volumeBtn.classList.remove('VolumeControl--sound-off');
          }
        }
      }

      progressVolume.onclick = function (e) {
        e.stopPropagation();
      }

      volumeWrapper.onclick = function (e) {
        e.stopPropagation();
      }

      volumeBtn.onclick = function (e) {
        volumeBtn.classList.toggle('VolumeControl--sound-off');
        if (volumeBtn.classList.contains('VolumeControl--sound-off')) {
          audio.volume = 0;
          progressVolume.value = audio.volume * 100;
        } else {
          audio.volume = currentAudio;
          progressVolume.value = audio.volume * 100;
        }
      }


    },

    loadCurrentSong: function () {
      heading.textContent = this.currentSong.name;
      cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`;
      audio.src = this.currentSong.path;
    },

    loadConfigure: function () {
      this.isRandom = this.config.isRandom;
      this.isRepeat = this.config.isRepeat;
      this.isChillMode = this.config.isChillMode;
      if (this.config.currentIndex != undefined && this.config.currentProgressBar != undefined && this.config.currentTime != undefined) {
        this.currentIndex = this.config.currentIndex;
        audio.currentTime = this.config.currentTime;
        progressBar.value = this.config.currentProgressBar;
      }
      if (this.isRandom) randomBtn.classList.add("active");
      if (this.isRepeat) repeatBtn.classList.add("active");
      if (this.isChillMode) chillBtn.classList.add("on-mode");
    },
    nextSong: function () {
      if (this.currentIndex < this.songs.length - 1) {
        this.currentIndex++;
      } else {
        this.currentIndex = 0;
      }
      this.loadCurrentSong();
    },
    backSong: function () {
      if (this.currentIndex > 0) {
        this.currentIndex--;
      } else {
        this.currentIndex = this.songs.length - 1;
      }
      this.loadCurrentSong();
    },
    randomSong: function () {
      let newIndex;
      do {
        newIndex = Math.floor(Math.random() * this.songs.length);
      } while (newIndex == this.currentIndex);
      this.currentIndex = newIndex;
      this.loadCurrentSong();
    },
    notification: function () {
      if (!this.config.isNoti) {
        setTimeout(function () {
          if (!player.classList.contains("chillMode")) {
            notificationNode.classList.add("noti");
          }
        }, 3000);
        setTimeout(function () {
          notificationNode.classList.remove("noti");
        }, 10000);
      }
    },
    main: function () {
      this.loadConfigure();
      this.defineProperties();
      this.renderSongs();
      // this.loadCurrentSong();
      this.handleEvents();
      this.notification();
    },
  }
})();

app.main();
// app.renderlabel();

//notification

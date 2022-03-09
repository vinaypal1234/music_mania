let musicData = [
  {
    id: 0,
    img: "./assets/images/levitating.webp",
    title: "levitating",
    src: "./assets/songs/Dua Lipa - Levitating.mp3",
    singer: "dua lipa",
  },

  {
    id: 1,
    img: "./assets/images/aaj_bhi.jpg",
    title: "aaj bhi",
    src: "./assets/songs/Aaj Bhi 320 Kbps.mp3",
    singer: "vishal mishra",
  },

  {
    id: 2,
    img: "./assets/images/baatein_yeh_kabhi_na.jpg",
    title: "baatein yeh kabhi na",
    src: "./assets/songs/Baatein Ye Kabhi Na (Male) - Khamoshiyan 320 Kbps.mp3",
    singer: "arijit singh",
  },

  {
    id: 3,
    img: "./assets/images/kaho_na_kaho.jpg",
    title: "kaho na kaho ",
    src: "./assets/songs/Kaho Na Kaho (Murder) [PagalWorld.com].mp3",
    singer: " Amir Jamal",
  },

  {
    id: 4,
    img: "./assets/images/stay.jpg",
    title: "stay",
    src: "./assets/songs/The Kid LAROI, Justin Bieber - STAY (Official Video).mp3",
    singer: "kid lori",
  },
  {
    id: 5,
    img: "./assets/images/attention.jpg",
    title: "attention",
    src: "./assets/songs/Charlie Puth - Attention [Official Video] (320 kbps).mp3",
    singer: "charlie puth",
  },
  {
    id: 6,
    img: "./assets/images/senorita.jpg",
    title: "senorita",
    src: "./assets/songs/Shawn Mendes, Camila Cabello - Señorita (320 kbps).mp3",
    singer: "shawn mendes",
  },
  {
    id: 7,
    img: "./assets/images/lovely.jpg",
    title: "lovely",
    src: ".assets/songs/Billie Eilish, Khalid - lovely (320 kbps).mp3",
    singer: "billie eilish",
  },
];
let musicListContainer = document.querySelector(".music-list");
let musicTitle = document.querySelector(".music-title");
let musicSinger = document.querySelector(".music-singer");
let musicImg = document.querySelector("img");
let musicToPlay = document.querySelector("audio");
let playBtn = document.querySelector(".play-pause");
let previousSong = document.querySelector(".previous");
let nextSong = document.querySelector(".next");

musicData.forEach((song) => {
  musicListContainer.innerHTML += `
    <div class="music-list-item" data-id=${song.id}>
          <img
            src=${song.img}
            alt=""
          />
          <p id="music-title">${song.title}</p>
  `;
});

let i = 0;

let musicListItem = document.querySelectorAll(".music-list-item");

function setData() {
  musicTitle.textContent = musicData[i].title;
  musicImg.src = musicData[i].img;
  musicSinger.textContent = musicData[i].singer;
  musicToPlay.src = musicData[i].src;
  for (j = 0; j < musicListItem.length; j++) {
    if (musicListItem[j].getAttribute("data-id") == i) {
      musicListItem[j].classList.add("active");
    } else {
      musicListItem[j].classList.remove("active");
    }
  }
}

setData();

let isSongPlaying = false;

function playAndPauseSong() {
  if (isSongPlaying) {
    musicToPlay.play();
    playBtn.classList.remove("bx-play");
    playBtn.classList.add("bx-pause");
  } else {
    musicToPlay.pause();
    playBtn.classList.add("bx-play");
    playBtn.classList.remove("bx-pause");
  }
}

for (let k = 0; k < musicListItem.length; k++) {
  musicListItem[k].addEventListener("click", function () {
    i = this.getAttribute("data-id");
    setData();
    playAndPauseSong();
  });
}

playBtn.addEventListener("click", () => {
  isSongPlaying = !isSongPlaying;
  playAndPauseSong();
});

previousSong.addEventListener("click", () => {
  if (i < 1) {
    i = musicData.length - 1;
  } else {
    i--;
  }
  setData();
  playAndPauseSong();
});

nextSong.addEventListener("click", () => {
  if (i < musicData.length - 1) {
    i++;
  } else {
    i = 0;
  }
  setData();
  playAndPauseSong();
});

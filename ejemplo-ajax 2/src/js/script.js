/**
 * Project Description.
 * ...
 */
const request = new XMLHttpRequest();
let response;
const player = document.getElementById('player');
let holding = false;
let track = document.getElementById('track');
let progress = document.getElementById('progress');
let play = document.getElementById('play');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let title = document.getElementById('title');
let artist = document.getElementById('artist');
let art = document.getElementById('art');
let current_track = 0;
let audio;
let song;
let duration;
let playing = false;

request.addEventListener('load', (event) => {
  // Obtiene la respuesta.
  response = event.target.response;
  console.log(response);
  // Itera sobre los resultados y los agrega a la lista.
  // Informacion que saltra al cargar la página.
  const nameSong = response[3].name;
  const nameArtist = response[3].artist;
  const imgSongs = response[3].image;

  // Agrega la informacion al elemento la pagina del navegador
  title.innerHTML = nameSong;
  artist.innerHTML = nameArtist;
  art.src = imgSongs;

});


// window.addEventListener('load', init(), false);

// function init() {
//     song = songs[current_track];
//     audio = new Audio();
//     audio.src = song.url;
//     title.textContent = song.title;
//     artist.textContent = song.artist;
//     art.src = song.art;
// }


// audio.addEventListener('timeupdate', updateTrack, false);
// audio.addEventListener('loadedmetadata', function () {
//     duration = this.duration;
// }, false);
// window.onmousemove = function (e) {
//     e.preventDefault();
//     if (holding) seekTrack(e);
// }
// window.onmouseup = function (e) {
//     holding = false;
//     console.log(holding);
// }
// track.onmousedown = function (e) {
//     holding = true;
//     seekTrack(e);
//     console.log(holding);
// }
// play.onclick = function () {
//     playing ? audio.pause() : audio.play();
// }
// audio.addEventListener("pause", function () {
//     play.innerHTML = '<img class="pad" src="http://abarcarodriguez.com/lab/play.png" />';
//     playing = false;
// }, false);

// audio.addEventListener("playing", function () {
//     play.innerHTML = '<img src="http://abarcarodriguez.com/lab/pause.png" />';
//     playing = true;
// }, false);
// next.addEventListener("click", nextTrack, false);
// prev.addEventListener("click", prevTrack, false);


// function updateTrack() {
//     curtime = audio.currentTime;
//     percent = Math.round((curtime * 100) / duration);
//     progress.style.width = percent + '%';
//     handler.style.left = percent + '%';
// }

// function seekTrack(e) {
//     event = e || window.event;
//     var x = e.pageX - player.offsetLeft - track.offsetLeft;
//     percent = Math.round((x * 100) / track.offsetWidth);
//     if (percent > 100) percent = 100;
//     if (percent < 0) percent = 0;
//     progress.style.width = percent + '%';
//     handler.style.left = percent + '%';
//     audio.play();
//     audio.currentTime = (percent * duration) / 100
// }
// function nextTrack() {
//     current_track++;
//     current_track = current_track % (songs.length);
//     song = songs[current_track];
//     audio.src = song.url;
//     audio.onloadeddata = function() {
//       updateInfo();
//     }
// }

// function prevTrack() {
//     current_track--;
//     current_track = (current_track == -1 ? (songs.length - 1) : current_track);
//     song = songs[current_track];
//     audio.src = song.url;
//     audio.onloadeddata = function() {
//       updateInfo();
//     }
// }

// function updateInfo() {
//     title.textContent = song.title;
//     artist.textContent = song.artist;
//     art.src = song.art;
//     art.onload = function() {
//         audio.play();
//     }
// }





request.responseType = 'json';
request.open('GET', 'datos/data.json');
request.send();

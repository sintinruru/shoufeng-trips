// bg-music.js
let player;
let isMusicOn = false; // 初始為關閉（靜音 & 暫停）

function onYouTubeIframeAPIReady() {
  player = new YT.Player('bgPlayer', {
    height: '0',
    width: '0',
    videoId: 'wV63cro7XAM', // 想換歌就換這個影片ID
    playerVars: {
      autoplay: 1,           // 嘗試自動播放
      loop: 1,               // 循環播放
      playlist: 'wV63cro7XAM', // 搭配 loop 需要設定同一個影片ID
      rel: 0
    },
    events: { 'onReady': onPlayerReady }
  });
}

function onPlayerReady(event) {
  // 依瀏覽器規範，自動播放需靜音
  event.target.mute();
  event.target.playVideo();
  updateMusicUI(false); // 顯示「開啟音樂」
}

function toggleMusic() {
  if (!player) return;
  if (isMusicOn) {
    // 關閉音樂
    player.pauseVideo();
    player.mute();
    isMusicOn = false;
    updateMusicUI(false);
  } else {
    // 開啟音樂（需使用者互動後方可出聲）
    player.playVideo();
    player.unMute();
    player.setVolume(50);
    isMusicOn = true;
    updateMusicUI(true);
  }
}

function updateMusicUI(on) {
  const btn = document.getElementById('musicToggle');
  const icon = document.getElementById('musicToggleIcon');
  const label = document.getElementById('musicToggleLabel');
  
  if (on) {
    icon.className = 'fas fa-volume-up';
    // 使用 i18n 翻譯
    if (typeof i18n !== 'undefined' && i18n.t) {
      label.textContent = i18n.t('music.turnOff');
    } else {
      label.textContent = '關閉音樂';
    }
    label.setAttribute('data-i18n', 'music.turnOff');
    btn.setAttribute('aria-pressed', 'true');
  } else {
    icon.className = 'fas fa-volume-mute';
    // 使用 i18n 翻譯
    if (typeof i18n !== 'undefined' && i18n.t) {
      label.textContent = i18n.t('music.turnOn');
    } else {
      label.textContent = '開啟音樂';
    }
    label.setAttribute('data-i18n', 'music.turnOn');
    btn.setAttribute('aria-pressed', 'false');
  }
}

// 動態載入 YouTube IFrame API
(function loadYT() {
  const tag = document.createElement('script');
  tag.src = "https://www.youtube.com/iframe_api";
  document.head.appendChild(tag);
})();
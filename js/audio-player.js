(function () {
  const SPEEDS = [1, 1.25, 1.5, 2, 0.75];

  function formatTime(seconds) {
    if (!isFinite(seconds)) return '0:00';
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m}:${s.toString().padStart(2, '0')}`;
  }

  function initPlayer(playerEl) {
    const src = playerEl.dataset.audioSrc;
    if (!src) return;

    const audio = new Audio(src);
    audio.preload = 'metadata';

    const playBtn = playerEl.querySelector('.ap-play');
    const playIcon = playBtn.querySelector('i');
    const bar = playerEl.querySelector('.ap-bar');
    const fill = playerEl.querySelector('.ap-fill');
    const currentTime = playerEl.querySelector('.ap-current');
    const totalTime = playerEl.querySelector('.ap-total');
    const speedBtn = playerEl.querySelector('.ap-speed');
    const volumeBtn = playerEl.querySelector('.ap-volume');
    const volumeIcon = volumeBtn ? volumeBtn.querySelector('i') : null;

    let speedIndex = 0;
    let lastVolume = 1;

    playBtn.addEventListener('click', () => {
      pauseOthers(audio);
      if (audio.paused) {
        audio.play().catch(() => {});
      } else {
        audio.pause();
      }
    });

    audio.addEventListener('play', () => {
      playIcon.classList.remove('fa-play');
      playIcon.classList.add('fa-pause');
      playBtn.setAttribute('aria-label', 'Pause');
    });

    audio.addEventListener('pause', () => {
      playIcon.classList.remove('fa-pause');
      playIcon.classList.add('fa-play');
      playBtn.setAttribute('aria-label', 'Play');
    });

    audio.addEventListener('ended', () => {
      audio.currentTime = 0;
      fill.style.width = '0%';
    });

    audio.addEventListener('loadedmetadata', () => {
      totalTime.textContent = formatTime(audio.duration);
    });

    audio.addEventListener('timeupdate', () => {
      if (!audio.duration) return;
      const percent = (audio.currentTime / audio.duration) * 100;
      fill.style.width = `${percent}%`;
      currentTime.textContent = formatTime(audio.currentTime);
    });

    bar.addEventListener('click', (e) => {
      const rect = bar.getBoundingClientRect();
      const rtl = document.documentElement.dir === 'rtl';
      const x = e.clientX - rect.left;
      const ratio = rtl ? 1 - x / rect.width : x / rect.width;
      if (audio.duration) {
        audio.currentTime = ratio * audio.duration;
      }
    });

    if (speedBtn) {
      speedBtn.addEventListener('click', () => {
        speedIndex = (speedIndex + 1) % SPEEDS.length;
        const speed = SPEEDS[speedIndex];
        audio.playbackRate = speed;
        speedBtn.textContent = `${speed}x`;
      });
    }

    if (volumeBtn && volumeIcon) {
      volumeBtn.addEventListener('click', () => {
        if (audio.volume > 0) {
          lastVolume = audio.volume;
          audio.volume = 0;
          volumeIcon.classList.remove('fa-volume-high');
          volumeIcon.classList.add('fa-volume-xmark');
          volumeBtn.setAttribute('aria-label', 'Unmute');
        } else {
          audio.volume = lastVolume || 1;
          volumeIcon.classList.remove('fa-volume-xmark');
          volumeIcon.classList.add('fa-volume-high');
          volumeBtn.setAttribute('aria-label', 'Mute');
        }
      });
    }

    playerEl._audio = audio;
  }

  function pauseOthers(current) {
    document.querySelectorAll('.audio-player').forEach((el) => {
      if (el._audio && el._audio !== current && !el._audio.paused) {
        el._audio.pause();
      }
    });
  }

  function initEpisodeCards() {
    document.querySelectorAll('.episode-card .ep-play').forEach((btn) => {
      btn.addEventListener('click', () => {
        const featured = document.querySelector('.featured-episode .audio-player');
        if (!featured || !featured._audio) return;
        featured.scrollIntoView({ behavior: 'smooth', block: 'center' });
        pauseOthers(featured._audio);
        featured._audio.play().catch(() => {});
      });
    });
  }

  function init() {
    document.querySelectorAll('.audio-player').forEach(initPlayer);
    initEpisodeCards();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

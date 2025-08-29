console.log("YouTube Ad Skipper Pro loaded aggressively.");

let observer;

function skipAds() {
  const skipButton = document.querySelector('.ytp-ad-skip-button');
  if (skipButton) {
    skipButton.click();
    console.log('Ad skipped.');
  }

  const adOverlayClose = document.querySelector('.ytp-ad-overlay-close-button');
  if (adOverlayClose) {
    adOverlayClose.click();
    console.log('Overlay ad closed.');
  }

  const adElements = document.querySelectorAll('.video-ads, .ytp-ad-player-overlay, .ytp-ad-module, .ytp-ad-image-overlay, .ytp-ad-overlay-container');
  adElements.forEach(el => {
    el.remove();
    console.log('Ad element removed.');
  });

  const unskippable = document.querySelector('.ad-showing');
  if (unskippable && !skipButton) {
    const video = document.querySelector('video');
    if (video) {
      video.muted = true;
      video.playbackRate = 16;
      console.log('Unskippable ad fast-forwarded.');
      video.addEventListener('ended', () => {
        video.muted = false;
        video.playbackRate = 1;
      }, {once: true});
    }
  }
}

function startObserver() {
  skipAds();
  observer = new MutationObserver(skipAds);
  observer.observe(document.body, {childList: true, subtree: true});
}

function stopObserver() {
  if (observer) observer.disconnect();
  console.log("YouTube Ad Skipper Pro disabled.");
}

chrome.storage.sync.get(['enabled'], function(result) {
  if (result.enabled) startObserver();
  else stopObserver();
});

chrome.storage.onChanged.addListener(function(changes) {
  if (changes.enabled) {
    if (changes.enabled.newValue) startObserver();
    else stopObserver();
  }
});

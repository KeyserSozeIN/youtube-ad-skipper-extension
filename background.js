chrome.commands.onCommand.addListener(function(command) {
  if (command === "toggle-skipper") {
    chrome.storage.sync.get(['enabled'], function(result) {
      chrome.storage.sync.set({enabled: !result.enabled}, function() {
        chrome.action.setBadgeText({text: !result.enabled ? "ON" : "OFF"});
      });
    });
  }
});

// Set initial badge
chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.get(['enabled'], function(result) {
    chrome.action.setBadgeText({text: result.enabled ? "ON" : "OFF"});
  });
});

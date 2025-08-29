document.addEventListener('DOMContentLoaded', function() {
  const toggle = document.getElementById('toggleSkipper');
  const status = document.getElementById('status');
  const themeToggle = document.getElementById('themeToggle');

  // Load saved state
  chrome.storage.sync.get(['enabled', 'theme'], function(result) {
    toggle.checked = result.enabled || false;
    status.textContent = "Status: " + (toggle.checked ? "Enabled" : "Disabled");
    if (result.theme === "dark") document.body.classList.add('dark');
  });

  toggle.addEventListener('change', function() {
    chrome.storage.sync.set({enabled: toggle.checked}, function() {
      status.textContent = "Status: " + (toggle.checked ? "Enabled" : "Disabled");
      chrome.action.setBadgeText({text: toggle.checked ? "ON" : "OFF"});
    });
  });

  themeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark');
    chrome.storage.sync.set({theme: document.body.classList.contains('dark') ? "dark" : "light"});
  });
});

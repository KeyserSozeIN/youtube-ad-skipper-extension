# 🎥 YouTube Ad Skipper Pro

**YouTube Ad Skipper Pro** is a lightweight Chrome extension that automatically **skips YouTube ads**, closes annoying overlay popups, and even **fast-forwards unskippable ads**. It also provides a clean popup interface to **enable/disable the skipper** and toggle **Dark/Light mode** with ease.

---

## 🚀 Features

* ✅ **Auto-skip YouTube ads** – Instantly clicks the *Skip Ad* button when available.
* ✅ **Closes overlay ads** – Removes banner and popup ads from videos.
* ✅ **Fast-forwards unskippable ads** – Mutes and speeds them up to 16x until they finish.
* ✅ **Quick toggle** – Enable/disable the skipper anytime with a popup switch.
* ✅ **Dark/Light mode** – Switch between light and dark themes in the popup.
* ✅ **Keyboard shortcut** – Toggle the skipper with **Ctrl+Shift+Y**.
* ✅ **Badge indicator** – Shows `ON` / `OFF` status directly on the extension icon.

---

## 📂 Project Structure

```
.
├── background.js   # Handles enabling/disabling via keyboard shortcut
├── content.js      # Detects & skips YouTube ads in real time
├── popup.html      # Popup UI (toggle & theme switch)
├── popup.css       # Styles for popup
├── popup.js        # Popup logic (state & theme handling)
├── icon.png        # Extension icon
└── manifest.json   # Chrome extension configuration
```

---

## ⚙️ Installation

1. **Download or Clone this Repository**

   ```bash
   git clone https://github.com/your-username/youtube-ad-skipper-pro.git
   cd youtube-ad-skipper-pro
   ```

2. **Open Chrome Extensions Page**

   * Navigate to `chrome://extensions/`
   * Enable **Developer mode** (toggle in top-right)

3. **Load the Extension**

   * Click **Load unpacked**
   * Select the project folder

4. **Pin the Extension**

   * Click the puzzle icon (🧩) in Chrome
   * Pin **YouTube Ad Skipper Pro**

---

## 🎮 Usage

* Open **YouTube** and play any video — ads will be skipped automatically.
* Use the **popup switch** to enable/disable the skipper.
* Use **Ctrl+Shift+Y** to quickly toggle the skipper.
* Use the **Dark/Light mode button** in the popup for theme switching.

---

## 📸 Screenshots

<p align="center">
  <img src="icon.png" alt="Extension Icon" width="100"/>
</p>

---

## 🛡️ Permissions

* `tabs` – Detect and control active YouTube tabs
* `scripting` – Inject content script into YouTube pages
* `storage` – Save user preferences (enabled state & theme)
* `host_permissions: https://www.youtube.com/*` – Access YouTube pages

---

## ⚠️ Disclaimer

This project is intended for **educational purposes only**.
Please use responsibly and in compliance with **YouTube’s Terms of Service**.

---

## 📜 License

This project is licensed under the **MIT License** – feel free to use, modify, and share.


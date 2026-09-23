<div align="center">

<!-- ============ ANIMATED SVG HEADER ============ -->
<img src="https://capsule-render.vercel.app/api?type=waving&color=0:e94560,25:3498db,50:2ecc71,75:f1c40f,100:e94560&height=220&section=header&text=🧠%20Simon%20Says&fontSize=50&fontColor=ffffff&animation=fadeIn&fontAlignY=35&desc=Colour%20Pattern%20Memory%20Game&descSize=18&descAlignY=55&descAlign=50" width="100%"/>

<!-- ============ BADGES ============ -->
<p>
  <img src="https://img.shields.io/badge/HTML5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5"/>
  <img src="https://img.shields.io/badge/CSS3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3"/>
  <img src="https://img.shields.io/badge/JavaScript-%23F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript"/>
</p>

<p>
  <img src="https://img.shields.io/badge/Status-In%20Development-orange?style=flat-square" alt="Status"/>
  <img src="https://img.shields.io/github/license/Uttkarshchambiyal/Simon-Says-colour-guessing-game?style=flat-square&color=blue" alt="License"/>
  <img src="https://img.shields.io/github/stars/Uttkarshchambiyal/Simon-Says-colour-guessing-game?style=flat-square&color=yellow" alt="Stars"/>
  <img src="https://img.shields.io/github/forks/Uttkarshchambiyal/Simon-Says-colour-guessing-game?style=flat-square&color=green" alt="Forks"/>
</p>

<br/>

<!-- ============ 3D GAME BUTTONS VISUAL ============ -->
<table>
  <tr>
    <td align="center">
      <img src="https://img.shields.io/badge/%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20-34d399?style=for-the-badge&logoColor=white" height="80" width="80"/>
    </td>
    <td align="center">
      <img src="https://img.shields.io/badge/%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20-f87171?style=for-the-badge&logoColor=white" height="80" width="80"/>
    </td>
  </tr>
  <tr>
    <td align="center">
      <img src="https://img.shields.io/badge/%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20-fbbf24?style=for-the-badge&logoColor=white" height="80" width="80"/>
    </td>
    <td align="center">
      <img src="https://img.shields.io/badge/%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20-60a5fa?style=for-the-badge&logoColor=white" height="80" width="80"/>
    </td>
  </tr>
</table>

<br/>

<i>A beautiful, iOS-inspired liquid glass Simon Says memory game built with pure HTML, CSS & JavaScript.</i>

<br/><br/>

</div>

---

## 🎮 About The Game

**Simon Says** is a classic memory game where the computer generates a sequence of colours that gets longer each round. Your mission: **watch, remember, and repeat** the pattern!

> 💡 The game flashes a pattern of colours. After watching, you must click the buttons in the **exact same order**. Each level adds one more colour to the sequence. How far can you go?

---

## ✨ Features

<table>
  <tr>
    <td>🧊</td>
    <td><b>Liquid Glass UI</b></td>
    <td>iOS-inspired glassmorphism with frosted blur, specular highlights & ambient orbs</td>
  </tr>
  <tr>
    <td>🌈</td>
    <td><b>4 Color Buttons</b></td>
    <td>Green, Red, Yellow, Blue — each with gloss overlays and glow animations</td>
  </tr>
  <tr>
    <td>💡</td>
    <td><b>Flash Animation</b></td>
    <td>Triple-layer glow effect when buttons light up during pattern playback</td>
  </tr>
  <tr>
    <td>📊</td>
    <td><b>Score Tracking</b></td>
    <td>Real-time Level, Score, and Best (high score) display</td>
  </tr>
  <tr>
    <td>💥</td>
    <td><b>Game Over Shake</b></td>
    <td>Satisfying shake animation on wrong guess</td>
  </tr>
  <tr>
    <td>📱</td>
    <td><b>Fully Responsive</b></td>
    <td>Looks great on desktop, tablet, and mobile</td>
  </tr>
</table>

---

## 🕹️ How To Play

```
1️⃣  Click "Start Game"
2️⃣  Watch the colour pattern carefully
3️⃣  Click the buttons in the same order
4️⃣  Each round adds one more colour
5️⃣  One wrong click = Game Over!
```

---

## 🛠️ Tech Stack

<div align="center">

| Layer | Technology | Purpose |
|:-----:|:----------:|:--------|
| 📄 | **HTML5** | Game structure & semantic markup |
| 🎨 | **CSS3** | Liquid glass UI, animations, responsive layout |
| ⚡ | **JavaScript** | Game logic, DOM manipulation, event handling |

</div>

---

## 📁 Project Structure

```
Simon-Says-colour-guessing-game/
│
├── index.html      → Game structure (buttons, grid, info panel)
├── style.css       → Liquid glass styling & animations
├── script.js       → Game logic (DOM refs ready, logic = DIY!)
└── README.md       → You are here!
```

---

## 🚀 Quick Start

```bash
# Clone the repo
git clone https://github.com/Uttkarshchambiyal/Simon-Says-colour-guessing-game.git

# Open in browser
cd Simon-Says-colour-guessing-game
open index.html
```

Or simply download the ZIP and open `index.html` in any browser — **no setup required!**

---

## 🎯 DOM Quick Reference

> For anyone writing the JavaScript game logic, here's a cheat sheet:

```javascript
// 🎨 Color Buttons
const greenBtn  = document.querySelector("#green-btn");    // data-color="green"
const redBtn    = document.querySelector("#red-btn");      // data-color="red"
const yellowBtn = document.querySelector("#yellow-btn");   // data-color="yellow"
const blueBtn   = document.querySelector("#blue-btn");     // data-color="blue"

// 📊 Displays
const levelDisplay    = document.querySelector("#level-display");
const scoreDisplay    = document.querySelector("#score-display");
const highscoreDisplay = document.querySelector("#highscore-display");
const statusMsg       = document.querySelector("#status-message");

// 🎮 Controls
const startBtn = document.querySelector("#start-btn");
const resetBtn = document.querySelector("#reset-btn");

// 💡 Light up a button:    btn.classList.add("flash")
// 🔇 Turn it off:          btn.classList.remove("flash")
// 💥 Shake on game over:   colorGrid.classList.add("game-over")
```

---

<div align="center">

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br/>
Feel free to check the [issues page](https://github.com/Uttkarshchambiyal/Simon-Says-colour-guessing-game/issues).

---

<br/>

**Made with ❤️ by [Uttkarsh Chambiyal](https://github.com/Uttkarshchambiyal)**

<br/>

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:e94560,25:3498db,50:2ecc71,75:f1c40f,100:e94560&height=120&section=footer" width="100%"/>

</div>


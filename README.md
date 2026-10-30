<div align="center">

# 🎃 Ghost in the Machine — AI Halloween Horror Generator
### *Pumpkin Lover Edition by xuannhj*

[![Hacktoberfest 2026](https://img.shields.io/badge/Hacktoberfest-2026%20Week%204-ff6b00.svg?style=for-the-badge&logo=digitalocean&logoColor=white)](https://dev.to/challenges/hacktoberfest-week4-2026-10-26)
[![DEV Post](https://img.shields.io/badge/DEV.to-Submission%20Post-0a0a0a.svg?style=for-the-badge&logo=devdotto&logoColor=white)](https://dev.to/xuannhj/ghost-in-the-machine-summoning-cyber-horrors-with-open-source-ai-google-gemma-meta-llama--4bh4)
[![Live Demo](https://img.shields.io/badge/Live%20Demo-xuannhj.tech-ea580c.svg?style=for-the-badge&logo=vercel&logoColor=white)](https://xuannhj.tech)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

<br/>

> **An atmospheric Cyber-Gothic horror web application powered by Open-Source / Open-Weight AI (Google Gemma 2 & Meta Llama 3).**  
> Built for the **Hacktoberfest 2026 DEV Challenge (Week 4: "Ghost in the Machine")** and competing for the **Best Use of a .tech Domain** award at [xuannhj.tech](https://xuannhj.tech).

</div>

---

## 🌟 Overview

**Ghost in the Machine** explores what happens when digital spirits haunt the billions of neural weights inside open-source artificial intelligence. 

Created by **xuannhj** with a playful **Pumpkin Lover Edition** signature, the application brings authentic Halloween folklore and retro computing aesthetics to life:
- **Possessed Terminal:** Emulates an ancient CRT monochrome screen connected to port 666, flickering with scanlines, glitch animations, and typewriter streaming prose.
- **Open-Source AI Engine:** Micro-horror stories (2-3 sentences) summoned in real-time using **Google Gemma 2 (9B)** and **Meta Llama 3.1 (8B)** via ultra-fast Groq serverless inference.
- **Offline Resilience:** Works 100% with the lights and internet off via a curated collection of theme-filtered folklore.
- **Procedural Halloween Soundtrack:** Native browser sound engine synthesizing iconic horror themes without external audio assets.

---

## 🎃 Key Features

### 1. 🤖 Dual Open-Weight AI Intelligence
- **Google Gemma 2 (9B):** Renowned for poetic, chilling, atmospheric prose.
- **Meta Llama 3.1 (8B):** Master of sudden, suspenseful horror plot twists.
- **Sub-Second Latency:** Powered by Groq LPU inference delivering responses in under 0.8 seconds.
- **Interactive Key Manager:** In-app modal allowing judges and users to test with their own Groq / Hugging Face keys.

### 2. 🎃 "Pumpkin Lover Edition" Signature
- Dedicated **Cursed Pumpkin Lore** theme featuring stories of 3:14 AM midnight pumpkin soup, blood-drinking Jack-o'-lanterns, and smart-farm IoT vine breaches.
- Autumn harvest confetti explosions (pumpkin orange, blood crimson, forest vine green).

### 3. 📻 Procedural Web Audio Synth Jukebox
Zero external mp3 files. Pure real-time procedural sound synthesis directly through the browser's **Web Audio API**:
- **🎃 John Carpenter's 1978 Halloween Theme:** The iconic 5/4 meter tension arpeggio that defined horror cinema.
- **🎵 The Cursed Music Box:** An eerie D-minor music box waltz echoing through an abandoned attic.
- **🕯️ Cathedral Pipe Organ:** Slow, resonant minor chords evoking subterranean catacombs.
- **Volume & Track Controls:** Integrated visualizer bars, track switcher, and slider.

### 4. 🖥️ Instant Reactive Theme Switcher
Selecting a theme instantly triggers ambient chimes, auto-updates the story, and shifts the entire terminal's neon aura:
- 🎃 **Cursed Pumpkin:** Radiant Jack-o'-lantern Orange (`#f97316`)
- 👻 **Cyber & Hardware Horror:** Matrix Terminal Green (`#10b981`)
- 🕯️ **Classic Halloween Haunting:** Blood Moon Crimson (`#ef4444`)
- 🤖 **AI Singularity Nightmare:** Cursed Neural Violet (`#a855f7`)

### 5. 🎙️ Cursed Voice Text-to-Speech
Browser-native Speech Synthesis tuned with custom pitch-shifting (0.55 pitch) and deliberate ominous pacing (0.85 rate) to read out stories in a demonic cadence.

---

## 🛠️ Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Frontend Framework** | [React 19](https://react.dev/) + [Vite 8](https://vitejs.dev/) |
| **Styling & Effects** | [Tailwind CSS v4](https://tailwindcss.com/) + Custom CRT Keyframe Filters |
| **Open-Source AI** | [Google Gemma 2 (9B)](https://ai.google.dev/gemma) & [Meta Llama 3.1 (8B)](https://llama.meta.com/) via [Groq Cloud](https://groq.com/) |
| **Audio Synthesis** | Native [Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API) + [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API) |
| **Deployment** | [Vercel Edge Network](https://vercel.com/) |
| **Custom Domain** | [xuannhj.tech](https://xuannhj.tech) (.TECH Domains) |

---

## 📂 Project Structure

```bash
ghost-in-the-machine/
├── public/
│   ├── favicon.svg              # Custom Jack-o'-lantern skull icon
│   └── icons.svg
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── AboutSection.jsx     # Modern 4-card Bento grid architecture showcase
│   │   ├── ConfigModal.jsx      # Free Groq / Hugging Face API key configuration
│   │   ├── Footer.jsx           # Attribution, .TECH prize badge, copyright
│   │   ├── GhostTerminal.jsx    # Central CRT interactive terminal & typewriter engine
│   │   ├── HalloweenMusicPlayer.jsx # Web Audio player with visualizer & Carpenter theme
│   │   ├── Navbar.jsx           # Domain brand, language toggle, audio shortcut
│   │   └── SpookyBackground.jsx # HTML5 Canvas animated floating embers
│   ├── services/
│   │   ├── aiService.js         # Groq LLM integration & theme-filtered offline engine
│   │   └── soundService.js      # Procedural Web Audio synthesizer (3 tracks + chime)
│   ├── App.jsx                  # Master container with scanlines & vignette
│   ├── index.css                # Tailwind v4 import & CRT screen keyframe animations
│   └── main.jsx
├── docs/
│   └── project-plan.md          # Complete step-by-step implementation plan
├── index.html                   # HTML template with Google Spooky Fonts
├── package.json
└── vite.config.js
```

---

## 🚀 Quickstart (Local Development)

```bash
# 1. Clone the repository
git clone https://github.com/xuannhj/ghost-in-the-machine.git

# 2. Enter project directory
cd ghost-in-the-machine

# 3. Install dependencies
npm install

# 4. (Optional) Provide your free Groq API Key
# If omitted, the app runs automatically in offline Cursed Kernel mode
echo "VITE_GROQ_API_KEY=gsk_your_key_here" > .env.local

# 5. Start development server
npm run dev
```

Open `http://localhost:5173` in your browser.

---

## 🏆 Hacktoberfest 2026 Submission

- **Challenge:** [Hacktoberfest Open-Source AI Challenge Week 4: "Ghost in the Machine"](https://dev.to/challenges/hacktoberfest-week4-2026-10-26)
- **Official DEV Post:** [Ghost in the Machine — Pumpkin Lover Edition](https://dev.to/xuannhj/ghost-in-the-machine-summoning-cyber-horrors-with-open-source-ai-google-gemma-meta-llama--4bh4)
- **Tags:** `#devchallenge`, `#hf26challenge`
- **Prize Category:** *Best Use of a .tech Domain* (`https://xuannhj.tech`)
- **Author:** [xuannhj](https://github.com/xuannhj)

---

## 📝 License

Distributed under the **MIT License**. See `LICENSE` for details.

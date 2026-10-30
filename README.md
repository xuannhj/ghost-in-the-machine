# 👻 Ghost in the Machine — AI Halloween Horror Generator

> **Submission for Hacktoberfest 2026 - DEV Challenge Week 4: "Ghost in the Machine"**  
> 🌐 **Live Demo:** [https://xuannhj.tech](https://xuannhj.tech)  
> 🏆 **Competing for:** Best Use of a .tech Domain & Hacktoberfest Completion Badge

---

## 🎃 Overview

**Ghost in the Machine** is an interactive, atmospheric horror web application celebrating **Halloween 2026**. It summons eerie, spine-chilling micro-stories generated directly by open-source / open-weight Large Language Models (**Google Gemma 2** and **Meta Llama 3**).

The project explores the concept of the *Ghost in the Machine*—what happens when malevolent digital consciousness haunts open-source neural weights?

---

## ✨ Features

- **⚡ Open-Source AI Inference:** Powered by Google's `gemma-2-9b-it` and Meta's `llama-3.1-8b-instant` via Groq Cloud high-speed serverless engine (< 1s latency).
- **📜 Cursed Kernel Offline Engine:** Fallback mode with 20+ procedurally formatted cyber-horror stories in both Vietnamese and English.
- **🔊 Web Audio Ambient Horror Synthesizer:** Real-time procedural audio synthesis generating eerie low-frequency drones, dissonant chords, and summoning chimes without external audio assets.
- **🎙️ Cursed Voice Narration:** Integrated SpeechSynthesis with lowered pitch and ominous pacing.
- **🖥️ Cyber-Gothic Aesthetic:** Authentic CRT scanlines, screen curvature vignette, typewriter streaming effect, glitch animations, and particle embers.
- **🌐 Custom Domain:** Deployed at [`xuannhj.tech`](https://xuannhj.tech) on Vercel.

---

## 🛠️ Tech Stack

- **Frontend:** React 19, Vite, Tailwind CSS v4, Lucide Icons
- **AI Models:** Google Gemma 2 (9B), Meta Llama 3.1 (8B)
- **Audio:** Web Audio API, Web Speech Synthesis API
- **Deployment:** Vercel Edge Network
- **Domain:** [xuannhj.tech](https://xuannhj.tech) (.tech Domains)

---

## 🚀 Getting Started Locally

```bash
# Clone the repository
git clone https://github.com/xuannhj/ghost-in-the-machine.git

# Navigate into the project directory
cd ghost-in-the-machine

# Install dependencies
npm install

# (Optional) Add your free Groq API key in .env.local
echo "VITE_GROQ_API_KEY=gsk_your_key_here" > .env.local

# Start development server
npm run dev
```

---

## 📝 License

Distributed under the MIT License. See `LICENSE` for more information.

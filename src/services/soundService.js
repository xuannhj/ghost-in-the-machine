// Web Audio API Synthesizer for ambient horror & sound effects
class SoundController {
  constructor() {
    this.ctx = null;
    this.ambientNode = null;
    this.isMuted = true;
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioContext();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  toggleMute() {
    this.init();
    this.isMuted = !this.isMuted;
    if (this.isMuted) {
      this.stopAmbient();
    } else {
      this.startAmbient();
    }
    return this.isMuted;
  }

  // Play a continuous eerie drone
  startAmbient() {
    if (this.isMuted || this.ambientNode) return;
    try {
      this.init();
      const osc1 = this.ctx.createOscillator();
      const osc2 = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const filter = this.ctx.createBiquadFilter();

      osc1.type = 'sawtooth';
      osc1.frequency.setValueAtTime(55, this.ctx.currentTime); // Low A

      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(58.5, this.ctx.currentTime); // Dissonant beating

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(140, this.ctx.currentTime);

      gain.gain.setValueAtTime(0.01, this.ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.08, this.ctx.currentTime + 3);

      osc1.connect(filter);
      osc2.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      osc1.start();
      osc2.start();

      this.ambientNode = { osc1, osc2, gain };
    } catch (e) {
      console.warn('Audio ambient failed', e);
    }
  }

  stopAmbient() {
    if (this.ambientNode) {
      try {
        const { osc1, osc2, gain } = this.ambientNode;
        gain.gain.linearRampToValueAtTime(0.001, this.ctx.currentTime + 1);
        setTimeout(() => {
          try {
            osc1.stop();
            osc2.stop();
          } catch (_) {}
          this.ambientNode = null;
        }, 1000);
      } catch (_) {
        this.ambientNode = null;
      }
    }
  }

  // Spooky chime when summoning
  playSummonChime() {
    if (this.isMuted) return;
    try {
      this.init();
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(440, now);
      osc.frequency.exponentialRampToValueAtTime(110, now + 1.2);

      gain.gain.setValueAtTime(0.15, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 1.2);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 1.3);
    } catch (e) {
      console.warn('Chime error', e);
    }
  }

  // Speak using browser SpeechSynthesis with creepy low pitch
  speakCursed(text, lang = 'vi-VN') {
    if (!('speechSynthesis' in window)) return;
    try {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.pitch = 0.55; // Creepy deep pitch
      utterance.rate = 0.85;  // Slow, menacing pace
      utterance.lang = lang;
      window.speechSynthesis.speak(utterance);
    } catch (e) {
      console.warn('Speech synthesis error', e);
    }
  }
}

export const soundService = new SoundController();

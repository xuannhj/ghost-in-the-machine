// Web Audio API Synthesizer for ambient horror & procedural Halloween soundtrack

export const TRACKS = [
  { id: 'carpenter', name_vi: '🎃 Halloween Theme (John Carpenter Synth)', name_en: '🎃 John Carpenter Halloween Theme' },
  { id: 'musicbox', name_vi: '🎵 Hộp Nhạc Ma Ám (Cursed Music Box)', name_en: '🎵 Cursed Music Box Lullaby' },
  { id: 'organ', name_vi: '🕯️ Đại Dương Cầm Hầm Mộ (Cathedral Organ)', name_en: '🕯️ Catacombs Pipe Organ' },
];

class SoundController {
  constructor() {
    this.ctx = null;
    this.isPlaying = false;
    this.currentTrack = 'carpenter';
    this.volume = 0.35;
    this.masterGain = null;
    this.sequencerTimer = null;
    this.stepIndex = 0;
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioContext();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    if (!this.masterGain) {
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(this.volume, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);
    }
  }

  setVolume(val) {
    this.volume = Math.max(0, Math.min(1, val));
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setValueAtTime(this.volume, this.ctx.currentTime);
    }
  }

  toggleMusic(trackId) {
    this.init();
    if (this.isPlaying) {
      if (trackId && trackId !== this.currentTrack) {
        this.stopMusic();
        this.currentTrack = trackId;
        this.startMusic(trackId);
        return true;
      }
      this.stopMusic();
      return false;
    } else {
      if (trackId) this.currentTrack = trackId;
      this.startMusic(this.currentTrack);
      return true;
    }
  }

  startMusic(trackId = 'carpenter') {
    this.init();
    this.stopMusic();
    this.isPlaying = true;
    this.currentTrack = trackId;
    this.stepIndex = 0;

    if (trackId === 'carpenter') {
      this.runCarpenterSequencer();
    } else if (trackId === 'musicbox') {
      this.runMusicBoxSequencer();
    } else if (trackId === 'organ') {
      this.runOrganSequencer();
    }
  }

  stopMusic() {
    this.isPlaying = false;
    if (this.sequencerTimer) {
      clearInterval(this.sequencerTimer);
      this.sequencerTimer = null;
    }
  }

  // --- TRACK 1: John Carpenter's Iconic 1978 Halloween Theme (5/4 time, 132 BPM) ---
  runCarpenterSequencer() {
    const tempoMs = 115; // 16th note timing
    // F#5, C#5, F#5, C#5, F#5, C#5, F#5, C#5, D5, C#5
    const barA = [739.99, 554.37, 739.99, 554.37, 739.99, 554.37, 739.99, 554.37, 587.33, 554.37];
    // F5, C5, F5, C5, F5, C5, F5, C5, C#5, C5
    const barB = [698.46, 523.25, 698.46, 523.25, 698.46, 523.25, 698.46, 523.25, 554.37, 523.25];

    let patternIndex = 0;
    let barCount = 0;

    this.sequencerTimer = setInterval(() => {
      if (!this.isPlaying || !this.ctx) return;
      const now = this.ctx.currentTime;
      
      const isBarA = Math.floor(barCount / 10) % 4 < 2;
      const currentBar = isBarA ? barA : barB;
      const freq = currentBar[patternIndex];

      // Pluck synth note
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const filter = this.ctx.createBiquadFilter();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(freq, now);

      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(freq * 1.5, now);
      filter.Q.setValueAtTime(4, now);

      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.18);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.masterGain);

      osc.start(now);
      osc.stop(now + 0.2);

      // Deep bass kick on beat 1 of each 10-step bar
      if (patternIndex === 0) {
        const bassOsc = this.ctx.createOscillator();
        const bassGain = this.ctx.createGain();
        bassOsc.type = 'triangle';
        bassOsc.frequency.setValueAtTime(isBarA ? 92.5 : 87.3, now); // F#2 or F2

        bassGain.gain.setValueAtTime(0.25, now);
        bassGain.gain.exponentialRampToValueAtTime(0.001, now + 0.9);

        bassOsc.connect(bassGain);
        bassGain.connect(this.masterGain);

        bassOsc.start(now);
        bassOsc.stop(now + 1.0);
      }

      patternIndex = (patternIndex + 1) % 10;
      barCount++;
    }, tempoMs);
  }

  // --- TRACK 2: The Cursed Music Box Lullaby ---
  runMusicBoxSequencer() {
    const tempoMs = 380;
    // D minor haunting melody: D5, F5, A5, G5, F5, E5, C#5, D5, F5, Bb5, A5, G5, F5, E5, D5
    const melody = [
      587.33, 698.46, 880.00, 783.99, 698.46, 659.25, 554.37, 587.33,
      698.46, 932.33, 880.00, 783.99, 698.46, 659.25, 587.33, 0
    ];
    let noteIdx = 0;

    this.sequencerTimer = setInterval(() => {
      if (!this.isPlaying || !this.ctx) return;
      const freq = melody[noteIdx];
      noteIdx = (noteIdx + 1) % melody.length;

      if (freq > 0) {
        const now = this.ctx.currentTime;
        // Music box bell tone (fundamental + harmonic)
        const osc1 = this.ctx.createOscillator();
        const osc2 = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc1.type = 'sine';
        osc1.frequency.setValueAtTime(freq, now);

        osc2.type = 'sine';
        osc2.frequency.setValueAtTime(freq * 2.756, now); // Metallic overtone

        gain.gain.setValueAtTime(0.18, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 1.2);

        osc1.connect(gain);
        osc2.connect(gain);
        gain.connect(this.masterGain);

        osc1.start(now);
        osc2.start(now);
        osc1.stop(now + 1.3);
        osc2.stop(now + 1.3);
      }
    }, tempoMs);
  }

  // --- TRACK 3: Cathedral Pipe Organ ---
  runOrganSequencer() {
    const chordDurationMs = 2800;
    // Chords in D Minor
    const chords = [
      [146.83, 220.00, 293.66, 349.23], // Dm
      [116.54, 174.61, 233.08, 349.23], // Bb
      [98.00,  146.83, 196.00, 293.66], // Gm
      [110.00, 164.81, 220.00, 277.18]  // A
    ];
    let chordIdx = 0;

    const playChord = () => {
      if (!this.isPlaying || !this.ctx) return;
      const now = this.ctx.currentTime;
      const currentChord = chords[chordIdx];
      chordIdx = (chordIdx + 1) % chords.length;

      currentChord.forEach((f) => {
        const osc1 = this.ctx.createOscillator();
        const osc2 = this.ctx.createOscillator();
        const filter = this.ctx.createBiquadFilter();
        const gain = this.ctx.createGain();

        osc1.type = 'sawtooth';
        osc1.frequency.setValueAtTime(f, now);

        osc2.type = 'sawtooth';
        osc2.frequency.setValueAtTime(f * 1.004, now); // Detune for rich pipe organ

        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(600, now);

        gain.gain.setValueAtTime(0.001, now);
        gain.gain.linearRampToValueAtTime(0.045, now + 0.6);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 2.7);

        osc1.connect(filter);
        osc2.connect(filter);
        filter.connect(gain);
        gain.connect(this.masterGain);

        osc1.start(now);
        osc2.start(now);
        osc1.stop(now + 2.8);
        osc2.stop(now + 2.8);
      });
    };

    playChord();
    this.sequencerTimer = setInterval(playChord, chordDurationMs);
  }

  // Summon chime
  playSummonChime() {
    try {
      this.init();
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(520, now);
      osc.frequency.exponentialRampToValueAtTime(130, now + 1.1);

      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 1.1);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 1.2);
    } catch (e) {
      console.warn('Chime error', e);
    }
  }

  // Cursed Voice Narration
  speakCursed(text, lang = 'vi-VN') {
    if (!('speechSynthesis' in window)) return;
    try {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.pitch = 0.55;
      utterance.rate = 0.85;
      utterance.lang = lang;
      window.speechSynthesis.speak(utterance);
    } catch (e) {
      console.warn('Speech synthesis error', e);
    }
  }
}

export const soundService = new SoundController();

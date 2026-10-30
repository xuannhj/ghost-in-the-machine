import React, { useState } from 'react';
import { Volume2, VolumeX, Key, Sparkles, Globe, Terminal } from 'lucide-react';
import { soundService } from '../services/soundService';

export default function Navbar({ onOpenConfig, hasCustomKey, lang, setLang }) {
  const [isAudioMuted, setIsAudioMuted] = useState(soundService.isMuted);

  const handleAudioToggle = () => {
    const muted = soundService.toggleMute();
    setIsAudioMuted(muted);
  };

  return (
    <header className="relative z-30 w-full border-b border-red-950/60 bg-[#07070b]/90 backdrop-blur-md px-4 py-3">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-3">
        {/* Brand / Title */}
        <div className="flex items-center gap-3">
          <div className="relative flex items-center justify-center w-9 h-9 rounded-lg bg-red-950/60 border border-red-700/50 shadow-inner">
            <span className="text-xl animate-pulse">👻</span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-spooky text-xl text-red-500 tracking-wider glow-red">
                GHOST IN THE MACHINE
              </span>
              <span className="hidden sm:inline-block text-[10px] font-mono px-2 py-0.5 rounded bg-purple-950/70 border border-purple-800 text-purple-300">
                HF26 Week 4
              </span>
            </div>
            <p className="text-[11px] font-mono text-gray-500 flex items-center gap-1">
              <Terminal className="w-3 h-3 text-red-400" />
              <span>Domain:</span>
              <a
                href="https://xuannhj.tech"
                target="_blank"
                rel="noreferrer"
                className="text-red-400 hover:text-red-300 hover:underline font-semibold"
              >
                xuannhj.tech
              </a>
              <span className="text-gray-600">|</span>
              <span className="text-gray-400">Open-Source AI Challenge</span>
            </p>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          {/* Language Toggle */}
          <button
            onClick={() => setLang(lang === 'vi' ? 'en' : 'vi')}
            className="px-2.5 py-1.5 rounded-lg border border-red-900/50 bg-black/40 hover:bg-red-950/40 text-xs font-mono text-gray-300 transition flex items-center gap-1.5"
            title="Switch Language"
          >
            <Globe className="w-3.5 h-3.5 text-red-400" />
            <span className="font-bold">{lang === 'vi' ? 'VI' : 'EN'}</span>
          </button>

          {/* Audio Synthesizer Toggle */}
          <button
            onClick={handleAudioToggle}
            className={`px-2.5 py-1.5 rounded-lg border text-xs font-mono transition flex items-center gap-1.5 ${
              !isAudioMuted
                ? 'border-red-500 bg-red-950/80 text-red-300 shadow-[0_0_12px_rgba(239,68,68,0.5)] animate-pulse'
                : 'border-gray-800 bg-black/40 hover:bg-gray-900 text-gray-400'
            }`}
            title={isAudioMuted ? 'Bật âm thanh ma quái (Audio On)' : 'Tắt âm thanh (Mute)'}
          >
            {!isAudioMuted ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
            <span className="hidden md:inline">
              {!isAudioMuted ? (lang === 'vi' ? 'Nhạc Ma: Bật' : 'Audio: ON') : (lang === 'vi' ? 'Nhạc Ma: Tắt' : 'Audio: OFF')}
            </span>
          </button>

          {/* AI Key Config */}
          <button
            onClick={onOpenConfig}
            className={`px-2.5 py-1.5 rounded-lg border text-xs font-mono transition flex items-center gap-1.5 ${
              hasCustomKey
                ? 'border-green-800 bg-green-950/40 text-green-300'
                : 'border-red-900/50 bg-black/40 hover:bg-red-950/40 text-gray-300'
            }`}
            title="Configure Open-Source AI Key"
          >
            <Key className="w-3.5 h-3.5 text-yellow-500" />
            <span className="hidden sm:inline">
              {hasCustomKey ? 'AI Key ✓' : (lang === 'vi' ? 'Cài Key AI' : 'AI Key')}
            </span>
          </button>

          {/* GitHub Repo */}
          <a
            href="https://github.com/xuannhj/ghost-in-the-machine"
            target="_blank"
            rel="noreferrer"
            className="p-1.5 rounded-lg border border-red-900/50 bg-black/40 hover:bg-red-950/40 text-gray-300 transition"
            title="Source Code on GitHub"
          >
            <svg className="w-4 h-4 text-gray-300 fill-current" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
}

import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Play, Pause, Music, Disc } from 'lucide-react';
import { soundService, TRACKS } from '../services/soundService';

export default function HalloweenMusicPlayer({ lang }) {
  const [isPlaying, setIsPlaying] = useState(soundService.isPlaying);
  const [currentTrack, setCurrentTrack] = useState(soundService.currentTrack);
  const [volume, setVolume] = useState(soundService.volume);

  const handleToggle = () => {
    const playing = soundService.toggleMusic(currentTrack);
    setIsPlaying(playing);
  };

  const handleTrackChange = (trackId) => {
    setCurrentTrack(trackId);
    if (isPlaying) {
      soundService.startMusic(trackId);
    }
  };

  const handleVolumeChange = (e) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    soundService.setVolume(val);
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 mb-4 font-mono">
      <div className={`p-3 rounded-xl border transition-all duration-500 backdrop-blur-md flex flex-wrap items-center justify-between gap-3 shadow-lg ${
        isPlaying
          ? 'bg-orange-950/40 border-orange-600/70 shadow-[0_0_20px_rgba(249,115,22,0.3)]'
          : 'bg-[#0e0e18]/80 border-gray-800'
      }`}>
        {/* Left: Play button & Track indicator */}
        <div className="flex items-center gap-3">
          <button
            onClick={handleToggle}
            className={`px-4 py-2 rounded-lg font-bold text-xs tracking-wider transition transform hover:scale-105 active:scale-95 flex items-center gap-2 border ${
              isPlaying
                ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white border-orange-400 shadow-[0_0_15px_rgba(249,115,22,0.6)] animate-pulse'
                : 'bg-orange-950/60 hover:bg-orange-900/60 text-orange-300 border-orange-700/60'
            }`}
          >
            {isPlaying ? (
              <>
                <Pause className="w-4 h-4 fill-current" />
                <span>{lang === 'vi' ? 'DỪNG NHẠC' : 'PAUSE'}</span>
              </>
            ) : (
              <>
                <Play className="w-4 h-4 fill-current" />
                <span>{lang === 'vi' ? '🎃 PHÁT NHẠC HALLOWEEN' : '🎃 PLAY HALLOWEEN MUSIC'}</span>
              </>
            )}
          </button>

          {/* Animated visualizer bars when playing */}
          {isPlaying && (
            <div className="hidden sm:flex items-end gap-1 h-5 px-2">
              <span className="w-1 bg-orange-500 rounded-full animate-[bounce_0.6s_infinite_0.1s] h-3"></span>
              <span className="w-1 bg-red-500 rounded-full animate-[bounce_0.6s_infinite_0.3s] h-5"></span>
              <span className="w-1 bg-orange-400 rounded-full animate-[bounce_0.6s_infinite_0.2s] h-4"></span>
              <span className="w-1 bg-yellow-500 rounded-full animate-[bounce_0.6s_infinite_0.4s] h-2"></span>
              <span className="w-1 bg-red-400 rounded-full animate-[bounce_0.6s_infinite_0.15s] h-5"></span>
            </div>
          )}
        </div>

        {/* Middle: Track Selection */}
        <div className="flex items-center gap-2 text-xs">
          <Disc className={`w-4 h-4 text-orange-400 ${isPlaying ? 'animate-spin' : ''}`} />
          <span className="text-gray-400 hidden md:inline">{lang === 'vi' ? 'Bài nhạc:' : 'Track:'}</span>
          <select
            value={currentTrack}
            onChange={(e) => handleTrackChange(e.target.value)}
            className="bg-[#12121e] border border-orange-900/60 text-orange-200 text-xs rounded-lg px-2.5 py-1.5 focus:outline-none focus:border-orange-500 cursor-pointer"
          >
            {TRACKS.map((t) => (
              <option key={t.id} value={t.id}>
                {lang === 'vi' ? t.name_vi : t.name_en}
              </option>
            ))}
          </select>
        </div>

        {/* Right: Volume control */}
        <div className="flex items-center gap-2 text-xs text-gray-400">
          {volume === 0 ? <VolumeX className="w-4 h-4 text-gray-500" /> : <Volume2 className="w-4 h-4 text-orange-400" />}
          <input
            type="range"
            min="0"
            max="1"
            step="0.05"
            value={volume}
            onChange={handleVolumeChange}
            className="w-20 sm:w-24 accent-orange-500 cursor-pointer"
            title="Music Volume"
          />
        </div>
      </div>
    </div>
  );
}


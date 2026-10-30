import React, { useState, useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';
import { 
  Skull, 
  Sparkles, 
  Copy, 
  Check, 
  Share2, 
  Mic, 
  RefreshCw, 
  Cpu, 
  Flame, 
  Radio, 
  AlertTriangle 
} from 'lucide-react';
import { summonGhostStory, getCuratedStory, MODELS, MOODS } from '../services/aiService';
import { soundService } from '../services/soundService';

export default function GhostTerminal({ apiKey, lang }) {
  const [selectedModel, setSelectedModel] = useState('gemma2-9b-it');
  const [selectedMood, setSelectedMood] = useState('pumpkin');
  const [isLoading, setIsLoading] = useState(false);
  
  // Initial story directly from the selected mood!
  const [storyData, setStoryData] = useState(() => {
    const initial = getCuratedStory('pumpkin', lang);
    return {
      title: initial.title,
      story: initial.story,
      modelUsed: 'Google Gemma 2 (9B) / Offline Engine',
      timestamp: new Date().toLocaleTimeString(),
      source: initial.source,
      isRealAi: false
    };
  });

  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const typingIntervalRef = useRef(null);

  // Theme styling definitions for immediate visual feedback
  const themeStyles = {
    pumpkin: {
      border: 'border-orange-500/80',
      glow: 'shadow-[0_0_35px_rgba(249,115,22,0.35)]',
      accentText: 'text-orange-400',
      titleGlow: 'text-orange-500 drop-shadow-[0_0_12px_rgba(249,115,22,0.8)]',
      bannerBg: 'bg-orange-950/50 border-orange-800/50 text-orange-300',
      statusText: '🎃 PUMPKIN LOVER PROTOCOL ACTIVE',
      icon: '🎃',
      confetti: ['#f97316', '#ea580c', '#ef4444', '#15803d', '#78350f']
    },
    cyber: {
      border: 'border-emerald-500/80',
      glow: 'shadow-[0_0_35px_rgba(16,185,129,0.35)]',
      accentText: 'text-emerald-400',
      titleGlow: 'text-emerald-400 drop-shadow-[0_0_12px_rgba(16,185,129,0.8)]',
      bannerBg: 'bg-emerald-950/50 border-emerald-800/50 text-emerald-300',
      statusText: '👻 CYBER HARDWARE BREACH // PORT 666',
      icon: '👻',
      confetti: ['#10b981', '#059669', '#34d399', '#064e3b', '#000000']
    },
    halloween: {
      border: 'border-red-600/80',
      glow: 'shadow-[0_0_35px_rgba(220,38,38,0.35)]',
      accentText: 'text-red-400',
      titleGlow: 'text-red-500 drop-shadow-[0_0_12px_rgba(239,68,68,0.8)]',
      bannerBg: 'bg-red-950/50 border-red-800/50 text-red-300',
      statusText: '🕯️ CLASSIC SÉANCE CHAMBER CONNECTED',
      icon: '🕯️',
      confetti: ['#ef4444', '#dc2626', '#991b1b', '#7f1d1d', '#000000']
    },
    singularity: {
      border: 'border-purple-600/80',
      glow: 'shadow-[0_0_35px_rgba(168,85,247,0.35)]',
      accentText: 'text-purple-400',
      titleGlow: 'text-purple-400 drop-shadow-[0_0_12px_rgba(168,85,247,0.8)]',
      bannerBg: 'bg-purple-950/50 border-purple-800/50 text-purple-300',
      statusText: '🤖 AI NEURAL SINGULARITY AWAKENED',
      icon: '🤖',
      confetti: ['#a855f7', '#9333ea', '#7e22ce', '#3b0764', '#000000']
    }
  };

  const currentTheme = themeStyles[selectedMood] || themeStyles.pumpkin;

  // When user switches language, refresh story to match language
  useEffect(() => {
    const item = getCuratedStory(selectedMood, lang);
    setStoryData({
      title: item.title,
      story: item.story,
      modelUsed: selectedModel === 'gemma2-9b-it' ? 'Google Gemma 2 (9B)' : 'Meta Llama 3.1 (8B)',
      timestamp: new Date().toLocaleTimeString(),
      source: item.source,
      isRealAi: false
    });
  }, [lang]);

  // Handle immediate theme/mood switch with audio & instant typewriter
  const handleMoodChange = (newMood) => {
    setSelectedMood(newMood);
    soundService.playSummonChime();

    // Immediately load story from that specific category
    const item = getCuratedStory(newMood, lang);
    setStoryData({
      title: item.title,
      story: item.story,
      modelUsed: selectedModel === 'gemma2-9b-it' ? 'Google Gemma 2 (9B)' : 'Meta Llama 3.1 (8B)',
      timestamp: new Date().toLocaleTimeString(),
      source: item.source,
      isRealAi: false
    });
  };

  // Typewriter effect
  useEffect(() => {
    if (!storyData.story) return;
    clearInterval(typingIntervalRef.current);
    setDisplayedText('');
    setIsTyping(true);

    let currentIndex = 0;
    const fullText = storyData.story;
    const speed = 20; // ms per char

    typingIntervalRef.current = setInterval(() => {
      if (currentIndex < fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typingIntervalRef.current);
        setIsTyping(false);
      }
    }, speed);

    return () => clearInterval(typingIntervalRef.current);
  }, [storyData]);

  // Main Summon function
  const handleSummon = async () => {
    if (isLoading) return;
    setIsLoading(true);
    soundService.playSummonChime();

    try {
      const result = await summonGhostStory({
        model: selectedModel,
        mood: selectedMood,
        lang: lang,
        apiKey: apiKey
      });

      setStoryData(result);

      // Trigger theme-specific confetti burst
      confetti({
        particleCount: 65,
        spread: 80,
        origin: { y: 0.75 },
        colors: currentTheme.confetti
      });
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  // Copy to clipboard
  const handleCopy = () => {
    const textToCopy = `👻 "${storyData.title}"\n\n${storyData.story}\n\nGenerated by Open-Source AI (Ghost in the Machine) at https://xuannhj.tech`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Creepy Voice narration
  const handleSpeak = () => {
    if (isSpeaking) {
      window.speechSynthesis?.cancel();
      setIsSpeaking(false);
      return;
    }
    setIsSpeaking(true);
    soundService.speakCursed(storyData.story, lang === 'vi' ? 'vi-VN' : 'en-US');
    setTimeout(() => setIsSpeaking(false), 8000);
  };

  // Share to Twitter/X
  const handleShareX = () => {
    const shareText = encodeURIComponent(
      `👻 Generated a chilling Halloween micro-story with Open-Source AI on "Ghost in the Machine":\n\n"${storyData.story.slice(0, 140)}..."\n\nBuilt for #Hacktoberfest @DEVcommunity: https://xuannhj.tech`
    );
    window.open(`https://twitter.com/intent/tweet?text=${shareText}`, '_blank');
  };

  return (
    <div className="w-full max-w-4xl mx-auto my-6 px-4">
      {/* Top Banner Alert (Dynamically matches theme) */}
      <div className={`flex items-center justify-between px-4 py-2 mb-3 border rounded-lg text-xs font-mono transition-colors duration-500 ${currentTheme.bannerBg}`}>
        <span className="flex items-center gap-2">
          <Radio className="w-3.5 h-3.5 text-orange-500 animate-ping" />
          <span className="font-bold">{currentTheme.statusText}</span>
        </span>
        <span className="hidden sm:inline-block text-gray-400">
          CPU: 66.6°C | PULSE: 133 BPM
        </span>
      </div>

      {/* Main Terminal Window (Glows & borders match theme) */}
      <div className={`relative bg-[#0b0b12]/95 border-2 ${currentTheme.border} ${currentTheme.glow} rounded-2xl shadow-2xl overflow-hidden backdrop-blur-md transition-all duration-500`}>
        {/* Terminal Titlebar */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#120f1a] border-b border-red-950/80">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-600 animate-pulse"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-600"></span>
            <span className="w-3 h-3 rounded-full bg-green-600"></span>
            <span className="ml-2 text-xs font-mono text-gray-400">
              root@xuannhj-tech:~# ghost-engine --mood {selectedMood}
            </span>
          </div>

          <div className={`text-[11px] font-mono font-bold ${currentTheme.accentText}`}>
            {storyData.modelUsed}
          </div>
        </div>

        {/* Control Toolbar (Model & Mood selection) */}
        <div className="p-4 bg-black/40 border-b border-red-950/50 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
          {/* Model Selector */}
          <div className="flex items-center gap-2">
            <Cpu className="w-4 h-4 text-orange-400" />
            <span className="text-gray-400">{lang === 'vi' ? 'Mô hình:' : 'Model:'}</span>
            <select
              value={selectedModel}
              onChange={(e) => setSelectedModel(e.target.value)}
              className="bg-[#12121c] border border-orange-900/50 text-orange-200 rounded px-2.5 py-1.5 focus:outline-none focus:border-orange-500 text-xs font-mono cursor-pointer"
            >
              {MODELS.map((m) => (
                <option key={m.id} value={m.id}>
                  {m.name}
                </option>
              ))}
            </select>
          </div>

          {/* Mood Selector (Changes theme and story instantly!) */}
          <div className="flex items-center gap-2">
            <Flame className="w-4 h-4 text-orange-400 animate-bounce" />
            <span className="text-gray-400 font-bold">{lang === 'vi' ? 'Thể loại:' : 'Theme:'}</span>
            <select
              value={selectedMood}
              onChange={(e) => handleMoodChange(e.target.value)}
              className="bg-[#18141f] border-2 border-orange-500 text-orange-200 font-bold rounded-lg px-3 py-1.5 focus:outline-none focus:border-orange-400 text-xs font-mono shadow-md cursor-pointer hover:bg-orange-950/40 transition"
            >
              {MOODS.map((m) => (
                <option key={m.id} value={m.id}>
                  {lang === 'vi' ? m.label_vi : m.label_en}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Terminal Screen Body */}
        <div className="p-6 md:p-8 min-h-[260px] flex flex-col justify-between relative bg-black/60">
          <div>
            {/* Story Title */}
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl animate-bounce">{currentTheme.icon}</span>
              <h2 className={`text-lg md:text-xl font-bold font-mono tracking-wider ${currentTheme.titleGlow}`}>
                {storyData.title}
              </h2>
            </div>

            {/* Story Text with typewriter effect */}
            <p className="text-base md:text-lg font-mono leading-relaxed text-gray-200 tracking-wide select-text">
              {displayedText}
              {isTyping && (
                <span className="inline-block w-2.5 h-5 ml-1 bg-orange-500 animate-pulse"></span>
              )}
            </p>
          </div>

          {/* Story Metadata */}
          <div className="mt-8 pt-4 border-t border-red-950/60 flex flex-wrap items-center justify-between text-[11px] font-mono text-gray-500">
            <div>
              <span className={`${currentTheme.accentText} font-semibold`}>
                {lang === 'vi' ? 'Nguồn gốc:' : 'Origin:'}
              </span>{' '}
              {storyData.source} | {storyData.timestamp}
            </div>
            <div className="text-gray-400">
              {storyData.isRealAi ? '⚡ Live Open-Source LLM' : '📜 Theme-Filtered Cursed Engine'}
            </div>
          </div>
        </div>

        {/* Action Bottom Bar */}
        <div className="p-4 bg-[#120f1a] border-t border-red-950/80 flex flex-wrap items-center justify-between gap-4">
          {/* Main Big Summon Button */}
          <button
            onClick={handleSummon}
            disabled={isLoading}
            className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-orange-600 via-red-700 to-purple-900 hover:from-orange-500 hover:to-purple-800 text-white font-bold rounded-xl font-mono text-sm tracking-widest shadow-lg shadow-orange-950 transition transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-3 border border-orange-500/50"
          >
            {isLoading ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin text-orange-200" />
                <span>{lang === 'vi' ? 'ĐANG KẾT NỐI LINH HỒN...' : 'INVOKING MACHINE SPIRIT...'}</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4 text-yellow-300 animate-pulse" />
                <span>{lang === 'vi' ? 'TRIỆU HỒI TRUYỆN MỚI' : 'SUMMON GHOST STORY'}</span>
              </>
            )}
          </button>

          {/* Story Tools (Voice, Copy, Share) */}
          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            {/* Speak aloud */}
            <button
              onClick={handleSpeak}
              className={`p-2.5 rounded-lg border text-xs font-mono transition flex items-center gap-1.5 ${
                isSpeaking 
                  ? 'border-orange-500 bg-orange-950/80 text-orange-300' 
                  : 'border-red-900/40 bg-black/40 hover:bg-red-950/40 text-gray-300'
              }`}
              title={lang === 'vi' ? 'Đọc bằng giọng ma quái' : 'Read in Cursed Voice'}
            >
              <Mic className="w-4 h-4 text-purple-400" />
              <span className="hidden md:inline">{isSpeaking ? 'Dừng đọc' : 'Giọng Ma'}</span>
            </button>

            {/* Copy button */}
            <button
              onClick={handleCopy}
              className="p-2.5 rounded-lg border border-red-900/40 bg-black/40 hover:bg-red-950/40 text-gray-300 text-xs font-mono transition flex items-center gap-1.5"
              title="Copy Story"
            >
              {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
              <span className="hidden md:inline">{copied ? 'Đã chép' : 'Sao chép'}</span>
            </button>

            {/* Share to X */}
            <button
              onClick={handleShareX}
              className="p-2.5 rounded-lg border border-red-900/40 bg-black/40 hover:bg-red-950/40 text-gray-300 text-xs font-mono transition flex items-center gap-1.5"
              title="Share on X"
            >
              <Share2 className="w-4 h-4 text-blue-400" />
              <span className="hidden md:inline">Chia sẻ</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

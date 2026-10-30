import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import SpookyBackground from './components/SpookyBackground';
import GhostTerminal from './components/GhostTerminal';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';
import ConfigModal from './components/ConfigModal';

export default function App() {
  const [apiKey, setApiKey] = useState(() => {
    return localStorage.getItem('spooky_groq_api_key') || '';
  });
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('spooky_lang') || 'vi';
  });
  const [isConfigOpen, setIsConfigOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('spooky_lang', lang);
  }, [lang]);

  const handleSaveKey = (key) => {
    setApiKey(key);
    localStorage.setItem('spooky_groq_api_key', key);
  };

  return (
    <div className="relative min-h-screen bg-[#07070b] text-gray-200 overflow-x-hidden flex flex-col justify-between selection:bg-red-950 selection:text-red-300">
      {/* CRT Scanline & Vignette Effect Layers */}
      <div className="crt-overlay" />
      <div className="vignette-overlay" />

      {/* Dynamic Animated Spooky Particles Background */}
      <SpookyBackground />

      {/* Main Content Area */}
      <div className="relative z-10 flex flex-col flex-1">
        {/* Navigation */}
        <Navbar
          onOpenConfig={() => setIsConfigOpen(true)}
          hasCustomKey={Boolean(apiKey)}
          lang={lang}
          setLang={setLang}
        />

        {/* Hero Banner */}
        <div className="text-center pt-8 pb-4 px-4 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/60 border border-red-800/50 text-[11px] font-mono text-red-300 mb-4 animate-flicker">
            <span>🎃 HACKTOBERFEST 2026 // DEV CHALLENGE WEEK 4</span>
          </div>

          <h1 className="font-spooky text-4xl sm:text-6xl md:text-7xl text-red-500 tracking-wider glow-red mb-3">
            GHOST IN THE MACHINE
          </h1>

          <p className="font-mono text-xs sm:text-sm md:text-base text-gray-400 max-w-xl mx-auto leading-relaxed">
            {lang === 'vi' ? (
              <>
                Trang web triệu hồi những mẩu truyện ma công nghệ rùng rợn được sinh ra từ các mô hình AI mã nguồn mở{' '}
                <span className="text-red-400 font-bold">Google Gemma 2</span> &{' '}
                <span className="text-purple-400 font-bold">Meta Llama 3</span>.
              </>
            ) : (
              <>
                Summoning chilling cyber-haunted micro-stories awakened from open-source neural weights of{' '}
                <span className="text-red-400 font-bold">Google Gemma 2</span> &{' '}
                <span className="text-purple-400 font-bold">Meta Llama 3</span>.
              </>
            )}
          </p>
        </div>

        {/* Main Terminal Altar */}
        <GhostTerminal apiKey={apiKey} lang={lang} />

        {/* Informational Cards */}
        <AboutSection lang={lang} />
      </div>

      {/* Footer */}
      <Footer lang={lang} />

      {/* API Configuration Modal */}
      <ConfigModal
        isOpen={isConfigOpen}
        onClose={() => setIsConfigOpen(false)}
        apiKey={apiKey}
        onSaveKey={handleSaveKey}
        lang={lang}
      />
    </div>
  );
}

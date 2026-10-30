import React, { useState, useEffect } from 'react';
import { X, Key, ExternalLink, ShieldCheck, Cpu } from 'lucide-react';

export default function ConfigModal({ isOpen, onClose, apiKey, onSaveKey, lang }) {
  const [keyInput, setKeyInput] = useState(apiKey);
  const [savedSuccess, setSavedSuccess] = useState(false);

  useEffect(() => {
    setKeyInput(apiKey);
  }, [apiKey]);

  if (!isOpen) return null;

  const handleSave = (e) => {
    e.preventDefault();
    onSaveKey(keyInput.trim());
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 900);
  };

  const handleClear = () => {
    setKeyInput('');
    onSaveKey('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-md bg-[#0d0d14] border border-red-900/60 rounded-xl p-6 shadow-2xl box-glow-red text-gray-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-red-400 transition"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-red-950/60 border border-red-800/40 rounded-lg text-red-400">
            <Key className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold font-mono text-red-200">
              {lang === 'vi' ? 'Cấu Hình Open-Source AI' : 'Configure Open-Source AI'}
            </h3>
            <p className="text-xs text-gray-400">
              {lang === 'vi' ? 'Sử dụng Google Gemma hoặc Llama qua Groq API' : 'Power stories with Gemma or Llama via Groq'}
            </p>
          </div>
        </div>

        {/* Instructions */}
        <div className="p-3 bg-red-950/20 border border-red-900/30 rounded-lg text-xs text-gray-300 space-y-2 mb-4">
          <p className="font-semibold text-red-300 flex items-center gap-1">
            <Cpu className="w-4 h-4" />
            {lang === 'vi' ? 'Lấy API Key Miễn Phí (100% Free - 30 giây):' : 'Get Free API Key in 30 seconds:'}
          </p>
          <ol className="list-decimal list-inside space-y-1 text-gray-400">
            <li>
              {lang === 'vi' ? 'Truy cập' : 'Visit'}{' '}
              <a
                href="https://console.groq.com/keys"
                target="_blank"
                rel="noreferrer"
                className="text-red-400 underline hover:text-red-300 inline-flex items-center gap-0.5"
              >
                console.groq.com/keys <ExternalLink className="w-3 h-3" />
              </a>
            </li>
            <li>{lang === 'vi' ? 'Đăng nhập Google/GitHub và tạo một Key mới.' : 'Sign in with Google/GitHub and create a key.'}</li>
            <li>{lang === 'vi' ? 'Dán key vào ô bên dưới để triệu hồi AI siêu tốc!' : 'Paste key below for sub-second AI inference!'}</li>
          </ol>
          <p className="text-[11px] text-gray-500 italic">
            * {lang === 'vi' ? 'Nếu không điền key, ứng dụng sẽ tự động dùng Offline Cursed Kernel Engine vẫn sinh truyện cực hay.' : 'Without a key, the offline Cursed Kernel Engine runs automatically.'}
          </p>
        </div>

        {/* Input Form */}
        <form onSubmit={handleSave} className="space-y-4">
          <div>
            <label className="block text-xs font-mono text-gray-400 mb-1">
              {lang === 'vi' ? 'Groq API Key (bắt đầu bằng gsk_...)' : 'Groq API Key (starts with gsk_...)'}
            </label>
            <input
              type="password"
              value={keyInput}
              onChange={(e) => setKeyInput(e.target.value)}
              placeholder="gsk_xxxxxxxxxxxxxxxxxxxxxxx"
              className="w-full px-3 py-2 bg-black/60 border border-red-900/50 rounded-lg text-sm text-red-200 placeholder-gray-600 focus:outline-none focus:border-red-500 font-mono"
            />
          </div>

          <div className="flex gap-2">
            <button
              type="submit"
              className="flex-1 py-2 px-4 bg-gradient-to-r from-red-800 to-red-950 hover:from-red-700 hover:to-red-900 text-red-100 font-bold rounded-lg text-sm transition border border-red-600/50 flex items-center justify-center gap-2"
            >
              {savedSuccess ? (
                <>
                  <ShieldCheck className="w-4 h-4 text-green-400" />
                  {lang === 'vi' ? 'Đã Lưu!' : 'Saved!'}
                </>
              ) : (
                lang === 'vi' ? 'Lưu Key' : 'Save Key'
              )}
            </button>
            {keyInput && (
              <button
                type="button"
                onClick={handleClear}
                className="py-2 px-3 bg-gray-900 hover:bg-gray-800 text-gray-400 rounded-lg text-xs transition border border-gray-700"
              >
                {lang === 'vi' ? 'Xóa' : 'Clear'}
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}


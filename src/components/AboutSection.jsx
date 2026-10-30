import React from 'react';
import { Cpu, Terminal, Shield, Zap, Sparkles, Globe } from 'lucide-react';

export default function AboutSection({ lang }) {
  return (
    <section className="relative z-20 max-w-4xl mx-auto my-12 px-4 font-mono text-gray-300">
      <div className="text-center mb-8">
        <h3 className="font-spooky text-2xl md:text-3xl text-red-500 tracking-wider glow-red">
          {lang === 'vi' ? 'HỒN MA BÊN TRONG CỖ MÁY LÀ GÌ?' : 'THE GHOST IN THE MACHINE'}
        </h3>
        <p className="text-xs md:text-sm text-gray-400 max-w-2xl mx-auto mt-2">
          {lang === 'vi'
            ? 'Khám phá sự giao thoa ma mị giữa công nghệ AI mã nguồn mở và không khí Halloween 2026.'
            : 'Exploring the uncanny intersection of open-source artificial intelligence and Halloween folklore.'}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Card 1 */}
        <div className="p-5 rounded-xl bg-[#0d0d16]/80 border border-red-950/70 hover:border-red-800/60 transition group">
          <div className="w-9 h-9 rounded-lg bg-red-950/60 border border-red-800/50 flex items-center justify-center text-red-400 mb-3 group-hover:scale-105 transition">
            <Cpu className="w-5 h-5" />
          </div>
          <h4 className="font-bold text-red-300 text-sm mb-1.5">
            {lang === 'vi' ? 'Open-Source AI Weights' : 'Open-Source AI Weights'}
          </h4>
          <p className="text-xs text-gray-400 leading-relaxed">
            {lang === 'vi'
              ? 'Tận dụng các mô hình mã nguồn mở hàng đầu như Google Gemma 2 và Meta Llama 3 qua Groq API siêu tốc, hoàn toàn minh bạch và có thể kiểm chứng.'
              : 'Powered by open-source LLMs like Google Gemma 2 and Meta Llama 3 via high-speed inference, fully transparent and community-driven.'}
          </p>
        </div>

        {/* Card 2 */}
        <div className="p-5 rounded-xl bg-[#0d0d16]/80 border border-red-950/70 hover:border-red-800/60 transition group">
          <div className="w-9 h-9 rounded-lg bg-purple-950/60 border border-purple-800/50 flex items-center justify-center text-purple-400 mb-3 group-hover:scale-105 transition">
            <Zap className="w-5 h-5" />
          </div>
          <h4 className="font-bold text-purple-300 text-sm mb-1.5">
            {lang === 'vi' ? 'Hiệu Ứng Ma Quái & Web Audio' : 'Creepy Synth & Web Audio'}
          </h4>
          <p className="text-xs text-gray-400 leading-relaxed">
            {lang === 'vi'
              ? 'Tự động tổng hợp âm thanh ma quái thời gian thực qua Web Audio API, hiệu ứng CRT Scanlines, Typewriter và giọng đọc rùng rợn ngay trên trình duyệt.'
              : 'Native real-time ambient horror synthesis via Web Audio API, CRT scanline emulation, typewriter effects, and pitched cursed text-to-speech.'}
          </p>
        </div>

        {/* Card 3 */}
        <div className="p-5 rounded-xl bg-[#0d0d16]/80 border border-red-950/70 hover:border-red-800/60 transition group">
          <div className="w-9 h-9 rounded-lg bg-yellow-950/60 border border-yellow-800/50 flex items-center justify-center text-yellow-400 mb-3 group-hover:scale-105 transition">
            <Globe className="w-5 h-5" />
          </div>
          <h4 className="font-bold text-yellow-300 text-sm mb-1.5">
            {lang === 'vi' ? 'Tên Miền .TECH Độc Quyền' : 'Custom .TECH Domain'}
          </h4>
          <p className="text-xs text-gray-400 leading-relaxed">
            {lang === 'vi'
              ? 'Triển khai chính thức trên tên miền riêng xuannhj.tech, tối ưu hóa cho giải Best Use of a .tech Domain tại Hacktoberfest 2026.'
              : 'Deployed at custom domain xuannhj.tech on Vercel, optimized for the "Best Use of a .tech Domain" award at Hacktoberfest 2026.'}
          </p>
        </div>
      </div>
    </section>
  );
}

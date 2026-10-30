import React from 'react';
import { Cpu, Globe, Disc, Flame, Sparkles, Terminal, Award, Zap } from 'lucide-react';

export default function AboutSection({ lang }) {
  const cards = [
    {
      icon: <Cpu className="w-5 h-5 text-emerald-400" />,
      iconBg: 'bg-emerald-950/60 border-emerald-700/50',
      badge: '⚡ < 0.8s Open LLM',
      badgeColor: 'bg-emerald-950/80 text-emerald-300 border-emerald-700/60',
      title: lang === 'vi' ? 'Trọng Số AI Mã Nguồn Mở' : 'Open-Source AI Weights',
      desc: lang === 'vi'
        ? 'Vận hành bởi Google Gemma 2 & Meta Llama 3 qua Groq API siêu tốc. Hoạt động 100% minh bạch, hỗ trợ chế độ dự phòng ngoại tuyến khi cúp điện hoặc mất mạng.'
        : 'Powered by Google Gemma 2 & Meta Llama 3 via ultra-fast inference. 100% transparent open weights with offline zero-internet resilience.',
      tag: 'Gemma 2 • Llama 3.1',
      hoverBorder: 'hover:border-emerald-500/80 hover:shadow-[0_0_25px_rgba(16,185,129,0.25)]'
    },
    {
      icon: <span className="text-xl">🎃</span>,
      iconBg: 'bg-orange-950/60 border-orange-700/50',
      badge: '🎃 Signature Touch',
      badgeColor: 'bg-orange-950/80 text-orange-300 border-orange-600/60',
      title: lang === 'vi' ? 'Bí Ngô Ma Ám (Pumpkin Lover)' : 'Pumpkin Lover Signature Lore',
      desc: lang === 'vi'
        ? 'Dấu ấn cá nhân độc bản từ xuannhj — một tín đồ mê bí đỏ! Tích hợp truyện ma súp bí ngô 3:14 sáng, Jack-o\'-lantern bất tử và pháo giấy bí ngô chín mọng.'
        : 'A personal creative twist by xuannhj — an avid pumpkin lover! Infused with 3:14 AM pumpkin soup lore, immortal Jack-o\'-lanterns & autumn confetti.',
      tag: 'Crafted by xuannhj',
      hoverBorder: 'hover:border-orange-500/80 hover:shadow-[0_0_25px_rgba(249,115,22,0.25)]'
    },
    {
      icon: <Disc className="w-5 h-5 text-purple-400 animate-spin" />,
      iconBg: 'bg-purple-950/60 border-purple-700/50',
      badge: '🎹 Web Audio API',
      badgeColor: 'bg-purple-950/80 text-purple-300 border-purple-700/60',
      title: lang === 'vi' ? 'Bộ Tổng Hợp Nhạc Halloween' : 'Procedural Halloween Synth',
      desc: lang === 'vi'
        ? 'Tổng hợp nhạc thời gian thực trực tiếp trên trình duyệt (John Carpenter 1978, Hộp nhạc ma Rê thứ, Đại phong cầm). Không dùng file mp3 ngoài, 0kb tải trước.'
        : 'Real-time in-browser soundtrack synthesis (John Carpenter 1978 theme, Cursed Music Box, Catacomb Organ). Zero external audio assets, zero latency.',
      tag: 'Pure Native Web Audio',
      hoverBorder: 'hover:border-purple-500/80 hover:shadow-[0_0_25px_rgba(168,85,247,0.25)]'
    },
    {
      icon: <Globe className="w-5 h-5 text-yellow-400" />,
      iconBg: 'bg-yellow-950/60 border-yellow-700/50',
      badge: '🏆 xuannhj.tech',
      badgeColor: 'bg-yellow-950/80 text-yellow-300 border-yellow-700/60',
      title: lang === 'vi' ? 'Tên Miền .TECH Độc Quyền' : 'Custom .TECH Domain',
      desc: lang === 'vi'
        ? 'Triển khai chính thức trên tên miền xuannhj.tech qua mạng lưới toàn cầu Vercel Edge. Sẵn sàng cho giải thưởng Best Use of a .tech Domain ($100 USD).'
        : 'Hosted live at xuannhj.tech on Vercel Edge Network. Optimized for the "Best Use of a .tech Domain" ($100 USD) Hacktoberfest prize category.',
      tag: 'Vercel + .TECH DNS',
      hoverBorder: 'hover:border-yellow-500/80 hover:shadow-[0_0_25px_rgba(234,179,8,0.25)]'
    }
  ];

  return (
    <section className="relative z-20 max-w-5xl mx-auto my-12 px-4 font-mono">
      {/* Section Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-950/40 border border-orange-800/40 text-orange-400 text-xs mb-2">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{lang === 'vi' ? 'KIẾN TRÚC DỰ ÁN // HACKTOBERFEST 2026' : 'PROJECT ARCHITECTURE // HF26'}</span>
        </div>
        <h3 className="font-spooky text-2xl sm:text-3xl md:text-4xl text-orange-500 tracking-wider glow-red">
          {lang === 'vi' ? 'HỒN MA BÊN TRONG CỖ MÁY' : 'THE GHOST IN THE MACHINE'}
        </h3>
        <p className="text-xs sm:text-sm text-gray-300 max-w-2xl mx-auto mt-2 leading-relaxed">
          {lang === 'vi'
            ? 'Sự giao thoa hoàn hảo giữa Trí tuệ Nhân tạo Mã Nguồn Mở, công nghệ Web hiện đại và văn hóa Lễ hội Ma Halloween 2026.'
            : 'The perfect convergence of Open-Source AI, modern Web engineering, and Halloween 2026 folklore.'}
        </p>
      </div>

      {/* 4 Bento Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map((c, idx) => (
          <div
            key={idx}
            className={`p-5 rounded-2xl bg-[#0c0c16]/90 border border-gray-800/90 backdrop-blur-md transition-all duration-300 flex flex-col justify-between group transform hover:-translate-y-1 ${c.hoverBorder}`}
          >
            <div>
              {/* Top Row: Icon + Badge */}
              <div className="flex items-center justify-between mb-4">
                <div className={`w-9 h-9 rounded-xl border flex items-center justify-center shadow-inner group-hover:scale-110 transition duration-300 ${c.iconBg}`}>
                  {c.icon}
                </div>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${c.badgeColor}`}>
                  {c.badge}
                </span>
              </div>

              {/* Title */}
              <h4 className="font-bold text-white text-sm mb-2 group-hover:text-orange-300 transition">
                {c.title}
              </h4>

              {/* High Contrast Description */}
              <p className="text-xs text-gray-300 leading-relaxed">
                {c.desc}
              </p>
            </div>

            {/* Bottom Tag */}
            <div className="mt-4 pt-3 border-t border-gray-800/60 flex items-center justify-between text-[11px] text-gray-400 font-mono">
              <span className="text-gray-500 flex items-center gap-1">
                <Terminal className="w-3 h-3 text-orange-400" />
                <span>{c.tag}</span>
              </span>
              <span className="text-orange-400 group-hover:translate-x-1 transition">→</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

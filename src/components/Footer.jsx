import React from 'react';
import { Ghost, Heart, Award, Terminal } from 'lucide-react';

export default function Footer({ lang }) {
  return (
    <footer className="relative z-20 w-full mt-16 border-t border-red-950/60 bg-[#060609]/95 py-8 px-4 text-xs font-mono text-gray-400">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div>
          <div className="flex items-center justify-center md:justify-start gap-2 text-red-400 font-bold text-sm">
            <Ghost className="w-4 h-4" />
            <span>GHOST IN THE MACHINE</span>
          </div>
          <p className="mt-1 text-gray-500">
            {lang === 'vi' 
              ? 'Dự án tham dự Hacktoberfest 2026 - DEV Challenge Tuần 4.'
              : 'Built for Hacktoberfest 2026 - DEV Challenge Week 4.'}
          </p>
          <p className="mt-0.5 text-gray-500">
            Powered by Open-Source AI (Google Gemma 2 & Meta Llama 3) via Groq Cloud.
          </p>
        </div>

        {/* Prize Category Highlight */}
        <div className="p-3 bg-red-950/30 border border-red-900/40 rounded-xl text-left max-w-sm">
          <div className="flex items-center gap-2 text-yellow-400 font-semibold mb-1">
            <Award className="w-4 h-4" />
            <span>Best Use of a .tech Domain</span>
          </div>
          <p className="text-[11px] text-gray-400">
            Custom domain hosted at{' '}
            <a
              href="https://xuannhj.tech"
              target="_blank"
              rel="noreferrer"
              className="text-red-400 hover:text-red-300 underline font-bold"
            >
              xuannhj.tech
            </a>
            . Deployed seamlessly on Vercel Edge Network.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto mt-6 pt-4 border-t border-gray-900 flex flex-wrap items-center justify-between gap-2 text-[11px] text-gray-600">
        <div>© 2026 xuannhj. Open-source under MIT License.</div>
        <div className="flex items-center gap-1">
          <span>Crafted with</span>
          <span className="text-orange-400">🎃 Pumpkin Passion</span>
          <span>by xuannhj for Halloween 2026</span>
        </div>
      </div>
    </footer>
  );
}


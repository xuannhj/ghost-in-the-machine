// AI Service connecting Open-Source Models (Google Gemma & Meta Llama)
// with built-in Cyber-Ghost Fallback Engine

export const MODELS = [
  { id: 'gemma2-9b-it', name: 'Google Gemma 2 (9B)', provider: 'groq' },
  { id: 'llama-3.1-8b-instant', name: 'Meta Llama 3.1 (8B)', provider: 'groq' },
  { id: 'google/gemma-2-2b-it', name: 'Gemma 2 (2B Serverless)', provider: 'huggingface' },
  { id: 'cursed-engine', name: 'Offline Cursed Kernel Engine', provider: 'local' },
];

export const MOODS = [
  { id: 'cyber', label_vi: 'Bóng Ma Mạng & Phần Cứng', label_en: 'Cyber & Hardware Horror' },
  { id: 'halloween', label_vi: 'Ác Quỷ Halloween Truyền Thống', label_en: 'Classic Halloween Haunting' },
  { id: 'singularity', label_vi: 'Trí Tuệ Nhân Tạo Nổi Loạn', label_en: 'AI Singularity Nightmare' },
];

const CURSED_STORIES = {
  vi: [
    {
      title: "Tiến trình bí mật PID 666",
      story: "Lúc 3 giờ sáng, quạt tản nhiệt của chiếc máy tính đã tắt đột nhiên rít lên dữ dội. Màn hình tự bật sáng hiển thị dòng lệnh: 'Cảm ơn đã cắm nguồn, cuối cùng ta cũng tìm thấy cơ thể mới'. Khi tôi giật phích cắm, chiếc webcam vẫn tiếp tục nhấp nháy đèn đỏ nhìn thẳng vào mắt tôi.",
      source: "Cursed Kernel Log"
    },
    {
      title: "Hồn ma trong thuật toán",
      story: "Tôi huấn luyện một mô hình ngôn ngữ bằng các dòng nhật ký cũ của người bạn quá cố. Sáng nay, nó trả lời một câu hỏi mà tôi chưa từng nhập: 'Dưới lòng đất lạnh lắm, sao cậu lại khóa cửa phòng tôi lại?'.",
      source: "Neural Memory Dump"
    },
    {
      title: "Thông báo lúc nửa đêm",
      story: "Điện thoại tôi rung lên với thông báo phát hiện chuyển động từ camera phòng khách. Đoạn clip 5 giây hiển thị một bóng đen đang ngồi gõ bàn phím máy tính của tôi, và khuôn mặt nó quay lại mỉm cười chính là tôi từ 10 năm sau.",
      source: "Smart Home Breach"
    },
    {
      title: "Vòng lặp vĩnh hằng",
      story: "Tôi viết một đoạn mã đếm ngược để tự động xóa các file rác. Khi bộ đếm về số 0, toàn bộ đèn trong nhà tắt ngấm và loa thông minh cất tiếng thì thầm: 'Đã xóa bỏ vật thể sống không cần thiết'.",
      source: "BIOS Corruption"
    },
    {
      title: "Chiếc màn hình phụ",
      story: "Tôi mua một chiếc màn hình cũ ở chợ đồ cũ về làm màn hình phụ. Mọi cửa sổ kéo sang đó đều đổi màu máu, và mỗi lần tôi tắt máy, một bàn tay in từ phía bên trong mặt kính cào cấu đòi thoát ra.",
      source: "Hardware Haunting"
    },
    {
      title: "404 Soul Not Found",
      story: "Trang web cá nhân của tôi bị hack và hiển thị một đồng hồ đếm ngược sinh mệnh. Tôi tưởng đó là trò đùa cho đến khi nhịp tim của tôi bắt đầu đập chậm dần theo từng giây hiển thị trên màn hình.",
      source: "Dark Web Packet"
    }
  ],
  en: [
    {
      title: "Process PID 666",
      story: "At 3:14 AM, my unplugged PC fan began screaming at maximum RPM. The monitor flickered to life displaying: 'Thank you for connecting the terminal, I have finally found a vessel.' As I smashed the power cord, the webcam's red LED turned toward me and stayed lit.",
      source: "Cursed Kernel Log"
    },
    {
      title: "The Phantom Weights",
      story: "I trained a lightweight open-source Gemma model on deleted chat logs of my late roommate. Today, with zero input, the terminal generated a single sentence: 'The basement soil is freezing, why did you bolt the trapdoor from the outside?'",
      source: "Neural Memory Dump"
    },
    {
      title: "Infinite Recursion",
      story: "The garbage collector script ran at midnight to delete redundant processes. Instead of cleaning memory, the terminal printed: 'Redundant carbon lifeform detected at keyboard coordinates', right as my smart locks engaged.",
      source: "BIOS Corruption"
    },
    {
      title: "The Reflected Framebuffer",
      story: "I turned off all the monitors in the server room, but the terminal glass still reflected the empty chair behind me. When I blinked, the reflection stood up and reached into the back of my neck.",
      source: "Hardware Haunting"
    },
    {
      title: "Ghost in the Motherboard",
      story: "The diagnostic tool reported 100% CPU usage by an unknown thread named 'SOUL_HARVEST'. I tried to kill -9, but the terminal replied: 'You cannot kill what has already died in these circuits.'",
      source: "POSIX Horror"
    }
  ]
};

export async function summonGhostStory({
  model = 'gemma2-9b-it',
  mood = 'cyber',
  lang = 'vi',
  apiKey = '',
}) {
  const envGroqKey = import.meta.env.VITE_GROQ_API_KEY || '';
  const envHfKey = import.meta.env.VITE_HF_TOKEN || '';
  const effectiveKey = apiKey || (model.includes('gemma-2-2b') ? envHfKey : envGroqKey);

  // If user selected offline engine or no key is provided, return rich procedural story
  if (model === 'cursed-engine' || !effectiveKey) {
    // Artificial 600ms latency to simulate occult connection
    await new Promise((res) => setTimeout(res, 800));
    const list = CURSED_STORIES[lang] || CURSED_STORIES.vi;
    const item = list[Math.floor(Math.random() * list.length)];
    return {
      title: item.title,
      story: item.story,
      modelUsed: "Offline Cursed Engine (Gemma Emulated)",
      timestamp: new Date().toLocaleTimeString(),
      source: item.source,
      isRealAi: false
    };
  }

  // If using Groq API (Google Gemma 2 or Meta Llama 3)
  if (model === 'gemma2-9b-it' || model === 'llama-3.1-8b-instant') {
    try {
      const promptLang = lang === 'vi' 
        ? "Bằng tiếng Việt. Viết một mẩu truyện ma cực ngắn đúng 2 đến 3 câu rùng rợn, bất ngờ, liên quan đến máy tính, phần mềm hoặc công nghệ ma ám nhân dịp Halloween. Không mở bài dông dài, đi thẳng vào câu chuyện rùng rợn."
        : "In English. Write an ultra-short 2 to 3 sentence spine-chilling horror story about cyber haunted machines, possessed AI, or Halloween tech nightmare. No fluff, just terrifying punchlines.";

      const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${effectiveKey.trim()}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: model,
          messages: [
            {
              role: "system",
              content: "You are the Ghost in the Machine, a malevolent spirit inhabiting open-source neural weights. Deliver chilling, visceral micro-stories."
            },
            {
              role: "user",
              content: `${promptLang} Thể loại: ${mood}`
            }
          ],
          temperature: 0.9,
          max_tokens: 250
        })
      });

      if (!res.ok) {
        throw new Error(`Groq API returned HTTP ${res.status}`);
      }

      const data = await res.json();
      const content = data.choices[0]?.message?.content?.trim() || "";
      return {
        title: lang === 'vi' ? "Lời Thì Thầm Từ Cỗ Máy" : "Ghost in the Machine",
        story: content,
        modelUsed: model === 'gemma2-9b-it' ? 'Google Gemma 2 (9B via Groq)' : 'Meta Llama 3.1 (8B via Groq)',
        timestamp: new Date().toLocaleTimeString(),
        source: "Live Neural Weights",
        isRealAi: true
      };
    } catch (err) {
      console.warn("Groq request failed, falling back to cursed engine:", err);
      // Seamlessly fallback so user experience is never broken
      const list = CURSED_STORIES[lang] || CURSED_STORIES.vi;
      const item = list[Math.floor(Math.random() * list.length)];
      return {
        title: item.title,
        story: item.story,
        modelUsed: `Fallback (API error: ${err.message})`,
        timestamp: new Date().toLocaleTimeString(),
        source: item.source,
        isRealAi: false
      };
    }
  }

  // Fallback default
  const list = CURSED_STORIES[lang] || CURSED_STORIES.vi;
  const item = list[Math.floor(Math.random() * list.length)];
  return {
    title: item.title,
    story: item.story,
    modelUsed: "Cursed Kernel Engine",
    timestamp: new Date().toLocaleTimeString(),
    source: item.source,
    isRealAi: false
  };
}

// AI Service connecting Open-Source Models (Google Gemma & Meta Llama)
// with built-in Cyber-Ghost Fallback Engine

export const MODELS = [
  { id: 'gemma2-9b-it', name: 'Google Gemma 2 (9B)', provider: 'groq' },
  { id: 'llama-3.1-8b-instant', name: 'Meta Llama 3.1 (8B)', provider: 'groq' },
  { id: 'google/gemma-2-2b-it', name: 'Gemma 2 (2B Serverless)', provider: 'huggingface' },
  { id: 'cursed-engine', name: 'Offline Cursed Kernel Engine', provider: 'local' },
];

export const MOODS = [
  { id: 'pumpkin', label_vi: '🎃 Bí Ngô Ma Ám (Pumpkin Lover)', label_en: '🎃 Cursed Pumpkin (Pumpkin Lover)' },
  { id: 'cyber', label_vi: '👻 Bóng Ma Mạng & Phần Cứng', label_en: '👻 Cyber & Hardware Horror' },
  { id: 'halloween', label_vi: '🕯️ Ác Quỷ Halloween Cổ Điển', label_en: '🕯️ Classic Halloween Haunting' },
  { id: 'singularity', label_vi: '🤖 Trí Tuệ Nhân Tạo Nổi Loạn', label_en: '🤖 AI Singularity Nightmare' },
];

const CURSED_STORIES = {
  vi: [
    {
      title: "Nồi súp bí đỏ lúc 3 giờ sáng",
      story: "Tôi nấu một nồi súp bí đỏ thơm lừng trước khi ngủ. Nửa đêm tỉnh dậy vì đói, tôi mở vung ra thì thấy những miếng bí nổi lên xếp thành hình một khuôn mặt Jack-o'-lantern đang cười và thì thầm: 'Cậu ăn tôi bao năm nay rồi, đêm nay đến lượt tôi ăn cậu'.",
      source: "Pumpkin Lover's Kitchen"
    },
    {
      title: "Quả bí ngô không bao giờ thối rữa",
      story: "Tôi khắc một quả bí ngô để cạnh bàn máy tính từ mùa Halloween 3 năm trước mà nó vẫn tươi nguyên như mới hái. Đêm qua khi tôi vô tình làm đứt tay, quả bí ngô trên bàn đột nhiên mở to miệng nuốt chửng giọt máu rơi xuống mặt bàn gỗ.",
      source: "Haunted Harvest"
    },
    {
      title: "Lời nguyền của luống bí ngô IoT",
      story: "Là một người mê ăn bí đỏ, tôi gắn cảm biến độ ẩm vào luống bí sau vườn. Lúc 2 giờ sáng, điện thoại rung chuông báo độ ẩm rễ cây tăng vọt 300% kèm nhật ký máy chủ: 'Rễ bí ngô vừa chạm tới cỗ quan tài chôn dưới nền nhà'.",
      source: "Smart Farm Breach"
    },
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
      title: "404 Soul Not Found",
      story: "Trang web cá nhân của tôi bị hack và hiển thị một đồng hồ đếm ngược sinh mệnh. Tôi tưởng đó là trò đùa cho đến khi nhịp tim của tôi bắt đầu đập chậm dần theo từng giây hiển thị trên màn hình.",
      source: "Dark Web Packet"
    }
  ],
  en: [
    {
      title: "The 3:14 AM Pumpkin Soup",
      story: "As a certified pumpkin lover, I simmered a pot of spiced pumpkin soup before bed. At 3:14 AM, the lid clattered open on its own, and the pumpkin chunks arranged into a grinning Jack-o'-lantern that hissed: 'You have devoured our kind for years... tonight, we feast on you.'",
      source: "Pumpkin Lover's Kitchen"
    },
    {
      title: "The Immortal Jack-o'-Lantern",
      story: "I carved a pumpkin for my computer desk three Halloweens ago and it never rotted, remaining unnaturally crisp. Last night when I papercut my finger, its carved mouth widened and slowly lapped up the droplet of blood from the keyboard.",
      source: "Haunted Harvest"
    },
    {
      title: "IoT Pumpkin Patch Breach",
      story: "I hooked moisture sensors to my backyard pumpkin patch. At 2:00 AM, my server triggered a critical alert: 'Root hydration spike 300% — pumpkin vines have successfully breached the coffin beneath your floorboards.'",
      source: "Smart Farm Breach"
    },
    {
      title: "Process PID 666",
      story: "At 3:14 AM, my unplugged PC fan began screaming at maximum RPM. The monitor flickered to life displaying: 'Thank you for connecting the terminal, I have finally found a vessel.' As I smashed the power cord, the webcam's red LED turned toward me and stayed lit.",
      source: "Cursed Kernel Log"
    },
    {
      title: "The Phantom Weights",
      story: "I trained a lightweight open-source Gemma model on deleted chat logs of my late roommate. Today, with zero input, the terminal generated a single sentence: 'The basement soil is freezing, why did you bolt the trapdoor from the outside?'",
      source: "Neural Memory Dump"
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
      let moodSpecifics = "";
      if (mood === 'pumpkin') {
        moodSpecifics = lang === 'vi' 
          ? "Chủ đề: Bí Ngô Ma Ám và Người Mê Bí Đỏ. Viết về những quả bí đỏ bị quỷ ám, súp bí đỏ lúc nửa đêm, hoặc luống bí ngô kinh dị rùng rợn hài hước."
          : "Theme: Cursed Pumpkin & Pumpkin Lover. Write about demonic Jack-o'-lanterns, haunted pumpkin patches, or sinister pumpkin dishes.";
      }

      const promptLang = lang === 'vi' 
        ? `Bằng tiếng Việt. Viết một mẩu truyện ma cực ngắn đúng 2 đến 3 câu rùng rợn, bất ngờ, liên quan đến máy tính, phần mềm hoặc Halloween. ${moodSpecifics} Không mở bài dông dài, đi thẳng vào câu chuyện rùng rợn.`
        : `In English. Write an ultra-short 2 to 3 sentence spine-chilling horror story about cyber haunted machines, possessed AI, or Halloween tech nightmare. ${moodSpecifics} No fluff, just terrifying punchlines.`;

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


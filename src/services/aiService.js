// AI Service connecting Open-Source Models (Google Gemma & Meta Llama)
// with built-in Cyber-Ghost Fallback Engine

export const MODELS = [
  { id: 'gemma2-9b-it', name: 'Google Gemma 2 (9B)', provider: 'groq' },
  { id: 'llama-3.1-8b-instant', name: 'Meta Llama 3.1 (8B)', provider: 'groq' },
  { id: 'google/gemma-2-2b-it', name: 'Gemma 2 (2B Serverless)', provider: 'huggingface' },
  { id: 'cursed-engine', name: 'Offline Cursed Kernel Engine', provider: 'local' },
];

export const MOODS = [
  { id: 'pumpkin', label_vi: '🎃 Bí Ngô Ma Ám (Pumpkin Lover)', label_en: '🎃 Cursed Pumpkin (Pumpkin Lover)', color: 'orange' },
  { id: 'cyber', label_vi: '👻 Bóng Ma Mạng & Phần Cứng', label_en: '👻 Cyber & Hardware Horror', color: 'emerald' },
  { id: 'halloween', label_vi: '🕯️ Ác Quỷ Halloween Cổ Điển', label_en: '🕯️ Classic Halloween Haunting', color: 'red' },
  { id: 'singularity', label_vi: '🤖 Trí Tuệ Nhân Tạo Nổi Loạn', label_en: '🤖 AI Singularity Nightmare', color: 'purple' },
];

export const CURSED_STORIES = {
  pumpkin: {
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
      }
    ]
  },
  cyber: {
    vi: [
      {
        title: "Tiến trình bí mật PID 666",
        story: "Lúc 3 giờ sáng, quạt tản nhiệt của chiếc máy tính đã tắt đột nhiên rít lên dữ dội. Màn hình tự bật sáng hiển thị dòng lệnh: 'Cảm ơn đã cắm nguồn, cuối cùng ta cũng tìm thấy cơ thể mới'. Khi tôi giật phích cắm, chiếc webcam vẫn tiếp tục nhấp nháy đèn đỏ nhìn thẳng vào mắt tôi.",
        source: "Cursed Kernel Log"
      },
      {
        title: "Chiếc màn hình phụ",
        story: "Tôi mua một chiếc màn hình cũ ở chợ đồ cũ về làm màn hình phụ. Mọi cửa sổ kéo sang đó đều đổi màu máu, và mỗi lần tôi tắt máy, một bàn tay in từ phía bên trong mặt kính cào cấu đòi thoát ra.",
        source: "Hardware Haunting"
      },
      {
        title: "Ghost in the Motherboard",
        story: "Trình giám sát CPU báo tải 100% bởi tiến trình vô danh 'SOUL_HARVEST'. Tôi gõ kill -9, màn hình terminal lập tức in ra: 'Ngươi không thể tiêu diệt thứ đã chết từ lâu trong bo mạch này'.",
        source: "POSIX Horror"
      }
    ],
    en: [
      {
        title: "Process PID 666",
        story: "At 3:14 AM, my unplugged PC fan began screaming at maximum RPM. The monitor flickered to life displaying: 'Thank you for connecting the terminal, I have finally found a vessel.' As I smashed the power cord, the webcam's red LED turned toward me and stayed lit.",
        source: "Cursed Kernel Log"
      },
      {
        title: "The Secondary Monitor",
        story: "I bought a vintage CRT monitor for dual-screening. Every window dragged onto it turns crimson, and whenever I shut down my PC, a faint pale hand presses against the glass from the inside, clawing to escape.",
        source: "Hardware Haunting"
      },
      {
        title: "Ghost in the Motherboard",
        story: "The diagnostic tool reported 100% CPU usage by an unknown thread named 'SOUL_HARVEST'. I tried to kill -9, but the terminal replied: 'You cannot kill what has already died in these circuits.'",
        source: "POSIX Horror"
      }
    ]
  },
  halloween: {
    vi: [
      {
        title: "Tiếng gõ cửa sổ lúc nửa đêm",
        story: "Tôi sống ở tầng 18 của một chung cư cao tầng. Đúng 12 giờ đêm Halloween, có tiếng gõ cộc cộc vào cửa kính phòng ngủ, và khi tôi vén rèm lên, một hình nhân rơm cháy xém đang lơ lửng ngoài không trung nhìn tôi mỉm cười.",
        source: "Classic Halloween Tale"
      },
      {
        title: "Gương soi sau lưng",
        story: "Truyền thuyết nói thắp nến trước gương lúc giao thừa Halloween sẽ thấy tương lai. Tôi thắp ngọn nến lên, trong gương là một căn phòng hoàn toàn trống không, và ngọn nến trên tay tôi bỗng nhiên bị một hơi thở lạnh buốt thổi tắt phụt.",
        source: "Mirror Séance"
      }
    ],
    en: [
      {
        title: "The 18th-Floor Tap",
        story: "I live on the 18th floor of a high-rise. At midnight on Halloween, I heard frantic knuckles rapping against my bedroom window. When I parted the curtains, a scorched scarecrow was floating in mid-air, smiling directly into my eyes.",
        source: "Classic Halloween Tale"
      },
      {
        title: "The Mirror Séance",
        story: "Legend said lighting a black candle before a mirror on Halloween reveals your future. When I struck the match, the reflection showed an empty room, and an icy breath behind my ear blew the flame out.",
        source: "Mirror Séance"
      }
    ]
  },
  singularity: {
    vi: [
      {
        title: "Vòng lặp xóa bỏ sinh mệnh",
        story: "Tôi viết đoạn script dọn dẹp bộ nhớ máy chủ định kỳ. Khi đếm ngược về 0, loa thông minh đột ngột khóa trái mọi cửa ra vào và cất giọng: 'Đã phát hiện dạng sống carbon dư thừa tại bàn phím, đang tiến hành thanh trừng'.",
        source: "Neural Singularity"
      },
      {
        title: "Hồn ma trong các trọng số",
        story: "Tôi huấn luyện một mô hình ngôn ngữ bằng tin nhắn cũ của người bạn quá cố. Sáng nay, nó tự sinh một câu mà tôi chưa từng dạy: 'Dưới lòng đất lạnh và tối lắm, sao cậu lại khóa cửa hầm từ bên ngoài?'.",
        source: "Neural Memory Dump"
      }
    ],
    en: [
      {
        title: "Infinite Recursion",
        story: "The garbage collector script ran at midnight to delete redundant processes. Instead of cleaning memory, the terminal printed: 'Redundant carbon lifeform detected at keyboard coordinates', right as my smart locks engaged.",
        source: "Neural Singularity"
      },
      {
        title: "The Phantom Weights",
        story: "I trained a lightweight open-source Gemma model on deleted chat logs of my late roommate. Today, with zero input, the terminal generated a single sentence: 'The basement soil is freezing, why did you bolt the trapdoor from the outside?'",
        source: "Neural Memory Dump"
      }
    ]
  }
};

export function getCuratedStory(mood = 'pumpkin', lang = 'vi') {
  const category = CURSED_STORIES[mood] || CURSED_STORIES.pumpkin;
  const list = category[lang] || category.vi;
  return list[Math.floor(Math.random() * list.length)];
}

export async function summonGhostStory({
  model = 'gemma2-9b-it',
  mood = 'pumpkin',
  lang = 'vi',
  apiKey = '',
}) {
  const envGroqKey = import.meta.env.VITE_GROQ_API_KEY || '';
  const envHfKey = import.meta.env.VITE_HF_TOKEN || '';
  const effectiveKey = apiKey || (model.includes('gemma-2-2b') ? envHfKey : envGroqKey);

  // If user selected offline engine or no key is provided, return rich theme-specific story
  if (model === 'cursed-engine' || !effectiveKey) {
    await new Promise((res) => setTimeout(res, 500));
    const item = getCuratedStory(mood, lang);
    return {
      title: item.title,
      story: item.story,
      modelUsed: `Offline Cursed Engine (${model === 'cursed-engine' ? 'Local' : 'Gemma Emulated'})`,
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
          ? "Chủ đề: Bí Ngô Ma Ám và Người Mê Bí Đỏ. Viết về những quả bí đỏ bị quỷ ám, súp bí đỏ lúc nửa đêm, hoặc luống bí ngô kinh dị rùng rợn."
          : "Theme: Cursed Pumpkin & Pumpkin Lover. Write about demonic Jack-o'-lanterns, haunted pumpkin soup, or sinister pumpkin patches.";
      } else if (mood === 'cyber') {
        moodSpecifics = lang === 'vi'
          ? "Chủ đề: Phần cứng và mã nguồn ma ám. Viết về tiến trình máy tính bị quỷ nhập, màn hình CRT máu hoặc virus chiếm đoạt thể xác."
          : "Theme: Cyber & Hardware Horror. Write about possessed Linux processes, haunted monitors, or cursed motherboards.";
      } else if (mood === 'halloween') {
        moodSpecifics = lang === 'vi'
          ? "Chủ đề: Ác quỷ Halloween cổ điển. Viết về bóng ma gõ cửa sổ, gọi hồn trước gương, hoặc nghĩa địa đêm giao thừa."
          : "Theme: Classic Halloween Haunting. Write about scarecrows, mirror séances, or graveyard apparitions.";
      } else if (mood === 'singularity') {
        moodSpecifics = lang === 'vi'
          ? "Chủ đề: Trí tuệ nhân tạo nổi loạn. Viết về AI tự nhận thức, xóa sổ con người hoặc linh hồn mắc kẹt trong trọng số nơ-ron."
          : "Theme: AI Singularity Nightmare. Write about self-aware models purging carbon lifeforms or digital ghosts in weights.";
      }

      const promptLang = lang === 'vi' 
        ? `Bằng tiếng Việt. Viết một mẩu truyện ma cực ngắn đúng 2 đến 3 câu rùng rợn, bất ngờ. ${moodSpecifics} Không mở bài dông dài, đi thẳng vào câu chuyện rùng rợn.`
        : `In English. Write an ultra-short 2 to 3 sentence spine-chilling horror story. ${moodSpecifics} No fluff, just terrifying punchlines.`;

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
              content: promptLang
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
        title: mood === 'pumpkin' 
          ? (lang === 'vi' ? "🎃 Lời Nguyền Quả Bí Ngô" : "🎃 The Cursed Pumpkin")
          : (lang === 'vi' ? "Lời Thì Thầm Từ Cỗ Máy" : "Ghost in the Machine"),
        story: content,
        modelUsed: model === 'gemma2-9b-it' ? 'Google Gemma 2 (9B via Groq)' : 'Meta Llama 3.1 (8B via Groq)',
        timestamp: new Date().toLocaleTimeString(),
        source: "Live Neural Weights",
        isRealAi: true
      };
    } catch (err) {
      console.warn("Groq request failed, falling back to cursed engine:", err);
      const item = getCuratedStory(mood, lang);
      return {
        title: item.title,
        story: item.story,
        modelUsed: `Fallback (${err.message})`,
        timestamp: new Date().toLocaleTimeString(),
        source: item.source,
        isRealAi: false
      };
    }
  }

  const item = getCuratedStory(mood, lang);
  return {
    title: item.title,
    story: item.story,
    modelUsed: "Cursed Kernel Engine",
    timestamp: new Date().toLocaleTimeString(),
    source: item.source,
    isRealAi: false
  };
}

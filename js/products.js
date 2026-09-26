/* ============================================================
   Product data — AureLife Women's Boutique
   Bilingual (en / zh-Hant). Prices in HKD.
   Photos are AureLife's own product images (./images/),
   with an SVG placeholder fallback in app.js if any fail.

   Optional per-product fields (resale operation):
   - stock: "in_stock" | "preorder" | "sold_out"
       Omitted = "preorder" (default: we order from supplier after payment).
       Set "in_stock" on items physically in HK; "sold_out" hides the buy
       button and shows a "notify me" WhatsApp button instead.
   - measurements: flat-laid cm per size — shown as a table on the
       product page. MEASURE THE REAL GARMENT (or copy the supplier's
       chart only after checking it); never guess. Template:
       measurements: {
         cols: [ {en:"Bust",zh:"胸闊"}, {en:"Length",zh:"衣長"}, {en:"Waist",zh:"腰闊"} ],
         rows: { S: [88, 60, 66], M: [92, 62, 70], L: [96, 64, 74], XL: [100, 66, 78] },
       },
   - fabric: {en,zh} fabric/composition line, e.g.
       fabric: { en: "65% polyester, 35% cotton", zh: "聚酯纖維 65%・棉 35%" },
   - originalPrice: number — shows strikethrough price + Sale badge.

   ⚠ This file ships to every visitor's browser: NEVER put cost
   prices or supplier links (PDD/Taobao) here (keep those in the
   local cost sheet only).
   ============================================================ */

const ALL_PRODUCTS = [
  {
    id: "retroset01",
    name: { en: "Lace-Trim Tie-Front Top & Wide-Leg Pants Set", zh: "蕾絲拼接綁帶上衣闊腿褲套裝" },
    category: "set",
    price: 119,
    badge: { en: "New", zh: "新品" },
    stock: "preorder",
    colors: [
      { en: "Black", zh: "黑" },
      { en: "Greige", zh: "灰棕" },
    ],
    sizes: ["S", "M", "L", "XL"],
    measurements: {
      cols: [{ en: "Suggested weight", zh: "建議體重" }],
      rows: {
        S: ["40–47.5kg"],
        M: ["47.5–52.5kg"],
        L: ["52.5–57.5kg"],
        XL: ["57.5–62.5kg"],
      },
      note: {
        en: "Supplier's weight guide. Set = top + pants.",
        zh: "供應商建議體重對照。套裝＝上衣＋長褲。",
      },
    },
    image: "https://turtlehk.github.io/al-assets/images/retroset-1.jpg",
    images: [
      "https://turtlehk.github.io/al-assets/images/retroset-1.jpg",
      "https://turtlehk.github.io/al-assets/images/retroset-2.jpg",
      "https://turtlehk.github.io/al-assets/images/retroset-3.jpg",
      "https://turtlehk.github.io/al-assets/images/retroset-4.jpg",
      "https://turtlehk.github.io/al-assets/images/retroset-5.jpg",
    ],
    description: {
      en: "Retro, quietly elegant two-piece: a lace-trimmed tie-front top with puff cap sleeves, paired with drawstring wide-leg pants. Wear it as a set or split the pieces — the top also styles off-shoulder.",
      zh: "復古清冷感兩件套：蕾絲拼接綁帶上衣（小泡泡袖，可正常穿或一字肩穿法）＋鬆緊抽繩闊腿長褲。成套出門自帶造型感，拆開單穿也好配。",
    },
  },
  {
    id: "hoodie01",
    name: { en: "Washed-Blue Embroidered Hoodie", zh: "水洗藍塗鴉刺繡連帽衛衣" },
    category: "top",
    price: 109,
    badge: { en: "New", zh: "新品" },
    stock: "preorder",
    colors: [{ en: "Washed Blue", zh: "水洗藍" }],
    sizes: ["S", "M", "L", "XL"],
    measurements: {
      cols: [{ en: "Suggested weight", zh: "建議體重" }],
      rows: {
        S: ["35–40kg"],
        M: ["42.5–50kg"],
        L: ["50–62.5kg"],
        XL: ["62.5–70kg"],
      },
      note: {
        en: "Supplier's weight guide. Oversized drop-shoulder cut — size down for a closer fit.",
        zh: "供應商建議體重對照。Oversize 落肩版型，想貼身可拿細一碼。",
      },
    },
    image: "https://turtlehk.github.io/al-assets/images/hoodie-1.jpg",
    images: [
      "https://turtlehk.github.io/al-assets/images/hoodie-1.jpg",
      "https://turtlehk.github.io/al-assets/images/hoodie-2.jpg",
      "https://turtlehk.github.io/al-assets/images/hoodie-3.jpg",
      "https://turtlehk.github.io/al-assets/images/hoodie-4.jpg",
    ],
    description: {
      en: "Washed vintage-blue hoodie with tonal graffiti-script embroidery on the chest and hood, plus a structured double-layer hood. 350 gsm mid-weight fabric, roomy kangaroo pocket, relaxed oversized fit.",
      zh: "水洗做舊藍連帽衛衣，胸前＋帽背同色系塗鴉刺繡，雙層帽簷更挺身。350 克中磅布料，oversize 落肩剪裁配大袋鼠袋，秋天一件過搞掂。",
    },
  },
  {
    id: "stripecami01",
    name: { en: "Striped Tie-Front Halter Cami", zh: "藍白條紋綁帶掛脖背心" },
    category: "top",
    price: 75,
    badge: { en: "New", zh: "新品" },
    stock: "preorder",
    colors: [{ en: "Blue Stripe", zh: "藍白條紋" }],
    sizes: ["S", "M", "L"],
    measurements: {
      cols: [{ en: "Suggested weight", zh: "建議體重" }],
      rows: {
        S: ["40–45kg"],
        M: ["45–50kg"],
        L: ["50–55kg"],
      },
      note: {
        en: "Supplier's weight guide.",
        zh: "供應商建議體重對照。",
      },
    },
    image: "https://turtlehk.github.io/al-assets/images/stripecami-1.jpg",
    images: [
      "https://turtlehk.github.io/al-assets/images/stripecami-1.jpg",
      "https://turtlehk.github.io/al-assets/images/stripecami-2.jpg",
      "https://turtlehk.github.io/al-assets/images/stripecami-3.jpg",
    ],
    description: {
      en: "Island-holiday striped cami with a halter neck, tie-front closure and low open back. Lace-edged hem, made for sun, sea and white maxi skirts.",
      zh: "海島度假感藍白條紋背心：掛脖設計＋前排繫帶＋露背剪裁，下襬蕾絲花邊。配白色長裙就是整套渡假穿搭。",
    },
  },
  {
    id: "tabiflats01",
    name: { en: "Split-Toe Ballet Flats", zh: "分趾芭蕾平底鞋" },
    category: "shoe",
    price: 55,
    badge: { en: "New", zh: "新品" },
    stock: "preorder",
    colors: [
      { en: "Silver", zh: "銀" },
      { en: "White", zh: "白" },
      { en: "Black", zh: "黑" },
      { en: "Red", zh: "紅" },
      { en: "Yellow", zh: "黃" },
      { en: "Brown", zh: "棕" },
    ],
    sizes: ["35", "36", "37", "38", "39", "40", "41", "42"],
    image: "https://turtlehk.github.io/al-assets/images/tabiflats-1.jpg",
    images: [
      "https://turtlehk.github.io/al-assets/images/tabiflats-1.jpg",
      "https://turtlehk.github.io/al-assets/images/tabiflats-2.jpg",
      "https://turtlehk.github.io/al-assets/images/tabiflats-3.jpg",
    ],
    description: {
      en: "Soft split-toe ballet flats with a knotted vamp detail — six easy colours, featherlight and foldable-soft for all-day walking.",
      zh: "軟皮分趾芭蕾平底鞋，鞋頭小結點綴。六色可選，鞋身柔軟輕巧，行街一日都唔攰。",
    },
  },
  {
    id: "whiteset01",
    name: { en: "White Shirt & Maxi Skirt Set", zh: "白襯衫半身長裙兩件套" },
    category: "set",
    price: 109,
    badge: { en: "New", zh: "新品" },
    stock: "preorder",
    colors: [{ en: "White", zh: "白" }],
    sizes: ["S", "M", "L", "XL"],
    measurements: {
      cols: [{ en: "Suggested weight", zh: "建議體重" }],
      rows: {
        S: ["40–50kg"],
        M: ["50–55kg"],
        L: ["55.5–60kg"],
        XL: ["60.5–65kg"],
      },
      note: {
        en: "Supplier's weight guide. Set = shirt + skirt (inner tank shown on the model is not included).",
        zh: "供應商建議體重對照。套裝＝襯衫＋長裙（模特內搭背心不包含）。",
      },
    },
    image: "https://turtlehk.github.io/al-assets/images/whiteset-1.jpg",
    images: [
      "https://turtlehk.github.io/al-assets/images/whiteset-1.jpg",
      "https://turtlehk.github.io/al-assets/images/whiteset-2.jpg",
    ],
    description: {
      en: "A breezy all-white two-piece: a relaxed sun-shirt over a fluid maxi skirt. Doubles as a beach cover set or clean-girl city look — effortless head-to-toe.",
      zh: "清爽全白兩件套：寬鬆防曬襯衫＋垂墜半身長裙。海邊度假、城市清冷風一套搞定，從頭到腳不費力的高級感。",
    },
  },
  {
    id: "suitpants01",
    name: { en: "Draped High-Waist Suit Trousers", zh: "垂皺高腰西裝寬褲" },
    category: "pants",
    price: 79,
    badge: { en: "New", zh: "新品" },
    stock: "preorder",
    colors: [
      { en: "Grey", zh: "灰" },
      { en: "Black", zh: "黑" },
    ],
    sizes: ["S", "M", "L", "XL"],
    measurements: {
      cols: [
        { en: "Waist", zh: "腰圍" },
        { en: "Length", zh: "褲長" },
        { en: "Suggested weight", zh: "建議體重" },
      ],
      rows: {
        S: ["64", "102", "≤50kg"],
        M: ["68", "103", "50–55kg"],
        L: ["72", "104", "55–60kg"],
        XL: ["76", "105", "60–67.5kg"],
      },
      note: {
        en: "Supplier's flat-laid chart (cm), ±1–3cm. Pleated front skims the hips — pear-shape friendly.",
        zh: "供應商平鋪尺寸表（cm），誤差 ±1–3cm。前褶設計遮胯顯瘦，梨形身材友好。",
      },
    },
    image: "https://turtlehk.github.io/al-assets/images/suitpants-1.jpg",
    images: [
      "https://turtlehk.github.io/al-assets/images/suitpants-1.jpg",
      "https://turtlehk.github.io/al-assets/images/suitpants-2.jpg",
    ],
    description: {
      en: "High-waist suit trousers with sculpted pleats and a heavy drape that falls dead straight. Hides hips, lengthens legs — the workwear pant that works everywhere.",
      zh: "高腰垂皺西裝寬褲：立體壓褶、重垂墜感直落剪裁。遮胯顯瘦拉長腿線，通勤日常都能撐住的一條褲。",
    },
  },
  {
    id: "flarepants01",
    name: { en: "Low-Rise Flare Yoga Pants", zh: "美式復古低腰微喇瑜伽褲" },
    category: "pants",
    price: 69,
    badge: { en: "New", zh: "新品" },
    stock: "preorder",
    colors: [
      { en: "Light Grey", zh: "淺灰" },
      { en: "Dark Grey", zh: "深灰" },
      { en: "Navy", zh: "藏藍" },
      { en: "Black", zh: "黑" },
    ],
    sizes: ["S", "M", "L", "XL"],
    measurements: {
      cols: [{ en: "Suggested weight", zh: "建議體重" }],
      rows: {
        S: ["35–50kg"],
        M: ["50–55kg"],
        L: ["55–60kg"],
        XL: ["60–65kg"],
      },
      note: {
        en: "Supplier's weight guide. Petite-friendly low rise; a longer-leg version is available at the same price — mention it in your order note.",
        zh: "供應商建議體重對照。小個子友好低腰版型；另有加長版同價，需要請在訂單備註註明。",
      },
    },
    image: "https://turtlehk.github.io/al-assets/images/flarepants-1.jpg",
    images: [
      "https://turtlehk.github.io/al-assets/images/flarepants-1.jpg",
      "https://turtlehk.github.io/al-assets/images/flarepants-2.jpg",
    ],
    description: {
      en: "American-retro low-rise flares in a drapey brushed knit — lifted seams, a clean waistband and a leg-lengthening kick. From yoga class to coffee runs.",
      zh: "美式復古低腰微喇褲：垂感面料、貼臀剪裁、顯腿長的微喇襬。瑜伽運動與日常穿搭一條通吃。",
    },
  },
  {
    id: "vestdress01",
    name: { en: "Stand-Collar Sleeveless Mini Dress", zh: "立領無袖修身連身裙" },
    category: "dress",
    price: 79,
    badge: { en: "New", zh: "新品" },
    stock: "preorder",
    colors: [
      { en: "Khaki", zh: "卡其" },
      { en: "Black", zh: "黑" },
    ],
    sizes: ["S", "M", "L", "XL"],
    measurements: {
      cols: [{ en: "Suggested weight", zh: "建議體重" }],
      rows: {
        S: ["40–45kg"],
        M: ["45.5–50kg"],
        L: ["50.5–60kg"],
        XL: ["60.5–65kg"],
      },
      note: {
        en: "Supplier's weight guide; tailored fit with pockets.",
        zh: "供應商建議體重對照；合身剪裁、兩側有口袋。",
      },
    },
    image: "https://turtlehk.github.io/al-assets/images/vestdress-1.jpg",
    images: [
      "https://turtlehk.github.io/al-assets/images/vestdress-1.jpg",
      "https://turtlehk.github.io/al-assets/images/vestdress-2.jpg",
    ],
    description: {
      en: "A minimalist stand-collar mini with a notched neckline, nipped waist, pleated A-line skirt — and real pockets. Linen-look polish for work or weekends.",
      zh: "極簡立領無袖短裙：小開領、收腰剪裁、百褶 A 字裙襬，還有實用口袋。亞麻質感，上班週末都體面。",
    },
  },
  {
    id: "vestskirtset01",
    name: { en: "Pinstripe Vest & Midi Skirt Set", zh: "老錢風條紋馬甲半身裙套裝" },
    category: "set",
    price: 119,
    badge: { en: "New", zh: "新品" },
    stock: "preorder",
    colors: [{ en: "Cream Pinstripe", zh: "米白條紋" }],
    sizes: ["M", "L", "XL", "2XL", "3XL"],
    measurements: {
      cols: [{ en: "Suggested weight", zh: "建議體重" }],
      rows: {
        M: ["47.5–55kg"],
        L: ["55–60kg"],
        XL: ["60–65kg"],
        "2XL": ["65–70kg"],
        "3XL": ["70–75kg"],
      },
      note: {
        en: "Supplier's guide (for heights 155–165cm). Sizing starts at M and runs small — if you usually wear S, take M.",
        zh: "供應商對照表（身高 155–165cm 基準）。尺碼由 M 起跳且基準偏小——平時穿 S 的拿 M 即可。",
      },
    },
    image: "https://turtlehk.github.io/al-assets/images/vestskirt-1.jpg",
    images: [
      "https://turtlehk.github.io/al-assets/images/vestskirt-1.jpg",
      "https://turtlehk.github.io/al-assets/images/vestskirt-2.jpg",
    ],
    description: {
      en: "Quiet-luxury tailoring: a V-neck pinstripe waistcoat with a matching bias-panelled midi skirt. Old-money polish that works for the office and beyond.",
      zh: "老錢風套裝：V 領條紋馬甲背心＋同布斜裁中長半身裙。安靜的高級感，上班場合到晚餐都撐得住場。",
    },
  },
  {
    id: "haltertop01",
    name: { en: "Satin Halter-Neck Top", zh: "緞面掛脖露背上衣" },
    category: "top",
    price: 59,
    badge: { en: "New", zh: "新品" },
    stock: "preorder",
    colors: [
      { en: "Coffee", zh: "咖啡" },
      { en: "Black", zh: "黑" },
      { en: "Apricot", zh: "杏" },
    ],
    sizes: ["S", "M", "L"],
    fabric: { en: "100% polyester satin (supplier-stated)", zh: "聚酯纖維 100%・緞面（供應商標示）" },
    measurements: {
      cols: [
        { en: "Length", zh: "衣長" },
        { en: "Bust", zh: "胸圍" },
      ],
      rows: {
        S: ["56", "88"],
        M: ["57", "92"],
        L: ["58.5", "98"],
      },
      note: {
        en: "Supplier's flat-laid chart (cm), ±1–2cm variance.",
        zh: "供應商平鋪尺寸表（cm），誤差 ±1–2cm。",
      },
    },
    image: "https://turtlehk.github.io/al-assets/images/haltertop-1.jpg",
    images: [
      "https://turtlehk.github.io/al-assets/images/haltertop-1.jpg",
      "https://turtlehk.github.io/al-assets/images/haltertop-2.jpg",
    ],
    description: {
      en: "A fluid satin halter top with a draped cowl neck and an open back — quiet luxury energy in three colours. Tucks into trousers or a maxi skirt for instant polish.",
      zh: "垂墜緞面掛脖上衣：慵懶垂領、優雅露背，低調高級感。配西裝褲或長裙即刻出眾，三色可選。",
    },
  },
  {
    id: "dotmini01",
    name: { en: "Polka-Dot Open-Back Mini Dress", zh: "波點露背無袖連身裙" },
    category: "dress",
    price: 79,
    badge: { en: "New", zh: "新品" },
    stock: "preorder",
    colors: [
      { en: "Black", zh: "黑" },
      { en: "Navy", zh: "藏青" },
      { en: "White", zh: "白" },
      { en: "Red", zh: "紅" },
    ],
    sizes: ["S", "M", "L", "XL"],
    measurements: {
      cols: [
        { en: "Bust", zh: "胸圍" },
        { en: "Hip", zh: "臀圍" },
        { en: "Length", zh: "裙長" },
      ],
      rows: {
        S: ["90", "96", "85"],
        M: ["94", "100", "86"],
        L: ["100", "106", "87"],
        XL: ["106", "112", "88"],
      },
      note: {
        en: "Supplier's chart (cm). European cut runs large — we suggest sizing DOWN one size from your usual.",
        zh: "供應商尺寸表（cm）。歐美版型偏大，建議比平時「拿細一碼」。",
      },
    },
    image: "https://turtlehk.github.io/al-assets/images/dotmini-1.jpg",
    images: [
      "https://turtlehk.github.io/al-assets/images/dotmini-1.jpg",
      "https://turtlehk.github.io/al-assets/images/dotmini-2.jpg",
    ],
    description: {
      en: "A breezy polka-dot mini with a clean round neck up front and a surprise open back with tie detail. Sweet meets a little daring — summer date material.",
      zh: "波點無袖短洋裝：正面圓領乖巧，轉身鏤空露背加綁帶小心機。甜美中帶點大膽，夏日約會首選。",
    },
  },
  {
    id: "backlessdress01",
    name: { en: "Open-Back Long-Sleeve Mini Dress", zh: "修身露背長袖連身短裙" },
    category: "dress",
    price: 89,
    badge: { en: "New", zh: "新品" },
    stock: "preorder",
    fitRef: { en: "Model is 160 cm / 45 kg, wearing size S", zh: "模特 160cm／45kg，著 S 碼" },
    colors: [
      { en: "White", zh: "白" },
      { en: "Black", zh: "黑" },
    ],
    sizes: ["S", "M", "L"],
    fabric: { en: "95% polyester, 5% spandex (supplier-stated)", zh: "聚酯纖維 95%・氨綸 5%（供應商標示）" },
    measurements: {
      cols: [
        { en: "Bust", zh: "胸圍" },
        { en: "Waist", zh: "腰圍" },
        { en: "Hip", zh: "臀圍" },
        { en: "Length", zh: "衣長" },
      ],
      rows: {
        S: ["74–84", "59–68", "85–92", "78.5"],
        M: ["78–88", "63–72", "89–96", "80.5"],
        L: ["82–92", "67–76", "93–100", "82.5"],
      },
      note: {
        en: "Supplier's chart (cm), stretch fabric — ranges show the comfortable fit window; ±1–2cm variance.",
        zh: "供應商尺寸表（cm），彈性面料——區間為舒適合身範圍；誤差 ±1–2cm。",
      },
    },
    image: "https://turtlehk.github.io/al-assets/images/backless-1.jpg",
    images: [
      "https://turtlehk.github.io/al-assets/images/backless-1.jpg",
      "https://turtlehk.github.io/al-assets/images/backless-2.jpg",
    ],
    description: {
      en: "A textured-knit mini with a bateau neck, flared cuffs and a low open back. Body-skimming stretch that moves with you — boots in autumn, sandals in summer.",
      zh: "肌理感針織短裙：一字領、微喇袖口、深露背設計。彈性修身剪裁勾勒線條，配長靴或涼鞋四季都能穿。",
    },
  },
  {
    id: "stripepants01",
    name: { en: "Striped Breezy Lounge Pants", zh: "條紋輕薄休閒長褲" },
    category: "pants",
    price: 59,
    badge: { en: "New", zh: "新品" },
    stock: "preorder",
    colors: [
      { en: "Blue Stripe", zh: "藍條紋" },
      { en: "Pink Stripe", zh: "粉條紋" },
      { en: "Yellow Stripe", zh: "黃條紋" },
    ],
    sizes: ["S", "M", "L", "XL", "2XL"],
    measurements: {
      cols: [
        { en: "Length", zh: "褲長" },
        { en: "Hip", zh: "臀圍" },
        { en: "Thigh", zh: "大腿圍" },
        { en: "Suggested weight", zh: "建議體重" },
      ],
      rows: {
        S: ["98", "108", "61", "40–47.5kg"],
        M: ["99", "112", "63", "47.5–55kg"],
        L: ["100", "116", "65", "55–62.5kg"],
        XL: ["101", "120", "67", "62.5–70kg"],
        "2XL": ["102", "124", "69", "70–80kg"],
      },
      note: {
        en: "Supplier's chart (cm), hand-measured ±2–4cm. Light, airy fabric with an elastic drawstring waist.",
        zh: "供應商尺寸表（cm），人手量度誤差 ±2–4cm。輕薄透氣布料、鬆緊抽繩腰。",
      },
    },
    image: "https://turtlehk.github.io/al-assets/images/stripepants-1.jpg",
    images: [
      "https://turtlehk.github.io/al-assets/images/stripepants-1.jpg",
      "https://turtlehk.github.io/al-assets/images/stripepants-2.jpg",
    ],
    description: {
      en: "Feather-light striped lounge pants with an elastic drawstring waist and a roomy straight leg — cool, forgiving and endlessly easy. Home to street in one pair.",
      zh: "輕薄如羽的條紋休閒褲：鬆緊抽繩腰、寬鬆直筒剪裁，透氣遮肉顯瘦。居家外出一條兩用，夏日懶人首選。",
    },
  },
  {
    id: "greyset01",
    name: { en: "Henley Tee & Pants Lounge Set", zh: "排扣T恤直筒褲休閒套裝" },
    category: "set",
    price: 69,
    badge: { en: "New", zh: "新品" },
    stock: "preorder",
    colors: [{ en: "Grey Marl", zh: "麻花灰" }],
    sizes: ["S", "M", "L", "XL"],
    image: "https://turtlehk.github.io/al-assets/images/greyset-1.jpg",
    images: [
      "https://turtlehk.github.io/al-assets/images/greyset-1.jpg",
      "https://turtlehk.github.io/al-assets/images/greyset-2.jpg",
      "https://turtlehk.github.io/al-assets/images/greyset-3.jpg",
    ],
    description: {
      en: "An off-duty two-piece in soft grey marl: a slim henley-button long-sleeve tee with a matching drawstring straight-leg pant. The effortless everyday uniform.",
      zh: "慵懶歐美風兩件套：麻花灰排扣修身長袖 T 恤＋同色抽繩直筒長褲。一套穿出鬆弛感，日常出街百搭制服。",
    },
  },
  {
    id: "drapepants01",
    name: { en: "Drapey Wide-Leg Lounge Trousers", zh: "垂感微喇休閒長褲" },
    category: "pants",
    price: 89,
    badge: { en: "New", zh: "新品" },
    stock: "preorder",
    colors: [
      { en: "Dark Grey", zh: "深灰" },
      { en: "Light Grey", zh: "淺灰" },
      { en: "Navy", zh: "藏藍" },
      { en: "Coffee", zh: "咖啡" },
      { en: "Black", zh: "黑" },
      { en: "Ivory", zh: "米白" },
    ],
    sizes: ["S", "M", "L", "XL", "2XL"],
    measurements: {
      cols: [
        { en: "Length", zh: "褲長" },
        { en: "Waist", zh: "腰圍" },
        { en: "Half hip", zh: "1/2 臀圍" },
        { en: "Suggested weight", zh: "建議體重" },
      ],
      rows: {
        S: ["98", "62", "47", "40–50kg"],
        M: ["100", "66", "49", "50–57.5kg"],
        L: ["102", "70", "51", "57.5–65kg"],
        XL: ["104", "74", "53", "65–72.5kg"],
        "2XL": ["106", "78", "55", "72.5–80kg"],
      },
      note: {
        en: "Supplier's official chart (cm). Full-length floor-grazing cut — hem or cuff if you prefer it shorter.",
        zh: "供應商官方尺寸表（cm）。拖地褲剪裁偏長，嫌長可捲邊或改短。",
      },
    },
    image: "https://turtlehk.github.io/al-assets/images/drapepants-1.jpg",
    images: [
      "https://turtlehk.github.io/al-assets/images/drapepants-1.jpg",
      "https://turtlehk.github.io/al-assets/images/drapepants-2.jpg",
    ],
    description: {
      en: "Fluid, drapey wide-leg trousers with a subtle flare, a smooth waistband and drawstring. Floor-grazing length that lengthens the leg — dress them up or live in them at home.",
      zh: "垂墜感面料配微喇褲型，平滑腰頭＋抽繩設計。拖地長度視覺拉長比例，外出居家都好穿，慵懶又顯瘦。",
    },
  },
  {
    id: "henleytop01",
    name: { en: "Ribbed Henley Slim Top", zh: "排扣羅紋修身長袖上衣" },
    category: "top",
    price: 69,
    badge: { en: "New", zh: "新品" },
    stock: "preorder",
    colors: [
      { en: "White", zh: "白" },
      { en: "Khaki", zh: "卡其" },
    ],
    sizes: ["S", "M", "L", "XL"],
    image: "https://turtlehk.github.io/al-assets/images/henley-1.jpg",
    images: [
      "https://turtlehk.github.io/al-assets/images/henley-1.jpg",
      "https://turtlehk.github.io/al-assets/images/henley-2.jpg",
      "https://turtlehk.github.io/al-assets/images/henley-3.jpg",
    ],
    description: {
      en: "An American-retro henley with a scooped neckline, button placket and waist-hugging ribbed fit, finished with a curved hem. The easiest layering basic — on its own or under everything.",
      zh: "美式復古排扣設計：U 領、排釦門襟、貼身羅紋收腰剪裁配弧形下襬。最好搭的內搭基本款，單穿外搭都俐落。",
    },
  },
  {
    id: "sharkpants01",
    hidden: true, // 2026-09-02 下架（Joseph 指示）；重新上架＝刪掉這行
    name: { en: "High-Waist Sculpting Shark Leggings", zh: "高腰收腹提臀鯊魚褲" },
    category: "pants",
    price: 79,
    badge: { en: "New", zh: "新品" },
    stock: "preorder",
    colors: [
      { en: "Black", zh: "黑" },
      { en: "Graphite Grey", zh: "石墨灰" },
      { en: "Cool Brown", zh: "冷棕" },
    ],
    sizes: ["S", "M", "L", "XL", "2XL"],
    measurements: {
      cols: [{ en: "Suggested weight", zh: "建議體重" }],
      rows: {
        S: ["37.5–45kg"],
        M: ["45–55kg"],
        L: ["55–65kg"],
        XL: ["65–75kg"],
        "2XL": ["75–85kg"],
      },
      note: {
        en: "Supplier's weight guide (spring/autumn weight, for 22–30°C). High compression — size up for a relaxed fit.",
        zh: "供應商建議體重對照（春秋款，適合 22–30°C）。微壓塑形布料，想穿鬆一點建議拿大一碼。",
      },
    },
    image: "https://turtlehk.github.io/al-assets/images/shark-1.jpg",
    images: [
      "https://turtlehk.github.io/al-assets/images/shark-1.jpg",
      "https://turtlehk.github.io/al-assets/images/shark-2.jpg",
    ],
    description: {
      en: "The viral 'shark' leggings: high waist with tummy control, contour seams that lift and sculpt, and a soft compressive knit you can wear out or to work out.",
      zh: "人氣鯊魚褲：高腰收腹、立體剪裁提臀顯瘦，微壓親膚布料外穿運動皆可。日常搭配或瑜伽健身一條搞定。",
    },
  },
  {
    id: "laceshrug01",
    name: { en: "Lace Shrug & Cami Two-Piece", zh: "蕾絲罩衫吊帶背心兩件套" },
    category: "top",
    price: 89,
    badge: { en: "New", zh: "新品" },
    stock: "preorder",
    colors: [{ en: "Black", zh: "黑" }],
    sizes: ["S", "M", "L"],
    image: "https://turtlehk.github.io/al-assets/images/laceshrug-1.jpg",
    images: [
      "https://turtlehk.github.io/al-assets/images/laceshrug-1.jpg",
      "https://turtlehk.github.io/al-assets/images/laceshrug-2.jpg",
    ],
    description: {
      en: "A sheer floral-lace shrug with flared cuffs over a fitted cami with built-in padding — two pieces, endless mixing. Night-out ready, or soften it with low-rise denim.",
      zh: "透膚蕾絲小罩衫（微喇袖口）＋含胸墊修身吊帶背心，兩件一套可拆搭。夜出穿搭直接成立，配牛仔褲又酷又辣。",
    },
  },
  {
    id: "ziptop01",
    name: { en: "Half-Zip Slim Sports Top", zh: "立領半拉鏈修身運動上衣" },
    category: "top",
    price: 59,
    badge: { en: "New", zh: "新品" },
    stock: "preorder",
    colors: [
      { en: "White", zh: "白" },
      { en: "Black", zh: "黑" },
      { en: "Grey", zh: "灰" },
      { en: "Pink", zh: "粉" },
      { en: "Rose", zh: "玫紅" },
    ],
    sizes: ["S", "M", "L"],
    measurements: {
      cols: [{ en: "Suggested weight", zh: "建議體重" }],
      rows: {
        S: ["40–45kg"],
        M: ["45–50kg"],
        L: ["50–55kg"],
      },
      note: {
        en: "Supplier's weight guide — slim athletic cut with stretch; size up if in between.",
        zh: "供應商建議體重對照；修身彈性剪裁，介乎兩碼建議拿大一碼。",
      },
    },
    image: "https://turtlehk.github.io/al-assets/images/ziptop-1.jpg",
    images: [
      "https://turtlehk.github.io/al-assets/images/ziptop-1.jpg",
      "https://turtlehk.github.io/al-assets/images/ziptop-2.jpg",
    ],
    description: {
      en: "A stand-collar half-zip top with princess seams, thumbhole cuffs and a curved hem — sleek for the gym, the hike or the school run. Five colours.",
      zh: "立領半拉鏈設計、修身剪裁配拇指孔袖口與弧形下襬——健身、行山、日常通勤都俐落。五色可選。",
    },
  },
  {
    id: "dressfloral01",
    hidden: true, // 2026-08-31 下架（Joseph：圖片不滿意）；重新上架＝刪掉這行
    name: { en: "Floral Lace-Trim Cami Dress", zh: "法式碎花蕾絲吊帶洋裝" },
    category: "dress",
    price: 79,
    badge: { en: "New", zh: "新品" },
    stock: "preorder",
    colors: [{ en: "Navy Floral", zh: "深藍碎花" }],
    sizes: ["S", "M", "L", "XL"],
    fabric: { en: "95% cotton (supplier-stated)", zh: "棉 95%（供應商標示）" },
    care: { en: "🧺 Hand wash; no bleach or dry cleaning; iron on low", zh: "🧺 建議手洗；不可漂白、不可乾洗；低溫熨燙" },
    measurements: {
      cols: [
        { en: "Length", zh: "裙長" },
        { en: "Bust", zh: "胸圍" },
        { en: "Suggested weight", zh: "建議體重" },
      ],
      rows: {
        S: ["74", "71", "42.5–47.5kg"],
        M: ["75", "75", "48–52.5kg"],
        L: ["76", "79", "53–57.5kg"],
        XL: ["77", "83", "58–62.5kg"],
      },
      note: {
        en: "Supplier's flat-laid measurements (cm), ±1–4cm variance; runs fitted — size up if in between.",
        zh: "供應商平鋪量度（cm），誤差 ±1–4cm 屬正常；剪裁偏合身，介乎兩碼建議拿大一碼。",
      },
    },
    image: "https://turtlehk.github.io/al-assets/images/dressfloral-3.jpg",
    images: [
      "https://turtlehk.github.io/al-assets/images/dressfloral-3.jpg",
      "https://turtlehk.github.io/al-assets/images/dressfloral-1.jpg",
      "https://turtlehk.github.io/al-assets/images/dressfloral-2.jpg",
    ],
    description: {
      en: "A French-style navy floral cami dress: lace-trimmed neckline, tie-bow bust and a waist-cinching flared skirt. Soft cotton-rich fabric — effortlessly romantic for summer days and dates. (Grey cardigan shown on the model is sold as the set version.)",
      zh: "法式深藍碎花吊帶洋裝：蕾絲滾邊領口、胸前綁帶蝴蝶結、收腰傘襬顯瘦剪裁。棉質親膚透氣，夏日日常與約會一件搞定。（模特圖中的灰色開衫屬套裝版本，另有販售。）",
    },
  },
  {
    id: "setfloral01",
    hidden: true, // 2026-08-31 下架（同 dressfloral01，圖片不滿意）；重新上架＝刪掉這行
    name: { en: "Floral Dress & Knit Cardigan Set", zh: "碎花洋裝×針織開衫套裝" },
    category: "set",
    price: 109,
    badge: { en: "New", zh: "新品" },
    stock: "preorder",
    colors: [{ en: "Navy Floral + Grey Cardigan", zh: "深藍碎花＋灰開衫" }],
    sizes: ["S", "M", "L", "XL"],
    fabric: { en: "Dress 95% cotton (supplier-stated)", zh: "洋裝棉 95%（供應商標示）" },
    care: { en: "🧺 Hand wash; no bleach or dry cleaning; iron on low", zh: "🧺 建議手洗；不可漂白、不可乾洗；低溫熨燙" },
    measurements: {
      cols: [
        { en: "Dress length", zh: "裙長" },
        { en: "Dress bust", zh: "裙胸圍" },
        { en: "Cardigan length", zh: "開衫衣長" },
        { en: "Sleeve", zh: "開衫袖長" },
      ],
      rows: {
        S: ["74", "71", "38", "59.5"],
        M: ["75", "75", "39", "60.5"],
        L: ["76", "79", "40", "61.5"],
        XL: ["77", "83", "41", "62.5"],
      },
      note: {
        en: "Supplier's flat-laid measurements (cm), ±1–4cm variance; runs fitted — size up if in between. Weight guide: S 42.5–47.5kg · M 48–52.5 · L 53–57.5 · XL 58–62.5.",
        zh: "供應商平鋪量度（cm），誤差 ±1–4cm 屬正常；偏合身，介乎兩碼建議拿大一碼。建議體重：S 42.5–47.5kg・M 48–52.5・L 53–57.5・XL 58–62.5。",
      },
    },
    image: "https://turtlehk.github.io/al-assets/images/dressfloral-1.jpg",
    images: [
      "https://turtlehk.github.io/al-assets/images/dressfloral-1.jpg",
      "https://turtlehk.github.io/al-assets/images/dressfloral-2.jpg",
      "https://turtlehk.github.io/al-assets/images/dressfloral-3.jpg",
    ],
    description: {
      en: "The floral cami dress paired with a light grey knit cardigan — one set, ready to go: AC-proof layering that works for the office, dates and everyday wear.",
      zh: "碎花吊帶洋裝配薄灰針織小開衫，一套齊備：冷氣房外搭剛剛好，上班、約會、日常直接出門。",
    },
  },
  {
    id: "knitset01",
    name: { en: "Cable-Knit Halter Cami & Cardigan Set", zh: "麻花針織掛脖背心開衫兩件套" },
    category: "top",
    price: 79,
    badge: { en: "New", zh: "新品" },
    stock: "preorder",
    colors: [
      { en: "Green", zh: "綠" },
      { en: "Ivory White", zh: "米白" },
      { en: "Black", zh: "黑" },
    ],
    sizes: ["S", "M", "L", "XL"],
    measurements: {
      cols: [{ en: "Suggested weight", zh: "建議體重" }],
      rows: {
        S: ["35–42.5kg"],
        M: ["42.5–47.5kg"],
        L: ["47.5–52.5kg"],
        XL: ["52.5–57.5kg"],
      },
      note: {
        en: "Supplier's weight guide — runs small, size up if in between. WhatsApp us for flat-laid cm measurements.",
        zh: "供應商建議體重對照，此款偏小碼，介乎兩碼建議拿大一碼；想要平鋪 cm 實測歡迎 WhatsApp 查詢。",
      },
    },
    image: "https://turtlehk.github.io/al-assets/images/knitset-1.jpg",
    images: [
      "https://turtlehk.github.io/al-assets/images/knitset-1.jpg",
      "https://turtlehk.github.io/al-assets/images/knitset-2.jpg",
      "https://turtlehk.github.io/al-assets/images/knitset-3.jpg",
    ],
    description: {
      en: "A cable-knit halter cami with a matching cropped cardigan — one set, two looks: wear the cami alone or layer up for cooler days. A cosy autumn/winter staple in three colours (both pieces included).",
      zh: "麻花織紋掛脖小背心＋同色短版開衫，兩件一套、一套兩穿：單穿吊帶清爽俐落，加開衫即刻溫柔。秋冬疊穿必備，三色可選（背心＋開衫整套販售）。",
    },
  },
  {
    id: "set01",
    name: { en: "Sleeveless Vest & Wide-Leg Trouser Set", zh: "無袖背心寬褲套裝" },
    category: "set",
    price: 119,
    badge: { en: "Bestseller", zh: "熱賣" },
    colors: [
      { en: "Beige", zh: "米杏" },
      { en: "Black", zh: "黑" },
      { en: "White", zh: "白" },
      { en: "Light Blue", zh: "淺藍" },
    ],
    sizes: ["S", "M", "L", "XL"],
    image: "https://turtlehk.github.io/al-assets/images/set-beige.jpg",
    images: [
      "https://turtlehk.github.io/al-assets/images/set-beige.jpg",
      "https://turtlehk.github.io/al-assets/images/set-black.jpg",
      "https://turtlehk.github.io/al-assets/images/set-white.jpg",
      "https://turtlehk.github.io/al-assets/images/set-blue.jpg",
    ],
    description: {
      en: "A polished two-piece: a V-neck button vest nipped at the waist, with matching high-waist wide-leg trousers. Effortlessly chic from the office to dinner — available in four colours.",
      zh: "俐落兩件式：V領單排扣背心收腰顯瘦，搭配同色高腰寬褲。從上班到晚餐都優雅得體，共四色可選。",
    },
  },
  {
    id: "setpin01",
    name: { en: "Pinstripe Vest & Trouser Set", zh: "直紋背心長褲套裝" },
    category: "set",
    price: 149,
    badge: { en: "New", zh: "新品" },
    colors: [
      { en: "Grey", zh: "灰" },
      { en: "Khaki", zh: "卡其" },
    ],
    sizes: ["S", "M", "L", "XL"],
    image: "https://turtlehk.github.io/al-assets/images/set-pinstripe-grey.jpg",
    images: [
      "https://turtlehk.github.io/al-assets/images/set-pinstripe-grey.jpg",
      "https://turtlehk.github.io/al-assets/images/set-pinstripe-khaki.jpg",
    ],
    description: {
      en: "A tailored pinstripe two-piece: a button vest with a tie waist and matching trousers. Smart, structured and easy to mix and match.",
      zh: "俐落直紋兩件式：單排扣背心配綁帶腰身與同款長褲。挺括有型，好搭好穿。",
    },
  },
  {
    id: "linenset01",
    name: { en: "Linen Cami & Wide-Leg Trouser Set", zh: "亞麻細肩寬褲套裝" },
    category: "set",
    price: 129,
    badge: { en: "New", zh: "新品" },
    colors: [{ en: "Natural Linen", zh: "亞麻原色" }],
    sizes: ["S", "M", "L", "XL"],
    image: "https://turtlehk.github.io/al-assets/images/linenset-1.jpg",
    images: [
      "https://turtlehk.github.io/al-assets/images/linenset-1.jpg",
      "https://turtlehk.github.io/al-assets/images/linenset-2.jpg",
      "https://turtlehk.github.io/al-assets/images/linenset-3.jpg",
      "https://turtlehk.github.io/al-assets/images/linenset-4.jpg",
    ],
    description: {
      en: "A relaxed linen two-piece: a button-front cami with a tie waist and breezy wide-leg trousers. Easy, elegant summer dressing.",
      zh: "休閒亞麻兩件式：排扣綁帶細肩背心＋飄逸寬褲。透氣好穿，夏日優雅日常。",
    },
  },
  {
    id: "setwrap01",
    name: { en: "Cap-Sleeve Wrap Top & Wide-Leg Set", zh: "綁帶短袖寬褲套裝" },
    category: "set",
    price: 109,
    badge: { en: "New", zh: "新品" },
    colors: [{ en: "Khaki", zh: "卡其" }],
    sizes: ["S", "M", "L", "XL"],
    image: "https://turtlehk.github.io/al-assets/images/setwrap-1.jpg",
    images: [
      "https://turtlehk.github.io/al-assets/images/setwrap-1.jpg",
      "https://turtlehk.github.io/al-assets/images/setwrap-2.jpg",
    ],
    description: {
      en: "A minimalist two-piece: a cap-sleeve wrap top with a side-tie waist and matching wide-leg trousers. Quietly chic and easy to wear.",
      zh: "極簡兩件式：短袖罩衫綁帶收腰＋同色寬褲。低調有型、舒適好穿。",
    },
  },
  {
    id: "card01",
    name: { en: "Ribbon-Tie Knit Cardigan", zh: "緞帶綁結針織外套" },
    category: "top",
    price: 69,
    badge: { en: "New", zh: "新品" },
    colors: [
      { en: "Cream", zh: "米白" },
      { en: "Matcha Green", zh: "抹茶綠" },
      { en: "Charcoal", zh: "深灰" },
    ],
    sizes: ["S", "M", "L", "XL"],
    image: "https://turtlehk.github.io/al-assets/images/cardigan-cream.jpg",
    images: [
      "https://turtlehk.github.io/al-assets/images/cardigan-cream.jpg",
      "https://turtlehk.github.io/al-assets/images/cardigan-green.jpg",
      "https://turtlehk.github.io/al-assets/images/cardigan-charcoal.jpg",
    ],
    description: {
      en: "A soft ribbed knit cardigan with sweet ribbon bow ties down the front. Light layering for AC season — pretty over a tee or a slip dress.",
      zh: "柔軟羅紋針織外套，前襟緞帶蝴蝶結綁結。冷氣房輕外搭，套在 T 恤或細肩裙上都甜美。",
    },
  },
  {
    id: "lacetop01",
    name: { en: "Floral Lace Tie-Front Top", zh: "碎花蕾絲綁帶上衣" },
    category: "top",
    price: 69,
    badge: { en: "New", zh: "新品" },
    colors: [{ en: "Cream Floral", zh: "米白碎花" }],
    sizes: ["S", "M", "L", "XL"],
    image: "https://turtlehk.github.io/al-assets/images/lace-top-1.jpg",
    images: [
      "https://turtlehk.github.io/al-assets/images/lace-top-1.jpg",
      "https://turtlehk.github.io/al-assets/images/lace-top-2.jpg",
    ],
    description: {
      en: "A delicate semi-sheer lace top in a sweet ditsy floral, with a V-neck, scalloped trim and a tie-bow front. Romantic and feminine — lovely layered over a camisole.",
      zh: "細緻半透蕾絲上衣，甜美碎花、V領波浪花邊與胸前綁帶蝴蝶結。浪漫女人味，內搭小可愛更好穿。",
    },
  },
  {
    id: "blouse01",
    name: { en: "Collared Tie-Front Blouse", zh: "翻領綁帶長袖上衣" },
    category: "top",
    price: 79,
    badge: { en: "New", zh: "新品" },
    colors: [
      { en: "Ivory", zh: "米白" },
      { en: "Black", zh: "黑" },
    ],
    sizes: ["S", "M", "L", "XL"],
    image: "https://turtlehk.github.io/al-assets/images/blouse-ivory.jpg",
    images: [
      "https://turtlehk.github.io/al-assets/images/blouse-ivory.jpg",
      "https://turtlehk.github.io/al-assets/images/blouse-black.jpg",
    ],
    description: {
      en: "A chic collared blouse with a plunging tie-front and softly flared sleeves. Elegant with a hint of allure — tucks into trousers or a skirt effortlessly.",
      zh: "翻領綁帶長袖上衣，深 V 前襟綁帶、微喇叭袖。優雅中帶點性感，紮進長褲或長裙都好看。",
    },
  },
  {
    id: "satintop01",
    name: { en: "High-Neck Satin Lace-Hem Top", zh: "高領緞面蕾絲襬上衣" },
    category: "top",
    price: 79,
    badge: { en: "New", zh: "新品" },
    colors: [
      { en: "Ivory", zh: "米白" },
      { en: "Black", zh: "黑" },
    ],
    sizes: ["S", "M", "L", "XL"],
    image: "https://turtlehk.github.io/al-assets/images/satintop-white.jpg",
    images: [
      "https://turtlehk.github.io/al-assets/images/satintop-white.jpg",
      "https://turtlehk.github.io/al-assets/images/satintop-black.jpg",
    ],
    description: {
      en: "A sleek high-neck satin top, sleeveless with an asymmetric scalloped-lace hem. Dressy and elegant — pair with tailored trousers or a maxi skirt.",
      zh: "高領無袖緞面上衣，斜襬綴波浪蕾絲。雅緻有質感，配西裝褲或長裙都好看。",
    },
  },
  {
    id: "dress01",
    name: { en: "Gingham Sleeveless Ruffle Dress", zh: "格紋無袖荷葉襬連身裙" },
    category: "dress",
    price: 109,
    badge: { en: "New", zh: "新品" },
    colors: [{ en: "Gingham", zh: "黑白格紋" }],
    sizes: ["S", "M", "L", "XL"],
    image: "https://turtlehk.github.io/al-assets/images/dress-gingham-2.jpg",
    images: [
      "https://turtlehk.github.io/al-assets/images/dress-gingham-2.jpg",
      "https://turtlehk.github.io/al-assets/images/dress-gingham-4.jpg",
      "https://turtlehk.github.io/al-assets/images/dress-gingham-1.jpg",
      "https://turtlehk.github.io/al-assets/images/dress-gingham-3.jpg",
    ],
    description: {
      en: "A sweet gingham mini with a tie keyhole neckline and a drop-waist ruffle hem. Cinched at the waist for a flattering, playful shape — a summer favourite.",
      zh: "黑白格紋短洋裝，胸前綁帶鏤空領口、低腰荷葉裙襬。收腰剪裁俏皮顯身形，夏日心頭好。",
    },
  },
  {
    id: "dressdot01",
    name: { en: "Polka-Dot Tiered Halter Dress", zh: "波點荷葉襬掛脖洋裝" },
    category: "dress",
    price: 99,
    badge: { en: "New", zh: "新品" },
    colors: [{ en: "Brown Dot", zh: "棕色波點" }],
    sizes: ["S", "M", "L", "XL"],
    image: "https://turtlehk.github.io/al-assets/images/dress-dot-1.jpg",
    images: [
      "https://turtlehk.github.io/al-assets/images/dress-dot-1.jpg",
      "https://turtlehk.github.io/al-assets/images/dress-dot-2.jpg",
      "https://turtlehk.github.io/al-assets/images/dress-dot-3.jpg",
      "https://turtlehk.github.io/al-assets/images/dress-dot-4.jpg",
    ],
    description: {
      en: "A floaty polka-dot chiffon mini with tiered ruffles and a halter tie neck. Flirty and feminine — perfect for summer dates and holidays.",
      zh: "飄逸波點雪紡短洋裝，多層荷葉襬＋掛脖綁帶。俏皮甜美，夏日約會、度假超適合。",
    },
  },
  {
    id: "skirtsatin01",
    name: { en: "Satin Lace-Trim Maxi Skirt", zh: "蕾絲襬緞面長裙" },
    category: "skirt",
    price: 79,
    badge: { en: "New", zh: "新品" },
    colors: [
      { en: "Black", zh: "黑" },
      { en: "Ivory", zh: "米白" },
    ],
    sizes: ["S", "M", "L", "XL"],
    image: "https://turtlehk.github.io/al-assets/images/skirt-satin-black.jpg",
    images: [
      "https://turtlehk.github.io/al-assets/images/skirt-satin-black.jpg",
      "https://turtlehk.github.io/al-assets/images/skirt-satin-ivory.jpg",
    ],
    description: {
      en: "A fluid satin maxi with a delicate lace hem and a side slit. Elegant with a touch of romance — dresses up a simple top in seconds.",
      zh: "垂墜緞面長裙，裙襬綴細緻蕾絲、側邊開衩。優雅中帶點浪漫，配簡單上衣立刻有型。",
    },
  },
  {
    id: "skirtpin01",
    name: { en: "Pinstripe Tailored Maxi Skirt", zh: "直紋西裝長裙" },
    category: "skirt",
    price: 99,
    badge: { en: "New", zh: "新品" },
    colors: [{ en: "Navy Pinstripe", zh: "深藍直紋" }],
    sizes: ["S", "M", "L", "XL"],
    image: "https://turtlehk.github.io/al-assets/images/skirt-pinstripe-1.jpg",
    images: [
      "https://turtlehk.github.io/al-assets/images/skirt-pinstripe-1.jpg",
      "https://turtlehk.github.io/al-assets/images/skirt-pinstripe-2.jpg",
      "https://turtlehk.github.io/al-assets/images/skirt-pinstripe-3.jpg",
      "https://turtlehk.github.io/al-assets/images/skirt-pinstripe-4.jpg",
    ],
    description: {
      en: "A long pinstripe skirt cut like tailored trousers — belt loops, pockets and a back slit. Effortlessly cool with a fitted tank.",
      zh: "西裝剪裁直紋長裙，有腰帶環、口袋與後開衩。配上合身背心，輕鬆有型。",
    },
  },
  {
    id: "skirtkhaki01",
    name: { en: "Cargo Wrap Maxi Skirt", zh: "工裝層次長裙" },
    category: "skirt",
    price: 89,
    badge: { en: "New", zh: "新品" },
    colors: [{ en: "Khaki", zh: "卡其" }],
    sizes: ["S", "M", "L", "XL"],
    image: "https://turtlehk.github.io/al-assets/images/skirt-khaki-1.jpg",
    images: [
      "https://turtlehk.github.io/al-assets/images/skirt-khaki-1.jpg",
      "https://turtlehk.github.io/al-assets/images/skirt-khaki-2.jpg",
    ],
    description: {
      en: "A relaxed maxi with a wrap apron panel and tie detail. Utility-meets-elegant — pairs with anything, from day to evening.",
      zh: "休閒長裙，前片圍裹層次設計加綁帶細節。工裝感又不失優雅，全天候百搭。",
    },
  },
  {
    id: "pants01",
    name: { en: "Striped Linen Wide-Leg Trousers", zh: "條紋亞麻寬褲" },
    category: "pants",
    price: 89,
    colors: [{ en: "Ecru Stripe", zh: "米白條紋" }],
    sizes: ["S", "M", "L", "XL"],
    image: "https://turtlehk.github.io/al-assets/images/pants-striped-1.jpg",
    images: [
      "https://turtlehk.github.io/al-assets/images/pants-striped-1.jpg",
      "https://turtlehk.github.io/al-assets/images/pants-striped-2.jpg",
      "https://turtlehk.github.io/al-assets/images/pants-striped-3.jpg",
    ],
    description: {
      en: "Breezy linen-blend trousers in a soft pinstripe. The high waist and fluid wide leg lengthen your silhouette — easy, elegant, and made for warm Hong Kong days.",
      zh: "透氣亞麻混紡，細緻直條紋。高腰寬管垂墜俐落、拉長比例，輕鬆又優雅，最適合香港的暖季日常。",
    },
  },
  {
    id: "bag01",
    name: { en: "Studded Soft Leather Shoulder Bag", zh: "軟皮鉚釘肩背包" },
    category: "bag",
    price: 179,
    badge: { en: "New", zh: "新品" },
    colors: [
      { en: "Black", zh: "黑" },
      { en: "Mint", zh: "薄荷灰" },
      { en: "Pink", zh: "粉" },
      { en: "Yellow", zh: "黃" },
    ],
    sizes: ["F"],
    image: "https://turtlehk.github.io/al-assets/images/bag-black.jpg",
    images: [
      "https://turtlehk.github.io/al-assets/images/bag-black.jpg",
      "https://turtlehk.github.io/al-assets/images/bag-mint.jpg",
      "https://turtlehk.github.io/al-assets/images/bag-pink.jpg",
      "https://turtlehk.github.io/al-assets/images/bag-yellow.jpg",
    ],
    description: {
      en: "A slouchy soft-leather shoulder bag with a studded strap and a metal charm. Roomy yet light — an easy everyday carry.",
      zh: "軟皮肩背包，鉚釘背帶加金屬吊飾，容量大又輕巧，日常百搭。",
    },
  },
  {
    id: "shoes01",
    name: { en: "Bow Mary-Jane Flats", zh: "蝴蝶結瑪莉珍鞋" },
    category: "shoe",
    price: 79,
    badge: { en: "New", zh: "新品" },
    colors: [
      { en: "Black", zh: "黑" },
      { en: "Ivory", zh: "米白" },
      { en: "Silver", zh: "銀" },
      { en: "Yellow", zh: "黃" },
    ],
    sizes: ["35", "36", "37", "38", "39", "40"],
    image: "https://turtlehk.github.io/al-assets/images/shoes-1.jpg",
    images: [
      "https://turtlehk.github.io/al-assets/images/shoes-1.jpg",
      "https://turtlehk.github.io/al-assets/images/shoes-2.jpg",
    ],
    description: {
      en: "Bow-front Mary-Jane ballet flats with a hidden 4cm lift and an adjustable strap. Comfy and sweet.",
      zh: "蝴蝶結瑪莉珍娃娃鞋，內增高 4cm、可調式繫帶，舒適又甜美。",
    },
  },
];

const CATEGORIES = [
  { key: "all", label: { en: "All", zh: "全部" } },
  { key: "dress", label: { en: "Dresses", zh: "洋裝" } },
  { key: "top", label: { en: "Tops", zh: "上衣" } },
  { key: "set", label: { en: "Sets", zh: "套裝" } },
  { key: "skirt", label: { en: "Skirts", zh: "裙裝" } },
  { key: "pants", label: { en: "Pants", zh: "褲裝" } },
  { key: "bag", label: { en: "Bags", zh: "包包" } },
  { key: "shoe", label: { en: "Shoes", zh: "鞋履" } },
];

// Size display labels (codes that need a friendly name)
const SIZE_LABEL = { F: { en: "One Size", zh: "均碼" } };

// hidden: true items are delisted everywhere (grid, product page, cart, related)
const PRODUCTS = ALL_PRODUCTS.filter((p) => !p.hidden);
window.PRODUCTS = PRODUCTS;
window.CATEGORIES = CATEGORIES;
window.SIZE_LABEL = SIZE_LABEL;

/* Site-wide announcement bar (edit here = live in ~10 min, no Netlify deploy).
   Shown between `from` and `to` (HK dates, inclusive). Delete or blank to hide. */
window.ANNOUNCE = {
  from: "2026-09-25",
  to: "2026-10-08",
  zh: "📦 9/26（六）晚截國慶前最後一團；供應商 10/1–10/8 假期停發，10/9 恢復落單。期間照常收單，到貨順延。",
  en: "📦 Last pre-holiday round closes Sat night (Sep 26). Supplier closed Oct 1–8, ordering resumes Oct 9 — orders welcome anytime, delivery resumes after the break.",
};

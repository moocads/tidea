export type ProductFeature = {
  title: string;
  body: string;
  image: string;
};

export type ProductData = {
  slug: "tc-100" | "tc-500" | "tc-200";
  model: string;
  title: string;
  price: string;
  status: "available" | "coming-soon";
  purchaseLinks?: { label: string; href: string }[];
  manualUrl?: string;
  tagline: string;
  description: string;
  mainImage: string;
  gallery: string[];
  includesIntro: string;
  includes: string[];
  features: ProductFeature[];
  runtimeTitle: string;
  runtimeNote?: string;
  runtimes: { minutes: string; mode: string; body: string }[];
  lifestyle?: {
    title: string;
    columns: { title: string; body: string }[];
    image: string;
  };
  specs: { label: string; value: string }[];
};

const imageBase = "/images/tidea";

export const products: Record<ProductData["slug"], ProductData> = {
  "tc-100": {
    slug: "tc-100",
    model: "TC-100",
    title: "TIDEA TC-100 Cordless Stick Vacuum",
    price: "$299.99",
    status: "available",
    purchaseLinks: [
      {
        label: "Shop at Walmart.com (US)",
        href: "https://www.walmart.com/ip/TIDEA-TC-100-Cordless-Stick-Vacuum-Cleaner-Lightweight-Vacuum-50-min-runtime-Digital-Display-Designed-for-Floor-Carpet-Pet-Hair/21053313590",
      },
      {
        label: "Shop at Walmart.ca (Canada)",
        href: "https://www.walmart.ca/en/ip/TIDEA-TC-100-Cordless-Stick-Vacuum-Cleaner-Lightweight-Vacuum-45-min-runtime-Digital-Display-Designed-for-Floor-Carpet-Pet-Hair/75QWA96EWP41",
      },
    ],
    manualUrl: "https://www.tidea-tech.com/_files/ugd/eeafbb_e85a5e7e4a26463fa68419150c7dfb26.pdf",
    tagline: "Lightweight Design. Powerful Everyday Cleaning.",
    description:
      "At just 5.4 lbs, the TC-100 makes everyday cleaning easier. Enjoy cordless convenience, up to 45 minutes of runtime, and effortless maintenance — all in one lightweight design.",
    mainImage: "/t100/imgi_3_eeafbb_3edf6561aa0445998f727019393820f4~mv2.png",
    gallery: [
      "/t100/imgi_3_eeafbb_3edf6561aa0445998f727019393820f4~mv2.png",
      "/t100/imgi_5_eeafbb_524f79750e0948ebaa8f332617a8e943~mv2.png",
      "/t100/imgi_7_eeafbb_ff68df7a538d4b44b54727896413fed9~mv2.png",
      "/t100/imgi_8_eeafbb_a9046d7391324d61833aebaad7b88672~mv2.png",
      "/t100/imgi_9_eeafbb_ca3ea9bb82e44802bdacb85e5d5640b0~mv2.png",
      "/t100/imgi_10_eeafbb_553b7c6fe7ac4086b3a0a3fc7b89c2a7~mv2.png",
      "/t100/imgi_11_eeafbb_e36bf1128d784e418c06f6648e5d9a6e~mv2.png",
      "/t100/imgi_12_eeafbb_4f70f6894f19481888a03cf44a1e970e~mv2.png",
    ],
    includesIntro: "Everything you need for versatile home cleaning.",
    includes: [
      "TC-100 Cordless Stick Vacuum",
      "Motorized LED Floor Brush",
      "Crevice Tool",
      "2-in-1 Brush",
      "Deep-Clean Tool",
      "Wall-Mount Charging Dock",
      "Power Adapter",
    ],
    features: [
      {
        title: "Lightweight at Just 5.4 lbs",
        body: "Weighing only 5.4 lbs (2.47 kg) with the battery, TC-100 is easy to carry upstairs, maneuver around furniture, and lift to clean hard-to-reach corners.",
        image: `${imageBase}/eeafbb_bcfb4c5234a64f0c8dc2d0f19e375c50~mv2.png`,
      },
      {
        title: "Easy, Mess-Free Maintenance",
        body: "The included Deep-Clean Tool cuts through tangled hair and brushes away dust from the bin. Empty the 600mL dust cup with one touch — no need to reach into the mess.",
        image: `${imageBase}/eeafbb_ebcb4acd013141e39563789d1b656355~mv2.png`,
      },
      {
        title: "Digital Display at a Glance",
        body: "Keep track of your cleaning with a clear digital display showing the remaining battery percentage and current cleaning mode.",
        image: `${imageBase}/eeafbb_9ff637976a344558aeb318d7cf065221~mv2.png`,
      },
      {
        title: "LED Floor Brush with 50% More Suction in BOOST",
        body: "Built-in LED headlights reveal hidden dust and hair under beds and sofas. Switch to BOOST for 50% more suction than ECO when tackling heavier debris like cereal and grit.",
        image: `${imageBase}/eeafbb_523251195de4460ea297deb03cbb4d50~mv2.png`,
      },
      {
        title: "From Stick Vacuum to Handheld",
        body: "Detach the wand to clean sofas, stairs, car interiors, and shelves. When you're done, hang it on the wall-mount charging dock for convenient storage and charging.",
        image: `${imageBase}/eeafbb_5df041f4bebd43c2a7e495fb4b0545e4~mv2.jpg`,
      },
    ],
    runtimeTitle: "Up to 45 Minutes of Runtime",
    runtimeNote: "Runtime in ECO mode. Actual runtime varies with mode and surface.",
    runtimes: [
      { minutes: "45", mode: "ECO", body: "Ideal for everyday cleaning and longer cleaning sessions." },
      { minutes: "25", mode: "BOOST", body: "Delivers 50% more suction than ECO for heavier debris." },
    ],
    lifestyle: {
      title: "Clean More Than Just Floors",
      image: `${imageBase}/eeafbb_5df041f4bebd43c2a7e495fb4b0545e4~mv2.jpg`,
      columns: [
        { title: "Hard Floors", body: "Clean hardwood, tile, and laminate with the motorized LED floor brush." },
        { title: "Low-Pile Rugs", body: "Handle everyday surface cleaning with the appropriate mode." },
        { title: "Furniture & Upholstery", body: "Switch to handheld mode for sofas and cushions." },
        { title: "Tight Spaces", body: "Use the crevice tool for corners, edges, and narrow gaps." },
        { title: "Cars & Stairs", body: "Enjoy cordless convenience for cleaning beyond your floors." },
      ],
    },
    specs: [
      { label: "Model", value: "TC-100" },
      { label: "Product Type", value: "Cordless Stick Vacuum" },
      { label: "Weight", value: "5.4 lbs (2.47 kg), with battery" },
      { label: "Battery", value: "22.2V Lithium-Ion, detachable" },
      { label: "Runtime", value: "Up to 45 min (ECO) / Approx. 25 min (BOOST)" },
      { label: "Charging Time", value: "Approx. 5.5 hours" },
      { label: "Cleaning Modes", value: "ECO / BOOST" },
      { label: "Dust Cup Capacity", value: "600mL (20 fl oz)" },
      { label: "Display", value: "Digital Battery % and Mode Display" },
      { label: "Surfaces", value: "Hardwood, tile, laminate, low-pile rugs" },
      { label: "Dimensions", value: "Approx. 9.8 × 12.2 × 45.7 in" },
      { label: "Charger Input", value: "100–240V AC" },
      { label: "Certifications", value: "cSGSus (US & Canada), FCC" },
    ],
  },
  "tc-500": {
    slug: "tc-500",
    model: "TC-500",
    title: "TIDEA TC-500 Self-Emptying Cordless Vacuum",
    price: "$299.99",
    status: "coming-soon",
    tagline: "Dock It. It Empties Itself.",
    description:
      "Enjoy a more effortless cleaning experience with the TIDEA TC-500. Its self-emptying base automatically collects dust while charging your vacuum, so it's always ready for your next clean.",
    mainImage: `${imageBase}/eeafbb_b85f1af1460c41d58cb24c35ae9fa59f~mv2.png`,
    gallery: [
      `${imageBase}/eeafbb_b85f1af1460c41d58cb24c35ae9fa59f~mv2.png`,
      `${imageBase}/eeafbb_f3b6efd730d04a73b0513f6fb6754e9f~mv2.png`,
      `${imageBase}/eeafbb_ffb28d287a6443378353cedec3b8c16d~mv2.png`,
    ],
    includesIntro: "A complete set of accessories helps you tackle different cleaning tasks around your home.",
    includes: [
      "Crevice Tool with Extension",
      "2-in-1 Dusting Brush",
      "Powered Mattress Tool",
      "Soft Roller Brush",
      "Small Brush",
      "Accessory Holders",
    ],
    features: [
      {
        title: "Self-Emptying Base",
        body: "Simply return the vacuum to its base after cleaning. Dust is automatically transferred from the dust cup into the base, reducing direct contact with dirt and mess.",
        image: `${imageBase}/eeafbb_b85f1af1460c41d58cb24c35ae9fa59f~mv2.png`,
      },
      {
        title: "Convenient Charging",
        body: "The self-emptying base charges your vacuum at the same time. Just dock it after use and pick it up when you're ready to clean again.",
        image: `${imageBase}/eeafbb_98cdf9c802e046f9adeaea466043a28f~mv2.png`,
      },
      {
        title: "Smart AUTO Mode",
        body: "The AUTO mode senses floor surfaces and automatically adjusts suction power as you move between hard floors and rugs.",
        image: `${imageBase}/eeafbb_8da72f364b11414fb87777e06386aed1~mv2.png`,
      },
      {
        title: "Clear Dust Cup & Full-Bin Alert",
        body: "The transparent dust cup lets you see collected dirt at a glance, while the display alerts you when it's time to empty it.",
        image: `${imageBase}/eeafbb_8e608eb645f74e02b62832f91d695dd4~mv2.png`,
      },
      {
        title: "Designed for Everyday Convenience",
        body: "LED headlights illuminate hidden dust, while the folding wand makes it easier to reach under beds and sofas without bending or kneeling.",
        image: `${imageBase}/eeafbb_b09eddf010d2442491a88af28619dc9e~mv2.png`,
      },
    ],
    runtimeTitle: "Up to 42 Minutes of Runtime",
    runtimes: [
      { minutes: "42", mode: "ECO", body: "Enjoy extended runtime for everyday cleaning and larger areas." },
      { minutes: "24", mode: "AUTO", body: "Automatically adjusts suction power based on the floor surface for balanced cleaning." },
      { minutes: "10", mode: "BOOST", body: "Provides increased suction power for tackling more demanding cleaning tasks." },
    ],
    specs: [
      { label: "Model", value: "TC-500" },
      { label: "Product Type", value: "Self-Emptying Cordless Vacuum" },
      { label: "Cleaning Modes", value: "ECO / AUTO / BOOST" },
      { label: "Runtime", value: "Up to 42 min (ECO)" },
      { label: "Charging Time", value: "Approximately 5 hours" },
      { label: "Dust Cup Capacity", value: "600 mL max." },
      { label: "Floor Head", value: "Powered floor head with LED headlights" },
      { label: "Cleaning Width", value: "Over 210 mm / 8.3 in" },
      { label: "Wand", value: "610 mm / 24 in folding aluminum wand" },
      { label: "Battery", value: "29.6 V lithium-ion" },
      { label: "Charger Input", value: "100–240 V AC" },
      { label: "Plug Type", value: "North American plug" },
      { label: "Complete Set Net Weight", value: "7 kg / 15.4 lb" },
      { label: "Gross Weight", value: "7.9 kg / 17.4 lb" },
    ],
  },
  "tc-200": {
    slug: "tc-200",
    model: "TC-200",
    title: "TIDEA TC-200 2-in-1 Wet & Dry Cordless Vacuum",
    price: "$299.99",
    status: "coming-soon",
    tagline: "One Vacuum. Two Ways to Clean.",
    description:
      "Switch between powerful vacuuming and convenient mopping with two interchangeable motorized floor heads. Designed to handle everyday messes across hard floors, rugs, and more.",
    mainImage: `${imageBase}/eeafbb_e0034b6c1fb64fbea102934eeb88b05e~mv2.png`,
    gallery: [
      `${imageBase}/eeafbb_e0034b6c1fb64fbea102934eeb88b05e~mv2.png`,
      `${imageBase}/eeafbb_49322f1621e74f03961c5d9e27b50998~mv2.png`,
      `${imageBase}/eeafbb_551d2be8a0de4430b895606dd394c769~mv2.png`,
    ],
    includesIntro: "Everything you need for versatile home cleaning.",
    includes: [
      "TC-200 Main Vacuum Unit",
      "Motorized Bristle Floor Head",
      "Electric Mop Floor Head",
      "Microfiber Mop Pads",
      "2-in-1 Dusting Brush",
      "Extended Crevice Tool",
      "Cleaning Hook Brush",
      "Folding Aluminum Wand",
      "Charging Adapter",
    ],
    features: [
      {
        title: "2-in-1 Wet & Dry Cleaning",
        body: "Switch between vacuuming and mopping with two interchangeable motorized floor heads. Tackle dust, debris, and everyday floor messes with one versatile machine.",
        image: `${imageBase}/eeafbb_e0034b6c1fb64fbea102934eeb88b05e~mv2.png`,
      },
      {
        title: "Powerful Brushless Motor",
        body: "Powered by a high-speed brushless motor reaching up to 92,000 RPM, with up to 360W of rated power for effective everyday cleaning.",
        image: `${imageBase}/eeafbb_d2608be2ccbd48c68a4b9d0dcd0e1ab9~mv2.png`,
      },
      {
        title: "Advanced Filtration System",
        body: "A dual-cyclone filtration system and EPA 10 HEPA filter help capture dust and debris. The transparent 600mL dust cup makes it easy to monitor collected dirt.",
        image: `${imageBase}/eeafbb_ca77dfacb3ad472eb7779c87d9648d0b~mv2.png`,
      },
      {
        title: "Long-Lasting Battery",
        body: "Enjoy up to 42 minutes of runtime on ECO mode. The 22.2V lithium-ion battery delivers dependable cordless cleaning throughout your home.",
        image: `${imageBase}/eeafbb_76b55f6a2c124dd2bbcd148da7b182f3~mv2.png`,
      },
      {
        title: "Versatile Floor Heads & Accessories",
        body: "Two motorized floor heads, LED lighting, and a folding aluminum wand make it easier to clean different surfaces and reach more areas around your home.",
        image: `${imageBase}/eeafbb_5cce7dc438b34b2ea1d17796d357486b~mv2.png`,
      },
    ],
    runtimeTitle: "Up to 42 Minutes of Runtime",
    runtimes: [
      { minutes: "42", mode: "ECO", body: "Enjoy extended runtime for everyday cleaning and larger areas." },
      { minutes: "24", mode: "AUTO", body: "Automatically adjusts suction power based on the floor surface for balanced cleaning." },
      { minutes: "10", mode: "BOOST", body: "Provides increased suction power for tackling more demanding cleaning tasks." },
    ],
    lifestyle: {
      title: "Two Floor Heads. More Cleaning Possibilities.",
      image: `${imageBase}/eeafbb_e0034b6c1fb64fbea102934eeb88b05e~mv2.png`,
      columns: [
        { title: "Powerful Dry Vacuuming", body: "The motorized bristle floor head picks up everyday dust and debris from hard floors and rugs. Built-in LED lights help reveal hidden dirt in darker areas." },
        { title: "Convenient Wet Mopping", body: "The powered mop head features a built-in water tank and automatic water delivery system to keep the microfiber pads consistently damp while cleaning." },
      ],
    },
    specs: [
      { label: "Model", value: "TC-200" },
      { label: "Product Type", value: "Wet & Dry Cordless Vacuum" },
      { label: "Rated Voltage", value: "22.2V DC" },
      { label: "Maximum Rated Power", value: "360W" },
      { label: "Main Motor", value: "GRAM RS:55 Brushless" },
      { label: "Motor Speed", value: "Up to 92,000 RPM" },
      { label: "Cleaning Modes", value: "ECO / AUTO / BOOST" },
      { label: "Runtime", value: "≥42 / ≥24 / ≥10 min" },
      { label: "Charging Time", value: "5–6 hours" },
      { label: "Battery", value: "6 × 21700 lithium-ion cells" },
      { label: "Battery Capacity", value: "4,000mAh" },
      { label: "Dust Cup Capacity", value: "600mL" },
      { label: "Water Tank Capacity", value: "380mL" },
      { label: "Filtration", value: "Dual Cyclone + EPA 10 HEPA" },
      { label: "Mop Head Speed", value: "190 RPM" },
      { label: "Mop Pads", value: "Washable Microfiber" },
      { label: "Floor Head", value: "Motorized Bristle Brush with 5 LEDs" },
      { label: "Wand", value: "650mm Folding Aluminum Tube" },
      { label: "Noise Level", value: "≤79 dB" },
      { label: "Adapter Input", value: "100–240V AC" },
    ],
  },
};

export const collectionProducts = [products["tc-100"], products["tc-200"], products["tc-500"]];

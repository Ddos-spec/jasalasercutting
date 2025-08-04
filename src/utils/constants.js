// constants.js - Data terpusat untuk website laser cutting
// File ini berisi semua data statis yang digunakan di seluruh website

// ===== KONFIGURASI SITUS =====
export const SITE_CONFIG = {
  name: "Jasa Cutting Laser",
  title: "Jasa Laser Cutting Profesional & Akurat #1 indonesia - Akrilik, Kayu, Metal",
  description: "Laser cutting presisi tinggi & pengerjaan cepat di indonesia! Spesialis akrilik, kayu, metal dengan teknologi terdepan. 10+ tahun pengalaman, hasil akurat, garansi kualitas. Melayani Serang, Tangerang, Cilegon.",
  keywords: "jasa laser cutting indonesia, laser cutting serang, laser cutting tangerang, cnc router indonesia, laser fiber cutting, potong akrilik serang, potong kayu tangerang, cutting metal cilegon",
  url: "https://jasalasercutting.com",
  phone: "+62 851 6569 3179",
  whatsapp: "6285165693179",
  email: "info@tepatlaser.com",
  address: "Jl. Raya Serang No. 123, Serang, indonesia 42111",
  businessHours: "Senin - Sabtu, 08:00 - 17:00 WIB",
  author: "Jasa Cutting Laser Team",
  socialMedia: {
    facebook: "https://facebook.com/tepatlaser",
    instagram: "https://instagram.com/tepatlaser",
    youtube: "https://youtube.com/tepatlaser",
    linkedin: "https://linkedin.com/company/tepatlaser"
  }
};

// ===== NAVIGASI UTAMA =====
export const NAVIGATION = [
  {
    name: "Beranda",
    href: "/",
    submenu: null
  },
  {
    name: "Layanan",
    href: "#services",
    submenu: [
      { name: "CNC Router", href: "/jasa-cnc-router" },
      { name: "Laser Fiber", href: "/jasa-laser-fiber" },
      { name: "Laser CO2", href: "/jasa-laser-co2" },
      { name: "Galvo Engraving", href: "/jasa-galvo-engraving" }
    ]
  },
  {
    name: "Material",
    href: "#materials",
    submenu: [
      { name: "Acrylic", href: "/material-acrylic" },
      { name: "Metal/Stainless", href: "/material-metal" },
      { name: "MDF", href: "/material-mdf" },
      { name: "Plywood/Multiplex", href: "/material-ply-wood-multiplex" },
      { name: "PVC", href: "/material-pvc" },
      { name: "ACP", href: "/material-acp" },
      { name: "GRC", href: "/material-grc" }
    ]
  },
  {
    name: "Portfolio",
    href: "/portfolio",
    submenu: null
  },
  {
    name: "Blog",
    href: "/blog",
    submenu: null
  },
  {
    name: "Tentang",
    href: "/about",
    submenu: null
  },
  {
    name: "Kontak",
    href: "/contact",
    submenu: null
  }
];

// ===== LAYANAN UTAMA =====
export const SERVICES = [
  {
    id: "cnc-router",
    name: "CNC Router",
    slug: "jasa-cnc-router",
    description: "Teknologi CNC Router presisi tinggi untuk cutting dan engraving material kayu, MDF, dan plastik dengan hasil sempurna.",
    image: "/images/cncrouter.webp",
    keywords: "cnc router indonesia, cnc router serang, cnc router tangerang, jasa cnc router, cutting kayu presisi, engraving kayu, cnc router murah",
    features: [
      "Presisi hingga 0.1mm",
      "Area kerja 2x3 meter",
      "Multi-material support",
      "Engraving detail tinggi",
      "Finishing halus",
      "Waktu pengerjaan cepat"
    ],
    applications: [
      "Furniture Custom",
      "Signage & Display",
      "Prototype Produk",
      "Dekorasi Interior",
      "Komponen Industri",
      "Kerajinan Kayu"
    ],
    materials: ["Kayu Solid", "MDF", "Plywood", "Acrylic", "HDPE", "PVC Foam"],
    thickness: "1-50mm",
    tolerance: "±0.1mm"
  },
  {
    id: "laser-fiber",
    name: "Laser Fiber",
    slug: "jasa-laser-fiber",
    description: "Teknologi laser fiber tercepat dan paling akurat untuk cutting serta marking berbagai jenis material logam dengan presisi tinggi.",
    image: "/images/laserfiber.webp",
    keywords: "laser fiber indonesia, laser fiber serang, laser fiber tangerang, cutting stainless steel, cutting aluminium, laser marking metal",
    features: [
      "Kecepatan tinggi",
      "Presisi 0.05mm",
      "Efisiensi energi",
      "Marking permanen",
      "Tepi bersih",
      "Minimal heat affected zone"
    ],
    applications: [
      "Industri Manufaktur",
      "Automotif",
      "Elektronik",
      "Arsitektur",
      "Branding Produk",
      "Komponen Presisi"
    ],
    materials: ["Stainless Steel", "Carbon Steel", "Aluminium", "Tembaga", "Brass", "Titanium"],
    thickness: "0.5-20mm",
    tolerance: "±0.05mm"
  },
  {
    id: "laser-co2",
    name: "Laser CO2",
    slug: "jasa-laser-co2",
    description: "Teknologi laser CO2 terdepan untuk cutting dan engraving material non-metal dengan detail yang sempurna dan finishing halus.",
    image: "/images/co2.webp",
    keywords: "laser co2 indonesia, laser co2 serang, cutting acrylic, engraving kayu, laser co2 murah, cutting kain laser",
    features: [
      "Detail tinggi 0.1mm",
      "Finishing halus",
      "Engraving mendalam",
      "Tepi polished",
      "Versatile material",
      "Kecepatan optimal"
    ],
    applications: [
      "Signage & Display",
      "Dekorasi & Furnitur",
      "Fashion & Craft",
      "Packaging & Label",
      "Prototipe & R&D",
      "Souvenir & Hadiah"
    ],
    materials: ["Acrylic", "Kayu", "MDF", "Kain", "Kulit", "Kertas", "Karet"],
    thickness: "0.1-25mm",
    tolerance: "±0.1mm"
  },
  {
    id: "galvo-engraving",
    name: "Galvo Engraving",
    slug: "jasa-galvo-engraving",
    description: "Teknologi galvo laser tercepat untuk engraving detail tinggi pada berbagai material dengan hasil yang tajam dan tahan lama.",
    image: "/images/galvo.webp",
    keywords: "galvo engraving indonesia, galvo engraving serang, laser marking, engraving logo, serial number engraving, qr code laser",
    features: [
      "Kecepatan super tinggi",
      "Detail 0.05mm",
      "Marking permanen",
      "Tanpa contact",
      "Hasil tahan lama",
      "Batch processing"
    ],
    applications: [
      "Branding Produk",
      "Serial Number & Barcode",
      "Personalisasi",
      "Keamanan & Identifikasi",
      "Instrumen & Komponen",
      "Seni & Kerajinan"
    ],
    materials: ["Logam", "Plastik", "Kayu", "Keramik", "Kaca", "Kulit"],
    thickness: "Surface marking",
    tolerance: "±0.05mm"
  }
];

// ===== MATERIAL YANG DILAYANI =====
export const MATERIALS = [
  {
    id: "acrylic",
    name: "Acrylic",
    slug: "material-acrylic",
    description: "Material transparan premium dengan kejernihan tinggi, ideal untuk display, signage, dan aplikasi dekoratif dengan hasil cutting yang halus.",
    image: "/images/Acrylic.webp",
    keywords: "acrylic cutting indonesia, potong acrylic serang, acrylic transparan, plexiglass cutting, acrylic sheet",
    thickness: "1-50mm",
    applications: ["Display & Showcase", "Signage Premium", "Partisi Ruangan", "Dekorasi Interior", "Prototype Produk"],
    advantages: ["Transparansi tinggi", "Mudah dibentuk", "Tahan UV", "Ringan namun kuat", "Mudah dibersihkan"]
  },
  {
    id: "metal",
    name: "Metal/Stainless Steel",
    slug: "material-metal",
    description: "Material logam berkualitas tinggi dengan ketahanan korosi superior, cocok untuk aplikasi industri dan arsitektur yang membutuhkan kekuatan maksimal.",
    image: "/images/metal.webp",
    keywords: "stainless steel cutting, cutting metal indonesia, laser cutting besi, potong stainless steel serang, metal fabrication",
    thickness: "0.5-20mm",
    applications: ["Komponen Industri", "Arsitektur Modern", "Peralatan Dapur", "Otomotif", "Elektronik"],
    advantages: ["Anti karat", "Kekuatan tinggi", "Tahan panas", "Higienis", "Recyclable"]
  },
  {
    id: "mdf",
    name: "MDF (Medium Density Fiberboard)",
    slug: "material-mdf",
    description: "Material kayu engineered dengan kepadatan tinggi dan permukaan halus, sempurna untuk furniture dan aplikasi interior yang membutuhkan finishing premium.",
    image: "/images/mdf.webp",
    keywords: "mdf cutting indonesia, potong mdf serang, mdf furniture, medium density fiberboard, cutting kayu mdf",
    thickness: "3-30mm",
    applications: ["Furniture Custom", "Kitchen Set", "Dekorasi Dinding", "Speaker Box", "Prototype"],
    advantages: ["Permukaan halus", "Stabil dimensi", "Mudah finishing", "Harga ekonomis", "Konsisten kualitas"]
  },
  {
    id: "plywood",
    name: "Plywood/Multiplex",
    slug: "material-ply-wood-multiplex",
    description: "Material kayu lapis berkualitas dengan kekuatan dan stabilitas dimensi superior, ideal untuk konstruksi dan furniture yang membutuhkan daya tahan tinggi.",
    image: "/images/Ply Wood.webp",
    keywords: "plywood cutting indonesia, multiplex cutting serang, kayu lapis, marine plywood, cutting triplek",
    thickness: "4-40mm",
    applications: ["Konstruksi Ringan", "Furniture Outdoor", "Packaging", "Dekorasi", "Base Material"],
    advantages: ["Kuat & ringan", "Stabil dimensi", "Tahan kelembaban", "Mudah dikerjakan", "Ekonomis"]
  },
  {
    id: "pvc",
    name: "PVC",
    slug: "material-pvc",
    description: "Material plastik berkualitas tinggi dengan fleksibilitas dan daya tahan optimal, cocok untuk signage outdoor dan aplikasi yang membutuhkan ketahanan cuaca.",
    image: "/images/pvc.webp",
    keywords: "pvc cutting indonesia, potong pvc serang, pvc board, pvc foam, cutting plastik pvc",
    thickness: "1-20mm",
    applications: ["Signage Outdoor", "Display Portable", "Partisi Ringan", "Prototype", "Kemasan"],
    advantages: ["Tahan cuaca", "Ringan", "Mudah dibentuk", "Tahan kimia", "Ekonomis"]
  },
  {
    id: "acp",
    name: "ACP (Aluminium Composite Panel)",
    slug: "material-acp",
    description: "Panel komposit aluminium premium dengan core PE/FR, ideal untuk fasad bangunan dan signage eksterior yang membutuhkan durabilitas tinggi.",
    image: "/images/acp.webp",
    keywords: "acp cutting indonesia, aluminium composite panel, acp facade, cutting acp serang, acp signage",
    thickness: "3-6mm",
    applications: ["Fasad Bangunan", "Signage Eksterior", "Cladding", "Canopy", "Interior Premium"],
    advantages: ["Ringan & kuat", "Tahan cuaca", "Flat surface", "Fire retardant", "Mudah maintenance"]
  },
  {
    id: "grc",
    name: "GRC (Glassfibre Reinforced Concrete)",
    slug: "material-grc",
    description: "Material komposit semen yang diperkuat serat kaca, memberikan kekuatan tinggi dan fleksibilitas desain untuk ornamen arsitektur yang tahan lama.",
    image: "/images/grc.webp",
    keywords: "grc cutting indonesia, glassfibre reinforced concrete, ornamen grc, cutting grc serang, grc facade",
    thickness: "10-50mm",
    applications: ["Ornamen Bangunan", "Fasad Artistik", "Kolom Dekoratif", "Relief Dinding", "Elemen Arsitektur"],
    advantages: ["Sangat kuat", "Tahan api", "Fleksibel bentuk", "Tahan cuaca", "Lightweight"]
  }
];

// ===== PORTFOLIO PROYEK =====
export const PORTFOLIO = [
  {
    id: 1,
    title: "Cutting Plat Besi Custom",
    category: "Laser Fiber",
    service: "Laser Fiber Cutting",
    material: "Plat Besi 5mm",
    image: "/images/metal.webp",
    client: "PT. Industri Manufaktur",
    description: "Pemotongan plat besi custom dengan presisi tinggi untuk komponen industri"
  },
  {
    id: 2,
    title: "Engraving Logo Perusahaan",
    category: "Galvo Engraving",
    service: "Galvo Laser Engraving",
    material: "Stainless Steel",
    image: "/images/engraving.webp",
    client: "CV. Karya Mandiri",
    description: "Engraving logo perusahaan dengan detail tinggi dan hasil tahan lama"
  },
  {
    id: 3,
    title: "Cutting Akrilik Dekoratif",
    category: "Laser CO2",
    service: "CO2 Laser Cutting",
    material: "Akrilik 8mm",
    image: "/images/Acrylic.webp",
    client: "Interior Design Studio",
    description: "Pemotongan akrilik dekoratif dengan finishing halus untuk interior premium"
  },
  {
    id: 4,
    title: "CNC Router Kayu Jati",
    category: "CNC Router",
    service: "CNC Router Machining",
    material: "Kayu Jati Solid",
    image: "/images/mdf.webp",
    client: "Furniture Artisan",
    description: "Pengerjaan kayu jati dengan detail ukiran kompleks untuk furniture custom"
  },
  {
    id: 5,
    title: "Cutting Plat Aluminium",
    category: "Laser Fiber",
    service: "Fiber Laser Cutting",
    material: "Aluminium 3mm",
    image: "/images/furnituremetal.webp",
    client: "PT. Otomotif Nusantara",
    description: "Pemotongan plat aluminium presisi untuk komponen otomotif"
  },
  {
    id: 6,
    title: "Engraving Kayu Mahoni",
    category: "Laser CO2",
    service: "CO2 Laser Engraving",
    material: "Kayu Mahoni",
    image: "/images/singagehote.webp",
    client: "Souvenir Premium",
    description: "Engraving detail pada kayu mahoni untuk souvenir eksklusif"
  },
  {
    id: 7,
    title: "Display Acrylic Toko",
    category: "Laser CO2",
    service: "CO2 Laser Cutting",
    material: "Acrylic Clear 5mm",
    image: "/images/displyacrylic.webp",
    client: "Retail Store Chain",
    description: "Pembuatan display acrylic transparan untuk showcase produk retail"
  },
  {
    id: 8,
    title: "Prototype Mesin Industri",
    category: "CNC Router",
    service: "CNC Router + Laser",
    material: "Multi Material",
    image: "/images/prototype.webp",
    client: "Engineering Consultant",
    description: "Pembuatan prototype mesin industri dengan kombinasi berbagai material"
  }
];

// ===== PORTFOLIO PROYEK LENGKAP =====
export const PORTFOLIO_PROJECTS = [
  {
    id: 1,
    title: "Cutting Plat Besi Custom",
    category: "Laser Fiber",
    client: "PT. Industri Manufaktur",
    material: "Plat Besi 5mm",
    technique: "Laser Fiber Cutting",
    image: "/images/metal.webp",
    description: "Proyek pemotongan plat besi custom dengan ketebalan 5mm menggunakan teknologi laser fiber. Hasil potongan sangat presisi dengan toleransi ±0.1mm, cocok untuk komponen industri yang membutuhkan akurasi tinggi.",
    gallery: [
      "/images/stainlesssteel (1).webp",
      "/images/stainlesssteel (2).webp",
      "/images/stainlesssteel (3).webp",
      "/images/stainlesssteel (4).webp"
    ],
    specifications: {
      material: "Plat Besi SS400",
      thickness: "5mm",
      tolerance: "±0.1mm",
      quantity: "500 pcs",
      deliveryTime: "3 hari"
    }
  },
  {
    id: 2,
    title: "Engraving Logo Perusahaan",
    category: "Galvo Engraving",
    client: "CV. Karya Mandiri",
    material: "Stainless Steel",
    technique: "Galvo Laser Engraving",
    image: "/images/engraving.webp",
    description: "Engraving logo perusahaan dengan teknologi galvo laser pada material stainless steel. Hasil engraving sangat detail dan tahan lama, cocok untuk branding perusahaan yang berkualitas tinggi.",
    gallery: [
      "/images/stainlesssteel (1).webp",
      "/images/stainlesssteel (2).webp",
      "/images/stainlesssteel (3).webp"
    ],
    specifications: {
      material: "Stainless Steel 304",
      depth: "0.05mm",
      size: "50x50mm",
      quantity: "1000 pcs",
      deliveryTime: "2 hari"
    }
  },
  {
    id: 3,
    title: "Cutting Akrilik Dekoratif",
    category: "Laser CO2",
    client: "Interior Design Studio",
    material: "Akrilik 8mm",
    technique: "CO2 Laser Cutting",
    image: "/images/Acrylic.webp",
    description: "Pemotongan akrilik dekoratif dengan ketebalan 8mm menggunakan laser CO2. Menghasilkan potongan yang halus dan bersih tanpa crack, sempurna untuk aplikasi dekorasi interior yang elegan.",
    gallery: [
      "/images/akrilik (1).webp",
      "/images/akrilik (2).webp",
      "/images/akrilik (3).webp",
      "/images/akrilik (4).webp"
    ],
    specifications: {
      material: "Acrylic Cast Clear",
      thickness: "8mm",
      tolerance: "±0.05mm",
      quantity: "50 pcs",
      deliveryTime: "1 hari"
    }
  },
  {
    id: 4,
    title: "CNC Router Kayu Jati",
    category: "CNC Router",
    client: "Furniture Artisan",
    material: "Kayu Jati Solid",
    technique: "CNC Router Machining",
    image: "/images/mdf.webp",
    description: "Pengerjaan kayu jati solid menggunakan CNC router dengan presisi tinggi. Menghasilkan detail ukiran dan bentuk yang kompleks sesuai design custom untuk furniture berkualitas premium.",
    gallery: [
      "/images/mdf (1).webp",
      "/images/mdf (2).webp",
      "/images/mdf (3).webp",
      "/images/mdf (4).webp"
    ],
    specifications: {
      material: "Kayu Jati Grade A",
      thickness: "25mm",
      tolerance: "±0.1mm",
      quantity: "20 pcs",
      deliveryTime: "5 hari"
    }
  },
  {
    id: 5,
    title: "Cutting Plat Aluminium",
    category: "Laser Fiber",
    client: "PT. Otomotif Nusantara",
    material: "Aluminium 3mm",
    technique: "Fiber Laser Cutting",
    image: "/images/furnituremetal.webp",
    description: "Pemotongan plat aluminium dengan ketebalan 3mm untuk komponen otomotif. Menggunakan laser fiber yang menghasilkan potongan bersih tanpa burr dan presisi tinggi sesuai standar industri otomotif.",
    gallery: [
      "/images/stainlesssteel (1).webp",
      "/images/stainlesssteel (2).webp",
      "/images/stainlesssteel (3).webp"
    ],
    specifications: {
      material: "Aluminium 6061",
      thickness: "3mm",
      tolerance: "±0.05mm",
      quantity: "200 pcs",
      deliveryTime: "2 hari"
    }
  },
  {
    id: 6,
    title: "Engraving Kayu Mahoni",
    category: "Laser CO2",
    client: "Souvenir Premium",
    material: "Kayu Mahoni",
    technique: "CO2 Laser Engraving",
    image: "/images/singagehote.webp",
    description: "Engraving detail pada kayu mahoni premium menggunakan laser CO2. Menghasilkan detail ukiran yang halus dan artistik, cocok untuk souvenir eksklusif dan produk kerajinan berkualitas tinggi.",
    gallery: [
      "/images/mdf (1).webp",
      "/images/mdf (2).webp",
      "/images/mdf (3).webp"
    ],
    specifications: {
      material: "Kayu Mahoni Premium",
      depth: "1mm",
      size: "100x150mm",
      quantity: "100 pcs",
      deliveryTime: "3 hari"
    }
  }
];

// ===== TESTIMONI KLIEN =====
export const TESTIMONIALS = [
  {
    id: 1,
    name: "Budi Santoso",
    company: "PT. Maju Bersama",
    rating: 5,
    content: "Pelayanan sangat memuaskan! Hasil cutting stainless steel sangat presisi dan tepat waktu. Tim LaserCut Pro sangat profesional dan responsif.",
    image: "/images/budisantoso.webp",
    project: "Cutting Komponen Industri",
    location: "Jakarta"
  },
  {
    id: 2,
    name: "Sari Dewi",
    company: "Interior Design Studio",
    rating: 5,
    content: "Kualitas cutting acrylic luar biasa! Detail yang rumit bisa dikerjakan dengan sempurna. Sangat recommended untuk project interior premium.",
    image: "/images/Sari Dewi.webp",
    project: "Display Acrylic Custom",
    location: "Bogor"
  },
  {
    id: 3,
    name: "Ahmad Rizki",
    company: "Furniture Artisan",
    rating: 5,
    content: "CNC Router untuk kayu jati hasilnya fantastis! Detail ukiran sangat halus dan presisi. Pasti akan order lagi untuk project selanjutnya.",
    image: "/images/Ahmad Rizki.webp",
    project: "Furniture Kayu Custom",
    location: "Depok"
  }
];

// ===== FAQ (FREQUENTLY ASKED QUESTIONS) =====
export const FAQ = [
  {
    id: 1,
    question: "Berapa lama waktu pengerjaan laser cutting?",
    answer: "Waktu pengerjaan bervariasi tergantung kompleksitas dan jumlah. Untuk project sederhana biasanya 1-3 hari kerja, project kompleks 3-7 hari kerja. Kami selalu memberikan estimasi waktu yang akurat setelah evaluasi design."
  },
  {
    id: 2,
    question: "Apakah bisa cutting material dengan ketebalan di atas 20mm?",
    answer: "Ya, kami bisa menangani material dengan ketebalan hingga 50mm tergantung jenis materialnya. Untuk metal maksimal 20mm, untuk kayu dan acrylic bisa hingga 50mm. Konsultasikan kebutuhan spesifik Anda dengan tim kami."
  },
  {
    id: 3,
    question: "Bagaimana cara mengirim file design untuk quote?",
    answer: "Anda bisa mengirim file design melalui WhatsApp, email, atau upload saat konsultasi. Format yang diterima: .ai, .dxf, .pdf, .cdr, .dwg. Pastikan file sudah dalam format vector untuk hasil optimal."
  },
  {
    id: 4,
    question: "Apakah ada minimum order quantity (MOQ)?",
    answer: "Tidak ada MOQ untuk sebagian besar project. Kami melayani dari 1 piece hingga ribuan pieces. Harga akan lebih ekonomis untuk quantity besar, namun project kecil tetap kami layani dengan baik."
  },
  {
    id: 5,
    question: "Bagaimana sistem pembayaran yang tersedia?",
    answer: "Kami menerima pembayaran via transfer bank, cash, dan e-wallet. Untuk project besar biasanya DP 50% dan pelunasan saat selesai. Untuk project kecil bisa langsung lunas saat pengambilan."
  },
  {
    id: 6,
    question: "Apakah menyediakan layanan pickup dan delivery?",
    answer: "Ya, kami menyediakan layanan pickup dan delivery untuk area Jabodetabek. Biaya delivery disesuaikan dengan jarak dan berat material. Untuk area luar Jabodetabek bisa via ekspedisi."
  },
  {
    id: 7,
    question: "Bagaimana jika hasil tidak sesuai ekspektasi?",
    answer: "Kami memberikan garansi kualitas 100%. Jika hasil tidak sesuai spesifikasi yang disepakati, kami akan mengulang pengerjaan tanpa biaya tambahan. Kepuasan klien adalah prioritas utama kami."
  },
  {
    id: 8,
    question: "Apakah bisa konsultasi design sebelum produksi?",
    answer: "Tentu saja! Kami menyediakan konsultasi design gratis. Tim ahli kami akan membantu optimasi design untuk hasil cutting terbaik dan efisiensi biaya. Konsultasi bisa via WhatsApp atau datang langsung."
  }
];

// ===== PESAN WHATSAPP =====
export const WHATSAPP_MESSAGES = {
  default: "Halo, saya tertarik dengan jasa laser cutting. Bisa konsultasi gratis?",
  cnc: "Halo, saya butuh jasa CNC Router untuk material kayu/MDF. Bisa konsultasi?",
  fiber: "Halo, saya perlu laser fiber untuk cutting metal. Bisa diskusi project saya?",
  co2: "Halo, saya tertarik laser CO2 untuk cutting acrylic/kayu. Bisa konsultasi?",
  engraving: "Halo, saya butuh jasa galvo engraving untuk marking produk. Bisa bantuan?",
  quote: "Halo, saya mau request quote untuk project laser cutting. Bisa dibantu?",
  material: "Halo, saya mau tanya tentang material yang bisa di-cutting. Bisa info?",
  portfolio: "Halo, saya sudah lihat portfolio Anda. Bisa diskusi project serupa?",
  urgent: "Halo, saya ada project urgent laser cutting. Bisa dibantu segera?"
};

// ===== DATA BLOG POSTS =====
export const BLOG_POSTS = [
  {
    id: 1,
    title: "Panduan Lengkap Memilih Material untuk Laser Cutting",
    slug: "panduan-memilih-material-laser-cutting",
    excerpt: "Pelajari cara memilih material yang tepat untuk project laser cutting Anda. Tips dari para ahli untuk hasil optimal.",
    category: "Tutorial",
    image: "/images/Acrylic.webp",
    publishDate: "2025-01-15", // <-- INI DIA YANG HILANG
    readTime: "8 menit baca",   // <-- INI JUGA HILANG
    author: "Tim LaserCut Pro",
    tags: ["material", "tutorial", "tips", "laser cutting"],
    content: `
      <h2>Mengapa Pemilihan Material Penting?</h2>
      <p>Pemilihan material yang tepat adalah kunci sukses dalam project laser cutting. Setiap material memiliki karakteristik unik yang mempengaruhi hasil akhir, waktu pengerjaan, dan biaya produksi.</p>
      
      <h3>Faktor-Faktor yang Perlu Dipertimbangkan</h3>
      <ul>
        <li><strong>Ketebalan Material:</strong> Sesuaikan dengan kemampuan mesin dan kebutuhan aplikasi</li>
        <li><strong>Jenis Aplikasi:</strong> Indoor, outdoor, atau aplikasi khusus</li>
        <li><strong>Budget:</strong> Seimbangkan antara kualitas dan biaya</li>
        <li><strong>Finishing:</strong> Apakah perlu finishing tambahan atau tidak</li>
      </ul>
      
      <h3>Material Populer dan Aplikasinya</h3>
      <h4>1. Acrylic</h4>
      <p>Ideal untuk display, signage, dan dekorasi interior. Memberikan hasil cutting yang sangat halus dengan tepi yang jernih.</p>
      
      <h4>2. Stainless Steel</h4>
      <p>Cocok untuk aplikasi industri, kitchen set, dan komponen yang membutuhkan ketahanan korosi tinggi.</p>
      
      <h4>3. MDF</h4>
      <p>Pilihan ekonomis untuk furniture, prototype, dan aplikasi interior yang akan difinishing dengan cat atau laminate.</p>
      
      <h3>Tips Optimasi Design</h3>
      <p>Untuk mendapatkan hasil terbaik, pastikan design Anda sudah dioptimasi untuk laser cutting. Hindari detail yang terlalu kecil dan pastikan gap antar elemen cukup untuk proses cutting.</p>
      
      <h3>Konsultasi dengan Ahli</h3>
      <p>Jika masih ragu dalam memilih material, jangan hesitate untuk berkonsultasi dengan tim ahli kami. Kami akan membantu Anda memilih material yang paling sesuai dengan kebutuhan dan budget project Anda.</p>
    `,
    category: "Tutorial",
    image: "/images/Acrylic.webp",
    publishDate: "2025-01-15",
    readTime: "8 menit baca",
    tags: ["material", "tutorial", "tips", "laser cutting"],
    author: "Tim LaserCut Pro"
  },
  {
    id: 2,
    title: "5 Keunggulan Teknologi Laser Fiber untuk Industri Metal",
    slug: "keunggulan-laser-fiber-industri-metal",
    excerpt: "Mengapa laser fiber menjadi pilihan utama industri metal? Simak 5 keunggulan utama yang membuatnya unggul.",
    category: "Teknologi",
    image: "/images/laserfiber.webp",
    publishDate: "2025-01-12", // <-- INI DIA YANG HILANG
    readTime: "6 menit baca",   // <-- INI JUGA HILANG
    author: "Ahmad Rizki",
    tags: ["laser fiber", "teknologi", "industri", "metal"],
    content: `
      <h2>Revolusi Teknologi Laser Fiber</h2>
      <p>Teknologi laser fiber telah merevolusi industri metal cutting dengan memberikan solusi yang lebih cepat, presisi, dan efisien dibandingkan metode konvensional.</p>
      
      <h3>1. Kecepatan Cutting yang Luar Biasa</h3>
      <p>Laser fiber mampu memotong material metal dengan kecepatan hingga 3x lebih cepat dibandingkan laser CO2. Hal ini sangat menguntungkan untuk production volume tinggi.</p>
      
      <h3>2. Presisi Tinggi hingga 0.05mm</h3>
      <p>Toleransi yang sangat ketat memungkinkan pembuatan komponen presisi untuk industri otomotif, elektronik, dan aerospace.</p>
      
      <h3>3. Efisiensi Energi Superior</h3>
      <p>Konsumsi listrik laser fiber 50% lebih hemat dibandingkan teknologi laser lainnya, menghasilkan biaya operasional yang lebih rendah.</p>
      
      <h3>4. Minimal Heat Affected Zone (HAZ)</h3>
      <p>Area yang terkena panas sangat minimal, sehingga tidak mengubah struktur material dan menghasilkan potongan yang bersih.</p>
      
      <h3>5. Maintenance Rendah</h3>
      <p>Teknologi solid-state membuat laser fiber membutuhkan maintenance minimal dan memiliki lifetime yang lebih panjang.</p>
      
      <h3>Aplikasi Industri</h3>
      <p>Laser fiber sangat cocok untuk industri otomotif, elektronik, aerospace, dan manufacturing yang membutuhkan presisi tinggi dan volume produksi besar.</p>
    `,
    category: "Teknologi",
    image: "/images/laserfiber.webp",
    publishDate: "2025-01-12",
    readTime: "6 menit baca",
    tags: ["laser fiber", "teknologi", "industri", "metal"],
    author: "Ahmad Rizki"
  },
  {
    id: 3,
    title: "Cara Optimasi File Design untuk Laser Cutting",
    slug: "optimasi-file-design-laser-cutting",
    excerpt: "Tips praktis untuk mempersiapkan file design agar hasil laser cutting optimal dan biaya produksi efisien.",
    category: "Tutorial",
    image: "/images/prototype.webp",
    publishDate: "2025-01-10",
    readTime: "10 menit baca",
    author: "Sari Dewi",
    tags: ["design", "tutorial", "optimasi", "tips"],
    content: `
      <h2>Persiapan File Design yang Benar</h2>
      <p>File design yang baik adalah 50% dari kesuksesan project laser cutting. Persiapan yang tepat akan menghemat waktu, biaya, dan menghasilkan kualitas terbaik.</p>
      
      <h3>Format File yang Direkomendasikan</h3>
      <ul>
        <li><strong>.DXF:</strong> Format terbaik untuk laser cutting, preserve vector data</li>
        <li><strong>.AI:</strong> Adobe Illustrator, pastikan sudah di-outline</li>
        <li><strong>.PDF:</strong> Pastikan dalam format vector, bukan raster</li>
        <li><strong>.DWG:</strong> AutoCAD format, cocok untuk design teknis</li>
      </ul>
      
      <h3>Aturan Design yang Harus Diperhatikan</h3>
      <h4>1. Ketebalan Garis (Stroke)</h4>
      <p>Gunakan stroke 0.1mm atau hairline untuk cutting line. Garis yang terlalu tebal akan mempengaruhi akurasi cutting.</p>
      
      <h4>2. Warna Coding</h4>
      <ul>
        <li>Merah: Cutting line</li>
        <li>Biru: Engraving line</li>
        <li>Hitam: Marking/etching</li>
      </ul>
      
      <h4>3. Minimum Gap dan Detail</h4>
      <p>Pastikan jarak minimum antar elemen minimal 1mm. Detail yang terlalu kecil mungkin tidak bisa di-cutting dengan baik.</p>
      
      <h3>Optimasi untuk Efisiensi Biaya</h3>
      <h4>Nesting Layout</h4>
      <p>Atur layout design untuk memaksimalkan penggunaan material dan meminimalkan waste. Ini akan mengurangi biaya material secara signifikan.</p>
      
      <h4>Kerf Compensation</h4>
      <p>Pertimbangkan kerf (lebar potongan laser) dalam design, terutama untuk part yang harus fit dengan presisi tinggi.</p>
      
      <h3>Common Mistakes yang Harus Dihindari</h3>
      <ul>
        <li>File dalam format raster/bitmap</li>
        <li>Text yang belum di-outline</li>
        <li>Duplicate lines atau overlapping paths</li>
        <li>Scale yang tidak sesuai (pastikan dalam mm)</li>
        <li>Layer yang tidak terorganisir</li>
      </ul>
      
      <h3>Quality Check Sebelum Produksi</h3>
      <p>Sebelum memulai cutting, tim kami akan melakukan quality check pada file design dan memberikan feedback jika ada yang perlu diperbaiki.</p>
    `,
    category: "Tutorial",
    image: "/images/prototype.webp",
    publishDate: "2025-01-10",
    readTime: "10 menit baca",
    tags: ["design", "tutorial", "optimasi", "tips"],
    author: "Sari Dewi"
  },
  {
    id: 4,
    title: "Perbandingan CNC Router vs Laser Cutting untuk Kayu",
    slug: "perbandingan-cnc-router-vs-laser-cutting-kayu",
    excerpt: "Mana yang lebih baik untuk project kayu Anda? Simak perbandingan lengkap CNC Router dan Laser Cutting.",
    category: "Perbandingan",
    image: "/images/cncrouter.webp",
    publishDate: "2025-01-08",
    readTime: "7 menit baca",
    author: "Budi Santoso",
    tags: ["cnc router", "laser cutting", "kayu", "perbandingan"],
    content: `
      <h2>CNC Router vs Laser Cutting: Mana yang Tepat?</h2>
      <p>Kedua teknologi ini memiliki kelebihan masing-masing untuk pengerjaan material kayu. Pemilihan yang tepat tergantung pada kebutuhan spesifik project Anda.</p>
      
      <h3>CNC Router untuk Kayu</h3>
      <h4>Kelebihan:</h4>
      <ul>
        <li>Bisa cutting ketebalan hingga 50mm</li>
        <li>Hasil tepi sangat halus tanpa burning</li>
        <li>Cocok untuk 3D carving dan engraving dalam</li>
        <li>Biaya operasional lebih rendah untuk volume besar</li>
        <li>Bisa menggunakan berbagai jenis bit untuk hasil berbeda</li>
      </ul>
      
      <h4>Kekurangan:</h4>
      <ul>
        <li>Kecepatan lebih lambat untuk detail kompleks</li>
        <li>Membutuhkan clamping yang kuat</li>
        <li>Menghasilkan debu kayu</li>
      </ul>
      
      <h3>Laser Cutting untuk Kayu</h3>
      <h4>Kelebihan:</h4>
      <ul>
        <li>Kecepatan sangat tinggi untuk cutting</li>
        <li>Detail yang sangat halus dan kompleks</li>
        <li>Tidak perlu clamping khusus</li>
        <li>Bisa engraving dengan gradasi</li>
        <li>Minimal waste material</li>
      </ul>
      
      <h4>Kekurangan:</h4>
      <ul>
        <li>Keterbatasan ketebalan (maksimal 25mm)</li>
        <li>Sedikit burning effect pada tepi</li>
        <li>Biaya operasional lebih tinggi</li>
      </ul>
      
      <h3>Rekomendasi Penggunaan</h3>
      <h4>Pilih CNC Router jika:</h4>
      <ul>
        <li>Material tebal (>25mm)</li>
        <li>Butuh 3D carving</li>
        <li>Volume produksi besar</li>
        <li>Budget terbatas</li>
      </ul>
      
      <h4>Pilih Laser Cutting jika:</h4>
      <ul>
        <li>Detail sangat kompleks</li>
        <li>Butuh kecepatan tinggi</li>
        <li>Material tipis-sedang (<25mm)</li>
        <li>Prototype atau small batch</li>
      </ul>
      
      <h3>Kombinasi Kedua Teknologi</h3>
      <p>Untuk project tertentu, kombinasi kedua teknologi bisa memberikan hasil optimal. Misalnya rough cutting dengan CNC Router dan detail finishing dengan laser.</p>
    `,
    category: "Perbandingan",
    image: "/images/cncrouter.webp",
    publishDate: "2025-01-08",
    readTime: "7 menit baca",
    tags: ["cnc router", "laser cutting", "kayu", "perbandingan"],
    author: "Budi Santoso"
  },
  {
    id: 5,
    title: "Trend Terbaru Aplikasi Laser Cutting di Industri Fashion",
    slug: "trend-laser-cutting-industri-fashion",
    excerpt: "Bagaimana teknologi laser cutting mengubah industri fashion? Lihat trend dan aplikasi terbaru yang sedang populer.",
    category: "Trend",
    image: "/images/galvo.webp",
    publishDate: "2025-01-05",
    readTime: "9 menit baca",
    author: "Sari Dewi",
    tags: ["fashion", "trend", "aplikasi", "industri"],
    content: `
      <h2>Laser Cutting Merevolusi Industri Fashion</h2>
      <p>Industri fashion semakin memanfaatkan teknologi laser cutting untuk menciptakan design yang unik, presisi, dan efisien dalam produksi.</p>
      
      <h3>Aplikasi Laser Cutting di Fashion</h3>
      <h4>1. Cutting Fabric Presisi</h4>
      <p>Laser CO2 mampu memotong berbagai jenis kain dengan presisi tinggi tanpa fraying, menghasilkan tepi yang rapi dan profesional.</p>
      
      <h4>2. Pattern Making</h4>
      <p>Pembuatan pattern yang kompleks dan detail menjadi lebih mudah dan akurat dengan laser cutting.</p>
      
      <h4>3. Decorative Elements</h4>
      <p>Laser engraving pada kulit, denim, dan material lainnya untuk menciptakan elemen dekoratif yang unik.</p>
      
      <h3>Material Fashion yang Bisa Di-Laser</h3>
      <ul>
        <li><strong>Katun:</strong> Cutting bersih tanpa fraying</li>
        <li><strong>Denim:</strong> Engraving untuk efek vintage</li>
        <li><strong>Kulit:</strong> Cutting dan engraving detail</li>
        <li><strong>Felt:</strong> Cutting presisi untuk aksesoris</li>
        <li><strong>Synthetic Fabric:</strong> Sealing edge otomatis</li>
      </ul>
      
      <h3>Keunggulan untuk Designer</h3>
      <h4>Prototyping Cepat</h4>
      <p>Designer bisa membuat prototype dengan cepat untuk testing fit dan design sebelum produksi massal.</p>
      
      <h4>Customization</h4>
      <p>Memungkinkan personalisasi dan customization dalam skala kecil dengan biaya yang reasonable.</p>
      
      <h4>Complex Geometry</h4>
      <p>Bisa membuat bentuk-bentuk kompleks yang sulit atau tidak mungkin dibuat dengan metode konvensional.</p>
      
      <h3>Trend Terkini</h3>
      <h4>1. Sustainable Fashion</h4>
      <p>Laser cutting membantu mengurangi waste material hingga 15-20% dibandingkan cutting konvensional.</p>
      
      <h4>2. On-Demand Production</h4>
      <p>Produksi sesuai permintaan tanpa perlu minimum order quantity yang besar.</p>
      
      <h4>3. Artistic Collaboration</h4>
      <p>Kolaborasi antara fashion designer dan laser cutting artist menghasilkan karya yang unik dan inovatif.</p>
      
      <h3>Tips untuk Fashion Designer</h3>
      <ul>
        <li>Test cutting pada sample material terlebih dahulu</li>
        <li>Pertimbangkan direction of fabric grain</li>
        <li>Gunakan appropriate power setting untuk setiap material</li>
        <li>Plan for seam allowance dalam design</li>
      </ul>
    `,
    category: "Trend",
    image: "/images/galvo.webp",
    publishDate: "2025-01-05",
    readTime: "9 menit baca",
    tags: ["fashion", "trend", "aplikasi", "industri"],
    author: "Sari Dewi"
  },
  {
    id: 6,
    title: "Maintenance dan Perawatan Hasil Laser Cutting",
    slug: "maintenance-perawatan-hasil-laser-cutting",
    excerpt: "Panduan lengkap merawat produk hasil laser cutting agar tetap awet dan berkualitas dalam jangka panjang.",
    category: "Maintenance",
    image: "/images/displyacrylic.webp",
    publishDate: "2025-01-03",
    readTime: "12 menit baca",
    author: "Tim LaserCut Pro",
    tags: ["maintenance", "perawatan", "tips", "durability"],
    content: `
      <h2>Merawat Produk Laser Cutting untuk Durabilitas Maksimal</h2>
      <p>Produk hasil laser cutting yang berkualitas tinggi membutuhkan perawatan yang tepat untuk mempertahankan penampilan dan fungsinya dalam jangka panjang.</p>
      
      <h3>Perawatan Berdasarkan Material</h3>
      
      <h4>Acrylic</h4>
      <ul>
        <li><strong>Pembersihan:</strong> Gunakan air sabun lembut dan kain microfiber</li>
        <li><strong>Hindari:</strong> Pembersih abrasif dan alkohol</li>
        <li><strong>Penyimpanan:</strong> Jauhkan dari sumber panas langsung</li>
        <li><strong>Polishing:</strong> Gunakan acrylic polish untuk mengembalikan kilap</li>
      </ul>
      
      <h4>Stainless Steel</h4>
      <ul>
        <li><strong>Pembersihan:</strong> Air hangat dengan detergen mild</li>
        <li><strong>Penghilangan noda:</strong> Cuka putih atau lemon juice</li>
        <li><strong>Polishing:</strong> Searah dengan grain stainless steel</li>
        <li><strong>Pencegahan karat:</strong> Keringkan segera setelah terkena air</li>
      </ul>
      
      <h4>Kayu (MDF, Plywood)</h4>
      <ul>
        <li><strong>Finishing:</strong> Aplikasikan sealer atau varnish</li>
        <li><strong>Pembersihan:</strong> Kain lembab, hindari air berlebihan</li>
        <li><strong>Penyimpanan:</strong> Tempat kering dengan ventilasi baik</li>
        <li><strong>Perlindungan:</strong> Hindari sinar UV langsung</li>
      </ul>
      
      <h3>Perawatan Khusus untuk Aplikasi Outdoor</h3>
      <h4>Signage Outdoor</h4>
      <p>Untuk signage yang terpapar cuaca, lakukan inspeksi rutin setiap 3-6 bulan dan aplikasikan protective coating sesuai kebutuhan.</p>
      
      <h4>Architectural Elements</h4>
      <p>Elemen arsitektur membutuhkan maintenance schedule yang teratur, terutama untuk material metal yang terpapar hujan dan polusi.</p>
      
      <h3>Troubleshooting Common Issues</h3>
      <h4>Acrylic Cloudy/Buram</h4>
      <p><strong>Penyebab:</strong> Goresan mikro atau residue pembersih<br>
      <strong>Solusi:</strong> Polish dengan acrylic compound dan kain microfiber</p>
      
      <h4>Stainless Steel Water Spots</h4>
      <p><strong>Penyebab:</strong> Mineral deposit dari air<br>
      <strong>Solusi:</strong> Bersihkan dengan cuka putih, bilas, dan keringkan</p>
      
      <h4>Kayu Cracking</h4>
      <p><strong>Penyebab:</strong> Perubahan kelembaban<br>
      <strong>Solusi:</strong> Aplikasikan wood conditioner dan sealer</p>
      
      <h3>Schedule Maintenance Recommended</h3>
      <table>
        <tr><th>Material</th><th>Daily</th><th>Weekly</th><th>Monthly</th><th>Yearly</th></tr>
        <tr><td>Acrylic</td><td>Dust removal</td><td>Cleaning</td><td>Polish</td><td>Deep clean</td></tr>
        <tr><td>Stainless</td><td>Wipe dry</td><td>Cleaning</td><td>Polish</td><td>Inspection</td></tr>
        <tr><td>Kayu</td><td>Dust removal</td><td>Cleaning</td><td>Condition check</td><td>Re-finish</td></tr>
      </table>
      
      <h3>Professional Maintenance Service</h3>
      <p>Untuk produk dengan nilai tinggi atau aplikasi kritis, pertimbangkan menggunakan jasa maintenance profesional untuk memastikan longevity optimal.</p>
    `,
    category: "Maintenance",
    image: "/images/displyacrylic.webp",
    publishDate: "2025-01-03",
    readTime: "12 menit baca",
    tags: ["maintenance", "perawatan", "tips", "durability"],
    author: "Tim LaserCut Pro"
  }
];

// ===== AREA LAYANAN =====
export const SERVICE_AREAS = [
  {
    id: 1,
    city: "Serang",
    province: "indonesia",
    description: "Melayani laser cutting di Serang dan sekitarnya dengan pickup & delivery gratis untuk order minimal.",
    keywords: "laser cutting serang, cnc router serang, jasa laser serang",
    coordinates: { lat: -6.1175, lng: 106.1516 }
  },
  {
    id: 2,
    city: "Tangerang",
    province: "indonesia",
    description: "Layanan laser cutting profesional di Tangerang dengan teknologi terdepan dan harga kompetitif.",
    keywords: "laser cutting tangerang, cnc router tangerang, jasa laser tangerang",
    coordinates: { lat: -6.1781, lng: 106.6298 }
  },
  {
    id: 3,
    city: "Cilegon",
    province: "indonesia",
    description: "Solusi laser cutting terpercaya di Cilegon untuk kebutuhan industri dan komersial.",
    keywords: "laser cutting cilegon, cnc router cilegon, jasa laser cilegon",
    coordinates: { lat: -6.0025, lng: 106.0640 }
  },
  {
    id: 4,
    city: "Pandeglang",
    province: "indonesia",
    description: "Jasa laser cutting berkualitas di Pandeglang dengan layanan konsultasi gratis.",
    keywords: "laser cutting pandeglang, cnc router pandeglang, jasa laser pandeglang",
    coordinates: { lat: -6.3086, lng: 106.1067 }
  },
  {
    id: 5,
    city: "Lebak",
    province: "indonesia",
    description: "Melayani kebutuhan laser cutting di Lebak dengan standar kualitas internasional.",
    keywords: "laser cutting lebak, cnc router lebak, jasa laser lebak",
    coordinates: { lat: -6.5644, lng: 106.2522 }
  }
];

// ===== PRICING TIERS =====
export const PRICING_TIERS = [
  {
    id: 1,
    name: "Basic",
    description: "Cocok untuk project personal dan UMKM",
    features: [
      "Konsultasi gratis",
      "File preparation",
      "Quality check",
      "Basic packaging"
    ],
    minOrder: "1 piece",
    deliveryTime: "3-5 hari kerja"
  },
  {
    id: 2,
    name: "Professional",
    description: "Ideal untuk bisnis dan project komersial",
    features: [
      "Priority queue",
      "Design optimization",
      "Quality guarantee",
      "Premium packaging",
      "Pickup & delivery"
    ],
    minOrder: "10 pieces",
    deliveryTime: "2-3 hari kerja"
  },
  {
    id: 3,
    name: "Enterprise",
    description: "Solusi lengkap untuk industri dan korporat",
    features: [
      "Dedicated project manager",
      "Custom workflow",
      "Bulk pricing",
      "Express delivery",
      "Technical support",
      "Quality certification"
    ],
    minOrder: "100 pieces",
    deliveryTime: "1-2 hari kerja"
  }
];

// ===== QUALITY STANDARDS =====
export const QUALITY_STANDARDS = [
  {
    id: 1,
    standard: "ISO 9001:2015",
    description: "Sistem manajemen kualitas internasional",
    certification: "Certified",
    validUntil: "2026-12-31"
  },
  {
    id: 2,
    standard: "Toleransi Cutting",
    description: "Presisi cutting sesuai standar industri",
    specification: "±0.05mm untuk metal, ±0.1mm untuk non-metal",
    measurement: "Verified dengan CMM"
  },
  {
    id: 3,
    standard: "Surface Quality",
    description: "Kualitas permukaan hasil cutting",
    specification: "Ra 1.6 μm untuk metal, smooth edge untuk non-metal",
    inspection: "Visual dan tactile inspection"
  }
];

// ===== COMPETITIVE ADVANTAGES =====
export const COMPETITIVE_ADVANTAGES = [
  {
    id: 1,
    title: "Teknologi Terdepan",
    description: "Menggunakan mesin laser dan CNC router terbaru dengan teknologi paling advanced",
    icon: "technology",
    benefits: [
      "Presisi tinggi hingga 0.05mm",
      "Kecepatan cutting optimal",
      "Hasil finishing premium",
      "Konsistensi kualitas"
    ]
  },
  {
    id: 2,
    title: "Tim Ahli Berpengalaman",
    description: "Didukung tim teknisi dan operator berpengalaman 10+ tahun di industri laser cutting",
    icon: "team",
    benefits: [
      "Expertise dalam berbagai material",
      "Problem solving yang cepat",
      "Quality control ketat",
      "Continuous improvement"
    ]
  },
  {
    id: 3,
    title: "Layanan Komprehensif",
    description: "One-stop solution dari konsultasi design hingga delivery produk jadi",
    icon: "service",
    benefits: [
      "Konsultasi design gratis",
      "File preparation & optimization",
      "Pickup & delivery service",
      "After-sales support"
    ]
  },
  {
    id: 4,
    title: "Harga Kompetitif",
    description: "Pricing yang transparan dan kompetitif tanpa mengorbankan kualitas",
    icon: "price",
    benefits: [
      "No hidden cost",
      "Bulk discount available",
      "Flexible payment terms",
      "Value for money"
    ]
  }
];

// ===== PROCESS WORKFLOW =====
export const PROCESS_WORKFLOW = [
  {
    step: 1,
    title: "Konsultasi & Quote",
    description: "Diskusi kebutuhan project dan mendapatkan quote yang akurat",
    duration: "30 menit - 2 jam",
    deliverables: ["Project assessment", "Material recommendation", "Detailed quote", "Timeline estimation"],
    tools: ["WhatsApp", "Email", "Video call", "Site visit"]
  },
  {
    step: 2,
    title: "Design & File Preparation",
    description: "Persiapan dan optimasi file design untuk proses cutting",
    duration: "2-24 jam",
    deliverables: ["File optimization", "Nesting layout", "Cutting simulation", "Client approval"],
    tools: ["CAD software", "Nesting software", "Simulation tools"]
  },
  {
    step: 3,
    title: "Material Procurement",
    description: "Pengadaan material sesuai spesifikasi dan standar kualitas",
    duration: "1-3 hari",
    deliverables: ["Material sourcing", "Quality inspection", "Inventory preparation"],
    suppliers: ["Authorized dealers", "Certified suppliers", "Local partners"]
  },
  {
    step: 4,
    title: "Production & Quality Control",
    description: "Proses cutting dengan monitoring kualitas real-time",
    duration: "1-7 hari",
    deliverables: ["Precision cutting", "Quality inspection", "Finishing process", "Final check"],
    equipment: ["Laser Fiber", "Laser CO2", "CNC Router", "Galvo Engraving"]
  },
  {
    step: 5,
    title: "Packaging & Delivery",
    description: "Packaging profesional dan pengiriman sesuai jadwal",
    duration: "1-2 hari",
    deliverables: ["Professional packaging", "Delivery coordination", "Installation support", "Documentation"],
    options: ["Pickup", "Delivery", "Ekspedisi", "Installation"]
  }
];

// ===== TECHNOLOGY SPECIFICATIONS =====
export const TECHNOLOGY_SPECS = {
  laserFiber: {
    brand: "IPG Photonics",
    power: "1000W - 6000W",
    cuttingArea: "1500x3000mm",
    positioning: "±0.05mm",
    maxThickness: {
      stainlessSteel: "20mm",
      carbonSteel: "25mm",
      aluminum: "15mm",
      copper: "8mm"
    },
    features: [
      "Auto focus system",
      "Nitrogen assist gas",
      "Edge quality monitoring",
      "Automatic nesting"
    ]
  },
  laserCO2: {
    brand: "Coherent",
    power: "100W - 300W",
    cuttingArea: "1300x2500mm",
    positioning: "±0.1mm",
    maxThickness: {
      acrylic: "25mm",
      wood: "20mm",
      fabric: "5mm",
      paper: "2mm"
    },
    features: [
      "Auto height control",
      "Air assist system",
      "Fume extraction",
      "Camera positioning"
    ]
  },
  cncRouter: {
    brand: "AXYZ",
    spindlePower: "9kW",
    cuttingArea: "2000x3000mm",
    positioning: "±0.1mm",
    maxThickness: {
      wood: "50mm",
      mdf: "40mm",
      plastic: "30mm",
      aluminum: "20mm"
    },
    features: [
      "Automatic tool changer",
      "Vacuum hold-down",
      "Dust collection",
      "3D carving capability"
    ]
  },
  galvoEngraving: {
    brand: "ScanLab",
    power: "20W - 100W",
    markingArea: "100x100mm - 300x300mm",
    positioning: "±0.01mm",
    speed: "Up to 7000mm/s",
    features: [
      "High-speed scanning",
      "Micro marking",
      "Barcode/QR generation",
      "Batch processing"
    ]
  }
};

// ===== CERTIFICATIONS & AWARDS =====
export const CERTIFICATIONS = [
  {
    id: 1,
    name: "ISO 9001:2015",
    issuer: "TUV Rheinland",
    category: "Quality Management",
    validUntil: "2026-12-31",
    description: "Sertifikasi sistem manajemen kualitas internasional"
  },
  {
    id: 2,
    name: "SMK3",
    issuer: "Kemnaker RI",
    category: "Safety Management",
    validUntil: "2025-06-30",
    description: "Sistem Manajemen Keselamatan dan Kesehatan Kerja"
  },
  {
    id: 3,
    name: "Best Laser Cutting Service",
    issuer: "Indonesia Manufacturing Awards",
    category: "Industry Recognition",
    year: "2024",
    description: "Penghargaan sebagai penyedia jasa laser cutting terbaik"
  }
];

// ===== PARTNERSHIP & CLIENTS =====
export const PARTNERSHIPS = [
  {
    id: 1,
    name: "IPG Photonics",
    type: "Technology Partner",
    description: "Authorized partner untuk laser fiber technology",
    logo: "/images/partners/ipg.webp",
    website: "https://ipgphotonics.com"
  },
  {
    id: 2,
    name: "Coherent",
    type: "Technology Partner", 
    description: "Certified partner untuk laser CO2 systems",
    logo: "/images/partners/coherent.webp",
    website: "https://coherent.com"
  },
  {
    id: 3,
    name: "AXYZ",
    type: "Equipment Partner",
    description: "Authorized dealer untuk CNC Router systems",
    logo: "/images/partners/axyz.webp",
    website: "https://axyz.com"
  }
];

export const MAJOR_CLIENTS = [
  {
    id: 1,
    name: "PT. Astra International",
    industry: "Automotive",
    project: "Komponen presisi untuk assembly line",
    testimonial: "Kualitas cutting sangat konsisten untuk kebutuhan mass production kami"
  },
  {
    id: 2,
    name: "PT. Unilever Indonesia",
    industry: "FMCG",
    project: "Display dan POP material untuk retail",
    testimonial: "Kreativitas dan kualitas yang selalu memenuhi ekspektasi brand kami"
  },
  {
    id: 3,
    name: "Tzu Chi Hospital",
    industry: "Healthcare",
    project: "Signage dan wayfinding system",
    testimonial: "Profesionalisme tinggi dalam menangani project healthcare yang sensitif"
  }
];

// ===== ENVIRONMENTAL COMMITMENT =====
export const ENVIRONMENTAL_INITIATIVES = [
  {
    id: 1,
    title: "Material Waste Reduction",
    description: "Optimasi nesting untuk mengurangi waste material hingga 15%",
    impact: "Menghemat 2 ton material per bulan",
    implementation: "Advanced nesting software dan careful planning"
  },
  {
    id: 2,
    title: "Energy Efficiency",
    description: "Penggunaan teknologi laser fiber yang hemat energi",
    impact: "Penghematan energi 40% dibanding teknologi lama",
    implementation: "Upgrade ke laser fiber dan optimasi schedule produksi"
  },
  {
    id: 3,
    title: "Recycling Program",
    description: "Program daur ulang material sisa dan packaging",
    impact: "90% material sisa berhasil di-recycle",
    implementation: "Partnership dengan recycling companies"
  }
];

// ===== TRAINING & DEVELOPMENT =====
export const TRAINING_PROGRAMS = [
  {
    id: 1,
    title: "Operator Certification",
    description: "Program sertifikasi untuk operator mesin laser dan CNC",
    duration: "40 jam",
    certification: "Certified Laser Operator",
    modules: [
      "Safety procedures",
      "Machine operation",
      "Quality control",
      "Troubleshooting"
    ]
  },
  {
    id: 2,
    title: "Design Optimization Workshop",
    description: "Workshop untuk designer dan engineer tentang optimasi design",
    duration: "8 jam",
    target: "Designers, Engineers, Students",
    topics: [
      "Design for manufacturing",
      "Material selection",
      "Cost optimization",
      "Quality considerations"
    ]
  }
];

// ===== INDUSTRY INSIGHTS =====
export const INDUSTRY_INSIGHTS = [
  {
    id: 1,
    title: "Market Growth Projection",
    data: "Laser cutting market di Indonesia tumbuh 15% per tahun",
    source: "Indonesia Manufacturing Association 2024",
    implication: "Peningkatan demand untuk precision manufacturing"
  },
  {
    id: 2,
    title: "Technology Adoption",
    data: "70% industri manufaktur mulai adopsi laser cutting technology",
    source: "Industry Survey 2024",
    implication: "Shift dari conventional cutting ke laser technology"
  },
  {
    id: 3,
    title: "Sustainability Focus",
    data: "85% perusahaan prioritaskan sustainable manufacturing",
    source: "Green Manufacturing Report 2024",
    implication: "Increased demand untuk eco-friendly cutting solutions"
  }
];

// ===== EXPORT SEMUA KONSTANTA =====
// Untuk memudahkan import di file lain, kita export semua konstanta sekaligus
export const ALL_CONSTANTS = {
  SITE_CONFIG,
  NAVIGATION,
  SERVICES,
  MATERIALS,
  PORTFOLIO,
  PORTFOLIO_PROJECTS,
  TESTIMONIALS,
  FAQ,
  WHATSAPP_MESSAGES,
  SERVICE_AREAS,
  PRICING_TIERS,
  QUALITY_STANDARDS,
  COMPETITIVE_ADVANTAGES,
  PROCESS_WORKFLOW,
  TECHNOLOGY_SPECS,
  CERTIFICATIONS,
  PARTNERSHIPS,
  MAJOR_CLIENTS,
  ENVIRONMENTAL_INITIATIVES,
  TRAINING_PROGRAMS,
  INDUSTRY_INSIGHTS
};

// ===== UTILITY FUNCTIONS =====
export const UTILS = {
  // Format phone number untuk WhatsApp
  formatWhatsAppNumber: (number) => {
    return number.replace(/\D/g, '').replace(/^0/, '62');
  },
  
  // Generate WhatsApp URL
  generateWhatsAppURL: (message = WHATSAPP_MESSAGES.default) => {
    return `https://api.whatsapp.com/send?phone=${SITE_CONFIG.whatsapp}&text=${encodeURIComponent(message)}`;
  },
  
  // Format currency
  formatCurrency: (amount) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(amount);
  },
  
  // Calculate reading time
  calculateReadingTime: (text) => {
    const wordsPerMinute = 200;
    const words = text.split(' ').length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return `${minutes} menit baca`;
  },
  
  // Slugify text
  slugify: (text) => {
    return text
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '');
  }
};

// ===== DEFAULT EXPORTS hhi=====
export default {
  SITE_CONFIG,
  NAVIGATION,
  SERVICES,
  MATERIALS,
  PORTFOLIO,
  TESTIMONIALS,
  FAQ,
  WHATSAPP_MESSAGES,
  UTILS
};
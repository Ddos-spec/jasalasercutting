// src/utils/constants.js

export const SITE_CONFIG = {
  name: "Jasa Cutting Laser",
  title: "Jasa Laser Cutting Profesional #1 indonesia - Akrilik, Kayu, Metal",
  description: "Laser cutting presisi tinggi & pengerjaan cepat di indonesia! Spesialis akrilik, kayu, metal dengan teknologi terdepan. 10+ tahun pengalaman, hasil akurat, garansi kualitas. Melayani Serang, Tangerang, Cilegon, Pandeglang, Lebak.",
  keywords: "laser cutting indonesia, cnc router serang, laser fiber tangerang, laser co2 cilegon, cutting akrilik pandeglang, potong kayu lebak, laser metal indonesia",
  url: "https://ddos-spec.github.io/jasalasercutting/",
  author: "Jasa Cutting Laser Team",
  whatsapp: "6285165693179",
  email: "info@tepatlaser.com",
  address: "Jl. Raya Serang No. 123, Kota Serang, indonesia",
  phone: "+62 851 6569 3179",
  businessHours: "Senin - Sabtu: 08.00 - 17.00 WIB",
  socialMedia: {
    whatsapp: "https://api.whatsapp.com/send?phone=6285165693179",
    instagram: "https://instagram.com/tepatlaser",
    facebook: "https://facebook.com/tepatlaser",
    youtube: "https://youtube.com/tepatlaser",
  }
};

export const NAVIGATION = [
  { name: 'Beranda', href: '/', active: false },
  { name: 'Tentang Kami', href: '/about/', active: false },
  { 
    name: 'Layanan', 
    href: '#',
    active: false,
    submenu: [
      { name: 'Laser CO2', href: '/jasa-laser-co2/' },
      { name: 'Laser Fiber', href: '/jasa-laser-fiber/' },
      { name: 'CNC Router', href: '/jasa-cnc-router/' },
      { name: 'Galvo Engraving', href: '/jasa-galvo-engraving/' }
    ]
  },
  { 
    name: 'Material', 
    href: '#',
    submenu: [
      { name: 'Akrilik', href: '/material-acrylic/' },
      { name: 'MDF', href: '/material-mdf/' },
      { name: 'Plywood/Multiplex', href: '/material-ply-wood-multiplex/' },
      { name: 'Metal (Stainless, Aluminium)', href: '/material-metal/' },
      { name: 'ACP', href: '/material-acp/' },
      { name: 'PVC BOARD', href: '/material-pvc/' },
      { name: 'GRC', href: '/material-grc/' }
    ]
  },
  { name: 'Portfolio', href: '/portfolio/', active: false },
  { name: 'Blog', href: '/blog/', active: false }
];

export const SERVICES = [
  {
    id: "laser-co2",
    name: "Laser CO2",
    slug: "jasa-laser-co2",
    description: "Cutting presisi tinggi untuk material non-metal seperti akrilik, kayu, MDF, kertas, kain, dan karet",
    features: [
      "Ketebalan material hingga 20mm",
      "Presisi hingga 0.1mm",
      "Finishing halus dan clean",
      "Ideal untuk signage, dekorasi, prototyping"
    ],
    applications: ["Signage", "Dekorasi", "Prototyping", "Kemasan"],
    image: "/jasalasercutting/images/co2.webp",
    keywords: "jasa laser co2 indonesia, cutting akrilik serang, laser kayu tangerang, potong mdf cilegon, laser cutting pandeglang, cutting kain lebak, laser karet indonesia"
  },
  {
    id: "laser-fiber",
    name: "Laser Fiber",
    slug: "jasa-laser-fiber",
    description: "Solusi cutting & marking presisi untuk material metal seperti stainless steel, aluminium, besi, dan tembaga",
    features: [
      "Marking permanen & tahan lama",
      "Cutting metal hingga 10mm",
      "Kecepatan tinggi dan efisiensi biaya",
      "Tidak memerlukan bahan kimia berbahaya"
    ],
    applications: ["Industri", "Automotif", "Elektronik", "Branding"],
    image: "/jasalasercutting/images/laserfiber.webp",
    keywords: "jasa laser fiber indonesia, cutting stainless serang, laser alumunium tangerang, potong besi cilegon, laser cutting metal pandeglang, marking tembaga lebak"
  },
  {
    id: "cnc-router",
    name: "CNC Router",
    slug: "jasa-cnc-router",
    description: "Pengerjaan kompleks untuk material keras seperti ACP, GRC, kayu keras, dan plastik tebal",
    features: [
      "3D carving dan profiling",
      "Kemampuan memotong material tebal",
      "Repeatability tinggi untuk produksi massal",
      "Finishing presisi untuk detail rumit"
    ],
    applications: ["Fasad", "Furniture", "Moulding", "Signage"],
    image: "/jasalasercutting/images/cncrouter.webp",
    keywords: "jasa cnc router indonesia, cutting acp serang, laser grc tangerang, potong kayu cilegon, cnc router pandeglang, carving akrilik lebak"
  },
  {
    id: "galvo-engraving",
    name: "Galvo Engraving",
    slug: "jasa-galvo-engraving",
    description: "Engraving kecepatan tinggi untuk personalisasi dan branding produk pada berbagai material",
    features: [
      "Kecepatan engraving hingga 10x lebih cepat",
      "Resolusi tinggi untuk detail kompleks",
      "Personalisasi batch dalam waktu singkat",
      "Ideal untuk serial number, logo, QR code"
    ],
    applications: ["Branding", "Personalisasi", "Traceability", "Promosi"],
    image: "/jasalasercutting/images/galvo.webp",
    keywords: "jasa galvo engraving indonesia, laser engraving serang, engrave tangerang, potong engraving cilegon, laser engrave pandeglang, branding produk lebak"
  }
];

export const MATERIALS = [
  {
    id: "acrylic",
    name: "Akrilik",
    slug: "material-acrylic",
    description: "Material transparan berkualitas tinggi untuk berbagai aplikasi signage dan dekorasi",
    thickness: "1mm - 20mm",
    applications: ["Signage", "Display", "Dekorasi", "Prototyping"],
    image: "/jasalasercutting/images/Acrylic.webp",
    keywords: "potong akrilik indonesia, cutting acrylic serang, laser acrylic tangerang, potong acrylic cilegon, cutting acrylic pandeglang"
  },
  {
    id: "mdf",
    name: "MDF",
    slug: "material-mdf",
    description: "Kayu engineered dengan permukaan halus, ideal untuk painting dan aplikasi dekoratif",
    thickness: "3mm - 25mm",
    applications: ["Furniture", "Dekorasi", "Craft", "Model"],
    image: "/jasalasercutting/images/mdf.webp",
    keywords: "potong mdf indonesia, laser cutting mdf serang, cutting mdf tangerang, potong mdf cilegon, laser mdf pandeglang"
  },
  {
    id: "plywood",
    name: "Plywood/Multiplex",
    slug: "material-ply-wood-multiplex",
    description: "Kayu lapis berkualitas untuk kekuatan struktural dan tampilan alami yang menarik",
    thickness: "3mm - 25mm",
    applications: ["Furniture", "Dekorasi", "Kerajinan", "Interior"],
    image: "/jasalasercutting/images/Ply Wood.webp",
    keywords: "potong plywood indonesia, laser kayu serang, cutting multiplex tangerang, potong kayu cilegon, laser plywood pandeglang"
  },
  {
    id: "metal",
    name: "Metal (Stainless, Aluminium)",
    slug: "material-metal",
    description: "Berbagai jenis logam untuk aplikasi industri, arsitektur, dan branding produk",
    thickness: "0.5mm - 10mm",
    applications: ["Industri", "Arsitektur", "Automotif", "Branding"],
    image: "/jasalasercutting/images/metal.webp",
    keywords: "potong stainless indonesia, laser cutting metal serang, cutting alumunium tangerang, potong besi cilegon, laser stainless pandeglang"
  },
  {
    id: "acp",
    name: "ACP (Aluminium Composite Panel)",
    slug: "material-acp",
    description: "Panel komposit ringan namun kuat untuk aplikasi fasad dan signage premium",
    thickness: "2mm - 6mm",
    applications: ["Signage", "Fasad", "Interior", "Eksterior"],
    image: "/jasalasercutting/images/acp.webp",
    keywords: "potong acp aluminium indonesia, cutting acp serang, acp laser tangerang, potong acp cilegon, cutting acp pandeglang"
  },
  {
    id: "pvc",
    name: "PVC BOARD",
    slug: "material-pvc",
    description: "Cutting PVC custom untuk berbagai keperluan industri dan kreatif",
    thickness: "1mm - 10mm",
    applications: ["Signage", "Prototype", "Display", "Packaging"],
    image: "/jasalasercutting/images/pvc.webp",
    keywords: "potong pvc indonesia, cutting pvc serang, laser pvc tangerang, potong pvc cilegon, cutting pvc pandeglang"
  },
  {
    id: "grc",
    name: "GRC",
    slug: "material-grc",
    description: "Cutting GRC (Glassfibre Reinforced Concrete) untuk fasad dan ornamen bangunan",
    thickness: "8mm - 15mm",
    applications: ["Fasad", "Ornamen", "Panel", "Eksterior"],
    image: "/jasalasercutting/images/grc.webp",
    keywords: "potong grc indonesia, grc laser cutting serang, fasad grc tangerang, cutting grc cilegon, laser grc pandeglang"
  }
];

// Data portfolio yang dipindahkan dari portfolio.astro
export const PORTFOLIO_PROJECTS = [
  {
    id: 1,
    title: "Cutting Plat Besi Custom",
    category: "Laser Fiber",
    image: "/jasalasercutting/images/metal.webp",
    description: "Pemotongan plat besi dengan presisi tinggi untuk komponen industri",
    client: "PT. Industri Manufaktur",
    material: "Plat Besi 5mm",
    technique: "Laser Fiber Cutting",
    gallery: [
      "/jasalasercutting/images/metal.webp",
      "/jasalasercutting/images/metal.webp",
      "/jasalasercutting/images/metal.webp"
    ],
    detailDescription: "Proyek pemotongan plat besi custom dengan ketebalan 5mm menggunakan teknologi laser fiber. Hasil potongan sangat presisi dengan toleransi ±0.1mm, cocok untuk komponen industri yang membutuhkan akurasi tinggi."
  },
  {
    id: 2,
    title: "Engraving Logo Perusahaan",
    category: "Galvo Engraving",
    image: "/jasalasercutting/images/engraving.webp",
    description: "Engraving logo perusahaan pada berbagai material dengan detail tinggi",
    client: "CV. Karya Mandiri",
    material: "Stainless Steel",
    technique: "Galvo Laser Engraving",
    gallery: [
      "/jasalasercutting/images/engraving.webp",
      "/jasalasercutting/images/engraving.webp",
      "/jasalasercutting/images/engraving.webp"
    ],
    detailDescription: "Engraving logo perusahaan dengan teknologi galvo laser pada material stainless steel. Hasil engraving sangat detail dan tahan lama, cocok untuk branding perusahaan yang berkualitas tinggi."
  },
  {
    id: 3,
    title: "Cutting Akrilik Dekoratif",
    category: "Laser CO2",
    image: "/jasalasercutting/images/Acrylic.webp",
    description: "Pemotongan akrilik untuk keperluan dekorasi interior dengan desain custom",
    client: "Interior Design Studio",
    material: "Akrilik 8mm",
    technique: "CO2 Laser Cutting",
    gallery: [
      "/jasalasercutting/images/Acrylic.webp",
      "/jasalasercutting/images/Acrylic.webp",
      "/jasalasercutting/images/Acrylic.webp"
    ],
    detailDescription: "Pemotongan akrilik dekoratif dengan ketebalan 8mm menggunakan laser CO2. Menghasilkan potongan yang halus dan bersih tanpa crack, sempurna untuk aplikasi dekorasi interior yang elegan."
  },
  {
    id: 4,
    title: "CNC Router Kayu Jati",
    category: "CNC Router",
    image: "/jasalasercutting/images/mdf.webp",
    description: "Pengerjaan kayu jati dengan CNC router untuk furniture custom",
    client: "Furniture Artisan",
    material: "Kayu Jati Solid",
    technique: "CNC Router Machining",
    gallery: [
      "/jasalasercutting/images/mdf.webp",
      "/jasalasercutting/images/mdf.webp",
      "/jasalasercutting/images/mdf.webp"
    ],
    detailDescription: "Pengerjaan kayu jati solid menggunakan CNC router dengan presisi tinggi. Menghasilkan detail ukiran dan bentuk yang kompleks sesuai desain custom untuk furniture berkualitas premium."
  },
  {
    id: 5,
    title: "Cutting Plat Aluminium",
    category: "Laser Fiber",
    image: "/jasalasercutting/images/furnituremetal.webp",
    description: "Pemotongan plat aluminium untuk komponen otomotif",
    client: "PT. Otomotif Nusantara",
    material: "Aluminium 3mm",
    technique: "Fiber Laser Cutting",
    gallery: [
      "/jasalasercutting/images/furnituremetal.webp",
      "/jasalasercutting/images/furnituremetal.webp",
      "/jasalasercutting/images/furnituremetal.webp"
    ],
    detailDescription: "Pemotongan plat aluminium dengan ketebalan 3mm untuk komponen otomotif. Menggunakan laser fiber yang menghasilkan potongan bersih tanpa burr dan presisi tinggi sesuai standar industri otomotif."
  },
  {
    id: 6,
    title: "Engraving Kayu Mahoni",
    category: "Laser CO2",
    image: "/jasalasercutting/images/singagehote.webp",
    description: "Engraving detail pada kayu mahoni untuk souvenir eksklusif",
    client: "Souvenir Premium",
    material: "Kayu Mahoni",
    technique: "CO2 Laser Engraving",
    gallery: [
      "/jasalasercutting/images/singagehote.webp",
      "/jasalasercutting/images/singagehote.webp",
      "/jasalasercutting/images/singagehote.webp"
    ],
    detailDescription: "Engraving detail pada kayu mahoni premium menggunakan laser CO2. Menghasilkan detail ukiran yang halus dan artistik, cocok untuk souvenir eksklusif dan produk kerajinan berkualitas tinggi."
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Budi Santoso",
    company: "PT. Kreatif Nusantara Serang",
    position: "Project Manager",
    content: "Kualitas laser cutting terbaik yang pernah kami gunakan di indonesia. Presisi tinggi dan hasil sempurna untuk semua project signage kami.",
    rating: 5,
    image: "/jasalasercutting/images/budisantoso.webp"
  },
  {
    id: 2,
    name: "Sari Dewi",
    company: "Studio Arsitektur Modern Tangerang",
    position: "Lead Architect",
    content: "Pelayanan profesional dan hasil cutting yang sangat memuaskan. Recommended untuk semua kebutuhan laser cutting di indonesia.",
    rating: 5,
    image: "/jasalasercutting/images/Sari Dewi.webp"
  },
  {
    id: 3,
    name: "Ahmad Rizki",
    company: "Furniture Mebel Jaya Cilegon",
    position: "Owner",
    content: "Sudah 3 tahun menggunakan jasa Jasa Cutting Laser. Selalu puas dengan kualitas dan ketepatan waktu pengerjaan, pengiriman ke Cilegon juga cepat.",
    rating: 5,
    image: "/jasalasercutting/images/Ahmad Rizki.webp"
  }
];

export const PORTFOLIO = [
  {
    id: 1,
    title: "Signage Hotel Bintang 5 Serang",
    category: "Commercial",
    material: "ACP Aluminium",
    service: "CNC Router",
    image: "/jasalasercutting/images/singagehote.webp",
    description: "Pembuatan signage premium untuk hotel bintang 5 di Serang dengan detail presisi tinggi"
  },
  {
    id: 2,
    title: "Furniture Custom Stainless Tangerang",
    category: "Industrial",
    material: "Stainless Steel",
    service: "Laser Fiber",
    image: "/jasalasercutting/images/furnituremetal.webp",
    description: "Cutting furniture stainless steel custom untuk restaurant modern di Tangerang"
  },
  {
    id: 3,
    title: "Display Acrylic Premium Cilegon",
    category: "Retail",
    material: "Acrylic",
    service: "Laser CO2",
    image: "/jasalasercutting/images/displyacrylic.webp",
    description: "Display acrylic premium untuk toko retail di Cilegon dengan engraving logo"
  },
  {
    id: 4,
    title: "Prototype Industri Pandeglang",
    category: "Manufacturing",
    material: "PVC",
    service: "CNC Router",
    image: "/jasalasercutting/images/prototype.webp",
    description: "Prototype komponen industri dengan presisi tinggi menggunakan PVC untuk klien di Pandeglang"
  }
];

export const FAQ = [
  {
    id: 1,
    question: "Berapa lama waktu pengerjaan laser cutting?",
    answer: "Waktu pengerjaan tergantung kompleksitas desain dan jumlah item. Untuk project standar, estimasi pengerjaan adalah 2-5 hari kerja setelah desain disetujui. Untuk project mendesak, kami menyediakan layanan express dengan tambahan biaya."
  },
  {
    id: 2,
    question: "Apakah saya perlu menyediakan file desain?",
    answer: "Ya, file desain sangat diperlukan. Kami menerima file dalam format .AI, .EPS, .SVG, .DXF, .PDF, atau .CDR. Jika Anda tidak memiliki desain, tim kami siap membantu membuatkan desain dasar sesuai kebutuhan Anda dengan biaya tambahan."
  },
  {
    id: 3,
    question: "Material apa saja yang bisa dipotong dengan laser?",
    answer: "Kami menyediakan berbagai pilihan material seperti akrilik, kayu (MDF, Plywood), metal (stainless steel, aluminium), karet, kain, kertas, dan PVC. Untuk informasi lengkap dan ketersediaan material terbaru, silakan hubungi tim kami."
  },
  {
    id: 4,
    question: "Bagaimana kualitas hasil potongan laser?",
    answer: "Kualitas hasil potongan laser kami sangat tinggi dengan presisi hingga 0.1mm. Tepi potongan sangat halus dan clean, minim sisa material. Untuk material tertentu seperti akrilik, hasil potongan bahkan tidak memerlukan finishing tambahan."
  },
  {
    id: 5,
    question: "Apakah menyediakan jasa konsultasi desain?",
    answer: "Tentu, kami menyediakan layanan konsultasi desain gratis untuk membantu Anda memahami kelayakan teknis dan optimalisasi desain sebelum proses produksi dimulai. Untuk jasa pembuatan desain khusus dari nol, terdapat biaya tambahan yang akan diinformasikan oleh tim kami."
  }
];

export const BLOG_POSTS = [
  {
    id: 1,
    title: "Cara Memilih Material yang Tepat untuk Laser Cutting di indonesia",
    slug: "cara-memilih-material-laser-cutting-indonesia",
    excerpt: "Panduan lengkap memilih material yang sesuai untuk project laser cutting Anda di indonesia",
    category: "Tutorial",
    readTime: "5 menit",
    publishDate: "2025-01-15",
    image: "/jasalasercutting/images/acp.webp"
  },
  {
    id: 2,
    title: "Perbedaan Utama Antara Laser CO2 dan Laser Fiber untuk Bisnis Anda",
    slug: "perbedaan-laser-co2-dan-laser-fiber",
    excerpt: "Analisis teknis dan aplikatif antara teknologi laser CO2 dan Fiber untuk kebutuhan bisnis Anda",
    category: "Technical",
    readTime: "7 menit",
    publishDate: "2025-01-10",
    image: "/jasalasercutting/images/laserfiber.webp"
  },
  {
    id: 3,
    title: "Tren Industri Kreatif indonesia 2025: Peluang Laser Cutting",
    slug: "tren-industri-kreatif-indonesia-2025",
    excerpt: "Insight tentang perkembangan industri kreatif di indonesia dan peluang bisnis laser cutting",
    category: "Industry",
    readTime: "6 menit",
    publishDate: "2025-01-05",
    image: "/jasalasercutting/images/cncrouter.webp"
  },
  {
    id: 4,
    title: "5 Kesalahan Umum Saat Memilih Jasa Laser Cutting di indonesia",
    slug: "kesalahan-umum-memilih-jasa-laser-cutting-indonesia",
    excerpt: "Hindari kesalahan fatal yang bisa merugikan project Anda dengan tips dari ahli laser cutting indonesia",
    category: "Tips",
    readTime: "8 menit",
    publishDate: "2025-01-20",
    image: "/jasalasercutting/images/co2.webp"
  },
  {
    id: 5,
    title: "Panduan Lengkap: Cara Menyiapkan File Desain untuk Laser Cutting Akurat",
    slug: "panduan-file-desain-laser-cutting-akurat",
    excerpt: "Tutorial step-by-step menyiapkan file desain yang optimal untuk hasil laser cutting terbaik dan akurat",
    category: "Tutorial",
    readTime: "10 menit",
    publishDate: "2025-01-18",
    image: "/jasalasercutting/images/engraving.webp"
  },
  {
    id: 6,
    title: "Analisis Biaya: Apakah Laser Cutting Lebih Efisien daripada Metode Tradisional?",
    slug: "analisis-biaya-laser-cutting-vs-tradisional",
    excerpt: "Breakdown biaya komprehensif membandingkan laser cutting dengan metode konvensional untuk berbagai material",
    category: "Analysis",
    readTime: "9 menit",
    publishDate: "2025-01-08",
    image: "/jasalasercutting/images/pvc.webp"
  },
  {
    id: 7,
    title: "Teknik Laser Engraving Tercepat untuk Personalisasi Massal",
    slug: "teknik-laser-engraving-personalisasi-massal",
    excerpt: "Eksplorasi teknik laser engraving cepat pada berbagai material untuk menciptakan branding produk yang memorable",
    category: "Technical",
    readTime: "12 menit",
    publishDate: "2025-01-14",
    image: "/jasalasercutting/images/galvo.webp"
  },
  {
    id: 8,
    title: "Studi Kasus: Bagaimana CNC Router Mengubah Industri Furniture Custom di indonesia",
    slug: "cnc-router-industri-furniture-custom-indonesia",
    excerpt: "Analisis mendalam bagaimana teknologi CNC Router merevolusi industri furniture custom di indonesia dan sekitarnya",
    category: "Case Study",
    readTime: "11 menit",
    publishDate: "2025-01-12",
    image: "/jasalasercutting/images/Ply Wood.webp"
  }
];

// Define color classes for categories
export const CATEGORY_COLORS = {
  'Laser Fiber': 'bg-blue-600',
  'Laser CO2': 'bg-green-600', 
  'CNC Router': 'bg-purple-600',
  'Galvo Engraving': 'bg-orange-600'
};

// Helper function to get proper image paths based on environment
export const getImagePath = (imagePath) => {
  // Remove leading slash if present
  const cleanPath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath;
  
  // For GitHub Pages deployment
  if (import.meta.env.PROD) {
    return `/jasalasercutting/${cleanPath}`;
  }
  
  // For local development
  return `/${cleanPath}`;
};

// Helper function to get proper page URLs
export const getPageUrl = (path) => {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  
  // For GitHub Pages deployment
  if (import.meta.env.PROD) {
    return `/jasalasercutting${cleanPath}`;
  }
  
  // For local development
  return cleanPath;
};

export const WHATSAPP_MESSAGES = {
  default: "Halo, saya tertarik dengan jasa laser cutting. Bisa konsultasi gratis?",
  cnc: "Halo, saya butuh informasi tentang jasa CNC Router. Bisa bantu konsultasi gratis?",
  fiber: "Halo, saya ingin tanya tentang laser fiber cutting untuk material metal. Bisa konsultasi gratis?",
  co2: "Halo, saya tertarik dengan laser CO2 untuk cutting acrylic. Bisa konsultasi gratis?",
  engraving: "Halo, saya butuh jasa laser engraving. Bisa konsultasi gratis?",
  quote: "Halo, saya ingin request quote untuk project laser cutting. Bisa konsultasi gratis dulu?"
};
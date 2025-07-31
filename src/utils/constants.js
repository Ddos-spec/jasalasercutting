// src/utils/constants.js

export const SITE_CONFIG = {
  name: "LaserCut Pro",
  title: "Jasa Laser Cutting Akurat & Cepat #1 Jabodetabek - Akrilik, Kayu, Metal",
  description: "Laser cutting presisi tinggi & pengerjaan cepat di Jabodetabek! Spesialis akrilik, kayu, metal dengan teknologi terdepan. 10+ tahun pengalaman, hasil akurat, garansi kualitas. Melayani Jakarta, Bogor, Depok, Tangerang, Bekasi.",
  url: "https://ddos-spec.github.io/rajacuttinglaser/",
  author: "LaserCut Pro Team",
  keywords: "jasa laser cutting jakarta, laser cutting bogor, laser cutting depok, laser cutting tangerang, laser cutting bekasi, cnc router jabodetabek, laser fiber cutting, potong akrilik jakarta, potong kayu bogor, cutting metal depok, laser engraving tangerang, galvo engraving bekasi",
  phone: "+62 812-3456-7890",
  whatsapp: "6285165693179",
  email: "info@lasercut-pro.com",
  address: "Jl. Industri Raya No. 123, Jakarta Selatan, DKI Jakarta 12560",
  businessHours: "Senin - Sabtu: 08:00 - 17:00 WIB",
  socialMedia: {
    facebook: "https://facebook.com/lasercutpro",
    instagram: "https://instagram.com/lasercutpro",
    youtube: "https://youtube.com/lasercutpro",
    linkedin: "https://linkedin.com/company/lasercutpro"
  }
};

export const SERVICES = [
  {
    id: "cnc-router",
    name: "Jasa CNC Router",
    slug: "jasa-cnc-router",
    description: "Layanan CNC Router presisi tinggi untuk berbagai material kayu, MDF, dan plastik",
    features: ["Presisi 0.1mm", "Material Kayu & MDF", "Ukuran hingga 2x3 meter", "Finishing Premium"],
    price: "Mulai dari Rp 50.000/m²",
    image: "/rajacuttinglaser/images/cncrouter.webp",
    keywords: "jasa cnc router jakarta, cnc router bekasi, cnc router bogor, cnc router depok, cnc router tangerang"
  },
  {
    id: "laser-fiber",
    name: "Jasa Laser Fiber",
    slug: "jasa-laser-fiber",
    description: "Laser Fiber cutting untuk material metal dengan hasil sempurna dan presisi tinggi",
    features: ["Cutting Metal", "Presisi 0.05mm", "Stainless Steel", "Aluminium & Besi"],
    price: "Mulai dari Rp 75.000/m²",
    image: "/rajacuttinglaser/images/laserfiber.webp",
    keywords: "laser fiber cutting jakarta, potong stainless steel bekasi, laser metal bogor, cutting metal depok, laser fiber tangerang"
  },
  {
    id: "laser-co2",
    name: "Jasa Laser CO2",
    slug: "jasa-laser-co2",
    description: "Laser CO2 untuk material non-metal seperti acrylic, kayu, dan kain dengan detail sempurna",
    features: ["Acrylic & Kayu", "Engraving Detail", "Cutting Presisi", "Finishing Halus"],
    price: "Mulai dari Rp 40.000/m²",
    image: "/rajacuttinglaser/images/co2.webp",
    keywords: "laser co2 akrilik jakarta, potong acrylic bogor, laser kayu depok, cutting akrilik tangerang, laser co2 bekasi"
  },
  {
    id: "galvo-engraving",
    name: "Laser Engraving",
    slug: "jasa-galvo-engraving",
    description: "Galvo laser engraving untuk marking, logo, dan detail halus pada berbagai material",
    features: ["Marking Presisi", "Logo & Text", "Material Beragam", "Hasil Permanen"],
    price: "Mulai dari Rp 25.000/pcs",
    image: "/rajacuttinglaser/images/galvo.webp",
    keywords: "laser engraving jakarta, marking laser bekasi, logo engraving bogor, galvo engraving depok, laser marking tangerang"
  }
];

export const MATERIALS = [
  {
    id: "acp",
    name: "ACP",
    slug: "material-acp",
    description: "Cutting ACP (Aluminium Composite Panel) untuk signage dan fasad bangunan",
    thickness: "3mm - 6mm",
    applications: ["Signage", "Fasad", "Interior", "Eksterior"],
    image: "/rajacuttinglaser/images/acp.webp",
    keywords: "potong acp aluminium jakarta, cutting acp bekasi, acp laser bogor, potong acp depok, cutting acp tangerang"
  },
  {
    id: "pvc",
    name: "PVC Plastik",
    slug: "material-pvc",
    description: "Cutting PVC custom untuk berbagai keperluan industri dan kreatif",
    thickness: "1mm - 10mm",
    applications: ["Signage", "Prototype", "Display", "Packaging"],
    image: "/rajacuttinglaser/images/pvc.webp",
    keywords: "cutting pvc custom jakarta, potong pvc plastik bekasi, laser pvc bogor, cutting pvc depok, potong pvc tangerang"
  },
  {
    id: "metal",
    name: "Stainless Steel / Metal",
    slug: "material-metal",
    description: "Laser cutting stainless steel dengan presisi tinggi untuk industri",
    thickness: "0.5mm - 20mm",
    applications: ["Industri", "Arsitektur", "Furniture", "Dekorasi"],
    image: "/rajacuttinglaser/images/stainlesssteel.webp",
    keywords: "laser cutting stainless steel jakarta, potong besi presisi bekasi, cutting metal bogor, laser stainless depok, potong metal tangerang"
  },
  {
    id: "acrylic",
    name: "Acrylic Kaca",
    slug: "material-acrylic",
    description: "Cutting dan engraving acrylic untuk display dan dekorasi premium",
    thickness: "2mm - 30mm",
    applications: ["Display", "Signage", "Dekorasi", "Prototype"],
    image: "/rajacuttinglaser/images/Acrylic.webp",
    keywords: "potong acrylic kaca jakarta, laser acrylic bekasi, cutting akrilik bogor, potong akrilik depok, laser acrylic tangerang"
  },
  {
    id: "ply-wood-multiplex",
    name: "Ply Wood / Multiplex",
    slug: "material-ply-wood-multiplex",
    description: "Cutting dan engraving Ply Wood / Multiplex untuk furniture dan dekorasi",
    thickness: "3mm - 20mm",
    applications: ["Furniture", "Dekorasi", "Kerajinan", "Interior"],
    image: "/rajacuttinglaser/images/Ply Wood.webp",
    keywords: "potong plywood jakarta, laser kayu bekasi, cutting multiplex bogor, potong kayu depok, laser plywood tangerang"
  },
  {
    id: "grc",
    name: "GRC",
    slug: "material-grc",
    description: "Cutting GRC (Glassfibre Reinforced Concrete) untuk fasad dan ornamen bangunan",
    thickness: "8mm - 15mm",
    applications: ["Fasad", "Ornamen", "Panel", "Eksterior"],
    image: "/rajacuttinglaser/images/grc.webp",
    keywords: "potong grc jakarta, grc laser cutting bekasi, fasad grc bogor, cutting grc depok, laser grc tangerang"
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Budi Santoso",
    company: "PT. Kreatif Nusantara Jakarta",
    position: "Project Manager",
    content: "Kualitas laser cutting terbaik yang pernah kami gunakan di Jakarta. Presisi tinggi dan hasil sempurna untuk semua project signage kami.",
    rating: 5,
    image: "/rajacuttinglaser/images/budisantoso.webp"
  },
  {
    id: 2,
    name: "Sari Dewi",
    company: "Studio Arsitektur Modern Bekasi",
    position: "Lead Architect",
    content: "Pelayanan profesional dan hasil cutting yang sangat memuaskan. Recommended untuk semua kebutuhan laser cutting di Jabodetabek.",
    rating: 5,
    image: "/rajacuttinglaser/images/Sari Dewi.webp"
  },
  {
    id: 3,
    name: "Ahmad Rizki",
    company: "Furniture Mebel Jaya Bogor",
    position: "Owner",
    content: "Sudah 3 tahun menggunakan jasa LaserCut Pro. Selalu puas dengan kualitas dan ketepatan waktu pengerjaan, pengiriman ke Bogor juga cepat.",
    rating: 5,
    image: "/rajacuttinglaser/images/Ahmad Rizki.webp"
  }
];

export const PORTFOLIO = [
  {
    id: 1,
    title: "Signage Hotel Bintang 5 Jakarta",
    category: "Commercial",
    material: "ACP Aluminium",
    service: "CNC Router",
    image: "/rajacuttinglaser/images/singagehote.webp",
    description: "Pembuatan signage premium untuk hotel bintang 5 di Jakarta dengan detail presisi tinggi"
  },
  {
    id: 2,
    title: "Furniture Custom Stainless Bekasi",
    category: "Industrial",
    material: "Stainless Steel",
    service: "Laser Fiber",
    image: "/rajacuttinglaser/images/furnituremetal.webp",
    description: "Cutting furniture stainless steel custom untuk restaurant modern di Bekasi"
  },
  {
    id: 3,
    title: "Display Acrylic Premium Bogor",
    category: "Retail",
    material: "Acrylic",
    service: "Laser CO2",
    image: "/rajacuttinglaser/images/displyacrylic.webp",
    description: "Display acrylic premium untuk toko retail di Bogor dengan engraving logo"
  },
  {
    id: 4,
    title: "Prototype Industri Tangerang",
    category: "Manufacturing",
    material: "PVC",
    service: "CNC Router",
    image: "/rajacuttinglaser/images/prototype.webp",
    description: "Prototype komponen industri dengan presisi tinggi menggunakan PVC untuk klien di Tangerang"
  }
];

export const FAQ = [
  {
    id: 1,
    question: "Berapa lama waktu pengerjaan laser cutting?",
    answer: "Waktu pengerjaan tergantung kompleksitas dan volume order. Untuk project standar 1-3 hari kerja, project besar 1-2 minggu. Kami melayani area Jakarta, Bogor, Depok, Tangerang, Bekasi dengan estimasi waktu yang akurat setelah konsultasi."
  },
  {
    id: 2,
    question: "Apakah ada minimum order untuk jasa laser cutting?",
    answer: "Tidak ada minimum order. Kami melayani dari order satuan hingga produksi massal di seluruh Jabodetabek. Harga akan disesuaikan dengan volume dan kompleksitas pekerjaan."
  },
  {
    id: 3,
    question: "Material apa saja yang bisa di-cutting?",
    answer: "Kami melayani cutting untuk berbagai material: ACP, Stainless Steel, Aluminium, Acrylic, Kayu, MDF, PVC, Kain, Kulit, dan material lainnya. Konsultasikan material Anda dengan tim ahli kami untuk hasil optimal."
  },
  {
    id: 4,
    question: "Bagaimana cara mendapatkan quote harga?",
    answer: "Kirimkan file design (AI, CDR, DWG, PDF) dan spesifikasi material via WhatsApp. Tim kami akan memberikan quote dalam 24 jam beserta saran optimasi jika diperlukan. Melayani konsultasi gratis untuk seluruh Jabodetabek."
  },
  {
    id: 5,
    question: "Apakah ada garansi untuk hasil cutting?",
    answer: "Ya, kami memberikan garansi kualitas 100%. Jika hasil tidak sesuai spesifikasi yang disepakati, kami akan mengulang pekerjaan tanpa biaya tambahan. Berlaku untuk semua layanan di Jakarta, Bogor, Depok, Tangerang, Bekasi."
  },
  {
    id: 6,
    question: "Apakah melayani pengiriman ke seluruh Jabodetabek?",
    answer: "Ya, kami melayani pengiriman ke seluruh area Jabodetabek: Jakarta, Bogor, Depok, Tangerang, dan Bekasi. Untuk project besar, kami juga menyediakan layanan instalasi di lokasi."
  }
];

export const BLOG_POSTS = [
  {
    id: 1,
    title: "Cara Memilih Material yang Tepat untuk Laser Cutting di Jakarta",
    slug: "cara-memilih-material-laser-cutting-jakarta",
    excerpt: "Panduan lengkap memilih material yang sesuai untuk project laser cutting Anda di Jabodetabek",
    category: "Tutorial",
    readTime: "5 menit",
    publishDate: "2024-01-15",
    image: "/rajacuttinglaser/images/acp.webp"
  },
  {
    id: 2,
    title: "Perbedaan Laser Fiber vs Laser CO2: Mana yang Lebih Baik untuk Bisnis di Jabodetabek?",
    slug: "perbedaan-laser-fiber-vs-co2-jabodetabek",
    excerpt: "Analisis mendalam tentang kelebihan dan kekurangan masing-masing teknologi laser untuk industri Jabodetabek",
    category: "Technical",
    readTime: "7 menit",
    publishDate: "2024-01-10",
    image: "/rajacuttinglaser/images/laserfiber.webp"
  },
  {
    id: 3,
    title: "Tren Industri Kreatif Jakarta 2024: Peluang Laser Cutting",
    slug: "tren-industri-kreatif-jakarta-2024",
    excerpt: "Insight tentang perkembangan industri kreatif di Jakarta dan peluang bisnis laser cutting",
    category: "Industry",
    readTime: "6 menit",
    publishDate: "2024-01-05",
    image: "/rajacuttinglaser/images/cncrouter.webp"
  },
  {
    id: 4,
    title: "5 Kesalahan Umum Saat Memilih Jasa Laser Cutting di Jabodetabek",
    slug: "kesalahan-umum-memilih-jasa-laser-cutting-jabodetabek",
    excerpt: "Hindari kesalahan fatal yang bisa merugikan project Anda dengan tips dari ahli laser cutting Jabodetabek",
    category: "Tips",
    readTime: "8 menit",
    publishDate: "2024-01-20",
    image: "/rajacuttinglaser/images/co2.webp"
  },
  {
    id: 5,
    title: "Panduan Lengkap: Cara Menyiapkan File Desain untuk Laser Cutting Akurat",
    slug: "panduan-file-desain-laser-cutting-akurat",
    excerpt: "Tutorial step-by-step menyiapkan file desain yang optimal untuk hasil laser cutting terbaik dan akurat",
    category: "Tutorial",
    readTime: "10 menit",
    publishDate: "2024-01-18",
    image: "/rajacuttinglaser/images/engraving.webp"
  },
  {
    id: 6,
    title: "GRC vs ACP: Mana Material Terbaik untuk Fasad Bangunan di Jakarta?",
    slug: "grc-vs-acp-material-fasad-bangunan-jakarta",
    excerpt: "Perbandingan komprehensif antara GRC dan ACP untuk membantu Anda memilih material fasad yang tepat di Jakarta",
    category: "Comparison",
    readTime: "9 menit",
    publishDate: "2024-01-16",
    image: "/rajacuttinglaser/images/grc.webp"
  },
  {
    id: 7,
    title: "Teknik Laser Engraving Cepat: Dari Kayu hingga Metal untuk Branding Produk",
    slug: "teknik-laser-engraving-cepat-branding-produk",
    excerpt: "Eksplorasi teknik laser engraving cepat pada berbagai material untuk menciptakan branding produk yang memorable",
    category: "Technical",
    readTime: "12 menit",
    publishDate: "2024-01-14",
    image: "/rajacuttinglaser/images/galvo.webp"
  },
  {
    id: 8,
    title: "Studi Kasus: Bagaimana CNC Router Mengubah Industri Furniture Custom di Bekasi",
    slug: "cnc-router-industri-furniture-custom-bekasi",
    excerpt: "Analisis mendalam bagaimana teknologi CNC Router merevolusi industri furniture custom di Bekasi dan sekitarnya",
    category: "Case Study",
    readTime: "11 menit",
    publishDate: "2024-01-12",
    image: "/rajacuttinglaser/images/Ply Wood.webp"
  },
  {
    id: 9,
    title: "Perawatan Hasil Laser Cutting pada Stainless Steel agar Tidak Kusam",
    slug: "perawatan-laser-cutting-stainless-steel",
    excerpt: "Tips dan trik profesional untuk menjaga hasil laser cutting stainless steel tetap berkilau dan awet",
    category: "Maintenance",
    readTime: "6 menit",
    publishDate: "2024-01-08",
    image: "/rajacuttinglaser/images/Acrylic.webp"
  }
];

export const NAVIGATION = [
  { name: "Beranda", href: "/", active: true },
  {
    name: "Layanan",
    href: "/#services",
    submenu: [
      { name: "CNC Router", href: "/jasa-cnc-router" },
      { name: "Laser Fiber", href: "/jasa-laser-fiber" },
      { name: "Laser CO2", href: "/jasa-laser-co2" },
      { name: "Galvo Engraving", href: "/jasa-galvo-engraving" }
    ]
  },
  {
    name: "Material",
    href: "/#materials",
    submenu: [
      { name: "ACP", href: "/material-acp" },
      { name: "PVC Plastik", href: "/material-pvc" },
      { name: "Stainless Steel / Metal", href: "/material-metal" },
      { name: "Acrylic Kaca", href: "/material-acrylic" },
      { name: "Ply Wood / Multiplex", href: "/material-ply-wood-multiplex" },
      { name: "GRC", href: "/material-grc" }
    ]
  },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Blog", href: "/blog" },
  { name: "Tentang", href: "/about" },
  { name: "Kontak", href: "/contact" }
];

export const WHATSAPP_MESSAGES = {
  default: "Halo, saya tertarik dengan jasa laser cutting. Bisa konsultasi gratis?",
  cnc: "Halo, saya butuh informasi tentang jasa CNC Router. Bisa bantu konsultasi gratis?",
  fiber: "Halo, saya ingin tanya tentang laser fiber cutting untuk material metal. Bisa konsultasi gratis?",
  co2: "Halo, saya tertarik dengan laser CO2 untuk cutting acrylic. Bisa konsultasi gratis?",
  engraving: "Halo, saya butuh jasa laser engraving. Bisa konsultasi gratis?",
  quote: "Halo, saya ingin request quote untuk project laser cutting. Bisa konsultasi gratis dulu?"
};
# LaserCut Pro - Website Laser Cutting

Website profesional untuk jasa laser cutting dengan teknologi Astro.js, Tailwind CSS, dan optimasi SEO lengkap.

## 🚀 Fitur Utama

- **Responsive Design**: Tampilan optimal di semua perangkat (desktop, tablet, mobile)
- **SEO Optimized**: Meta tags, structured data, sitemap, dan optimasi performa
- **Fast Loading**: Dibangun dengan Astro.js untuk performa maksimal
- **Modern UI/UX**: Design modern dengan Tailwind CSS
- **Accessibility**: Memenuhi standar aksesibilitas web
- **PWA Ready**: Manifest dan service worker untuk pengalaman app-like

## 📋 Halaman Website

### Halaman Utama
- **Beranda** (`/`) - Landing page dengan hero section, layanan, portfolio, testimoni, FAQ
- **Tentang Kami** (`/about`) - Profil perusahaan, visi misi, tim, sertifikat
- **Kontak** (`/contact`) - Informasi kontak, form konsultasi, area layanan

### Halaman Layanan
- **CNC Router** (`/jasa-cnc-router`) - Layanan CNC Router untuk kayu dan non-metal
- **Laser Fiber** (`/jasa-laser-fiber`) - Layanan Laser Fiber untuk metal presisi
- **Laser CO2** (`/jasa-laser-co2`) - Layanan Laser CO2 untuk acrylic dan non-metal
- **Galvo Engraving** (`/jasa-galvo-engraving`) - Layanan marking dan engraving presisi

## 🛠 Teknologi yang Digunakan

- **Framework**: Astro.js 4.x
- **Styling**: Tailwind CSS 3.x
- **Icons**: Heroicons (SVG)
- **Fonts**: Inter & Poppins (Google Fonts)
- **Build Tool**: Vite
- **Package Manager**: npm

## 📁 Struktur Proyek

```
laser-cutting-website/
├── public/                 # Static assets
│   ├── /images/            # Gambar dan foto
│   ├── icons/             # Icon dan favicon
│   ├── assets/            # Asset lainnya
│   ├── robots.txt         # SEO robots
│   ├── sitemap.xml        # SEO sitemap
│   ├── manifest.json      # PWA manifest
│   └── .htaccess          # Apache config
├── src/
│   ├── components/        # Komponen Astro
│   │   ├── BaseLayout.astro
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   └── CTA.astro
│   ├── pages/             # Halaman website
│   │   ├── index.astro
│   │   ├── about.astro
│   │   ├── contact.astro
│   │   ├── jasa-cnc-router.astro
│   │   ├── jasa-laser-fiber.astro
│   │   ├── jasa-laser-co2.astro
│   │   └── jasa-galvo-engraving.astro
│   ├── styles/            # CSS dan styling
│   │   └── global.css
│   └── utils/             # Utility functions
│       ├── constants.js
│       └── seo.js
├── astro.config.mjs       # Konfigurasi Astro
├── tailwind.config.mjs    # Konfigurasi Tailwind
└── package.json           # Dependencies
```

## 🚀 Instalasi dan Setup

### Prerequisites
- Node.js 18+ 
- npm atau yarn

### Langkah Instalasi

1. **Clone atau extract project**
```bash
# Jika dari zip
unzip laser-cutting-website.zip
cd laser-cutting-website

# Atau clone dari repository
git clone <repository-url>
cd laser-cutting-website
```

2. **Install dependencies**
```bash
npm install
```

3. **Jalankan development server**
```bash
npm run dev
```

4. **Buka browser**
```
http://localhost:4321
```

## 📝 Scripts yang Tersedia

```bash
# Development server
npm run dev

# Build untuk production
npm run build

# Preview build hasil
npm run preview

# Lint dan format code
npm run lint
npm run format
```

## 🎨 Kustomisasi

### Mengubah Konten
1. **Informasi Perusahaan**: Edit `src/utils/constants.js`
2. **Konten Halaman**: Edit file `.astro` di folder `src/pages/`
3. **Komponen**: Edit file di folder `src/components/`

### Mengubah Styling
1. **Warna dan Theme**: Edit `tailwind.config.mjs`
2. **CSS Global**: Edit `src/styles/global.css`
3. **Komponen Styling**: Edit langsung di file `.astro`

### Menambah Gambar
1. Letakkan gambar di folder `public//images/`
2. Gunakan path `//images/nama-file.jpg` di kode
3. Pastikan format WebP untuk optimasi

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## 🔍 SEO Features

- Meta tags dinamis per halaman
- Open Graph dan Twitter Cards
- Structured data (JSON-LD)
- Sitemap XML otomatis
- Robots.txt
- Canonical URLs
- Alt text untuk gambar

## 🚀 Deployment

### Build Production
```bash
npm run build
```

### Deploy ke Hosting
1. **Shared Hosting**: Upload folder `dist/` ke public_html
2. **Netlify/Vercel**: Connect repository dan auto-deploy
3. **VPS**: Setup web server dan upload build

### Environment Variables
Tidak ada environment variables yang diperlukan untuk basic setup.

## 📞 Kontak & Support

Untuk pertanyaan teknis atau kustomisasi lebih lanjut:

- **Email**: developer@lasercutpro.com
- **WhatsApp**: +62 812-3456-7890
- **Website**: https://lasercutpro.com

## 📄 License

Copyright © 2025 LaserCut Pro. All rights reserved.

---

**Dibuat dengan ❤️ menggunakan Astro.js dan Tailwind CSS**



## 🔧 Dokumentasi Teknis

### Komponen Utama

#### BaseLayout.astro
Komponen layout dasar yang digunakan oleh semua halaman:
- Meta tags dan SEO
- Google Fonts loading
- Structured data injection
- Global CSS dan scripts

#### Header.astro
Navigasi utama website:
- Responsive navigation
- Mobile hamburger menu
- Active state indicators
- WhatsApp integration

#### Footer.astro
Footer dengan informasi lengkap:
- Company information
- Quick links
- Social media links
- Copyright notice

#### Hero.astro
Komponen hero section yang reusable:
- Background image support
- CTA buttons
- WhatsApp integration
- Responsive text sizing

#### CTA.astro
Call-to-action section:
- Multiple variants (gradient, solid)
- Flexible sizing
- Button combinations

### Utility Functions

#### constants.js
Berisi semua data statis website:
- Site configuration
- Services data
- Testimonials
- FAQ data
- WhatsApp messages

#### seo.js
Helper functions untuk SEO:
- Meta tags generation
- Structured data creation
- Breadcrumb schema
- Service schema

### Styling System

#### Tailwind Configuration
Custom configuration meliputi:
- Brand colors (primary, secondary)
- Custom fonts (Inter, Poppins)
- Extended spacing
- Custom animations
- Box shadows

#### CSS Classes
Utility classes yang sering digunakan:
- `.container-custom`: Container dengan max-width
- `.section-padding`: Padding section standar
- `.heading-xl`, `.heading-lg`: Typography hierarchy
- `.btn-primary`, `.btn-secondary`: Button styles

### Performance Optimizations

#### Image Optimization
- WebP format untuk gambar modern
- Lazy loading dengan `loading="lazy"`
- Responsive images dengan srcset
- Proper alt text untuk accessibility

#### CSS Optimization
- Tailwind CSS purging
- Critical CSS inlining
- Minimal custom CSS

#### JavaScript Optimization
- Minimal JavaScript usage
- Inline scripts untuk interactivity
- No external JS dependencies

### SEO Implementation

#### Meta Tags
Setiap halaman memiliki:
- Title tag yang unik
- Meta description
- Keywords meta tag
- Open Graph tags
- Twitter Card tags
- Canonical URL

#### Structured Data
Implementasi schema.org:
- Organization schema
- Service schema
- Breadcrumb schema
- Local business schema

#### Technical SEO
- Sitemap XML
- Robots.txt
- Proper heading hierarchy (H1-H6)
- Internal linking structure

### Accessibility Features

#### WCAG Compliance
- Semantic HTML structure
- Proper heading hierarchy
- Alt text untuk semua gambar
- Keyboard navigation support
- Color contrast compliance

#### Screen Reader Support
- ARIA labels
- Skip navigation links
- Descriptive link text
- Form labels

### Browser Compatibility

#### Supported Browsers
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

#### Fallbacks
- CSS Grid dengan Flexbox fallback
- Modern CSS dengan vendor prefixes
- Progressive enhancement approach

### Performance Metrics

#### Target Scores
- Lighthouse Performance: 90+
- Lighthouse Accessibility: 95+
- Lighthouse Best Practices: 90+
- Lighthouse SEO: 95+

#### Optimization Techniques
- Image compression dan format modern
- CSS dan JS minification
- Gzip compression
- Browser caching headers

### Security Considerations

#### Headers
- X-Content-Type-Options: nosniff
- X-Frame-Options: DENY
- X-XSS-Protection: 1; mode=block
- Referrer-Policy: strict-origin-when-cross-origin

#### Content Security
- No inline scripts (kecuali yang diperlukan)
- Sanitized user inputs
- HTTPS enforcement (production)

### Maintenance Guidelines

#### Regular Updates
- Dependencies security updates
- Content freshness
- Image optimization
- Performance monitoring

#### Monitoring
- Google Analytics setup
- Search Console monitoring
- Core Web Vitals tracking
- Error logging

#### Backup Strategy
- Regular code backups
- Database backups (jika ada)
- Asset backups
- Version control

### Troubleshooting

#### Common Issues

**Build Errors**
```bash
# Clear node_modules dan reinstall
rm -rf node_modules package-lock.json
npm install

# Clear Astro cache
rm -rf .astro
npm run build
```

**Styling Issues**
```bash
# Rebuild Tailwind
npm run build:css
```

**Image Loading Issues**
- Pastikan path gambar benar
- Check file permissions
- Verify image format support

#### Debug Mode
```bash
# Development dengan debug
npm run dev -- --verbose

# Build dengan debug info
npm run build -- --verbose
```

### Deployment Checklist

#### Pre-deployment
- [ ] Test semua halaman
- [ ] Verify responsive design
- [ ] Check form functionality
- [ ] Test WhatsApp links
- [ ] Validate HTML/CSS
- [ ] Run Lighthouse audit

#### Production Setup
- [ ] Configure web server
- [ ] Setup SSL certificate
- [ ] Configure caching headers
- [ ] Setup redirects
- [ ] Configure error pages
- [ ] Setup monitoring

#### Post-deployment
- [ ] Test live website
- [ ] Submit sitemap to search engines
- [ ] Setup Google Analytics
- [ ] Configure Search Console
- [ ] Monitor performance
- [ ] Setup uptime monitoring

### Future Enhancements

#### Planned Features
- Blog/artikel section
- Portfolio gallery dengan lightbox
- Online quote calculator
- Customer portal
- Multi-language support

#### Technical Improvements
- Service Worker untuk offline support
- Advanced image optimization
- Database integration
- API endpoints
- Admin dashboard

### Support & Maintenance

#### Documentation Updates
Dokumentasi ini harus diupdate ketika:
- Menambah fitur baru
- Mengubah struktur project
- Update dependencies major
- Perubahan deployment process

#### Code Standards
- Use TypeScript untuk type safety
- Follow Astro best practices
- Maintain consistent naming
- Document complex functions
- Write meaningful commit messages

---

*Dokumentasi ini dibuat untuk memudahkan maintenance dan development website LaserCut Pro. Selalu update dokumentasi ketika melakukan perubahan signifikan pada codebase.*


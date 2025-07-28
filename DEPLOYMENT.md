# 🚀 Panduan Deployment LaserCut Pro Website

Panduan lengkap untuk deploy website LaserCut Pro ke berbagai platform hosting.

## 📋 Pre-Deployment Checklist

### 1. Testing Lokal
```bash
# Build dan test lokal
npm run build
npm run preview

# Test di http://localhost:4321
```

### 2. Validasi Konten
- [ ] Semua halaman dapat diakses
- [ ] Form kontak berfungsi
- [ ] WhatsApp links bekerja
- [ ] Gambar loading dengan baik
- [ ] Responsive di semua device

### 3. SEO Check
- [ ] Meta tags lengkap
- [ ] Sitemap.xml accessible
- [ ] Robots.txt configured
- [ ] Structured data valid

### 4. Performance Check
```bash
# Lighthouse audit
npx lighthouse http://localhost:4321 --output html --output-path ./lighthouse-report.html
```

## 🌐 Deployment Options

### Option 1: Shared Hosting (cPanel)

#### Langkah-langkah:
1. **Build project**
```bash
npm run build
```

2. **Upload files**
- Compress folder `dist/` menjadi zip
- Login ke cPanel → File Manager
- Navigate ke `public_html/`
- Upload dan extract zip file
- Move semua file dari folder `dist/` ke root `public_html/`

3. **Configure .htaccess**
File `.htaccess` sudah included untuk:
- Compression
- Caching headers
- Security headers
- Clean URLs

4. **Test website**
- Akses domain Anda
- Test semua halaman dan fungsi

#### Recommended Hosting:
- Hostinger
- Niagahoster  
- IDCloudHost
- Dewaweb

### Option 2: Netlify (Recommended)

#### Setup:
1. **Push ke Git repository**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <your-repo-url>
git push -u origin main
```

2. **Connect ke Netlify**
- Login ke netlify.com
- "New site from Git"
- Connect repository
- Build settings:
  - Build command: `npm run build`
  - Publish directory: `dist`

3. **Configure domain**
- Add custom domain
- Setup SSL (automatic)

#### Netlify Features:
- Automatic deployments
- Branch previews
- Form handling
- CDN global
- Free SSL

### Option 3: Vercel

#### Setup:
1. **Install Vercel CLI**
```bash
npm i -g vercel
```

2. **Deploy**
```bash
vercel --prod
```

3. **Configure**
- Follow prompts
- Set build command: `npm run build`
- Set output directory: `dist`

#### Vercel Features:
- Edge functions
- Analytics
- Preview deployments
- Custom domains

### Option 4: VPS/Cloud Server

#### Requirements:
- Ubuntu 20.04+ / CentOS 8+
- Node.js 18+
- Nginx/Apache
- SSL certificate

#### Setup Nginx:
1. **Install dependencies**
```bash
sudo apt update
sudo apt install nginx nodejs npm
```

2. **Build project**
```bash
npm install
npm run build
```

3. **Configure Nginx**
```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;
    
    root /var/www/lasercut-pro/dist;
    index index.html;
    
    # Gzip compression
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
    
    # Cache static assets
    location ~* \.(jpg|jpeg|png|gif|ico|css|js|webp|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
    
    # Handle client-side routing
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header X-Content-Type-Options "nosniff" always;
}
```

4. **Setup SSL with Let's Encrypt**
```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

## 🔧 Environment Configuration

### Production Environment Variables
Buat file `.env.production` jika diperlukan:
```env
SITE_URL=https://yourdomain.com
CONTACT_EMAIL=info@yourdomain.com
WHATSAPP_NUMBER=6285165693179
```

### Build Optimization
```bash
# Production build dengan optimizations
npm run build

# Analyze bundle size
npx astro build --analyze
```

## 📊 Post-Deployment Setup

### 1. Google Analytics
Tambahkan tracking code di `BaseLayout.astro`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### 2. Google Search Console
- Verify domain ownership
- Submit sitemap: `https://yourdomain.com/sitemap.xml`
- Monitor indexing status

### 3. Performance Monitoring
Setup monitoring untuk:
- Uptime monitoring (UptimeRobot)
- Performance monitoring (PageSpeed Insights)
- Error tracking (Sentry)

### 4. Backup Strategy
```bash
# Automated backup script
#!/bin/bash
DATE=$(date +%Y%m%d_%H%M%S)
tar -czf backup_$DATE.tar.gz /var/www/lasercut-pro/
```

## 🔄 CI/CD Pipeline

### GitHub Actions Example
`.github/workflows/deploy.yml`:
```yaml
name: Deploy to Production

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Build
      run: npm run build
    
    - name: Deploy to Netlify
      uses: netlify/actions/cli@master
      with:
        args: deploy --prod --dir=dist
      env:
        NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
        NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
```

## 🛡️ Security Considerations

### 1. HTTPS Enforcement
Pastikan semua traffic menggunakan HTTPS:
```nginx
# Redirect HTTP to HTTPS
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;
    return 301 https://$server_name$request_uri;
}
```

### 2. Security Headers
Headers yang sudah dikonfigurasi:
- X-Content-Type-Options: nosniff
- X-Frame-Options: DENY
- X-XSS-Protection: 1; mode=block
- Referrer-Policy: strict-origin-when-cross-origin

### 3. File Permissions
```bash
# Set proper permissions
sudo chown -R www-data:www-data /var/www/lasercut-pro/
sudo chmod -R 755 /var/www/lasercut-pro/
```

## 📈 Performance Optimization

### 1. CDN Setup
Gunakan CDN untuk static assets:
- Cloudflare (recommended)
- AWS CloudFront
- KeyCDN

### 2. Image Optimization
```bash
# Optimize images before deployment
npm install -g imagemin-cli
imagemin public/images/* --out-dir=public/images/optimized/
```

### 3. Caching Strategy
- Static assets: 1 year cache
- HTML files: 1 day cache
- API responses: appropriate cache headers

## 🔍 Monitoring & Maintenance

### 1. Regular Checks
- Weekly performance audits
- Monthly security updates
- Quarterly content reviews

### 2. Monitoring Tools
- Google PageSpeed Insights
- GTmetrix
- Pingdom
- UptimeRobot

### 3. Update Schedule
```bash
# Monthly dependency updates
npm audit
npm update
npm run build
npm run test
```

## 🆘 Troubleshooting

### Common Issues

#### Build Failures
```bash
# Clear cache and rebuild
rm -rf node_modules .astro dist
npm install
npm run build
```

#### 404 Errors
- Check .htaccess configuration
- Verify file paths
- Check server configuration

#### Performance Issues
- Optimize images
- Enable compression
- Check CDN configuration
- Review caching headers

#### SSL Issues
```bash
# Renew SSL certificate
sudo certbot renew
sudo systemctl reload nginx
```

## 📞 Support

Untuk bantuan deployment:
- **Email**: support@lasercutpro.com
- **WhatsApp**: +62 812-3456-7890
- **Documentation**: https://docs.lasercutpro.com

---

*Panduan ini mencakup semua aspek deployment website LaserCut Pro. Pastikan mengikuti checklist dan best practices untuk deployment yang sukses.*


<div align="center">

# 🚀 Professional Portfolio

A modern, production-ready portfolio website built with React, TypeScript, and Tailwind CSS. Features AI-powered chat assistant, dark mode, and responsive design.

[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19.1-61DAFB)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-6.2-646CFF)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC)](https://tailwindcss.com/)

[Live Demo](https://yourname.me) · [Report Bug](https://github.com/shahan27348/post-genration-microSaaS-app/issues)

</div>

---

## ✨ Features

- 🎨 **Modern Design** - Clean, professional UI with smooth animations
- 🌓 **Dark Mode** - Automatic theme detection with manual toggle
- 💬 **AI Chat Assistant** - Powered by Google Gemini AI with resume data
- 📧 **Working Contact Form** - Email integration with EmailJS
- 📱 **Fully Responsive** - Optimized for all devices
- ⚡ **Fast Performance** - Built with Vite for lightning-fast load times
- 🎯 **SEO Optimized** - Meta tags, sitemap, and robots.txt included
- ♿ **Accessible** - WCAG compliant with proper ARIA labels
- 🔒 **Secure** - Environment variables and security headers configured

## 🛠️ Tech Stack

- **Framework:** React 19 with TypeScript
- **Build Tool:** Vite 6
- **Styling:** Tailwind CSS
- **AI:** Google Gemini API
- **Email Service:** EmailJS
- **Deployment:** Vercel / Netlify
- **Code Quality:** ESLint, TypeScript strict mode

## 📁 Project Structure

```
professional-portfolio/
├── public/                 # Static assets
│   ├── robots.txt         # SEO configuration
│   ├── sitemap.xml        # Sitemap for search engines
│   └── images/            # Images and media
├── src/
│   ├── components/
│   │   ├── layout/        # Layout components (Navbar, Footer)
│   │   ├── sections/      # Page sections (Home, About, etc.)
│   │   ├── ui/            # Reusable UI components
│   │   └── shared/        # Shared components (ErrorBoundary)
│   ├── contexts/          # React contexts (Theme)
│   ├── hooks/             # Custom React hooks
│   ├── utils/             # Utility functions
│   ├── config/            # Configuration files
│   ├── constants/         # App constants
│   ├── types/             # TypeScript type definitions
│   ├── App.tsx            # Main App component
│   ├── main.tsx           # App entry point
│   └── index.css          # Global styles
├── .env.example           # Environment variables template
├── vercel.json            # Vercel deployment config
├── netlify.toml           # Netlify deployment config
├── tailwind.config.js     # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
└── vite.config.ts         # Vite configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js 20 or higher
- npm, yarn, or pnpm
- Gemini API key ([Get one here](https://aistudio.google.com/app/apikey))
- EmailJS account ([Sign up here](https://www.emailjs.com/)) - For contact form

### Installation

1. **Clone the repository**

   ```powershell
   git clone https://github.com/shahan27348/post-genration-microSaaS-app.git
   cd professional-portfolio
   ```

2. **Install dependencies**

   ```powershell
   npm install
   ```

3. **Set up environment variables**

   ```powershell
   cp .env.example .env.local
   ```

   Edit `.env.local` and add your API keys:

   ```env
   VITE_GEMINI_API_KEY=your_gemini_api_key_here
   VITE_EMAILJS_SERVICE_ID=your_service_id_here
   VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
   VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
   VITE_SITE_URL=https://yourname.me
   ```

   📧 **EmailJS Setup**: See [EMAILJS_SETUP_GUIDE.md](./EMAILJS_SETUP_GUIDE.md) for detailed instructions

4. **Start development server**

   ```powershell
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```powershell
npm run build
npm run preview
```

## 🌐 Deployment Guide

### Deploy to Vercel (Recommended)

1. **Install Vercel CLI** (optional)

   ```powershell
   npm install -g vercel
   ```

2. **Connect GitHub and Auto-Deploy**

   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel auto-detects Vite config
   - Add environment variable: `VITE_GEMINI_API_KEY`
   - Deploy!

3. **Custom Domain (.me domain)**
   - In Vercel dashboard, go to "Domains"
   - Add your `.me` domain
   - Update DNS records as instructed (see below)

### Deploy to Netlify

1. **Connect GitHub**

   - Go to [netlify.com](https://netlify.com)
   - New site from Git → Choose repository
   - Build command: `npm run build`
   - Publish directory: `dist`

2. **Set environment variables**
   - Site settings → Environment variables
   - Add `VITE_GEMINI_API_KEY`

## 🎓 Setting Up Your .me Domain (GitHub Education Pack)

### Step 1: Claim Your Domain

1. Go to [GitHub Education Pack](https://education.github.com/pack)
2. Find Namecheap offer and claim your free `.me` domain for 1 year
3. Register your domain (e.g., `yourname.me`)

### Step 2: Configure DNS for Vercel

In your Namecheap DNS settings, add these records:

```
Type: A      Host: @      Value: 76.76.21.21         TTL: Automatic
Type: CNAME  Host: www    Value: cname.vercel-dns.com TTL: Automatic
```

### Step 3: Configure DNS for Netlify

```
Type: A      Host: @      Value: 75.2.60.5                  TTL: Automatic
Type: CNAME  Host: www    Value: [your-site].netlify.app   TTL: Automatic
```

### Step 4: Add Domain to Hosting Provider

**Vercel:**

- Project Settings → Domains → Add `yourname.me` and `www.yourname.me`

**Netlify:**

- Site Settings → Domain Management → Add custom domain

### Step 5: Enable HTTPS (Automatic)

Both Vercel and Netlify automatically provision SSL certificates via Let's Encrypt.

**DNS propagation can take 24-48 hours.** Check status at [whatsmydns.net](https://www.whatsmydns.net/)

## 📝 Customization

### Update Personal Information

1. **Edit `src/constants/index.ts`**

   ```typescript
   export const EXPERIENCES: Experience[] = [
     {
       role: "Your Role",
       company: "Company Name",
       duration: "Start - End",
       description: ["Achievement 1", "Achievement 2"],
     },
   ];
   ```

2. **Edit `src/config/site.ts`**

   ```typescript
   export const siteConfig = {
     name: "Your Name",
     title: "Your Name - Your Title",
     // ... update social links
   };
   ```

3. **Replace images in `public/images/`**

### Modify Theme Colors

Edit `src/index.css`:

```css
:root {
  --color-primary: #f0f2f5; /* Background */
  --color-accent: #0866ff; /* Accent color */
  /* ... */
}
```

## 🔧 Available Scripts

```powershell
npm run dev          # Start development server (port 3000)
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm run type-check   # Check TypeScript types
```

## 🐛 Troubleshooting

### API Key Issues

- Ensure `.env.local` exists with `VITE_GEMINI_API_KEY=your_key`
- Restart dev server after changing environment variables
- Variable name MUST start with `VITE_` prefix

### Build Errors

```powershell
# Clear and reinstall
rm -r node_modules; npm install

# Clear Vite cache
rm -r node_modules/.vite; npm run dev
```

### TypeScript Errors

```powershell
npm run type-check  # See all type errors
```

## 📊 Performance Benchmarks

- ✅ Lighthouse Score: 95+
- ✅ First Contentful Paint: < 1.5s
- ✅ Time to Interactive: < 3s
- ✅ Accessibility Score: 100

## 🚀 Next Steps After Deployment

1. **Update sitemap.xml** with your actual domain
2. **Submit to Google Search Console**
3. **Add Google Analytics** (optional)
4. **Create og-image.jpg** for social media previews
5. **Set up monitoring** (Vercel Analytics / Netlify Analytics)

## 📧 Contact

Muhammad Shahan - [@shahan27348](https://github.com/shahan27348)

Project Link: [https://github.com/shahan27348/post-genration-microSaaS-app](https://github.com/shahan27348/post-genration-microSaaS-app)

---

<div align="center">
  Made with ❤️ by Muhammad Shahan
  <br />
  ⭐ Star this repo if you find it helpful!
</div>

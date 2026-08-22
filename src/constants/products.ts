export type ProductLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type ProductDetail = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  screenshots: string[];
  technologies: string[];
  features: string[];
  stats: { label: string; value: string }[];
  links: ProductLink[];
  privacy?: string[];
};

export const PRODUCTS: ProductDetail[] = [
  {
    slug: "proofy-reviews",
    title: "Proofy Reviews",
    subtitle: "Wix App Market · Reviews & Testimonials",
    description:
      "Proofy Reviews helps Wix merchants collect, manage, and display product reviews with beautiful widgets, automated email campaigns, and conversion-focused social proof.",
    image: "/images/proofy-reviews.png",
    screenshots: ["/images/proofy-reviews.png"],
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Wix App Framework",
      "REST APIs",
      "JWT Auth",
    ],
    features: [
      "Automated review request emails after purchase",
      "8+ customizable review display widgets",
      "Photo & video review moderation",
      "CSV import/export and analytics dashboard",
      "Verified review badges and rating banners",
    ],
    stats: [
      { label: "Platform", value: "Wix App Market" },
      { label: "Status", value: "Live · Free" },
      { label: "Installs", value: "500+ merchants" },
      { label: "Rating", value: "4.4 / 5" },
    ],
    links: [
      {
        label: "Get the App",
        href: "https://www.wix.com/app-market/ichnoic-reviews-app?searchLocation=search-bar-homepage",
        external: true,
      },
    ],
  },
  {
    slug: "page-speed-booster",
    title: "Page Speed Booster",
    subtitle: "Wix App Market · Performance & SEO",
    description:
      "Page Speed Booster improves Core Web Vitals and page load performance for Wix sites with automatic front-end optimizations — no code required.",
    image: "/images/page-speed-booster.png",
    screenshots: ["/images/page-speed-booster.png"],
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Wix App Framework",
      "Performance APIs",
      "Caching Strategies",
    ],
    features: [
      "Automatic LCP, FCP, CLS, TBT & SI improvements",
      "Desktop and mobile performance boosts",
      "Performance history dashboard",
      "Lazy loading and resource prioritization",
      "SEO-friendly speed gains with zero coding",
    ],
    stats: [
      { label: "Platform", value: "Wix App Market" },
      { label: "Status", value: "Live · Premium" },
      { label: "Installs", value: "1,000+ sites" },
      { label: "Rating", value: "3.8 / 5" },
    ],
    links: [
      {
        label: "Get the App",
        href: "https://www.wix.com/app-market/page-speed-booster-ichonic?appIndex=17&referral=search-result&referralSectionName=page%20speed%20booster",
        external: true,
      },
    ],
  },
  {
    slug: "vibe-vault",
    title: "Vibe Vault",
    subtitle: "Personal Project · Music Web App",
    description:
      "Vibe Vault is a music-focused web experience with a polished UI, smooth browsing flow, and a modern aesthetic designed for enjoyable listening discovery.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1400&q=80",
    screenshots: [
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1400&q=80",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Vite",
      "Vercel",
    ],
    features: [
      "Clean, immersive music browsing UI",
      "Responsive layout for mobile and desktop",
      "Fast client-side navigation",
      "Deployed and publicly accessible",
    ],
    stats: [
      { label: "Platform", value: "Web App" },
      { label: "Status", value: "Live" },
      { label: "Users", value: "Public demo" },
      { label: "Hosting", value: "Vercel" },
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/shahan27348/Vibe-Vault",
        external: true,
      },
      {
        label: "Live Preview",
        href: "https://vibe-vault-henna.vercel.app/",
        external: true,
      },
    ],
  },
  {
    slug: "loupe-colorpicker",
    title: "LoupeColorpicker",
    subtitle: "Chrome Extension · Color Tools",
    description:
      "LoupeColorpicker is a Chrome extension that helps designers and developers inspect, pick, and capture colors from any webpage with a precise loupe-style magnifier experience.",
    image: "/images/loupe-colorpicker.png",
    screenshots: ["/images/loupe-colorpicker.png"],
    technologies: [
      "JavaScript",
      "Chrome Extension APIs",
      "HTML5 Canvas",
      "CSS3",
      "Manifest V3",
    ],
    features: [
      "Pixel-precise loupe color picker",
      "One-click color capture from any page",
      "HEX / RGB color formats",
      "Lightweight Chrome Web Store extension",
      "Privacy-first — no unnecessary data collection",
    ],
    stats: [
      { label: "Platform", value: "Chrome Web Store" },
      { label: "Status", value: "Live" },
      { label: "Installs", value: "Growing users" },
      { label: "Type", value: "Browser Extension" },
    ],
    links: [
      {
        label: "Get Extension",
        href: "#",
        external: true,
      },
      {
        label: "Privacy Policy",
        href: "/products/loupe-colorpicker/privacypolicy",
        external: false,
      },
    ],
  },
];

export const getProductBySlug = (slug: string) =>
  PRODUCTS.find((product) => product.slug === slug);

export const PRODUCT_CARDS = PRODUCTS.map((product) => ({
  title: product.title,
  slug: product.slug,
  tags: product.links.map((link) => ({
    label: link.label,
    href: link.href,
    external: link.external !== false,
  })),
  image: product.image,
  detailPath: `/products/${product.slug}`,
}));

/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GEMINI_API_KEY: string;
  readonly VITE_EMAILJS_SERVICE_ID?: string;
  readonly VITE_EMAILJS_TEMPLATE_ID?: string;
  readonly VITE_EMAILJS_PUBLIC_KEY?: string;
  readonly VITE_SITE_URL?: string;
  readonly VITE_SITE_NAME?: string;
  readonly VITE_SITE_DESCRIPTION?: string;
  readonly VITE_EMAIL?: string;
  readonly VITE_GITHUB_USERNAME?: string;
  readonly VITE_LINKEDIN_URL?: string;
  readonly VITE_GA_TRACKING_ID?: string;
  readonly VITE_HOTJAR_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

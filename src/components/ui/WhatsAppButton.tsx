import React from "react";

const WHATSAPP_URL =
  "https://wa.me/923221227348?text=Hi%20Shahan%2C%20I%27d%20like%20to%20discuss%20a%20project.";

const WhatsAppButton: React.FC = () => {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 left-6 z-50 flex items-center justify-center
                 w-14 h-14 rounded-full text-white transition-all duration-300
                 hover:scale-105"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping" />
      <span className="absolute -inset-2 rounded-full border border-[#25D366]/40 animate-pulse" />
      <span
        className="absolute inset-0 rounded-full bg-[#25D366] shadow-lg
                   transition-colors duration-300 hover:bg-[#20ba5a]"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="relative z-10 w-7 h-7"
        aria-hidden="true"
      >
        <path d="M19.05 4.91A9.82 9.82 0 0 0 12.03 2c-5.46 0-9.9 4.44-9.9 9.9 0 1.74.46 3.45 1.32 4.95L2 22l5.36-1.4a9.86 9.86 0 0 0 4.67 1.19h.01c5.45 0 9.89-4.44 9.89-9.9 0-2.64-1.03-5.12-2.88-6.98Zm-7.01 15.2h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.18.83.85-3.1-.2-.32a8.16 8.16 0 0 1-1.26-4.3c0-4.5 3.66-8.16 8.17-8.16 2.18 0 4.22.85 5.75 2.39a8.08 8.08 0 0 1 2.39 5.77c0 4.5-3.66 8.16-8.15 8.16Zm4.47-6.11c-.24-.12-1.43-.7-1.65-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.03-.38-1.96-1.22-.72-.64-1.21-1.44-1.35-1.68-.14-.24-.01-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.79-.2-.47-.4-.4-.54-.41l-.46-.01c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2 0 1.18.86 2.31.98 2.47.12.16 1.68 2.56 4.06 3.59.57.25 1.01.39 1.36.5.57.18 1.08.15 1.49.09.46-.07 1.43-.58 1.63-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z" />
      </svg>
    </a>
  );
};

export default WhatsAppButton;

import React, { useState } from 'react';

// Language options
const languages = ['English', 'Español', 'Français', 'Deutsch', '日本語'];

// Navigation Columns matching the reference layout
const specialtyLinks = [
  { label: 'IVF & Reproductive Labs', href: '#' },
  { label: 'Embryology Systems', href: '#' },
  { label: 'Cryo Storage Facilities', href: '#' },
  { label: 'Fertility Networks', href: '#' },
  { label: 'Research Laboratories', href: '#' },
  { label: 'Clinical Specialists', href: '#' },
  { label: 'Laboratory Directors', href: '#' },
  { label: 'Technicians & Trainees', href: '#' }
];

const complianceLinks = [
  { label: 'Safety & Verification', href: '#' },
  { label: 'Trust Center', href: '#' },
  { label: 'HIPAA Compliant', href: '#' },
  { label: 'AU / NZ', href: '#' },
  { label: 'Canada', href: '#' },
  { label: 'UK & EU', href: '#' },
  { label: 'GDPR Verified', href: '#' }
];

const productLinks = [
  { label: 'Pricing', href: '#' },
  { label: 'Changelog', href: '#' },
  { label: 'Downloads', href: '#' },
  { label: 'EmbryoOne Guides', href: '#' },
  { label: 'Help Centre', href: '#' },
  { label: 'System Status', href: '#' },
  { label: 'System Requirements', href: '#' },
  { label: 'AI Instructions', href: '#' }
];

const aboutLinks = [
  { label: 'Contact Us', href: '#' },
  { label: 'Customer Stories', href: '#' },
  { label: 'Media', href: '#' },
  { label: 'Open Roles', href: '#', badge: '10+' },
  { label: 'People', href: '#' },
  { label: 'Partnerships', href: '#' }
];

const resourceLinks = [
  { label: 'Blog', href: '#' },
  { label: 'ROI Calculator', href: '#' },
  { label: 'Resource Centre', href: '#' },
  { label: 'Template Community', href: '#' },
  { label: 'FAQs', href: '#faq' }
];

const legalLinks = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Service', href: '#' },
  { label: 'Usage Policy', href: '#' },
  { label: 'UK/GDPR Policy', href: '#' },
  { label: 'Accessibility', href: '#' }
];

export default function Footer() {
  const [selectedLang, setSelectedLang] = useState('English');
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <footer className="w-full bg-[#FAF8F5] text-[#1c1917] border-t border-[#ECEAE4] font-sans selection:bg-[#F3E6FB]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 pt-16 pb-12">
        {/* Main Grid: Left Brand Column + Right Navigation Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* ━━━ Left Column: Language, Socials, Brand, Copyright ━━━ */}
          <div className="lg:col-span-4 flex flex-col items-start pr-0 lg:pr-8">
            
            {/* Language Selector */}
            <div className="relative mb-6">
              <button
                type="button"
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="inline-flex items-center gap-2 text-[14px] font-medium text-[#1c1917] hover:text-[#57534e] transition-colors py-1 cursor-pointer focus:outline-none"
                aria-haspopup="true"
                aria-expanded={isLangOpen}
              >
                <span className="h-2 w-2 rounded-full bg-[#3B82F6] flex-shrink-0" />
                <span>{selectedLang}</span>
                <svg
                  className={`w-3.5 h-3.5 text-[#78716c] transition-transform duration-200 ${isLangOpen ? 'rotate-180' : ''}`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>

              {/* Language Dropdown */}
              {isLangOpen && (
                <div className="absolute top-full left-0 mt-2 w-36 bg-white border border-[#ECEAE4] rounded-xl shadow-lg py-1.5 z-40">
                  {languages.map((lang) => (
                    <button
                      key={lang}
                      type="button"
                      onClick={() => {
                        setSelectedLang(lang);
                        setIsLangOpen(false);
                      }}
                      className={`w-full text-left px-3.5 py-1.5 text-xs transition-colors ${
                        selectedLang === lang
                          ? 'font-semibold text-[#1c1917] bg-[#FAF8F5]'
                          : 'text-[#57534e] hover:bg-[#F3E6FB]/50'
                      }`}
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Social Icons Row */}
            <div className="flex items-center gap-4 text-[#1c1917] mb-8">
              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="hover:text-[#9A4DC1] transition-colors duration-150"
              >
                <svg className="w-[17px] h-[17px]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="hover:text-[#9A4DC1] transition-colors duration-150"
              >
                <svg className="w-[17px] h-[17px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="hover:text-[#9A4DC1] transition-colors duration-150"
              >
                <svg className="w-[17px] h-[17px]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>

              {/* X (formerly Twitter) */}
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                aria-label="X (Twitter)"
                className="hover:text-[#9A4DC1] transition-colors duration-150"
              >
                <svg className="w-[15px] h-[15px]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="hover:text-[#9A4DC1] transition-colors duration-150"
              >
                <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>

            {/* Brand Logo & Wordmark */}
            <div className="mb-4">
              <img
                src="/embryoone-logo-transparent.png"
                alt="EmbryoOne Logo"
                className="h-8 w-auto object-contain block"
              />
            </div>

            {/* Tagline & Copyright Info */}
            <p className="text-[13px] text-[#78716c] leading-relaxed">
              EmbryoOne. By your side.
            </p>
            <p className="text-[13px] text-[#78716c] mt-0.5">
              © 2026 EmbryoOne. All rights reserved.
            </p>
            <button
              type="button"
              onClick={() => alert('Cookie preferences updated')}
              className="text-[13px] text-[#78716c] hover:text-[#1c1917] transition-colors mt-0.5 underline-offset-4 hover:underline cursor-pointer"
            >
              Cookie preferences
            </button>
          </div>

          {/* ━━━ Right Navigation Columns (Two-tier grid matching Heidi layout) ━━━ */}
          <div className="lg:col-span-8 flex flex-col gap-10">
            
            {/* Top Tier: Specialties, Compliance, Product, About Us */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
              
              {/* Column 1: Specialties */}
              <div>
                <h3 className="text-[14px] font-bold text-[#1c1917] mb-3.5 tracking-tight">
                  Specialties
                </h3>
                <ul className="space-y-2.5">
                  {specialtyLinks.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-[13.5px] text-[#57534e] hover:text-[#1c1917] transition-colors block"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 2: Compliance */}
              <div>
                <h3 className="text-[14px] font-bold text-[#1c1917] mb-3.5 tracking-tight">
                  Compliance
                </h3>
                <ul className="space-y-2.5">
                  {complianceLinks.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-[13.5px] text-[#57534e] hover:text-[#1c1917] transition-colors block"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 3: Product */}
              <div>
                <h3 className="text-[14px] font-bold text-[#1c1917] mb-3.5 tracking-tight">
                  Product
                </h3>
                <ul className="space-y-2.5">
                  {productLinks.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-[13.5px] text-[#57534e] hover:text-[#1c1917] transition-colors block"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 4: About Us */}
              <div>
                <h3 className="text-[14px] font-bold text-[#1c1917] mb-3.5 tracking-tight">
                  About Us
                </h3>
                <ul className="space-y-2.5">
                  {aboutLinks.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-[13.5px] text-[#57534e] hover:text-[#1c1917] transition-colors inline-flex items-center"
                      >
                        <span>{link.label}</span>
                        {link.badge && (
                          <span className="bg-[#FEF08A] text-[#854D0E] text-[10.5px] font-bold px-1.5 py-0.5 rounded-full ml-1.5 leading-none">
                            {link.badge}
                          </span>
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Bottom Tier: Resources, Legal (aligned beneath the first two columns) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
              
              {/* Column 1 (under Specialties): Resources */}
              <div>
                <h3 className="text-[14px] font-bold text-[#1c1917] mb-3.5 tracking-tight">
                  Resources
                </h3>
                <ul className="space-y-2.5">
                  {resourceLinks.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-[13.5px] text-[#57534e] hover:text-[#1c1917] transition-colors block"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 2 (under Compliance): Legal */}
              <div>
                <h3 className="text-[14px] font-bold text-[#1c1917] mb-3.5 tracking-tight">
                  Legal
                </h3>
                <ul className="space-y-2.5">
                  {legalLinks.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-[13.5px] text-[#57534e] hover:text-[#1c1917] transition-colors block"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Empty spacers for 3rd & 4th column to preserve clean alignment */}
              <div className="hidden sm:block" />
              <div className="hidden sm:block" />

            </div>

          </div>

        </div>

        {/* ━━━ Bottom Bar: "Ask AI about EmbryoOne" & "Share this" ━━━ */}
        <div className="mt-16 pt-6 border-t border-[#ECEAE4] flex flex-col sm:flex-row items-center justify-between gap-6 text-[13px] text-[#57534e]">
          
          {/* Ask AI Section */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3">
            <span className="font-medium text-[#1c1917]">Ask AI about EmbryoOne:</span>
            
            <div className="flex items-center gap-2.5 text-[#1c1917]">
              {/* ChatGPT / OpenAI */}
              <a
                href="https://chatgpt.com/?q=What+is+EmbryoOne"
                target="_blank"
                rel="noreferrer"
                title="Ask ChatGPT"
                className="hover:text-[#9A4DC1] hover:scale-110 transition-all duration-150 p-1"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3428 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3428 7.8956zm16.0993 3.8558L12.5993 8.383l2.02-1.1685a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6773a.79.79 0 0 0-.4021-.6813zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813v6.7227zm1.1448-1.5476l2.5484-1.4716 2.5484 1.4716v2.9432l-2.5484 1.4716-2.5484-1.4716z"/>
                </svg>
              </a>

              {/* Claude / Anthropic */}
              <a
                href="https://claude.ai"
                target="_blank"
                rel="noreferrer"
                title="Ask Claude"
                className="hover:text-[#9A4DC1] hover:scale-110 transition-all duration-150 p-1"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l1.6 6.4L20 10l-6.4 1.6L12 18l-1.6-6.4L4 10l6.4-1.6L12 2zm7 13l.9 3.1L23 19l-3.1.9L19 23l-.9-3.1L15 19l3.1-.9L19 15zM5 15l.9 3.1L9 19l-3.1.9L5 23l-.9-3.1L1 19l3.1-.9L5 15z"/>
                </svg>
              </a>

              {/* Gemini / Sparkle */}
              <a
                href="https://gemini.google.com"
                target="_blank"
                rel="noreferrer"
                title="Ask Gemini"
                className="hover:text-[#9A4DC1] hover:scale-110 transition-all duration-150 p-1"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C12 6.627 6.627 12 0 12c6.627 0 12 5.373 12 12 0-6.627 5.373-12 12-12-6.627 0-12-5.373-12-12z"/>
                </svg>
              </a>

              {/* Perplexity */}
              <a
                href="https://www.perplexity.ai/search?q=What+is+EmbryoOne"
                target="_blank"
                rel="noreferrer"
                title="Ask Perplexity"
                className="hover:text-[#9A4DC1] hover:scale-110 transition-all duration-150 p-1"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="9"/>
                  <path d="M12 3v18"/>
                  <path d="M3 12h18"/>
                  <path d="m7 7 10 10"/>
                  <path d="m17 7-10 10"/>
                </svg>
              </a>

              {/* Grok / AI */}
              <a
                href="https://x.ai"
                target="_blank"
                rel="noreferrer"
                title="Ask Grok"
                className="hover:text-[#9A4DC1] hover:scale-110 transition-all duration-150 p-1"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13.982 10.622 20.54 3h-1.554l-5.693 6.618L8.745 3H3.5l6.877 10.007L3.5 21h1.554l6.012-6.989L15.91 21h5.245l-7.173-10.378zm-2.128 2.474-.697-.996-5.543-7.93H8l4.475 6.401.697.997 5.814 8.317h-2.388l-4.744-6.789z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Share Section */}
          <div className="flex items-center gap-3">
            <span className="font-medium text-[#1c1917]">Share this:</span>
            
            <div className="flex items-center gap-2.5 text-[#1c1917]">
              {/* Copy Link */}
              <div className="relative">
                <button
                  type="button"
                  onClick={handleCopy}
                  title="Copy link to clipboard"
                  className="hover:text-[#9A4DC1] hover:scale-110 transition-all duration-150 p-1 cursor-pointer focus:outline-none"
                  aria-label="Copy link"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="14" height="14" x="8" y="8" rx="2" ry="2"/>
                    <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>
                  </svg>
                </button>
                {copied && (
                  <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1.5 px-2 py-0.5 text-[11px] font-semibold text-white bg-[#1c1917] rounded shadow-md whitespace-nowrap">
                    Copied!
                  </span>
                )}
              </div>

              {/* LinkedIn Share */}
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${typeof window !== 'undefined' ? encodeURIComponent(window.location.href) : ''}`}
                target="_blank"
                rel="noreferrer"
                title="Share on LinkedIn"
                className="hover:text-[#9A4DC1] hover:scale-110 transition-all duration-150 p-1"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>

              {/* Facebook Share */}
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${typeof window !== 'undefined' ? encodeURIComponent(window.location.href) : ''}`}
                target="_blank"
                rel="noreferrer"
                title="Share on Facebook"
                className="hover:text-[#9A4DC1] hover:scale-110 transition-all duration-150 p-1"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              {/* X Share */}
              <a
                href={`https://twitter.com/intent/tweet?text=Explore%20EmbryoOne&url=${typeof window !== 'undefined' ? encodeURIComponent(window.location.href) : ''}`}
                target="_blank"
                rel="noreferrer"
                title="Share on X"
                className="hover:text-[#9A4DC1] hover:scale-110 transition-all duration-150 p-1"
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}

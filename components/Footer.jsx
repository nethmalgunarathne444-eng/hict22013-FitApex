"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { name: "Dashboard", href: "/dashboard" },
      { name: "Body Metrics", href: "/metrics" },
      { name: "Health Vitals", href: "/vitals" },
      { name: "Medicine Reminder", href: "/reminders" },
    ],
    company: [
      { name: "About Us", href: "/about" },
      { name: "Blog", href: "/blog" },
      { name: "Careers", href: "/careers" },
      { name: "Contact", href: "/contact" },
    ],
    support: [
      { name: "Help Center", href: "/help" },
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
    ],
  };

  return (
    <footer className="w-full bg-white border-t border-slate-100">
      
      {/* 1. Full-Width CTA Banner Section (Sharp Corners) */}
      <div className="w-full bg-gradient-to-r from-[#2563EB] to-[#8B7CF7] px-6 py-12 md:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
                Ready to Take Control
                <br />
                of Your Health?
              </h2>
              <p className="mt-4 max-w-xl text-base text-blue-100/90 leading-relaxed">
                Join thousands of people who are tracking their health,
                staying consistent, and living better every day.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
              <Link 
                href="/register" 
                className="w-full sm:w-auto text-center rounded-xl bg-white px-8 py-4 font-semibold text-[#2563EB] transition-all hover:bg-blue-50 active:scale-[0.98] shadow-sm"
              >
                Get Started Free →
              </Link>
              <Link 
                href="/dashboard" 
                className="w-full sm:w-auto text-center rounded-xl border border-white/40 px-8 py-4 font-semibold text-white transition-colors hover:bg-white/10"
              >
                Explore Dashboard
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Footer Directory Links */}
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          
          {/* Brand/Logo Column */}
          <div className="sm:col-span-2 md:col-span-3 lg:col-span-1">
            <Link href="/" className="mb-4 flex items-center gap-3 w-fit">
              <span className="text-2xl font-bold text-slate-900 tracking-tight">
                FitApex
              </span>
            </Link>
            <p className="text-sm text-slate-500 max-w-xs leading-relaxed">
              Your health. Your data. Your apex.
            </p>
          </div>

          {/* Dynamic Link Menus */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-900 capitalize">
                {category}
              </h3>
              <ul className="space-y-3 text-sm">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href} 
                      className="text-slate-500 hover:text-slate-900 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter Form Column */}
          <div className="sm:col-span-2 md:col-span-1">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-900">
              Stay Connected
            </h3>
            <p className="mb-4 text-sm text-slate-500 leading-relaxed">
              Get health tips and updates directly to your inbox.
            </p>

            <form onSubmit={(e) => e.preventDefault()} className="flex rounded-xl border border-slate-200 bg-white p-1 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100 transition-all">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 text-sm outline-none bg-transparent"
                required
              />
              <button 
                type="submit" 
                className="bg-[#2563EB] hover:bg-blue-700 text-white rounded-lg px-4 transition-colors font-medium"
                aria-label="Subscribe"
              >
                →
              </button>
            </form>

            {/* Social Media Links */}
            <div className="mt-6 flex gap-4 text-slate-400">
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 transition-colors text-base">𝕏</a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 transition-colors text-base">f</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 transition-colors text-base">◎</a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 transition-colors text-base">▶</a>
            </div>
          </div>

        </div>

        {/* 3. Bottom Credits Bar */}
        <div className="mt-12 border-t border-slate-100 pt-6 text-center text-xs sm:text-sm text-slate-400">
          © {currentYear} FitApex. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
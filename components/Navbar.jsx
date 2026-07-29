"use client";

import { useState } from "react";
import LoginModal from "@/components/LoginModal";
import Link from "next/link";

export default function Navbar() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-3 text-lg font-semibold text-slate-900">
            <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 text-white">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
              </svg>
            </div>
            FitApex
          </Link>

          <ul className="hidden items-center gap-8 md:flex">
            {[
              { label: "Home", href: "/" },
              { label: "Features", href: "/features" },
              { label: "How It Works", href: "/how-it-works" },
              { label: "About Us", href: "/about-us" },
            ].map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <button
              className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
              onClick={() => setShowModal(true)}
            >
              Log in
            </button>

            <button
              className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
              onClick={() => setShowModal(true)}
            >
              Get Started Free →
            </button>
          </div>
        </div>
      </nav>

      <LoginModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  );
}
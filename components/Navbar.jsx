"use client";

import { useState } from "react";
import LoginModal from "@/components/LoginModal";
import Link from "next/link";

export default function Navbar() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <nav className="nav">
        <a href="/" className="nav-logo">
          <div className="nav-logo-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
            </svg>
          </div>
          FitApex
        </a>

        <ul className="nav-links">
          {[
            { label: "Features", href: "/features" },
            { label: "How It Works", href: "/how-it-works" },
            { label: "About Us", href: "#" },
          ].map((item) => (
            <li key={item.label}>
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <button className="btn-ghost" onClick={() => setShowModal(true)}>
            Log in
          </button>
          <button className="btn-primary" onClick={() => setShowModal(true)}>
            Get Started Free →
          </button>
        </div>
      </nav>

      <LoginModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  );
}
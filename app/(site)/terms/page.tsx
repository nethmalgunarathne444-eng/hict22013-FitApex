'use client';

import React, { useState } from 'react';

export default function TermsPage() {
  const [activeTab, setActiveTab] = useState<'terms' | 'privacy'>('terms');
  const lastUpdated = "July 31, 2026";

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 py-16 px-6 sm:px-12 font-sans">
      <main className="max-w-3xl mx-auto bg-white p-8 sm:p-12 rounded-2xl shadow-sm border border-slate-100">
        
        {/* Header */}
        <header className="border-b border-slate-100 pb-6 mb-8">
          <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
            Legal & Compliance
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mt-2">
            {activeTab === 'terms' ? 'Terms of Service' : 'Privacy Policy'}
          </h1>
          <p className="text-xs text-slate-400 mt-2">
            Last updated: {lastUpdated}
          </p>

          {/* Minimal Tab Selector */}
          <div className="flex gap-2 mt-6 p-1 bg-slate-100/80 rounded-xl w-fit">
            <button
              type="button"
              onClick={() => setActiveTab('terms')}
              className={`px-4 py-2 text-xs font-medium rounded-lg transition-all ${
                activeTab === 'terms'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              Terms & Conditions
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('privacy')}
              className={`px-4 py-2 text-xs font-medium rounded-lg transition-all ${
                activeTab === 'privacy'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              Privacy Policy
            </button>
          </div>
        </header>

        {/* Content Body */}
        {activeTab === 'terms' ? (
          <div className="space-y-8 text-sm sm:text-base leading-relaxed text-slate-600">
            <section>
              <h2 className="text-lg font-semibold text-slate-900 mb-2">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing and using <strong>FitApex</strong>, you agree to be bound by these Terms and Conditions. FitApex is provided as an educational and fitness tracking tool.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-slate-900 mb-2">
                2. Medical & Health Disclaimer
              </h2>
              <p className="p-4 bg-amber-50 border-l-4 border-amber-400 text-amber-900 rounded-r-md text-sm">
                <strong>Important:</strong> FitApex provides health vitals, body metrics, and medication reminders for informational and tracking purposes only. It does <strong>not</strong> constitute medical advice or treatment.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-slate-900 mb-2">
                3. User Account & Security
              </h2>
              <p>
                You are responsible for maintaining the confidentiality of your credentials and controlling access to your account.
              </p>
            </section>
          </div>
        ) : (
          <div className="space-y-8 text-sm sm:text-base leading-relaxed text-slate-600">
            <section>
              <h2 className="text-lg font-semibold text-slate-900 mb-2">
                1. Information We Collect
              </h2>
              <ul className="list-disc list-inside space-y-1 text-slate-600 pl-2">
                <li><strong>Account Data:</strong> Name, email address, credentials.</li>
                <li><strong>Body Metrics:</strong> Weight, height, BMI targets.</li>
                <li><strong>Health Vitals:</strong> Blood pressure, heart rate, blood glucose.</li>
                <li><strong>Schedule Data:</strong> Medication details and notification times.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-slate-900 mb-2">
                2. How We Use Data
              </h2>
              <p>
                Data is used exclusively to populate your dashboard statistics and send schedule alerts. Personal health data is never sold or shared with third parties.
              </p>
            </section>
          </div>
        )}

      </main>
    </div>
  );
}
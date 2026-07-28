import React from "react";

const steps = [
  "Create your profile",
  "Log your daily metrics",
  "Set medicine reminders",
  "Review your progress",
];

export default function HowItWorks() {
  return (
    <section style={{ padding: "60px 24px", background: "#f8fbff" }}>
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          background: "#fff",
          borderRadius: "20px",
          padding: "32px",
          boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
        }}
      >
        <h1 style={{ fontSize: "32px", marginBottom: "16px", color: "#0f172a" }}>
          How It Works
        </h1>

        <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#475569", marginBottom: "12px" }}>
          FitApex is designed to make your health routine easier to manage. Instead of juggling different tools, you can track your body metrics, record daily health updates, and keep your medication schedule in one simple place.
        </p>

        <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#475569", marginBottom: "24px" }}>
          Getting started takes only a few guided steps. Whether you are building a new routine or improving an existing one, FitApex helps you stay organized, review your progress clearly, and make healthier choices with less effort.
        </p>

        <h2 style={{ fontSize: "20px", marginBottom: "16px", color: "#1e293b" }}>
          Step-by-step guide
        </h2>

        <ol style={{ paddingLeft: "20px", color: "#334155", lineHeight: "1.8" }}>
          {steps.map((step, index) => (
            <li key={index} style={{ marginBottom: "8px" }}>{step}</li>
          ))}
        </ol>
      </div>
    </section>
  );
}
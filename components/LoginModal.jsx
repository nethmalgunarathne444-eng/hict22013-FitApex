"use client";

import { useState } from "react";

export default function LoginModal({ isOpen, onClose }) {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: wire up your auth logic here
    console.log("Form submitted:", form);
  };

  return (
    <>
      {/* ── Overlay ── */}
      <div className="modal-overlay" onClick={handleOverlayClick}>

        {/* ── Modal card ── */}
        <div className="modal-card" role="dialog" aria-modal="true" aria-label={isLogin ? "Log in" : "Create account"}>

          {/* Close button */}
          <button className="modal-close" onClick={onClose} aria-label="Close">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          {/* Logo */}
          <div className="modal-logo">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
            </svg>
          </div>

          <h2 className="modal-title">{isLogin ? "Welcome back" : "Create your account"}</h2>
          <p className="modal-subtitle">
            {isLogin ? "Log in to continue to FitApex" : "Start your health journey today"}
          </p>

          {/* Google SSO */}
          <button className="google-btn">
            <svg width="18" height="18" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Continue with Google
          </button>

          <div className="divider"><span>or</span></div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="modal-form">

            {!isLogin && (
              <div className="field-group">
                <label htmlFor="name">Full name</label>
                <input
                  id="name"
                  type="text"
                  placeholder="Alex Johnson"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                />
              </div>
            )}

            <div className="field-group">
              <label htmlFor="email">Email address</label>
              <input
                id="email"
                type="email"
                placeholder="alex@example.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
              />
            </div>

            <div className="field-group">
              <div className="label-row">
                <label htmlFor="password">Password</label>
                {isLogin && <a href="#" className="forgot-link">Forgot password?</a>}
              </div>
              <div className="password-wrap">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                  required
                />
                <button
                  type="button"
                  className="toggle-eye"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
                      <line x1="1" y1="1" x2="23" y2="23"/>
                    </svg>
                  ) : (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
                    </svg>
                  )}
                </button>
              </div>
            </div>

            <button type="submit" className="submit-btn">
              {isLogin ? "Log in" : "Create account"}
            </button>
          </form>

          {/* Toggle login/signup */}
          <p className="toggle-text">
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            {" "}
            <button
              className="toggle-link"
              onClick={() => { setIsLogin(!isLogin); setForm({ name: "", email: "", password: "" }); }}
            >
              {isLogin ? "Sign up" : "Log in"}
            </button>
          </p>

        </div>
      </div>

      <style jsx>{`
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(15, 23, 42, 0.5);
          backdrop-filter: blur(4px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 16px;
        }

        .modal-card {
          background: #ffffff;
          border-radius: 20px;
          padding: 36px 32px 28px;
          width: 100%;
          max-width: 420px;
          position: relative;
          box-shadow: 0 24px 64px rgba(15, 23, 42, 0.15);
        }

        .modal-close {
          position: absolute;
          top: 16px;
          right: 16px;
          width: 32px;
          height: 32px;
          border-radius: 8px;
          border: 1px solid #e2e8f0;
          background: transparent;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: #64748b;
          transition: background 0.15s;
        }
        .modal-close:hover { background: #f1f5f9; }

        .modal-logo {
          width: 44px;
          height: 44px;
          background: #2563eb;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
        }

        .modal-title {
          font-size: 22px;
          font-weight: 700;
          color: #0f172a;
          text-align: center;
          margin: 0 0 8px;
        }

        .modal-subtitle {
          font-size: 14px;
          color: #64748b;
          text-align: center;
          margin: 0 0 24px;
        }

        .google-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 11px 16px;
          border: 1px solid #e2e8f0;
          border-radius: 10px;
          background: #fff;
          font-size: 14px;
          font-weight: 600;
          color: #0f172a;
          cursor: pointer;
          transition: background 0.15s;
        }
        .google-btn:hover { background: #f8fafc; }

        .divider {
          display: flex;
          align-items: center;
          gap: 12px;
          margin: 20px 0;
          color: #94a3b8;
          font-size: 13px;
        }
        .divider::before,
        .divider::after {
          content: "";
          flex: 1;
          height: 1px;
          background: #e2e8f0;
        }

        .modal-form {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .field-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .field-group label {
          font-size: 13px;
          font-weight: 600;
          color: #374151;
        }

        .field-group input {
          width: 100%;
          padding: 10px 14px;
          border: 1px solid #e2e8f0;
          border-radius: 10px;
          font-size: 14px;
          color: #0f172a;
          background: #f8fafc;
          outline: none;
          transition: border-color 0.15s, background 0.15s;
          box-sizing: border-box;
        }
        .field-group input:focus {
          border-color: #2563eb;
          background: #fff;
          box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
        }
        .field-group input::placeholder { color: #94a3b8; }

        .label-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .forgot-link {
          font-size: 13px;
          color: #2563eb;
          text-decoration: none;
          font-weight: 500;
        }
        .forgot-link:hover { text-decoration: underline; }

        .password-wrap {
          position: relative;
        }
        .password-wrap input { padding-right: 44px; }

        .toggle-eye {
          position: absolute;
          right: 12px;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          cursor: pointer;
          color: #94a3b8;
          display: flex;
          padding: 0;
        }
        .toggle-eye:hover { color: #64748b; }

        .submit-btn {
          width: 100%;
          padding: 12px;
          background: #2563eb;
          color: #fff;
          font-size: 15px;
          font-weight: 600;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          transition: background 0.15s;
          margin-top: 4px;
        }
        .submit-btn:hover { background: #1d4ed8; }
        .submit-btn:active { transform: scale(0.99); }

        .toggle-text {
          text-align: center;
          font-size: 14px;
          color: #64748b;
          margin: 20px 0 0;
        }

        .toggle-link {
          background: none;
          border: none;
          color: #2563eb;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          padding: 0;
        }
        .toggle-link:hover { text-decoration: underline; }
      `}</style>
    </>
  );
}
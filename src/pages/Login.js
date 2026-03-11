import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Auth.css';

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

const MicrosoftIcon = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <rect x="1" y="1" width="10" height="10" fill="#F25022"/>
    <rect x="13" y="1" width="10" height="10" fill="#7FBA00"/>
    <rect x="1" y="13" width="10" height="10" fill="#00A4EF"/>
    <rect x="13" y="13" width="10" height="10" fill="#FFB900"/>
  </svg>
);

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="auth-container">
      {/* left branding panel */}
      <div className="auth-left">
        <div className="auth-left-logo">VaultFlow</div>

        <h1 className="auth-left-heading">
          Financial clarity for small businesses
        </h1>

        <p className="auth-left-description">
          Know exactly how much you can spend, what's coming in, and what needs
          to be reserved—all in real time.
        </p>

        <div className="auth-left-features">
          <div className="auth-feature-item">
            <span className="auth-feature-icon"><CheckIcon /></span>
            Track invoices and expected payments
          </div>
          <div className="auth-feature-item">
            <span className="auth-feature-icon"><CheckIcon /></span>
            Never miss a payment or tax deadline
          </div>
          <div className="auth-feature-item">
            <span className="auth-feature-icon"><CheckIcon /></span>
            Make confident financial decisions daily
          </div>
        </div>

        <div className="auth-left-footer">
          Trusted by thousands of small business owners worldwide
        </div>
      </div>

      {/* right form panel */}
      <div className="auth-right">
        <div className="auth-form-wrapper">
          <h2 className="auth-form-title">Welcome back</h2>
          <p className="auth-form-subtitle">
            Dont have an account? <Link to="/signup">Sign up</Link>
          </p>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label" htmlFor="email">Email address</label>
              <input
                id="email"
                className="form-input"
                type="email"
                placeholder="me@vaultflow.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="password">Password</label>
              <input
                id="password"
                className="form-input"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="form-options">
              <label className="form-checkbox-label">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                />
                Remember me
              </label>
              <a href="/forgot-password" className="form-forgot-link">Forgot Password?</a>
            </div>

            <button type="submit" className="form-submit-btn">Sign in</button>
          </form>

          <div className="form-divider">
            <span className="form-divider-line" />
            <span className="form-divider-text">or continue with</span>
            <span className="form-divider-line" />
          </div>

          <div className="form-social-buttons">
            <button type="button" className="social-btn">
              <GoogleIcon />
              Google
            </button>
            <button type="button" className="social-btn">
              <MicrosoftIcon />
              Microsoft
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

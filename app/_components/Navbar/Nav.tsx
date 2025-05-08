import React from 'react';
import Link from 'next/link';
import './Nav.css';

const Nav = () => {
  const navItems = [
    { label: 'Features', href: '#features' },
    { label: 'About', href: '#about' },
    { label: 'API', href: '#api' },
  ];

  return (
    <header className="nav-header">
      <div className="nav-container">

       
        <div className="nav-left">
          <Link href="/" className="logo">
            <div className="logo-img">
              <img src="logo2.svg" alt="Logo" />
            </div>
            <span>Circulaire</span>
          </Link>

          <nav className="nav-links">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="nav-link"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* سمت راست: دکمه‌ها */}
        <div className="nav-actions">
          <Link href="/login" className="nav-link">
            Log in
          </Link>
          <Link href="/signup" className="signup-btn">
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Nav;

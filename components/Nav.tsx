"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("mousedown", handleClickOutside);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const ensaios = [
    { name: "Gestante", href: "/gestante" },
    { name: "Newborn", href: "/newborn" },
    { name: "Combos", href: "/combos" },
    { name: "Revelação", href: "/revelacao" },
    { name: "Smash the Cake", href: "/smash" },
    { name: "Aniversário", href: "/aniversario" },
    { name: "Casal", href: "/casal" },
    { name: "Família", href: "/familia" },
    { name: "Profissional", href: "/profissional" },
  ];

  return (
    <>
      <nav className={scrolled ? "nav-scrolled" : ""}>
        <Link href="/">
          <img
            src="/images/Eternize.svg"
            alt="Eternize"
            className="nav-logo-img"
            style={{ height: scrolled ? "36px" : "56px", cursor: "pointer" }}
          />
        </Link>
        
        {/* Desktop Menu */}
        <div className="nav-links">
          <div className="nav-dropdown" ref={menuRef}>
            <button 
              className="nav-dropdown-btn"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              Ensaios
              <svg 
                width="10" 
                height="10" 
                viewBox="0 0 10 10" 
                fill="none" 
                style={{ 
                  marginLeft: "6px", 
                  transform: menuOpen ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.3s ease"
                }}
              >
                <path d="M2 4L5 7L8 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <div className={`nav-dropdown-menu ${menuOpen ? "open" : ""}`}>
              {ensaios.map((ensaio) => (
                <Link 
                  key={ensaio.href} 
                  href={ensaio.href}
                  onClick={() => setMenuOpen(false)}
                >
                  {ensaio.name}
                </Link>
              ))}
            </div>
          </div>
          <Link href="/#politicas">Políticas</Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Menu"
        >
          <span className={`hamburger-line ${mobileMenuOpen ? "open" : ""}`}></span>
          <span className={`hamburger-line ${mobileMenuOpen ? "open" : ""}`}></span>
          <span className={`hamburger-line ${mobileMenuOpen ? "open" : ""}`}></span>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${mobileMenuOpen ? "open" : ""}`}>
        <div className="mobile-menu-content">
          <div className="mobile-menu-header">
            <span style={{ fontSize: "10px", letterSpacing: "0.3em", color: "var(--gold)", textTransform: "uppercase" }}>Menu</span>
          </div>
          
          <div className="mobile-menu-section">
            <div className="mobile-menu-label">Ensaios</div>
            {ensaios.map((ensaio) => (
              <Link 
                key={ensaio.href} 
                href={ensaio.href}
                className="mobile-menu-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                {ensaio.name}
              </Link>
            ))}
          </div>

          <div className="mobile-menu-section">
            <Link 
              href="/#politicas"
              className="mobile-menu-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              Políticas
            </Link>
          </div>

          <div className="mobile-menu-footer">
            <a 
              href="https://api.whatsapp.com/send?phone=5511986991295" 
              target="_blank"
              className="mobile-menu-cta"
            >
              Agendar Ensaio
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

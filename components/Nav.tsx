"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
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
    <nav className={scrolled ? "nav-scrolled" : ""}>
      <Link href="/">
        <img
          src="/images/Eternize.svg"
          alt="Eternize"
          className="nav-logo-img"
          style={{ height: scrolled ? "36px" : "56px", cursor: "pointer" }}
        />
      </Link>
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
    </nav>
  );
}

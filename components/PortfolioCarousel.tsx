"use client";

import { useRef, useState, useEffect } from "react";

interface PortfolioCarouselProps {
  title?: string;
  subtitle?: string;
}

export default function PortfolioCarousel({ 
  title = "Portfólio Gestante", 
  subtitle = "Nosso trabalho" 
}: PortfolioCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [autoScrollPaused, setAutoScrollPaused] = useState(false);
  
  const portfolioImages = [
    "/images/portfolio/gestante-1.jpg",
    "/images/portfolio/gestante-2.jpg",
    "/images/portfolio/gestante-3.jpg",
    "/images/portfolio/gestante-4.jpg",
    "/images/portfolio/gestante-5.jpg",
    "/images/portfolio/gestante-6.jpg",
    "/images/portfolio/gestante-7.jpg",
    "/images/portfolio/gestante-8.jpg",
    "/images/portfolio/gestante-9.jpg",
    "/images/portfolio/gestante-10.jpg",
    "/images/portfolio/gestante-11.jpg",
    "/images/portfolio/gestante-12.jpg",
    "/images/portfolio/gestante-13.jpg",
    "/images/portfolio/gestante-14.jpg",
  ];

  // Auto scroll animation
  useEffect(() => {
    if (autoScrollPaused || !trackRef.current) return;
    
    let animationId: number;
    let scrollPosition = 0;
    const speed = 0.5;
    
    const animate = () => {
      if (trackRef.current && !autoScrollPaused) {
        scrollPosition += speed;
        const maxScroll = trackRef.current.scrollWidth / 2;
        
        if (scrollPosition >= maxScroll) {
          scrollPosition = 0;
        }
        
        trackRef.current.style.transform = `translateX(-${scrollPosition}px)`;
      }
      animationId = requestAnimationFrame(animate);
    };
    
    animationId = requestAnimationFrame(animate);
    
    return () => cancelAnimationFrame(animationId);
  }, [autoScrollPaused]);

  // Mouse events for dragging
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setAutoScrollPaused(true);
    setStartX(e.pageX);
    if (trackRef.current) {
      const transform = trackRef.current.style.transform;
      const match = transform.match(/translateX\(-?(\d+\.?\d*)px\)/);
      setScrollLeft(match ? parseFloat(match[1]) : 0);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !trackRef.current) return;
    e.preventDefault();
    const x = e.pageX;
    const walk = (startX - x) * 1.5;
    let newScroll = scrollLeft + walk;
    
    const maxScroll = trackRef.current.scrollWidth / 2;
    if (newScroll < 0) newScroll = maxScroll + newScroll;
    if (newScroll > maxScroll) newScroll = newScroll - maxScroll;
    
    trackRef.current.style.transform = `translateX(-${newScroll}px)`;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    // Resume auto scroll after a delay
    setTimeout(() => setAutoScrollPaused(false), 3000);
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      setTimeout(() => setAutoScrollPaused(false), 3000);
    }
  };

  // Touch events for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setAutoScrollPaused(true);
    setStartX(e.touches[0].pageX);
    if (trackRef.current) {
      const transform = trackRef.current.style.transform;
      const match = transform.match(/translateX\(-?(\d+\.?\d*)px\)/);
      setScrollLeft(match ? parseFloat(match[1]) : 0);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !trackRef.current) return;
    const x = e.touches[0].pageX;
    const walk = (startX - x) * 1.5;
    let newScroll = scrollLeft + walk;
    
    const maxScroll = trackRef.current.scrollWidth / 2;
    if (newScroll < 0) newScroll = maxScroll + newScroll;
    if (newScroll > maxScroll) newScroll = newScroll - maxScroll;
    
    trackRef.current.style.transform = `translateX(-${newScroll}px)`;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    setTimeout(() => setAutoScrollPaused(false), 3000);
  };

  return (
    <section className="portfolio-section">
      <div className="portfolio-header reveal">
        <div className="section-label" style={{ color: "var(--gold)" }}>{subtitle}</div>
        <h2 className="section-title" style={{ color: "var(--warm-white)" }}>{title}</h2>
      </div>
      
      <div 
        className="portfolio-carousel"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{ cursor: isDragging ? "grabbing" : "grab" }}
      >
        <div 
          ref={trackRef}
          className="portfolio-track"
          style={{ animation: "none" }}
        >
          {portfolioImages.map((img, index) => (
            <div key={index} className="portfolio-item">
              <img src={img} alt={`Ensaio Gestante ${index + 1}`} draggable={false} />
            </div>
          ))}
          {/* Duplicate for infinite scroll effect */}
          {portfolioImages.map((img, index) => (
            <div key={`dup-${index}`} className="portfolio-item">
              <img src={img} alt={`Ensaio Gestante ${index + 1}`} draggable={false} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

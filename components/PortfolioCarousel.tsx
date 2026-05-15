"use client";

import { useRef, useState, useEffect } from "react";

interface PortfolioCarouselProps {
  title?: string;
  subtitle?: string;
  images?: string[];
}

const defaultGestanteImages = [
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
  // New gestante images
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gestante%20%281%29-P0ExdbFYIUcaQ6SmdRrJPuYGsgnwUm.jpg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gestante%20%282%29-8XC64t31fo8ujQgoiN8IEPMijqWSnd.jpg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gestante%20%283%29-5NpYYbH8iZgbsxbX5wqiOnCOXk37Wj.jpg",
];

const newbornImages = [
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Newborn%20%288%29-8SzodbPEhUd8qYXK7mXNai4k3FxtaO.jpg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Newborn%20%2816%29-OAuk7KBZQVKf5UFo3PSAyRz81X0Q5j.jpg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Newborn%20%2818%29-JPrcRWDMNANJVH5tffNzhCOkGfcG0M.jpg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/newborn%20%281%29-KsaPsJQELUSjxrjM3uut5AmC7nFV3H.jpg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Newborn%20%2811%29-n3gtjvRS9HbN4POz42WKcOeYW1vQef.jpg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Newborn%20%289%29-vOA11DFOW4zeQfTAW95vFgWiGvAYsf.jpg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Newborn%20%2815%29-FcBaMTAhpWKH9MJ0BTPuL3Rgh7Fy0l.jpg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Newborn%20%2810%29-pIqnmfTp6wa5gNHTHjyJysMsCOmuNs.jpg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Newborn%20%285%29-MExk8BBEsRwdh2VeWhn8YlwaQaMeOa.jpg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Newborn%20%2812%29-FdGwPkk6vMWN9XcGJB0laIuZloMwHx.jpg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Newborn%20%287%29-1P0gkVEE8svKglUVBJYlknGXOa38As.jpg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Newborn%20%2814%29-w2C6jSfl6Nsp42A3BKheb4y2SRQs00.jpg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Newborn%20%286%29-CL79ntp92Eoo5E65K0CF5uIIrV3xpe.jpg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Newborn%20%2813%29-4DrBp9uDGp1FY8eSTs81Qs9bBg650l.jpg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Newborn%20%2817%29-8sCkEIlZdJfQlfXvSBquD8bwELfx1T.jpg",
];

export { newbornImages, defaultGestanteImages };

export default function PortfolioCarousel({ 
  title = "Portfólio Gestante", 
  subtitle = "Nosso trabalho",
  images
}: PortfolioCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [autoScrollPaused, setAutoScrollPaused] = useState(false);
  
  const portfolioImages = images || defaultGestanteImages;

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

  const altText = title.includes("Newborn") ? "Ensaio Newborn" : "Ensaio Gestante";

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
              <img src={img} alt={`${altText} ${index + 1}`} draggable={false} />
            </div>
          ))}
          {/* Duplicate for infinite scroll effect */}
          {portfolioImages.map((img, index) => (
            <div key={`dup-${index}`} className="portfolio-item">
              <img src={img} alt={`${altText} ${index + 1}`} draggable={false} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

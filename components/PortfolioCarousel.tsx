"use client";

import { useRef, useState, useEffect, useCallback } from "react";

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

const smashImages = [
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Smash%20%281%29-3XZtoadxW2GM4xCIniSY0xkUjFISLg.jpg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Smash%20%282%29-VQFR58z8YUe70QThYu0yIVb8H1qDaO.jpg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Smash%20%283%29-t6xsWR1eSAdwujKlbQRMgJIuyi9Zgc.jpg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Smash%20%284%29-bJejr4gV8Y3MpoQ2dSu3Y0CW31WLvN.jpg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Smash%20%285%29-vnER8mkwO9U1GikICKr2DeJvIsvq9F.jpg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Smash%20%286%29-0sq8mNQo6kazEASBQMYT5EARzpi3mm.jpg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Smash%20%287%29-kgTpw7c76Towu16J0pUYXveCcjy7CA.jpg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Smash%20%288%29-sWvbshTimKxNF17cGSaPMyjprXreGF.jpg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Smash%20%289%29-Buxu3FCSs1KDKuAPmgVorCYJsDWN95.jpg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Smash%20%2810%29-JJZoj7SoP7xUgwf9PWnge4mHupxcgt.jpg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Smash%20%2811%29-Kd2x2oOyca6FfgINapdBLydVHTDsVH.jpg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Smash%20%2812%29-F5BLTmIxEtUyxWZ0a7pWThjriBi7Ga.jpg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Smash%20%2813%29-xVc9Yjprp721ZBCFRx3yvYvsw7PD3S.jpg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Smash%20%2814%29-p9DVthvakhnQJamn2zjrVAJceMagKl.jpg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Smash%20%2815%29-A91zqyhCwDPEELMezaSGcqHQjyPb03.jpg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Smash%20%2816%29-Kp4lqfl2n1hm0f2rIx9gMRhAbPjaU3.jpg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Smash%20%2817%29-Ejv1hLBovAw9NBwvgVQVQgLC2vPrAk.jpg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Smash%20%2818%29-OFJZEb2vOars08H8RkOMWL8gXQeCUR.jpg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Smash%20%2819%29-bbQKfYlnAJhkbiRLrrU4Q1atObwIlC.jpg",
  // New smash images
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Smash%20%2821%29-tbtHpsT6N2UaClqINsBStBPgvW3htL.jpg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Smash%20%2822%29-vTTjisMa0ufBtyGYhKe1NcSWiwqz2u.jpg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Smash%20%2823%29-uuweuWGy8SUSkCDX9PMsIuKmTbB4xL.jpg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Smash%20%2824%29-4pujyfbOsN1QlvsL8oMXqJ2pwkwOIQ.jpg",
];

// Mixed images for homepage - all gestante, all newborn, and 10 smash photos
const homepageMixedImages = [
  // All Gestante photos (17 total)
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
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gestante%20%281%29-P0ExdbFYIUcaQ6SmdRrJPuYGsgnwUm.jpg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gestante%20%282%29-8XC64t31fo8ujQgoiN8IEPMijqWSnd.jpg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gestante%20%283%29-5NpYYbH8iZgbsxbX5wqiOnCOXk37Wj.jpg",
  // All Newborn photos (15 total)
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
  // 10 Smash photos (selected)
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Smash%20%281%29-3XZtoadxW2GM4xCIniSY0xkUjFISLg.jpg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Smash%20%285%29-vnER8mkwO9U1GikICKr2DeJvIsvq9F.jpg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Smash%20%286%29-0sq8mNQo6kazEASBQMYT5EARzpi3mm.jpg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Smash%20%2810%29-JJZoj7SoP7xUgwf9PWnge4mHupxcgt.jpg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Smash%20%2811%29-Kd2x2oOyca6FfgINapdBLydVHTDsVH.jpg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Smash%20%2813%29-xVc9Yjprp721ZBCFRx3yvYvsw7PD3S.jpg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Smash%20%2815%29-A91zqyhCwDPEELMezaSGcqHQjyPb03.jpg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Smash%20%2821%29-tbtHpsT6N2UaClqINsBStBPgvW3htL.jpg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Smash%20%2822%29-vTTjisMa0ufBtyGYhKe1NcSWiwqz2u.jpg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Smash%20%2824%29-4pujyfbOsN1QlvsL8oMXqJ2pwkwOIQ.jpg",
];

export { newbornImages, defaultGestanteImages, smashImages, homepageMixedImages };

export default function PortfolioCarousel({ 
  title = "Nosso trabalho", 
  subtitle,
  images
}: PortfolioCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const scrollPositionRef = useRef(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragStartScroll, setDragStartScroll] = useState(0);
  const [autoScrollPaused, setAutoScrollPaused] = useState(false);
  
  // Default to mixed images for homepage if no images provided
  const portfolioImages = images || homepageMixedImages;

  // Get current scroll position from transform
  const getCurrentScroll = useCallback(() => {
    if (!trackRef.current) return 0;
    const transform = trackRef.current.style.transform;
    const match = transform.match(/translateX\(-?(\d+\.?\d*)px\)/);
    return match ? parseFloat(match[1]) : scrollPositionRef.current;
  }, []);

  // Auto scroll animation
  useEffect(() => {
    if (autoScrollPaused || !trackRef.current) return;
    
    let animationId: number;
    const speed = 0.5;
    
    const animate = () => {
      if (trackRef.current && !autoScrollPaused) {
        scrollPositionRef.current += speed;
        const maxScroll = trackRef.current.scrollWidth / 2;
        
        if (scrollPositionRef.current >= maxScroll) {
          scrollPositionRef.current = 0;
        }
        
        trackRef.current.style.transform = `translateX(-${scrollPositionRef.current}px)`;
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
    const currentScroll = getCurrentScroll();
    setDragStartScroll(currentScroll);
    scrollPositionRef.current = currentScroll;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !trackRef.current) return;
    e.preventDefault();
    const x = e.pageX;
    const walk = (startX - x) * 1.5;
    let newScroll = dragStartScroll + walk;
    
    const maxScroll = trackRef.current.scrollWidth / 2;
    // Wrap around smoothly
    while (newScroll < 0) newScroll += maxScroll;
    while (newScroll >= maxScroll) newScroll -= maxScroll;
    
    scrollPositionRef.current = newScroll;
    trackRef.current.style.transform = `translateX(-${newScroll}px)`;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    // Resume auto scroll after a delay, continuing from current position
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
    const currentScroll = getCurrentScroll();
    setDragStartScroll(currentScroll);
    scrollPositionRef.current = currentScroll;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !trackRef.current) return;
    const x = e.touches[0].pageX;
    const walk = (startX - x) * 1.5;
    let newScroll = dragStartScroll + walk;
    
    const maxScroll = trackRef.current.scrollWidth / 2;
    // Wrap around smoothly
    while (newScroll < 0) newScroll += maxScroll;
    while (newScroll >= maxScroll) newScroll -= maxScroll;
    
    scrollPositionRef.current = newScroll;
    trackRef.current.style.transform = `translateX(-${newScroll}px)`;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    setTimeout(() => setAutoScrollPaused(false), 3000);
  };

  return (
    <section className="portfolio-section">
      <div className="portfolio-header reveal">
        {subtitle && <div className="section-label" style={{ color: "var(--gold)" }}>{subtitle}</div>}
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
              <img src={img} alt={`Ensaio fotográfico ${index + 1}`} draggable={false} />
            </div>
          ))}
          {/* Duplicate for infinite scroll effect */}
          {portfolioImages.map((img, index) => (
            <div key={`dup-${index}`} className="portfolio-item">
              <img src={img} alt={`Ensaio fotográfico ${index + 1}`} draggable={false} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

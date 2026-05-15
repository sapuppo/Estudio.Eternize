"use client";

import { useState, useRef, useCallback } from "react";

interface ImageCompareProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export default function ImageCompare({ 
  beforeImage, 
  afterImage, 
  beforeLabel = "Antes", 
  afterLabel = "Depois" 
}: ImageCompareProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.min(Math.max((x / rect.width) * 100, 0), 100);
    setSliderPosition(percentage);
  }, []);

  const handleMouseDown = () => {
    isDragging.current = true;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging.current) {
      handleMove(e.clientX);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleClick = (e: React.MouseEvent) => {
    handleMove(e.clientX);
  };

  return (
    <div 
      ref={containerRef}
      className="image-compare-container"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onClick={handleClick}
      onTouchMove={handleTouchMove}
      style={{
        position: "relative",
        width: "100%",
        aspectRatio: "4/5",
        overflow: "hidden",
        cursor: "ew-resize",
        userSelect: "none",
        borderRadius: "4px",
      }}
    >
      {/* After Image (Background) */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${afterImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Before Image (Clipped) */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${beforeImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
        }}
      />

      {/* Slider Line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: `${sliderPosition}%`,
          width: "2px",
          background: "var(--gold)",
          transform: "translateX(-50%)",
          zIndex: 10,
        }}
      />

      {/* Slider Handle */}
      <div
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
        style={{
          position: "absolute",
          top: "50%",
          left: `${sliderPosition}%`,
          transform: "translate(-50%, -50%)",
          width: "44px",
          height: "44px",
          borderRadius: "50%",
          background: "var(--gold)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "ew-resize",
          zIndex: 11,
          boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
        }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--dark)" strokeWidth="2">
          <path d="M18 8L22 12L18 16" />
          <path d="M6 8L2 12L6 16" />
        </svg>
      </div>

      {/* Labels */}
      <span
        style={{
          position: "absolute",
          bottom: "16px",
          left: "16px",
          fontSize: "11px",
          fontWeight: 500,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: "var(--warm-white)",
          background: "rgba(26,22,18,0.7)",
          padding: "6px 12px",
          borderRadius: "2px",
          zIndex: 5,
        }}
      >
        {beforeLabel}
      </span>
      <span
        style={{
          position: "absolute",
          bottom: "16px",
          right: "16px",
          fontSize: "11px",
          fontWeight: 500,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: "var(--dark)",
          background: "var(--gold)",
          padding: "6px 12px",
          borderRadius: "2px",
          zIndex: 5,
        }}
      >
        {afterLabel}
      </span>
    </div>
  );
}

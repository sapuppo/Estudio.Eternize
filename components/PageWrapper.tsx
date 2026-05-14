"use client";

import { useEffect } from "react";

interface PageWrapperProps {
  children: React.ReactNode;
}

export default function PageWrapper({ children }: PageWrapperProps) {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("visible");
          }, 80);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

    document.querySelectorAll(".packages-grid .package-card, .policies-grid .policy-card").forEach((el, i) => {
      (el as HTMLElement).style.transitionDelay = `${i * 80}ms`;
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return <>{children}</>;
}

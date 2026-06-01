"use client";

import { useState, useEffect } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

// Categorias do portfólio - adicione suas fotos nas pastas correspondentes em public/portfolio/
const categories = [
  { id: "newborn", name: "Newborn", description: "Ensaios de recém-nascidos" },
  { id: "gestante", name: "Gestante", description: "Ensaios de gestação" },
  { id: "familia", name: "Família", description: "Ensaios de família" },
  { id: "casal", name: "Casal", description: "Ensaios de casal" },
  { id: "aniversario", name: "Aniversário", description: "Festas e smash the cake" },
  { id: "acompanhamento", name: "Acompanhamento", description: "Acompanhamento mensal" },
  { id: "batizado", name: "Batizado", description: "Batizados e cerimônias" },
  { id: "corporativo", name: "Corporativo", description: "Ensaios profissionais" },
];

// INSTRUÇÃO: Para adicionar fotos, crie pastas em public/portfolio/ com os nomes das categorias
// Exemplo: public/portfolio/newborn/foto1.jpg, public/portfolio/gestante/foto2.jpg
// Depois, adicione os caminhos das imagens no objeto abaixo

const portfolioImages: Record<string, string[]> = {
  newborn: [
    "/portfolio/newborn/1.jpg",
    "/portfolio/newborn/2.jpg",
    "/portfolio/newborn/3.jpg",
    "/portfolio/newborn/4.jpg",
    "/portfolio/newborn/5.jpg",
    "/portfolio/newborn/6.jpg",
  ],
  gestante: [
    "/portfolio/gestante/1.jpg",
    "/portfolio/gestante/2.jpg",
    "/portfolio/gestante/3.jpg",
    "/portfolio/gestante/4.jpg",
    "/portfolio/gestante/5.jpg",
    "/portfolio/gestante/6.jpg",
  ],
  familia: [
    "/portfolio/familia/1.jpg",
    "/portfolio/familia/2.jpg",
    "/portfolio/familia/3.jpg",
    "/portfolio/familia/4.jpg",
    "/portfolio/familia/5.jpg",
    "/portfolio/familia/6.jpg",
  ],
  casal: [
    "/portfolio/casal/1.jpg",
    "/portfolio/casal/2.jpg",
    "/portfolio/casal/3.jpg",
    "/portfolio/casal/4.jpg",
    "/portfolio/casal/5.jpg",
    "/portfolio/casal/6.jpg",
  ],
  aniversario: [
    "/portfolio/aniversario/1.jpg",
    "/portfolio/aniversario/2.jpg",
    "/portfolio/aniversario/3.jpg",
    "/portfolio/aniversario/4.jpg",
    "/portfolio/aniversario/5.jpg",
    "/portfolio/aniversario/6.jpg",
  ],
  acompanhamento: [
    "/portfolio/acompanhamento/1.jpg",
    "/portfolio/acompanhamento/2.jpg",
    "/portfolio/acompanhamento/3.jpg",
    "/portfolio/acompanhamento/4.jpg",
    "/portfolio/acompanhamento/5.jpg",
    "/portfolio/acompanhamento/6.jpg",
  ],
  batizado: [
    "/portfolio/batizado/1.jpg",
    "/portfolio/batizado/2.jpg",
    "/portfolio/batizado/3.jpg",
    "/portfolio/batizado/4.jpg",
    "/portfolio/batizado/5.jpg",
    "/portfolio/batizado/6.jpg",
  ],
  corporativo: [
    "/portfolio/corporativo/1.jpg",
    "/portfolio/corporativo/2.jpg",
    "/portfolio/corporativo/3.jpg",
    "/portfolio/corporativo/4.jpg",
    "/portfolio/corporativo/5.jpg",
    "/portfolio/corporativo/6.jpg",
  ],
};

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Reveal animation
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );
    reveals.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [activeCategory]);

  // Check for category in URL hash
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash && categories.some(c => c.id === hash)) {
      setActiveCategory(hash);
    }
  }, []);

  const handleCategoryClick = (categoryId: string) => {
    setActiveCategory(categoryId);
    window.history.pushState(null, "", `#${categoryId}`);
  };

  const handleBackToCategories = () => {
    setActiveCategory(null);
    window.history.pushState(null, "", "/portfolio");
  };

  const currentCategory = categories.find(c => c.id === activeCategory);
  const currentImages = activeCategory ? portfolioImages[activeCategory] || [] : [];

  return (
    <main>
      <Nav />

      {/* HERO */}
      <div className="page-hero">
        <h1 className="hero-title">
          {activeCategory ? (
            <>Portfólio<br /><em>{currentCategory?.name}</em></>
          ) : (
            <>Nosso<br /><em>Portfólio</em></>
          )}
        </h1>
        <p className="hero-subtitle">
          {activeCategory
            ? currentCategory?.description
            : "Selecione uma categoria para visualizar nossos trabalhos"
          }
        </p>
        <div className="hero-divider" />
      </div>

      {/* CATEGORIES GRID ou GALLERY */}
      {!activeCategory ? (
        <section style={{ background: "var(--cream)", padding: "80px 60px" }}>
          <div className="reveal" style={{ textAlign: "center", marginBottom: "60px" }}>
            <span className="section-label">Categorias</span>
            <h2 className="section-title">Escolha um tipo de ensaio</h2>
          </div>
          
          <div className="ensaios-grid reveal">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryClick(category.id)}
                className="ensaio-card"
                style={{ textAlign: "left", cursor: "pointer" }}
              >
                <span className="ensaio-name">{category.name}</span>
                <span className="ensaio-desc">{category.description}</span>
                <svg className="ensaio-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            ))}
          </div>

          <div className="reveal" style={{ textAlign: "center", marginTop: "60px" }}>
            <p style={{ fontSize: "13px", color: "var(--muted)", maxWidth: "500px", margin: "0 auto", lineHeight: 1.8 }}>
              Envie o link direto da categoria para seus clientes:<br />
              <code style={{ 
                background: "var(--dark)", 
                color: "var(--gold)", 
                padding: "8px 16px", 
                borderRadius: "4px",
                display: "inline-block",
                marginTop: "12px",
                fontSize: "11px"
              }}>
                seusite.com/portfolio#categoria
              </code>
            </p>
          </div>
        </section>
      ) : (
        <section style={{ background: "var(--cream)", padding: "60px 40px" }}>
          {/* Back button */}
          <button
            onClick={handleBackToCategories}
            className="reveal"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              background: "none",
              border: "1px solid var(--border)",
              color: "var(--mid)",
              padding: "12px 24px",
              cursor: "pointer",
              marginBottom: "40px",
              fontSize: "11px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              transition: "all 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--gold)";
              e.currentTarget.style.color = "var(--gold)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--border)";
              e.currentTarget.style.color = "var(--mid)";
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Voltar às categorias
          </button>

          {/* Link para compartilhar */}
          <div className="reveal" style={{ 
            background: "var(--dark)", 
            padding: "20px 24px", 
            borderRadius: "4px",
            marginBottom: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "16px"
          }}>
            <div>
              <span style={{ fontSize: "9px", letterSpacing: "0.3em", color: "var(--gold)", textTransform: "uppercase" }}>
                Link para compartilhar
              </span>
              <p style={{ color: "var(--warm-white)", fontSize: "13px", marginTop: "4px" }}>
                estudio-eternize.com/portfolio#{activeCategory}
              </p>
            </div>
            <button
              onClick={() => {
                navigator.clipboard.writeText(`${window.location.origin}/portfolio#${activeCategory}`);
              }}
              style={{
                background: "var(--gold)",
                color: "var(--dark)",
                border: "none",
                padding: "10px 20px",
                fontSize: "10px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                cursor: "pointer",
                fontWeight: 500,
              }}
            >
              Copiar link
            </button>
          </div>

          {/* Gallery Grid */}
          {currentImages.length > 0 ? (
            <div 
              className="reveal"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                gap: "16px",
              }}
            >
              {currentImages.map((image, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedImage(image)}
                  style={{
                    aspectRatio: "4/5",
                    overflow: "hidden",
                    borderRadius: "4px",
                    cursor: "pointer",
                    position: "relative",
                    background: "var(--dark)",
                  }}
                >
                  <img
                    src={image}
                    alt={`${currentCategory?.name} - Foto ${index + 1}`}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.5s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "scale(1.05)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "scale(1)";
                    }}
                    onError={(e) => {
                      // Hide broken images
                      e.currentTarget.parentElement!.style.display = "none";
                    }}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div style={{ 
              textAlign: "center", 
              padding: "80px 20px",
              color: "var(--muted)"
            }}>
              <p style={{ fontSize: "14px", marginBottom: "12px" }}>
                Nenhuma foto adicionada nesta categoria ainda.
              </p>
              <p style={{ fontSize: "12px", opacity: 0.7 }}>
                Adicione imagens em: public/portfolio/{activeCategory}/
              </p>
            </div>
          )}
        </section>
      )}

      {/* Lightbox */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.95)",
            zIndex: 1000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "40px",
            cursor: "zoom-out",
          }}
        >
          <button
            onClick={() => setSelectedImage(null)}
            style={{
              position: "absolute",
              top: "20px",
              right: "20px",
              background: "none",
              border: "none",
              color: "var(--warm-white)",
              cursor: "pointer",
              padding: "10px",
            }}
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
          <img
            src={selectedImage}
            alt="Foto ampliada"
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: "90vw",
              maxHeight: "90vh",
              objectFit: "contain",
              cursor: "default",
            }}
          />
        </div>
      )}

      <Footer />
    </main>
  );
}

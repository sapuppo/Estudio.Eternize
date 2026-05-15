"use client";

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageWrapper from "@/components/PageWrapper";

export default function FamiliaPage() {
  return (
    <PageWrapper>
      <Nav />

      {/* HERO */}
      <div className="page-hero">
        <h1 className="hero-title">Ensaio<br /><em>Família</em></h1>
        <p className="hero-subtitle">Momentos em família eternizados</p>
        <div className="hero-divider"></div>
      </div>

      {/* FAMILIA INFO */}
      <section className="packages-section">
        <div className="packages-header reveal">
          <div>
            <div className="section-label">Pacotes de Ensaio</div>
            <h2 className="section-title">Família</h2>
          </div>
          <p style={{ maxWidth: "360px", fontSize: "13px", color: "var(--muted)", lineHeight: "1.8" }}>
            Registre momentos especiais com quem você mais ama. Ensaios personalizados para toda a família.
          </p>
        </div>

        {/* CTA para contato */}
        <div className="reveal" style={{ textAlign: "center", marginTop: "48px" }}>
          <div style={{ 
            padding: "48px", 
            border: "1px solid var(--border)", 
            maxWidth: "600px", 
            margin: "0 auto",
            background: "rgba(201,169,110,0.03)"
          }}>
            <h3 style={{ 
              fontFamily: "'Cormorant Garamond', serif", 
              fontSize: "28px", 
              fontWeight: 300, 
              color: "var(--dark)",
              marginBottom: "16px"
            }}>
              Ensaio Personalizado
            </h3>
            <p style={{ 
              fontSize: "13px", 
              color: "var(--muted)", 
              lineHeight: "1.8",
              marginBottom: "32px"
            }}>
              Cada família é única! Entre em contato para criarmos um pacote personalizado que atenda às suas necessidades e expectativas.
            </p>
            <a 
              href="https://api.whatsapp.com/send?phone=5511986991295&text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20o%20Ensaio%20Fam%C3%ADlia." 
              target="_blank" 
              className="pkg-cta-btn"
              style={{ display: "inline-block", width: "auto", padding: "16px 48px" }}
            >
              Solicitar Orçamento
            </a>
          </div>
        </div>
      </section>

      {/* O QUE OFERECEMOS */}
      <section className="policies-section">
        <div className="reveal">
          <div className="section-label" style={{ color: "var(--gold)" }}>O que oferecemos</div>
          <h2 className="section-title" style={{ color: "var(--warm-white)" }}>Nossos ensaios incluem</h2>
        </div>

        <div className="policies-grid">
          <div className="policy-card reveal">
            <div className="policy-icon">📸</div>
            <div className="policy-title">Fotos Profissionais</div>
            <p className="policy-text">Fotos digitais editadas com alta qualidade e direcionamento de poses para toda a família.</p>
          </div>

          <div className="policy-card reveal">
            <div className="policy-icon">🎨</div>
            <div className="policy-title">Cenários Variados</div>
            <p className="policy-text">Diversos cenários disponíveis para criar composições únicas e memoráveis.</p>
          </div>

          <div className="policy-card reveal">
            <div className="policy-icon">💄</div>
            <div className="policy-title">Produção</div>
            <p className="policy-text">Opção de maquiagem profissional e produção de cabelo para deixar todos ainda mais bonitos.</p>
          </div>

          <div className="policy-card reveal">
            <div className="policy-icon">✨</div>
            <div className="policy-title">Edição Refinada</div>
            <p className="policy-text">Tratamento profissional das fotos com correção de iluminação e retoques sutis.</p>
          </div>

          <div className="policy-card reveal">
            <div className="policy-icon">🐾</div>
            <div className="policy-title">Pets Bem-vindos</div>
            <p className="policy-text">Seu pet faz parte da família! Aceitamos animais de pequeno porte até 5kg.</p>
          </div>

          <div className="policy-card reveal">
            <div className="policy-icon">📖</div>
            <div className="policy-title">Produtos Físicos</div>
            <p className="policy-text">Opção de álbuns luxuosos e fotos reveladas para guardar suas memórias.</p>
          </div>
        </div>
      </section>

      <Footer />
    </PageWrapper>
  );
}

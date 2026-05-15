"use client";

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageWrapper from "@/components/PageWrapper";

export default function ProfissionalPage() {
  return (
    <PageWrapper>
      <Nav />

      {/* HERO */}
      <div className="page-hero">
        <h1 className="hero-title">Ensaio<br /><em>Profissional</em></h1>
        <p className="hero-subtitle">Posicionamento de imagem para sua marca pessoal</p>
        <div className="hero-divider"></div>
      </div>

      {/* PROFISSIONAL PACKAGES */}
      <section className="packages-section">
        <div className="packages-header reveal">
          <div>
            <div className="section-label">Pacotes de Ensaio</div>
            <h2 className="section-title">Profissional</h2>
          </div>
          <p style={{ maxWidth: "360px", fontSize: "13px", color: "var(--muted)", lineHeight: "1.8" }}>
            Um ensaio fotográfico pode mudar o rumo da sua empresa. Invista na imagem certa!
          </p>
        </div>

        <div className="packages-grid" style={{ maxWidth: "800px" }}>
          {/* MARCA PESSOAL */}
          <div className="package-card reveal">
            <div className="pkg-tag">Pacote 01</div>
            <div className="pkg-name">Marca Pessoal</div>
            <div className="pkg-line"></div>
            <ul className="pkg-features">
              <li className="pkg-feature">10 Fotos tratadas</li>
              <li className="pkg-feature">1 Cenário</li>
              <li className="pkg-feature">1 Figurino (por conta do cliente)</li>
              <li className="pkg-feature">Maquiagem profissional</li>
              <li className="pkg-feature">Direcionamento de poses</li>
            </ul>
            <div className="pkg-price-main">R$490</div>
            <div className="pkg-installment">em até 3× sem juros</div>
            <div className="pkg-signal">R$150 de sinal para reservar</div>
            <a 
              href="https://api.whatsapp.com/send?phone=5511986991295&text=Ol%C3%A1!%20Gostaria%20de%20agendar%20o%20pacote%20Marca%20Pessoal%20(Ensaio%20Profissional)." 
              target="_blank" 
              className="pkg-cta-btn"
            >
              Quero este pacote
            </a>
          </div>

          {/* PERFIL EXECUTIVO */}
          <div className="package-card reveal">
            <div className="pkg-highlight">Mais completo</div>
            <div className="pkg-tag">Pacote 02</div>
            <div className="pkg-name">Perfil Executivo</div>
            <div className="pkg-line"></div>
            <ul className="pkg-features">
              <li className="pkg-feature">15 Fotos tratadas</li>
              <li className="pkg-feature">2 Cenários</li>
              <li className="pkg-feature">2 Figurinos (por conta do cliente)</li>
              <li className="pkg-feature">Maquiagem profissional</li>
              <li className="pkg-feature">Direcionamento de poses</li>
            </ul>
            <div className="pkg-price-main">R$690</div>
            <div className="pkg-installment">em até 5× sem juros</div>
            <div className="pkg-signal">R$150 de sinal para reservar</div>
            <a 
              href="https://api.whatsapp.com/send?phone=5511986991295&text=Ol%C3%A1!%20Gostaria%20de%20agendar%20o%20pacote%20Perfil%20Executivo%20(Ensaio%20Profissional)." 
              target="_blank" 
              className="pkg-cta-btn"
            >
              Quero este pacote
            </a>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="editing-section">
        <div className="editing-content" style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <div className="editing-text reveal" style={{ maxWidth: "100%" }}>
            <div className="section-label">Posicionamento de Imagem</div>
            <h2 className="section-title" style={{ marginBottom: "32px" }}>Invista na<br />imagem certa</h2>
            <p style={{ marginBottom: "24px" }}>Um ensaio fotográfico profissional pode transformar a percepção do seu negócio. Transmita credibilidade, profissionalismo e confiança através de fotos que realmente representam quem você é.</p>
            <p>Ideal para profissionais liberais, empreendedores, coaches, personal trainers, médicos, advogados, consultores e todos que desejam fortalecer sua marca pessoal.</p>
          </div>
        </div>
      </section>

      <Footer />
    </PageWrapper>
  );
}

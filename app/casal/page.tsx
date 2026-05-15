"use client";

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageWrapper from "@/components/PageWrapper";

export default function CasalPage() {
  return (
    <PageWrapper>
      <Nav />

      {/* HERO */}
      <div className="page-hero">
        <h1 className="hero-title">Ensaio<br /><em>Casal</em></h1>
        <p className="hero-subtitle">Eternize o amor de vocês</p>
        <div className="hero-divider"></div>
      </div>

      {/* CASAL PACKAGES */}
      <section className="packages-section">
        <div className="packages-header reveal">
          <div>
            <div className="section-label">Pacotes de Ensaio</div>
            <h2 className="section-title">Casal</h2>
          </div>
          <p className="packages-desc">
            Registre momentos únicos a dois com direcionamento de poses e edição refinada.
          </p>
        </div>

        <div className="packages-grid" style={{ maxWidth: "800px" }}>
          {/* SINTONIA */}
          <div className="package-card reveal">
            <div className="pkg-tag">Pacote 01</div>
            <div className="pkg-name">Sintonia</div>
            <div className="pkg-line"></div>
            <ul className="pkg-features">
              <li className="pkg-feature">10 Fotos digitais editadas</li>
              <li className="pkg-feature">1 Cenário</li>
              <li className="pkg-feature">1 Figurino (por conta do cliente)</li>
              <li className="pkg-feature">Direcionamento de poses</li>
              <li className="pkg-feature">Edição refinada</li>
            </ul>
            <div className="pkg-price-main">R$390</div>
            <div className="pkg-installment">em até 2× sem juros</div>
            <div className="pkg-signal">R$100 de sinal para reservar</div>
            <a 
              href="https://api.whatsapp.com/send?phone=5511986991295&text=Ol%C3%A1!%20Gostaria%20de%20agendar%20o%20pacote%20Sintonia%20(Ensaio%20Casal)." 
              target="_blank" 
              className="pkg-cta-btn"
            >
              Quero este pacote
            </a>
          </div>

          {/* CONEXÃO */}
          <div className="package-card reveal">
            <div className="pkg-highlight">Mais completo</div>
            <div className="pkg-tag">Pacote 02</div>
            <div className="pkg-name">Conexão</div>
            <div className="pkg-line"></div>
            <ul className="pkg-features">
              <li className="pkg-feature">20 Fotos digitais editadas</li>
              <li className="pkg-feature">2 Cenários</li>
              <li className="pkg-feature">2 Figurinos (por conta do cliente)</li>
              <li className="pkg-feature">Direcionamento de poses</li>
              <li className="pkg-feature">Edição refinada</li>
            </ul>
            <div className="pkg-price-main">R$590</div>
            <div className="pkg-installment">em até 4× sem juros</div>
            <div className="pkg-signal">R$100 de sinal para reservar</div>
            <a 
              href="https://api.whatsapp.com/send?phone=5511986991295&text=Ol%C3%A1!%20Gostaria%20de%20agendar%20o%20pacote%20Conex%C3%A3o%20(Ensaio%20Casal)." 
              target="_blank" 
              className="pkg-cta-btn"
            >
              Quero este pacote
            </a>
          </div>
        </div>
      </section>

      {/* ADICIONAIS */}
      <section className="extras-section">
        <div className="reveal">
          <div className="section-label">Personalize</div>
          <h2 className="section-title">Adicionais</h2>
        </div>

        <div className="extras-grid">
          <div>
            <div className="section-label reveal" style={{ marginTop: "48px", marginBottom: "0" }}>Adicionais disponíveis</div>
            <div className="extras-list">
              <div className="extra-item reveal">
                <span className="extra-name">Finais de semana e feriados</span>
                <span className="extra-price">+R$60</span>
              </div>
              <div className="extra-item reveal">
                <span className="extra-name">Pet pequeno porte (até 5kg)</span>
                <span className="extra-price">+R$100</span>
              </div>
              <div className="extra-item reveal">
                <span className="extra-name">Foto extra</span>
                <span className="extra-price">+R$20</span>
              </div>
              <div className="extra-item reveal">
                <span className="extra-name">Maquiagem e Babyliss</span>
                <span className="extra-price">+R$150</span>
              </div>
              <div className="extra-item reveal">
                <span className="extra-name">Figurino extra</span>
                <span className="extra-price">+R$100</span>
              </div>
              <div className="extra-item reveal">
                <span className="extra-name">Cenário extra</span>
                <span className="extra-price">+R$100</span>
              </div>
            </div>
          </div>

          <div className="products-col reveal">
            <div className="section-label" style={{ marginTop: "48px", marginBottom: "0" }}>Produtos físicos</div>
            <div className="extras-list">
              <div className="product-item">
                <div className="product-name">Álbum Luxo Personalizado<br /><small style={{ fontWeight: 300, color: "var(--muted)" }}>20×60 aberto · 20 páginas</small></div>
                <div className="product-price">R$800</div>
              </div>
              <div className="product-item">
                <div className="product-name">Fotos Reveladas<br /><small style={{ fontWeight: 300, color: "var(--muted)" }}>Tamanho 15×21 · 10 fotos</small></div>
                <div className="product-price">R$80</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </PageWrapper>
  );
}

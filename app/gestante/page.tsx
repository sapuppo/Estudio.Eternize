"use client";

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageWrapper from "@/components/PageWrapper";

export default function GestantePage() {
  return (
    <PageWrapper>
      <Nav />

      {/* HERO */}
      <div className="page-hero">
        <div className="hero-badge">
          <span>Promoção</span>
          <strong>Mês das Mães</strong>
        </div>
        <h1 className="hero-title">Ensaio<br /><em>Gestante</em></h1>
        <p className="hero-subtitle">Eternize cada momento da sua gestação</p>
        <div className="hero-divider"></div>
      </div>

      {/* GESTANTE PACKAGES */}
      <section className="packages-section">
        <div className="packages-header reveal">
          <div>
            <div className="section-label">Pacotes de Ensaio</div>
            <h2 className="section-title">Gestante</h2>
          </div>
          <p style={{ maxWidth: "360px", fontSize: "13px", color: "var(--muted)", lineHeight: "1.8" }}>
            Cada ensaio inclui maquiagem profissional, modelagem de cabelo, direcionamento de poses e edição refinada.
          </p>
        </div>

        <div className="packages-grid">
          {/* CLÁSSICO */}
          <div className="package-card reveal">
            <div className="pkg-tag">Pacote 01</div>
            <div className="pkg-name">Clássico</div>
            <div className="pkg-line"></div>
            <ul className="pkg-features">
              <li className="pkg-feature">10 Fotos digitais editadas</li>
              <li className="pkg-feature">1 Cenário + 1 Figurino</li>
              <li className="pkg-feature">1 Acompanhante</li>
              <li className="pkg-feature">Maquiagem profissional</li>
              <li className="pkg-feature">Modelagem de cabelo</li>
              <li className="pkg-feature">Edição refinada completa</li>
            </ul>
            <span className="pkg-price-old">R$590</span>
            <div className="pkg-price-main">R$530</div>
            <div className="pkg-installment">em até 12× sem juros</div>
            <div className="pkg-signal">R$100 de sinal para reservar</div>
            <a 
              href="https://api.whatsapp.com/send?phone=5511986991295&text=Ol%C3%A1!%20Gostaria%20de%20agendar%20o%20pacote%20Cl%C3%A1ssico%20Gestante." 
              target="_blank" 
              className="pkg-cta-btn"
            >
              Quero este pacote
            </a>
          </div>

          {/* DELUXE */}
          <div className="package-card reveal">
            <div className="pkg-tag">Pacote 02</div>
            <div className="pkg-name">Deluxe</div>
            <div className="pkg-line"></div>
            <ul className="pkg-features">
              <li className="pkg-feature">15 Fotos digitais editadas</li>
              <li className="pkg-feature">2 Cenários + 2 Figurinos</li>
              <li className="pkg-feature">2 Acompanhantes</li>
              <li className="pkg-feature">Maquiagem profissional</li>
              <li className="pkg-feature">Modelagem de cabelo</li>
              <li className="pkg-feature">Edição refinada completa</li>
            </ul>
            <span className="pkg-price-old">R$690</span>
            <div className="pkg-price-main">R$620</div>
            <div className="pkg-installment">em até 12× sem juros</div>
            <div className="pkg-signal">R$100 de sinal para reservar</div>
            <a 
              href="https://api.whatsapp.com/send?phone=5511986991295&text=Ol%C3%A1!%20Gostaria%20de%20agendar%20o%20pacote%20Deluxe%20Gestante." 
              target="_blank" 
              className="pkg-cta-btn"
            >
              Quero este pacote
            </a>
          </div>

          {/* PREMIUM */}
          <div className="package-card reveal">
            <div className="pkg-highlight">Mais escolhido</div>
            <div className="pkg-tag">Pacote 03</div>
            <div className="pkg-name">Premium</div>
            <div className="pkg-line"></div>
            <ul className="pkg-features">
              <li className="pkg-feature">20 Fotos digitais editadas</li>
              <li className="pkg-feature">3 Cenários + 3 Figurinos</li>
              <li className="pkg-feature">Produção exclusiva inclusa</li>
              <li className="pkg-feature">2 Acompanhantes</li>
              <li className="pkg-feature">Maquiagem + cabelo profissional</li>
              <li className="pkg-feature">Edição refinada completa</li>
            </ul>
            <span className="pkg-price-old">R$990</span>
            <div className="pkg-price-main">R$890</div>
            <div className="pkg-installment">em até 12× sem juros</div>
            <div className="pkg-signal">R$100 de sinal para reservar</div>
            <a 
              href="https://api.whatsapp.com/send?phone=5511986991295&text=Ol%C3%A1!%20Gostaria%20de%20agendar%20o%20pacote%20Premium%20Gestante." 
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
                <span className="extra-name">Acompanhante extra</span>
                <span className="extra-price">+R$50</span>
              </div>
              <div className="extra-item reveal">
                <span className="extra-name">Pet pequeno porte (até 5kg)</span>
                <span className="extra-price">+R$80</span>
              </div>
              <div className="extra-item reveal">
                <span className="extra-name">Foto extra</span>
                <span className="extra-price">+R$20</span>
              </div>
              <div className="extra-item reveal">
                <span className="extra-name">Edição refinada em acompanhantes</span>
                <span className="extra-price">+R$10/foto</span>
              </div>
              <div className="extra-item reveal">
                <span className="extra-name">Produções exclusivas (Brilhos, Pérolas, Ensaio Molhado, Cenário da Lua)</span>
                <span className="extra-price">Consultar</span>
              </div>
            </div>
          </div>

          <div className="products-col reveal">
            <div className="section-label" style={{ marginTop: "48px", marginBottom: "0" }}>Produtos físicos</div>
            <div className="extras-list">
              <div className="product-item">
                <div className="product-name">Álbum Luxo Personalizado<br /><small style={{ fontWeight: 300, color: "var(--muted)" }}>20×60 aberto · 20 páginas</small></div>
                <div className="product-price">R$1.190</div>
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

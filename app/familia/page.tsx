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
        <div style={{ marginTop: "32px", animation: "fadeIn 1s ease 1.2s both" }}>
          <img src="/images/Eternize.svg" alt="Eternize" style={{ height: "120px", width: "auto" }} />
        </div>
      </div>

      {/* FAMILIA PACKAGES */}
      <section className="packages-section">
        <div className="packages-header reveal">
          <div>
            <div className="section-label">Pacotes de Ensaio</div>
            <h2 className="section-title">Família</h2>
          </div>
          <p className="packages-desc">
            Registre momentos especiais com quem você mais ama. Cada ensaio inclui direcionamento de poses e edição refinada.
          </p>
        </div>

        <div className="packages-grid">
          {/* FAMÍLIA ESSENCIAL */}
          <div className="package-card reveal">
            <div className="pkg-tag">Pacote 01</div>
            <div className="pkg-name">Família Essencial</div>
            <div className="pkg-line"></div>
            <ul className="pkg-features">
              <li className="pkg-feature">15 Fotos digitais editadas</li>
              <li className="pkg-feature">1 Cenário</li>
              <li className="pkg-feature">Até 4 participantes</li>
              <li className="pkg-feature">Direcionamento de poses</li>
              <li className="pkg-feature">Edição refinada completa</li>
            </ul>
            <div className="pkg-price-main">R$490</div>
            <div className="pkg-installment">em até 12× sem juros</div>
            <div className="pkg-signal">R$100 de sinal para reservar</div>
            <a 
              href="https://api.whatsapp.com/send?phone=5511986991295&text=Ol%C3%A1!%20Gostaria%20de%20agendar%20o%20pacote%20Fam%C3%ADlia%20Essencial." 
              target="_blank" 
              className="pkg-cta-btn"
            >
              Quero este pacote
            </a>
          </div>

          {/* FAMÍLIA COMPLETA */}
          <div className="package-card reveal">
            <div className="pkg-highlight">Mais escolhido</div>
            <div className="pkg-tag">Pacote 02</div>
            <div className="pkg-name">Família Completa</div>
            <div className="pkg-line"></div>
            <ul className="pkg-features">
              <li className="pkg-feature">20 Fotos digitais editadas</li>
              <li className="pkg-feature">2 Cenários</li>
              <li className="pkg-feature">Até 4 participantes</li>
              <li className="pkg-feature">Maquiagem profissional</li>
              <li className="pkg-feature">Modelagem de cabelo</li>
              <li className="pkg-feature">Direcionamento de poses</li>
              <li className="pkg-feature">Edição refinada completa</li>
            </ul>
            <div className="pkg-price-main">R$790</div>
            <div className="pkg-installment">em até 12× sem juros</div>
            <div className="pkg-signal">R$100 de sinal para reservar</div>
            <a 
              href="https://api.whatsapp.com/send?phone=5511986991295&text=Ol%C3%A1!%20Gostaria%20de%20agendar%20o%20pacote%20Fam%C3%ADlia%20Completa." 
              target="_blank" 
              className="pkg-cta-btn"
            >
              Quero este pacote
            </a>
          </div>

          {/* FAMÍLIA PREMIUM */}
          <div className="package-card reveal">
            <div className="pkg-tag">Pacote 03</div>
            <div className="pkg-name">Família Premium</div>
            <div className="pkg-line"></div>
            <ul className="pkg-features">
              <li className="pkg-feature">30 Fotos digitais editadas</li>
              <li className="pkg-feature">3 Cenários</li>
              <li className="pkg-feature">Até 4 participantes</li>
              <li className="pkg-feature">Maquiagem profissional</li>
              <li className="pkg-feature">Modelagem de cabelo</li>
              <li className="pkg-feature">Álbum Luxo incluso</li>
              <li className="pkg-feature">Direcionamento de poses</li>
              <li className="pkg-feature">Edição refinada completa</li>
            </ul>
            <div className="pkg-price-main">R$1.490</div>
            <div className="pkg-installment">em até 12× sem juros</div>
            <div className="pkg-signal">R$100 de sinal para reservar</div>
            <a 
              href="https://api.whatsapp.com/send?phone=5511986991295&text=Ol%C3%A1!%20Gostaria%20de%20agendar%20o%20pacote%20Fam%C3%ADlia%20Premium." 
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

        <div className="extras-list" style={{ maxWidth: "600px", margin: "48px auto 0" }}>
          <div className="extra-item reveal">
            <span className="extra-name">Finais de semana e feriados</span>
            <span className="extra-price">+R$60</span>
          </div>
          <div className="extra-item reveal">
            <span className="extra-name">Participante extra (acima do limite)</span>
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
        </div>
      </section>

      <Footer />
    </PageWrapper>
  );
}

"use client";

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageWrapper from "@/components/PageWrapper";

export default function RevelacaoPage() {
  return (
    <PageWrapper>
      <Nav />

      {/* HERO */}
      <div className="page-hero">
        <h1 className="hero-title">Ensaio<br /><em>Revelação</em></h1>
        <p className="hero-subtitle">Descubra o sexo do bebê de forma inesquecível</p>
        <div className="hero-divider"></div>
        <div style={{ marginTop: "32px", animation: "fadeIn 1s ease 1.2s both" }}>
          <img src="/images/Eternize.svg" alt="Eternize" style={{ height: "120px", width: "auto" }} />
        </div>
      </div>

      {/* REVELACAO PACKAGES */}
      <section className="packages-section">
        <div className="packages-header reveal">
          <div>
            <div className="section-label">Pacotes de Ensaio</div>
            <h2 className="section-title">Revelação</h2>
          </div>
          <p className="packages-desc">
            Eternize o momento mágico da descoberta do sexo do seu bebê com fotos profissionais.
          </p>
        </div>

        <div className="packages-grid" style={{ maxWidth: "800px" }}>
          {/* EXPLOSÃO DE AMOR */}
          <div className="package-card reveal">
            <div className="pkg-tag">Pacote 01</div>
            <div className="pkg-name">Explosão de Amor</div>
            <div className="pkg-line"></div>
            <ul className="pkg-features">
              <li className="pkg-feature">20 Fotos digitais editadas</li>
              <li className="pkg-feature">1 Cenário</li>
              <li className="pkg-feature">1 Figurino (por conta do cliente)</li>
              <li className="pkg-feature">1 Acompanhante</li>
              <li className="pkg-feature">Balões de hélio (cores a combinar)</li>
            </ul>
            <div className="pkg-price-main">R$680</div>
            <div className="pkg-installment">em até 5× sem juros</div>
            <div className="pkg-signal">R$100 de sinal para reservar</div>
            <a 
              href="https://api.whatsapp.com/send?phone=5511986991295&text=Ol%C3%A1!%20Gostaria%20de%20agendar%20o%20pacote%20Explos%C3%A3o%20de%20Amor%20(Revela%C3%A7%C3%A3o)." 
              target="_blank" 
              className="pkg-cta-btn"
            >
              Quero este pacote
            </a>
          </div>

          {/* ARTE DA REVELAÇÃO */}
          <div className="package-card reveal">
            <div className="pkg-tag">Pacote 02</div>
            <div className="pkg-name">Arte da Revelação</div>
            <div className="pkg-line"></div>
            <ul className="pkg-features">
              <li className="pkg-feature">20 Fotos digitais editadas</li>
              <li className="pkg-feature">1 Cenário</li>
              <li className="pkg-feature">1 Figurino (por conta do cliente)</li>
              <li className="pkg-feature">1 Acompanhante</li>
              <li className="pkg-feature">Tinta colorida para revelação</li>
            </ul>
            <div className="pkg-price-main">R$480</div>
            <div className="pkg-installment">em até 3× sem juros</div>
            <div className="pkg-signal">R$100 de sinal para reservar</div>
            <a 
              href="https://api.whatsapp.com/send?phone=5511986991295&text=Ol%C3%A1!%20Gostaria%20de%20agendar%20o%20pacote%20Arte%20da%20Revela%C3%A7%C3%A3o." 
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
            <span className="extra-name">Acompanhante extra</span>
            <span className="extra-price">+R$50</span>
          </div>
          <div className="extra-item reveal">
            <span className="extra-name">Foto extra</span>
            <span className="extra-price">+R$20</span>
          </div>
          <div className="extra-item reveal">
            <span className="extra-name">Make profissional</span>
            <span className="extra-price">+R$150</span>
          </div>
        </div>
      </section>

      <Footer />
    </PageWrapper>
  );
}

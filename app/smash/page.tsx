"use client";

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageWrapper from "@/components/PageWrapper";

export default function SmashPage() {
  return (
    <PageWrapper>
      <Nav />

      {/* HERO */}
      <div className="page-hero">
        <h1 className="hero-title">Smash<br /><em>the Cake</em></h1>
        <p className="hero-subtitle">O primeiro aniversário cheio de doçura</p>
        <div className="hero-divider"></div>
      </div>

      {/* SMASH PACKAGES */}
      <section className="packages-section">
        <div className="packages-header reveal">
          <div>
            <div className="section-label">Pacotes de Ensaio</div>
            <h2 className="section-title">Smash the Cake</h2>
          </div>
          <p className="packages-desc">
            Celebre o primeiro aniversário do seu bebê com muita diversão, bolo e um banho quentinho no final!
          </p>
        </div>

        <div className="packages-grid" style={{ maxWidth: "800px" }}>
          {/* DOCES MEMÓRIAS */}
          <div className="package-card reveal">
            <div className="pkg-tag">Pacote 01</div>
            <div className="pkg-name">Doces Memórias</div>
            <div className="pkg-line"></div>
            <ul className="pkg-features">
              <li className="pkg-feature">30 Fotos digitais editadas</li>
              <li className="pkg-feature">1 Cenário + 1 Figurino</li>
              <li className="pkg-feature">Bolo temático</li>
              <li className="pkg-feature">Hora do banho (splash)</li>
              <li className="pkg-feature">Participação dos pais e irmãos</li>
            </ul>
            <div className="pkg-price-main">R$1.090</div>
            <div className="pkg-installment">em até 10× sem juros</div>
            <div className="pkg-signal">R$150 de sinal para reservar</div>
            <a 
              href="https://api.whatsapp.com/send?phone=5511986991295&text=Ol%C3%A1!%20Gostaria%20de%20agendar%20o%20pacote%20Doces%20Mem%C3%B3rias%20(Smash%20the%20Cake)." 
              target="_blank" 
              className="pkg-cta-btn"
            >
              Quero este pacote
            </a>
          </div>

          {/* LEMBRANÇA ETERNA */}
          <div className="package-card reveal">
            <div className="pkg-highlight">Mais completo</div>
            <div className="pkg-tag">Pacote 02</div>
            <div className="pkg-name">Lembrança Eterna</div>
            <div className="pkg-line"></div>
            <ul className="pkg-features">
              <li className="pkg-feature">40 Fotos digitais editadas</li>
              <li className="pkg-feature">1 Cenário + 1 Figurino</li>
              <li className="pkg-feature">Bolo temático</li>
              <li className="pkg-feature">Hora do banho (splash)</li>
              <li className="pkg-feature">Participação dos pais e irmãos</li>
              <li className="pkg-feature">Álbum Luxo personalizado</li>
            </ul>
            <div className="pkg-price-main">R$1.890</div>
            <div className="pkg-installment">em até 10× sem juros</div>
            <div className="pkg-signal">R$150 de sinal para reservar</div>
            <a 
              href="https://api.whatsapp.com/send?phone=5511986991295&text=Ol%C3%A1!%20Gostaria%20de%20agendar%20o%20pacote%20Lembran%C3%A7a%20Eterna%20(Smash%20the%20Cake)." 
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
            <span className="extra-price">+R$15</span>
          </div>
          <div className="extra-item reveal">
            <span className="extra-name">Foto revelada</span>
            <span className="extra-price">+R$10</span>
          </div>
          <div className="extra-item reveal">
            <span className="extra-name">Álbum 20x60 (20 páginas)</span>
            <span className="extra-price">R$750</span>
          </div>
        </div>
      </section>

      {/* INFORMAÇÕES */}
      <section className="policies-section">
        <div className="reveal">
          <div className="section-label" style={{ color: "var(--gold)" }}>Informações importantes</div>
          <h2 className="section-title" style={{ color: "var(--warm-white)" }}>Smash the Cake</h2>
        </div>

        <div className="policies-grid">
          <div className="policy-card reveal">
            <div className="policy-icon">📅</div>
            <div className="policy-title">Agendamento</div>
            <p className="policy-text">O ensaio precisa ser realizado com pelo menos 15 dias de antecedência do aniversário.</p>
          </div>

          <div className="policy-card reveal">
            <div className="policy-icon">😴</div>
            <div className="policy-title">Horário Ideal</div>
            <p className="policy-text">Agende fora do horário do soninho e alimentação da criança para que o bebê esteja tranquilo.</p>
          </div>

          <div className="policy-card reveal">
            <div className="policy-icon">🛁</div>
            <div className="policy-title">Toalha</div>
            <p className="policy-text">Traga uma toalha de banho para o bebê. Após se lambuzar com o bolo, teremos um banho quentinho!</p>
          </div>

          <div className="policy-card reveal">
            <div className="policy-icon">🎂</div>
            <div className="policy-title">Reação do Bebê</div>
            <p className="policy-text">Cada bebê reage de uma forma diante do bolo. O ensaio depende da reação natural deles.</p>
          </div>
        </div>
      </section>

      <Footer />
    </PageWrapper>
  );
}

"use client";

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageWrapper from "@/components/PageWrapper";

export default function NewbornPage() {
  return (
    <PageWrapper>
      <Nav />

      {/* HERO */}
      <div className="page-hero">
        <div className="hero-badge">
          <span>Promoção</span>
          <strong>Mês das Mães</strong>
        </div>
        <h1 className="hero-title">Ensaio<br /><em>Newborn</em></h1>
        <p className="hero-subtitle">Os primeiros dias de vida eternizados</p>
        <div className="hero-divider"></div>
      </div>

      {/* NEWBORN PACKAGES */}
      <section className="packages-section">
        <div className="packages-header reveal">
          <div>
            <div className="section-label">Pacotes de Ensaio</div>
            <h2 className="section-title">Newborn</h2>
          </div>
          <p style={{ maxWidth: "360px", fontSize: "13px", color: "var(--muted)", lineHeight: "1.8" }}>
            Edição refinada no bebê incluindo remoção de bolinhas, descamação e vermelhidão. Participação dos pais e irmãos inclusa.
          </p>
        </div>

        <div className="packages-grid">
          {/* CLASSIC BABY */}
          <div className="package-card reveal">
            <div className="pkg-tag">Pacote 01</div>
            <div className="pkg-name">Classic Baby</div>
            <div className="pkg-line"></div>
            <ul className="pkg-features">
              <li className="pkg-feature">10 Fotos digitais editadas</li>
              <li className="pkg-feature">1 Cenário + 1 Figurino</li>
              <li className="pkg-feature">1 Cenário com os pais</li>
              <li className="pkg-feature">Pais e irmãos inclusos</li>
              <li className="pkg-feature">Edição refinada no bebê</li>
            </ul>
            <span className="pkg-price-old">R$590</span>
            <div className="pkg-price-main">R$530</div>
            <div className="pkg-installment">em até 12× sem juros</div>
            <div className="pkg-signal">R$100 de sinal para reservar</div>
            <a 
              href="https://api.whatsapp.com/send?phone=5511986991295&text=Ol%C3%A1!%20Gostaria%20de%20agendar%20o%20pacote%20Classic%20Baby%20Newborn." 
              target="_blank" 
              className="pkg-cta-btn"
            >
              Quero este pacote
            </a>
          </div>

          {/* DELUXE BABY */}
          <div className="package-card reveal">
            <div className="pkg-tag">Pacote 02</div>
            <div className="pkg-name">Deluxe Baby</div>
            <div className="pkg-line"></div>
            <ul className="pkg-features">
              <li className="pkg-feature">15 Fotos digitais editadas</li>
              <li className="pkg-feature">2 Cenários + 2 Figurinos</li>
              <li className="pkg-feature">1 Cenário com os pais</li>
              <li className="pkg-feature">Pais e irmãos inclusos</li>
              <li className="pkg-feature">Edição refinada no bebê</li>
            </ul>
            <span className="pkg-price-old">R$790</span>
            <div className="pkg-price-main">R$710</div>
            <div className="pkg-installment">em até 12× sem juros</div>
            <div className="pkg-signal">R$100 de sinal para reservar</div>
            <a 
              href="https://api.whatsapp.com/send?phone=5511986991295&text=Ol%C3%A1!%20Gostaria%20de%20agendar%20o%20pacote%20Deluxe%20Baby%20Newborn." 
              target="_blank" 
              className="pkg-cta-btn"
            >
              Quero este pacote
            </a>
          </div>

          {/* PREMIUM BABY */}
          <div className="package-card reveal">
            <div className="pkg-highlight">Mais escolhido</div>
            <div className="pkg-tag">Pacote 03</div>
            <div className="pkg-name">Premium Baby</div>
            <div className="pkg-line"></div>
            <ul className="pkg-features">
              <li className="pkg-feature">20 Fotos digitais editadas</li>
              <li className="pkg-feature">3 Cenários + 3 Figurinos</li>
              <li className="pkg-feature">1 Cenário com os pais</li>
              <li className="pkg-feature">Maquiagem profissional para mamãe</li>
              <li className="pkg-feature">Modelagem de cabelo</li>
              <li className="pkg-feature">Álbum Luxo incluso</li>
              <li className="pkg-feature">Pais e irmãos inclusos</li>
              <li className="pkg-feature">Edição refinada no bebê</li>
            </ul>
            <span className="pkg-price-old">R$1.790</span>
            <div className="pkg-price-main">R$1.611</div>
            <div className="pkg-installment">em até 12× sem juros</div>
            <div className="pkg-signal">R$100 de sinal para reservar</div>
            <a 
              href="https://api.whatsapp.com/send?phone=5511986991295&text=Ol%C3%A1!%20Gostaria%20de%20agendar%20o%20pacote%20Premium%20Baby%20Newborn." 
              target="_blank" 
              className="pkg-cta-btn"
            >
              Quero este pacote
            </a>
          </div>
        </div>
      </section>

      {/* INFORMAÇÕES */}
      <section className="policies-section">
        <div className="reveal">
          <div className="section-label" style={{ color: "var(--gold)" }}>Informações importantes</div>
          <h2 className="section-title" style={{ color: "var(--warm-white)" }}>Newborn</h2>
        </div>

        <div className="policies-grid">
          <div className="policy-card reveal">
            <div className="policy-icon">👶</div>
            <div className="policy-title">Segurança</div>
            <p className="policy-text">Por segurança do recém-nascido, o ensaio é realizado exclusivamente em dias de semana, evitando contato com outros clientes.</p>
          </div>

          <div className="policy-card reveal">
            <div className="policy-icon">⏱</div>
            <div className="policy-title">Pontualidade</div>
            <p className="policy-text">Tolerância de 20 minutos para atrasos. Após esse prazo, o ensaio será cancelado e uma nova taxa de agendamento será necessária.</p>
          </div>

          <div className="policy-card reveal">
            <div className="policy-icon">📅</div>
            <div className="policy-title">Reagendamento</div>
            <p className="policy-text">Reagendamentos devem ser feitos com mínimo 5 dias de antecedência. Do contrário, nova taxa é cobrada.</p>
          </div>

          <div className="policy-card reveal">
            <div className="policy-icon">🖼</div>
            <div className="policy-title">Entrega</div>
            <p className="policy-text">Em 2 dias úteis você recebe todas as fotos para selecionar. Após a seleção, as fotos editadas são entregues em até 15 dias úteis.</p>
          </div>

          <div className="policy-card reveal">
            <div className="policy-icon">🐾</div>
            <div className="policy-title">Pets</div>
            <p className="policy-text">Aceitamos pets de pequeno porte até 5kg. O animal deve permanecer na casinha de transporte durante todo o ensaio.</p>
          </div>

          <div className="policy-card reveal">
            <div className="policy-icon">✨</div>
            <div className="policy-title">Edição</div>
            <p className="policy-text">Edição inclusa para bebê. Correções em acompanhantes são cobradas à parte (R$10 por foto).</p>
          </div>
        </div>
      </section>

      <Footer />
    </PageWrapper>
  );
}

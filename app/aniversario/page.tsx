"use client";

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageWrapper from "@/components/PageWrapper";

export default function AniversarioPage() {
  return (
    <PageWrapper>
      <Nav />

      {/* HERO */}
      <div className="page-hero">
        <h1 className="hero-title">Ensaio<br /><em>Aniversário</em></h1>
        <p className="hero-subtitle">Celebre sua data especial com fotos inesquecíveis</p>
        <div className="hero-divider"></div>
      </div>

      {/* GALERIA */}
      <section className="gallery-section">
        <div className="gallery-scroll">
          <div className="gallery-item">
            <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Proposta%20-%202026-JBrlKM8yv6CKFxqyPqRVIwnWmvU7h2-QXmyZZMBQJXKSKNfcjGbsLF3yEBLQb.png" alt="Ensaio Aniversário" />
          </div>
        </div>
      </section>

      {/* ANIVERSARIO PACKAGES */}
      <section className="packages-section">
        <div className="packages-header reveal">
          <div>
            <div className="section-label">Pacotes de Ensaio</div>
            <h2 className="section-title">Aniversário</h2>
          </div>
          <p className="packages-desc">
            Eternize a chegada de mais um ano com muita elegância, balões e vela faísca.
          </p>
        </div>

        <div className="packages-grid">
          {/* DOCE MEMÓRIA */}
          <div className="package-card reveal">
            <div className="pkg-tag">Pacote 01</div>
            <div className="pkg-name">Doce Memória</div>
            <div className="pkg-line"></div>
            <ul className="pkg-features">
              <li className="pkg-feature">15 Fotos digitais editadas</li>
              <li className="pkg-feature">1 Cenário</li>
              <li className="pkg-feature">1 Figurino (por conta do cliente)</li>
              <li className="pkg-feature">Make profissional</li>
              <li className="pkg-feature">Babyliss</li>
              <li className="pkg-feature">Balões de número</li>
              <li className="pkg-feature">Vela faísca</li>
            </ul>
            <div className="pkg-price-main">R$550</div>
            <div className="pkg-installment">em até 3× sem juros</div>
            <div className="pkg-signal">R$100 de sinal para reservar</div>
            <a 
              href="https://api.whatsapp.com/send?phone=5511986991295&text=Ol%C3%A1!%20Gostaria%20de%20agendar%20o%20pacote%20Doce%20Mem%C3%B3ria%20(Anivers%C3%A1rio)." 
              target="_blank" 
              className="pkg-cta-btn"
            >
              Quero este pacote
            </a>
          </div>

          {/* MEMÓRIAS QUE BRILHAM */}
          <div className="package-card reveal">
            <div className="pkg-tag">Pacote 02</div>
            <div className="pkg-name">Memórias que Brilham</div>
            <div className="pkg-line"></div>
            <ul className="pkg-features">
              <li className="pkg-feature">20 Fotos digitais editadas</li>
              <li className="pkg-feature">2 Cenários + 2 Figurinos</li>
              <li className="pkg-feature">(Figurinos por conta do cliente)</li>
              <li className="pkg-feature">Make profissional + Babyliss</li>
              <li className="pkg-feature">Balões de número</li>
              <li className="pkg-feature">Vela faísca</li>
              <li className="pkg-feature">1 Conjunto balões de hélio</li>
            </ul>
            <div className="pkg-price-main">R$850</div>
            <div className="pkg-installment">em até 5× sem juros</div>
            <div className="pkg-signal">R$150 de sinal para reservar</div>
            <a 
              href="https://api.whatsapp.com/send?phone=5511986991295&text=Ol%C3%A1!%20Gostaria%20de%20agendar%20o%20pacote%20Mem%C3%B3rias%20que%20Brilham%20(Anivers%C3%A1rio)." 
              target="_blank" 
              className="pkg-cta-btn"
            >
              Quero este pacote
            </a>
          </div>

          {/* PURA FELICIDADE */}
          <div className="package-card reveal">
            <div className="pkg-highlight">Mais completo</div>
            <div className="pkg-tag">Pacote 03</div>
            <div className="pkg-name">Pura Felicidade</div>
            <div className="pkg-line"></div>
            <ul className="pkg-features">
              <li className="pkg-feature">30 Fotos digitais editadas</li>
              <li className="pkg-feature">2 Cenários + 2 Figurinos</li>
              <li className="pkg-feature">(Figurinos por conta do cliente)</li>
              <li className="pkg-feature">Make profissional + Babyliss</li>
              <li className="pkg-feature">Balões de número</li>
              <li className="pkg-feature">Vela faísca</li>
              <li className="pkg-feature">2 Conjuntos luxuosos de balões</li>
            </ul>
            <div className="pkg-price-main">R$1.460</div>
            <div className="pkg-installment">em até 7× sem juros</div>
            <div className="pkg-signal">R$250 de sinal para reservar</div>
            <a 
              href="https://api.whatsapp.com/send?phone=5511986991295&text=Ol%C3%A1!%20Gostaria%20de%20agendar%20o%20pacote%20Pura%20Felicidade%20(Anivers%C3%A1rio)." 
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
            <span className="extra-name">Foto extra</span>
            <span className="extra-price">+R$20</span>
          </div>
          <div className="extra-item reveal">
            <span className="extra-name">Acompanhante extra</span>
            <span className="extra-price">+R$50</span>
          </div>
        </div>
      </section>

      {/* POLÍTICAS */}
      <section className="policies-section">
        <div className="reveal">
          <div className="section-label" style={{ color: "var(--gold)" }}>Informações importantes</div>
          <h2 className="section-title" style={{ color: "var(--warm-white)" }}>Políticas</h2>
        </div>

        <div className="policies-grid">
          <div className="policy-card reveal">
            <div className="policy-icon">⏱</div>
            <div className="policy-title">Atrasos</div>
            <p className="policy-text">Tolerância de 20 minutos. Após esse prazo, o ensaio será cancelado e nova taxa de agendamento será necessária.</p>
          </div>

          <div className="policy-card reveal">
            <div className="policy-icon">📅</div>
            <div className="policy-title">Reagendamento</div>
            <p className="policy-text">Deve ser feito com no mínimo 5 dias de antecedência. Do contrário, nova taxa é cobrada e o valor anterior é perdido.</p>
          </div>

          <div className="policy-card reveal">
            <div className="policy-icon">🖼</div>
            <div className="policy-title">Entrega</div>
            <p className="policy-text">Em 2 dias úteis você recebe as fotos para seleção. Após selecionadas, entrega em 10 dias úteis.</p>
          </div>
        </div>
      </section>

      <Footer />
    </PageWrapper>
  );
}

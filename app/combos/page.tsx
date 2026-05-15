"use client";

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageWrapper from "@/components/PageWrapper";

export default function CombosPage() {
  return (
    <PageWrapper>
      <Nav />

      {/* HERO */}
      <div className="page-hero">
        <div className="hero-badge">
          <span>Promoção</span>
          <strong>Mês das Mães</strong>
        </div>
        <h1 className="hero-title">Combos<br /><em>Especiais</em></h1>
        <p className="hero-subtitle">Gestante + Newborn — A experiência completa</p>
        <div className="hero-divider"></div>
        <div style={{ marginTop: "32px", animation: "fadeIn 1s ease 1.2s both" }}>
          <img src="/images/Eternize.svg" alt="Eternize" style={{ height: "120px", width: "auto" }} />
        </div>
      </div>

      {/* COMBO SECTION */}
      <section className="combo-section">
        <div className="section-tag-row reveal">
          <div className="tag">Gestante + Newborn</div>
          <div className="line"></div>
        </div>

        <div className="reveal" style={{ marginBottom: "12px" }}>
          <div className="section-label" style={{ color: "var(--gold)" }}>A experiência completa</div>
        </div>
        <h2 className="section-title reveal" style={{ color: "var(--warm-white)" }}>Combos<br /><em style={{ fontStyle: "italic", color: "var(--gold)" }}>especiais</em></h2>

        <div className="combo-grid">
          {/* COMBO ETERNIZE */}
          <div className="combo-card reveal">
            <div className="combo-name">Eternize</div>
            <div className="combo-sub">Combo completo</div>

            <div className="combo-cols">
              <div>
                <div className="combo-col-title">Gestante</div>
                <div className="combo-feat">25 fotos editadas</div>
                <div className="combo-feat">3 cenários e figurinos</div>
                <div className="combo-feat">2 acompanhantes</div>
                <div className="combo-feat">Maquiagem e cabelo</div>
                <div className="combo-feat">Poses direcionadas</div>
                <div className="combo-feat">Edição refinada</div>
              </div>
              <div>
                <div className="combo-col-title">Newborn</div>
                <div className="combo-feat">15 fotos editadas</div>
                <div className="combo-feat">2 cenários bebê</div>
                <div className="combo-feat">2 figurinos bebê</div>
                <div className="combo-feat">1 cenário com pais</div>
                <div className="combo-feat">Pais e irmãos inclusos</div>
                <div className="combo-feat">Edição refinada</div>
              </div>
            </div>

            <div className="combo-price-wrap">
              <div className="combo-price-old">R$1.440</div>
              <div className="combo-price">R$1.290</div>
              <div className="combo-installment">em até 12× sem juros</div>
              <div className="combo-signal">R$100 de sinal para reservar</div>
              <a 
                href="https://api.whatsapp.com/send?phone=5511986991295&text=Ol%C3%A1!%20Gostaria%20de%20agendar%20o%20Combo%20Eternize%20(Gestante%20%2B%20Newborn)." 
                target="_blank" 
                className="combo-cta-btn"
              >
                Quero este combo
              </a>
            </div>
          </div>

          {/* COMBO LUXO */}
          <div className="combo-card featured reveal">
            <div className="combo-badge">Luxo</div>
            <div className="combo-name">Eternize Luxo</div>
            <div className="combo-sub">Experiência premium</div>

            <div className="combo-cols">
              <div>
                <div className="combo-col-title">Gestante</div>
                <div className="combo-feat">30 fotos editadas</div>
                <div className="combo-feat">+Todos os clicks sem edição</div>
                <div className="combo-feat">3 cenários e figurinos</div>
                <div className="combo-feat">Produção exclusiva inclusa</div>
                <div className="combo-feat">Maquiagem e cabelo</div>
                <div className="combo-feat">Edição refinada</div>
              </div>
              <div>
                <div className="combo-col-title">Newborn</div>
                <div className="combo-feat">20 fotos editadas</div>
                <div className="combo-feat">+Todos os clicks sem edição</div>
                <div className="combo-feat">2 cenários bebê</div>
                <div className="combo-feat">Maquiagem e cabelo</div>
                <div className="combo-feat">Pais e irmãos inclusos</div>
                <div className="combo-feat">Álbum luxo personalizado</div>
              </div>
            </div>

            <div className="combo-price-wrap">
              <div className="combo-price-old">R$2.690</div>
              <div className="combo-price">R$2.280</div>
              <div className="combo-installment">em até 12× sem juros</div>
              <div className="combo-signal">R$100 de sinal para reservar</div>
              <a 
                href="https://api.whatsapp.com/send?phone=5511986991295&text=Ol%C3%A1!%20Gostaria%20de%20agendar%20o%20Combo%20Eternize%20Luxo%20(Gestante%20%2B%20Newborn)." 
                target="_blank" 
                className="combo-cta-btn"
              >
                Quero este combo
              </a>
            </div>
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
            </div>
          </div>

          <div className="products-col reveal">
            <div className="section-label" style={{ marginTop: "48px", marginBottom: "0" }}>Produções exclusivas</div>
            <div className="extras-list">
              <div className="extra-item">
                <span className="extra-name">Brilhos</span>
                <span className="extra-price">Consultar</span>
              </div>
              <div className="extra-item">
                <span className="extra-name">Pérolas</span>
                <span className="extra-price">Consultar</span>
              </div>
              <div className="extra-item">
                <span className="extra-name">Ensaio Molhado</span>
                <span className="extra-price">Consultar</span>
              </div>
              <div className="extra-item">
                <span className="extra-name">Cenário da Lua</span>
                <span className="extra-price">Consultar</span>
              </div>
            </div>
          </div>
        </div>

        <div className="extras-products reveal">
          <div className="section-label" style={{ marginTop: "48px", marginBottom: "24px", textAlign: "center" }}>Produtos físicos</div>
          <div className="products-grid">
            <div className="product-item">
              <div className="product-name">Álbum Luxo Personalizado<br /><small>20×60 aberto · 20 páginas</small></div>
              <div className="product-price">R$1.190</div>
            </div>
            <div className="product-item">
              <div className="product-name">Fotos Reveladas<br /><small>Tamanho 15×21 · 10 fotos</small></div>
              <div className="product-price">R$80</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </PageWrapper>
  );
}

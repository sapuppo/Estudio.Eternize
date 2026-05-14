"use client";

import { useEffect, useState } from "react";
import "./globals.css";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("visible");
          }, 80);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

    document.querySelectorAll(".packages-grid .package-card, .policies-grid .policy-card").forEach((el, i) => {
      (el as HTMLElement).style.transitionDelay = `${i * 80}ms`;
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <nav className={scrolled ? "nav-scrolled" : ""}>
        <img
          src="/images/Eternize.svg"
          alt="Eternize"
          className="nav-logo-img"
          style={{ height: scrolled ? "36px" : "56px" }}
        />
        <div className="nav-links">
          <a href="#gestante">Gestante</a>
          <a href="#combos">Combos</a>
          <a href="#adicionais">Adicionais</a>
          <a href="#politicas">Políticas</a>
        </div>
      </nav>

      {/* HERO */}
      <div className="hero">
        <div className="hero-badge">
          <span>Promoção</span>
          <strong>Mês das Mães</strong>
        </div>
        <div className="hero-eyebrow">Eternize Estúdio Fotográfico</div>
        <h1 className="hero-title">Registre<br /><em>cada</em><br />momento</h1>
        <p className="hero-subtitle">Gestante &amp; Newborn — 2026</p>
        <div className="hero-divider"></div>
      </div>

      {/* GESTANTE PACKAGES */}
      <section className="packages-section" id="gestante">
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
            <div className="combo-signal" style={{ marginTop: "10px", paddingTop: "10px", borderTop: "1px solid var(--border)" }}>R$100 de sinal para reservar a data</div>
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
            <div className="combo-signal" style={{ marginTop: "10px", paddingTop: "10px", borderTop: "1px solid var(--border)" }}>R$100 de sinal para reservar a data</div>
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
            <div className="combo-signal" style={{ marginTop: "10px", paddingTop: "10px", borderTop: "1px solid var(--border)" }}>R$100 de sinal para reservar a data</div>
          </div>
        </div>
      </section>

      {/* COMBO SECTION */}
      <section className="combo-section" id="combos">
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
              <div className="combo-signal">R$100 de sinal para reservar a data</div>
            </div>
          </div>

          {/* COMBO LUXO */}
          <div className="combo-card featured reveal">
            <div className="combo-badge">Luxo</div>
            <div className="combo-name">Eternize<br />Luxo</div>
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
              <div className="combo-signal">R$100 de sinal para reservar a data</div>
            </div>
          </div>
        </div>
      </section>

      {/* ADICIONAIS */}
      <section className="extras-section" id="adicionais">
        <div className="reveal">
          <div className="section-label">Personalize</div>
          <h2 className="section-title">Adicionais<br />&amp; Produtos</h2>
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
                <span className="extra-name">Foto extra — Gestante</span>
                <span className="extra-price">+R$20</span>
              </div>
              <div className="extra-item reveal">
                <span className="extra-name">Foto extra — Newborn</span>
                <span className="extra-price">+R$25</span>
              </div>
              <div className="extra-item reveal">
                <span className="extra-name">Newborn de gêmeos</span>
                <span className="extra-price">+R$250</span>
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

      {/* EDIÇÃO */}
      <section className="editing-section">
        <div className="editing-content">
          <div className="editing-text reveal">
            <div className="section-label">Tecnologia &amp; Arte</div>
            <h2 className="section-title" style={{ marginBottom: "32px" }}>O poder<br />da edição</h2>
            <p>Com manipulação corporal e limpeza de pele, transformamos suas fotos em verdadeiras obras de arte, ressaltando sua beleza natural de forma sutil e autêntica.</p>
            <p>Cada edição é personalizada e realizada somente quando solicitada — porque o mais importante é que você se reconheça e se sinta linda.</p>

            <ul className="editing-list">
              <li>Gestante — remoção de estrias, cicatrizes e marcas de piercing</li>
              <li>Clareamento de axilas e redução de gordurinhas localizadas</li>
              <li>Bebê — remoção de bolinhas, arranhões e descamações (somente se solicitado)</li>
              <li>Correções de iluminação e tratamento de cenário</li>
            </ul>
          </div>

          <div className="editing-visual reveal">
            <div className="edit-box photo-box">
              <img src="/images/antes.jpg" alt="Antes" />
              <span className="photo-label">Antes</span>
            </div>
            <div className="edit-box photo-box">
              <img src="/images/depois.jpg" alt="Depois" />
              <span className="photo-label gold">Depois</span>
            </div>
            <div className="edit-box photo-box">
              <img src="/images/autentico.jpg" alt="Autêntico" />
              <span className="photo-label">Autêntico</span>
            </div>
            <div className="edit-box photo-box">
              <img src="/images/natural.jpg" alt="Natural" />
              <span className="photo-label gold">Natural</span>
            </div>
          </div>
        </div>
      </section>

      {/* POLÍTICAS */}
      <section className="policies-section" id="politicas">
        <div className="reveal">
          <div className="section-label" style={{ color: "var(--gold)" }}>Informações importantes</div>
          <h2 className="section-title" style={{ color: "var(--warm-white)" }}>Como funciona</h2>
        </div>

        <div className="policies-grid">
          <div className="policy-card reveal">
            <div className="policy-icon">⏱</div>
            <div className="policy-title">Pontualidade</div>
            <p className="policy-text">Tolerância de 20 minutos para atrasos. Após esse prazo, o ensaio será cancelado e uma nova taxa de agendamento será necessária para remarcação.</p>
          </div>

          <div className="policy-card reveal">
            <div className="policy-icon">📅</div>
            <div className="policy-title">Reagendamento</div>
            <p className="policy-text">Reagendamentos devem ser feitos com mínimo 5 dias de antecedência. Do contrário, nova taxa é cobrada e o valor anterior é perdido.</p>
          </div>

          <div className="policy-card reveal">
            <div className="policy-icon">🖼</div>
            <div className="policy-title">Entrega das Fotos</div>
            <p className="policy-text">Em 2 dias úteis você recebe todas as fotos sem edição para selecionar. Após a seleção, as fotos editadas são entregues em até 15 dias úteis.</p>
          </div>

          <div className="policy-card reveal">
            <div className="policy-icon">👶</div>
            <div className="policy-title">Newborn</div>
            <p className="policy-text">Por segurança do recém-nascido, o ensaio é realizado exclusivamente em dias de semana, evitando contato com outros clientes.</p>
          </div>

          <div className="policy-card reveal">
            <div className="policy-icon">🐾</div>
            <div className="policy-title">Pets</div>
            <p className="policy-text">Aceitamos pets de pequeno porte até 5kg. O animal deve permanecer na casinha de transporte durante todo o ensaio.</p>
          </div>

          <div className="policy-card reveal">
            <div className="policy-icon">✨</div>
            <div className="policy-title">Sinal de Reserva</div>
            <p className="policy-text">R$100 de sinal para garantir sua data. O restante é pago no dia do ensaio. Parcelamento em até 12× sem juros disponível.</p>
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="footer-cta">
        <h2 className="cta-title reveal">Venha viver<br />essa experiência</h2>
        <p className="cta-sub reveal">Agende seu ensaio · Mês das Mães 2026</p>
        <a href="#" className="cta-btn reveal">Reservar minha data</a>
        <p className="cta-signal reveal">R$100 de sinal · Restante no dia do ensaio · 12× sem juros</p>
        <img src="/images/Eternize.svg" alt="Eternize" className="reveal" style={{ height: "48px", width: "auto", marginTop: "80px" }} />
      </section>
    </>
  );
}

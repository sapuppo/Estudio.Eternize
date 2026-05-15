"use client";

import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageWrapper from "@/components/PageWrapper";
import PortfolioCarousel from "@/components/PortfolioCarousel";
import ImageCompare from "@/components/ImageCompare";

export default function Home() {
  const ensaios = [
    { name: "Gestante", href: "/gestante", desc: "Eternize cada momento da sua gestação" },
    { name: "Newborn", href: "/newborn", desc: "Os primeiros dias de vida eternizados" },
    { name: "Combos", href: "/combos", desc: "Gestante + Newborn — A experiência completa" },
    { name: "Smash the Cake", href: "/smash", desc: "O primeiro aniversário cheio de doçura" },
    { name: "Revelação", href: "/revelacao", desc: "Descubra o sexo do bebê" },
    { name: "Aniversário", href: "/aniversario", desc: "Celebre sua data especial" },
    { name: "Casal", href: "/casal", desc: "Eternize o amor de vocês" },
    { name: "Família", href: "/familia", desc: "Momentos em família eternizados" },
    { name: "Profissional", href: "/profissional", desc: "Posicionamento de imagem" },
  ];



  return (
    <PageWrapper>
      <Nav />

      {/* HERO */}
      <div className="hero">
        <div className="hero-badge">
          <span>Promoção</span>
          <strong>Mês das Mães</strong>
        </div>
        <h1 className="hero-title">Registre<br /><em>cada</em><br /><span style={{ lineHeight: "0.5", display: "inline-block" }}>momento</span></h1>
        <div className="hero-divider"></div>
        <div style={{ marginTop: "32px", animation: "fadeIn 1s ease 1.8s both" }}>
          <img src="/images/Eternize.svg" alt="Eternize" style={{ height: "256px", width: "auto" }} />
        </div>
      </div>

      {/* PORTFOLIO CAROUSEL */}
      <PortfolioCarousel />

      {/* ENSAIOS GRID */}
      <section className="packages-section">
        <div className="packages-header reveal">
          <div>
            <div className="section-label">Nossos Serviços</div>
            <h2 className="section-title">Ensaios</h2>
          </div>
          <p style={{ maxWidth: "360px", fontSize: "13px", color: "var(--muted)", lineHeight: "1.8" }}>
            Cada momento merece ser eternizado. Escolha o ensaio ideal para você e sua família.
          </p>
        </div>

        <div className="ensaios-grid">
          {ensaios.map((ensaio) => (
            <Link key={ensaio.href} href={ensaio.href} className="ensaio-card reveal">
              <div className="ensaio-name">{ensaio.name}</div>
              <div className="ensaio-desc">{ensaio.desc}</div>
              <div className="ensaio-arrow">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
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
            <ImageCompare 
              beforeImage="/images/antes.jpg"
              afterImage="/images/depois.jpg"
              beforeLabel="Antes"
              afterLabel="Depois"
            />
            <ImageCompare 
              beforeImage="/images/autentico.jpg"
              afterImage="/images/natural.jpg"
              beforeLabel="Antes"
              afterLabel="Depois"
            />
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

      <Footer />
    </PageWrapper>
  );
}

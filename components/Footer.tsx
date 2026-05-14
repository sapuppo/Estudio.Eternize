"use client";

export default function Footer() {
  return (
    <section className="footer-cta">
      <h2 className="cta-title reveal">Venha viver<br />essa experiência</h2>
      <p className="cta-sub reveal">Agende seu ensaio · Mês das Mães 2026</p>
      <a href="https://api.whatsapp.com/send?phone=5511986991295" target="_blank" className="cta-btn reveal">Reservar minha data</a>
      <p className="cta-signal reveal">R$100 de sinal · Restante no dia do ensaio · 12× sem juros</p>
      <div className="reveal" style={{ marginTop: "40px" }}>
        <img src="/images/Eternize.svg" alt="Eternize" style={{ height: "192px", width: "auto" }} />
      </div>
      <div className="footer-logo reveal" style={{ marginTop: "16px" }}>Eternize · Estúdio Fotográfico</div>
      
      <div className="footer-info reveal" style={{ marginTop: "32px", display: "flex", flexDirection: "column", alignItems: "center", gap: "16px" }}>
        <a 
          href="https://instagram.com.br/estudio.eternize" 
          target="_blank" 
          className="footer-link"
          style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--muted)", textDecoration: "none", transition: "color 0.3s" }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
          <span style={{ fontSize: "12px", letterSpacing: "0.05em" }}>@estudio.eternize</span>
        </a>
        
        <a 
          href="https://maps.google.com/?q=Estudio+Eternize+São+Bernardo+do+Campo" 
          target="_blank" 
          className="footer-link"
          style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--muted)", textDecoration: "none", transition: "color 0.3s", textAlign: "center" }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          <span style={{ fontSize: "12px", letterSpacing: "0.05em" }}>Estudio Eternize</span>
        </a>
      </div>
    </section>
  );
}

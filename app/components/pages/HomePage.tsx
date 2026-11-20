import Link from "next/link";
import Icon from "../Icon";

export default function HomePage() {
  return (
    <>
      <section aria-labelledby="hero-title" className="hero section-wrap">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-dot" /> UN ABRAZO HECHO SONIDO</p>
          <h1 id="hero-title">El bienestar de tu bebé comienza con un <span>momento de calma.</span></h1>
          <p className="hero-description">Una almohada sonora y una plataforma digital pensadas para acompañar momentos de tranquilidad y conexión en familia.</p>
          <div className="hero-actions">
            <Link className="button button-dark" href="/producto">Conocer el producto <Icon name="arrow" /></Link>
            <Link className="button button-soft" href="/plataforma"><Icon name="sound" /> Explorar plataforma</Link>
          </div>
        </div>
        <div className="hero-art" role="img" aria-label="Una mamá acuna a su recién nacido junto a una almohada suave BabyCalm">
          <div className="hero-sun" />
          <span className="hero-star hero-star-one" aria-hidden="true">✳</span>
          <span className="hero-star hero-star-two" aria-hidden="true">✦</span>
          <span className="hero-heart" aria-hidden="true">♡</span>
          <div className="photo-caption"><span className="caption-dot" /><span>Calma en cada pequeño momento</span></div>
          <div className="hero-product-chip"><span className="chip-icon"><Icon name="sound" /></span><span><strong>BabyCalm</strong><small>El sonido del amor de mamá</small></span></div>
        </div>
      </section>

      <section aria-labelledby="home-benefits-title" className="benefits-section">
        <div className="section-wrap">
          <div className="section-heading centered-heading">
            <p className="eyebrow">BABYCALM: EL SONIDO DEL AMOR DE MAMÁ</p>
            <h2 id="home-benefits-title">Pequeños momentos, <span>hechos para compartir.</span></h2>
          </div>
          <div className="benefit-grid">
            <article className="benefit-card">
              <span className="benefit-icon benefit-peach"><Icon name="heart" /></span>
              <h3>Conexión afectiva</h3>
              <p>Una invitación a compartir momentos de cercanía con tu bebé.</p>
            </article>
            <article className="benefit-card">
              <span className="benefit-icon benefit-yellow"><Icon name="sound" /></span>
              <h3>Sonidos familiares</h3>
              <p>Experiencias auditivas inspiradas en sonidos prenatales y música suave.</p>
            </article>
            <article className="benefit-card">
              <span className="benefit-icon benefit-sage"><Icon name="sparkles" /></span>
              <h3>Una experiencia integral</h3>
              <p>Producto y plataforma digital pensados para acompañar a las familias.</p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}

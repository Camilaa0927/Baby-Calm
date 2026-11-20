import Link from "next/link";
import Icon from "../Icon";
import RouteIntro from "../RouteIntro";

export default function ProductPage() {
  return (
    <>
      <RouteIntro
        eyebrow="CONOCE BABYCALM"
        title="Una almohada sonora para compartir momentos de calma."
        description="BabyCalm combina una almohada suave con un dispositivo de audio integrado y una propuesta digital para la familia."
      />
      <section aria-label="Acerca del producto BabyCalm" className="intro-section section-wrap">
        <div className="intro-visual">
          <div className="intro-photo" role="img" aria-label="Detalle de una manta suave y un espacio cálido para el bebé">
            <span className="intro-photo-label"><Icon name="heart" /> Con amor, para sus primeros días</span>
          </div>
          <div className="soft-sticker"><Icon name="sparkles" /><span>Suave<br />como un abrazo</span></div>
          <span className="decor-heart decor-heart-one" aria-hidden="true">♡</span>
          <span className="decor-heart decor-heart-two" aria-hidden="true">✳</span>
        </div>
        <div className="intro-copy">
          <p className="eyebrow">DISEÑO Y TECNOLOGÍA</p>
          <h2>Una experiencia hecha <span>para acompañar.</span></h2>
          <p>El módulo integrado reproduce sonidos seleccionados desde la biblioteca digital BabyCalm. Los materiales y cuidados específicos se detallarán en la ficha final del producto.</p>
          <p className="intro-note"><Icon name="heart" /> Úsala solo en momentos supervisados; no es una superficie para dormir.</p>
          <Link className="button button-dark" href="/tienda">Comprar BabyCalm <Icon name="arrow" /></Link>
        </div>
      </section>
      <section aria-labelledby="product-benefits-title" className="benefits-section">
        <div className="section-wrap">
          <div className="section-heading centered-heading">
            <p className="eyebrow">LO ESENCIAL</p>
            <h2 id="product-benefits-title">Pensada para estar <span>cerca.</span></h2>
          </div>
          <div className="benefit-grid">
            <article className="benefit-card">
              <span className="benefit-icon benefit-peach"><Icon name="heart" /></span>
              <h3>Materiales</h3>
              <p>Tejidos suaves seleccionados. Composición textil y cuidados por confirmar antes de la venta.</p>
            </article>
            <article className="benefit-card">
              <span className="benefit-icon benefit-yellow"><Icon name="sparkles" /></span>
              <h3>Componente tecnológico</h3>
              <p>Módulo de audio integrado. Sus controles y especificaciones se informarán en el manual final.</p>
            </article>
            <article className="benefit-card">
              <span className="benefit-icon benefit-sage"><Icon name="shield" /></span>
              <h3>Cómo funciona</h3>
              <p>El dispositivo reproduce experiencias auditivas de la biblioteca BabyCalm durante momentos supervisados.</p>
            </article>
          </div>
          <aside className="health-note product-safety-note">
            <span className="health-note-icon"><Icon name="shield" /></span>
            <p><strong>Uso seguro:</strong> para dormir, acuesta al bebé boca arriba sobre una superficie firme, plana y despejada. Mantén almohadas, dispositivos y objetos blandos fuera de la cuna.</p>
          </aside>
        </div>
      </section>
    </>
  );
}

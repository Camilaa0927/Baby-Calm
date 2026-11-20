import Link from "next/link";
import Icon from "../Icon";
import RouteIntro from "../RouteIntro";
import { DEMO_SUBSCRIPTION_PRICE_LABEL } from "../site-config";

const sounds = [
  ["heart", "Latidos del corazón", "Un ritmo suave inspirado en el compás familiar.", "sound-rose"],
  ["sound", "Sonidos prenatales", "Ambientes tranquilos inspirados en la etapa prenatal.", "sound-sage"],
  ["sparkles", "Música relajante", "Melodías suaves para acompañar momentos en familia.", "sound-gold"],
  ["sparkles", "Música clásica", "Selección musical como parte de la biblioteca auditiva.", "sound-rose"],
  ["sound", "Sonidos ambientales", "Sonidos de la naturaleza y ambientes relajantes.", "sound-sage"],
] as const;

export default function PlatformPage() {
  return (
    <>
      <RouteIntro
        eyebrow="PLATAFORMA BABYCALM"
        title="Sonidos y recursos para acompañar cada momento."
        description="Una biblioteca digital para padres y cuidadores, con música, sonidos prenatales y experiencias auditivas organizadas por etapa."
      />
      <section aria-label="Biblioteca de sonidos" className="sounds-section section-wrap platform-sounds">
        <div className="sound-grid">
          {sounds.map(([icon, title, description, tint], index) => (
            <article className={`sound-card ${tint}`} key={title}>
              <div className="sound-card-top">
                <span className="sound-number">0{index + 1}</span>
                <span className="sound-icon"><Icon name={icon} /></span>
              </div>
              <div className="sound-wave" aria-hidden="true">{Array.from({ length: 23 }, (_, bar) => <i key={bar} />)}</div>
              <h2>{title}</h2>
              <p>{description}</p>
              <span className="sound-preview-label"><Icon name="sound" /> Biblioteca BabyCalm</span>
            </article>
          ))}
        </div>
        <p className="sound-disclaimer">Las pistas reales aún no están disponibles; por eso no se muestran controles de reproducción. La música clásica no se presenta como tratamiento ni como promesa de desarrollo.</p>
      </section>
      <section className="plans-section platform-plans">
        <div className="section-wrap">
          <div className="section-heading centered-heading plans-heading">
            <p className="eyebrow">ACCESO A LA BIBLIOTECA</p>
            <h2>Empieza con un mes <span>gratuito.</span></h2>
            <p>Después, elige el acceso que mejor se adapte a tu familia.</p>
          </div>
          <div className="plans-grid">
            <article className="plan-card">
              <p className="plan-label">PARA EXPLORAR</p>
              <h2>Primer mes gratis</h2>
              <p className="plan-price">Acceso inicial a la plataforma</p>
              <ul>
                <li><Icon name="check" /> Algunas experiencias sonoras</li>
                <li><Icon name="check" /> Descubre la biblioteca digital</li>
              </ul>
            </article>
            <article className="plan-card plan-card-featured">
              <p className="plan-label">ACCESO PREMIUM</p>
              <h2>Contenido exclusivo</h2>
              <p className="plan-price">{DEMO_SUBSCRIPTION_PRICE_LABEL}</p>
              <ul>
                <li><Icon name="check" /> Biblioteca completa de sonidos</li>
                <li><Icon name="check" /> Música y experiencias personalizadas</li>
                <li><Icon name="check" /> Rutinas adaptadas por etapas</li>
              </ul>
            </article>
          </div>
          <p className="plans-note">La suscripción y su precio se habilitarán cuando estén definidos.</p>
          <div className="platform-cta">
            <div>
              <h2>La calma también <span>se comparte.</span></h2>
              <p>Conoce la almohada que acompaña esta experiencia.</p>
            </div>
            <Link className="button button-dark" href="/producto">Conocer BabyCalm <Icon name="arrow" /></Link>
          </div>
        </div>
      </section>
    </>
  );
}

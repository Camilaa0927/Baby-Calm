import Link from "next/link";
import Icon from "./Icon";
import { BRAND_EMAIL } from "./site-config";

const footerLinks = [
  { label: "Inicio", href: "/" },
  { label: "Producto", href: "/producto" },
  { label: "Plataforma", href: "/plataforma" },
  { label: "Tienda", href: "/tienda" },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main section-wrap">
        <div className="footer-brand">
          <Link className="brand footer-logo" href="/">
            <span className="brand-icon"><Icon name="sparkles" /></span>
            <span>Baby<span>Calm</span><i>.</i></span>
          </Link>
          <p>BabyCalm: el sonido del amor de mamá. <span>Un abrazo de calma, en los primeros momentos.</span></p>
          <span className="footer-love"><Icon name="heart" /> Hecho con mucho amor</span>
        </div>
        <div className="footer-links">
          <div>
            <h3>NAVEGACIÓN</h3>
            {footerLinks.map((link) => <Link href={link.href} key={link.href}>{link.label}</Link>)}
          </div>
          <div>
            <h3>¿HABLAMOS?</h3>
            <a href={`mailto:${BRAND_EMAIL}`}>{BRAND_EMAIL}</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom section-wrap">
        <span>© BabyCalm. Una idea hecha con amor.</span>
        <span>Precio y tienda de demostración</span>
      </div>
    </footer>
  );
}

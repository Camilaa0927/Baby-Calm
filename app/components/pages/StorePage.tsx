"use client";

import RouteIntro from "../RouteIntro";
import ProductCard from "../ProductCard";
import { useCart } from "../CartContext";
import Icon from "../Icon";

export default function StorePage() {
  const { addToCart, openCart } = useCart();

  function handleAdd(quantity: number) {
    addToCart(quantity);
    openCart();
  }

  return (
    <>
      <RouteIntro
        eyebrow="TIENDA BABYCALM"
        title="Encuentra tu experiencia BabyCalm."
        description="Conoce el producto principal y añade una unidad al carrito de demostración."
      />
      <section aria-label="Catálogo BabyCalm" className="shop-section store-route-section">
        <div className="section-wrap">
          <ProductCard onAdd={handleAdd} />
          <div className="coming-soon">
            <span className="coming-icon"><Icon name="sparkles" /></span>
            <span><strong>Accesorios BabyCalm</strong><small>Fundas y repuestos estarán disponibles próximamente.</small></span>
            <span className="coming-badge">PRÓXIMAMENTE</span>
          </div>
          <p className="store-note">El precio de demostración se puede actualizar en la configuración del proyecto. Este sitio aún no procesa pagos.</p>
        </div>
      </section>
    </>
  );
}

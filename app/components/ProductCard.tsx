"use client";

import { useState } from "react";
import Icon from "./Icon";
import { DEMO_PRICE, DEMO_PRICE_LABEL } from "./site-config";

interface ProductCardProps {
  onAdd: (quantity: number) => void;
}

export default function ProductCard({ onAdd }: ProductCardProps) {
  const [quantity, setQuantity] = useState(1);

  return (
    <article className="product-card">
      <div className="product-photo" role="img" aria-label="BabyCalm, almohada suave con dispositivo de sonido integrado">
        <span className="product-pill">Un abrazo hecho sonido</span>
        <div className="pillow-product" aria-hidden="true">
          <span className="pillow-embroidery"><Icon name="sparkles" /></span>
          <span className="pillow-brand">BabyCalm</span>
        </div>
        <span className="product-photo-note"><Icon name="heart" /> Diseñado para acompañar</span>
      </div>
      <div className="product-details">
        <div className="product-eyebrow"><span>DESCANSO CON AMOR</span></div>
        <h3>Almohada sonora BabyCalm</h3>
        <p className="product-description">Suavidad y sonidos familiares para acompañar los momentos de calma de tu bebé.</p>
        <div className="price-row">
          <span className="product-price">{new Intl.NumberFormat("es-CO", { style: "currency", currency: "COP", maximumFractionDigits: 0 }).format(DEMO_PRICE)}</span>
          <span className="demo-price">{DEMO_PRICE_LABEL}</span>
        </div>
        <div className="product-actions">
          <div className="quantity-picker" aria-label="Cantidad">
            <button aria-label="Quitar una unidad" disabled={quantity <= 1} onClick={() => setQuantity((value) => Math.max(1, value - 1))} type="button"><Icon name="minus" /></button>
            <span aria-live="polite">{quantity}</span>
            <button aria-label="Agregar una unidad" onClick={() => setQuantity((value) => Math.min(10, value + 1))} type="button"><Icon name="plus" /></button>
          </div>
          <button className="button button-outline add-button" onClick={() => onAdd(quantity)} type="button">
            <Icon name="bag" /> Agregar al carrito
          </button>
        </div>
        <button className="button button-dark product-buy-button" onClick={() => onAdd(quantity)} type="button">Comprar ahora <Icon name="arrow" /></button>
        <p className="shipping-note"><Icon name="shield" /> Compra de demostración. Precio sujeto a actualización.</p>
      </div>
    </article>
  );
}

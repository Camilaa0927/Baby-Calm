"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Icon from "./Icon";
import { useCart } from "./CartContext";
import { DEMO_PRICE } from "./site-config";

export default function CartDrawer() {
  const { quantity, isCartOpen, setQuantity, closeCart } = useCart();
  const drawerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!isCartOpen) return;
    drawerRef.current?.focus();
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") closeCart();
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isCartOpen, closeCart]);

  if (!isCartOpen) return null;

  const formattedPrice = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  });

  return (
    <div className="cart-layer">
      <button aria-label="Cerrar carrito" className="cart-backdrop" onClick={closeCart} type="button" />
      <aside
        aria-labelledby="cart-title"
        aria-modal="true"
        className="cart-drawer"
        ref={drawerRef}
        role="dialog"
        tabIndex={-1}
      >
        <div className="cart-heading">
          <div>
            <p className="eyebrow">UNA PAUSA PARA COMPARTIR</p>
            <h2 id="cart-title">Tu carrito <span>({quantity})</span></h2>
          </div>
          <button aria-label="Cerrar carrito" className="icon-button" onClick={closeCart} type="button"><Icon name="close" /></button>
        </div>
        {quantity === 0 ? (
          <div className="cart-empty">
            <span className="cart-empty-icon"><Icon name="bag" /></span>
            <h3>Tu carrito está descansando</h3>
            <p>Cuando encuentres tu BabyCalm, aquí lo tendrás a mano.</p>
            <Link className="button button-dark" href="/tienda" onClick={closeCart}>Ir a la tienda</Link>
          </div>
        ) : (
          <>
            <div className="cart-line">
              <span className="cart-product-thumb"><span className="mini-pillow" /></span>
              <div className="cart-product-info">
                <strong>Almohada sonora BabyCalm</strong>
                <small>Precio de demostración</small>
                <div className="cart-quantity">
                  <button aria-label="Quitar una unidad del carrito" disabled={quantity <= 1} onClick={() => setQuantity(quantity - 1)} type="button"><Icon name="minus" /></button>
                  <span>{quantity}</span>
                  <button aria-label="Agregar una unidad al carrito" disabled={quantity >= 99} onClick={() => setQuantity(quantity + 1)} type="button"><Icon name="plus" /></button>
                  <button aria-label="Eliminar producto del carrito" className="remove-item" onClick={() => setQuantity(0)} type="button"><Icon name="trash" /><span>Quitar</span></button>
                </div>
              </div>
              <strong className="cart-line-price">{formattedPrice.format(DEMO_PRICE * quantity)}</strong>
            </div>
            <div className="cart-summary">
              <div className="subtotal-row"><span>Subtotal estimado</span><strong>{formattedPrice.format(DEMO_PRICE * quantity)}</strong></div>
              <p>Valor de demostración. Este sitio no procesa pagos ni confirma compras.</p>
              <button className="button button-dark checkout-button" disabled type="button">Pagos próximamente</button>
              <Link className="continue-shopping" href="/tienda" onClick={closeCart}>Seguir en la tienda <Icon name="arrow" /></Link>
            </div>
          </>
        )}
      </aside>
    </div>
  );
}

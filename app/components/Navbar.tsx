"use client";

import { useState } from "react";
import Link from "next/link";
import Icon from "./Icon";
import { useCart } from "./CartContext";

const links = [
  { label: "Inicio", href: "/" },
  { label: "Producto", href: "/producto" },
  { label: "Plataforma", href: "/plataforma" },
  { label: "Tienda", href: "/tienda" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { quantity, openCart } = useCart();

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header">
      <div className="announcement">
        Un abrazo de calma para los primeros días <Icon name="heart" />
      </div>
      <div className="nav-wrap">
        <Link className="brand" href="/" onClick={closeMenu} aria-label="BabyCalm, ir al inicio">
          <span className="brand-icon"><Icon name="sparkles" /></span>
          <span>Baby<span>Calm</span><i>.</i></span>
        </Link>

        <button
          aria-controls="primary-navigation"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          className="icon-button mobile-menu-button"
          onClick={() => setMenuOpen((open) => !open)}
          type="button"
        >
          <Icon name={menuOpen ? "close" : "menu"} />
        </button>

        <nav
          aria-label="Navegación principal"
          className={`primary-navigation${menuOpen ? " is-open" : ""}`}
          id="primary-navigation"
        >
          {links.map((link) => (
            <Link href={link.href} key={link.href} onClick={closeMenu}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="nav-actions">
          <button className="icon-button cart-button" onClick={() => { closeMenu(); openCart(); }} type="button" aria-label={`Abrir carrito, ${quantity} productos`}>
            <Icon name="bag" />
            <span className="cart-count">{quantity}</span>
          </button>
          <Link className="button button-dark nav-buy-button" href="/tienda">Comprar ahora</Link>
        </div>
      </div>
    </header>
  );
}

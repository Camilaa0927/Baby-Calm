"use client";

import type { ReactNode } from "react";
import { CartProvider } from "./CartContext";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CartDrawer from "./CartDrawer";

export default function SiteShell({ children }: { children: ReactNode }) {
  return (
    <CartProvider>
      <div className="storefront">
        <a className="skip-link" href="#contenido">Saltar al contenido</a>
        <Navbar />
        <main id="contenido">{children}</main>
        <Footer />
        <CartDrawer />
      </div>
    </CartProvider>
  );
}

"use client";

import { createContext, useCallback, useContext, useState, useSyncExternalStore, type ReactNode } from "react";

interface CartContextValue {
  quantity: number;
  isCartOpen: boolean;
  addToCart: (amount: number) => void;
  setQuantity: (amount: number) => void;
  openCart: () => void;
  closeCart: () => void;
}

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = "babycalm-cart-quantity";
const subscribers = new Set<() => void>();

function getQuantitySnapshot() {
  const quantity = Number(window.localStorage.getItem(STORAGE_KEY));
  return Number.isInteger(quantity) && quantity >= 0 && quantity <= 99 ? quantity : 0;
}

function subscribeToCart(subscriber: () => void) {
  subscribers.add(subscriber);
  function onStorageChange(event: StorageEvent) {
    if (event.key === STORAGE_KEY || event.key === null) subscriber();
  }
  window.addEventListener("storage", onStorageChange);
  return () => {
    subscribers.delete(subscriber);
    window.removeEventListener("storage", onStorageChange);
  };
}

function updateCart(quantity: number) {
  window.localStorage.setItem(STORAGE_KEY, String(quantity));
  subscribers.forEach((subscriber) => subscriber());
}

export function CartProvider({ children }: { children: ReactNode }) {
  const quantity = useSyncExternalStore(subscribeToCart, getQuantitySnapshot, () => 0);
  const [isCartOpen, setCartOpen] = useState(false);
  const openCart = useCallback(() => {
    setCartOpen(true);
  }, []);
  const closeCart = useCallback(() => {
    setCartOpen(false);
  }, []);

  function setQuantity(amount: number) {
    updateCart(Math.min(99, Math.max(0, Math.floor(amount))));
  }

  function addToCart(amount: number) {
    updateCart(Math.min(99, quantity + Math.max(0, Math.floor(amount))));
  }

  return (
    <CartContext.Provider value={{
      quantity,
      isCartOpen,
      addToCart,
      setQuantity,
      openCart,
      closeCart,
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}

import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
    try {
      const raw = localStorage.getItem("velora_cart");
      return raw ? JSON.parse(raw) : [];
    } catch (error) {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("velora_cart", JSON.stringify(items));
    } catch (error) {
      // ignore storage errors
    }
  }, [items]);

  const addItem = (item) => {
    setItems((prev) => [...prev, item]);
  };

  const value = useMemo(
    () => ({
      items,
      count: items.length,
      addItem,
      clearCart: () => setItems([]),
    }),
    [items]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return ctx;
}

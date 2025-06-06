import { useEffect, useState } from "react";
import { db } from "../data/db";
import type { CartItem } from "../types/index";

export const useCart = () => {
  const initialCart = (): CartItem[] => {
    const localStorageCart = localStorage.getItem("cart");
    return localStorageCart ? JSON.parse(localStorageCart) : [];
  };

  const [data] = useState<CartItem[]>(db);
  const [cart, setCart] = useState<CartItem[]>(initialCart);

  const MAX_ITEMS = 5;
  const MIN_ITEMS = 1;

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  function addToCart(item: CartItem) {
    const itemExist = cart.findIndex((guitar) => guitar.id === item.id);

    if (itemExist !== -1) {
      if (
        cart[itemExist].quantity !== undefined &&
        cart[itemExist].quantity >= MAX_ITEMS
      )
        return;
      const updateCart = [...cart];
      updateCart[itemExist].quantity =
        (updateCart[itemExist].quantity || 1) + 1;
      setCart(updateCart);
    } else {
      setCart((prevCart) => [...prevCart, { ...item, quantity: 1 }]);
    }
  }

  function removeFromCart(id: number) {
    setCart((prevCart) => prevCart.filter((guitar) => guitar.id !== id));
  }

  function increaseQuantity(id: number) {
    const updateCart = cart.map((item) => {
      if (item.id === id && (item.quantity ?? 1) < MAX_ITEMS) {
        return {
          ...item,
          quantity: (item.quantity ?? 1) + 1,
        };
      }
      return item;
    });
    setCart(updateCart);
  }

  function decreaseQuantity(id: number) {
    const updateCart = cart.map((item) => {
      if (item.id === id && (item.quantity ?? 1) > MIN_ITEMS) {
        return {
          ...item,
          quantity: (item.quantity ?? 1) - 1,
        };
      }
      return item;
    });
    setCart(updateCart);
  }

  function clearCart() {
    setCart([]);
  }

  const cartTotal = () => cart.reduce( (total, item) => total + (item.price * item.quantity), 0);

  return {
    data,
    cart,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
    cartTotal
  };
};

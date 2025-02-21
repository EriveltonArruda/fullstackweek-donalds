"use client"

import { Product } from "@prisma/client";
import { ReactNode, createContext, useState } from "react";

interface cartProduct extends Pick<Product, 'id' | 'name' | 'price' | 'imageUrl'> {
  quantity: number
}

export interface ICartContext {
  isOpen: boolean;
  products: cartProduct[];
  toggleCart: () => void;
  addProduct: (product: cartProduct) => void;
}

export const CartContext = createContext<ICartContext>({
  isOpen: false,
  products: [],
  toggleCart: () => { },
  addProduct: () => { },
});

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<cartProduct[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleCart = () => {
    setIsOpen(prev => !prev);
  };
  const addProduct = (product: cartProduct) => {
    setProducts(prev => [...prev, product]);
  }
  return (
    <CartContext.Provider
      value={{
        isOpen,
        products,
        toggleCart,
        addProduct,
      }}>
      {children}
    </CartContext.Provider>
  )
}
import { produce } from "immer";
import { createContext, ReactNode, useEffect, useState } from "react";
import { Coffee } from "../pages/Home/components/CoffeeCard";

export interface CartItem extends Coffee {
  quantity: number;
}

interface CartContextProps {
  cartQuantity: number;
  cartItemsTotal: number;
  cartItems: CartItem[];
  clearCart: () => void
  addCoffeeToCart: (coffee: CartItem) => void;
  chageCartItemQuantity: (cartItemId: number, type: 'increase' | 'decrease') => void
  removeCartItems: (cartItemId: number) => void
}

interface CartContextProviderProps {
  children: ReactNode
}

const COFFEE_ITEMS_STORAGE_KEY = "coffee-delivery:cart-items-1.0.0"

export const CartContext = createContext({} as CartContextProps)


export function CartContextProvider({ children }: CartContextProviderProps) {

  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const storageCartItems = localStorage.getItem(COFFEE_ITEMS_STORAGE_KEY)
    if (storageCartItems) {
      return JSON.parse(storageCartItems)
    }
    return []
  })

  const cartQuantity = cartItems.length

  const cartItemsTotal = cartItems.reduce((total, cartItem) => {
    return total + cartItem.price * cartItem.quantity
  }, 0)

  function addCoffeeToCart(coffee: CartItem) {
    const coffeeAlreadyExistsInCart = cartItems.findIndex(cartItem => cartItem.id === coffee.id)

    const newCart = produce(cartItems, (draft) => {
      if (coffeeAlreadyExistsInCart < 0) {
        draft.push(coffee)
      } else {
        draft[coffeeAlreadyExistsInCart].quantity += coffee.quantity
      }
    })
    setCartItems(newCart)
  }

  function chageCartItemQuantity(cartItemId: number, type: 'increase' | 'decrease') {
    const newCart = produce(cartItems, (draft) => {
      const coffeeExistsInCart = cartItems.findIndex(cartItem => cartItem.id === cartItemId);
      if (coffeeExistsInCart >= 0) {
        const item = draft[coffeeExistsInCart];
        draft[coffeeExistsInCart].quantity = type === 'increase' ? item.quantity + 1 : item.quantity - 1
      }
    })
    setCartItems(newCart)
  }

  function removeCartItems(cartItemId: number) {
    const newCart = produce(cartItems, (draft) => {
      const coffeeExistsInCart = cartItems.findIndex(cartItem => cartItem.id === cartItemId);

      if (coffeeExistsInCart >= 0) {
        draft.splice(coffeeExistsInCart, 1)
      }
    })
    setCartItems(newCart)
  }

  function clearCart() {
    setCartItems([])
  }

  useEffect(() => {
    localStorage.setItem(COFFEE_ITEMS_STORAGE_KEY, JSON.stringify(cartItems))
  }, [cartItems])

  return (
    <CartContext.Provider value={{
      cartQuantity,
      cartItemsTotal,
      cartItems,
      addCoffeeToCart,
      chageCartItemQuantity,
      removeCartItems,
      clearCart
    }}>
      {children}
    </CartContext.Provider>
  )
}

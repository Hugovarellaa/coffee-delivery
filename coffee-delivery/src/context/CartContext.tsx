import { produce } from "immer";
import { createContext, ReactNode, useState } from "react";
import { Coffee } from "../pages/Home/components/CoffeeCard";

export interface CartItem extends Coffee {
  quantity: number;
}

interface CartContextProps {
  cartQuantity: number;
  cartItems: CartItem[];
  addCoffeeToCart: (coffee: CartItem) => void;
  chageCartItemQuantity: (cartItemId: number, type: 'increase' | 'decrease') => void
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextProps)


export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const cartQuantity = cartItems.length

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

  return (
    <CartContext.Provider value={{
      cartQuantity,
      cartItems,
      addCoffeeToCart,
      chageCartItemQuantity
    }}>
      {children}
    </CartContext.Provider>
  )
}

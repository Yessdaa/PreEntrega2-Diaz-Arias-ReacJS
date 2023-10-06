import React from 'react'
import { createContext } from 'react'
import { useState, useContext } from 'react'



const CartContext = createContext()

export function useCart() {
  return useContext(CartContext)
}

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([])


  const addItem = (item, quantity) => {
   
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
     
      existingItem.quantity += quantity;
      setCartItems([...cartItems]);
    } else {
    
      const newItem = { ...item, quantity };
      setCartItems([...cartItems, newItem]);
    }
  }

  const removeItem = (itemID) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemID);
    setCartItems(updatedCart);
  }

  const clear = () => {
    setCartItems([]);
  }


  const isInCart = (id) => {
    return cartItems.some((item) => item.id === id);
  }

  return (
    <CartContext.Provider value={{ cartItems, addItem, removeItem, clear, isInCart }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContext

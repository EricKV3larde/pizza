import React, { createContext, useState, useEffect } from "react";
import { PIZZAS } from "../pizzas";

export const ShopContext = createContext(null);

const getDefaultItems = () => {
  let cart = {};
  for (let i = 1; i < PIZZAS.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultItems());
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
  }, [totalPrice]);

  const addItems = (itemId, precio) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] + 1,
    }));
    setTotalPrice((prevPrice) => {
      const newTotal = prevPrice + precio;
      // console.log("Nuevo precio actual:", precio);
      // console.log("Nuevo precio total shopprovider:", newTotal);
      // console.log("TotalPrice-> ", totalPrice);
      return newTotal;
    });
  };

  const removeItems = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] - 1,
    }));
  };

  const getTotal = () => {
    let total = 0;
    total += totalPrice;
    // console.log("Total FINAL -> ", totalPrice);
    return total;
  };

  const contextValue = {
    cartItems,
    addItems,
    removeItems,
    getTotal,
  };

  // console.log(cartItems);

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

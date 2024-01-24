import React, {createContext, useState} from "react"
import { PIZZAS } from "../pizzas";

export const ShopContext = createContext(null);


const getDefaultItems = () =>{
    let cart = {}

    for(let i=1 ; i<PIZZAS.length+1; i++) {
        cart[i] = 0
    }
    return cart;

};

// {
//     1:0,
//     2:0,
//     3:0,
//     4:0,
//     5:0,
//     6:0,
//     7:0,
//     8:0,
// }

export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultItems());

    // this new funtion is for add pizzas

    const addItems = (itemId) =>{
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId]+ 1}));
    };

    const removeItems = (itemId) =>{
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId]- 1}));
    };

    const actualizarCarrito = (newAmount, itemId) =>{
        setCartItems((prev) => ({...prev, [itemId]: newAmount}));
    };

    const getTotal = () => {
        let total = 0;
        for (const item in cartItems) {
            if (cartItems[item]>0){
                let itemInfo = PIZZAS.find((pizza) => pizza.id === Number(item));
                total += cartItems[item]* itemInfo.precios.simple;
            }

        };
        return total;
    };

    const contextValue = {cartItems, addItems, removeItems, actualizarCarrito, getTotal};

    console.log(cartItems);
    return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
};
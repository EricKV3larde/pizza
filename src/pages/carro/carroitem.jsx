import React, {useContext} from  "react";
import {ShopContext} from "../../context/shop-context"
import "./carroitem.css";
export const CartItem = (props) => {
    const { id, pizzaName, fotoPizza, precios } = props.data;
    const {addItems, cartItems, removeItems, actualizarCarrito} = useContext(ShopContext);
    return ( 
        <div className="carroItem">
            <img src={fotoPizza} alt=""/>
            <div className="descripcion">
                <p>
                    {" "}
                    <b>{pizzaName}</b>
                </p>

                <p>S/ {precios.simple}</p>
                <div className="contador">
                    <button onClick={() => removeItems(id)}> - </button>
                    <input value={cartItems[id]} onChange={(e)=> actualizarCarrito(Number(e.target.value),id)} />
                    <button onClick={() => addItems(id)}> + </button>
                </div>
            </div>
           
        </div>
    );  
};
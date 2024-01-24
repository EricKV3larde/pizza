import React, { useContext } from "react";
import "./PizzaStyles.css";
import { ShopContext } from "../../context/shop-context";
export const Pizza = (props) => {
    const { id, pizzaName, descripcion, fotoPizza, precios } = props.data;

    const {addItems, cartItems} = useContext(ShopContext);
    const cartItemCantidad = cartItems[id];
    return (
        <div className="Pizza">
            <img src={fotoPizza} alt="" />
            <div className="descripcion">
                <p>
                    <b>{pizzaName}</b>
                </p>
                <p>{descripcion}</p>
                <p>
                    S/ <span>{precios.simple}</span>
                    <br />
                    S/ <span>{precios.extra}</span>
                </p>

                <button className="anadir" onClick={()=> addItems(id)}>
                    
                    Añadir a la Cesta {cartItemCantidad>0 && <>({cartItemCantidad})</>}
                </button>
            </div>
        </div>
    );
};

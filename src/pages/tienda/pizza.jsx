import React, { useState, useContext } from "react";
import "./PizzaStyles.css";
import { ShopContext } from "../../context/shop-context";
export const Pizza = (props) => {
    const { id, pizzaName, descripcion, fotoPizza, precios } = props.data;

    const {addItems, cartItems} = useContext(ShopContext);
    const cartItemCantidad = cartItems[id];

    // botones seleccion de tamano
    const [selectedButton, setSelectedButton] = useState('simple'); // Estado para almacenar qué botón está seleccionado

    const handleButtonClick = (buttonId) => {
        setSelectedButton(buttonId); // Cambiar el estado al ID del botón seleccionado
    };
    return (
        <div className="Pizza">
            <div className="fotopizza-container">
                <img src={fotoPizza} alt="pizza" />
            </div>
            <div className="descripcion">
                <p>
                    <b id="npmbre-pizza">{pizzaName}</b>
                </p>
                <p>{descripcion}</p>
                <div class="tamano-selector">
                    {/* <button className="btn-tamano b1">Simple</button>
                    <button className="btn-tamano b2">Doble Queso</button> */}

                    <button
                        className={`btn-tamano ${selectedButton === 'simple' ? 'selected' : ''}`}
                        onClick={() => handleButtonClick('simple')}
                    >
                        Simple
                    </button>
                    <button
                        className={`btn-tamano ${selectedButton === 'doble' ? 'selected' : ''}`}
                        onClick={() => handleButtonClick('doble')}
                    >
                        Doble Queso
                    </button>
                </div>
                <div className="costo-btn-container">
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
        </div>
    );
};

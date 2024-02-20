import React, { useContext } from 'react'
import { ShopContext } from '../../context/shop-context'
import { PIZZAS } from '../../pizzas'
import {CartItem} from "./carroitem"
import "./carro.css"
import horno from "../../assets/horno.png"
import vpizza from "../../assets/pizza.gif"
// import ferror from "../../assets/fondo-error.png"

export const Carro = () =>{
    const {cartItems, getTotal} = useContext(ShopContext);
    const totalFinal = getTotal();
    return (
        <div className='carro'>
            <div className='header-carro'>
                <img src={horno} alt="" className='imagen-horno'/> 
                <h1>Enviar al Horno</h1>
            </div>

            
            <div className='cartItems'>
                {PIZZAS.map((pizza)=>{
                    if(cartItems[pizza.id] !== 0 ){
                        return <CartItem data={pizza}/>
                    }
                    return null;
                })}

            </div>
            {totalFinal > 0 ? (
                <div className='pagar'>
                    <p><span className="subtototal-estilo">Subtotal:</span> S/ {totalFinal} </p>
                    <button className='btn-pagar'>Pagar</button>
                </div>
            ) : (
                <div  className='sin-pedido'>
                    <h1> No hay nada para enviar al HORNO</h1>
                    <div  className='pizza-error-container'>
                        <img  src={vpizza} alt="loading..." className='pizza-error'/>
                    </div>
                </div>
            )}
        </div>
    )
}
import React, { useContext } from 'react'
import { ShopContext } from '../../context/shop-context'
import { PIZZAS } from '../../pizzas'
import {CartItem} from "./carroitem"
import "./carro.css"


export const Carro = () =>{
    const {cartItems, getTotal} = useContext(ShopContext);
    const totalFinal = getTotal();
    return (
        <div className='carro'>
            <div>
                <h1>Enviar al Horno</h1>
            </div>

            
            <div className='cartItems'>
                {PIZZAS.map((pizza)=>{
                    if(cartItems[pizza.id] !== 0 ){
                        return <CartItem data={pizza}/>
                    }
                })}

            </div>
            {totalFinal > 0 ?
            <div className='pagar'>
                <p>Subtotal : S/ {totalFinal} </p>
                <button>Pagar</button>
            </div>
            : <h1> No hay nada para enviar al HORNO</h1>}
        </div>
    )
}
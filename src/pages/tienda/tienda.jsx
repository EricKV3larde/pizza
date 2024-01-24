import React from 'react';
import { PIZZAS } from '../../pizzas';
import { Pizza } from './pizza';


export const Tienda = () =>{
    return (
        <div className='tienda'>
            <div className='titulo'>
                <h1>Pizzas</h1>
            </div>
            <div className='tiposPizzas'>
                {PIZZAS.map((pizza) =>(
                    
                <Pizza data = {pizza}/>
                
                ))}
            </div>
        </div>
    )
}
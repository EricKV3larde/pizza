import React from 'react';
import { PIZZAS } from '../../pizzas';
import { Pizza } from './pizza';
import './tiendaStyles.css'

export const Tienda = () =>{
    return (
        <div className='tienda'>
            <div className='titulo'>
                <h1>¡Nuestra Carta!</h1>
            </div>
            <div className='tiposPizzas'>
                {PIZZAS.map((pizza) =>(
                    
                <Pizza data = {pizza}/>
                
                ))}
            </div>
        </div>
    )
}
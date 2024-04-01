import React, { useContext, useState } from "react";
import { ShopContext } from "../../context/shop-context";
import { PIZZAS } from "../../pizzas";
import { CartItem } from "./carroitem";
import "./carro.css";
import horno from "../../assets/horno.png";
import vpizza from "../../assets/pizza.gif";
import { enviar } from "./main";

export const Carro = () => {
  const { cartItems, getTotal } = useContext(ShopContext);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [ubicacion, setUbicacion] = useState("");
  const [metodoPago, setMetodoPago] = useState("yape");
  const totalFinal = getTotal();

  const handlePagarClick = () => {
    setMostrarFormulario(true);
  };


  const handleEnviarFormulario = (event) => {
    event.preventDefault();
    // Validar campos antes de enviar el formulario
    if (!nombre || !telefono || !ubicacion) {
      console.log("Por favor completa todos los campos.");
      return;
    }
    // Crear el pedido con el detalle de las pizzas y el total
    const pedido = PIZZAS.filter((pizza) => cartItems[pizza.id] !== 0)
    .map((pizza) => {
      const cantidad = cartItems[pizza.id];
      const tipoPrecio = pizza.dobleQueso ? 'extra' : 'simple'; // Determinar el tipo de precio
      
      return `${pizza.pizzaName} (${tipoPrecio}): ${cantidad}`;
    })
    .join("\n");
    
    const mensajePedido = `Pedido:\n${pedido}\nTotal: S/ ${totalFinal}`;

    enviar(nombre, telefono, ubicacion, metodoPago, mensajePedido);
  };

  return (
    <div className="carro">
      <div className="header-carro">
        <img src={horno} alt="" className="imagen-horno" />
        <h1>Enviar al Horno</h1>
      </div>

      <div className="cartItems">
        {PIZZAS.map((pizza) => {
          if (cartItems[pizza.id] !== 0) {
            return <CartItem data={pizza} />;
          }
          return null;
        })}
      </div>
      {totalFinal > 0 ? (
        <div className="pagar">
          <p>
            <span className="subtototal-estilo">Subtotal:</span> S/ {totalFinal}{" "}
          </p>
          <button className="btn-pagar" onClick={handlePagarClick}>
            Pagar
          </button>
        </div>
      ) : (
        <div className="sin-pedido">
          <h1> No hay nada para enviar al HORNO</h1>
          <div className="pizza-error-container">
            <img src={vpizza} alt="loading..." className="pizza-error" />
          </div>
        </div>
      )}

      {mostrarFormulario && (
        <div className="formulario-flotante">
          <form className="formulario-pago" onSubmit={handleEnviarFormulario}>
            <h2>Formulario de Pago</h2>
            <label htmlFor="nombre">Nombre:</label>
            <input
              type="text"
              id="nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
              pattern="[A-Za-z\s]+"
              title="Ingrese solo letras y espacios"
            />
            <label htmlFor="telefono">Teléfono:</label>
            <input
              type="tel"
              id="telefono"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
              required
              pattern="[0-9]{9}"
              title="Ingrese un número de teléfono válido (9 dígitos)"
            />
            <label htmlFor="ubicacion">Ubicación:</label>
            <input
              type="text"
              id="ubicacion"
              value={ubicacion}
              onChange={(e) => setUbicacion(e.target.value)}
              required
              pattern="[A-Za-z0-9\s\.,-]+"
              title="Ingrese solo letras, números y algunos caracteres especiales"
            />
            <label htmlFor="metodoPago">Método de Pago:</label>
            <select
              id="metodoPago"
              value={metodoPago}
              onChange={(e) => setMetodoPago(e.target.value)}
              required
            >
              <option value="yape">Yape</option>
              <option value="plin">Plin</option>
              <option value="efectivo">Efectivo</option>
            </select>
            <button type="submit">
              Enviar
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

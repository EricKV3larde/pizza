// import React, { useState, useContext } from "react";
// import "./PizzaStyles.css";
// import { ShopContext } from "../../context/shop-context";
// export const Pizza = (props) => {
//   const { id, pizzaName, descripcion, fotoPizza, precios, dobleQueso } =
//     props.data;
//   const [dobleQuesoState, setDobleQuesoState] = useState(dobleQueso);
//   const { addItems, cartItems } = useContext(ShopContext);
//   const cartItemCantidad = cartItems[id];
//   // const [totalito, setTotalito] = useState([]);
//   // useEffect(() => {
//   //   console.log("totalito actualizado:", totalito);
//   // }, [totalito]);

//   // botones seleccion de tamano
//   const [selectedButton, setSelectedButton] = useState("simple"); // Estado para almacenar qué botón está seleccionado

//   const handleButtonClick = (buttonId) => {
//     setSelectedButton(buttonId); // Cambiar el estado al ID del botón seleccionado
//   };
//   const handleAddToCart = () => {
//     // Obtener el precio según la opción seleccionada
//     const precio =
//       selectedButton === "doble"
//         ? ((dobleQueso = true), precios.extra)
//         : precios.simple;
//     // Llamar a la función addItems con el ID y el precio correcto
//     console.log(pizzaName);
//     console.log(dobleQueso);
//     console.log("selectorpizzza", id, precio);
//     addItems(id, precio);
//     // Actualizar el estado de totalito con el nuevo precio
//     // setTotalito((prevTotalito) => [...prevTotalito, precio]);
//   };
//   const handleToggleDobleQueso = () => {
//     setDobleQuesoState(!dobleQuesoState); // Cambiar el estado del doble queso
//   };
//   return (
//     <div className="Pizza">
//       <div className="fotopizza-container">
//         <img src={fotoPizza} alt="pizza" />
//       </div>
//       <div className="descripcion">
//         <p>
//           <b id="npmbre-pizza">{pizzaName}</b>
//         </p>
//         <p>{descripcion}</p>
//         <div class="tamano-selector">
//           {/* <button className="btn-tamano b1">Simple</button>
//                     <button className="btn-tamano b2">Doble Queso</button> */}

//           <button
//             className={`btn-tamano ${
//               selectedButton === "simple" ? "selected" : ""
//             }`}
//             onClick={() => handleButtonClick("simple")}
//           >
//             Simple
//           </button>
//           <button
//             className={`btn-tamano ${
//               selectedButton === "doble" ? "selected" : ""
//             }`}
//             onClick={() => handleButtonClick("doble")}
//           >
//             Doble Queso
//           </button>
//         </div>
//         <div className="costo-btn-container">
//           <p>
//             S/ <span>{precios.simple}</span>
//             <br />
//             S/ <span>{precios.extra}</span>
//           </p>
//           {/* <button className="anadir" onClick={() => addItems(id)}> */}
//           <button className="anadir" onClick={handleAddToCart}>
//             Añadir a la Cesta{" "}
//             {cartItemCantidad > 0 && <>({cartItemCantidad})</>}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

import React, { useState, useContext } from "react";
import "./PizzaStyles.css";
import { ShopContext } from "../../context/shop-context";

export const Pizza = (props) => {
  const { id, pizzaName, descripcion, fotoPizza, precios, dobleQueso } = props.data;

  const [selectedButton, setSelectedButton] = useState("simple"); // Estado para almacenar qué botón está seleccionado
  var [dobleQuesoState] = useState(dobleQueso);
  
  const { addItems, cartItems, addToOrder } = useContext(ShopContext);

  const cartItemCantidad = cartItems[id];

  const handleButtonClick = (buttonId) => {
    setSelectedButton(buttonId); // Cambiar el estado al ID del botón seleccionado
  };

  const handleAddToCart = () => {
    // Obtener el precio según la opción seleccionada
    let precio;
    if (selectedButton === "doble") {
      // console.log("buenas ")
      // console.log(selectedButton);
      // console.log(dobleQuesoState);
      dobleQuesoState = true;
      // console.log(dobleQuesoState);
      precio = precios.extra;
    } else {
      precio = precios.simple;
      dobleQuesoState = false;
    }
    // Llamar a la función addItems con el ID y el precio correcto
    addItems(id, precio);
    // console.log(dobleQuesoState);
    addToOrder(pizzaName, 1, dobleQuesoState);
  };


  return (
    <div className="Pizza">
      <div className="fotopizza-container">
        <img src={fotoPizza} alt="pizza" />
      </div>
      <div className="descripcion">
        <p>
          <b id="nombre-pizza">{pizzaName}</b>
        </p>
        <p>{descripcion}</p>
        <div className="tamano-selector">
          <button
            className={`btn-tamano ${selectedButton === "simple" ? "selected" : ""}`}
            onClick={() => handleButtonClick("simple")}
          >
            Simple
          </button>
          <button
            className={`btn-tamano ${selectedButton === "doble" ? "selected" : ""}`}
            onClick={() => handleButtonClick("doble")}
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
          <button className="anadir" onClick={handleAddToCart}>
            Añadir a la Cesta {cartItemCantidad > 0 && <>({cartItemCantidad})</>}
          </button>
        </div>
      </div>
    </div>
  );
};


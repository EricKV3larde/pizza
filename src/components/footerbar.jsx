import React from "react";
import "./footerbar.css";
export const FooterBar = () => {
  return (
    <div className="container">
      <div className="header">
        <h2 className="pizza">PIZZA DE LA CASA</h2>
        <div className="content">
          <p className="ppp">
            Disfruta de nuestras deliciosas pizzas de la casa, cuidadosamente preparadas con los mejores ingredientes frescos y sabores únicos que te encantarán.
          </p>
          <p className="ppp">
          Desde la clásica Margarita hasta las opciones más creativas como la <strong>suprema</strong>
          </p>
        </div>
      </div>
      <div className="content-grid">
        <div className="navbar1">
          <a href="#">About Us</a>
          <a href="#">Portfolio</a>
          <a href="#">Contact Us</a>
          <a href="#">Contact Us</a>
        </div>
        <div className="navbar1">
          <a href="#">Our FAQ</a>
          <a href="#">Our Team</a>
          <a href="#">Our Service</a>
        </div>
      </div>

      <div className="footer">
        <p>© Copyright - All Rights Reserved. Designed by Erick Velarde</p>
        <p>26 Marzo, 2024</p>
      </div>
    </div>
  );
};

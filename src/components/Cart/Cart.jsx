import React from "react";
import Button from "@mui/material/Button";
import "./Cart.css";
import { useNavigate } from "react-router-dom";

const Cart = ({ cart, vaciarCarrito, borrarProducto, total }) => {

  const navigate = useNavigate()
  return (
    <div>
      {cart?.map((item) => (
        <div className="item" key={item.id}>
          <img src={item?.img} alt={item?.modelo} className="img-cart"/>
            <h2>
              {item?.marca} {item?.modelo}
            </h2>
            <h3 className="quantity">{item?.quantity}</h3>
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => borrarProducto(item.id)}
              
            >
              Eliminar producto
            </Button>
          </div>
      ))}
      <div className="btns">

      <Button variant="contained" color="primary" onClick={vaciarCarrito}>
        Vaciar carrito
      </Button> 
      <Button variant="contained" color="primary" onClick={()=>{navigate("/checkout")}}>
        Finalizar compra
      </Button> 
      </div>
      <div>
        <h2>El precio total es: $ {total}</h2>
      </div> 
    </div>
  );
};

export default Cart;

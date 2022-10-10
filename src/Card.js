import { useContext } from "react";
import { ContextData } from "./context";

export const Card = ({ prod }) => {
  const { products } = useContext(ContextData);
  return (
    <div
      class="card col col-4 m-4"
      style={{ width: "18rem", backgroundImage: `URL(${prod.image})` }}
    >
      <button className="description">i</button>

      <div class="card-body">
        <div>
          <h5 class="card-title">{prod.category}</h5>
          <h5 class="card-title">${prod.price}</h5>
        </div>
        <div>
          <button className="cart-button_add">+</button>
        </div>
      </div>
    </div>
  );
};

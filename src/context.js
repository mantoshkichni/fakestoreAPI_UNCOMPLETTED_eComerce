import { createContext, useEffect, useReducer, useState } from "react";
import { reducer } from "./reducer";

export const ContextData = createContext();

export const Context = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState();
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const [state, dispatch] = useReducer(reducer, {
    products,
    cart
  });
  return (
    <ContextData.Provider value={{ products }}>{children}</ContextData.Provider>
  );
};

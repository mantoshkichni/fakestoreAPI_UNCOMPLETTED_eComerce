import { useContext, useEffect } from "react";
import { ContextData } from "./context";
import { Home } from "./Home";
import "./styles.css";

export default function App() {
  const { products } = useContext(ContextData);
  console.log(products);

  return (
    <div className="App">
      <Home products={products} />
    </div>
  );
}

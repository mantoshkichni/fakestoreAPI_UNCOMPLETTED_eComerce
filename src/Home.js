import { Card } from "./Card";

export const Home = ({ products }) => {
  return (
    <div className="container">
      <div className="row">
        {products?.map((prod) => {
          return <Card prod={prod} />;
        })}
      </div>
    </div>
  );
};

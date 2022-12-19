import React, { useContext,useState } from "react";
import Card from "../components/Card";
import Search from "../components/Search";
import { AppContext } from "../context/AppContext";
import { Product } from "../interface/products.interface";


function Main({ handleAddToCart }: any) {
  const { state } = useContext(AppContext);
  const [filterProducts, setFilterProduct] = useState<any>(state && state?.initialProducts)

  return (
    <div className="main">
      <Search setFilterProduct={setFilterProduct} filterProducts={filterProducts} />
      <div style={{ marginBottom: 50 }}/>
      <div className="cardsContainer">
        {filterProducts.map((item: any) => {
          return (
            <Card
              item={item}
              key={item.productName}
              handleAddToCart={handleAddToCart}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Main;


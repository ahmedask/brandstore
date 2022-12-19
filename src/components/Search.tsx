import React, { useContext,useState } from "react";
import { AppContext } from "../context/AppContext";
import { Product } from "../interface/products.interface";


function Search({ setFilterProduct, filterProducts }: any) {
  const { state } = useContext(AppContext);
  const [searchValue, setSerchValue] = useState<string>('');

  function capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const handleSearch = (e: any) => {
    let products = state && state?.initialProducts;
    const filterdProducts = products.filter((product: Product) => product.productName.includes(capitalizeFirstLetter(e.target.value)));
    setSerchValue(e.target.value)
    setFilterProduct(filterdProducts)
    return filterdProducts;
  };

  return (
    <>
        <div className="wrap">
          <div className="search">
            <input
              type="text"
              className="searchTerm"
              placeholder="What are you looking for?"
              onChange={handleSearch}
              data-testid="search-input"
            />
          </div>
          {filterProducts && filterProducts.length === 0 && <span data-testid="search-input-feedback" className="searchTermNotFound">{`Could not find ${searchValue}`}</span>}
        </div>
    </>
  );
}

export default Search;


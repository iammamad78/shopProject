import Loader from "../components/Loader";
import Cart from "../components/Cart";

import { useProducts } from "../context/ProductsContext";

import styles from "./ProductsPage.module.css";
import { ImSearch } from "react-icons/im";
import { useState } from "react";

function ProductsPage() {
  const [search, setSearch] = useState("");
  const products = useProducts();

  const searchHandler = () => {
    console.log("Searching for:", search);
  };

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value.toLocaleLowerCase().trim())}
        />
        <button onClick={searchHandler}>
          <ImSearch />
        </button>
      </div>
      <div className={styles.container}>
        <div className={styles.products}>
          {!products.length && <Loader />}
          {products.map((product) => (
            <Cart key={product.id} product={product} />
          ))}
        </div>
        <div>SideBar</div>
      </div>
    </>
  );
}

export default ProductsPage;

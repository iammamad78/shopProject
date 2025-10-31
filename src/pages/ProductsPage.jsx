import { useEffect, useState } from "react";
import { useProducts } from "../context/ProductsContext";

import Cart from "../components/Cart";

import Loader from "../components/Loader";
import styles from "./ProductsPage.module.css";
import { ImSearch } from "react-icons/im";
import { FaListUl } from "react-icons/fa";

function ProductsPage() {
  const products = useProducts();
  const [search, setSearch] = useState("");
  const [displayed, setDisplayed] = useState([]);
  const [query, setQuery] = useState({});

  useEffect(() => {
    setDisplayed(products);
  }, [products]);

  useEffect(() => {
    console.log(query);
  }, [query]);

  const searchHandler = () => {
    setQuery((query) => ({ ...query, search }));
    setSearch("");
  };

  const categoryHandler = (e) => {
    const { tagName } = e.target;
    const category = e.target.innerText.toLowerCase();

    console.log(category);

    if (tagName !== "LI") return;
    setQuery((query) => ({ ...query, category }));
  };

  return (
    <>
      {/* Search Input */}
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
        {/* Main Section */}
        <div className={styles.products}>
          {!displayed.length && <Loader />}
          {displayed.map((product) => (
            <Cart key={product.id} product={product} />
          ))}
        </div>

        {/* Sidebar */}
        <div>
          <div>
            <FaListUl />
            <p>Categories</p>
            <ul onClick={categoryHandler}>
              <li>All</li>
              <li>Electronics</li>
              <li>Jewelery</li>
              <li>Men's Clothing</li>
              <li>Women`s Clothing</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductsPage;

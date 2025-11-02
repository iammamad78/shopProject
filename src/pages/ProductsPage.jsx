import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useProducts } from "../context/ProductsContext";

import Loader from "../components/Loader";
import styles from "./ProductsPage.module.css";

import {
  filterProducts,
  getInitialQuery,
  searchProducts,
} from "../helper/helper";

import Cart from "../components/Cart";
import SearchBox from "../components/SearchBox";
import Sidebar from "../components/Sidebar";

function ProductsPage() {
  const products = useProducts();
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState("");
  const [displayed, setDisplayed] = useState([]);
  const [query, setQuery] = useState({});

  useEffect(() => {
    setDisplayed(products);
    setQuery(getInitialQuery(searchParams));
  }, [products]);

  useEffect(() => {
    setSearchParams(query);
    setSearch(query.search || "");
    let finalProducts = searchProducts(products, query.search);
    finalProducts = filterProducts(finalProducts, query.category);

    setDisplayed(finalProducts);
  }, [query]);

  return (
    <>
      <SearchBox search={search} setSearch={setSearch} setQuery={setQuery} />

      <div className={styles.container}>
        {/* Main Section */}
        <div className={styles.products}>
          {!displayed.length && <Loader />}
          {displayed.map((product) => (
            <Cart key={product.id} product={product} />
          ))}
        </div>

        <Sidebar setQuery={setQuery} />
      </div>
    </>
  );
}

export default ProductsPage;

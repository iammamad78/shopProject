import Loader from "../components/Loader";
import Cart from "../components/Cart";
import { useProducts } from "../context/ProductsContext";

import styles from "./ProductsPage.module.css";

function ProductsPage() {
  const products = useProducts();

  return (
    <div className={styles.container}>
      <div className={styles.products}>
        {!products.length && <Loader />}
        {products.map((product) => (
          <Cart key={product.id} product={product} />
        ))}
      </div>
      <div>SideBar</div>
    </div>
  );
}

export default ProductsPage;

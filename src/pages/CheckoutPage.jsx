import BasketCard from "../components/BasketCard";
import BasketSidebar from "../components/BasketSidebar";
import { useCart } from "../context/CartContext";

import styles from "./CheckoutPage.module.css";

function CheckoutPage() {
  const [state, dispatch] = useCart();

  const clickHandler = (type, payload) => {
    dispatch({ type, payload });
  };

  if (!state.itemsCounter)
    return (
      <div className={styles.container}>
        <p>No Items Added to Card</p>
      </div>
    );

  return (
    <div className={styles.container}>
      <div>
        <BasketSidebar state={state} clickHandler={clickHandler} />
      </div>
      <div className={styles.products}>
        {state.selectedProducts.map((product) => (
          <BasketCard
            key={product.id}
            product={product}
            clickHandler={clickHandler}
          />
        ))}
      </div>
    </div>
  );
}

export default CheckoutPage;

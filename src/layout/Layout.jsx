import { PiShoppingCartSimpleBold } from "react-icons/pi";
import styles from "./Layout.module.css";

import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Layout({ children }) {
  const [state] = useCart();
  return (
    <>
      <header  className={styles.header}>
        <Link to="/products">ShopMate</Link>
        <Link to="/checkout">
          <div>
            <PiShoppingCartSimpleBold />
            {!!state.itemsCounter && <span>{state.itemsCounter}</span>}
          </div>
        </Link>
      </header>
      {children}
      <footer className={styles.footer}>Developed BY Mamad78 with ❤️</footer>
    </>
  );
}

export default Layout;

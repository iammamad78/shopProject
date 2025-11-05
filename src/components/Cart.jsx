import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import { shortenText } from "../helper/helper";

import { TbListDetails, TbShoppingBagCheck } from "react-icons/tb";
import styles from "./Cart.module.css";

function Cart({ product }) {
  const { title, price, image, id } = product;

  const [state, dispatch] = useCart();
  console.log(state);

  const clickHandler = () => {
    dispatch({ type: "ADD_ITEM", payload: product });
  };

  return (
    <div className={styles.card}>
      <img src={image} alt={title} />
      <h3>{shortenText(title)}</h3>
      <p>{price} $</p>
      <div className={styles.actions}>
        <Link to={`/products/${id}`}>
          <TbListDetails />
        </Link>
        <div>
          <button onClick={clickHandler}>
            <TbShoppingBagCheck />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;

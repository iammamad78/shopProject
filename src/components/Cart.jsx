import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import { productsQuantity, shortenText } from "../helper/helper";

import { TbListDetails, TbShoppingBagCheck } from "react-icons/tb";
import styles from "./Cart.module.css";
import { MdDeleteOutline } from "react-icons/md";

function Cart({ product }) {
  const { title, price, image, id } = product;

  const [state, dispatch] = useCart();

  const quantity = productsQuantity(state, id);

  const clickHandler = (type) => {
    dispatch({ type, payload: product });
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

          {quantity === 1 && (
            <button onClick={() => clickHandler("REMOVE_ITEM")}>
              <MdDeleteOutline />
            </button>
          )}

          {quantity > 1 && (
            <button onClick={() => clickHandler("DECREASE")}>-</button>
          )}

          {!!quantity && <span>{quantity}</span>}
          
          {quantity === 0 ? (
            <button onClick={() => clickHandler("ADD_ITEM")}>
              <TbShoppingBagCheck />
            </button>
          ) : (
            <button onClick={() => clickHandler("INCREASE")}>+</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cart;

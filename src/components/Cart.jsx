import { TbListDetails, TbShoppingBagCheck } from "react-icons/tb";
import { Link } from "react-router-dom";

import styles from "./Cart.module.css";
import { shortenText } from "../helper/helper";

function Cart({ product }) {
  const { title, price, image, id } = product;

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
          <button>
            <TbShoppingBagCheck />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;

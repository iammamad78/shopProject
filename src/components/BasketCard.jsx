import { shortenText } from "../helper/helper";
import { MdDeleteOutline } from "react-icons/md";

import styles from "./BasketCard.module.css";

function BasketCard({ product, clickHandler }) {
  const { image, title, quantity } = product;
  return (
    <div className={styles.card}>
      <img src={image} alt={title} />
      <p>{shortenText(title)}</p>
      <div className={styles.actions}>
        {quantity === 1 && (
          <button onClick={() => clickHandler("REMOVE_ITEM", product)}>
            <MdDeleteOutline />
          </button>
        )}
        {quantity > 1 && (
          <button onClick={() => clickHandler("DECREASE", product)}>-</button>
        )}
        <span>{quantity}</span>
        <button onClick={() => clickHandler("INCREASE", product)}>+</button>
      </div>
    </div>
  );
}

export default BasketCard;

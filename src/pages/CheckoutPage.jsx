import BasketCard from "../components/BasketCard";
import { useCart } from "../context/CartContext";

function CheckoutPage() {
  const [state, dispatch] = useCart();

  const clickHandler = (type, payload) => {
    dispatch({ type, payload });
  };

  return (
    <div>
      <div>
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

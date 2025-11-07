import { createContext, useContext, useReducer } from "react";
import { sumProducts } from "../helper/helper";

const initialState = {
  selectedProducts: [],
  itemsCounter: 0,
  totalPrice: 0,
  checkout: false,
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_ITEM":
      if (
        !state.selectedProducts.find((item) => item.id === action.payload.id)
      ) {
        state.selectedProducts.push({ ...action.payload, quantity: 1 });
      }
      return {
        ...state,
        ...sumProducts(state.selectedProducts),
        checkout: false,
      };

    case "REMOVE_ITEM":
      const newSelectedItems = state.selectedProducts.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        selectedProducts: [...newSelectedItems],
        ...sumProducts(newSelectedItems),
      };

    case "INCREASE":
      const increaseIndex = state.selectedProducts.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedProducts[increaseIndex].quantity++;
      return {
        ...state,
        ...sumProducts(state.selectedProducts),
      };

    case "DECREASE":
      const decreaseIndex = state.selectedProducts.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedProducts[decreaseIndex].quantity--;
      return {
        ...state,
        ...sumProducts(state.selectedProducts),
      };

    case "CHECKOUT":
      return {
        selectedProducts: [],
        itemsCounter: 0,
        totalPrice: 0,
        checkout: true,
      };

    default:
      throw new Error("Invalid Action!");
  }
};

const CartContext = createContext();

function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

const useCart = () => {
  const { state, dispatch } = useContext(CartContext);
  return [state, dispatch];
};

export default CartProvider;
export { useCart };

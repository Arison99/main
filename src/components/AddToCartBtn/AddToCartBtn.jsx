import useCart from "../../hooks/useCart";
import styles from "./AddToCartBtn.module.css";

function AddToCartBtn({ menu }) {
  const { handleAddItemToCart } = useCart();

  return (
    <button
      className={`${styles.btn} para-3`}
      onClick={(e) => {
        e.preventDefault();
        handleAddItemToCart(menu);
      }}
    >
      <img
        src={`${import.meta.env.BASE_URL}/images/icon-add-to-cart.svg`}
        alt="icon add to cart"
      />
      Add to Cart
    </button>
  );
}

export default AddToCartBtn;

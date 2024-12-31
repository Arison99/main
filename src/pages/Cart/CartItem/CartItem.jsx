import useCart from "../../../hooks/useCart";
import "./CartItem.css";

function CartItem({ cartItem }) {
  const { handleDeleteItemFromCart } = useCart();

  return (
    <li className="cartItem">
      <article className="cartItem__container">
        <p className="cartItem__name para-3">{cartItem.name}</p>
        <article className="cartItem__subContainer">
          <p className="cartItem__count para-3">{cartItem.count}x</p>
          <p className="cartItem__price para-2">@ ${cartItem.price}</p>
          <p className="cartItem__total para-3">
            ${cartItem.count * cartItem.price}
          </p>
        </article>
      </article>
      <button
        className="cartItem__btn"
        onClick={() => handleDeleteItemFromCart(cartItem)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="10"
          fill="none"
          viewBox="0 0 10 10"
        >
          <path
            fill="#CAAFA7"
            d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"
          />
        </svg>
      </button>
    </li>
  );
}

export default CartItem;

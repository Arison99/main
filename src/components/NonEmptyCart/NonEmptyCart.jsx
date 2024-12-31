import { useState } from "react";
import useCart from "../../hooks/useCart";
import CartItem from "../../pages/Cart/CartItem/CartItem";
import "./NonEmptyCart.css";
import { useNavigate } from "react-router-dom";

function NonEmptyCart() {
  const { cart, handleConfirmOrder } = useCart();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const total = cart.reduce((acc, curr) => acc + curr.price * curr.count, 0);

  const confirmOrder = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      await handleConfirmOrder();
      setSuccess(true);
    } catch (err) {
      setError("Failed to confirm order. Please Login.");
      setTimeout(() => {
        navigate("/restaurant/login");
      }, 3000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ul className="cartContainer">
        {cart.map((cartItem) => (
          <CartItem key={cartItem.name} cartItem={cartItem} />
        ))}
      </ul>
      <section className="cart__totalContainer">
        <p className="cart__totalContainer__text para-2">Order Total</p>
        <p className={`cart__totalContainer__total heading-2`}>
          ${total.toFixed(2)}
        </p>
      </section>
      <section className={`cart__carbon`}>
        <button className="btn btn-sm btn-secondary para-1">
          Pay on delivery
        </button>{" "}
        <button className="btn btn-sm btn-light" disabled>
          Order with cash
        </button>
      </section>
      {/* Display loading, error, and success messages */}
      {loading && <p className="loading para-2">Processing your order...</p>}
      {error && <p className="error para-2">{error}</p>}
      {success && (
        <p className="text-success para-2">Order confirmed successfully!</p>
      )}
      <button
        className={`cart__confirmBtn para-1`}
        onClick={confirmOrder}
        disabled={loading}
      >
        {loading ? "Confirming..." : "Confirm Order"}
      </button>
    </>
  );
}

export default NonEmptyCart;

import useCart from "../../../hooks/useCart";
import EmptyCart from "../../../components/EmptyCart/EmptyCart";
import NonEmptyCart from "../../../components/NonEmptyCart/NonEmptyCart";
import "./Cart.css";

function Cart() {
  const { cart } = useCart();

  return (
    <section className={"cart__section"}>
      <h2 className={`cart__heading heading-2`}>Your Cart ({cart.length})</h2>
      {cart.length > 0 ? <NonEmptyCart /> : <EmptyCart />}
    </section>
  );
}

export default Cart;

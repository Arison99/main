import { Link } from "react-router-dom";
import "./EmptyCart.css";

function EmptyCart() {
  return (
    <section className={`cart__container`}>
      <img
        className={`${`cart__illustration`}`}
        src={`${import.meta.env.BASE_URL}/images/illustration-empty-cart.svg`}
        alt="illustration"
      />
      <p className={`${`cart__paragraph`} para-3`}>
        Your added items will appear here.
      </p>
      <Link
        to="/restaurant/categories"
        className={`cart__btn para-3 text-black`}
      >
        Go to menu
      </Link>
    </section>
  );
}

export default EmptyCart;

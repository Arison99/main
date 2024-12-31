import useCart from "../../../hooks/useCart";
import AddToCartBtn from "../../../components/AddToCartBtn/AddToCartBtn";
import IncrementDecrementBtn from "../../../components/IncrementDecrementBtn/IncrementDecrementBtn";
import "./MenuItem.css";
import { Link } from "react-router-dom";
import Image from "/images/image-waffle-desktop.jpg";

function MenuItem({ menu }) {
  const { cart } = useCart();

  const targetCartItemIndex = cart.findIndex(
    (cartItem) => cartItem.name === menu.name
  );
  const targetCartItem = cart[targetCartItemIndex];
  const count = targetCartItem?.count || 0;

  return (
    <li className="menu">
      <picture>
        <img
          className="menu__image"
          src={`${import.meta.env.VITE_IMAGE}/${menu.image}`}
          // src={Image}
          alt={menu.name}
        />
      </picture>
      {count < 1 ? (
        <AddToCartBtn menu={menu} />
      ) : (
        <IncrementDecrementBtn item={menu} count={count} />
      )}
      <article className="menu__text border-bottom">
        <p className={`menu__name para-1 text-center`}>{menu.name}</p>
        <div className="row text-center">
          <div className="col-4">
            <p className={`menu__price para-1`}>Price ${menu.price}</p>
          </div>
          <div className="col-8">
            <Link
              to="/restaurant/detail"
              state={menu}
              className="w-100 para-1 text-decoration-none text-danger"
            >
              View Details
            </Link>
          </div>
        </div>
      </article>
    </li>
  );
}

export default MenuItem;

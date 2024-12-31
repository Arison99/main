import { useLocation } from "react-router-dom";
import Image from "/images/image-waffle-desktop.jpg";
import useCart from "../../hooks/useCart";
import "./Detail.css";

const Detail = () => {
  const location = useLocation();
  const { cart, handleAddItemToCart, handleMinusItemFromCart } = useCart();

  const product = location.state || {};
  if (!product) {
    return <p>No product data available.</p>;
  }

  const targetCartItemIndex = cart.findIndex(
    (cartItem) => cartItem.name === product.name
  );

  const targetCartItem = cart[targetCartItemIndex];
  const count = targetCartItem?.count || 0;
  return (
    <main className="detail">
      <div className="mt-5 pt-5"></div>
      <div className="card border-0">
        <img
          // src={`${import.meta.env.VITE_IMAGE}/${product.image}`}
          src={Image}
          alt={product.name}
        />

        <h1>{product.name}</h1>
        <h2 className="text-muted">{product.product}</h2>

        <p className="para-3 text-black fw-light">
          An easy and quick dish, perfect for any meal. This classic
          {" " + product.name.toLowerCase() + " "} combines all the goodness you
          expect in a delicious {" " + product.name.toLowerCase()}.
        </p>

        <div>
          {count < 1 ? (
            <button
              className="addBtn w-100 para-3"
              onClick={(e) => {
                e.preventDefault();
                handleAddItemToCart(product);
              }}
            >
              Add To Cart
            </button>
          ) : (
            <article className="para-3 w-100 article-btn">
              <button
                className="btn__decrement"
                onClick={(e) => {
                  e.preventDefault();
                  handleMinusItemFromCart(product);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="2"
                  fill="none"
                  viewBox="0 0 10 2"
                >
                  <path fill="#fff" d="M0 .375h10v1.25H0V.375Z" />
                </svg>
              </button>
              {count}
              <button
                className="btn__increment"
                onClick={(e) => {
                  e.preventDefault();
                  handleAddItemToCart(product);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="10"
                  fill="none"
                  viewBox="0 0 10 10"
                >
                  <path
                    fill="#fff"
                    d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"
                  />
                </svg>
              </button>
            </article>
          )}
        </div>

        <h2 className="titles">Ingredients</h2>
        <ul className="list-ingredients">
          <li className="item-ingredients">Example Ingredient 1</li>
          <li className="item-ingredients">Example Ingredient 2</li>
          <li className="item-ingredients">Example Ingredient 3</li>
        </ul>

        <hr />
        <h2 className="titles">Nutrition</h2>
        <p className="para-3 text-black fw-light">
          The table below shows nutritional values per serving without the
          additional fillings.
        </p>

        <table>
          <tbody>
            <tr>
              <td>Calories</td>
              <td className="table-bold">277kcal</td>
            </tr>
            <tr>
              <td>Carbs</td>
              <td className="table-bold">0g</td>
            </tr>
            <tr>
              <td>Protein</td>
              <td className="table-bold">20g</td>
            </tr>
            <tr>
              <td>Fat</td>
              <td className="table-bold">22g</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default Detail;

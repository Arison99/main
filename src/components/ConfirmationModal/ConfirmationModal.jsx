import useCart from "../../hooks/useCart";
import Modal from "../Modal/Modal";
import styles from "./ConfirmationModal.module.css";

function ConfirmationModal() {
  const { cart, showModal, handleNewOrder } = useCart();

  const total = cart.reduce((acc, curr) => acc + curr.price * curr.count, 0);

  return (
    <Modal open={showModal}>
      <header className={styles.modal__header}>
        <img
          className={styles.modal__icon}
          src={`${import.meta.env.BASE_URL}/images/icon-order-confirmed.svg`}
          alt="icon order confirmed"
        />
        <section className={styles.modal__text}>
          <h2 className={`heading-1 ${styles.modal__heading}`}>
            Order Confirmed
          </h2>
          <p className={styles.modal__message}>We hope you enjoy your food!</p>
        </section>
      </header>
      <section className={styles.modal__cart__container}>
        <ul className={styles.modal__cart}>
          {cart.map((cartItem) => {
            return (
              <li key={cartItem.name} className={styles.modal__cartItem}>
                <img
                  className={styles.modal__cartItem__image}
                  src={cartItem.image.thumbnail}
                  alt={cartItem.name}
                />
                <article className={styles.modal__cartItem__details}>
                  <p className={`para-3 ${styles.modal__cartItem__name}`}>
                    {cartItem.name}
                  </p>
                  <article className={styles.modal__cartItem__detailsSub}>
                    <p className={`para-3 ${styles.modal__cartItem__count}`}>
                      {cartItem.count}x
                    </p>
                    <p className={`para-2 ${styles.modal__cartItem__price}`}>
                      @ {cartItem.price}
                    </p>
                  </article>
                </article>
                <p className={`para-1 ${styles.modal__cartItem__total}`}>
                  ${cartItem.count * cartItem.price}
                </p>
              </li>
            );
          })}
        </ul>
        <hr className={styles.modal__cart__divider} />
        <section className={styles.modal__cart__total__container}>
          <p className={`para-2 ${styles.modal__cart__total__container__text}`}>
            Order Total
          </p>
          <p
            className={`heading-2 ${styles.modal__cart__total__container__amount}`}
          >
            ${total.toFixed(2)}
          </p>
        </section>
      </section>
      <button
        className={styles.modal__btn}
        onClick={(e) => {
          e.preventDefault();
          handleNewOrder();
        }}
      >
        Start New Order
      </button>
    </Modal>
  );
}

export default ConfirmationModal;

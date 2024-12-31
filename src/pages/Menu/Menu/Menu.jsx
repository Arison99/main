import styles from "./Menu.module.css";

function Menu({ children }) {
  return (
    <div>
      <section className={styles.menu}>{children}</section>
    </div>
  );
}

export default Menu;

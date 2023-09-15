import styles from "./Nav.module.css";
import { Cart, Shop } from "../Icons/Icons";

const Nav = () => {
  return (
    <nav className={styles.header}>
      <div className={styles.logo}>
        <Shop />
        <h3>MShop</h3>
      </div>
      <div>
        <Cart />
        <span className={styles.amount}>0</span>
      </div>
    </nav>
  );
};

export default Nav;

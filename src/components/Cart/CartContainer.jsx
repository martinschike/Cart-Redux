import styles from "./CartContainer.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const CartContainer = () => {
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <main className={styles.container}>
      {cartItems.map((item) => (
        <CartItem key={item.id} {...item} />
      ))}
    </main>
  );
};

export default CartContainer;

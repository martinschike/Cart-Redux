import styles from "./CartItem.module.css";

const CartItem = ({ id, title, price, img, amount }) => {
  return (
    <div className={styles.wrapper}>
      <img src={img} alt={title} />
      <h4>1</h4>
    </div>
  );
};

export default CartItem;

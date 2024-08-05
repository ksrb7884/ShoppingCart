import { useCart } from '../context/CartProviders';
import styles from "./CartItem.module.css";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { ImCross } from "react-icons/im";
import { useDispatch } from 'react-redux';
import { increaseQty, removeItem, decreaseQty } from "../features/cart/cartSlice";

function CartItem({ id, title, price, img, quantity }) {
    // const { increaseQty, decreaseQty, removeItem } = useCart();

    const dispatch = useDispatch();
    return (
        <div className={styles.cartItem}>
            <div className={styles.imgAndTitle}>
                <div className={styles.imgContainer}><img src={img} alt={title} className={styles.cartImage} /></div>
                <h3>{title}</h3>
            </div>
            <div className={styles.otherControls}>
                <div className={styles.qtyInput}>
                    <button onClick={() => {
                        if (quantity <= 1) {
                            return;
                        }
                        dispatch(decreaseQty(id));
                    }}><AiOutlineMinus /></button>
                    <span className={styles.quantityDisplay}>{quantity}</span>
                    <button onClick={() => dispatch(increaseQty(id))}><AiOutlinePlus /></button>
                </div>
                <p> &#8377; {price * quantity}</p>
                <button className={styles.removeItemBtn} onClick={() => dispatch(removeItem(id))}><ImCross /></button>
            </div>

        </div >
    );
};

export default CartItem;
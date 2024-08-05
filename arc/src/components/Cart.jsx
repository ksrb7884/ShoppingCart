import { useCart } from '../context/CartProviders';
import CartItem from './CartItem';
import styles from "./Cart.module.css";
import { useSelector } from 'react-redux';                                                                           

function Cart() {
    // const { cart } = useCart();
    const cart = useSelector((state) => state.cart);

    let totalAmt = cart.reduce((totalAmt, item) => totalAmt + item.price * item.quantity, 0);

    if (cart.length === 0) return <h1>No Items found!!</h1>;
    return (
        <div className={styles.cart}>
            <h2 className={styles.cartHeading}>Shopping Cart</h2>
            <div>
                {
                    cart.map((item) => <CartItem {...item} key={item.id} />)
                }
            </div>
            <h1>Total Amount: &#8377; {totalAmt}</h1>
        </div>
    );
}

export default Cart;
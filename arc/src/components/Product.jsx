import { useCart } from '../context/CartProviders';
import styles from "./Product.module.css";
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';

function Product({ id, title, price, img }) {
    // const { addToCart, cart } = useCart();
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    function handleAdd() {
        for (let item of cart) {
            if (item.id === id) {
                toast.error("Item already in cart");
                return;
            }
        }
        const newCartItem = {
            id: id,
            title: title,
            price: price,
            img: img,
            quantity: 1
        };
        dispatch(addToCart(newCartItem));
        toast.info("Item Added");
    }

    return (
        <div className={styles.product}>
            <img src={img} alt={title} className={styles.productImage} />
            <p className={styles.title}>{title}</p>
            <p className={styles.price}>&#8377; {price}</p>
            <button onClick={handleAdd} className={styles.addToCartBtn}>Add to cart</button>

        </div>
    );
}

export default Product;
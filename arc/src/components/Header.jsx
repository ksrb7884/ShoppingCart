import React, { useEffect, useState } from 'react';
import Modal from './UI/Modal';
import Cart from './Cart';
import Container from './UI/Container';
import styles from "./Header.module.css";
import { BsCartFill } from "react-icons/bs";
import { useCart } from '../context/CartProviders';
import { useSelector } from "react-redux";


function Header() {
    // const { cart } = useCart();
    const cart = useSelector((state) => state.cart);

    const totalQty = cart.reduce((acc, item) => acc + item.quantity, 0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    function closeModal() {
        setIsModalOpen(!isModalOpen);
    }

    useEffect(() => {
        if (isModalOpen) {
            document.documentElement.style.overflowY = "hidden";
        } else {
            document.documentElement.style.overflowY = "scroll";
        }
    }, [isModalOpen]);

    return (
        <header className={styles.header}>
            <Container>
                <nav className={styles.nav}>
                    <h1 >ARC shop</h1>
                    <button className={styles.showCartButton} onClick={() => setIsModalOpen(true)}>
                        <span className={styles.cartIconAndNumber}>
                            <BsCartFill />
                            {!!totalQty && <span className={styles.number}>{totalQty}</span>}
                        </span>
                        <span>Cart</span>
                    </button>
                </nav>
            </Container>
            {isModalOpen && <Modal closeModal={closeModal}>
                <Cart />
            </Modal>}
        </header>
    );
};

export default Header;
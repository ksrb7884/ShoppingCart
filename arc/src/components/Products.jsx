import { products } from '../data/product';
import Product from './Product';
import styles from "./Products.module.css";
import Container from "./UI/Container";

function Products() {
    return (
        <Container>
            <h1>Best of ARC</h1>
            <div className={styles.products}>
                {products.map((product) => <Product {...product} key={product.id} />)}

            </div>
        </Container>
    );
}

export default Products;
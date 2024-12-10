import { ProductDetail } from "@/interfaces/product.interface"
import styles from "./ProductDetail.module.scss"
import Image from "next/image"

interface ProductDetailProps {
    item: ProductDetail
}

export const ProductDetailComponent = ({ item }: ProductDetailProps) => {
    return (
        <article className={styles.container} aria-labelledby="product-title">
            <div className={styles.topSide}>
                <div className={styles.leftSide}>
                    <Image
                        src={item.picture}
                        alt={`Image of ${item.title}`}
                        width={400}
                        height={400}
                        style={{ objectFit: "contain" }}
                    />
                </div>
                <div className={styles.rightSide}>
                    <p aria-label={`Condition: ${item.condition}. Sold: ${item.sold_quantity}`}>
                        {item.condition} | {item.sold_quantity} vendidos
                    </p>
                    <span></span>
                    <h1 id="product-title" className={styles.titleItem}>{item.title}</h1>
                    <div className={styles.priceContainer}>
                        <span aria-label={`Price: ${item.price.amount} pesos`}>$ {item.price.amount}</span>
                        <span aria-label={`${item.price.amount} centavos`} className={styles.decimals}>{item.price.decimals ?? '00'}</span>
                    </div>
                    <button className={styles.button}>
                        Comprar
                    </button>
                </div>
            </div>
            <div className={styles.bottomSide}>
                <div className={styles.titleDescription}>Descripción del producto</div>
                <p>{item.description}</p>
            </div>
        </article>
    )
}
import Link from 'next/link';
import styles from './Items.module.scss';
import { Product } from '@/interfaces/product.interface';

interface ItemsProps {
    items: Product[]
}

export const Items = ({ items }: ItemsProps) => {
    return (
        <div className={styles.itemsContainer}>
            {items.map((item: Product, index: number) =>
                <Link
                    key={index}
                    href={"/items/" + item.id}
                    className={styles.item}
                    aria-label={`View details of ${item.title}`}
                >
                    <div className={styles.leftSide}>
                        <img style={{width:'130px'}} src={item.picture} alt={`Image of ${item.title}`} />
                        <div className={styles.itemData}>
                            <div>
                                <span aria-label={`Price: ${item.price.amount} pesos`}>
                                    $ {item.price.amount}
                                </span>
                                {item.free_shipping && (
                                    <img
                                        src={'/verified-check.svg'}
                                        alt="Free shipping available"
                                    />
                                )}
                            </div>
                            <div>{item.title}</div>
                        </div>
                    </div>
                    <div className={styles.rightSide} aria-label={`Condition: ${item.condition}`}>
                        {item.condition}
                    </div>
                </Link>)}
        </div>
    )
}
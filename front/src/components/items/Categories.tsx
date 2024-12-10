import styles from './Categories.module.scss';

interface Categories {
    items: string[]
}

export const Categories = ({ items }: Categories) => {

    return (
        <div className={styles.container}>
            {items.map((item, index) => <span key={item}>
                {item} {items.length === index + 1 ? "" : <>&nbsp;&gt;&nbsp;</>}
            </span>)} 
        </div>
    )
}
import styles from './order-header.module.css'

export function OrderHeader({ headerTitle, stepNumber }) {
    return (
        <div className={styles.orderHeader}>
            <div className={styles.orderHeaderNumber}>
                <p className={styles.orderHeaderNumberText}>
                    { stepNumber }
                </p>
            </div>
            <h3 className={styles.orderHeaderTitle}>
                { headerTitle }
            </h3>
        </div>
    );
}
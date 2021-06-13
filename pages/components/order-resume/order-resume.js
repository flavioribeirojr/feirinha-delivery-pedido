import React from 'react';
import styles from './order-resume.module.css';

export function OrderResume({ subTotal, shippingPrice, children }) {
    return (
        <div className={styles.orderResume}>
            <div className={styles.orderPriceInfo}>
                <p className={styles.orderPriceLabel}>
                    Subtotal
                </p>
                <p className={styles.orderPriceValue}>
                    { Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format( subTotal ) }
                </p>
            </div>
            <div className={styles.orderPriceInfo}>
                <p className={styles.orderPriceLabel}>
                    Frete
                </p>
                <p className={styles.orderPriceValue}>
                    { Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format( shippingPrice ) }
                </p>
            </div>
            <div className={styles.orderPriceInfo}>
                <p className={styles.orderPriceLabel}>
                    Total
                </p>
                <p className={styles.orderPriceValue}>
                    { Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format( subTotal + shippingPrice ) }
                </p>
            </div>

            { children }
        </div>
    );
}
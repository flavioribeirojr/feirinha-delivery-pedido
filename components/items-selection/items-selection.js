import { OrderHeader } from '../order-header/order-header'
import styles from './items-selection.module.css'
import { items } from '../../data/items'
import { OrderSteps } from '../../metadata/order-steps';
import { useEffect } from 'react';
import { OrderResume } from '../order-resume/order-resume';
import { getFormattedItemQuantity } from '../../helpers/item-price-calculator';

const MIN_ORDER_PRICE = 30;

export function ItemsSelection({
    selectedItems,
    setSelectedItems,
    setCurrentStep,
    subTotal,
    setSubTotal,
    shippingPrice
}) {
    useEffect(() => {
        calculateSubTotalAndShipping();
    }, [ selectedItems ]);

    function calculateSubTotalAndShipping() {
        const subTotal = selectedItems.reduce((subTotal, selectedItem) => {
            const selectedItemTotal = selectedItem.quantity * selectedItem.item.price;

            return subTotal + selectedItemTotal;
        }, 0);

        setSubTotal(subTotal);
    }

    function getTotalSelected(item) {
        const selectedItem = selectedItems.find(selectedItem => selectedItem.item.id === item.id);

        if (!selectedItem) {
            return 0;
        }

        return getFormattedItemQuantity(selectedItem);
    }

    function changeItemQuantity(item, quantityChangeStrategy) {
        const indexOfSelectedItem = selectedItems.findIndex(selectedItem => selectedItem.item.id === item.id);

        if (indexOfSelectedItem === -1) {
            setSelectedItems([
                ...selectedItems,
                {
                    item,
                    quantity: quantityChangeStrategy(0)
                }
            ]);

            return;
        }

        const newSelectedItems = [].concat(...selectedItems);
        newSelectedItems[indexOfSelectedItem].quantity = quantityChangeStrategy(newSelectedItems[indexOfSelectedItem].quantity);

        setSelectedItems(newSelectedItems);
    }

    function addItemQuantity(item) {
        const quantityChangeStrategy = (currentQuantity) => currentQuantity + 1;

        changeItemQuantity(item, quantityChangeStrategy);
    }

    function subtractItemQuantity(item) {
        changeItemQuantity(item, subtractItemQuantityStrategy);
    }

    function subtractItemQuantityStrategy(currentQuantity) {
        if (currentQuantity === 0) {
            return currentQuantity;
        }

        return currentQuantity - 1;
    }

    return (
        <div>
            <OrderHeader
                headerTitle="Selecione os items do seu pedido"
                stepNumber={1}
            />

            <p className={styles.shipingNote} style={{ fontWeight: '700' }}>
                * Pedido mínimo de R$ 30,00
            </p>

            <div className={styles.itemList}>
                {
                    items
                        .map(item => {
                            const totalSelected = getTotalSelected(item);

                            return (
                                <div
                                    key={`item-${item.id}`}
                                    className={styles.item}
                                >
                                    <div className={styles.itemInfo}>
                                        <p className={styles.itemName}>
                                            { item.name }
                                        </p>
                                        <p className={styles.itemPrice}>
                                            { Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(item.price) }
                                        </p>

                                        <p className={`${styles.itemTotal} ${ totalSelected === 0 ? '' : styles.itemTotalActive }`}>
                                            { totalSelected }
                                        </p>
                                    </div>

                                    <div className={styles.itemSelect}>
                                        <button
                                            className={styles.itemSelectButton}
                                            onClick={() => subtractItemQuantity(item)}
                                        >
                                            -
                                        </button>

                                        <button
                                            className={styles.itemSelectButton}
                                            onClick={() => addItemQuantity(item)}
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                            );
                        })
                }
            </div>

            <OrderResume
                subTotal={subTotal}
                shippingPrice={shippingPrice}
            >
                <button
                    onClick={() => setCurrentStep(OrderSteps.customerInfo)}
                    className={`${styles.confirmOrder} ${ subTotal >= MIN_ORDER_PRICE ? '' : styles.disabled }`}
                    disabled={ subTotal < MIN_ORDER_PRICE }
                >
                    CONTINUAR
                </button>
            </OrderResume>
        </div>
    )
}
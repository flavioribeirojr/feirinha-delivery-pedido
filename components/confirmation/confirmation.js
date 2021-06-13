import { faMapMarkedAlt, faPhoneSquareAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { calculateItemPrice, formatPrice } from '../../helpers/item-price-calculator';
import { formatOrder } from '../../metadata/order-message-formatter';
import { OrderSteps } from '../../metadata/order-steps';
import { OrderHeader } from "../order-header/order-header";
import { OrderResume } from '../order-resume/order-resume';
import { CardTypesImages, PaymentMethods, PaymentMethodsLabels } from '../payment-methods/payment-methods.constants';
import styles from './confirmation.module.css';

export function Confirmation({
    selectedItems,
    paymenMethod,
    cardType,
    customerInfo,
    subTotal,
    shippingPrice,
    setCurrentStep
}) {
    const paymentIsCard = paymenMethod === PaymentMethods.debit || paymenMethod === PaymentMethods.credit;

    function sendOrderToWhatsApp() {
        const orderText = formatOrder({
            cardType,
            customerInfo,
            paymenMethod,
            selectedItems,
            shippingPrice,
            subTotal
        });

        const whatsappURL = encodeURI(`https://api.whatsapp.com/send?phone=5598985636760&text=${orderText}`);
        window.open(whatsappURL, '_blank');
    }

    return (
        <div>
            <OrderHeader
                headerTitle="Revise seu Pedido"
                stepNumber={4}
            />

            <div className={styles.confirmation}>
                <h3 className={styles.confirmationTitle}>
                    Sua Cesta
                </h3>
                {
                    selectedItems.map((item, idx) => (
                        <div key={`${item.item.id}-${idx}`} className={styles.confirmationItem}>
                            <p className={styles.confirmationItemQuantity}>{ item.quantity }</p>
                            <p className={styles.confirmationItemText}>{ item.item.name }</p>
                            <p className={styles.confirmationItemPrice}>{ formatPrice(calculateItemPrice(item)) }</p>
                        </div>
                    ))
                }

                <h3 className={styles.confirmationTitle} style={{ marginTop: 30 }}>
                    Suas Informações
                </h3>

                <div className={styles.customerInfo}>
                    <FontAwesomeIcon className={`${styles.customerInfoIcon} ${styles.user}`} icon={faUser} />

                    <p className={styles.customerInfoText}>
                        { customerInfo.name }
                    </p>
                </div>
                <div className={styles.customerInfo}>
                    <FontAwesomeIcon className={`${styles.customerInfoIcon} ${styles.phone}`} icon={faPhoneSquareAlt} />

                    <p className={styles.customerInfoText}>
                        { customerInfo.phone }
                    </p>
                </div>
                <div className={styles.customerInfo}>
                    <FontAwesomeIcon className={`${styles.customerInfoIcon} ${styles.location}`} icon={faMapMarkedAlt} />

                    <p className={styles.customerInfoText}>
                        { customerInfo.streetAddress } { customerInfo.addressNumber }, { customerInfo.district }, { customerInfo.city }, { customerInfo.zipCode }
                    </p>
                </div>

                <h3 className={styles.confirmationTitle} style={{ marginTop: 30, marginBottom: 10 }}>
                    Pagamento
                </h3>
                <p className={styles.paymentMethod}>
                    {
                        paymentIsCard && (
                            <img src={CardTypesImages[cardType]} className={styles.paymentMethodCard} />
                        )
                    }
                    { PaymentMethodsLabels[paymenMethod] }
                </p>

                <button
                    onClick={() => setCurrentStep(OrderSteps.itemSelection)}
                    className={styles.reviewOrder}
                >
                    Editar meu Pedido
                </button>
            </div>

            <OrderResume
                subTotal={subTotal}
                shippingPrice={shippingPrice}
            >
                <button onClick={sendOrderToWhatsApp} className={styles.confirmButton}>
                    CONFIRMAR MEU PEDIDO
                </button>
            </OrderResume>
        </div>
    );
}
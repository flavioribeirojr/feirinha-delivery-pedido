import { OrderSteps } from "../../metadata/order-steps";
import { OrderHeader } from "../order-header/order-header";
import { PaymentMethods as PaymentMethodOptions, CardTypes } from './payment-methods.constants';
import styles from './payment-methods.module.css';

export function PaymentMethods({
    paymentMethod,
    setPaymentMethod,
    cardType,
    setCardType,
    setCurrentStep
}) {
    function goToNextStep() {
        if (!paymentMethod) {
            alert('Selecione uma forma de pagamento para continuar.');
            return;
        }

        const isCard = paymentMethod === PaymentMethodOptions.debit || paymentMethod === PaymentMethodOptions.credit;

        if (isCard && !cardType) {
            alert('Selecione a bandeira do seu cartão para continuar');
            return;
        }

        setCurrentStep(OrderSteps.confirmation);
    }

    return (
        <div>
            <OrderHeader
                headerTitle="Selecione sua forma de pagamento"
                stepNumber={3}
            />

            <div className={styles.paymentMethods}>
                <div className={`pretty p-default p-round ${styles.checkbox}`}>
                    <input
                        name="paymentMethod"
                        type="radio"
                        checked={paymentMethod === PaymentMethodOptions.money}
                        onChange={() => setPaymentMethod(PaymentMethodOptions.money)}
                    />
                    <div className={`state p-success ${styles.checkboxState}`}>
                        <label>À Vista</label>
                    </div>
                </div>

                <div className={`pretty p-default p-round ${styles.checkbox}`}>
                    <input
                        name="paymentMethod"
                        type="radio"
                        checked={paymentMethod === PaymentMethodOptions.pix}
                        onChange={() => setPaymentMethod(PaymentMethodOptions.pix)}
                    />
                    <div className={`state p-success ${styles.checkboxState}`}>
                        <label>Pix</label>
                    </div>
                </div>

                <div className={`pretty p-default p-round ${styles.checkbox}`}>
                    <input
                        name="paymentMethod"
                        type="radio"
                        checked={paymentMethod === PaymentMethodOptions.debit}
                        onChange={() => setPaymentMethod(PaymentMethodOptions.debit)}
                    />
                    <div className={`state p-success ${styles.checkboxState}`}>
                        <label>Cartão de Débito</label>
                    </div>
                </div>

                <div className={`pretty p-default p-round ${styles.checkbox}`}>
                    <input
                        name="paymentMethod"
                        type="radio"
                        checked={paymentMethod === PaymentMethodOptions.credit}
                        onChange={() => setPaymentMethod(PaymentMethodOptions.credit)}
                    />
                    <div className={`state p-success ${styles.checkboxState}`}>
                        <label>Cartão de Crédito</label>
                    </div>
                </div>

                {
                    (paymentMethod === PaymentMethodOptions.credit || paymentMethod === PaymentMethodOptions.debit) && (
                        <>
                            <h3 className={styles.selectTitle}>
                                Selecione a bandeira do seu cartão
                            </h3>

                            <div className={`pretty p-default p-round ${styles.paymentTypeCheckbox}`}>
                                <input
                                    name="paymentMethodType"
                                    type="radio"
                                    checked={cardType === CardTypes.masterCard}
                                    onChange={() => setCardType(CardTypes.masterCard)}
                                />
                                <div className={`state p-success`}>
                                    <label>
                                        <img src="/mastercard.png" alt="Amex" className={styles.cardTypeImage} />
                                        <p>
                                            Mastercard
                                        </p>
                                    </label>
                                </div>
                            </div>

                            <div className={`pretty p-default p-round ${styles.paymentTypeCheckbox}`}>
                                <input
                                    name="paymentMethodType"
                                    type="radio"
                                    checked={cardType === CardTypes.visa}
                                    onChange={() => setCardType(CardTypes.visa)}
                                />
                                <div className={`state p-success`}>
                                    <label>
                                        <img src="/visa.png" alt="Amex" className={styles.cardTypeImage} />
                                        <p>
                                            Visa
                                        </p>
                                    </label>
                                </div>
                            </div>

                            <div className={`pretty p-default p-round ${styles.paymentTypeCheckbox}`}>
                                <input
                                    name="paymentMethodType"
                                    type="radio"
                                    checked={cardType === CardTypes.hipercard}
                                    onChange={() => setCardType(CardTypes.hipercard)}
                                />
                                <div className={`state p-success`}>
                                    <label>
                                        <img src="/hipercard.png" alt="Amex" className={styles.cardTypeImage} />
                                        <p>
                                            Hipercard
                                        </p>
                                    </label>
                                </div>
                            </div>

                            <div className={`pretty p-default p-round ${styles.paymentTypeCheckbox}`}>
                                <input
                                    name="paymentMethodType"
                                    type="radio"
                                    checked={cardType === CardTypes.amex}
                                    onChange={() => setCardType(CardTypes.amex)}
                                />
                                <div className={`state p-success`}>
                                    <label>
                                        <img src="/amex.png" alt="Amex" className={styles.cardTypeImage} />
                                        <p>
                                            Amex
                                        </p>
                                    </label>
                                </div>
                            </div>

                            <div className={`pretty p-default p-round ${styles.paymentTypeCheckbox}`}>
                                <input
                                    name="paymentMethodType"
                                    type="radio"
                                    checked={cardType === CardTypes.elo}
                                    onChange={() => setCardType(CardTypes.elo)}
                                />
                                <div className={`state p-success`}>
                                    <label>
                                        <img src="/elo.png" alt="Amex" className={styles.cardTypeImage} />
                                        <p>
                                            Elo
                                        </p>
                                    </label>
                                </div>
                            </div>
                        </>
                    )
                }

                <button onClick={goToNextStep} className={styles.submit}>
                    Continuar
                </button>
            </div>
        </div>
    );
}
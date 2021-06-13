import { OrderSteps } from '../../order-steps'
import styles from './welcome.module.css'

export function Welcome({ setCurrentStep }) {
    return (
        <div className={styles.welcome}>
            <h3 className={styles.title}>
                Faça seu pedido sem complicação!
            </h3>
            <button
                className={styles.startButton}
                onClick={() => setCurrentStep(OrderSteps.itemSelection)}
            >
                Começar Minha Feirinha
            </button>
        </div>
    )
}
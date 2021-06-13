import { OrderSteps } from '../../metadata/order-steps'
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

            <p className={styles.note} style={{ marginBottom: 5, marginTop: 15 }}>
                * Pedidos realizados até terça-feira, às 23:00h
            </p>
            <p className={styles.note}>
                * Entregas toda quinta-feira
            </p>

            <p className={styles.footerNote}>
                * Valores variáveis conforme sazonalidade ou disponibilidade dos produtos
            </p>
        </div>
    )
}
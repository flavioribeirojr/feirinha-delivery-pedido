import Head from 'next/head'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import { Confirmation } from './components/confirmation/confirmation';
import { CustomerInfo } from './components/customer-info/customer-info';
import { ItemsSelection } from './components/items-selection/items-selection';
import { PaymentMethods } from './components/payment-methods/payment-methods';
import { Welcome } from './components/welcome/welcome'
import { OrderSteps } from './order-steps';

export default function Home() {
  const [ currentStep, setCurrentStep ] = useState(OrderSteps.welcome);
  const [ selectedItems, setSelectedItems ] = useState([]);
  const [ subTotal, setSubTotal ] = useState(0);
  const [ shippingPrice, setShippingPrice ] = useState(6);
  const [ customerInfo, setCustomerInfo ] = useState(null);
  const [ paymenMethod, setPaymentMethod ] = useState('');
  const [ cardType, setCardType ] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentStep]);

  return (
    <div className={styles.app}>
      <Head>
        <title>Minha Feirinha Delivery | Faça seu pedido</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <h1 className={styles.appTitle}>Minha Feirinha Delivery</h1>
      { currentStep === OrderSteps.welcome && <Welcome setCurrentStep={setCurrentStep} /> }
      { currentStep === OrderSteps.itemSelection && (
        <ItemsSelection
          selectedItems={selectedItems}
          setSelectedItems={setSelectedItems}
          setCurrentStep={setCurrentStep}
          subTotal={subTotal}
          setSubTotal={setSubTotal}
          shippingPrice={shippingPrice}
          setShippingPrice={setShippingPrice}
        />
      ) }
      { currentStep === OrderSteps.customerInfo &&
          <CustomerInfo
            setCurrentStep={setCurrentStep}
            setCustomerInfo={setCustomerInfo}
            customerInfo={customerInfo}
          />
        }
      { currentStep === OrderSteps.paymentMethod && (
        <PaymentMethods
          setCurrentStep={setCurrentStep}
          paymentMethod={paymenMethod}
          setPaymentMethod={setPaymentMethod}
          cardType={cardType}
          setCardType={setCardType}
        />
      )}
      { currentStep === OrderSteps.confirmation &&
        <Confirmation
          selectedItems={selectedItems}
          subTotal={subTotal}
          shippingPrice={shippingPrice}
          setCurrentStep={setCurrentStep}
          customerInfo={customerInfo}
          paymenMethod={paymenMethod}
          cardType={cardType}
        />
      }
    </div>
  );
}

import { PaymentMethodsLabels, CardTypesLabels, PaymentMethods } from '../components/payment-methods/payment-methods.constants';

export function formatOrder({
    customerInfo,
    selectedItems,
    paymenMethod,
    cardType,
    subTotal,
    shippingPrice
}) {
    const paymentIsCard = paymenMethod === PaymentMethods.debit || paymenMethod === PaymentMethods.credit;
    const selectedItemsRendered = selectedItems
        .map(item => `⚫️ (${item.quantity}) ${item.item.name}  *${ Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(getItemTotal(item)) }*`)
        .join('\n');

    return `
🥬 *Meu Pedido Feirinha Delivery* 🥬

*Nome:* ${customerInfo.name}
*Contato:* ${customerInfo.phone}
*Endereço:* ${customerInfo.streetAddress} ${customerInfo.addressNumber}, ${customerInfo.district}, ${customerInfo.city}, ${customerInfo.zipCode}
*Forma de Pagamento:* ${ PaymentMethodsLabels[paymenMethod] }${ paymentIsCard ? ` (${ CardTypesLabels[cardType] })` : ''  }

-----------------------------

*Itens do Pedido*

${selectedItemsRendered}

🛻 *Frete:* ${ Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(shippingPrice) }
💰 *Subtotal:* ${ Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(subTotal) }
💰 *Total:* ${ Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(subTotal + shippingPrice) }
    `;
}

function getItemTotal(item) {
    return item.quantity * item.item.price;
}
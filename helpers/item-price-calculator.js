export function calculateItemPrice(item) {
    return item.quantity * item.item.price;
}

export function formatPrice(price) {
    return Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price);
}

export function getFormattedItemQuantity(item) {
    if (item.item.type.match(/kg/i)) {
        return formatQuantityItemUsingWeight(item);
    }

    return `${item.quantity} UND`;
}

function formatQuantityItemUsingWeight(item) {
    const kiloToGram = item.item.increment * 1000;
    const total = kiloToGram * item.quantity;

    if (total > 1000) {
        const gramToKilo = total / 1000;

        return convertItemQuantityDotForComma(`${gramToKilo} kg`);
    }

    return convertItemQuantityDotForComma(`${total} g`);
}

function convertItemQuantityDotForComma(formattedQuantity) {
    return formattedQuantity.replace('.', ',');
}
export function calculateItemPrice(item) {
    return item.quantity * item.item.price;
}

export function formatPrice(price) {
    return Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price);
}
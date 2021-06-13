export const PaymentMethods = {
    pix: 'pix',
    money: 'money',
    debit: 'debit',
    credit: 'credit'
};

export const PaymentMethodsLabels = {
    [PaymentMethods.pix]: 'PIX',
    [PaymentMethods.money]: 'À vista',
    [PaymentMethods.debit]: 'Débito',
    [PaymentMethods.credit]: 'Crédito',
};

export const CardTypes = {
    visa: 'visa',
    masterCard: 'masterCard',
    elo: 'elo',
    amex: 'amex',
    hipercard: 'hipercard'
};

export const CardTypesLabels = {
    [CardTypes.visa]: 'VISA',
    [CardTypes.masterCard]: 'MasterCard',
    [CardTypes.elo]: 'Elo',
    [CardTypes.amex]: 'AMEX',
    [CardTypes.hipercard]: 'HiperCard',
};

export const CardTypesImages = {
    [CardTypes.visa]: '/visa.png',
    [CardTypes.masterCard]: '/mastercard.png',
    [CardTypes.elo]: '/elo.png',
    [CardTypes.amex]: '/amex.png',
    [CardTypes.hipercard]: '/hipercard.png',
};
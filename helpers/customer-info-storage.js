export function createCustomerInfoStorage() {
    function getFromCache() {
        const customerJSON = localStorage.getItem('customer_info');

        if (!customerJSON) {
            return null;
        }

        return JSON.parse(customerJSON);
    }

    function updateCache(customer) {
        localStorage.setItem('customer_info', JSON.stringify(customer));
    }

    return {
        getFromCache,
        updateCache
    };
}
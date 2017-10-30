export const REMOVE_ORDER = 'REMOVE_ORDER';

export const removeOrder = (productID) => {
    return {
        type: REMOVE_ORDER,
        payload: productID
    };
};
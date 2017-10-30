export const ADD_ORDER = 'ADD_ORDER';

export const addToOrder = (item) => {
    return {
        type: ADD_ORDER,
        payload: item
    };
};
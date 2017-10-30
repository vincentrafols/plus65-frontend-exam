import { ADD_ORDER } from '../Actions/ProductAction';
import { REMOVE_ORDER } from '../Actions/OrderAction';

const initialState = {
    orderList : []
};

export const ProductReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_ORDER:
            return {
                ...state,
                orderList:  [...state.orderList, action.payload]
            };
        case REMOVE_ORDER:
            return {
                ...state,
                orderList: state.orderList.filter(function( object ) {
                    return object.id !== action.payload;
                })
            };
        }

    return state;
};


import { REMOVE_ORDER } from '../Actions/OrderAction';

const initialState = {
    hello: 'Hello Work'
};

export const OrderReducer = (state=initialState, action) => {
    switch (action.type) {
        case REMOVE_ORDER: {
            const newState = {...state};
            newState.hello = action.payload;

            return newState;
        }
    }

    return state;
};


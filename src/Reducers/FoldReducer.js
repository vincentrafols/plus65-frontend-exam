import { FOLD } from '../Actions/FoldAction';

const initialState = {
    isFolded: false
};

export const FoldReducer = (state=initialState, action) => {
    switch (action.type) {
        case FOLD: {
            const newState = {...state};
            newState.isFolded = action.payload;

            return newState;
        }
    }

    return state;
};
import { InventoryReducer } from './InventoryReducer.js';
import { OrderReducer } from './OrderReducer.js';
import { ProductReducer } from './ProductReducer.js';
import { FoldReducer } from './FoldReducer.js';
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
    InventoryReducer: InventoryReducer,
    OrderReducer: OrderReducer,
    ProductReducer: ProductReducer,
    FoldReducer: FoldReducer,
    routing: routerReducer
});
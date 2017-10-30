import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ProdContainer from './ProdContainer';
import OrderList from '../Components/OrderList';
import InventoryContainer from './InventoryContainer';

class ProductsContainer extends Component {
    render() {
        return (
            <div className={ this.props.FoldReducer.isFolded ? 'catalogue-component catalogue-component__folded' : 'catalogue-component'}>
                <ProdContainer />
                <OrderList />
                <InventoryContainer />
            </div>
        );
    }
}

/**
 * Subscribe to Redux store updates.
 * Returns store states as props to BookingCon.
 *
 * @param  {Object} state - store's current state
 * @return {Object} - states that will become props of BookingCon
 */
const mapStateToProps = (state) => {
    return {
        ProductReducer: state.ProductReducer,
        FoldReducer: state.FoldReducer
    };
};

/**
 * Returns actions as props to BookingCon
 *
 * @param  {Object} dispatch
 * @return {Object} - actions that will become props of BookingCon
 */
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({}, dispatch);
};

/** Connect to redux store */
export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);

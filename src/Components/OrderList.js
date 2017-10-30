import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Orders from './Orders';

class OrderList extends React.Component {

    constructor() {
        super();

        this.getTotalPrice = this.getTotalPrice.bind(this);
    }

    getTotalPrice(orders) {
        let total = 0;
        orders.map((order) => {
            total += parseInt(order.price);
        });
        return total;
    }

    render() {
        return (
            <div className="component-part component-part--order">
                <h2 className="component-part__header">Your Orders</h2>
                <ul className="component-part__ul">
                    <Orders/>
                    <li className="component-part__li__total">
                        <strong>Total:</strong> <span className="component-part__li__total__price">${this.getTotalPrice(this.props.ProductReducer.orderList)}</span>
                    </li>
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ProductReducer: state.ProductReducer
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps) (OrderList);
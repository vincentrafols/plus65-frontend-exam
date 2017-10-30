import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { removeOrder } from '../Actions/OrderAction';

class Orders extends React.Component {

    constructor() {
        super();

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.removeOrder(event.target.id);
    }

    render() {
        const orderData = this.props.ProductReducer.orderList;
        return orderData.map((order, index) => {
            return (
                <li className="component-part__li" key={index}>
                    <span className="component-part__span">
                        <span>1</span>lbs {order.name} <button type="submit" className="component-part__li__button" id={order.id} onClick={this.handleSubmit}>×</button>
                    </span>
                    <span className="price">${order.price}</span>
                </li>
            );
        });
    }
}

const mapStateToProps = (state) => {
    return {
        ProductReducer: state.ProductReducer
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ removeOrder }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps) (Orders);

import React from 'react';
import _ from 'lodash';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { removeOrder } from '../Actions/OrderAction';

class Orders extends React.Component {

    constructor() {
        super();

        this.handleSubmit = this.handleSubmit.bind(this);
        this.combineDuplicate = this.combineDuplicate.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.removeOrder(event.target.id);
    }

    combineDuplicate(data) {
        const consolidatedProducts = _.chain(data).uniqBy('id').map(p => p.id).map(
            id =>
            {
                return {
                    id: id,
                    qty: _.chain(data).filter(p => p.id === id).sumBy('qty').value(),
                    price: _.chain(data).filter(p => p.id === id).sumBy('price').value(),
                    name: _.chain(data).filter(p => p.id === id).map(p => p.name).value()[0]
                };
            }

        ).value();

        return consolidatedProducts;
    }

    render() {
        const orderData = this.combineDuplicate(this.props.ProductReducer.orderList);
        return orderData.map((order, index) => {
            return (
                <li className="component-part__li" key={index}>
                    <span className="component-part__span">
                        <span>{order.qty}</span>lbs {order.name} <button type="submit" className="component-part__li__button" id={order.id} onClick={this.handleSubmit}>×</button>
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

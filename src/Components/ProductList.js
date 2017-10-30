import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addToOrder } from '../Actions/ProductAction';

class ProductList extends React.Component {

    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        this.setState({
            [target.id]: target.type === 'checkbox' ? target.checked : target.value,
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.addToOrder(this.props.productsData[event.target.id]);
    }

    render() {
        return this.props.productsData.map((product, index) => {
            return (
                <li className="component-part__li__menu-item" key={index}>
                    <img src={product.imgUrl} alt="Pacific Halibut" />
                    <h3 className="component-part__li__menu-item__name">
                        {product.name}
                        <span className="component-part__li__menu-item__price">${product.price}</span>
                    </h3>
                    <p className="component-part__li__menu-item__desc">{product.desc}</p>
                    <button
                        className="component-part__li__menu-item__button"
                        disabled={product.isSoldOut}
                        id={index}
                        onClick={this.handleSubmit}>
                        {product.isSoldOut ? 'Sold Out!' : 'Add to order'}
                    </button>
                </li>
            );
        });
    }
}

const mapStateToProps = (state) => {
    return {
        InventoryReducer: state.InventoryReducer
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ addToOrder }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps) (ProductList);
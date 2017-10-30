import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { removeProduct } from '../Actions/InventoryAction';

class InventoryList extends React.Component {

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
        this.props.removeProduct(event.target.id);
    }

    render() {
        return this.props.productsData.map((product, index) => {
            return (
                <form className="component-part component-part--form-list" key={index}>
                    <input className="component-part__input" type="text" onChange={this.handleChange} value={product.name} />
                    <input className="component-part__input" type="text" onChange={this.handleChange} value={product.price} />
                    <select className="component-part__select" onChange={this.handleChange} value={product.isSoldOut}>
                        <option value={false}>Fresh!</option>
                        <option value={true}>Sold Out!</option>
                    </select>
                    <textarea type="text" className="component-part__input component-part__textarea" onChange={this.handleChange} value={product.desc} ></textarea>
                    <input className="component-part__input component-part__url" type="text" onChange={this.handleChange} value={product.imgUrl} />
                    <button className="component-part__submit" type="submit" id={product.id} onClick={this.handleSubmit}>Remove Item</button>
                </form>
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
    return bindActionCreators({ removeProduct }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps) (InventoryList);
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addProduct } from '../Actions/InventoryAction';
import _isEmpty from 'lodash/isEmpty';

class InventoryForm extends React.Component {

    constructor() {
        super();
        this.state = {
            name: '',
            price: '',
            isSoldOut: false,
            desc: '',
            imgUrl: '',
        };

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
        this.props.addProduct(this.state);
        this.setState({
            name: '',
            price: '',
            isSoldOut: false,
            desc: '',
            imgUrl: '',
        });
    }

    render() {
        return (
            <form className="component-part component-part--form-list">
                <input
                    className="component-part__input"
                    type="text"
                    onChange={this.handleChange}
                    id="name" value={this.state.name}
                    placeholder="Product Name" />
                <input
                    className="component-part__input"
                    type="number"
                    min="1" max="999"
                    onChange={this.handleChange}
                    id="price"
                    value={this.state.price}
                    placeholder="Price" />
                <select
                    className="component-part__select"
                    onChange={this.handleChange}
                    id="isSoldOut"
                    value={this.state.isSoldOut}>
                    <option value={false}>Fresh!</option>
                    <option value={true}>Sold Out!</option>
                </select>
                <textarea
                    className="component-part__input component-part__textarea"
                    type="text"
                    onChange={this.handleChange}
                    id="desc" value={this.state.desc}
                    placeholder="Item Description">
                </textarea>
                <input
                    className="component-part__input component-part__url"
                    type="text"
                    onChange={this.handleChange}
                    id="imgUrl"
                    value={this.state.imgUrl}
                    placeholder="Image Url"/>
                <button
                    disabled={
                        _isEmpty(this.state.name) ||
                        _isEmpty(this.state.price) ||
                        _isEmpty(this.state.desc) ||
                        _isEmpty(this.state.imgUrl)
                    }
                    className="component-part__submit"
                    type="submit" onClick={this.handleSubmit}>
                    + Add Item
                </button>
            </form>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        InventoryReducer: state.InventoryReducer
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ addProduct }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps) (InventoryForm);

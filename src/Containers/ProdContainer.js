import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ProductList from '../Components/ProductList';

class ProdContainer extends React.Component {

    constructor() {
        super();
        this.state = {
            productDetails: {
                imgUrl: '//i.istockimg.com/file_thumbview_approve/36248396/5/stock-photo-36248396-blackened-cajun-sea-bass.jpg',
                name: 'Pacific Halibut',
                price: '$17.24',
                desc: 'Everyones favorite white fish. We will cut it to the size you need and ship it.',
                isSoldOut: true,
            },
        };

    }



    render() {
        return (
            <div className="component-part component-part--product">
                <h2 className="component-part__header">Catch of the Day</h2>
                <ul className="component-part__ul">
                    <ProductList productsData={this.props.InventoryReducer.productsData} />
                </ul>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        InventoryReducer: state.InventoryReducer
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps) (ProdContainer);

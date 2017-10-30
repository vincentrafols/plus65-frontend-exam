import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import GoogleLogin from 'react-google-login';
import InventoryList from '../Components/InventoryList';
import InventoryForm from '../Components/InventoryForm';
import { loadProducts } from '../Actions/InventoryAction';

class InventoryContainer extends React.Component {

    constructor() {
        super();
        this.state = {
            submitData: {
                name: '',
                price: '',
                isFresh: true,
                description: '',
                imgUrl: '',
            },
            isLoggedIn: false
        };

        this.successLogin = this.successLogin.bind(this);
        this.loginErrorHandler = this.loginErrorHandler.bind(this);

    }

    successLogin() {
        this.setState({isLoggedIn: true});
    }

    loginErrorHandler() {
        alert('Google Login Fail!');
    }

    render() {
        return (
            <div className="component-part component-part--inventory">
                <h2 className="component-part__header">Inventory</h2>

                <GoogleLogin
                    className={this.state.isLoggedIn ? 'hidden' : 'store-name-form__input'}
                    clientId="44194159370-08flddh8mt9oi2jc3ueu1mfq21ud1444.apps.googleusercontent.com"
                    buttonText="Google Login"
                    onSuccess={this.successLogin}
                    onFailure={this.loginErrorHandler}/>

                <InventoryList productsData={this.props.InventoryReducer.productsData} />

                { this.props.InventoryReducer.fetched && this.state.isLoggedIn ?
                    <InventoryForm/>
                    :
                    <button className={!this.state.isLoggedIn ? 'hidden' : 'store-name-form__input'} type="button" onClick={ () => this.props.loadProducts() }>Load Products</button>
                }
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
    return bindActionCreators({ loadProducts }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps) (InventoryContainer);

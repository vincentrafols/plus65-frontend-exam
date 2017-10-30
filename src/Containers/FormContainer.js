import React from 'react';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import store from '../store.js';

const history = syncHistoryWithStore(browserHistory, store);

class FormContainer extends React.Component {

    constructor() {
        super();
        this.state = {
            dummyText: 'worried-old-fashioned-cacti',
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        this.setState({
            [target.id]: target.type === 'checkbox' ? target.checked : target.value,
        });
    }

    render() {
        return (
            <form className={ this.props.FoldReducer.isFolded ? 'store-name-form store-name-form__folded' : 'store-name-form'}>
                <h2 className="store-name-form__header">Please Enter A Store</h2>
                <input className="store-name-form__text" type="text" required="" onChange={this.handleChange} id="dummyText" value={this.state.dummyText}/>
                <button className="store-name-form__input" type="button" disabled={this.state.dummyText === ''} onClick={() => { history.push('/store'); }}>
                    Submit
                </button>
            </form>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        FoldReducer: state.FoldReducer
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(FormContainer);

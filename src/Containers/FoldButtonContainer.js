import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { triggerFold } from '../Actions/FoldAction';

class FoldButtonContainer extends Component {
    render() {
        return (
            <button type="button" onClick={ () => this.props.triggerFold(!this.props.FoldReducer.isFolded) }>
                {this.props.FoldReducer.isFolded && 'un'}Fold
            </button>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        FoldReducer: state.FoldReducer
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ triggerFold }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps) (FoldButtonContainer);
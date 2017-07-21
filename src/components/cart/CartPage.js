import React from 'react';
import {connect} from 'react-redux';
import * as bookActions from '../../actions/bookActions';

class CartPage extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

  componentDidMount(){
    this.props.fetchCart();
  }

    render() {
        return (
            <div>
                <h1>Cart Page</h1>
                <table className="table">
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Price</th>
                  </tr>
                  </thead>
                  <tbody>
                  {this.props.items.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{item.title}</td>
                        <td>{item.price}</td>
                      </tr>
                    );
                  })}
                </tbody>
                </table>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
      items: state.cart
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
      fetchCart: () => dispatch(bookActions.fetchCart()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
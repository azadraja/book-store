import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import BookDetails from './BookDetails';
import * as bookActions from './../../actions/bookActions';

class BookDetailsPage extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    componentDidMount(){
        this.props.fetchBookById(this.props.params.id);
    }

    addInToCart(book){
      const item = {
        title: book.title,
        price: book.price
      };
      this.props.addToCart(item);
    }

    render() {
        return (
            <div>
                <h1>Book Details Page</h1>
                <BookDetails book={this.props.book} addToCart={this.addInToCart.bind(this)} />
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        book: state.book
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchBookById: bookId => dispatch(bookActions.fetchBookById(bookId)),
        addToCart: item => dispatch(bookActions.addToCart(item))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(BookDetailsPage);
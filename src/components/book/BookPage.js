import React from 'react';
import { connect } from 'react-redux';
import * as bookActions from '../../actions/bookActions';
import BookForm from './BookForm.js';
import { Link } from 'react-router';

class Book extends React.Component{
  constructor(props){
    // Pass props back to parent
    super(props);
  }

  // Submit book handler
  submitBook(input){
    this.props.createBook(input);
  }

render(){
    return(
      <div className="row">
        <div className="col-md-6">
          <h3>Books</h3>
          <table className="table">
            <thead>
              <tr>
                <th>Title</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
            {this.props.books.map((b, i) => <tr key={i}>
              <td>{b.title}</td>
              <td><Link to={`/books/${b.id}`}>View</Link></td>
            </tr> )}
            </tbody>
          </table>
        </div>
        <div className="col-md-6">
          <h3>New Book</h3>
          {/* Import and inject Book form */}
         <BookForm submitBook={this.submitBook.bind(this)} />
        </div>
      </div>
    )
  }
}

// Maps state from store to props
const mapStateToProps = (state, ownProps) => {
  return {
    // You can now say this.props.books
    books: state.books
  }
};

// Maps actions to props
const mapDispatchToProps = (dispatch) => {
  return {
  // You can now say this.props.createBook
    createBook: book => dispatch(bookActions.createBook(book))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Book);

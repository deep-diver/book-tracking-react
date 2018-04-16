import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import TimerMixin from 'react-timer-mixin';
import './Search.css';
import * as BooksAPI from './BooksAPI'

class Search extends Component {

  timeout = null

  state = {
    query: '',
    books: []
  }

  componentDidMount(){
    this.titleInput.focus();
  }

  updateQuery(query) {
    this.setState({query: query})
    // TimerMixin.clearTimeouts()

    TimerMixin.clearTimeout(this.timeout)
    this.timeout = TimerMixin.setTimeout(() => {
      if (query === '') {
        this.setState({books: []})
      }
      else {
        BooksAPI.search(query).then((books) => {
          this.setState({books: books})
          console.log(books)
        })
      }
    }, 300);
  }

  render() {
    return (
      <div>
        <div className="search-area">
          <Link to="/" className="back-button">back button</Link>
          <input
            className="search-text"
            type="text"
            ref={(input) => { this.titleInput = input; }}
            value={this.state.query}
            onChange={(event) => this.updateQuery(event.target.value)}/>
        </div>

        <div className="bookshelf">
          {this.state.books.length > 0 ? (
            <ol className="books-grid">
              {this.state.books.map((book) =>
                <li key={book.id}>
                  <div className="book">
                    <div className="book-top">
                      <div className="book-cover" style={{backgroundImage: `url(${book.imageLinks.thumbnail ? book.imageLinks.thumbnail : ''})`}}></div>
                      <div className="book-shelf-changer">
                        <select>
                          <option value="none" disabled>Move to...</option>
                          <option value="currentlyReading">Currently Reading</option>
                          <option value="wantToRead">Want to Read</option>
                          <option value="read">Read</option>
                          <option value="none" defaultValue>None</option>
                        </select>
                      </div>
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{book.authors ? (book.authors[0]) : ''}</div>
                  </div>
                </li>
              )}
            </ol>
          ) : ''}
        </div>
      </div>
    )
  }
}

export default Search;

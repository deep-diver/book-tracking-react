import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import TimerMixin from 'react-timer-mixin';
import './Search.css';
import * as BooksAPI from './BooksAPI'
import Book from './Book'

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
    let {query, books} = this.state
    let {booksInShelf, updateBookShelfHandler} = this.props

    return (
      <div>
        <div className="search-area">
          <Link to="/" className="back-button">back button</Link>
          <input
            className="search-text"
            type="text"
            ref={(input) => { this.titleInput = input; }}
            value={query}
            onChange={(event) => this.updateQuery(event.target.value)}/>
        </div>

        <div className="bookshelf">
          {books.length > 0 ? (
            <ol className="books-grid">
              {books.map((book) => {
                booksInShelf.forEach((bookInShelf) => {
                  if (bookInShelf.id === book.id) {
                    book.shelf = bookInShelf.shelf
                  }
                })

                return <Book key={book.id} book={book} updateBookShelfHandler={updateBookShelfHandler}/>
              })}
            </ol>
          ) : ''}
        </div>
      </div>
    )
  }
}

export default Search;

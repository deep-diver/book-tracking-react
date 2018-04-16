import React, { Component } from 'react';
import './Library.css';
import * as BooksAPI from './BooksAPI'

class Library extends Component {
  render() {
    let {title, books} = this.props

    return (
      <div className="bookshelf-wrapper">
        <h2>{title}</h2>
        <hr/>

        <div className="bookshelf">
          <ol className="books-grid">
            {books.map((book) =>
              <li key={book.id}>
                <div className="book">
                  <div className="book-top">
                  <div className="book-cover" style={{backgroundImage: `url(${book.imageLinks.thumbnail ? book.imageLinks.thumbnail : ''})`}}></div>
                    <div className="book-shelf-changer">
                      <select value={book.shelf}>
                        <option value="none" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                      </select>
                    </div>
                  </div>
                  <div className="book-title">{book.title}</div>
                  <div className="book-authors">{book.authors ? (book.authors[0]) : ''}</div>
                </div>
              </li>
            )}
          </ol>
        </div>
      </div>
    )
  }
}

export default Library;

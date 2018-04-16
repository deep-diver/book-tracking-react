import React, { Component } from 'react';
import './Library.css';
import Book from './Book.js'

class Library extends Component {
  render() {
    let {title, books, updateBookShelfHandler} = this.props

    return (
      <div className="bookshelf-wrapper">
        <h2>{title}</h2>
        <hr/>

        <div className="bookshelf">
          {books.length > 0 ? (
            <ol className="books-grid">
              {books.map((book) =>
                <Book key={book.id} book={book} updateBookShelfHandler={updateBookShelfHandler}/>
              )}
            </ol>
          ) : ''}
        </div>
      </div>
    )
  }
}

export default Library;

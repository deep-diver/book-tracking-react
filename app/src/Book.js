import React, {Component} from 'react'

class Book extends Component {
  render() {
    let {book, updateBookShelfHandler} = this.props;
    console.log(book)

    return (
      <li>
        <div className="book">
          <div className="book-top">
          <div className="book-cover" style={{backgroundImage: `url(${book.imageLinks.thumbnail ? book.imageLinks.thumbnail : ''})`}}></div>
            <div className="book-shelf-changer">
              <select
                value={book.shelf ? book.shelf : 'none'}
                onChange={(event) => updateBookShelfHandler(event.target.value, book)}>
                <option value="moveTo" disabled>Move to...</option>
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
    )
  }
}

export default Book

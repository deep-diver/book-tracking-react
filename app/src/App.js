import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Library from './Library';
import Search from './Search';
import './App.css';
import * as BooksAPI from './BooksAPI'

class App extends Component {
  state = {
    currentlyReadingBooks: [],
    wantToReadBooks: [],
    readBooks: []
  }

  componentDidMount(){
    this.refresh()
  }

  refresh() {
    BooksAPI.getAll().then((books) => {
      let tmp_currReadingBooks = []
      let tmp_wantToReadBooks = []
      let tmp_readBooks = []

      books.forEach((book) => {
        if (book.shelf === 'currentlyReading') {
          tmp_currReadingBooks.push(book)
        }
        else if (book.shelf === 'wantToRead') {
          tmp_wantToReadBooks.push(book)
        }
        else if (book.shelf === 'read') {
          tmp_readBooks.push(book)
        }
      })

      this.setState({
        currentlyReadingBooks: tmp_currReadingBooks,
        wantToReadBooks: tmp_wantToReadBooks,
        readBooks: tmp_readBooks
      })
    })
  }

  updateBookShelfHandler(newShelf, book) {
    if (book.shelf != newShelf) {
      BooksAPI.update(book, newShelf).then(() => {
        this.refresh()
      })
    }
  }

  render() {
    let {currentlyReadingBooks, wantToReadBooks, readBooks} = this.state

    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <div>
            <h1>MyReads</h1>
            <Library title="Currently Reading" books={currentlyReadingBooks} updateBookShelfHandler={this.updateBookShelfHandler.bind(this)}/>
            <Library title="Want to Read" books={wantToReadBooks} updateBookShelfHandler={this.updateBookShelfHandler.bind(this)}/>
            <Library title="Read" books={readBooks} updateBookShelfHandler={this.updateBookShelfHandler.bind(this)}/>
            <Link
              to="/add"
              className="add-button">
            +</Link>
          </div>
        )}/>

        <Route exact path="/add" render={() => (
          <Search
            booksInShelf={currentlyReadingBooks.concat(wantToReadBooks).concat(readBooks)}
            updateBookShelfHandler={this.updateBookShelfHandler.bind(this)}/>
        )}/>
      </div>
    )
  }
}

export default App;

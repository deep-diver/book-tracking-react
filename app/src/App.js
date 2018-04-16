import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Library from './Library';
import Search from './Search';
import './App.css';
import * as BooksAPI from './BooksAPI'

class App extends Component {
  state = {
    currReadingBooks: [],
    wantToReadBooks: [],
    readBooks: []
  }

  componentDidMount(){
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
        currReadingBooks: tmp_currReadingBooks,
        wantToReadBooks: tmp_wantToReadBooks,
        readBooks: tmp_readBooks
      })

      console.log(this.state)
    })
  }

  render() {
    let {currReadingBooks, wantToReadBooks, readBooks} = this.state

    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <div>
            <h1>MyReads</h1>
            <Library title="Currently Reading"  books={currReadingBooks}/>
            <Library title="Want to Read" books={wantToReadBooks}/>
            <Library title="Read" books={readBooks}/>
            <Link
              to="/add"
              className="add-button">
            +</Link>
          </div>
        )}/>

        <Route exact path="/add" component={Search}/>
      </div>
    )
  }
}

export default App;

import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Search.css';

class Search extends Component {
  render() {
    return (
      <div>
        <div className="search-area">
          <Link to="/" className="back-button">back button</Link>
          <input className="search-text" type="text"/>
        </div>
      </div>
    )
  }
}

export default Search;

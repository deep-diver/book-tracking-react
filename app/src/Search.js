import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Search.css';

class Search extends Component {

  componentDidMount(){
    this.titleInput.focus();
  }

  render() {
    return (
      <div>
        <div className="search-area">
          <Link to="/" className="back-button">back button</Link>
          <input
            className="search-text"
            type="text"
            ref={(input) => { this.titleInput = input; }} />
        </div>
      </div>
    )
  }
}

export default Search;

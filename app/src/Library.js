import React, { Component } from 'react';
import './Library.css';

class Library extends Component {
  render() {
    let {title} = this.props

    return (
      <div>
        <h2>{title}</h2>
        <hr/>
      </div>
    )
  }
}

export default Library;

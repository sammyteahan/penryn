import React from 'react';
import { Component } from 'react';


/**
* @class SearchBar
* @classdesc This component lives within our main app component
*/
export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {term: ''};
  }

  onInputChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }

  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }
}

import React, { Component } from 'react';
import './Search.css'
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
    };
  }

  handleInputChange = (e) => {
    this.setState({ username: e.target.value });
  };

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.handleSearch();
    }
  };

  handleSearch = () => {
    this.props.onSearch(this.state.username);
  };

  render() {
    return (
      <div className="search-container">
        <input
          className="search-input"
          type="text"
          placeholder="Enter GitHub username"
          value={this.state.username}
          onChange={this.handleInputChange}
          onKeyPress={this.handleKeyPress} // Listen for Enter key press
        />
        <button className="search-button" onClick={this.handleSearch}>
          Search
        </button>
      </div>
    );
  }
}

export default Search;

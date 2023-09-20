import React, { Component } from 'react';
import Search from './components/Search';
import UserProfile from './components/UserProfile';
import './App.css'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
  }

  fetchGitHubUser = async (username) => {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (response.ok) {
        const userData = await response.json();
        this.setState({ user: userData });
      } else {
        this.setState({ user: null });
      }
    } catch (error) {
      console.error('Error fetching GitHub user:', error);
    }
  };

  render() {
    return (
      <div className="container">
        <head>
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta
            name="description"
            content="GitHub User Search by Harshil Chovatiya - Find GitHub users and display their profiles."
          />
          <meta
            name="author"
            content="Harshil Chovatiya"
          />
          <title>
            GitHub User Search by Harshil Chovatiya
          </title>
          <meta name="robots" content="index, follow" />
          <meta name="keywords" content="GitHub, user search, profile" />
          <meta name="theme-color" content="#007bff" />
          <link rel="canonical" href="https://harshilchovatiya.github.io/github-user" />
          <meta
            name="og:title"
            property="og:title"
            content="GitHub User Search by Harshil Chovatiya"
          />
          <meta
            name="og:description"
            property="og:description"
            content="Find GitHub users and display their profiles."
          />
          <meta
            name="og:image"
            property="og:image"
            content="https://example.com/og-image.jpg"
          />
          <meta name="og:url" property="og:url" content="https://harshilchovatiya.github.io" />
          <meta
            name="og:site_name"
            property="og:site_name"
            content="GitHub User Search"
          />
        </head>
        <h1>GitHub User Search</h1>
        <Search onSearch={this.fetchGitHubUser} />
        {this.state.user && <UserProfile user={this.state.user} />}
      </div>
    );
  }
}

export default App;

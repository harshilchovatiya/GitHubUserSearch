import React, { Component } from 'react';
import './UserProfile.css'
class UserProfile extends Component {
  render() {
    const { user } = this.props;
    return (
      <div className="user-profile">
        <h2>{user.name}</h2>
        <img src={user.avatar_url} alt={user.login} width="150" />
        <p>Username: {user.login}</p>
        <p>Followers: {user.followers}</p>
        <p>Following: {user.following}</p>
        <p>Public Repos: {user.public_repos}</p>
      </div>
    );
  }
}

export default UserProfile;

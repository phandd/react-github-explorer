import React from 'react'
import { factory } from '../../../data-factory/data-factory';
import UserHome from '../../presentationals/UserHome/UserHome';
import { LOAD_STATUS } from '../../../utils/load-status';

export default class UserPage extends React.Component{
  constructor() {
    super();
    this.state = {
      profile: {},
      popularRepos: [],
      loadStatus: LOAD_STATUS.loading
    };
    this.onRetryLoadUserInformation = this.onRetryLoadUserInformation.bind(this);
  }
  render() {
    return (
      <div>
        <UserHome {...this.state} onRetryLoadUserInformation={this.onRetryLoadUserInformation}/>
      </div>
    );
  };

  onRetryLoadUserInformation(e, username) { //Because the first parameter for event handler will always be the event object itself
    this.loadUserInformation(username);
  }

  loadUserInformation(username) {
    this.setState({ loadStatus: LOAD_STATUS.loading });
    if (username) {
      return factory.getUserProfile(username)
        .then(profile => { this.setState({ profile }) })
        .then(() => factory.getUserPopularRepos(username))
        .then(popularRepos => this.setState({ popularRepos }))
        .then(() => this.setState({ loadStatus: LOAD_STATUS.done }))
        .catch(() => this.setState({ loadStatus: LOAD_STATUS.fail }));
    }

    return factory.getRandomUser()
      .then(data => data.items[0])
      .then(user => {
        return factory.getUserProfile(user.login)
          .then(profile => { this.setState({ profile }) })
          .then(() => factory.getUserPopularRepos(user.login))
          .then(repos => this.setState({ popularRepos: repos.items }))
      })
      .then(() => this.setState({ loadStatus: LOAD_STATUS.done }))
      .catch(() => this.setState({ loadStatus: LOAD_STATUS.fail }));
  }


  componentDidMount() {
    this.loadUserInformation(this.props.match.params.username);
  }
}
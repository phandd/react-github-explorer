import React from 'react';
import { factory } from '../../../data-factory/data-factory';
import Nav from '../../presentationals/Nav/Nav';
import { LOAD_STATUS } from '../../../utils/load-status';

export default class NavMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      query: '',
      loadStatus: LOAD_STATUS.loading
    };
    this.searchUser = this.searchUser.bind(this);
  }

  render() {
    return (
      <div>
        <Nav {...this.state} onSearchUser={this.searchUser} onUserClick={this.props.onUserClick} onSearchQueryChanged={e => this.setState({ query: e.target.value })}/>
      </div>
    )
  }

  searchUser() {
    this.setState({ loadStatus: LOAD_STATUS.loading });

    factory.searchUser(this.state.query || '')
      .then(data => this.setState({ users: data.users }))
      .then(() => this.setState({ loadStatus: LOAD_STATUS.done }))
      .catch(() => this.setState({ loadStatus: LOAD_STATUS.fail }))
  }

  componentDidMount() {
    factory.searchUser()
      .then(result => result.users.slice(0, 15))
      .then(users => this.setState({ users }))
      .then(() => this.setState({ loadStatus: LOAD_STATUS.done }))
      .catch(() => this.setState({ loadStatus: LOAD_STATUS.fail }))
  }
}
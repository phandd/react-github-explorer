import React from 'react';
import { factory } from '../../../data-factory/data-factory';
import RepoListContainer from '../../presentationals/Repository/RepoListContainer/RepoListContainer'

export default class UserRepoList extends React.Component {
  constructor() {
    super();
    this.state = {
      repos: [],
      searchQuery: ''
    };

    this.search = this.search.bind(this);
  }

  componentDidMount() {
    factory.getUserRepoList(this.props.match.params.username)
      .then(repos => {console.log(repos); this.setState({ repos })})
  }

  search() {
    factory.searchUserRepo(this.props.match.params.username, this.state.searchQuery)
      .then(data => this.setState({ repos: data.items }));
  }

  render() {
    return(
      <div>
        <RepoListContainer
          repos={this.state.repos}
          onSearchChange={e => this.setState({ searchQuery: e.target.value })}
          onSearch={this.search}
        />
      </div>
    )
  }
}
import React from 'react';
import { factory } from '../../../data-factory/data-factory';
import RepoListContainer from '../../presentationals/Repository/RepoListContainer/RepoListContainer';
import { LOAD_STATUS } from '../../../utils/load-status';

export default class UserRepoList extends React.Component {
  constructor() {
    super();
    this.state = {
      repos: [],
      searchQuery: '',
      loadStatus: LOAD_STATUS.loading
    };

    this.search = this.search.bind(this);
    this.fetchRepoList = this.fetchRepoList.bind(this);
  }

  componentDidMount() {
    this.fetchRepoList();
  }

  fetchRepoList() {
    this.setState({ loadStatus: LOAD_STATUS.loading });

    factory.getUserRepoList(this.props.match.params.username)
      .then(repos => {
        this.setState({ repos, loadStatus: LOAD_STATUS.done })
      })
      .catch(() => {
        this.setState({ loadStatus:LOAD_STATUS.fail })
      })
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
          loadStatus={this.state.loadStatus}
          onRetryFetchingRepoList={this.fetchRepoList}
        />
      </div>
    )
  }
}
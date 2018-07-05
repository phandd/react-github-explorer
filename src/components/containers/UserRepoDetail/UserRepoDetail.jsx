import React from 'react';
import { factory } from '../../../data-factory/data-factory';
import RepoDetail from '../../presentationals/Repository/RepoDetail/RepoDetail';
import { LOAD_STATUS } from '../../../utils/load-status';

export default class UserRepoDetail extends React.Component {
  constructor() {
    super();
    this.state = {
      repo: {},
      readme: '',
      dirs: [],
      contributors: [],
      loadStatus: LOAD_STATUS.loading
    };
    this.fetchRepoData = this.fetchRepoData.bind(this);
  }

  render() {
    //TODO For now the repo pass in RepoDetail is the repo data from RepoList by the Link state (src/components/presentationals/Repository/RepoItem/RepoItem.jsx). If user access the link directly from address bar, this property will not available. We have to assure when the repo not available from Link component, we will fetch it from API. (done)
    return(
      <div>
        <RepoDetail {...this.state} onRetryFetchingRepoData={this.fetchRepoData}/>
      </div>
    )
  };

  fetchRepoData() {
    this.setState({ loadStatus: LOAD_STATUS.loading });
    let data = {};

    return Promise.all([
      this.state.repo.id ? Promise.resolve() : factory.getRepoDetail(this.props.match.params.username, this.props.match.params.repoName) // Check repo id to decide to use repo data (already available) from Link component or (not available) fetch data from API.
        .then(repo => {repo && this.setState({ repo })}),

      factory.getRepoReadme(this.props.match.params.username, this.props.match.params.repoName)
        .then(response => response.content && (data.readme = window.atob(response.content.replace(/\s/g, '')))),

      factory.getRepoDirs(this.props.match.params.username, this.props.match.params.repoName)
        .then(dirs => dirs && (data.dirs = dirs)),

      factory.getRepoContributors(this.props.match.params.username, this.props.match.params.repoName)
        .then(contributors => contributors && (data.contributors = contributors)),

      factory.getRepoLanguages(this.props.match.params.username, this.props.match.params.repoName)
        .then(languages => languages && (data.languages = languages))
    ])
      .then(() => {
        this.setState({ ...data, loadStatus: LOAD_STATUS.done })
      })
      .catch(() => this.setState({ loadStatus: LOAD_STATUS.fail }))
  }

  componentDidMount() {
    if (this.props.location && this.props.location.state) {
      this.setState({ repo: this.props.location.state.repo })
    }

    this.fetchRepoData();
  }
}

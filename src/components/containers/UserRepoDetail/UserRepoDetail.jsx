import React from 'react';
import { factory } from '../../../data-factory/data-factory';
import RepoDetail from '../../presentationals/Repository/RepoDetail/RepoDetail';

export default class UserRepoDetail extends React.Component {
  constructor() {
    super();
    this.state = {
      repo: {}
    }
  }

  render() {
    return(
      <div>
        <RepoDetail {...this.state.repo}/>
      </div>
    )
  };

  componentDidMount() {
    factory.getRepoDetail(this.props.match.params.username, this.props.match.params.repoName)
      .then(repo => this.setState({ repo }))
  }
}

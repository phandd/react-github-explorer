import React from 'react';
import { factory } from '../../../data-factory/data-factory';
import RepoDetail from '../../presentationals/Repository/RepoDetail/RepoDetail';

export default class UserRepoDetail extends React.Component {
  constructor() {
    super();
    this.state = {
      repo: {},
      readme: '',
      dirs: [],
      contributors: []
    }
  }

  render() {
    return(
      <div>
        <RepoDetail {...this.state}/>
      </div>
    )
  };

  componentDidMount() {
    factory.getRepoDetail(this.props.match.params.username, this.props.match.params.repoName)
      .then(repo => {console.log(repo); this.setState({ repo })});

    factory.getRepoReadme(this.props.match.params.username, this.props.match.params.repoName)
      .then(data => {console.log(window.atob(data.content)); this.setState({ readme: window.atob(data.content.replace(/\s/g, ''))  })});

    factory.getRepoDirs(this.props.match.params.username, this.props.match.params.repoName)
      .then(dirs => {console.log(dirs); this.setState({ dirs })});

    factory.getRepoContributors(this.props.match.params.username, this.props.match.params.repoName)
      .then(contributors => {console.log(contributors); this.setState({ contributors })});

    factory.getRepoLanguages(this.props.match.params.username, this.props.match.params.repoName)
      .then(languages => {console.log(languages); this.setState({ languages })});
  }
}

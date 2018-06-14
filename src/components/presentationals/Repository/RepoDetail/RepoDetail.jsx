import React from 'react';
import RepoContent from '../RepoContent/RepoContent';
import Readme from './Readme';

const TABS = {
  readme: 'README',
  files: 'FILES',
  contributors: 'CONTRIBUTORS',
  languages: 'LANGUAGES'
};

export default class RepoDetail extends React.Component {
  constructor() {
    super();
    this.state = {
      activeTab: TABS.readme
    }
  }

  switchTab(tab) {
    this.setState({
      activeTab: tab
    })
  }

  render() {
    return(
      <div className='repo-detail'>
        <RepoContent {...this.props.repo}/>
        <div>
          <div className='repo-tab-menu'>
            <div className={'repo-tab-menu-item ' + (this.state.activeTab === TABS.readme ? 'repo-tab-menu-active' : '')} onClick={() => this.switchTab(TABS.readme)}>
              <span>readme</span>
            </div>
            <div className={'repo-tab-menu-item ' + (this.state.activeTab === TABS.files ? 'repo-tab-menu-active' : '')} onClick={() => this.switchTab(TABS.files)}>
              <span>files & directories</span>
            </div>
            <div className={'repo-tab-menu-item ' + (this.state.activeTab === TABS.contributors ? 'repo-tab-menu-active' : '')} onClick={() => this.switchTab(TABS.contributors)}>
              <span>contributors</span>
            </div>
            <div className={'repo-tab-menu-item ' + (this.state.activeTab === TABS.languages ? 'repo-tab-menu-active' : '')} onClick={() => this.switchTab(TABS.languages)}>
              <span>languagues</span>
            </div>
          </div>
          <div>
            <Readme readme={this.props.readme}/>
          </div>
        </div>
      </div>
    );
  }
}
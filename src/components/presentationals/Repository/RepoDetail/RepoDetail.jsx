import React from 'react';
import RepoContent from '../RepoContent/RepoContent';
import Readme from './Readme';
import Dirs from './Dirs';

const TABS = {
  readme: 'README',
  dirs: 'DIRS',
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
    let renderedContent;

    switch (this.state.activeTab) {
      case TABS.readme:
        renderedContent = <Readme readme={this.props.readme}/>;
        break;
      case TABS.dirs:
        renderedContent = <Dirs dirs={this.props.dirs}/>;
        break;
    }

    return(
      <div className='repo-detail'>
        <RepoContent {...this.props.repo}/>
        <div>
          <div className='repo-tab-menu'>
            <div
              className={'repo-tab-menu-item ' + (this.state.activeTab === TABS.readme ? 'repo-tab-menu-active' : '')}
              onClick={() => this.switchTab(TABS.readme)}>
              <span>readme</span>
            </div>
            <div className={'repo-tab-menu-item ' + (this.state.activeTab === TABS.dirs ? 'repo-tab-menu-active' : '')}
                 onClick={() => this.switchTab(TABS.dirs)}>
              <span>files & directories</span>
            </div>
            <div
              className={'repo-tab-menu-item ' + (this.state.activeTab === TABS.contributors ? 'repo-tab-menu-active' : '')}
              onClick={() => this.switchTab(TABS.contributors)}>
              <span>contributors</span>
            </div>
            <div
              className={'repo-tab-menu-item ' + (this.state.activeTab === TABS.languages ? 'repo-tab-menu-active' : '')}
              onClick={() => this.switchTab(TABS.languages)}>
              <span>languagues</span>
            </div>
          </div>
          <div>
            {renderedContent}
          </div>
        </div>
      </div>
    );
  }
}
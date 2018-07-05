import React from 'react';
import { LOAD_STATUS } from '../../../../utils/load-status';
import RepoContent from '../RepoContent/RepoContent';
import Readme from './Readme';
import Dirs from './Dirs';
import Contributors from './Contributors';
import Languages from './Languages';
import Offline from '../../Offline/Offline';
import LoadingBlock from '../../LoadingBlock/LoadingBlock'

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

    if (this.props.loadStatus === LOAD_STATUS.done) {
      switch (this.state.activeTab) {
        case TABS.readme:
          renderedContent = <Readme readme={this.props.readme}/>;
          break;
        case TABS.dirs:
          renderedContent = <Dirs dirs={this.props.dirs}/>;
          break;
        case TABS.contributors:
          renderedContent = <Contributors contributors={this.props.contributors}/>;
          break;
        case TABS.languages:
          renderedContent = <Languages languages={this.props.languages}/>;
      }
    }

    if (this.props.loadStatus === LOAD_STATUS.fail) {
      renderedContent =  <Offline onRetry={this.props.onRetryFetchingRepoData} />;
    }

    return(
      <div>
        <LoadingBlock status={this.props.loadStatus}/>
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
            <div className='repo-detail-content'>
              {renderedContent}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
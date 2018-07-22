import React from 'react';
import ProfileOverview from '../Profile/ProfileOverview/ProfileOverview';
import RepoList from '../Repository/RepoList/RepoList';
import LoadingBlock from '../LoadingBlock/LoadingBlock';
import Offline from '../Offline/Offline';
import { LOAD_STATUS } from '../../../utils/load-status';

export default (props) => {
  let renderedContent;

  if (props.loadStatus === LOAD_STATUS.fail) {
    renderedContent = <Offline onRetry={props.onRetryLoadUserInformation}/>
  }

  if (props.loadStatus === LOAD_STATUS.done) {
    renderedContent = <RepoList repos={props.popularRepos}/>
  }

  return(
    <div className='user-home'>
      <LoadingBlock status={props.loadStatus}/>
      <div>
        <ProfileOverview {...props.profile}/>
      </div>
      <div className='popular-repos'>
        <p>popular repositories</p>
        {renderedContent}
      </div>
    </div>
  )
}
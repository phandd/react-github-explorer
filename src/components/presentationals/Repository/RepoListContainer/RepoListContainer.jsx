import React from 'react';
import RepoList from '../RepoList/RepoList';
import RepoSearch from '../RepoSearch/RepoSearch';
import { LOAD_STATUS } from '../../../../utils/load-status';
import Offline from '../../Offline/Offline';
import LoadingBlock from '../../LoadingBlock/LoadingBlock';
import LoadingSpinner from '../../LoadingSpinner/LoadingSpinner';


export default (props) => {
  let renderedContent;

  if (props.searchStatus === LOAD_STATUS.fail && props.loadStatus === LOAD_STATUS.fail) {
    renderedContent = <Offline onRetry={props.onSearch}/>
  } else if (props.loadStatus === LOAD_STATUS.fail) {
    renderedContent = <Offline onRetry={props.onRetryFetchingRepoList}/>
  }

  if (props.loadStatus === LOAD_STATUS.done && props.searchStatus === LOAD_STATUS.done) {
    renderedContent = <RepoList repos={props.repos}/>
  }

  if (props.searchStatus === LOAD_STATUS.loading) {
    renderedContent = <div className='repo-searching-spinner'><LoadingSpinner /></div>
  }


  return(
    <div>
      <LoadingBlock status={props.loadStatus}/>
      <div className='repo-list-container'>
        <RepoSearch className='repo-search-component' onSearchChange={props.onSearchChange} onSearch={props.onSearch}/>
        {renderedContent}
      </div>
    </div>
  )
}
import React from 'react';
import RepoList from '../RepoList/RepoList';
import RepoSearch from '../RepoSearch/RepoSearch'

export default (props) => {
  return(
    <div className='repo-list-container'>
      <RepoSearch className='repo-search-component' onSearchChange={props.onSearchChange} onSearch={props.onSearch}/>
      <RepoList repos={props.repos}/>
    </div>
  )
}
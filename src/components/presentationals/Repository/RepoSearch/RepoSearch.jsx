import React from 'react';
import SearchInput from '../../SearchInput/SearchInput';

export default (props) => {
  return (
    <div className='repo-search'>
      <SearchInput placeHolder={'Find a repository...'} onSearchChange={props.onSearchChange}/>
      <div className='repo-search-button' onClick={props.onSearch}>
        <span>Search</span>
      </div>
    </div>
  )
}
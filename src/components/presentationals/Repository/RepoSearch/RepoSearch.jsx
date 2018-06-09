import React from 'react';

export default (props) => {
  return (
    <div className='repo-search'>
      <div className='repo-search-input'>
        <input type="text" placeholder='Find a repository...' onChange={props.onSearchChange}/>
      </div>
      <div className='repo-search-button' onClick={props.onSearch}>
        <span>Search</span>
      </div>
    </div>
  )
}
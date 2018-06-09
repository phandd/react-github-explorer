import React from 'react';

export default (props) => {
  return(
    <div className='profile'>
      <div className='profile-avatar'>
        <img className='img' src={props.avatar_url} alt=''/>
      </div>
      <div className='profile-data'>
        <div>
          <h3>{props.name || props.login}</h3>
        </div>
        <div>
          <span>{props.login}</span>
        </div>
      </div>
    </div>
  )
}
import React from 'react';

export default (props) => {
  return(
    <div className='profile'>
      <div className='profile-avatar'>
        <img className='img' src={props.profile.avatar_url} alt=''/>
      </div>
      <div className='profile-data'>
        <div>
          <h3>{props.profile.name || props.profile.login}</h3>
        </div>
        <div>
          <span>{props.profile.login}</span>
        </div>
      </div>
    </div>
  )
}
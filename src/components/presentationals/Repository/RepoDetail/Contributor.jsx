import React from 'react';

export default (props) => {
  return(
    <div className='repo-contributor'>
        <div className='repo-contributor-avatar'>
        <img src={props.avatar_url} alt="avatar"/>
      </div>
      <div className='repo-contributor-data'>
        <span>{props.login}</span>
        <span>{props.contributions} {props.contributions === 1 ? 'contribution' : 'contributions'}</span>
      </div>
    </div>
  )
}
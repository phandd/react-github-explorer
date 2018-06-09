import React from 'react';
import moment from 'moment';

export default (props) => {
  return(
    <div className='repo-item'>
      <span className='repo-name'>{props.repo.name}</span>
      <span className='repo-description'>{props.repo.description}</span>
      <span className='repo-update'>Updated {moment(props.repo.updated_at).fromNow()}</span>
      <span className='repo-language'>{props.repo.language}</span>
    </div>
  )
}
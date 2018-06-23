import React from 'react';
import moment from 'moment';

export default (props) => {
  return(
    <div className='repo-content'>
      <span className='repo-name'>{props.name}</span>
      <span className='repo-description'>{props.description}</span>
      <span className='repo-update'>Updated {moment(props.updated_at).fromNow()}</span>
      <div className='repo-info'>
        <div className='repo-language'>
          <span>{props.lang}</span>
        </div>
        <div className='repo-stats'>
          <div>
            <i className='fa fa-eye'></i>
            <span>{props.watchers}</span>
          </div>
          <div>
            <i className='fa fa-star'></i>
            <span>{props.stargazers_count}</span>
          </div>
          <div>
            <i className='fa fa-code-fork'></i>
            <span>{props.forks_count}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
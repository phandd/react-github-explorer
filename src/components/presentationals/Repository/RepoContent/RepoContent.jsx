import React from 'react';
import moment from 'moment';
import TextHolder from '../../TextHolder/TextHolder'

export default (props) => {
  return(
    <div className='repo-content'>
      <span className='repo-name'><TextHolder width={150} height={23}>{props.name}</TextHolder></span>
      <span className='repo-description'><TextHolder width={260} height={21}>{props.description}</TextHolder></span>
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
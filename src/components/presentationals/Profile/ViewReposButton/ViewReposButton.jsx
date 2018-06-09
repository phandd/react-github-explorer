import React from 'react';
import { ROUTES } from '../../../../utils/routes';
import { Link } from 'react-router-dom';

export default (props) => {
  return(
    <div className='view-repos-button'>
      <div className='button'>
        <Link to={`/user/${props.login}/repos`}>View Repositories</Link>
      </div>
    </div>
  )
}
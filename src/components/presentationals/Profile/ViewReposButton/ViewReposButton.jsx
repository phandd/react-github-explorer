import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {
  return(
    <div className='view-repos-button'>
      <div className='button'>
        {props.login && <Link to={`${process.env.PUBLIC_URL}/user/${props.login}/repos`}>View Repositories</Link>}
      </div>
    </div>
  )
}
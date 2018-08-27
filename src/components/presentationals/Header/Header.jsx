import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../utils/routes';

export default (props) => {
  return (
    <div className='header-container'>
      <div className='nav-toggler' onClick={props.onToggleNavbar}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <Link to={ROUTES.HOME_PATH}>
        <div className='brand-logo'></div>
      </Link>
    </div>
  )
}
import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../utils/routes';

export default () => {
  return (
    <div className='header-container'>
      <Link to={ROUTES.HOME_PATH}>
        <div className='brand-logo'></div>
      </Link>
    </div>
  )
}
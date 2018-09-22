import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {
  return(
    <div className='user-item'>
      <div className='user-item-avatar'>
        <img src={props.avatarUrl} alt="avatar"/>
      </div>
      <div className='user-item-data'>
        <Link to={ `${process.env.PUBLIC_URL}/user/${props.login}` } onClick={props.onUserClick}>{props.name}</Link>
        <span>{props.additional}</span>
      </div>
    </div>
  )
}

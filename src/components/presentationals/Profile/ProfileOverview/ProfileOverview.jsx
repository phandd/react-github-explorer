import React from 'react';
import ProfileInfo from '../ProfileInfo/ProfileInfo';
import ProfileStats from '../ProfileStats/ProfileStats'
import ViewReposButton from '../ViewReposButton/ViewReposButton';

export default (props) => {
  return(
    <div className='profile-overview'>
      <ProfileInfo {...props}/>
      <ProfileStats {...props}/>
      <ViewReposButton {...props}/>
    </div>
  )
}
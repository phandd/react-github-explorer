import React from 'react';

export default (props) => {
  return(
    <div className='profile-stats'>
      <div>
        <span>{props.profile.followers}</span>
        <span>Followers</span>
      </div>
      <div>
        <span>{props.profile.public_repos}</span>
        <span>Public repos</span>
      </div>
      <div>
        <span>{props.profile.following}</span>
        <span>Following</span>
      </div>
    </div>
  );
}
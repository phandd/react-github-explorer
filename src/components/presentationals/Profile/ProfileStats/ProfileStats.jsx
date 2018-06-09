import React from 'react';

export default (props) => {
  return(
    <div className='profile-stats'>
      <div>
        <span>{props.followers}</span>
        <span>Followers</span>
      </div>
      <div>
        <span>{props.public_repos}</span>
        <span>Public repos</span>
      </div>
      <div>
        <span>{props.following}</span>
        <span>Following</span>
      </div>
    </div>
  );
}
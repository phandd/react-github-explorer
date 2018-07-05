import React from 'react';
import TextHolder from '../../TextHolder/TextHolder';

export default (props) => {
  return(
    <div className='profile-stats'>
      <div>
        <span><TextHolder width={50} height={30}>{props.followers}</TextHolder></span>
        <span>Followers</span>
      </div>
      <div>
        <span><TextHolder width={50} height={30}>{props.public_repos}</TextHolder></span>
        <span>Public repos</span>
      </div>
      <div>
        <span><TextHolder width={50} height={30}>{props.following}</TextHolder></span>
        <span>Following</span>
      </div>
    </div>
  );
}
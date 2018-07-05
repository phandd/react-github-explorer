import React from 'react';
import TextHolder from '../../TextHolder/TextHolder'

export default (props) => {
  return(
    <div className='profile'>
      <div className='profile-avatar'>
        <img className='img' src={props.avatar_url} alt=''/>
      </div>
      <div className='profile-data'>
        <div>
          <h3><TextHolder width={130} height={18}>{props.name || props.login}</TextHolder></h3>
        </div>
        <div>
          <span><TextHolder width={56} height={12}>{props.login}</TextHolder></span>
        </div>
      </div>
    </div>
  )
}
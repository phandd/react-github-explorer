import React from 'react';

export default (props) => {
  return(
    <div className='offline'>
      <span>You're offline</span>
      <span className='offline-retry-button' onClick={props.onRetry}>Try again</span>
    </div>
  )
}
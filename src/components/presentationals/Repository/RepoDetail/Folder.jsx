import React from 'react';

export default (props) => {
  return(
    <div className='repo-dir-folder'>
      <div className='folder-icon'>
        <i className='fa fa-folder'></i>
      </div>
      <div className='folder-data'>
        <div>{props.name}</div>
      </div>
    </div>
  )
}
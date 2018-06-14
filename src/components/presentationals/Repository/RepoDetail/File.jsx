import React from 'react';
import filesize from 'filesize';

export default (props) => {
  return(
    <div className='repo-dir-file'>
      <div className='repo-dir-file-icon'>
        <i className='fa fa-file-text-o'></i>
      </div>
      <div>
        <div className='repo-dir-file-data-name'>{props.name}</div>
        <div className='repo-dir-file-data-size'>{filesize(props.size)}</div>
      </div>
    </div>
  )
}
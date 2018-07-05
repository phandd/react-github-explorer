import React from 'react';
import classname from 'classname';
import { LOAD_STATUS } from '../../../utils/load-status';

export default (props) => {
  return(
    <div className='loading-block' >
      <div className={classname({
        loading: props.status === LOAD_STATUS.loading,
        fail: props.status === LOAD_STATUS.fail
      })}/>
    </div>
  );
}
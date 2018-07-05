import React from 'react';

export default (props) => {
  return (
    <div>
      {props.children === undefined ? <div className='text-holder' style={{ width: props.width, height: props.height}} /> :  <span>{props.children}</span>}
    </div>
  )
}
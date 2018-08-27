import React from 'react';

export default (props) => {
  return (
    <div className='search-input'>
      <input type="text" placeholder={props.placeHolder} onChange={props.onSearchChange} onKeyPress={ e => { if (e.key === 'Enter') { props.onEnter() }}}/>
    </div>
  )
}
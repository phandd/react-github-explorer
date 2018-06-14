import React from 'react';
import ReactMarkdown from 'react-markdown'

export default (props) => {
  return(
    <div className='readme-markdown-body'>
      <ReactMarkdown source={props.readme}/>
    </div>
  )
};
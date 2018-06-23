import React from 'react';
import ReactMarkdown from 'react-markdown'
import NoData from '../../NoData/NoData';


export default (props) => {
  return(
    props.readme ?
    <div className='readme-markdown-body'>
      <ReactMarkdown source={props.readme}/>
    </div> : <NoData />
  )
};
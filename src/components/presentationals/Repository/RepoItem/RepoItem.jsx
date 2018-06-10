import React from 'react';
import { Link } from 'react-router-dom';
import RepoContent from '../RepoContent/RepoContent';

export default (props) => {
  return(
    <div className='repo-item'>
      <Link to={`/user/${props.owner.login}/repos/${props.name}`}/>
      <RepoContent {...props}/>
    </div>
  )
}
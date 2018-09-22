import React from 'react';
import { Link } from 'react-router-dom';
import RepoContent from '../RepoContent/RepoContent';

export default (props) => {
  return(
    <div className='repo-item'>
      <Link to={{
        pathname: `${process.env.PUBLIC_URL}/user/${props.owner.login}/repos/${props.name}`,
        state: { repo: props }
      }}/>
      <RepoContent {...props}/>
    </div>
  )
}
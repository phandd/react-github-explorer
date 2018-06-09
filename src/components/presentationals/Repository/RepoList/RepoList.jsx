import React from 'react';
import RepoItem from '../RepoItem/RepoItem';

export default (props) => {
  const repoItems = props.repos.map(repo => <RepoItem key={repo.id} repo={repo}/>);
  return(
    <div>
      {repoItems}
    </div>
  )
}
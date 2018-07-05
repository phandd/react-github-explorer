import React from 'react';
import RepoItem from '../RepoItem/RepoItem';
import NoData from '../../NoData/NoData';

export default (props) => {
  const repoItems = Array.isArray(props.repos) && props.repos.map(repo => <RepoItem key={repo.id} {...repo}/>);
  return(
    (repoItems && repoItems.length) ?
    <div>
      {repoItems}
    </div> : <NoData/>
  )
}
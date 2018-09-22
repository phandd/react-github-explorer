import React from 'react';
import UserItem from '../../UserListItem/UserListItem';
import NoData from '../../NoData/NoData';

export default (props) => {
  var contributorItems = Array.isArray(props.contributors) && props.contributors.map(contributor => <UserItem avatarUrl={contributor.avatar_url} name={contributor.login} login={contributor.login} additional={contributor.contributions + (contributor.contributions === 1 ? ' contribution' : ' contributions')} key={contributor.login}/>);

  return(
    contributorItems && contributorItems.length ?
    <div className='repo-contributors'>
      {contributorItems}
    </div> : <NoData />
  )
}
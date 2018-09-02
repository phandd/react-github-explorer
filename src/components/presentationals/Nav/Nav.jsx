import React from 'react';
import SearchInput from '../SearchInput/SearchInput';
import UserItem from '../UserListItem/UserListItem';
import { LOAD_STATUS } from '../../../utils/load-status';
import Offline from '../Offline/Offline';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

export default (props) => {
  let renderedItem;

  if (props.loadStatus === LOAD_STATUS.done) {
    renderedItem = Array.isArray(props.users) && props.users.map(user => <UserItem key={user.login} avatarUrl={`https://avatars.githubusercontent.com/u/${user.id.split('-')[1]}`} name={user.name || user.login} additional={user.login} login={user.login} onUserClick={props.onUserClick}/>)
  }

  if (props.loadStatus === LOAD_STATUS.fail) {
    renderedItem = <Offline onRetry={props.searchUser}/>
  }

  if (props.loadStatus === LOAD_STATUS.loading) {
    renderedItem = <div className='searching-spinner'><LoadingSpinner /></div>
  }

  return (
    <div className='nav-menu'>
      <div className='user-search'>
        <SearchInput placeHolder='Search user by username...' onSearchChange={props.onSearchQueryChanged} onEnter={props.onSearchUser}/>
        <div className='user-search-button' onClick={props.onSearchUser}>
          <i className='fa fa-search'></i>
        </div>
      </div>
      <div className='user-list'>
        {renderedItem}
      </div>
    </div>
  )
}
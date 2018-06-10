import React from 'react';
import UserPage from './UserPage/UserPage'
import { ROUTES } from '../../utils/routes';
import { Route } from 'react-router-dom';
import Header from '../presentationals/Header/Header';
import Footer from '../presentationals/Footer/Footer'
import UserRepoList from './UserRepoList/UserRepoList';
import UserRepoDetail from './UserRepoDetail/UserRepoDetail';

export default class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div>
        <Header/>
        <Route path={ROUTES.HOME_PATH} exact component={UserPage}/>
        <Route path={ROUTES.USER_DETAIL} exact component={UserPage}/>
        <Route path={ROUTES.USER_REPOS_LIST} exact component={UserRepoList}/>
        <Route path={ROUTES.REPO_DETAIL} component={UserRepoDetail}/>
        <Footer/>
      </div>
    )
  }
}
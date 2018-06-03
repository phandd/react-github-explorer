import React from 'react';
import UserPage from './UserPage/UserPage'
import { ROUTES } from '../../utils/routes';
import { Route } from 'react-router-dom';
import Header from '../presentationals/Header/Header';
import Footer from '../presentationals/Footer/Footer'

export default class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div>
        <Header/>
        <Route path={ROUTES.USER_DETAIL} exact component={UserPage}/>
        <Footer/>
      </div>
      //<Route path={ROUTE.USER_REPOS_LIST} component={UserReposList}/>
      //<Route path={ROUTE.REPO_DETAIL} component={RepoDetail}/>
    )
  }
}
import React from 'react';
import UserPage from './UserPage/UserPage'
import NavMenu from './NavMenu/NavMenu'
import { ROUTES } from '../../utils/routes';
import { Route } from 'react-router-dom';
import Header from '../presentationals/Header/Header';
import Footer from '../presentationals/Footer/Footer'
import UserRepoList from './UserRepoList/UserRepoList';
import UserRepoDetail from './UserRepoDetail/UserRepoDetail';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      navbarToggle: false
    };
    this.toggleNavbar = this.toggleNavbar.bind(this);
  }

  toggleNavbar() {
    this.setState((prevState) => {
      return { navbarToggle: !prevState.navbarToggle };
    })
  }

  render() {
    return(
      <div className={ 'container ' + (this.state.navbarToggle ? 'navbar-on' : 'navbar-off') }>
        <div className='nav'>
          <NavMenu onUserClick={this.toggleNavbar}/>
        </div>
        <div className='site'>
          <div className={ this.state.navbarToggle ? 'site-overlay' : '' } onClick={this.toggleNavbar}/>
          <Header onToggleNavbar={this.toggleNavbar}/>
          <div className='site-content'>
            <Route path={ROUTES.HOME_PATH} exact component={UserPage}/>
            <Route path={ROUTES.USER_DETAIL} exact component={UserPage}/>
            <Route path={ROUTES.USER_REPOS_LIST} exact component={UserRepoList}/>
            <Route path={ROUTES.REPO_DETAIL} component={UserRepoDetail}/>
          </div>
          <Footer/>
        </div>
      </div>
    )
  }
}
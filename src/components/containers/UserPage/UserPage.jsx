import React from 'react'
import { factory } from '../../../data-factory/data-factory';
import ProfileOverview from '../../presentationals/Profile/ProfileOverview/ProfileOverview'

export default class UserPage extends React.Component{
  constructor() {
    super();
    this.state = {
      profile: {}
    }
  }
  render() {
    return (
      <div>
        <div className='profile-overview'>
          <ProfileOverview profile={this.state.profile}/>
        </div>
      </div>
    );
  };
  componentDidMount() {
    factory.getRandomUser()
      .then(user => factory.getUserProfile(user.login))
      .then(profile => {console.log(profile);this.setState({ profile })})
  }
}
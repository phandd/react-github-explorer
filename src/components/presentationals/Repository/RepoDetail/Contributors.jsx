import React from 'react';
import Contributor from './Contributor';
import NoData from '../../NoData/NoData';


export default (props) => {
  var contributorItems = Array.isArray(props.contributors) && props.contributors.map(contributor => <Contributor {...contributor} key={contributor.id}/>);

  return(
    contributorItems ?
    <div className='repo-contributors'>
      {contributorItems}
    </div> : <NoData />
  )
}
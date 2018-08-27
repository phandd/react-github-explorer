import React from 'react';
import GithubColors from 'github-colors';

const DEFAULT_LANGUAGE_COLOR = '#CCC';

export default (props) => {
  const color = GithubColors.get(props.name) && GithubColors.get(props.name).color;

  return(
    <div className='repo-language'>
      <div className='repo-language-color' style={{ backgroundColor: color ? color : DEFAULT_LANGUAGE_COLOR }}></div>
      <div className='repo-language-detail'>
        <span>{props.name}</span>
        <span>{props.percentage} %</span>
      </div>
    </div>
  )
}
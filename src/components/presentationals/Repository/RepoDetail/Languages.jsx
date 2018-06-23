import React from 'react';
import Language from './Language';


export default (props) => {
  const languageList = [];
  let totalLanguagesUsage = 0;

  for (var lang in props.languages) {
    totalLanguagesUsage += props.languages[lang];
    languageList.push({ name: lang, usage: props.languages[lang] });
  }
  const languageItems = languageList.map(language => <Language name={language.name} percentage={(language.usage / totalLanguagesUsage * 100).toFixed(2)} key={language.name}/> );

  return(
    <div className='repo-languages'>
      {languageItems}
    </div>
  )
}
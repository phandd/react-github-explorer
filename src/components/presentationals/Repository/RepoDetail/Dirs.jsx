import React from 'react';
import File from './File';
import Folder from './Folder';

const DIR_ITEM_TYPE = {
  folder: 'dir',
  file: 'file'
};

export default (props) => {
  const sortFn = (a, b) => {
    if (a.type === DIR_ITEM_TYPE.folder && b.type === DIR_ITEM_TYPE.file) {
      return -1;
    }
    if (a.type === DIR_ITEM_TYPE.file && b.type === DIR_ITEM_TYPE.folder) {
      return 1;
    }

    return 0;
  };


  const dirItems = props.dirs
    .sort(sortFn)
    .map(item => {
      if (item.type === DIR_ITEM_TYPE.folder) {
        return <Folder name={item.name} key={item.sha}/>
      } else {
        return <File name={item.name} size={item.size} key={item.sha}/>
      }
    });

  return(
    <div className='repo-dir'>
      {dirItems}
    </div>
  )
}
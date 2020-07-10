import React from 'react';

import CollectionItem from '../CollectionItem';

import './PreviewCollection.styles.scss';

const PreviewCollection = ({ title, items }) => {
  return (
    <div className='preview-collection'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <div className='preview'>
        {items
          .filter((item, i) => i < 4)
          .map(({ id, ...otherItemProps }) => (
            <CollectionItem key={id} {...otherItemProps} />
          ))}
      </div>
    </div>
  );
};

export default PreviewCollection;

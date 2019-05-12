import { Category } from '@cytoai/types';
import ReactDOM from 'react-dom';
import * as React from 'react';

import CategoryDropTarget from './CategoryDropTarget';

it('CategoryDropTarget', () => {
  const category: Category = {
    color: '#F44336',
    description: 'example',
    identifier: '11111111-1111-1111-1111-11111111111',
    index: 1,
    visible: true
  };

  const updateImageCategory = () => {};

  const e = (
    <CategoryDropTarget
      category={category}
      updateImageCategory={updateImageCategory}
    >
      <div />
    </CategoryDropTarget>
  );

  ReactDOM.render(e, document.createElement('div'));
});
import React from 'react';
import Video from './routers/Video';

import './index.less';

export default [
  {
    path: '/video',
    exact: true, 
    component: Video,
  }
];
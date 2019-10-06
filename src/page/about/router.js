import React from 'react';
import About from './routers/About';

import './index.less';

export default [
  {
    path: '/about',
    exact: true, 
    component: About,
  },
];
import React from 'react';
import Index from './routers/Index';

import './index.less';

export default [
  {
    path: '/',
    exact: true, 
    component: Index,
  }
];
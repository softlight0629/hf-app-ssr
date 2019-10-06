import React from 'react';
import Company from './routers/Company';

import './index.less';

export default [
  {
    path: '/company',
    exact: true, 
    component: Company,
  },
];
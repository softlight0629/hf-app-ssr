import React from 'react';
import Product from './routers/Product';
import ProductDetail from './routers/ProductDetail';
import ProductCategory from './routers/ProductCategory';

import './index.less';

export default [
  {
    path: '/product',
    exact: true, 
    component: Product,
  },
  {
    path: '/product/:category',
    exact: true, 
    component: ProductCategory,
  },
  {
    path: '/product/:category/:productId',
    component: ProductDetail,
  },
];
import React, { Component } from 'react';
import ProductLayout from '../layout/ProductLayout';
import ProductCard from '../component/ProductCard';
import productStore from '../store/product';

class Product extends Component {

  render() {
    const allProducts = productStore.getAllProducts();

    return (
      <ProductLayout>
        <div className="product-card-set">
          <div className="product-card-list">
            {
              allProducts.map(product => <ProductCard product={product}/>)
            }
          </div>
        </div>
      </ProductLayout>
    )
  }
}

export default Product;
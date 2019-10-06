import React, { Component } from 'react';
import ProductLayout from '../layout/ProductLayout';
import ProductCard from '../component/ProductCard';
import productStore from '../store/product';

class ProductCategory extends Component {

  render() {
    const { match } = this.props;
    const { category } = match.params;
    const products = productStore.getProductsByCategory(category);

    return (
      <ProductLayout>
        <div className="product-card-set">
          <div className="product-card-list">
            {
              products.map(product => <ProductCard product={product}/>)
            }
          </div>
        </div>
      </ProductLayout>
    )
  }
}

export default ProductCategory;
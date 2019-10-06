import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './ProductCard.less';

class ProductCard extends Component {


  render() {
    const { product } = this.props;

    return (
      <div className="product-card">
        <Link to={`/product/${product.category}/${product.id}`}>
          <div className="img-wrapper">
            <img className="product-img" src={product.pic} alt="" />
          </div>
          <div className="product-info">
            <div className="title">{product.title}</div>
          </div>
        </Link>
      </div>
    )
  }
}

export default ProductCard;
import React, { Component } from 'react';
import { Layout, Menu, Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import ProductLayout from '../layout/ProductLayout';
import productStore from '../store/product';


class ProductDetail extends Component {


  render() {
    const { match } = this.props;
    const { category, productId } = match.params;

    console.log(category, productId, 'xx');

    const product = productStore.getProductByCategoryAndId(category, parseInt(productId));
    const prevProduct = productStore.getPrevProduct(parseInt(productId));
    const nextProduct = productStore.getNextProduct(parseInt(productId));
    const recommendProducts = productStore.getRecommendProducts();

    return (
      <ProductLayout>
        <div className="product-detail">
          <div className="product-title">
            <h3>{product.title}</h3>
          </div>
          <div className="product-pic">
            <div className="product-pic-inner">
              <img src={product.pic} alt="" />
            </div>
          </div>
          {
            product.spec && (
              <div className="product-spec">
                <div className="spec-form">
                  <div className="spec-form-item">
                    <label>功率：</label>
                    <span>{product.spec.power}</span>
                  </div>
                  <div className="spec-form-item">
                    <label>转速：</label>
                    <span>{product.spec.rotate}</span>
                  </div>
                  <div className="spec-form-item">
                    <label>产量：</label>
                    <span>{product.spec.produce}</span>
                  </div>
                  <div className="spec-form-item">
                    <label>重量：</label>
                    <span>{product.spec.weight}</span>
                  </div>
                  <div className="spec-form-item">
                    <label>轧辊对数：</label>
                    <span>{product.spec.pair}</span>
                  </div>
                  <div className="spec-form-item">
                    <label>总功率：</label>
                    <span>{product.spec.sum}</span>
                  </div>
                </div>
              </div>
            )
          }

          <div className="product-nav">
            <div className="product-nav-pre">
              <span>上一个产品：</span>
              <Link to={`/product/${prevProduct.category}/${prevProduct.id}`}>{prevProduct.title}</Link>
            </div>
            <div className="product-nav-next">
              <span>下一个产品：</span>
              <Link to={`/product/${nextProduct.category}/${nextProduct.id}`}>{nextProduct.title}</Link>
            </div>
          </div>

          <div className="product-recommend-nav">
            <div className="product-recommend-nav-title">
              <h3>相关产品</h3>
            </div>
            <div className="product-recommend-list">
            {
              recommendProducts.map(product => (
                <div className="product-recommend-list-item">
                  <div className="product-recommend">
                    <Link to={`/product/${product.category}/${product.id}`}>
                      <div className="product-pic">
                        <img src={product.pic} alt="" />
                      </div>
                      <div className="product-info">
                        <span>{product.title}</span>
                      </div>
                    </Link>
                  </div>
                </div>
              ))
            }
            </div>
          </div>
        </div>
      </ProductLayout>
    )
  }
}

export default ProductDetail;
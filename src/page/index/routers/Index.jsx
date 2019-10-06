import React, { Component } from 'react';
import { Carousel, Row, Col } from 'antd';
import DefaultLayout from '../../../component/DefaultLayout';

function onChange() {}

class Index extends Component {

  render() {

    return (
      <DefaultLayout>
        <div className="top-banner">
          <Carousel afterChange={onChange}>
            <a href="https://veromoda.tmall.com/shop/view_shop.htm?ali_trackid=30_b40d01eb9ac003b8c5d972870b9c1254&spm=875.7931836/B.2016006.d4">
              <div className="banner-pic-container">
                <img className="banner-pic" src="https://img.alicdn.com/simba/img/TB1MoVcQH2pK1RjSZFsSuuNlXXa.jpg"></img>
              </div>
            </a>
            <a href="https://veromoda.tmall.com/shop/view_shop.htm?ali_trackid=30_b40d01eb9ac003b8c5d972870b9c1254&spm=875.7931836/B.2016006.d4">
              <div className="banner-pic-container">
                <img className="banner-pic" src="https://img.alicdn.com/tps/i4/TB1Mif8bwFY.1VjSZFnSuwFHXXa.jpg"></img>
              </div>
            </a>
            <a href="https://veromoda.tmall.com/shop/view_shop.htm?ali_trackid=30_b40d01eb9ac003b8c5d972870b9c1254&spm=875.7931836/B.2016006.d4">
              <div className="banner-pic-container">
                <img className="banner-pic" src="https://img.alicdn.com/imgextra/i3/91/O1CN01pUGXqf1CXibTS4rHb_!!91-0-luban.jpg_q100.jpg_.webp"></img>
              </div>
            </a>
          </Carousel>
        </div>
        <div className="business-summary">
          <div className="business-summary-container">
            <Row>
              <Col span={8}>
                <div className="business-block">
                  <div className="business-icon">
                  </div>
                  <div className="business-title">
                    粉丝机
                <span className="more">了解详情>></span>
                  </div>
                  <div className="business-desc">国内领先的粉丝机生产设备</div>
                </div>
              </Col>
              <Col span={8}>
                <div className="business-block">
                  <div className="business-icon">
                  </div>
                  <div className="business-title">
                    熟化机
              <span className="more">了解详情>></span>
                  </div>
                  <div className="business-desc">国内领先的粉丝机生产设备</div>
                </div>
              </Col>
              <Col span={8}>
                <div className="business-block">
                  <div className="business-icon">
                  </div>
                  <div className="business-title">
                    粉碎机
              <span className="more">了解详情>></span>
                  </div>
                  <div className="business-desc">国内领先的粉丝机生产设备</div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
        <div className="feature-summary">
          <div className="feature-block">
            <div className="feature-block-container">
              <Row>
                <Col span={12}>
                  <div className="feature-left">
                    <img src="https://www.yunpian.com/static/official/images/newIndex/feature1.png?version=b1c866f534e1dff6d7936d60dbd43105" />
                  </div>
                </Col>
                <Col span={12}>
                  <div className="feature-right">
                    <div className="feature-desc">数百条短信直连通道，无中间环节，和运营商一样的到达率</div>
                    <div className="feature-desc">短信分流转发系统，避免各省运营商对外地限流造成的失败</div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
          <div className="feature-block">
            <div className="feature-block-container">
              <Row>
                <Col span={12}>
                  <div className="feature-left">
                    <img src="https://www.yunpian.com/static/official/images/newIndex/feature1.png?version=b1c866f534e1dff6d7936d60dbd43105" />
                  </div>
                </Col>
                <Col span={12}>
                  <div className="feature-right">
                    <div className="feature-desc">数百条短信直连通道，无中间环节，和运营商一样的到达率</div>
                    <div className="feature-desc">短信分流转发系统，避免各省运营商对外地限流造成的失败</div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
          <div className="feature-block">
            <div className="feature-block-container">
              <Row>
                <Col span={12}>
                  <div className="feature-left">
                    <img src="https://www.yunpian.com/static/official/images/newIndex/feature1.png?version=b1c866f534e1dff6d7936d60dbd43105" />
                  </div>
                </Col>
                <Col span={12}>
                  <div className="feature-right">
                    <div className="feature-desc">数百条短信直连通道，无中间环节，和运营商一样的到达率</div>
                    <div className="feature-desc">短信分流转发系统，避免各省运营商对外地限流造成的失败</div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </DefaultLayout>
    )
  }
}

export default Index;
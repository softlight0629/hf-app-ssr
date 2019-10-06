import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { Map, Marker } from 'react-amap'
import DefaultLayout from '../../../component/DefaultLayout';

const pos = { longitude: 120.6024100000, latitude: 27.9449300000 };

class About extends Component {


  render() {

    return (
      <DefaultLayout>
        <div className="about">
          <div className="about-us">
            <Row>
              <Col span={12}>
                <div className="about-us-pics">
                </div>
              </Col>
              <Col span={12}>
                <div className="about-us-intro">
                  <div className="about-us-title">客户第一</div>
                  <div className="about-us-info">
                    云片已成为国内国际短信、语音等领域的行业领跑者，月发短信10亿+条，年销售额过亿。技术稳定可靠，客户服务和技术支持及时迅速，能快速解决客户问题，获得客户一致好评。
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                <div className="about-us-intro">
                  <div className="about-us-title">客户第一</div>
                  <div className="about-us-info">
                    云片已成为国内国际短信、语音等领域的行业领跑者，月发短信10亿+条，年销售额过亿。技术稳定可靠，客户服务和技术支持及时迅速，能快速解决客户问题，获得客户一致好评。
                  </div>
                </div>
              </Col>
              <Col span={12}>
                <div className="about-us-pics">
                </div>
              </Col>
            </Row>
          </div>
          <div className="about-contact">
            <Row>
              <Col span={14}>
                <div className="about-contact-form">
                  <div className="about-contact-form-item">
                    <label>联系人：</label>
                    <span>郭键毅 张崇慧 郭海滨</span>
                  </div>
                  <div className="about-contact-form-item">
                    <label>电话：</label>
                    <span>0577-86361187</span>
                  </div>
                  <div className="about-contact-form-item">
                    <label>传真：</label>
                    <span>0577-86368899</span>
                  </div>
                  <div className="about-contact-form-item">
                    <label>手机：</label>
                    <span>13858847388 13857776677 13868844844</span>
                  </div>
                  <div className="about-contact-form-item">
                    <label>QQ：</label>
                    <span>1061098050</span>
                  </div>
                  <div className="about-contact-form-item">
                    <label>邮箱：</label>
                    <span>jueni998@hotmail.com</span>
                  </div>
                  <div className="about-contact-form-item">
                    <label>地址：</label>
                    <span>浙江省温州市瓯海区娄桥街道南汇路85号（综合楼第一层西首）</span>
                  </div>
                </div>
              </Col>
              <Col span={10}>
                <div className="about-contact-wx">
                  <h3>关注微信</h3>
                  <div className="about-contact-wx-img">
                    <img src="http://www.wzhefeng.cn/template/style02/sj_contact.jpg" alt=""/>
                  </div>
                </div>
              </Col>
            </Row>

          </div>
          <div className="about-location">
            <div style={{ width: 1280, height: 450 }}>
              <Map center={pos} zoom={16}>
                <Marker position={pos} />
              </Map>
            </div>
          </div>
        </div>
      </DefaultLayout>
    )
  }
}

export default About;
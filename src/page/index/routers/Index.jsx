import React, { Component } from 'react';
import { Carousel, Row, Col, Modal } from 'antd';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';
import DefaultLayout from '../../../component/DefaultLayout';

function onChange() {}

class Index extends Component {

  constructor(props) {
    super(props);

    this.state = {
      video: false,
    }
  }
 
  showVideo() {
    this.setState({
      video: true,
    })
  }

  hideVideo() {
    this.setState({
      video: false,
    });
  }

  render() {

    return (
      <DefaultLayout>
        <div className="top-banner">
          <Carousel afterChange={onChange}>
              <Link to={"/video"}>
                <div className="banner-pic-container">
                  <img className="banner-pic" src="/pic/banner/banner.jpg"></img>
                </div>
              </Link>
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
        <Modal
          title="观看视频"
          visible={this.state.video}
          onCancel={() => this.hideVideo()}
          width={800}
          footer={null}
          header={null}
        >
          <ReactPlayer width="100%" height="100%" url='https://apd-966faa7e9e0c8085463a6e7527c6f31b.v.smtcdns.com/vhot2.qqvideo.tc.qq.com/AbKARFdgyxfB5pQuo2GJmxRzN2uLt1AfiXCqj89lrlWc/uwMROfz2r5zIIaQXGdGnC2dfJ7wFnocHIQhYHck9TxbRMoti/i0927vzyvrd.p712.1.mp4?sdtfrom=v1010&guid=e38a595d6f17f9ca7c080b8f218fc703&vkey=EAC741F6DC2341A8EB5442B5E1EE3EEF395DC4A4BDAC163ABC5F1E567A36E2AEA712A664F9EDC359A657F5310191035E4A672B6175CBCB5991E304236B6AD6FFF62E65584EED6201CD397E508B6C68D012469E210CD32C9ADDA9551E73D59E68CC1B386B7B1245A0A874581B9AE1AA6F51C61A67B4A294BDA53033505B94AC09' playing />
        </Modal>
      </DefaultLayout>
    )
  }
}

export default Index;
import React, { Component } from 'react';
import { Carousel, Row, Col, Modal } from 'antd';
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
        <div className="video-container">
          <ReactPlayer width="100%" height="100%" url='https://apd-966faa7e9e0c8085463a6e7527c6f31b.v.smtcdns.com/vhot2.qqvideo.tc.qq.com/AbKARFdgyxfB5pQuo2GJmxRzN2uLt1AfiXCqj89lrlWc/uwMROfz2r5zIIaQXGdGnC2dfJ7wFnocHIQhYHck9TxbRMoti/i0927vzyvrd.p712.1.mp4?sdtfrom=v1010&guid=e38a595d6f17f9ca7c080b8f218fc703&vkey=EAC741F6DC2341A8EB5442B5E1EE3EEF395DC4A4BDAC163ABC5F1E567A36E2AEA712A664F9EDC359A657F5310191035E4A672B6175CBCB5991E304236B6AD6FFF62E65584EED6201CD397E508B6C68D012469E210CD32C9ADDA9551E73D59E68CC1B386B7B1245A0A874581B9AE1AA6F51C61A67B4A294BDA53033505B94AC09' playing />
        </div>
      </DefaultLayout>
    )
  }
}

export default Index;
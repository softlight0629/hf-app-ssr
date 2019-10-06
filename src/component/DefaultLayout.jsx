import React, { Component } from 'react';
import { Layout, Menu, Row, Col } from 'antd';
import { Link } from 'react-router-dom';
const { Header, Content, Footer } = Layout;
const { SubMenu } = Menu;

class DefaultLayout extends Component {


  render() {

    return (
      <Layout>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px', marginRight: '24px' }}
          >
            <Menu.Item key="1">
              <Link to="/">首页</Link></Menu.Item>
            <SubMenu
              title={<Link to="/product">产品</Link>}
            >
              <Menu.Item>
                <Link to="/product/fsj145">粉丝机</Link></Menu.Item>
              <Menu.Item>
                <Link to="/product/fsj">粉碎机</Link>
              </Menu.Item>
              <Menu.Item>
              <Link to="/product/blj">拌料机</Link></Menu.Item>
              <Menu.Item>
              <Link to="/product/shj">熟化机</Link></Menu.Item>
              <Menu.Item>
              <Link to="/product/csj">搓丝机</Link></Menu.Item>
              <Menu.Item>
              <Link to="/product/qdj">切断机</Link></Menu.Item>
              <Menu.Item>
              <Link to="/product/fj">附件</Link></Menu.Item>
            </SubMenu>
            <Menu.Item key="3">解决方案</Menu.Item>
            <Menu.Item key="4">定价咨询</Menu.Item>
            <Menu.Item key="5">
              <Link to="/company">公司简介</Link>
            </Menu.Item>
            <Menu.Item key="6">
              <Link to="/about">联系我们</Link></Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px', marginTop: 64 }}>
          {this.props.children}
        </Content>
        <Footer style={{ textAlign: 'center' }} theme="dark">
          <div className="footer-container">
            <div className="footer-columns">
              <Row>
                <Col span={6}>
                  <div className="footer-column">
                    <h2>产品列表</h2>
                    <div className="footer-item">
                      <Link to="/product/fsj145">粉丝机</Link>
                    </div>
                    <div className="footer-item">
                      <Link to="/product/fsj">粉碎机</Link>
                    </div>
                    <div className="footer-item">
                      <Link to="/product/blj">拌料机</Link>
                    </div>
                    <div className="footer-item">
                      <Link to="/product/shj">熟化机</Link>
                    </div>
                    <div className="footer-item">
                      <Link to="/product/csj">搓丝机</Link>
                    </div>
                    <div className="footer-item">
                      <Link to="/product/fj">附件</Link>
                    </div>
                  </div>
                </Col>
                <Col span={6}>
                  <div className="footer-column">
                    <h2>服务</h2>
                    <div className="footer-item">
                      <a href="">使用手册</a>
                    </div>
                    <div className="footer-item">
                      <a href="">常见问题</a>
                    </div>
                    <div className="footer-item">
                      <a href="">定价详情</a>
                    </div>
                    <div className="footer-item">
                      <a href="">合作伙伴</a>
                    </div>
                    <div className="footer-item">
                      <a href="">公众号</a>
                    </div>
                  </div>
                </Col>
                <Col span={6}>
                  <div className="footer-column">
                    <h2>关于我们</h2>
                    <div className="footer-item">
                      <span>联系我们</span>
                    </div>
                    <div className="footer-item">
                      <span>电话：0577-86361187</span>
                    </div>
                    <div className="footer-item">
                      <span>邮箱：jueni998@hotmail.com</span>
                    </div>
                  </div>
                </Col>
                <Col span={6}>
                  <div className="footer-column">
                    <h2>关注微信</h2>
                    <div className="footer-item">
                      <img width={100} src="http://www.wzhefeng.cn/template/style02/sj_contact.jpg" />
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </Footer>
      </Layout>
    )
  }
}

export default DefaultLayout;
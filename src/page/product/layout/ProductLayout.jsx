import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import DefaultLayout from '../../../component/DefaultLayout';

const { Sider, Content } = Layout;

class ProductLayout extends Component {


  render() {

    return (
      <DefaultLayout>
      <Layout>
        <Sider
          style={{
            overflow: 'auto',
            height: '100vh',
            background: '#fff',
          }}
        >
          <Menu  mode="inline" style={{ height: '100%'}}>
            <Menu.Item key="1">
              <Link to="/product/fsj145">
                <span>145型粉丝机</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/product/fsj160">
              <span>160型粉丝机</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/product/fsj165">
              <span>165型粉丝机</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="4">
              <Link to="/product/fsj180">
              <span>180型粉丝机</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="5">
              <Link to="/product/fsj187">
              <span>187型粉丝机</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="6">
              <Link to="/product/blj">
              <span>拌料机</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="7">
              <Link to="/product/fsj">
              <span>粉碎机</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="8">
              <Link to="/product/shj">
              <span>熟化机</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="9">
              <Link to="/product/csj">
              <span>搓丝机</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="10">
              <Link to="/product/qdj">
              <span>切断机</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="11">
              <Link to="/product/fj">
              <span>附件</span>
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Content>
          <div className="product-content">
            { this.props.children }
          </div>
        </Content>
      </Layout>
    </DefaultLayout>
    )
  }
}

export default ProductLayout;
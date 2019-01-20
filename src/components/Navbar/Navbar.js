'use-strict';

import React from 'react';
import { Row, Col, Menu, Icon } from 'antd';

class Navbar extends React.Component {
  state = {
    current: 'notification',
  }

  handleClick = (e) => {
    this.setState({
      current: e.key,
    });
  }

  render() {
    return (
      <div style={{'backgroundColor': 'white'}}>
        <Row align='bottom'>
          <Col span={3}>
            <h1>Whether</h1>
            <a href="http://lockness.github.io/whether" target="_blank" rel="noopener noreferrer"></a>
          </Col>
          <Col xs={{ span: 8, offset: 13 }} lg={{ span: 3, offset: 18 }}>
            <Menu
              onClick={this.handleClick}
              selectedKeys={[this.state.current]}
              mode="horizontal"
            >
              <Menu.Item key="notification">
                <Icon type="notification" />
              </Menu.Item>
              <Menu.SubMenu
                title={<span className="submenu-title-wrapper"><Icon type="setting" /></span>}
              >
                <Menu.ItemGroup title="Profile">
                  <Menu.Item key="setting:1">Option 1</Menu.Item>
                  <Menu.Item key="setting:2">Option 2</Menu.Item>
                </Menu.ItemGroup>
                <Menu.ItemGroup title="User Settings">
                  <Menu.Item key="setting:3">Option 3</Menu.Item>
                  <Menu.Item key="setting:4">Option 4</Menu.Item>
                </Menu.ItemGroup>
              </Menu.SubMenu>
            </Menu>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Navbar;

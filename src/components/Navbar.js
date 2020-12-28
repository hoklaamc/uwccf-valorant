import React from 'react';
import { Col, Layout, Menu, Row } from 'antd';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const { Header } = Layout;
  const location = useLocation();

  return (
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <div className="logo" />
      <Row>
        <Col span={7} />
        <Col span={10}>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={[location.pathname]}
          >
            <Menu.Item key="/">
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="/rules">
              <Link to="/rules">Rules</Link>
            </Menu.Item>
            <Menu.Item key="/teams">
              <Link to="/teams">Teams</Link>
            </Menu.Item>
            {/* <Menu.Item key="bracket">
          <Link to="/bracket">Bracket</Link>
        </Menu.Item> */}
          </Menu>
        </Col>
        <Col span={7} />
      </Row>
    </Header>
  );
}

export default Navbar;

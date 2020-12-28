import React from 'react';
import { Col, Row, Typography } from 'antd';

function Gamespage() {
  const { Title } = Typography;
  return (
    <Row>
      <Col md={{ span: 10, offset: 7 }} span={24}>
        <Title>Games</Title>
      </Col>
    </Row>
  );
}

export default Gamespage;

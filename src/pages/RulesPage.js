import React from 'react';
import { Col, Row, Typography } from 'antd';

function RulesPage() {
  const { Paragraph, Text, Title } = Typography;
  return (
    <Row>
      <Col md={{ span: 10, offset: 7 }} span={24}>
        <Paragraph>
          The goal of this tournament is for friends and friends of friends to
          come together and enjoy a chill time of gaming together.
        </Paragraph>
        <Paragraph>
          As such, this tournament is intended to be <Text strong>casual</Text>.
        </Paragraph>
        <Title>Rules</Title>
        <Paragraph>
          These rules are a work in progress. Once the teams have been finalized
          they will be updated with bracket information.
        </Paragraph>
        <ul>
          <li>Teams can have at most 2 diamond + players</li>
          <li>Message Hok to request a reschedule</li>
        </ul>
      </Col>
    </Row>
  );
}

export default RulesPage;

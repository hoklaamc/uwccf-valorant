import React from 'react';
import { Col, Row, Typography } from 'antd';
import { PlayerCard } from '../components';
import { teams } from '../data';

function TeamsPage() {
  const { Title, Text } = Typography;
  return (
    <Row>
      <Col md={{ span: 12, offset: 6 }} span={24}>
        <Title>Teams</Title>
        {teams.map(team => (
          <div style={{ marginBottom: '16px' }}>
            <Title level={2}>{team.name}</Title>
            <Text>
              {team.wins} wins | {team.losses} losses
            </Text>
            <Row gutter={24}>
              {team.players.map(player => (
                <Col md={8} span={12}>
                  <PlayerCard player={player} />
                </Col>
              ))}
            </Row>
          </div>
        ))}
      </Col>
    </Row>
  );
}

export default TeamsPage;

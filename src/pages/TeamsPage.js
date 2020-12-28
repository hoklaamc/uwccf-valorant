import React from 'react';
import { Col, Row, Typography } from 'antd';
import { PlayerCard } from '../components';
import { teams } from '../data';

function TeamsPage() {
  const { Title } = Typography;
  return (
    <Row>
      <Col span={6} />
      <Col span={12}>
        <Title>Teams</Title>
        {teams.map(team => (
          <div style={{ marginBottom: '16px' }}>
            <Title level={2}>{team.name}</Title>
            <Row gutter={24}>
              {team.players.map(player => (
                <Col span={8}>
                  <PlayerCard player={player} />
                </Col>
              ))}
            </Row>
          </div>
        ))}
      </Col>
      <Col span={6} />
    </Row>
  );
}

export default TeamsPage;

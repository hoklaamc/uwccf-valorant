import React from 'react';
import { Card, Col, Row, Statistic } from 'antd';

function PlayerCard({ player }) {
  return (
    <Card title={player.name} size="small">
      <Row gutter={8}>
        <Col span={12}>
          <Statistic
            title="ACS"
            value={player.acs}
            valueStyle={{ fontSize: '10px' }}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="K/D/A"
            value={`${player.kills}/${player.deaths}/${player.assists}`}
            valueStyle={{ fontSize: '10px' }}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="KD"
            value={
              player.deaths === 0 ? 0 : (player.kills / player.deaths).toFixed()
            }
            valueStyle={{ fontSize: '10px' }}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="ECON"
            value={player.econ}
            valueStyle={{ fontSize: '10px' }}
          />
        </Col>
      </Row>
    </Card>
  );
}

export default PlayerCard;

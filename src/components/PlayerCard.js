import React from 'react';
import { Card, Col, Row, Statistic, Tooltip } from 'antd';

function PlayerCard({ player }) {
  const acsText =
    'Average Combat Score: Calculated from damage, kills, multikills, assists and round scores. The higher the better.';
  const kdaText = 'Kills/Deaths/Assists';
  const kdText = 'Kill/Death ratio';
  const econText =
    'Economy rating: Calculated as damage dealt per 1000 credits spent. Higher value = higher economic efficiency.';
  return (
    <Card title={player.name} size="small">
      <Row gutter={8}>
        <Col span={12}>
          <Tooltip title={acsText}>
            <Statistic
              title="ACS"
              value={player.acs}
              valueStyle={{ fontSize: '10px' }}
            />
          </Tooltip>
        </Col>
        <Col span={12}>
          <Tooltip title={kdaText}>
            <Statistic
              title="K/D/A"
              value={`${player.kills}/${player.deaths}/${player.assists}`}
              valueStyle={{ fontSize: '10px' }}
            />
          </Tooltip>
        </Col>
        <Col span={12}>
          <Tooltip title={kdText}>
            <Statistic
              title="KD"
              value={
                player.deaths === 0
                  ? 0
                  : (player.kills / player.deaths).toFixed()
              }
              valueStyle={{ fontSize: '10px' }}
            />
          </Tooltip>
        </Col>
        <Col span={12}>
          <Tooltip title={econText}>
            <Statistic
              title="ECON"
              value={player.econ}
              valueStyle={{ fontSize: '10px' }}
            />
          </Tooltip>
        </Col>
      </Row>
    </Card>
  );
}

export default PlayerCard;

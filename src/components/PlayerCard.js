import React from 'react';
import { Card, Col, Row, Statistic, Tooltip } from 'antd';
import mean from 'lodash/mean';
import sum from 'lodash/sum';
import { games } from '../data';

function PlayerCard({ player }) {
  const acsText =
    'Average Combat Score: Calculated from damage, kills, multikills, assists and round scores. The higher the better.';
  const kdaText = 'Kills/Deaths/Assists';
  const kdText = 'Kill/Death ratio';
  const econText =
    'Economy rating: Calculated as damage dealt per 1000 credits spent. Higher value = higher economic efficiency.';

  const getAllStats = stat => {
    let stats = [];
    games.forEach(game => {
      game.maps.forEach(map => {
        if (map.team1Stats) {
          map.team1Stats.forEach(mapPlayer => {
            if (mapPlayer.name === player.name) {
              stats.push(mapPlayer[stat]);
            }
          });
        }
        if (map.team2Stats) {
          map.team2Stats.forEach(mapPlayer => {
            if (mapPlayer.name === player.name) {
              stats.push(mapPlayer[stat]);
            }
          });
        }
      });
    });
    return stats;
  };
  const getAverage = stat => {
    let stats = getAllStats(stat);
    return mean(stats);
  };

  const getSum = stat => {
    let stats = getAllStats(stat);
    return sum(stats);
  };

  return (
    <Card title={player.name} size="small">
      <Row gutter={8}>
        <Col span={12}>
          <Tooltip title={acsText}>
            <Statistic
              title="ACS"
              value={getAverage('acs')}
              valueStyle={{ fontSize: '10px' }}
            />
          </Tooltip>
        </Col>
        <Col span={12}>
          <Tooltip title={kdaText}>
            <Statistic
              title="K/D/A"
              value={`${getSum('kills')}/${getSum('deaths')}/${getSum(
                'assists',
              )}`}
              valueStyle={{ fontSize: '10px' }}
            />
          </Tooltip>
        </Col>
        <Col span={12}>
          <Tooltip title={kdText}>
            <Statistic
              title="KD"
              value={(getSum('kills') / getSum('deaths')).toFixed(2)}
              valueStyle={{ fontSize: '10px' }}
            />
          </Tooltip>
        </Col>
        <Col span={12}>
          <Tooltip title={econText}>
            <Statistic
              title="ECON"
              value={getAverage('econ')}
              valueStyle={{ fontSize: '10px' }}
            />
          </Tooltip>
        </Col>
      </Row>
    </Card>
  );
}

export default PlayerCard;

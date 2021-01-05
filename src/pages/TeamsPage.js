import React from 'react';
import { Col, Row, Typography } from 'antd';
import { PlayerCard } from '../components';
import sumBy from 'lodash/sumBy';
import { teams, games } from '../data';

function TeamsPage() {
  const { Title, Text } = Typography;

  const getGamesPlayed = team =>
    sumBy(games, game =>
      Number(
        (game.team1 === team.name || game.team2 === team.name) &&
          game.result !== null,
      ),
    );

  return (
    <Row>
      <Col md={{ span: 12, offset: 6 }} span={24}>
        <Title>Teams</Title>
        {teams.map(team => (
          <div style={{ marginBottom: '16px' }}>
            <Title level={2}>{team.name}</Title>
            <Text>Games played: {getGamesPlayed(team)}</Text>
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

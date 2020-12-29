import React from 'react';
import { Col, Row, Table, Typography } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitch } from '@fortawesome/free-brands-svg-icons';
import { games } from '../data';

function Gamespage() {
  const { Title } = Typography;
  const { Column } = Table;

  const renderTeam = (team, record) => {
    return record.tentative ? <i style={{ color: 'grey' }}>{team}</i> : team;
  };
  return (
    <Row>
      <Col md={{ span: 14, offset: 5 }} span={24}>
        <Title>Games</Title>
        <Table dataSource={games} pagination={false}>
          <Column title="Game" dataIndex="game" key="game" />
          <Column title="Date/time" dataIndex="datetime" key="datetime" />
          <Column
            title="Team 1"
            dataIndex="team1"
            key="team1"
            render={renderTeam}
          />
          <Column title="Result" dataIndex="result" key="result" />
          <Column
            title="Team 2"
            dataIndex="team2"
            key="team2"
            render={renderTeam}
          />
          <Column
            title="Stream/VOD"
            dataIndex="vod"
            key="vod"
            render={vod =>
              vod ? (
                <a href={vod} target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faTwitch} />
                </a>
              ) : null
            }
          />
        </Table>
      </Col>
    </Row>
  );
}

export default Gamespage;
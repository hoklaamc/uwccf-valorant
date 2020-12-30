import React from 'react';
import { Col, Image, Row, Table, Typography } from 'antd';
import { useParams } from 'react-router-dom';
import { games } from '../data';
import * as agentIcons from '../assets/agent_icons';

function GamePage() {
  const { id } = useParams();
  const { Paragraph, Title } = Typography;
  const { Column } = Table;

  const game = games.find(g => g.key === id.toString());

  const columns = (
    <>
      <Column
        title={game.team1}
        dataIndex="name"
        key="name"
        render={(recordName, record) => (
          <>
            <Image
              src={agentIcons[`${record.agent}Icon`]}
              style={{ paddingRight: '4px' }}
            />
            {recordName}
          </>
        )}
      />
      <Column title="Kills" dataIndex="kills" key="kills" />
      <Column title="Deaths" dataIndex="deaths" key="deaths" />
      <Column title="Assists" dataIndex="assists" key="assists" />
      <Column title="ACS" dataIndex="acs" key="acs" />
      <Column title="ECON" dataIndex="econ" key="econ" />
    </>
  );

  return (
    <Row>
      <Col md={{ span: 16, offset: 4 }} span={24}>
        <Title>
          {game.team1} {game.score || 'vs'} {game.team2}
        </Title>
        <Paragraph>{game.game}</Paragraph>
        <Paragraph>{game.datetime}</Paragraph>
        {game.maps.map(mapStats => (
          <div key={mapStats.map}>
            <Title>Map: {mapStats.map}</Title>
            <Table dataSource={mapStats.team1Stats} pagination={false}>
              {columns}
            </Table>
            <Table dataSource={mapStats.team2Stats} pagination={false}>
              {columns}
            </Table>
          </div>
        ))}
      </Col>
    </Row>
  );
}

export default GamePage;

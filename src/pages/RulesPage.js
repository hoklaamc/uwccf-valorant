import React from 'react';
import { Col, Row, Typography } from 'antd';
import { Link } from 'react-router-dom';

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
          As such, the rules and format of this tournament are designed to be
          <Text strong> casual</Text>.
        </Paragraph>
        <Title>Format</Title>
        <ul>
          <li>
            Double elimination format. Lose two and you're out. See the{' '}
            <Link to="/bracket">bracket</Link>
          </li>
          <li>
            All games are best of 1, except for the grand finals, which is a
            best of 3.
          </li>
          <li>
            Grand finals map bans:
            <ol>
              <li>Upper bracket winner bans a map.</li>
              <li>
                Upper bracket winner picks a map. This will be the first map.
              </li>
              <li>
                Lower bracket winner picks a map. This will be the second map.
              </li>
              <li>
                Upper bracket winner picks a map. This will be the third map, if
                needed.
              </li>
            </ol>
          </li>
        </ul>
        <Title>Rules</Title>
        <ul>
          <li>Teams can have at most 2 diamond + players</li>
          <li>
            We're trying to finish this tournament by Jan 10, as school starts
            on Jan 11 for many. Schedule is packed!
          </li>
          <li>
            Message me (Hok) to request a reschedule. I'll see what I can do.
          </li>
          <li>
            If you need a sub for a game, feel free to do so. If you need help
            finding one message me (Hok).
          </li>
          <li>Last but not least, HAVE FUN!!</li>
        </ul>
      </Col>
    </Row>
  );
}

export default RulesPage;

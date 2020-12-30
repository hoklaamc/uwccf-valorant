import './pages.css';
import React from 'react';
import { Col, Image, Row, Typography } from 'antd';
import { Stream } from '../components';

function HomePage() {
  const { Title, Paragraph } = Typography;
  return (
    <>
      <div className="home-content">
        <Image
          src="https://img.icons8.com/plasticine/2x/valorant.png"
          alt="Valorant logo"
          preview={false}
        />
        <Title>UWCCF Valorant</Title>
        <Paragraph>Dec 28 2020 - Jan 10 2021</Paragraph>
        <Paragraph strong>
          A for-fun Valorant tournament with those in the UWCCF community and
          friends!
        </Paragraph>
        {/* <Button
        type="primary"
        size="large"
        href="https://forms.gle/KpF5yikaPrdhvUef7"
        target="_blank"
        style={{ display: 'inline-block' }}
      >
        Sign up
      </Button>
      <Paragraph>Deadline 11:59pm EST, Sunday Dec 27 2020</Paragraph> */}
      </div>
      <Row>
        <Col lg={{ span: 16, offset: 4 }} span={24}>
          <Stream />
        </Col>
      </Row>
    </>
  );
}

export default HomePage;

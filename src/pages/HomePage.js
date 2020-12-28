import './pages.css';
import React from 'react';
import { Typography } from 'antd';

function HomePage() {
  const { Title, Paragraph } = Typography;
  return (
    <div className="home-content">
      <Title>UWCCF Valorant</Title>
      <Paragraph>Dec 28 2020 - Jan 10 2021</Paragraph>
      <Paragraph strong>
        A for-fun Valorant tournament with those in the UWCCF community and
        friends!
      </Paragraph>
    </div>
  );
}

export default HomePage;

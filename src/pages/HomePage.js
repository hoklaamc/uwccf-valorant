import './pages.css';
import React from 'react';
import { Button, Image, Typography } from 'antd';

function HomePage() {
  const { Title, Paragraph } = Typography;
  return (
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
      <Button
        type="primary"
        size="large"
        href="https://forms.gle/KpF5yikaPrdhvUef7"
      >
        Sign up (Deadline 11:59pm EST, Sunday Dec 27 2020)
      </Button>
    </div>
  );
}

export default HomePage;

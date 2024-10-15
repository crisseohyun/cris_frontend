import React from 'react';
import { Card, Text, Container } from '@nextui-org/react';

interface BannerProps {
  year: string;
  message: string;
  verse: string;
}

const Banner: React.FC<BannerProps> = ({ year, message, verse }) => (
  <Container>
    <Card css={{ 
      background: '$gradient',
      padding: '$10',
      textAlign: 'center'
    }}>
      <Card.Body>
        <Text h2 color="white">{year}</Text>
        <Text h3 color="white" css={{ marginTop: '$5' }}>{message}</Text>
        <Text color="white" css={{ marginTop: '$3', fontStyle: 'italic' }}>{verse}</Text>
      </Card.Body>
    </Card>
  </Container>
);

export default Banner;
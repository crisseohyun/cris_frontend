import React from 'react';
import { Card, Button, Text, Grid, Container } from '@nextui-org/react';
import { GoArrowRight, GoArrowLeft } from "react-icons/go";

interface GalleryImage {
  src: string;
  alt: string;
  week: string;
  time: string;
}

interface GalleryProps {
  images: GalleryImage[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => (
  <Container css={{ position: 'relative', overflow: 'hidden' }}>
    <Button 
      light
      auto
      icon={<GoArrowLeft size={24} />}
      css={{ 
        position: 'absolute', 
        left: '$4', 
        top: '50%', 
        transform: 'translateY(-50%)', 
        zIndex: 10,
        bg: '$background',
        opacity: 0.7,
        '&:hover': { opacity: 1 }
      }}
    />
    
    <Grid.Container gap={2} wrap="nowrap" css={{ overflowX: 'auto', py: '$8', px: '$12' }}>
      {images.map((image, index) => (
        <Grid key={index} css={{ minWidth: '320px' }}>
          <Card>
            <Card.Image
              src={image.src}
              alt={image.alt}
              objectFit="cover"
              width="100%"
              height={180}
            />
            <Card.Footer
              isBlurred
              css={{
                position: "absolute",
                bgBlur: "#000a",
                borderTop: "$borderWeights$light solid $gray800",
                bottom: 0,
                zIndex: 1,
              }}
            >
              <Grid.Container>
                <Grid xs={12}>
                  <Text color="white" size="$lg" weight="bold">{image.week}</Text>
                </Grid>
                <Grid xs={12}>
                  <Text color="white" size="$sm">{image.time}</Text>
                </Grid>
              </Grid.Container>
            </Card.Footer>
            <Card.Footer css={{ position: 'absolute', bottom: 0, right: 0, zIndex: 2 }}>
              <Button size="sm" color="primary">더보기</Button>
            </Card.Footer>
          </Card>
        </Grid>
      ))}
    </Grid.Container>
    
    <Button 
      light
      auto
      icon={<GoArrowRight size={24} />}
      css={{ 
        position: 'absolute', 
        right: '$4', 
        top: '50%', 
        transform: 'translateY(-50%)', 
        zIndex: 10,
        bg: '$background',
        opacity: 0.7,
        '&:hover': { opacity: 1 }
      }}
    />
  </Container>
);

export default Gallery;
import React from 'react';
import { Avatar, Card, Text, Grid, Button } from '@nextui-org/react';

interface ProfileProps {
  imageUrl: string;
  name: string;
  role: string;
}

const ProfileNavigation: React.FC<{ profiles: ProfileProps[] }> = ({ profiles }) => (
  <Card variant="flat" css={{ py: '$4', px: '$6' }}>
    <Card.Body css={{ overflow: 'auto' }}>
      <Grid.Container gap={2} wrap="nowrap">
        {profiles.map((profile, index) => (
          <Grid key={index} css={{ minWidth: '100px', textAlign: 'center' }}>
            <Avatar
              src={profile.imageUrl}
              size="xl"
              bordered
              color="primary"
              css={{ mb: '$2' }}
            />
            <Text size="sm" weight="bold" css={{ mb: '$1' }}>{profile.name}</Text>
            <Text size="xs" color="$accents7">{profile.role}</Text>
          </Grid>
        ))}
        <Grid css={{ minWidth: '100px', textAlign: 'center' }}>
          <Button 
            light 
            auto 
            rounded 
            icon={<Text size="$2xl">+</Text>}
            css={{ size: '$20', mb: '$2' }}
          />
          <Text size="xs">추가</Text>
        </Grid>
      </Grid.Container>
    </Card.Body>
  </Card>
);

export default ProfileNavigation;
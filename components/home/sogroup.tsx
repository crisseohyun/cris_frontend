import React from 'react';
import { Card, Avatar, Text, Grid, Button } from '@nextui-org/react';
import { GoArrowRight, GoArrowLeft } from "react-icons/go";

interface GroupProps {
  id: string;
  name: string;
  imageUrl: string;
  role?: string;
}

const GroupNavigation: React.FC<{ groups: GroupProps[] }> = ({ groups }) => (
  <Card variant="flat" css={{ py: '$8', px: '$8', position: 'relative' }}>
    <Button 
      light 
      auto 
      icon={<GoArrowLeft size={32} />} 
      css={{ position: 'absolute', left: '$4', top: '50%', transform: 'translateY(-50%)', zIndex: 1 }}
    />
    
    <Grid.Container gap={2} justify="center" wrap="nowrap" css={{ overflowX: 'auto' }}>
      {groups.map((group) => (
        <Grid key={group.id} css={{ minWidth: '160px', textAlign: 'center' }}>
          <Avatar
            src={group.imageUrl}
            css={{ size: '$36', mb: '$4' }}
            bordered
            color="primary"
          />
          <Text b size="$lg">{group.name}</Text>
          {group.role && <Text size="$sm" color="$accents7">{group.role}</Text>}
        </Grid>
      ))}
    </Grid.Container>
    
    <Button 
      light 
      auto 
      icon={<GoArrowRight size={32} />} 
      css={{ position: 'absolute', right: '$4', top: '50%', transform: 'translateY(-50%)', zIndex: 1 }}
    />
  </Card>
);

export default GroupNavigation;
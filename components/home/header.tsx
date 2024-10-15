import React from 'react';
import { Navbar, Text, Button, Container, Spacer } from '@nextui-org/react';
import { FiMenu, FiSettings } from 'react-icons/fi';

interface HeaderProps {
  churchName: string;
  denomination: string;
}

const Header: React.FC<HeaderProps> = ({ churchName, denomination }) => (
  <Navbar variant="static">
    <Container fluid display="flex" alignItems="center" justify="space-between">
      <Navbar.Content>
        <Button light auto icon={<FiMenu size={24} />} />
        <Spacer x={0.5} />
        <Button light auto icon={<FiSettings size={24} />} />
      </Navbar.Content>

      <Navbar.Brand css={{ flexDirection: 'column', alignItems: 'center' }}>
        <Text h1 size="$3xl" weight="bold">
          {churchName}
        </Text>
        <Text size="$sm" color="$accents7">
          {denomination}
        </Text>
      </Navbar.Brand>

      <Navbar.Content>
        <Button auto light rounded color="primary" css={{ px: '$8' }}>
          정수연
        </Button>
      </Navbar.Content>
    </Container>
  </Navbar>
);

export default Header;
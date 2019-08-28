import React from 'react';
import { Segment, Header, Icon } from 'semantic-ui-react';

const HeroBar = props => {
  return (
    <Segment>
      <Header as='h1' icon textAlign='center'>
        <Icon name='cogs' />
        <Header.Content>{props.children}</Header.Content>
      </Header>
    </Segment>
  );
};

export default HeroBar;

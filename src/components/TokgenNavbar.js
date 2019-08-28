import React from 'react';
import { Menu } from 'semantic-ui-react';

const TokgenNavbar = props => {
  return (
    <Menu pointing secondary>
      <Menu.Item name='home' active={props.currentPath === '/'} />
      <Menu.Item name='enter-data' avtive={props.currentPath === '/data'} />
    </Menu>
  );
};

export default TokgenNavbar;

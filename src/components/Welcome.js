import { Button, Jumbotron } from 'bootstrap';
import React from 'react';

const Welcome = () => {
  return (
    <Jumbotron>
      <h1>Create an Identifier!</h1>
      <p>It doesn't do anything useful, but it sure looks nice.</p>
      <Button variant='primary'>Onwards</Button>
    </Jumbotron>
  );
};

export default Welcome;

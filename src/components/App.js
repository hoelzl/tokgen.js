import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import TokgenNavbar from './TokgenNavbar';
import Home from './Home';
import DataForm from './DataForm';

class App extends React.Component {
  state = { currentPath: '/data' };

  setPath = newPath => {
    this.setState({ currentPath: newPath });
  };

  render() {
    return (
      <Router>
        <Container text>
          <TokgenNavbar active={this.state.currentPath} />
          <Route exact path='/' render={props => <Home path='/' />} />
          <Route path='/data' render={props => <DataForm path='/data' />} />
        </Container>
      </Router>
    );
  }
}

export default App;

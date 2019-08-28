import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "semantic-ui-react";
import TokgenNavbar from "./TokgenNavbar";
import Home from "./Home";
import DataForm from "./DataForm";
import ThankYou from "./ThankYou";

class App extends React.Component {
  state = { currentToken: undefined };

  setToken = newToken => {
    setTimeout(() => this.setState({ currentToken: newToken }), 1000);
  };

  clearToken = () => {
    this.setState({ currentToken: undefined });
  };

  render() {
    return (
      <Router>
        <Container text>
          <TokgenNavbar />
          <Route exact path="/" render={props => <Home />} />
          <Route
            path="/data"
            render={props => <DataForm onNewToken={this.setToken} />}
          />
          <Route
            path="/token"
            render={props => (
              <ThankYou
                token={this.state.currentToken}
                clearToken={this.clearToken}
              />
            )}
          />
        </Container>
      </Router>
    );
  }
}

export default App;

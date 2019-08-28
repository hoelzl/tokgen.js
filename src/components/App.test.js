import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { shallow } from 'enzyme';
import App from './App';
import Home from './Home';
import DataForm from './DataForm';

describe('<App />', () => {
  it('is a Router', () => {
    expect(shallow(<App />).type()).toBe(Router);
  });
});

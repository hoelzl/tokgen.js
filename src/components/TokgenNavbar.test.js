import React from 'react';
import { shallow } from 'enzyme';
import TokgenNavbar from './TokgenNavbar';

describe('<TokgenNavbar />', () => {
  it('renders without crashing', () => {
    shallow(<TokgenNavbar />);
  });
});

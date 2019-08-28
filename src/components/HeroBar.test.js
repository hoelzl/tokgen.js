import React from 'react';
import { shallow, mount } from 'enzyme';
import { Header, Segment } from 'semantic-ui-react';
import HeroBar from './HeroBar';

describe('<HeroBar>', () => {
  it('renders without crashing', () => {
    shallow(<HeroBar />);
  });

  it('is a Semantic-UI Segment', () => {
    const wrapper = shallow(<HeroBar />);
    expect(wrapper.type()).toBe(Segment);
  });

  it('has a Semantic-UI Header as first child', () => {
    const wrapper = shallow(<HeroBar />);
    expect(wrapper.childAt(0).type()).toBe(Header);
  });

  it('displays its children inside the Semantic-UI Header.Content component', () => {
    const children = 'THE CHILDREN';
    const wrapper = shallow(<HeroBar>{children}</HeroBar>);

    expect(wrapper).toContainReact(<Header.Content>{children}</Header.Content>);
  });
});

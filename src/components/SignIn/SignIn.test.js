import React from 'react';
import { shallow } from 'enzyme';
import SignIn from './SignIn';

describe('SignIn', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<SignIn />);
  });
  it('mounts succesfully', () => {
    expect(wrapper.length).toBe(1);
  });
  it('renders a button', () => {
    const container = wrapper.find('div');
    const button = container.find('button');
    expect(button).toHaveLength(1);
  });
});

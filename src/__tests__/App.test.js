import React from 'react';
import { shallow } from 'enzyme';
import App from '../../src/App';
describe('hello', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
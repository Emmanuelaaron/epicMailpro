import React from 'react';
import { shallow } from 'enzyme';
import InboxComponent from '../components/inbox/index.js';
describe('<InboxComponent />', () => {
  const props = {
    record: {
      body: 'sleek',
    },
  };
  it('it should render component without fail', () => {
    const wrapper = shallow(<InboxComponent {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
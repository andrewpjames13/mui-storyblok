import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import MuiListItemSecondaryAction from './MuiListItemSecondaryAction';

function setup() {
  const props = {
    content: [{
      component: 'MuiIconButtonRedirect',
      iconButton: [{
        component: 'MuiIconButton',
        icon: [{
          component: 'MuiIcon',
          iconName: 'star',
        }],
      }],
    }],
  };
  const comp = shallow(<MuiListItemSecondaryAction {...props} />);
  return { comp, props };
}

describe('<MuiListItemSecondaryAction />', () => {
  it('renders MuiListItemSecondaryAction', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  test('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create(<MuiListItemSecondaryAction {...props} />);
    expect(tree).toMatchSnapshot();
  });
});

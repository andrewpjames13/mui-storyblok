import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import MuiListItem from './MuiListItem';

function setup() {
  const props = {
    listItemAvatar: [{
      component: 'MuiListItemAvatar',
      content: [{
        component: 'MuiIcon',
        iconName: 'android',
      }],
    }],

    listItemIcon: [{
      component: 'MuiListItemIcon',
      content: [{
        component: 'MuiIcon',
        iconName: 'android',
      }],
    }],

    listItemText: [{
      component: 'MuiListItemText',
      primary: 'primary',
    }],

    listItemSecondaryAction: [{
      component: 'MuiListItemSecondaryAction',
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
    }],
  };
  const comp = shallow(<MuiListItem {...props} />);
  return { comp, props };
}

describe('<MuiListItem />', () => {
  it('renders MuiListItem', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  test('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create(<MuiListItem {...props} />);
    expect(tree).toMatchSnapshot();
  });
});

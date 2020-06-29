import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import MuiCard from './MuiCard';

function setup() {
  const props = {
    content: [{
      component: 'MuiCardActions',
      content: [{
        component: 'MuiButtonRedirect',
        redirectRoute: 'page-welcome',
        button: [{
          component: 'MuiButton',
          buttonText: 'buttonText',
        }],
      }],
    }, {
      component: 'MuiCardContent',
      content: [{
        component: 'MuiTypography',
        content: [{
          component: 'MuiText',
          text: 'text',
        }],
      }],
    }, {
      component: 'MuiCardHeader',
      title: 'title',
    }, {
      component: 'MuiCardMedia',
      alt: 'alt',
      title: 'title',
      image: 'img.com',
    }],
  };
  const comp = shallow(<MuiCard {...props} />);
  return { comp, props };
}

describe('<MuiCard />', () => {
  it('renders MuiCard', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  test('snapshot', () => {
    const { props } = setup();

    const tree = renderer.create(<MuiCard {...props} />);
    expect(tree).toMatchSnapshot();
  });
});

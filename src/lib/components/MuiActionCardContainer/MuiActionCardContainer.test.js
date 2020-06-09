import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import renderer from 'react-test-renderer';
import { MuiActionCardContainer } from './MuiActionCardContainer';

function setup() {
  const props = {
    menuName: [{
      component: 'MuiTypography',
      content: [{
        component: 'MuiText',
        text: 'Action Card Menu',
      }],
    }],
    height: '100px',
    width: '100px',
    actionCards: [{
      component: 'MuiActionCard',
      header: [{
        component: 'MuiTypography',
        content: [{
          component: 'MuiText',
          text: 'Card Header',
        }],
      }],
      icon: [{
        component: 'MuiIcon',
        iconName: 'star',
      }],
      text: [{
        component: 'MuiTypography',
        content: [{
          component: 'MuiText',
          text: 'Action card body test',
        }],
      }],
      redirectRoute: '/page-welcome',
      history: {
        push: jest.fn(),
      },
    }],
  };
  const comp = mount(<MuiActionCardContainer {...props} />);
  return { comp, props };
}

let container;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

global.document.createRange = () => ({
  setStart: () => {},
  setEnd: () => {},
  commonAncestorContainer: {
    nodeName: 'BODY',
    ownerDocument: document,
  },
});

describe('<MuiActionCardContainer />', () => {
  it('renders MuiActionCardContainer', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  test('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create(
      <MemoryRouter>
        <MuiActionCardContainer {...props} />
      </MemoryRouter>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('should handleToggle and set open to close and close to open', () => {
    const { props } = setup();
    act(() => {
      ReactDOM.render(<MuiActionCardContainer {...props} />, container);
    });

    const btn = container.querySelector('button');
    act(() => {
      btn.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    expect(container.innerHTML.includes('Action card body test')).toEqual(true);
  });
});

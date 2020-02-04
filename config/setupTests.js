// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
// import '@testing-library/jest-dom/extend-expect';

import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {darkSky} from '../src/services';

configure({ adapter: new Adapter() });

const mockNoop = () => Promise.resolve({});
// Notice how `create` was not being mocked here...

module.exports = {
  get: () => mockNoop()
};

jest.mock('axios', () => {
  const response = {
    data: {
      timezone: 'Africa/Nairobi',
      currently: {
        icon: 'rain',
        temperature: 66.54,
        time: 1580450525,
        summary: 'Mostly cloudy'
      }
    }
  };
  return {
    create: () => ({
      get: () => Promise.resolve(response)
    })
  };
});

global.shallow = shallow;
global.mount = mount;

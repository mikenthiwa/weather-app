import React from 'react';
import Forecast from '../forecast';

describe('Forecast Component', () => {
  const props = {
    weatherReport: {
      daily: {
        data: [
          {
            time: 1580418000,
            icon: 'rain',
            summary: 'Rain throughout the day.'
          },
          {
            time: 1580418000,
            icon: 'partly-cloudy-day',
            summary: 'Rain throughout the day.'
          }
        ]
      }
    }
  };

  const emptyProps = {
    weatherReport: {}
  };
  let component;

  beforeAll(() => {
    component = mount(<Forecast {...props}/>);
  });

  it('should render forecast component', () => {
    expect(component.find('.day-cont').length).toEqual(2);
  });
  it('should test week button is called',  () => {
    const wrapper = mount(<Forecast {...props} />)
    window.location.reload = jest.fn();
    wrapper.find('Button').simulate('click');
    expect( window.location.reload).toHaveBeenCalled();
  });

  it('should render Loader when api is down', () => {
    const wrapper = mount(<Forecast {...emptyProps}/>);
    expect(wrapper.find('Puff').length).toEqual(1);
  });
});

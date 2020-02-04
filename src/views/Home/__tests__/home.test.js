import React from 'react';
import Home from '../index';
import {selectedDayWeather} from '../../../services/weather';

describe('Home', () => {
  let component;
  beforeAll(() => {
    component = mount(<Home />);
  });

  it('should render home component', function () {
    expect(component.find('.home').length).toEqual(1);
  });

  xit('should test check weather', async () => {
    const checkWeather = component.instance().checkWeather;
    // const mockCheckWeather = jest.fn(checkWeather(1582146000));
    const response = { data: {
      currently: {
        icon: 'rain',
        temperature: 66.61,
        time: 1580450525,
      }
    }};
    const checkWeatherFunction = jest.fn(component.instance().checkWeather);

  });
});

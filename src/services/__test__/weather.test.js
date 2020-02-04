import axios from 'axios';
import WeatherService, {selectedDayWeather} from '../weather';

jest.mock('axios');

describe('Fetch data', () => {
  it('should fetch data successfully', async() => {
    const response = {
      data: {
        currently: {
          icon: 'rain',
          temperature: 66.54,
          time: 1580450525,
          summary: 'Mostly cloudy'
        }
      }
    };
    const data = await WeatherService();
    expect(data.currently.icon).toEqual('rain');
  });
});


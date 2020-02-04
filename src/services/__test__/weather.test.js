import axios from 'axios';
import WeatherService, {selectedDayWeather} from '../weather';

jest.mock('axios');

describe('Fetch data', () => {
  it('should fetch data successfully', async() => {
    const data = await WeatherService();
    expect(data.currently.icon).toEqual('rain');
  });
});


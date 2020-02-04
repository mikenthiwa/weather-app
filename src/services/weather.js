import {darkSky} from './index';

const exclude = 'minutely,hourly,alerts,flag';
const latLong = '-1.28333,36.81667';

export default async() => {
  try {
    const { data } = await darkSky.get(`${latLong}?exclude=${exclude}`);
    console.log('This is becoming', data)
    return data;
  }catch (error) {
    return error;
  }
};

export const selectedDayWeather = async selectedDate => {
  try {
    const { data: {currently: {icon, temperature, time, summary}}} = await darkSky.get(`${latLong},${selectedDate}?exclude=${exclude}`);
    return {icon, temperature, time, summary};
  } catch(error) {
    return error;
  }
};

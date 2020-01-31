import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();
const baseURL = process.env.REACT_APP_DARK_SKY_API;

export const darkSky = axios.create({
  baseURL,
  headers: {
    'Access-Control-Allow-Headers': true,
    mode: 'no-cors',
  },
  mode: 'no-cors'
});

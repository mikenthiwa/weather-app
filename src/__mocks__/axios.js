import { baseURL } from '../services/index';

export const darkSky = {
  get: () => Promise.resolve(() => ({ data: {}})),
};


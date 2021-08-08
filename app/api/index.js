import axios from 'axios';

export const API = axios.create({
  baseURL: 'https://610d239448beae001747b701.mockapi.io/api/v1',
  responseType: 'json',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    // Authorization: `Bearer ${token}`,
  },
});

export const fetchOrderFromAPI = (endpoint) => {
  return API.get(endpoint)
    .then((response) => {
      if (response.status == 200 || response.status == 201) {
        return { data: response.data };
      }
      return { error: response.status };
    })
    .catch((error) => ({ error }));
};

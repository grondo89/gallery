import axios from 'axios';
import {API_KEY} from '../../assets/constants';

export const getPhotos = async () => {
  try {
    const userRawData = (
      await axios.get(
        `https://api.thecatapi.com/v1/images/search?limit=30&api_key=${API_KEY}`,
      )
    ).data;
    return userRawData;
  } catch (error) {
    console.log(' API Request Error', error);
    return error;
  }
};

export const getAllPosts = () => {
  return axios.get(`https://jsonplaceholder.typicode.com/users/`);
};

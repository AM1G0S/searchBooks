import axios from 'axios';
import { PATH } from '../constants/paths';
import { setErrorObject } from '../store/actions';
import { useAppDispatch } from '../store/hooks';

const API_URL = PATH.API_URL;

axios.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    return response;
  },
  function (error) {
    const dispatch = useAppDispatch();
    if (error.response.data.statusCode >= 400) {
      const errorObject = { title: error.name, description: error.message };

      dispatch(setErrorObject(errorObject));
    }
  }
);

export const getVolumesByTerms = async (searchString: string, searchOptions: string) => {
  return await axios
    .get(`${API_URL}?q=${searchString}${searchOptions}&maxResults=30`)
    .then((res) => {
      return res.data;
    });
};

export const getVolumeById = async (id: string, apiKey: string) => {
  return await axios.get(`${API_URL}/${id}?key=${apiKey}`).then((res) => {
    return res.data;
  });
};

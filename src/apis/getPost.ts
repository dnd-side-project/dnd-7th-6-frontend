import axios from 'axios';
import {Config} from 'react-native-config';

const getPost = async () => {
  const url = `${Config.API_SERVER}/api/v1/post/1`;
  const result = await axios.get(url);
  return result.data;
};

export default getPost;

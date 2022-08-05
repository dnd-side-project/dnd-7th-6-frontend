import axios from 'axios';
import {Config} from 'react-native-config';

const getSearchedLocation = async (searchingWord: string) => {
  console.log(Config.KAKAO_API_KEY);
  if (!searchingWord) {
    return;
  }
  const url = `https://dapi.kakao.com/v2/local/search/keyword.json?query=${searchingWord}`;
  const result = await axios.get(url, {
    headers: {
      Authorization: Config.KAKAO_API_KEY,
    },
  });
  return result.data;
};

export default getSearchedLocation;

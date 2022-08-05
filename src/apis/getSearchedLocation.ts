import axios from 'axios';

const getSearchedLocation = async (searchingWord: string) => {
  if (!searchingWord) {
    return;
  }
  const url = `https://dapi.kakao.com/v2/local/search/keyword.json?query=${searchingWord}`;
  const result = await axios.get(url, {
    headers: {
      Authorization: 'KakaoAK 4096554163c79bc576c3b9bf225e3d04',
    },
  });
  return result.data;
};

export default getSearchedLocation;

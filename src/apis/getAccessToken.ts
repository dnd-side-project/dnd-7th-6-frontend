import axios from 'axios';

import getApiServer from 'src/utils/getApiServer';

const getAccessToken = async (refreshToken: string) => {
  const url = `${getApiServer}/api/v1/user/token/refresh`;
  const response = await axios.get(url, {headers: {'refresh-token': refreshToken}});
  return response.headers['access-token'];
};

export default getAccessToken;

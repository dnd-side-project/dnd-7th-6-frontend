import axios from 'axios';

import getApiServer from 'src/utils/getApiServer';

const getUserInfo = async () => {
  const url = `${getApiServer}/api/v1/user`;
  const response = await axios.get(url);
  return response.data;
};
export default getUserInfo;

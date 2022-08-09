import axios from 'axios';

import getApiServer from 'src/utils/getApiServer';
const getPhotoBoothFilter = async () => {
  const url = `${getApiServer}/api/v1/photo-booth/filter`;
  return await axios.get(url).catch(error => {
    console.error(JSON.stringify(error));
  });
};
export default getPhotoBoothFilter;

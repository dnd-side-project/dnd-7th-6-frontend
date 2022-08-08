import axios from 'axios';

import getApiServer from 'src/utils/getApiServer';
interface RequestParams {
  latitude: number;
  longitude: number;
  distance: number;
}
const getPhotoBoothLocation = async ({latitude, longitude, distance}: RequestParams) => {
  const url = `${getApiServer}/api/v1/photo-booth/near-by?latitude=${latitude}&longitude=${longitude}&distance=${distance}&status=ACTIVE`;
  return await axios.get(url).catch(error => {
    console.error(JSON.stringify(error));
  });
};
export default getPhotoBoothLocation;

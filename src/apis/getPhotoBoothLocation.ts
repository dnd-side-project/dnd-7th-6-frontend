import AxiosInstance from 'src/components/utils/Interceptor';
import getApiServer from 'src/utils/getApiServer';
interface RequestParams {
  latitude: number;
  longitude: number;
  distance: number;
}
const getPhotoBoothLocation = async ({latitude, longitude, distance}: RequestParams) => {
  const url = `${getApiServer}/api/v1/photo-booth/near-by?latitude=${latitude}&longitude=${longitude}&distance=${distance}&status=ACTIVE`;
  return await AxiosInstance.get(url).catch(error => {
    console.error(JSON.stringify(error));
  });
};
export default getPhotoBoothLocation;
